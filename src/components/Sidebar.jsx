import React from "react";
import { motion } from "framer-motion";

export default function Sidebar({ isOpen, onClose }) {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? 0 : "100%" }}
      transition={{ type: "spring", stiffness: 80 }}
      className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 p-6"
    >
      {/* Close button */}
      <button onClick={onClose} className="mb-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Menu items */}
      <nav className="flex flex-col gap-6 text-lg font-medium">
        <a href="#hero" onClick={onClose} className="hover:text-accent transition">Home</a>
        <a href="#about" onClick={onClose} className="hover:text-accent transition">About</a>
        <a href="#services" onClick={onClose} className="hover:text-accent transition">Services</a>
        <a href="#contact" onClick={onClose} className="hover:text-accent transition">Contact</a>
      </nav>
    </motion.div>
  );
}
