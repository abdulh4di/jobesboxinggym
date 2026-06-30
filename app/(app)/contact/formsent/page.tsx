"use client"
import Padding from "@/components/Padding";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiCheckCircle } from "react-icons/fi";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" } as const,
  },
};

const iconVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" } as const,
  },
};

export default function FormSent() {
  return (
    <section className="min-h-screen flex items-center justify-center py-12">
      <div className="px-4 md:px-8 lg:px-13 w-full">
        <motion.div
          className="mx-auto max-w-2xl flex flex-col items-center text-center gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Icon */}
          <motion.div variants={iconVariants}>
            <FiCheckCircle className="text-[80px] text-[#FFD600]" />
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="text-[40px] sm:text-[48px] md:text-[60px] font-semibold -tracking-widest text-white"
            variants={itemVariants}
          >
            Message Sent!
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-[14px] md:text-[16px] leading-6 font-normal tracking-[-5%] text-[#E6E6E6]/80 max-w-md"
            variants={itemVariants}
          >
            Thank you for reaching out to Jobes Boxing Gym. We've received your message and will
            get back to you as soon as possible. Keep training!
          </motion.p>

          {/* Secondary Text */}
          <motion.p
            className="text-[14px] leading-5 font-light tracking-[-5%] text-[#A7A3A3]"
            variants={itemVariants}
          >
            Expected response time: 24-48 hours
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-4"
            variants={itemVariants}
          >
            <Link
              href="/"
              className="uppercase bg-[#FFD600] text-black px-8 py-3 font-semibold rounded-lg cursor-pointer hover:bg-[#ffe14b] transition-colors duration-300 w-fit"
            >
              Back to Home
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}