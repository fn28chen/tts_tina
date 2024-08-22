"use client";
import React from "react";
import { motion } from "framer-motion";

import {
  slideInFromBot,
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion/motion";

import CreateCard from "@/components/global/create-card";

export default function Home() {
  return (
    <motion.div className="flex flex-col items-center justify-center min-h-screen">
      <motion.div variants={slideInFromTop(1)} initial="hidden" animate="visible">
        <CreateCard />
      </motion.div>
    </motion.div>
  );
}