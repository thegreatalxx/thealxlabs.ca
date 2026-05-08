'use client';

import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export function AnimatedCounter({ value, className = "" }: { value: number; className?: string }) {
  const spring = useSpring(0, { stiffness: 50, damping: 20 });
  const display = useTransform(spring, (v) => Math.round(v).toString());
  
  useEffect(() => {
    spring.set(value);
  }, [spring, value]);
  
  return <motion.span className={className}>{display}</motion.span>;
}
