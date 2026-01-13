"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy border-b border-navy-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Logo" width={200} height={60} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#"
              className="text-white hover:text-accent transition-colors text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-white hover:text-accent transition-colors text-sm font-medium"
            >
              Services
            </Link>
            <Link
              href="#"
              className="text-white hover:text-accent transition-colors text-sm font-medium"
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="text-white hover:text-accent transition-colors text-sm font-medium"
            >
              About
            </Link>
            <Link
              href="#"
              className="text-white hover:text-accent transition-colors text-sm font-medium"
            >
              Contacto
            </Link>
            <div className="flex items-center gap-3 pl-8 border-l border-navy-dark">
              <button className="text-white text-sm font-medium hover:text-accent transition-colors">
                ES
              </button>
              <span className="text-gray-400">/</span>
              <button className="text-white text-sm font-medium hover:text-accent transition-colors">
                EN
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-accent transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-3">
            <Link
              href="#"
              className="block text-white hover:text-accent transition-colors text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="#"
              className="block text-white hover:text-accent transition-colors text-sm font-medium"
            >
              Services
            </Link>
            <Link
              href="#"
              className="block text-white hover:text-accent transition-colors text-sm font-medium"
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="block text-white hover:text-accent transition-colors text-sm font-medium"
            >
              About
            </Link>
            <Link
              href="#"
              className="block text-white hover:text-accent transition-colors text-sm font-medium"
            >
              Contacto
            </Link>
            <div className="flex items-center gap-3 pt-3 border-t border-navy-dark">
              <button className="text-white text-sm font-medium hover:text-accent transition-colors">
                ES
              </button>
              <span className="text-gray-400">/</span>
              <button className="text-white text-sm font-medium hover:text-accent transition-colors">
                EN
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
