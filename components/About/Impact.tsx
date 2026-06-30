"use client"


import { motion } from "framer-motion";
import { FiUsers, FiHeart, FiShield, FiAward, FiHome } from "react-icons/fi";
import Padding from "../Padding";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" } as const,
  },
};

export default function Impact() {
  const impacts = [
    {
      icon: FiUsers,
      text: "Supporting young people from all backgrounds under one roof",
    },
    {
      icon: FiHeart,
      text: "Promoting Physical Fitness, Mental Wellbeing, And Confidence",
    },
    {
      icon: FiShield,
      text: "Providing Positive Activities That Help Reduce Anti-Social Behaviour",
    },
    {
      icon: FiAward,
      text: "Creating Opportunities For Personal Development, Volunteering, And Coaching",
    },
    {
      icon: FiHome,
      text: "Building A Stronger, Healthier Community Through Sport",
    },
  ];

  return (
    <section>
      <div className="px-4 md:px-8 lg:px-13">
        <motion.div
          className="max-w-7xl w-full mx-auto space-y-4 flex flex-col gap-4 sm:items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            className="-mt-2 text-[40px] leading-10 font-semibold tracking-[-5%] text-[#FFD600] sm:leading-none xl:text-[60px]"
            variants={itemVariants}
          >
            Community Impact
          </motion.h2>

          <motion.div
            className="flex flex-wrap h-fit gap-4 items-center justify-center rounded-3xl"
            variants={containerVariants}
          >
            {impacts.map((impact, index) => {
              const Icon = impact.icon;
              return (
                <motion.div
                  key={index}
                  className="flex items-center w-90 gap-4 rounded-3xl bg-white px-4 text-black"
                  variants={cardVariants}
                >
                  <div className="flex items-center gap-4 h-full py-8 justify-between ">
                    <div className=" bg-yellow-300 rounded-full overflow-hidden p-4">
                      <Icon className="text-[40px]" />
                    </div>
                    <span className="text-[16px] leading-5.5 tracking-[-0.06em] w-[80%]">
                      {impact.text}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.span
            className="text-[32px] sm:text-[40px] lg:text[50px] xl:text-[60px] tracking-[-5%] font-semibold leading-9 sm:leading-10 xl:leading-15 text-[#E6E6E6]/52 italic sm:text-center"
            variants={itemVariants}
          >
            Thank you to all our funders, partners, volunteers, members, and supporters who help
            make our work possible.
          </motion.span>
        </motion.div>
      </div>
      <Padding />
    </section>
  );
}