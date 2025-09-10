import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar({ onMenuClick }) {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-50 bg-white/70 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-extrabold tracking-tight text-primary dark:text-white"
        >
          Leo9<span className="text-accent">App</span>
        </a>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#hero" className="hover:text-accent transition">
            Home
          </a>
          <a href="#about" className="hover:text-accent transition">
            About
          </a>
          <a href="#services" className="hover:text-accent transition">
            Services
          </a>
          <a href="#contact" className="hover:text-accent transition">
            Contact
          </a>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
            className="p-2 rounded-lg border dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? "🌞" : "🌙"}
          </button>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden md:inline-block px-5 py-2 rounded-md bg-accent text-white hover:bg-accent/90 transition"
          >
            Get Started
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 focus:outline-none"
            aria-label="Open Menu"
            onClick={onMenuClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.header>
  );
}
