"use client";

import Padding from "../Padding";
import { SiTicktick } from "react-icons/si";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" } as const,
  },
};

export default function Prices() {
  const [emblaRef1, emblaApi1] = useEmblaCarousel({
    dragFree: false,
    startIndex: 0,
    align: "start",
  });

  const [emblaRef2, emblaApi2] = useEmblaCarousel({
    dragFree: false,
    startIndex: 0,
    align: "start",
  });

  useEffect(() => {
    if (!emblaApi1) return;

    const handleWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) return;
      event.preventDefault();
      if (event.deltaX > 0) emblaApi1.scrollNext();
      else emblaApi1.scrollPrev();
    };

    emblaApi1.containerNode()?.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      emblaApi1.containerNode()?.removeEventListener("wheel", handleWheel);
    };
  }, [emblaApi1]);

  useEffect(() => {
    if (!emblaApi2) return;

    const handleWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) return;
      event.preventDefault();
      if (event.deltaX > 0) emblaApi2.scrollNext();
      else emblaApi2.scrollPrev();
    };

    emblaApi2.containerNode()?.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      emblaApi2.containerNode()?.removeEventListener("wheel", handleWheel);
    };
  }, [emblaApi2]);

  return (
    <section className="pt-12">
      <Padding />
      <div className="px-4 md:px-8 lg:px-13">
        <motion.div
          className="max-w-7xl w-full mx-auto space-y-4 flex justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="flex flex-col gap-12 w-full" variants={containerVariants}>
            {/* Senior Prices Section */}
            <motion.div className="flex flex-col gap-4 w-full" variants={itemVariants}>
              <motion.h2
                className="text-[40px] md:text-[48px] font-semibold -tracking-widest text-[#FFD600] md:text-center"
                variants={itemVariants}
              >
                Senior Memberships
              </motion.h2>
              
              <div className="embla relative w-full">
                <div className="embla__viewport overflow-hidden" ref={emblaRef1}>
                  <div className="embla__container flex xl:justify-center gap-2">
                    {/* Price Card 1 */}
                    <motion.div
                      className="embla__slide flex-[0_0_90%] sm:flex-[0_0_70%] md:flex-[0_0_65%] lg:flex-[0_0_40%] min-w-0 xl:max-w-90 bg-white text-black px-8 py-10 flex flex-col gap-8 rounded-xl"
                      variants={cardVariants}
                    >
                      <div className="flex flex-col gap-4">
                        <h2 className="text-[32px] tracking-[-5%] font-semibold leading-7.5">
                          Senior <br /> Monthly Membership
                        </h2>
                        <p className="text-[16px] text-[#929292] leading-5 font-light tracking-[-5%]">
                          For ages 16 and over, our Senior Membership gives you unlimited classes in a
                          supportive boxing and fitness environment.
                        </p>
                      </div>
                      <div className="flex gap-2 items-end">
                        <span className="font-extrabold text-6xl">£35</span>
                        <span className="text-[#929292] text-[16px] font-light">/monthly</span>
                      </div>
                      <Link
                        href="https://legitfit.com/authenticate/signup/jobesboxing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center bg-[#FFD600] py-4 rounded-full tracking-[-5%] hover:bg-[#ffe14b] transition-colors duration-300"
                      >
                        Choose Monthly
                      </Link>
                      <div>
                        <ul className="flex flex-col gap-6">
                          {SeniorMonthlyBenefits.map((benefit, index) => (
                            <li key={index} className="flex items-center gap-4">
                              <span>
                                <SiTicktick className="text-[20px] text-[#FFD600]" />
                              </span>
                              <span className="text-base tracking-[-8%] font-normal">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>

                    {/* Price Card 2 */}
                    <motion.div
                      className="embla__slide flex-[0_0_90%] sm:flex-[0_0_70%] md:flex-[0_0_65%] lg:flex-[0_0_40%] min-w-0 xl:max-w-90 bg-white text-black px-8 py-10 flex flex-col gap-8 rounded-xl"
                      variants={cardVariants}
                    >
                      <div className="flex flex-col gap-4">
                        <h2 className="text-[32px] tracking-[-5%] font-semibold leading-7.5">
                          Senior <br /> Single Sessions
                        </h2>
                        <p className="text-[16px] text-[#929292] leading-5 font-light tracking-[-5%]">
                          For ages 16 and over, our Single Session gives you access to one boxing or
                          fitness class in a supportive gym environment.
                        </p>
                      </div>
                      <div className="flex gap-2 items-end">
                        <span className="font-extrabold text-6xl">£5</span>
                        <span className="text-[#929292] text-[16px] font-light">/session</span>
                      </div>
                      <Link
                        href="https://legitfit.com/authenticate/signup/jobesboxing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center bg-[#FFD600] py-4 rounded-full tracking-[-5%] hover:bg-[#ffe14b] transition-colors duration-300"
                      >
                        Choose Single Session
                      </Link>
                      <div>
                        <ul className="flex flex-col gap-6">
                          {SeniorSingleBenefits.map((benefit, index) => (
                            <li key={index} className="flex items-center gap-4">
                              <span>
                                <SiTicktick className="text-[20px] text-[#FFD600]" />
                              </span>
                              <span className="text-base tracking-[-8%] font-normal">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>

                    {/* Price Card 3 */}
                    <motion.div
                      className="embla__slide flex-[0_0_90%] sm:flex-[0_0_70%] md:flex-[0_0_65%] lg:flex-[0_0_40%] min-w-0 xl:max-w-90 bg-white text-black px-8 py-10 flex flex-col gap-8 rounded-xl"
                      variants={cardVariants}
                    >
                      <div className="flex flex-col gap-4">
                        <h2 className="text-[32px] tracking-[-5%] font-semibold leading-7.5">
                          Session <br /> Packages
                        </h2>
                        <p className="text-[16px] text-[#929292] leading-5 font-light tracking-[-5%]">
                          For over 16s only, our 3 and 5 session packages offer flexible class access
                          over a 2-week period after purchase.
                        </p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="flex gap-2 items-end">
                          <span className="font-extrabold text-6xl">£20</span>
                          <span className="text-[#929292] text-[16px] font-light">/5 sessions</span>
                        </div>
                        <div className="flex gap-2 items-end">
                          <span className="font-extrabold text-6xl">£12</span>
                          <span className="text-[#929292] text-[16px] font-light">/3 sessions</span>
                        </div>
                      </div>
                      <Link
                        href="https://legitfit.com/authenticate/signup/jobesboxing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center bg-[#FFD600] py-4 rounded-full tracking-[-5%] hover:bg-[#ffe14b] transition-colors duration-300"
                      >
                        Choose Session Packages
                      </Link>
                      <div>
                        <ul className="flex flex-col gap-6">
                          {SessionPackagesBenefits.map((benefit, index) => (
                            <li key={index} className="flex items-center gap-4">
                              <span>
                                <SiTicktick className="text-[20px] text-[#FFD600]" />
                              </span>
                              <span className="text-base tracking-[-8%] font-normal">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Kids Prices Section */}
            <motion.div className="flex flex-col gap-4 w-full" variants={itemVariants}>
              <motion.h2
                className="text-[40px] md:text-[48px] font-semibold -tracking-widest text-[#FFD600] md:text-center"
                variants={itemVariants}
              >
                Kids Memberships
              </motion.h2>

              <div className="embla relative w-full">
                <div className="embla__viewport overflow-hidden" ref={emblaRef2}>
                  <div className="embla__container flex xl:justify-center gap-2">
                    {/* Price Card 1 */}
                    <motion.div
                      className="embla__slide flex-[0_0_90%] sm:flex-[0_0_70%] md:flex-[0_0_65%] lg:flex-[0_0_40%] min-w-0 xl:max-w-90 bg-white text-black px-8 py-10 flex flex-col gap-8 rounded-xl"
                      variants={cardVariants}
                    >
                      <div className="flex flex-col gap-4">
                        <h2 className="text-[32px] tracking-[-5%] font-semibold leading-7.5">
                          Kids <br /> Monthly Membership
                        </h2>
                        <p className="text-[16px] text-[#929292] leading-5 font-light tracking-[-5%]">
                          Kids Membership offers fun, structured boxing sessions that help children
                          stay active, build confidence and learn discipline.
                        </p>
                      </div>
                      <div className="flex gap-2 items-end">
                        <span className="font-extrabold text-6xl">£25</span>
                        <span className="text-[#929292] text-[16px] font-light">/monthly</span>
                      </div>
                      <Link
                        href="https://legitfit.com/authenticate/signup/jobesboxing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center bg-[#FFD600] py-4 rounded-full tracking-[-5%] hover:bg-[#ffe14b] transition-colors duration-300"
                      >
                        Choose Monthly
                      </Link>
                      <div>
                        <ul className="flex flex-col gap-6">
                          {KidsMonthlyBeneifts.map((benefit, index) => (
                            <li key={index} className="flex items-center gap-4">
                              <span>
                                <SiTicktick className="text-[20px] text-[#FFD600]" />
                              </span>
                              <span className="text-base tracking-[-8%] font-normal">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>

                    {/* Price Card 2 */}
                    <motion.div
                      className="embla__slide flex-[0_0_90%] sm:flex-[0_0_70%] md:flex-[0_0_65%] lg:flex-[0_0_40%] min-w-0 xl:max-w-90 bg-white text-black px-8 py-10 flex flex-col gap-8 rounded-xl"
                      variants={cardVariants}
                    >
                      <div className="flex flex-col gap-4">
                        <h2 className="text-[32px] tracking-[-5%] font-semibold leading-7.5">
                          Kids <br /> Single Sessions
                        </h2>
                        <p className="text-[16px] text-[#929292] leading-5 font-light tracking-[-5%]">
                          For children, our Kids Single Session gives access to one fun boxing or
                          fitness class in a safe, supportive gym environment.
                        </p>
                      </div>
                      <div className="flex gap-2 items-end">
                        <span className="font-extrabold text-6xl">£3</span>
                        <span className="text-[#929292] text-[16px] font-light">/session</span>
                      </div>
                      <Link
                        href="https://legitfit.com/authenticate/signup/jobesboxing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center bg-[#FFD600] py-4 rounded-full tracking-[-5%] hover:bg-[#ffe14b] transition-colors duration-300"
                      >
                        Choose Single Session
                      </Link>
                      <div>
                        <ul className="flex flex-col gap-6">
                          {KidsSingleBenefits.map((benefit, index) => (
                            <li key={index} className="flex items-center gap-4">
                              <span>
                                <SiTicktick className="text-[20px] text-[#FFD600]" />
                              </span>
                              <span className="text-base tracking-[-8%] font-normal">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <Padding />
    </section>
  );
}

const SeniorMonthlyBenefits = [
  "Unlimited classes",
  "Improve strength, stamina and confidence",
  "Supportive gym environment",
  "Train with experienced coaches",
  "Build discipline, focus and resilience",
  "Structured boxing training",
  "Fitness and conditioning sessions",
];

const SeniorSingleBenefits = [
  "One-off class access",
  "No membership commitment",
  "Supportive gym environment",
  "Train with experienced coaches",
  "Ideal for trying out the gym",
  "Structured boxing training",
  "Fitness and conditioning sessions",
];

const SessionPackagesBenefits = [
  "3 or 5 session options",
  "Flexible class access",
  "Ideal for shift workers",
  "No monthly commitment",
  "Access to boxing and fitness sessions",
];

const KidsMonthlyBeneifts = [
  "Unlimited classes",
  "Improve strength, stamina and confidence",
  "Supportive gym environment",
  "Train with experienced coaches",
  "Build discipline, focus and resilience",
  "Structured boxing training",
  "Fitness and conditioning sessions",
];

const KidsSingleBenefits = [
  "One-off class access",
  "No membership commitment",
  "Supportive gym environment",
  "Train with experienced coaches",
  "Train with experienced coaches",
  "Structured boxing training",
  "Fitness and conditioning sessions",
];