"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

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
              {t("nav_home")}
            </Link>
            <Link
              href="#"
              className="text-white hover:text-accent transition-colors text-sm font-medium"
            >
              {t("nav_services")}
            </Link>
            <Link
              href="#"
              className="text-white hover:text-accent transition-colors text-sm font-medium"
            >
              {t("nav_pricing")}
            </Link>
            <Link
              href="#"
              className="text-white hover:text-accent transition-colors text-sm font-medium"
            >
              {t("nav_about")}
            </Link>
            <Link
              href="#"
              className="text-white hover:text-accent transition-colors text-sm font-medium"
            >
              {t("nav_contact")}
            </Link>
            <div className="flex items-center gap-3 pl-8 border-l border-navy-dark">
              <button
                onClick={() => setLanguage("es")}
                className={`text-sm font-medium transition-colors ${
                  language === "es" ? "text-accent" : "text-white hover:text-accent"
                }`}
              >
                ES
              </button>
              <span className="text-gray-400">/</span>
              <button
                onClick={() => setLanguage("en")}
                className={`text-sm font-medium transition-colors ${
                  language === "en" ? "text-accent" : "text-white hover:text-accent"
                }`}
              >
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
              {t("nav_home")}
            </Link>
            <Link
              href="#"
              className="block text-white hover:text-accent transition-colors text-sm font-medium"
            >
              {t("nav_services")}
            </Link>
            <Link
              href="#"
              className="block text-white hover:text-accent transition-colors text-sm font-medium"
            >
              {t("nav_pricing")}
            </Link>
            <Link
              href="#"
              className="block text-white hover:text-accent transition-colors text-sm font-medium"
            >
              {t("nav_about")}
            </Link>
            <Link
              href="#"
              className="block text-white hover:text-accent transition-colors text-sm font-medium"
            >
              {t("nav_contact")}
            </Link>
            <div className="flex items-center gap-3 pt-3 border-t border-navy-dark">
              <button
                onClick={() => setLanguage("es")}
                className={`text-sm font-medium transition-colors ${
                  language === "es" ? "text-accent" : "text-white hover:text-accent"
                }`}
              >
                ES
              </button>
              <span className="text-gray-400">/</span>
              <button
                onClick={() => setLanguage("en")}
                className={`text-sm font-medium transition-colors ${
                  language === "en" ? "text-accent" : "text-white hover:text-accent"
                }`}
              >
                EN
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
