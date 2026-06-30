"use client";
import { motion } from "framer-motion";
import Padding from "../Padding";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" } as const,
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" } as const,
  },
};

export default function AboutUs() {
  return (
    <section className="pt-12">
      <Padding />
      <div className="px-4 md:px-8 lg:px-13">
        <motion.div
          className="max-w-7xl w-full mx-auto space-y-4 flex flex-col md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex flex-col items-center text-center gap-2 md:flex-row md:justify-between md:text-start">
            <motion.div
              className="flex flex-col items-center text-center md:text-start md:items-start md:gap-4"
              variants={itemVariants}
            >
              <h3 className="text-base font-normal -tracking-widest uppercase">About Us</h3>
              <h2 className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[60px] font-semibold tracking-tighter leading-7.5 md:leading-9 lg:leading-11 xl:leading-13 sm:w-[60%] md:w-[80%] lg:w-[85%] xl:w-[80%]">
                Built on standards,{" "}
                <span className="text-[#FFD600] italic leading-7.5">safety and a passion</span>
                for boxing
              </h2>
            </motion.div>

            <motion.p
              className="text-[14px] leading-5 font-normal -tracking-widest sm:w-[80%] lg:text-[16px] xl:w-[70%]"
              variants={itemVariants}
            >
              Since 2017, Jobes Boxing Gym has operated as a Community Interest Company, providing
              safe, structured boxing and fitness training while creating positive opportunities for
              local people.
            </motion.p>
          </div>

          <motion.figure variants={imageVariants}>
            <img src="/assets/AboutImg.png" alt="" className="rounded-3xl" />
          </motion.figure>
        </motion.div>
      </div>
      <Padding />
    </section>
  );
}
