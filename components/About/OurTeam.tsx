"use client"
import { motion } from "framer-motion";
import Padding from "../Padding";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
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

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" } as const,
  },
};

export default function OurTeam() {
  return (
    <section id="ourteam">
      <div className="px-4 md:px-8 lg:px-13">
        <motion.div
          className="mx-auto w-full max-w-7xl space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex flex-col gap-6">
            {/* Team Heading & Para */}
            <div className="flex flex-col justify-center sm:items-center sm:text-center">
              <motion.h2
                className="text-[40px] font-semibold tracking-[-5%] text-[#FFD600] xl:text-[60px]"
                variants={itemVariants}
              >
                Meet Our Team
              </motion.h2>
              <motion.p
                className="text-[14px] leading-5 font-normal tracking-[-5%] w-[90%] sm:w-full lg:text-[16px]"
                variants={itemVariants}
              >
                Our coaches provide clear guidance, support and experience to help members train
                safely and improve.
              </motion.p>
            </div>

            {/* Member Info */}
            <motion.div
              className="flex flex-wrap w-full gap-4 justify-center"
              variants={containerVariants}
            >
              {/* Member 1 */}
              <motion.div className="flex flex-col gap-4" variants={cardVariants}>
                <figure className="relative rounded-3xl overflow-hidden h-110 w-85 sm:w-100 md:w-82 xl:w-92 xl:h-120">
                  <img src="/assets/MattJobes.png" alt="" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/50"></div>
                </figure>

                <div className="flex flex-col justify-between h-27.5 sm:h-32 bg-[#FFFFFF]/6 p-4 rounded-3xl">
                  <h3 className="text-[20px] font-semibold tracking-[-5%]">Mark Taylor</h3>
                  <div className="text-[14px] font-semibold text-[#A7A3A3] tracking-[-5%] flex flex-col">
                    <span>BBBoc Professional Boxing Coach</span>
                    <span>Level 1 England Boxing Coach</span>
                  </div>
                </div>
              </motion.div>

              {/* Member 2 */}
              <motion.div className="flex flex-col gap-4" variants={cardVariants}>
                <figure className="relative rounded-3xl overflow-hidden h-110 w-85 sm:w-100 md:w-82 xl:w-92 xl:h-120">
                  <img src="/assets/MarkTaylor.png" alt="" className="w-full h-full object-top" />
                  <div className="absolute inset-0 bg-black/50"></div>
                </figure>

                <div className="flex flex-col justify-between h-27.5 sm:h-32 bg-[#FFFFFF]/6 p-4 rounded-3xl">
                  <h3 className="text-[20px] font-semibold tracking-[-5%]">Matt Jobes</h3>
                  <div className="text-[14px] font-semibold text-[#A7A3A3] tracking-[-5%] flex flex-col">
                    <span>BBBoc Professional Boxing Coach</span>
                    <span>Level 1 England Boxing Amateur Coach & Official</span>
                  </div>
                </div>
              </motion.div>

              {/* Member 3 */}
              <motion.div className="flex flex-col gap-4" variants={cardVariants}>
                <figure className="relative rounded-3xl overflow-hidden h-110 w-85 sm:w-100 md:w-82 xl:w-92 xl:h-120">
                  <img src="/assets/DannyBoyle.png" alt="" className="w-full h-full object-top" />
                  <div className="absolute inset-0 bg-black/50"></div>
                </figure>

                <div className="flex flex-col justify-between h-27.5 sm:h-32 bg-[#FFFFFF]/6 p-4 rounded-3xl">
                  <h3 className="text-[20px] font-semibold tracking-[-5%]">Danny Boyle</h3>
                  <div className="text-[14px] font-semibold text-[#A7A3A3] tracking-[-5%] flex flex-col">
                    <span>BBBoc Professional Boxing Coach</span>
                    <span>Level 1 & 2 England Boxing Coach</span>
                  </div>
                </div>
              </motion.div>

              {/* Member 4 */}
              <motion.div className="flex flex-col gap-4" variants={cardVariants}>
                <figure className="relative rounded-3xl overflow-hidden h-110 w-85 sm:w-100 md:w-82 xl:w-92 xl:h-120">
                  <img
                    src="/assets/RickyCallison.png"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50"></div>
                </figure>

                <div className="flex flex-col justify-between h-27.5 sm:h-28 bg-[#FFFFFF]/6 p-4 rounded-3xl">
                <h3 className="text-[20px] font-semibold tracking-[-5%]">Ricky Callison</h3>
                  <div className="text-[14px] font-semibold text-[#A7A3A3] tracking-[-5%] flex flex-col">
                    <span>Level 1 & 2 England Boxing Coach</span>
                  </div>
                </div>
              </motion.div>

              {/* Member 5 */}
              <motion.div className="flex flex-col gap-4" variants={cardVariants}>
                <figure className="relative rounded-3xl overflow-hidden h-110 w-85 sm:w-100 md:w-82 xl:w-92 xl:h-120">
                  <img
                    src="/assets/LibbyJobes.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50"></div>
                </figure>

                <div className="flex flex-col justify-between h-27.5 sm:h-28 bg-[#FFFFFF]/6 p-4 rounded-3xl">
                <h3 className="text-[20px] font-semibold tracking-[-5%]">Libby Jobes</h3>
                  <div className="text-[14px] font-semibold text-[#A7A3A3] tracking-[-5%] flex flex-col">
                    <span>Level 1 England Boxing Coach</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <Padding />
    </section>
  );
}