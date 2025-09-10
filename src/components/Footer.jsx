import React from "react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-light pt-16 pb-8 border-t border-light/20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-extrabold text-light mb-4">Leo9App</h2>
          <p className="text-sm text-light/80">
            Building the future of digital products with creativity, strategy, and technology.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-accent">🌐</a>
            <a href="#" className="hover:text-accent">🐦</a>
            <a href="#" className="hover:text-accent">📘</a>
            <a href="#" className="hover:text-accent">📸</a>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold text-light mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-accent">About Us</a></li>
            <li><a href="#services" className="hover:text-accent">Services</a></li>
            <li><a href="#work" className="hover:text-accent">Work</a></li>
            <li><a href="#contact" className="hover:text-accent">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold text-light mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-accent">Blog</a></li>
            <li><a href="#" className="hover:text-accent">Case Studies</a></li>
            <li><a href="#" className="hover:text-accent">Careers</a></li>
            <li><a href="#" className="hover:text-accent">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-light mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>📍 123 Main Street, City</li>
            <li>📞 +1 (555) 123-4567</li>
            <li>✉️ hello@leo9app.com</li>
            <li>🕒 Mon-Fri 9AM-6PM</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 border-t border-light/20 pt-6 text-center text-sm text-light/60">
        © {new Date().getFullYear()} Leo9App. All rights reserved.
      </div>
    </footer>
  );
}
