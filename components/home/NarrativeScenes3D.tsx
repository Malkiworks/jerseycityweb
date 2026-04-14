"use client";

import { Suspense, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import type { Group } from "three";
import { useReducedMotion } from "framer-motion";
import { GoogleLogoGLB, MapPointerGLB, MinimalPhoneGLB } from "@/components/home/GLBModels";

export function NarrativeSearchScene3D({ groupRef }: { groupRef: React.RefObject<Group> }) {
  const reduce = useReducedMotion();
  useFrame((state) => {
    const g = groupRef.current;
    if (!g || reduce) return;
    const t = state.clock.elapsedTime;
    g.rotation.y = Math.sin(t * 0.38) * 0.2;
    g.rotation.x = Math.sin(t * 0.27) * 0.07;
  });
  return (
    <group ref={groupRef}>
      <Suspense fallback={null}>
        <Float
          speed={2.4}
          rotationIntensity={0.4}
          floatIntensity={0.85}
          floatingRange={[-0.18, 0.18]}
        >
          <GoogleLogoGLB position={[0, 0, 0]} scale={1} />
        </Float>
      </Suspense>
    </group>
  );
}

export function NarrativePhoneScene3D({ groupRef }: { groupRef: React.RefObject<Group> }) {
  const reduce = useReducedMotion();
  const spinRef = useRef<Group>(null);
  useFrame((_, delta) => {
    if (reduce || !spinRef.current) return;
    spinRef.current.rotation.y += delta * 1.05;
  });
  return (
    <group ref={groupRef}>
      <Suspense fallback={null}>
        <Float
          speed={1.9}
          rotationIntensity={0}
          floatIntensity={0.65}
          floatingRange={[-0.12, 0.12]}
        >
          <group ref={spinRef}>
            <MinimalPhoneGLB position={[0, 0, 0]} rotation={[0, -0.25, 0]} scale={1} />
          </group>
        </Float>
      </Suspense>
    </group>
  );
}

export function NarrativeDirectionsScene3D({ groupRef }: { groupRef: React.RefObject<Group> }) {
  const reduce = useReducedMotion();
  useFrame((state) => {
    const g = groupRef.current;
    if (!g || reduce) return;
    const t = state.clock.elapsedTime;
    g.rotation.y = t * 0.11;
    g.position.y = Math.sin(t * 0.9) * 0.08;
  });
  return (
    <group ref={groupRef}>
      <Suspense fallback={null}>
        <Float
          speed={2.8}
          rotationIntensity={0.5}
          floatIntensity={0.95}
          floatingRange={[-0.2, 0.2]}
        >
          <MapPointerGLB position={[0, 0, 0]} scale={1} />
        </Float>
      </Suspense>
    </group>
  );
}
