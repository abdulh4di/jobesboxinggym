"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function TestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    dragFree: false,
    startIndex: 0,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

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

    const updateButtons = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    updateButtons();
    emblaApi.on("select", updateButtons);
    emblaApi.on("reInit", updateButtons);

    const handleWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) return;
      event.preventDefault();
      if (event.deltaX > 0) emblaApi.scrollNext();
      else emblaApi.scrollPrev();
    };

    emblaApi.containerNode()?.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      emblaApi.off("select", updateButtons);
      emblaApi.off("reInit", updateButtons);
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
          {testimonials.map((testimonial, index) => (
            <motion.div
              className="embla__slide flex-[0_0_100%] px-2 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] xl:flex-[0_0_25%]"
              key={index}
              variants={slideVariants}
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="mt-6 flex gap-2 px-2">
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className="cursor-pointer rounded-xl bg-white p-2 shadow-lg transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Previous testimonial"
        >
          <FiChevronLeft className="h-6 w-6 text-black" />
        </button>

        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          className="cursor-pointer rounded-xl bg-white p-2 shadow-lg transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Next testimonial"
        >
          <FiChevronRight className="h-6 w-6 text-black" />
        </button>
      </div>
    </section>
  );
}
function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="relative flex h-fit w-full flex-col items-center justify-center rounded-3xl">
      <figure className="relative h-96 w-full">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="h-full w-full rounded-3xl object-cover object-top"
        />

        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-black opacity-40" />
      </figure>

      <div className="absolute -bottom-4 left-1/2 flex justify-between min-h-40 w-full -translate-x-1/2 flex-col gap-2 rounded-3xl bg-white p-6 text-black">
        <p className=" text-base font-normal leading-5.5 tracking-[-0.06rem]">
          "{testimonial.text}"
        </p>

        <span className="text-[14px] leading-5.5 tracking-[-0.06em] text-[#929292]">
          {testimonial.name}
        </span>
      </div>
    </article>
  );
}
  
type Testimonial = {
  name: string;
  image: string;
  text: string;
};

const testimonials = [
  {
    name: "Lee Rogers",
    image: "/assets/Value.png",
    text: "Every session pushes me to do my best. The coaches encourage me to keep improving, and I always leave feeling proud of what I’ve achieved.",
  },
  {
    name: "Presley Longworth",
    image: "/assets/Presley.png",
    text: "Great coaches, welcoming atmosphere and boxing sessions that really build confidence and discipline.",
  },
  {
    name: "David Gatherar",
    image: "/assets/David.png",
    text: "The coaches are really kind, the classes are fun, and I feel more confident every time I train.",
  },
  {
    name: "Alvin Jijo",
    image: "/assets/Alvin.png",
    text: "I love coming to boxing because everyone is friendly. I’m learning new skills, getting fitter, and feeling more confident each week.",
  },
  {
    name: "Aiden Abraham",
    image: "/assets/Aiden.png",
    text: "Since joining Jobes Boxing Gym, I’ve learned discipline, improved my boxing skills, and become much more confident in myself.",
  },
  {
    name: "Izzy Gatherar",
    image: "/assets/Izzy.png",
    text: "I’ve made new friends, learned new skills and feel proud of myself after every boxing session.",
  },
  {
    name: "Scarlett Gatherar",
    image: "/assets/Scarlett.png",
    text: "Boxing is really fun here. The coaches help me learn, and I feel stronger and braver every week.",
  },
  {
    name: "Texas Kay",
    image: "/assets/Texas.png",
    text: "Jobes Boxing Gym has helped me build strength, confidence and a never-give-up mindset.",
  },
];
