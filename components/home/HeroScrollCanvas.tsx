"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import type { Group, Material } from "three";
import { useReducedMotion } from "framer-motion";
import type { MotionValue } from "framer-motion";
import type { ScenePhase } from "@/lib/scene-phase";
import { SCENE_ORDER } from "@/lib/scene-phase";
import {
  AboutScene3D,
  ContactScene3D,
  PortfolioScene3D,
  ServicesScene3D,
} from "@/components/home/SectionScenes3D";
import {
  NarrativeDirectionsScene3D,
  NarrativePhoneScene3D,
  NarrativeSearchScene3D,
} from "@/components/home/NarrativeScenes3D";

const ACCENT = "#2563eb";

const INITIAL_WEIGHTS: Record<ScenePhase, number> = {
  hero: 1,
  search: 0,
  phone: 0,
  directions: 0,
  portfolio: 0,
  services: 0,
  about: 0,
  contact: 0,
};

const CAM_OTHER: Record<Exclude<ScenePhase, "hero">, [number, number, number]> = {
  search: [0.18, 0.1, 5.25],
  phone: [-0.1, 0.06, 4.95],
  directions: [0.12, 0.14, 5.35],
  portfolio: [0, 0.04, 7.2],
  services: [0, 0.16, 5.45],
  about: [0, 0.08, 4.85],
  contact: [0, 0.04, 5.15],
};

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function smoothstep(edge0: number, edge1: number, x: number) {
  const t = Math.min(1, Math.max(0, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

/**
 * Fades all meshes in a group (including GLBs that mount after Suspense resolves).
 */
function useOpacityBinding(groupRef: React.RefObject<Group>) {
  const setGroupOpacity = (multiplier: number) => {
    const g = groupRef.current;
    if (!g) return;
    g.traverse((o) => {
      if (o instanceof THREE.Mesh) {
        const mats = Array.isArray(o.material) ? o.material : [o.material];
        mats.forEach((mat) => {
          if (mat && "opacity" in mat) {
            const m = mat as Material & { userData: { opacityBase?: number } };
            if (m.userData.opacityBase === undefined) {
              m.userData.opacityBase = m.opacity ?? 1;
            }
            m.transparent = true;
            m.opacity = m.userData.opacityBase * multiplier;
          }
        });
      }
    });
  };

  return setGroupOpacity;
}

function ScrollScene({
  scrollProgress,
  activePhase,
}: {
  scrollProgress: MotionValue<number>;
  activePhase: ScenePhase;
}) {
  const outerGroup = useRef<Group>(null);
  const innerGroup = useRef<Group>(null);
  const searchGroup = useRef<Group>(null);
  const phoneGroup = useRef<Group>(null);
  const directionsGroup = useRef<Group>(null);
  const portfolioGroup = useRef<Group>(null);
  const servicesGroup = useRef<Group>(null);
  const aboutGroup = useRef<Group>(null);
  const contactGroup = useRef<Group>(null);
  const reduce = useReducedMotion();
  const phaseRef = useRef(activePhase);
  phaseRef.current = activePhase;
  const weights = useRef<Record<ScenePhase, number>>({ ...INITIAL_WEIGHTS });

  const setOuterOpacity = useOpacityBinding(outerGroup);
  const setInnerOpacity = useOpacityBinding(innerGroup);
  const setSearchOpacity = useOpacityBinding(searchGroup);
  const setPhoneOpacity = useOpacityBinding(phoneGroup);
  const setDirectionsOpacity = useOpacityBinding(directionsGroup);
  const setPortfolioOpacity = useOpacityBinding(portfolioGroup);
  const setServicesOpacity = useOpacityBinding(servicesGroup);
  const setAboutOpacity = useOpacityBinding(aboutGroup);
  const setContactOpacity = useOpacityBinding(contactGroup);

  useFrame((state, delta) => {
    const raw = reduce ? 0.12 : scrollProgress.get();
    const p = easeOutCubic(Math.min(1, Math.max(0, raw)));

    const target = phaseRef.current;
    const speed = 6.5;
    for (const k of SCENE_ORDER) {
      const goal = k === target ? 1 : 0;
      weights.current[k] = lerp(weights.current[k], goal, 1 - Math.exp(-delta * speed));
    }
    const w = weights.current;

    const blend = smoothstep(0.36, 0.62, p);
    const outerF = 1 - blend;
    const innerF = blend;

    const wh = w.hero;
    setOuterOpacity(outerF * wh);
    setInnerOpacity(innerF * wh);

    if (outerGroup.current) {
      outerGroup.current.visible = outerF * wh > 0.02;
    }
    if (innerGroup.current) {
      innerGroup.current.visible = innerF * wh > 0.02;
    }

    setSearchOpacity(w.search);
    setPhoneOpacity(w.phone);
    setDirectionsOpacity(w.directions);
    setPortfolioOpacity(w.portfolio);
    setServicesOpacity(w.services);
    setAboutOpacity(w.about);
    setContactOpacity(w.contact);

    if (searchGroup.current) searchGroup.current.visible = w.search > 0.03;
    if (phoneGroup.current) phoneGroup.current.visible = w.phone > 0.03;
    if (directionsGroup.current) directionsGroup.current.visible = w.directions > 0.03;
    if (portfolioGroup.current) portfolioGroup.current.visible = w.portfolio > 0.03;
    if (servicesGroup.current) servicesGroup.current.visible = w.services > 0.03;
    if (aboutGroup.current) aboutGroup.current.visible = w.about > 0.03;
    if (contactGroup.current) contactGroup.current.visible = w.contact > 0.03;

    const camZ = lerp(8.2, 2.9, p);
    const camZInner = lerp(camZ, 2.15, blend);
    const camYHero = lerp(0.4, 0.05, p);
    const heroCam: [number, number, number] = [0, camYHero, camZInner];

    let sx = 0;
    let sy = 0;
    let sz = 0;
    let sum = 0;
    for (const k of SCENE_ORDER) {
      const weight = w[k];
      if (weight < 0.001) continue;
      const [x, y, z] =
        k === "hero" ? heroCam : CAM_OTHER[k as Exclude<ScenePhase, "hero">];
      sx += x * weight;
      sy += y * weight;
      sz += z * weight;
      sum += weight;
    }
    if (sum > 0.001) {
      state.camera.position.set(sx / sum, sy / sum, sz / sum);
    }
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <group ref={outerGroup} />
      <group ref={innerGroup} />

      <NarrativeSearchScene3D groupRef={searchGroup} />
      <NarrativePhoneScene3D groupRef={phoneGroup} />
      <NarrativeDirectionsScene3D groupRef={directionsGroup} />

      <PortfolioScene3D groupRef={portfolioGroup} />
      <ServicesScene3D groupRef={servicesGroup} />
      <AboutScene3D groupRef={aboutGroup} />
      <ContactScene3D groupRef={contactGroup} />

      <ambientLight intensity={0.72} />
      <directionalLight position={[8, 12, 6]} intensity={1.35} castShadow color="#ffffff" />
      <directionalLight position={[-6, 4, -4]} intensity={0.45} color="#dbeafe" />
      <pointLight position={[2, 2, 4]} intensity={1.2} color={ACCENT} distance={12} />
      <pointLight position={[-3, -1, 2]} intensity={0.6} color="#ffffff" distance={10} />
      <pointLight position={[0, 3, -2]} intensity={0.85} color="#93c5fd" distance={14} />

      <Environment preset="city" environmentIntensity={0.85} />
    </>
  );
}

export function HeroScrollCanvas({
  scrollProgress,
  activePhase,
}: {
  scrollProgress: MotionValue<number>;
  activePhase: ScenePhase;
}) {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 h-[100svh] w-full">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0.4, 8.2], fov: 46 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        className="h-full w-full"
      >
        <ScrollScene scrollProgress={scrollProgress} activePhase={activePhase} />
      </Canvas>
    </div>
  );
}
