"use client";

import { Suspense, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import type { Group } from "three";
import { useReducedMotion } from "framer-motion";
import { FolderIconGLB } from "@/components/home/GLBModels";

export function PortfolioScene3D({ groupRef }: { groupRef: React.RefObject<Group> }) {
  const reduce = useReducedMotion();

  const positions = useMemo(() => {
    const pts: [number, number, number][] = [];
    for (let row = 0; row < 2; row++) {
      for (let col = 0; col < 3; col++) {
        pts.push([(col - 1) * 0.72, (0.5 - row) * 0.58, (row + col) * 0.04 - 0.03]);
      }
    }
    return pts;
  }, []);

  useFrame((state) => {
    const g = groupRef.current;
    if (!g || reduce) return;
    const t = state.clock.elapsedTime;
    g.rotation.y = t * 0.05;
    g.position.y = Math.sin(t * 0.35) * 0.03;
  });

  return (
    <group ref={groupRef}>
      <group scale={0.55}>
        {positions.map((pos, i) => (
          <group key={i} position={pos}>
            <Suspense fallback={null}>
              <Float
                speed={1.4 + i * 0.12}
                rotationIntensity={0}
                floatIntensity={0.35}
                floatingRange={[-0.06, 0.06]}
              >
                <FolderIconGLB position={[0, 0, 0]} scale={1} rotation={[0.1, 0.3 + i * 0.05, 0.04]} />
              </Float>
            </Suspense>
          </group>
        ))}
      </group>
    </group>
  );
}

export function ServicesScene3D({ groupRef }: { groupRef: React.RefObject<Group> }) {
  return <group ref={groupRef} />;
}

export function AboutScene3D({ groupRef }: { groupRef: React.RefObject<Group> }) {
  return <group ref={groupRef} />;
}

export function ContactScene3D({ groupRef }: { groupRef: React.RefObject<Group> }) {
  return <group ref={groupRef} />;
}
