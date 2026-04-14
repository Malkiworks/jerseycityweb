"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { fadeInUp } from "@/lib/motion";

type VariantName = "default" | "story";

export function MotionSection({
  children,
  className,
  variant = "default",
  ...rest
}: HTMLMotionProps<"section"> & { variant?: VariantName }) {
  const reduce = useReducedMotion();
  const variants =
    reduce
      ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
      : variant === "story"
        ? {
            hidden: { opacity: 0, y: 48 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
            },
          }
        : fadeInUp;

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-12% 0px -12% 0px", amount: 0.2 }}
      variants={variants}
      className={className}
      {...rest}
    >
      {children}
    </motion.section>
  );
}
