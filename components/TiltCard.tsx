"use client";

import Tilt from "react-parallax-tilt";
import { useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
};

export function TiltCard({ children, className }: TiltCardProps) {
  const reduce = useReducedMotion();

  return (
    <Tilt
      tiltEnable={!reduce}
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      perspective={1200}
      scale={1.02}
      transitionSpeed={1500}
      className={className}
    >
      {children}
    </Tilt>
  );
}
