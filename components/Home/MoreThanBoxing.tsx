"use client";

import { motion } from "framer-motion";
import Padding from "../Padding";

export default function MoreThanBoxing() {
  const imageVariants = {
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
        <div className="max-w-7xl w-full mx-auto space-y-4">
          <motion.div
            className="relative rounded-4xl overflow-hidden group"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src="/assets/Futures.png"
              alt=""
              className="w-full aspect-14/6 sm:aspect-16/6 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="absolute inset-0 flex flex-col justify-end text-white py-3 px-4 sm:py-6">
              <h3 className="text-base font-medium -tracking-widest uppercase">
                More than a boxing gym
              </h3>
              <div className="flex flex-col">
                <span className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[80px] xl:text-[100px] font-semibold -tracking-widest text-[#FFD600] sm:-mt-1 lg:-mt-5">
                  Building
                </span>
                <span className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[80px] xl:text-[100px] font-semibold -tracking-widest -mt-3 sm:-mt-5 md:-mt-7 lg:-mt-12">
                  Stronger Futures
                </span>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <motion.div
              className="relative rounded-4xl overflow-hidden w-full sm:w-1/2"
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src="/assets/Mind.png"
                alt=""
                className="w-full aspect-14/6 sm:aspect-5/4 object-cover transition-transform duration-500 hover:scale-110"
                style={{ objectPosition: "center 20%" }}
              />
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="absolute inset-0 flex flex-col justify-end text-white py-3 px-4 sm:py-6">
                <div className="flex flex-col">
                  <span className="text-[28px] sm:text-[36px] md:text-[48px] font-semibold -tracking-widest text-[#FFD600]">
                    Building
                  </span>
                  <span className="text-[28px] sm:text-[36px] md:text-[48px] font-semibold -tracking-widest -mt-3 sm:-mt-5">
                    Stronger Minds
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative rounded-4xl overflow-hidden w-full sm:w-1/2"
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src="/assets/Bodies.png"
                alt=""
                className="w-full aspect-14/6 sm:aspect-5/4 object-cover transition-transform duration-500 hover:scale-110"
                style={{ objectPosition: "center 10%" }}
              />
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="absolute inset-0 flex flex-col justify-start text-white py-3 px-4 sm:py-6">
                <div className="flex flex-col">
                  <span className="text-[28px] sm:text-[36px] md:text-[48px] font-semibold -tracking-widest text-[#FFD600]">
                    Building
                  </span>
                  <span className="text-[28px] sm:text-[36px] md:text-[48px] font-semibold -tracking-widest -mt-3 sm:-mt-5">
                    Stronger Bodies
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Padding />
    </section>
  );
}