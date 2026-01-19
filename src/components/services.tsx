"use client";

import { useState, useCallback } from "react";
import ServiceCard from "./service-card";
import { motion, Variants } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";


const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export default function Services() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      icon: "/Group 19.png",
      title: t("service_card_1_title"),
      description: t("service_card_1_desc"),
      isFirst: true,
    },
    {
      icon: "/Group 8.png",
      title: t("service_card_2_title"),
      description: t("service_card_2_desc"),
      isFirst: false,
    },
    {
      icon: "/Group 9.png",
      title: t("service_card_3_title"),
      description: t("service_card_3_desc"),
      isFirst: false,
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  }, []);

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
          className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-12 lg:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy max-w-2xl leading-tight">
            {t("services_360_title_1")} <span className="text-accent">{t("services_360_title_accent")}</span>
            {t("services_360_title_2")}
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-lg">
            {t("services_360_description")}
          </p>
        </motion.div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden -mx-4 px-4">
            <motion.div
              className="flex cursor-grab active:cursor-grabbing"
              drag="x"
              dragMomentum={false}
              dragElastic={0}
              animate={{ x: `-${currentSlide * 100}%` }}
              transition={{ type: "spring", stiffness: 400, damping: 40 }}
              onDragEnd={(e, { offset, velocity }) => {
                // Umbral de sensibilidad (distancia mínima o velocidad de 'flick')
                const swipeThreshold = 30;
                const velocityThreshold = 500;

                if (
                  offset.x < -swipeThreshold ||
                  velocity.x < -velocityThreshold
                ) {
                  nextSlide();
                } else if (
                  offset.x > swipeThreshold ||
                  velocity.x > velocityThreshold
                ) {
                  prevSlide();
                }
              }}
            >
              {services.map((service, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <ServiceCard {...service} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-accent w-8" : "bg-gray-300 w-2"
                }`}
                aria-label={`Ir a slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
