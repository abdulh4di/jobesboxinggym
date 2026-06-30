"use client";

import { motion } from "framer-motion";
import Padding from "../Padding";

export default function Sponsers() {
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
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const logoHoverTransition = {
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
          <div className="flex flex-col gap-2 sm:items-center sm:gap-4">
            <motion.h3
              variants={itemVariants}
              className="text-base font-normal tracking-[-5%] uppercase"
            >
              Our Sponsors
            </motion.h3>

            <motion.h2
              variants={itemVariants}
              className="-mt-2 text-[40px] leading-10 font-semibold tracking-[-5%] text-[#FFD600] sm:leading-none xl:text-[60px]"
            >
              Partners Who Support Us
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-[14px] font-light tracking-[-5%] sm:w-[80%] sm:text-center xl:w-[70%]"
            >
              We are proud to be supported by our sponsors, funders and community partners, whose
              support helps us provide accessible boxing, fitness and wellbeing opportunities. Each
              logo can link directly to their website, giving supporters greater visibility within
              our community.
            </motion.p>

            <motion.div
              className="mx-auto flex max-w-200 flex-wrap items-center justify-center gap-8 mt-6"
              variants={containerVariants}
            >
              {/* Card 1 */}
              <motion.a
                variants={logoVariants}
                href="https://wa.me/447702092088"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.985 }}
                transition={logoHoverTransition}
                className="w-87.5 h-87.5 rounded-2xl overflow-hidden"
              >
                <img src="/assets/AccessGranted.jpg" alt="" className="h-full w-full" />
              </motion.a>
              {/* Card 2 */}
              <motion.a
                variants={logoVariants}
                href="https://www.instagram.com/avhltd?igsh=MWMydHU0MGI4MDk2OQ=="
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.985 }}
                transition={logoHoverTransition}
                className="w-87.5 h-87.5 rounded-2xl overflow-hidden"
              >
                <img src="/assets/Abbeyview.jpg" alt="" className="h-full w-full" />
              </motion.a>
              {/* Card 3 */}
              <motion.a
                variants={logoVariants}
                href="https://jigsaw-recovery-project.org/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.985 }}
                transition={logoHoverTransition}
                className="w-87.5 h-87.5 rounded-2xl overflow-hidden"
              >
                <img src="/assets/Jigsaw.png" alt="" className="h-full w-full" />
              </motion.a>
              {/* Card 4 */}
              <motion.a
                variants={logoVariants}
                href="https://www.instagram.com/jasminsdeli?igsh=MXBkem93OGMzNThlbw=="
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.985 }}
                transition={logoHoverTransition}
                className="w-87.5 h-87.5 rounded-2xl overflow-hidden"
              >
                <img src="/assets/jasmines.jpg" alt="" className="h-full w-full" />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <Padding />
    </section>
  );
}