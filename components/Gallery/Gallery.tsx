"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Padding from "../Padding";
import { FiX } from "react-icons/fi";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { motion } from "framer-motion";
import ImageSkeleton from "./ImageSkeleton";

export default function Gallery() {
  const [isMd, setIsMd] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  useEffect(() => {
    const handleResize = () => {
      setIsMd(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const bentoItems = isMd ? mdScreenItems : smallScreenItems;

  const handleImageLoad = (id: string) => {
    setLoadedImages((prev) => new Set(prev).add(id));
  };

  const handlePrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === 0 ? bentoItems.length - 1 : selectedIndex - 1);
  };

  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === bentoItems.length - 1 ? 0 : selectedIndex + 1);
  };

  const handleClose = () => setSelectedIndex(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <>
      <section className="pt-12">
        <Padding />
        <div className="px-4 md:px-8 lg:px-13">
          <div className="max-w-7xl w-full mx-auto">
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[150px] sm:auto-rows-[180px] md:auto-rows-[220px]"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {bentoItems.map((item) => (
                <motion.div
                  key={item.id}
                  className={`relative overflow-hidden rounded-2xl group cursor-pointer ${item.span}`}
                  onClick={() => setSelectedIndex(bentoItems.indexOf(item))}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  {!loadedImages.has(item.id) && <ImageSkeleton />}

                  <Image
                    src={item.src}
                    alt={item.id}
                    fill
                    className={`object-cover w-full h-full group-hover:scale-105 transition-all duration-500 ${
                      loadedImages.has(item.id) ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ objectPosition: item.objectPosition }}
                    onLoad={() => handleImageLoad(item.id)}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        <Padding />
      </section>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={handleClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            onClick={handleClose}
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white hover:text-gray-300 transition cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiX size={32} />
          </motion.button>

          <motion.button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition cursor-pointer bg-[#000000aa] rounded-full z-10 p-2 md:p-3"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <BiChevronLeft size={32} className="md:w-10 md:h-10" />
          </motion.button>

          <motion.div
            className="relative w-full h-full max-w-4xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={bentoItems[selectedIndex].src}
              alt={bentoItems[selectedIndex].id}
              fill
              className="object-contain"
            />
          </motion.div>

          <motion.button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition cursor-pointer bg-[#000000aa] rounded-full z-10 p-2 md:p-3"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <BiChevronRight size={32} className="md:w-10 md:h-10" />
          </motion.button>

          <motion.div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {selectedIndex + 1} / {bentoItems.length}
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

const smallScreenItems = [
  {
    id: "BentoL1",
    src: "/assets/BentoL1.png",
    span: "col-span-2 row-span-2 md:col-span-2 md:row-span-2",
    objectPosition: "center",
  },
  { id: "Bento1", src: "/assets/Bento1.jpg", span: "", objectPosition: "center 20%" },
  { id: "Bento2", src: "/assets/Bento2.jpg", span: "", objectPosition: "center 10%" },
  { id: "Bento3", src: "/assets/Bento3.jpg", span: "", objectPosition: "center 40%" },
  { id: "Bento4", src: "/assets/Bento4.jpg", span: "", objectPosition: "center" },
  {
    id: "BentoL2",
    src: "/assets/BentoL2.png",
    span: "col-span-2 row-span-2 md:col-span-2 md:row-span-2",
    objectPosition: "center",
  },
  { id: "Bento5", src: "/assets/Bento5.jpg", span: "", objectPosition: "center 30%" },
  { id: "Bento6", src: "/assets/Bento6.jpg", span: "", objectPosition: "center 30%" },
  { id: "Bento7", src: "/assets/Bento7.jpg", span: "", objectPosition: "center" },
  { id: "Bento8", src: "/assets/Bento8.jpg", span: "", objectPosition: "center 40%" },
];

const mdScreenItems = [
  {
    id: "BentoL1",
    src: "/assets/BentoL1.png",
    span: "col-span-2 row-span-2 md:col-span-2 md:row-span-2",
    objectPosition: "center",
  },
  { id: "Bento1", src: "/assets/Bento1.jpg", span: "", objectPosition: "center 20%" },
  { id: "Bento2", src: "/assets/Bento2.jpg", span: "", objectPosition: "center 10%" },
  { id: "Bento3", src: "/assets/Bento3.jpg", span: "", objectPosition: "center 40%" },
  { id: "Bento4", src: "/assets/Bento4.jpg", span: "", objectPosition: "center" },
  { id: "Bento5", src: "/assets/Bento5.jpg", span: "", objectPosition: "center 30%" },
  { id: "Bento6", src: "/assets/Bento6.jpg", span: "", objectPosition: "center 30%" },
  {
    id: "BentoL2",
    src: "/assets/BentoL2.png",
    span: "col-span-2 row-span-2 md:col-span-2 md:row-span-2",
    objectPosition: "center",
  },
  { id: "Bento7", src: "/assets/Bento7.jpg", span: "", objectPosition: "center" },
  { id: "Bento8", src: "/assets/Bento8.jpg", span: "", objectPosition: "center 40%" },
];
