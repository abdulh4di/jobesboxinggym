"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function FundersPartnersCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: false,
    startIndex: 0,
    align: "start",
  });
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const slideVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.96,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  useEffect(() => {
    if (!emblaApi) return;

    const handleWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) return;
      event.preventDefault();
      if (event.deltaX > 0) emblaApi.scrollNext();
      else emblaApi.scrollPrev();
    };

    emblaApi.containerNode()?.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      emblaApi.containerNode()?.removeEventListener("wheel", handleWheel);
    };
  }, [emblaApi]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section className="embla relative">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <motion.div
          className="embla__container flex pb-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* Card 1 */}
          <motion.div
            className="embla__slide flex-[0_0_100%] px-2 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] xl:flex-[0_0_25%]"
            variants={slideVariants}
          >
            <article className="relative flex h-fit w-full flex-col items-center justify-center rounded-3xl">
              <div className="flex items-center h-92 w-full flex-col gap-4 rounded-3xl bg-white p-6 text-black">
                <div className="flex flex-col items-center justify-between h-full py-8">
                  <figure className="w-40">
                    <img src="/assets/NCL.png" alt="" className="w-full mt-8" />
                  </figure>
                  <div className="flex flex-col gap-4">
                    <span className="text-[14px] leading-5.5 tracking-[-0.06em] text-center">
                      Supporting holiday activities and programmes that provide young people with
                      access to sport, healthy meals, and positive experiences.
                    </span>
                    <span className="text-[16px] font-semibold leading-5.5 tracking-[-0.06em] text-center">
                      Newcastle City Council and Local Community Partners
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="embla__slide flex-[0_0_100%] px-2 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] xl:flex-[0_0_25%]"
            variants={slideVariants}
          >
            <article className="relative flex h-fit w-full flex-col items-center justify-center rounded-3xl">
              <div className="flex items-center h-92 w-full flex-col gap-4 rounded-3xl bg-white p-6 text-black">
                <div className="flex flex-col items-center justify-between h-full py-8">
                  <figure className="w-40">
                    <img src="/assets/CommunityFund.png" alt="" className="w-full mt-8" />
                  </figure>
                  <div className="flex flex-col gap-4">
                    <span className="text-[14px] leading-5.5 tracking-[-0.06em] text-center">
                      Supporting our work to create positive opportunities, improve wellbeing, and
                      strengthen our local community.
                    </span>
                    <span className="text-[16px] font-semibold leading-5.5 tracking-[-0.06em] text-center">
                      The National Lottery Community Fund
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="embla__slide flex-[0_0_100%] px-2 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] xl:flex-[0_0_25%]"
            variants={slideVariants}
          >
            <article className="relative flex h-fit w-full flex-col items-center justify-center rounded-3xl">
              <div className="flex items-center h-92 w-full flex-col gap-4 rounded-3xl bg-white p-6 text-black">
                <div className="flex flex-col items-center justify-between h-full py-8">
                  <figure className="w-32">
                    <img src="/assets/StreetGames.png" alt="" className="w-full -mt-3" />
                  </figure>
                  <div className="flex flex-col gap-4">
                    <span className="text-[14px] leading-5.5 tracking-[-0.06em] text-center">
                      Supporting holiday activities and programmes that provide young people with
                      access to sport, healthy meals, and positive experiences.
                    </span>
                    <span className="text-[16px] font-semibold leading-5.5 tracking-[-0.06em] text-center">
                      StreetGames
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            className="embla__slide flex-[0_0_100%] px-2 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] xl:flex-[0_0_25%]"
            variants={slideVariants}
          >
            <article className="relative flex h-fit w-full flex-col items-center justify-center rounded-3xl">
              <div className="flex items-center h-92 w-full flex-col gap-4 rounded-3xl bg-white p-6 text-black">
                <div className="flex flex-col items-center justify-between h-full py-8">
                  <figure className="w-32">
                    <img src="/assets/BetterYouth.png" alt="" className="w-full" />
                  </figure>
                  <div className="flex flex-col gap-4">
                    <span className="text-[14px] leading-5.5 tracking-[-0.06em] text-center">
                      Helping us improve our facilities and create a safe, welcoming environment
                      where young people can learn, develop confidence, and achieve their potential.
                    </span>
                    <span className="text-[16px] font-semibold leading-5.5 tracking-[-0.06em] text-center">
                      Better Youth Spaces Fund
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </motion.div>
        </motion.div>
      </div>

      <div className="mt-6 flex gap-2 px-2 xl:hidden">
        <button
          onClick={scrollPrev}
          className="cursor-pointer rounded-xl bg-white p-2 shadow-lg transition hover:bg-gray-100"
          aria-label="Previous testimonial"
        >
          <FiChevronLeft className="h-6 w-6 text-black" />
        </button>

        <button
          onClick={scrollNext}
          className="cursor-pointer rounded-xl bg-white p-2 shadow-lg transition hover:bg-gray-100"
          aria-label="Next testimonial"
        >
          <FiChevronRight className="h-6 w-6 text-black" />
        </button>
      </div>
    </section>
  );
}
