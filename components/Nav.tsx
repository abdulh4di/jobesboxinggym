"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { LuArrowRight } from "react-icons/lu";
import Menu from "./Menu";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      setScrolled(scrollPosition > viewportHeight * 0.1);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navVariants = {
    hidden: { opacity: 0, y: -8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const hoverTransition = {
    type: "spring" as const,
    stiffness: 220,
    damping: 18,
  };

  return (

    <>
    
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ease-out ${
        scrolled ? "border-b border-b-white/30 bg-black/50 backdrop-blur-md" : "bg-transparent pt-3"
      }`}
    >
      <div className="px-7 py-4 md:px-8 lg:px-13">
        <div className="mx-auto w-full max-w-7xl">
          <motion.div
            variants={navVariants}
            initial="hidden"
            animate="visible"
            className="flex items-center justify-between"
          >
            {/* nav logo */}
            <motion.div variants={itemVariants}>
              <Link href="/">
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  transition={hoverTransition}
                >
                  <Image
                    src="/assets/Logo.png"
                    height={100}
                    width={120}
                    priority
                    alt="Jobes Boxing Gym logo"
                    className="h-5 w-auto"
                  />
                </motion.div>
              </Link>
            </motion.div>
            {/* nav links */}
            <motion.div variants={navVariants} className="hidden gap-10 lg:flex">
              <NavLink text="Home" href="/" />
              <NavLink text="About" href="/about" />
              <NavLink text="Pricing" href="/pricing" />
              <NavLink text="Gallery" href="/gallery" />
              <NavLink text="Contact" href="/contact" />
            </motion.div>
            {/* nav & menu button */}
            <motion.div variants={itemVariants} className="flex items-center gap-2">
              <motion.div
                whileHover={{ scale: 0.97 }}
                whileTap={{ scale: 0.95 }}
                transition={hoverTransition}
              >
                <Link
                  href="https://legitfit.com/authenticate/signup/jobesboxing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex cursor-pointer items-center gap-1 rounded-lg border-2 border-white px-4 py-3 text-[14px] font-bold tracking-[-5%] uppercase transition-colors duration-300 hover:bg-white hover:text-black md:py-4 md:px-5"
                >
                  Get started
                  <LuArrowRight className="text-[20px]" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                transition={hoverTransition}
                className="lg:hidden"
              >
                <IoMenu className="cursor-pointer text-[32px]" onClick={() => setMenuOpen(true)} />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <AnimatePresence>{menuOpen && <Menu setMenuOpen={setMenuOpen} />}</AnimatePresence>{" "}
    </nav>
    </>
  );
}

interface NavLinkProps {
  text: string;
  href: string;
}

function NavLink({ href, text }: NavLinkProps) {
  const hoverTransition = {
    type: "spring" as const,
    stiffness: 220,
    damping: 18,
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: -10 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1] as const,
          },
        },
      }}
      whileHover={{ y: -2 }}
      transition={hoverTransition}
    >
      <Link
        href={href}
        className="font-geist-mono text-[16px] font-medium uppercase transition-colors duration-300 hover:text-[#FFD600]"
      >
        {text}
      </Link>
    </motion.div>
  );
}
