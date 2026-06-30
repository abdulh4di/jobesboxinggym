"use client";

import { motion } from "framer-motion";
import Padding from "../Padding";

export default function Team() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const hoverTransition = {
    type: "spring" as const,
    stiffness: 120,
    damping: 20,
    mass: 0.8,
  };
  return (
    <section>
      <Padding />

      <div className="px-4 md:px-8 lg:px-13">
        <motion.div
          className="mx-auto w-full max-w-7xl space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.h3
            variants={itemVariants}
            className="text-base font-normal tracking-[-5%] uppercase"
          >
            Our team
          </motion.h3>

          <motion.h2
            variants={itemVariants}
            className="-mt-6 text-[40px] font-semibold tracking-[-5%] text-[#FFD600] xl:text-[60px]"
          >
            Meet Our Team
          </motion.h2>

          <motion.div className="flex flex-col gap-4 lg:flex-row" variants={containerVariants}>
            {/* Team Info */}
            <motion.div
              variants={cardVariants}
              whileHover={{ scale: 1.015 }}
              transition={hoverTransition}
              className="flex h-72.5 flex-col justify-between rounded-3xl bg-[#FFD600] p-6 text-black lg:h-125 lg:w-1/3 xl:h-150"
            >
              <div className="flex flex-col gap-2">
                <motion.h3
                  variants={itemVariants}
                  className="text-base font-normal tracking-[-5%] uppercase"
                >
                  Join The Team
                </motion.h3>

                <motion.h2
                  variants={itemVariants}
                  className="text-[24px] font-semibold tracking-[-5%] uppercase xl:text-[40px] xl:leading-12"
                >
                  Personalised Boxing Coaching
                </motion.h2>

                <motion.p
                  variants={itemVariants}
                  className="text-[14px] leading-5 font-normal tracking-[-5%] sm:w-[80%] lg:text-[16px]"
                >
                  Get focused support from experienced boxing coaches to build technique, fitness
                  and confidence at your own pace.
                </motion.p>
              </div>

              <motion.a
                variants={itemVariants}
                href="/about#ourteam"
                whileHover={{ scale: 0.98 }}
                whileTap={{ scale: 0.96 }}
                transition={hoverTransition}
                className="mb-2 w-fit rounded-xl border border-transparent bg-white px-8 py-3 text-[14px] font-semibold tracking-[-5%] uppercase hover:border-black hover:bg-transparent lg:text-[16px]"
              >
                View More
              </motion.a>
            </motion.div>

            {/* Team Images */}
            <motion.div className="flex w-full gap-4 lg:w-2/3" variants={containerVariants}>
              <motion.figure
                variants={imageVariants}
                whileHover={{ scale: 1.015 }}
                transition={hoverTransition}
                className="relative flex-1 transform-gpu overflow-hidden rounded-3xl"
              >
                <img
                  src="/assets/Jobes.png"
                  alt="Boxing coach at Jobes Boxing Gym"
                  className="h-full w-full object-cover md:h-125 xl:h-150"
                />
                <div className="absolute inset-0 bg-black/50"></div>
              </motion.figure>

              <motion.figure
                variants={imageVariants}
                whileHover={{ scale: 1.02 }}
                transition={hoverTransition}
                className="relative flex-1 transform-gpu overflow-hidden rounded-3xl"
              >
                <img
                  src="/assets/Mark.png"
                  alt="Boxing coach at Jobes Boxing Gym"
                  className="h-full w-full object-cover md:h-125 xl:h-150"
                />
                <div className="absolute inset-0 bg-black/50"></div>
              </motion.figure>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <Padding />
    </section>
  );
}
