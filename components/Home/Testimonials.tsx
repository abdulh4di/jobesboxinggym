"use client";

import { motion } from "framer-motion";
import Padding from "../Padding";
import TestimonialsCarousel from "./TestimonialsCarousel";

export default function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section>
      <div className="px-4 md:px-8 lg:px-13">
        <motion.div
          className="mx-auto flex w-full max-w-7xl flex-col space-y-4 md:items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.h3
            variants={itemVariants}
            className="text-base font-normal -tracking-widest uppercase"
          >
            Testimonials
          </motion.h3>

          <motion.h2
            variants={itemVariants}
            className="-mt-2 text-[40px] leading-10 font-semibold -tracking-widest text-[#FFD600] sm:leading-none xl:text-[60px]"
          >
            What Our Members Say
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-[14px] font-light -tracking-widest sm:w-[80%] md:text-center xl:w-[70%]"
          >
            Real feedback from people training, growing and building confidence through boxing.
          </motion.p>

          <div className="w-full">
            <TestimonialsCarousel />
          </div>
        </motion.div>
      </div>

      <Padding />
    </section>
  );
}