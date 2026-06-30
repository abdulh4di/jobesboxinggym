"use client";

import { motion } from "framer-motion";
import { FaFacebook } from "react-icons/fa";
import Padding from "./Padding";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io5";

export default function Footer() {
  const footerVariants = {
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

  const linkHover = {
    y: -2,
    transition: hoverTransition,
  };

  return (
    <footer>
      <div className="px-4 md:px-8 lg:px-13">
        <motion.div
          className="mx-auto w-full max-w-7xl space-y-4"
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div
            className="flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:justify-between"
            variants={footerVariants}
          >
            {/* Content 1 */}
            <motion.div variants={itemVariants} className="flex flex-col gap-4">
              <div className="flex flex-col text-base leading-6 -tracking-widest">
                <span>Jobes Boxing & Fitness Gym CIC</span>
                <span>West Fifteen - Unit 4, Whickham View</span>
                <span>Newcastle upon Tyne</span>
                <span>NE15 6UN</span>

                <FooterLink href="mailto:jobesboxinggym@gmail.com">
                  jobesboxinggym@gmail.com
                </FooterLink>

                <FooterLink href="tel:07701394066">07701394066</FooterLink>
              </div>

              <figure>
                <img
                  src="/assets/JobesLogo.png"
                  alt="Jobes Boxing Gym logo"
                  className="h-20 w-30 opacity-55"
                />
              </figure>
            </motion.div>

            {/* Content 2 */}
            <motion.div variants={itemVariants} className="flex flex-col gap-4">
              <h2 className="text-[24px] font-semibold -tracking-widest">Pages</h2>

              <div className="flex flex-col -tracking-widest">
                <FooterLink href="/">Home</FooterLink>
                <FooterLink href="/about">About</FooterLink>
                <FooterLink href="/prices">Prices</FooterLink>
                <FooterLink href="/gallery">Gallery</FooterLink>
                <FooterLink href="/contact">Contact</FooterLink>
              </div>
            </motion.div>

            {/* Content 3 */}
            <motion.div variants={itemVariants} className="flex flex-col gap-4">
              <h2 className="text-[24px] font-semibold -tracking-widest">Senior Sessions</h2>

              <div className="flex flex-col gap-2 text-base -tracking-widest">
                <div className="flex flex-col gap-1">
                  <span>Monday - Saturday</span>
                  <span>10am - 12pm</span>
                </div>

                <div className="flex flex-col gap-1">
                  <span>Monday - Saturday</span>
                  <span>6pm - 7pm</span>
                </div>
              </div>
            </motion.div>

            {/* Content 4 */}
            <motion.div variants={itemVariants} className="flex flex-col gap-4">
              <h2 className="text-[24px] font-semibold -tracking-widest">
                Kids Sessions <span className="text-base font-normal">(age 8+)</span>
              </h2>

              <div className="flex flex-col gap-2 text-base -tracking-widest">
                <span>Monday, Wednesday & Friday</span>
                <span>5pm - 6pm</span>
              </div>
            </motion.div>

            {/* Content 5 */}
            <motion.div variants={itemVariants} className="flex flex-col gap-4">
              <h2 className="text-[24px] font-semibold -tracking-widest">
                Free Sessions <span className="text-base font-normal">(age 13-19)</span>
              </h2>

              <div className="flex flex-col gap-2 text-base -tracking-widest">
                <span>Tuesday & Thursday</span>
                <span>4:30pm - 6pm</span>
              </div>
            </motion.div>

            {/* Content 6 */}
            <motion.div variants={itemVariants} className="flex flex-col gap-4">
              <h2 className="text-[24px] font-semibold -tracking-widest">Follow</h2>

              <div className="flex flex-col gap-2 text-base -tracking-widest">
                <motion.a
                  href="https://www.facebook.com/jobesboxingandfitnessgym/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={linkHover}
                  className="flex cursor-pointer items-center gap-2 transition-colors duration-300 hover:text-[#FFD600]"
                >
                  <FaFacebook className="text-[30px]" />
                  Facebook
                </motion.a>

                <motion.a
                  href="https://instagram.com/jobesgym"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={linkHover}
                  className="flex cursor-pointer items-center gap-2 transition-colors duration-300 hover:text-[#FFD600]"
                >
                  <AiFillInstagram className="text-[32px]" />
                  Instagram
                </motion.a>

                <motion.a
                  href="https://wa.me/447701394066"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={linkHover}
                  className="flex cursor-pointer items-center gap-2 transition-colors duration-300 hover:text-[#FFD600]"
                >
                  <IoLogoWhatsapp className="text-[32px]" />
                  WhatsApp
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <Padding />
    </footer>
  );
}

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

function FooterLink({ href, children }: FooterLinkProps) {
  const hoverTransition = {
    type: "spring" as const,
    stiffness: 220,
    damping: 18,
  };

  return (
    <motion.a
      href={href}
      whileHover={{ y: -2 }}
      transition={hoverTransition}
      className="cursor-pointer transition-colors duration-300 hover:text-[#FFD600]"
    >
      {children}
    </motion.a>
  );
}
