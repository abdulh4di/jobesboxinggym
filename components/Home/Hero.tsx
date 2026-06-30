"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative w-full h-screen">
      <div className="relative z-20 flex items-center justify-center h-full">
        <div className="px-4 flex flex-col gap-9 items-center">
          <div className="flex flex-col gap-2 items-center text-center">
            <motion.h2
              className="text-[16px] font-normal -tracking-widest"
              variants={lineVariants}
              initial="hidden"
              animate="visible"
            >
              EST.2014 JOBES BOXING GYM NEWCASTLE
            </motion.h2>
            <motion.div
              className="font-extrabold text-[28px] 500:text-[40px] sm:text-[50px] lg:text-[60px] xl:text-[80px] -tracking-widest flex flex-col"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1 variants={lineVariants} className="-mb-2 sm:-mb-5 lg:-mb-8">
                UNLEASH YOUR POTENTIAL
              </motion.h1>
              <motion.h1 variants={lineVariants} className="-mb-2 sm:-mb-5 lg:-mb-8 text-[#FFD600]">
                JOBES BOXING GYM
              </motion.h1>
              <motion.h1 variants={lineVariants} className="">
                NEWCASTLE
              </motion.h1>
            </motion.div>
            <motion.p
              className="font-light text-[14px] lg:text-[16px] -tracking-widest max-w-75 sm:max-w-full"
              variants={lineVariants}
              initial="hidden"
              animate="visible"
            >
              Boxing develops more than fitness — it builds discipline, confidence, resilience and
              respect
            </motion.p>
          </div>

          <motion.div
            variants={lineVariants}
            initial="hidden"
            animate="visible"
          >
            <Link
              href="https://legitfit.com/authenticate/signup/jobesboxing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] lg:text-[16px] uppercase font-semibold text-black -tracking-widest bg-white px-6 py-3 rounded-lg cursor-pointer border border-transparent hover:scale-95 hover:bg-transparent hover:border-white hover:text-white transition-all duration-300 inline-block"
            >
              Get started
            </Link>
          </motion.div>
        </div>
      </div>
      <img
        src="/assets/JobesLogo.png"
        alt=""
        className="absolute z-30 bottom-8 right-5 w-30 h-20 sm:w-35 sm:h-25 lg:w-40 lg:h-40 lg:right-15 xl:right-20 object-contain opacity-55"
      />
      <img
        src="/assets/Hero.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover "
        style={{ objectPosition: "20% center" }}
      />
      <div className="absolute inset-0 bg-[#050505]/72"></div>
    </section>
  );
}