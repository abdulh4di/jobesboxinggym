"use client";

import { motion } from "framer-motion";
import Padding from "../Padding";

export default function Value() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section>
      <Padding />
      <div className="px-4 md:px-8 lg:px-13">
        <div className="max-w-7xl w-full mx-auto space-y-4 flex flex-col gap-8">
          {/* Top info */}
          <div className="flex flex-col gap-4 w-full lg:items-center lg:justify-between lg:flex-row">
            <motion.div
              className="flex flex-col lg:w-1/2 leading-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.span
                variants={itemVariants}
                className="text-[40px] font-semibold tracking-[-0.06em]"
              >
                Built on discipline.
              </motion.span>
              <motion.span
                variants={itemVariants}
                className="text-[40px] text-[#FFD600] font-semibold tracking-[-0.06em] mt-2"
              >
                Driven by community.
              </motion.span>
              <motion.span
                variants={itemVariants}
                className="text-[40px] font-semibold tracking-[-0.06em] mt-2"
              >
                Powered by boxing.
              </motion.span>
            </motion.div>
            <motion.p
              className="text-[14px] lg:text-[16px] font-normal tracking-[-5%] leading-5 w-full sm:w-3/4 md:w-3/5 lg:w-2/5 xl:w-1/3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Boxing is about more than fitness. Through structured training, young people can build
              discipline, confidence, focus and positive relationships that support them beyond the
              gym. Our sessions create a safe and supportive environment where members can improve
              their wellbeing, develop self-belief and build healthy habits for life.
            </motion.p>
          </div>

          {/* Bottom Info */}
          <motion.div
            className="flex flex-wrap gap-4 md:justify-between"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Top Card */}
            <motion.div
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col justify-between h-81.25 bg-[#303030] p-6 rounded-3xl sm:w-[60%] xl:h-135 xl:w-[44%]"
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-normal tracking-[-0.06em] uppercase">
                  More than boxing
                </h3>
                <p className="font-light text-[14px] lg:text-[16px] tracking-[-0.06em] leading-5 lg:w-[75%]">
                  Boxing helps build discipline, confidence, focus and positive relationships that
                  support members beyond the gym. Through structured training, young people can
                  develop stronger self-belief, improve their wellbeing and build healthy habits
                  that stay with them for life.
                </p>
              </div>
              <div className="text-[#FFD600] flex flex-col">
                <span className="text-[16px] xl:text-[24px] font-bold tracking-[-0.06em] xl:-mb-8">
                  Since
                </span>
                <span className="text-[60px] xl:text-[128px] font-bold tracking-[-0.06em] -mt-3 xl:-mb-10">
                  2017
                </span>
              </div>
            </motion.div>

            {/* Image */}
            <motion.figure
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-3xl overflow-hidden h-58.75 w-full sm:w-[37%] sm:h-81.25 xl:h-135 xl:w-[26%]"
            >
              <img
                src="/assets/Value.png"
                alt=""
                className="rounded-3xl w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                style={{ objectPosition: "center 10%" }}
              />
              <div className="absolute inset-0 bg-black/35"></div>
            </motion.figure>

            {/* Bottom Card */}
            <motion.div
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col justify-between h-90 bg-[#FFD600] text-black p-6 rounded-3xl w-full xl:h-135 xl:w-[26%]"
            >
              <div className="flex flex-col gap-2">
                <p className="font-normal text-[14px] lg:text-[16px] tracking-[-0.06em] leading-5 sm:w-3/4 xl:w-full">
                  Our coaches are Professional Boxing Coaches and Qualified Amateur Coaches who are
                  DBS checked, first aid certified and regularly complete Safeguarding training.
                  Every session is delivered in a safe, structured and supportive environment,
                  helping members train with confidence at every level.
                </p>
              </div>
              <div className="flex flex-col text-[60px] xl:text-[72px]">
                <span className="font-bold tracking-[-0.06em]">Qualified</span>
                <span className="font-bold tracking-[-0.06em] -mt-8">Coaches</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Padding />
    </section>
  );
}
