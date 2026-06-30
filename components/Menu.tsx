"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface MenuProps {
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Menu({ setMenuOpen }: MenuProps) {
  return (
    <motion.div
      className="fixed inset-0 z-40 lg:hidden"
      onClick={() => setMenuOpen(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute left-4 right-4 top-25 flex flex-col items-center gap-4 rounded-xl bg-[#050505] border border-white/30 px-4 py-6 lg:hidden"
      >
        <NavLink onClick={() => setMenuOpen(false)} text="Home" href="/" />
        <NavLink onClick={() => setMenuOpen(false)} text="About" href="/about" />
        <NavLink onClick={() => setMenuOpen(false)} text="Pricing" href="/pricing" />
        <NavLink onClick={() => setMenuOpen(false)} text="Gallery" href="/gallery" />
        <NavLink onClick={() => setMenuOpen(false)} text="Contact" href="/contact" />
      </motion.div>
    </motion.div>
  );
}

interface NavLinkProps {
  text: string;
  href: string;
  onClick: () => void;
}

function NavLink({ href, text, onClick }: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="font-geist-mono text-[#afafaf] text-[16px] font-medium uppercase transition-colors duration-300 hover:text-[#FFD600]"
    >
      {text}
    </Link>
  );
}