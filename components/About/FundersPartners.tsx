"use client";

import { motion } from "framer-motion";
import Padding from "../Padding";
import FundersPartnersCarousel from "./FundersPartnersCarousel";

export default function FundersPartners() {
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
            className="text-base font-normal tracking-[-5%] uppercase"
          >
            Testimonials
          </motion.h3>

          <motion.h2
            variants={itemVariants}
            className="-mt-2 text-[40px] leading-10 font-semibold tracking-[-5%] text-[#FFD600] sm:leading-none xl:text-[60px]"
          >
            Our Funders & Partners
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-[14px] font-light mb-10 tracking-[-5%] sm:w-[80%] md:text-center lg:w-[70%] xl:w-[50%]"
          >
            At Jobes Boxing & Fitness Gym CIC, the support of our funders and partners helps us
            improve health, wellbeing and opportunities through affordable boxing, fitness
            programmes, free community sessions and youth activities.
          </motion.p>

          <motion.h2
            variants={itemVariants}
            className="-mt-2 text-[20px] leading-10 font-semibold tracking-[-5%] text-[#FFD600] sm:leading-none xl:text-[30px]"
          >
            Proudly Supported By
          </motion.h2>

          <div className="w-full">
            <FundersPartnersCarousel />
          </div>
        </motion.div>
      </div>

      <Padding />
    </section>
  );
}
