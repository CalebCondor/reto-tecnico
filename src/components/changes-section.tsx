"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function ChangesSection() {
  const { t } = useLanguage();
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Main Title */}
        <div className="text-center mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy"
          >
            {t("changes_main_title")}
          </motion.h2>
        </div>

        <div className="flex flex-col gap-12 md:gap-24">
          {/* Section 1: La Situación Actual */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
          >
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <span className="inline-block bg-navy text-white px-6 py-2 rounded-full text-sm font-bold mb-6">
                {t("changes_current_label")}
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-navy mb-6 leading-tight">
                {t("changes_current_title")}
              </h3>
              <ul className="space-y-3 mb-8">
                {[
                  t("changes_current_item_1"),
                  t("changes_current_item_2"),
                  t("changes_current_item_3"),
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 + 0.5 }}
                    className="flex items-center gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                    <span className="text-gray-500 text-base md:text-lg">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 text-base md:text-lg">
                <span className="text-gray-400 font-bold">{t("changes_result_label")}</span>
                <span className="text-red-500 font-bold">
                  {t("changes_result_text")}
                </span>
              </div>
            </div>
            {/* Image */}
            <div className="order-1 lg:order-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative h-64 md:h-80 lg:h-96 w-full rounded-3xl overflow-hidden"
              >
                <Image
                  src="/hero.png"
                  alt="Couple looking sad on a bench"
                  width={500}
                  height={500}
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Section 2: Nuestra Solución */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
          >
            {/* Image */}
            <div className="order-1">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative h-64 md:h-80 lg:h-96 w-full rounded-3xl overflow-hidden"
              >
                <Image
                  src="/hero.png"
                  alt="Couple walking happily"
                  width={500}
                  height={500}
                  className="object-cover"
                />
              </motion.div>
            </div>
            {/* Text Content */}
            <div className="order-2">
              <span className="inline-block bg-accent text-navy px-6 py-2 rounded-full text-sm font-bold mb-6">
                {t("changes_solution_label")}
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-navy mb-6">
                {t("changes_solution_title")}
              </h3>
              <ul className="space-y-3">
                {[
                  t("changes_solution_item_1"),
                  t("changes_solution_item_2"),
                  t("changes_solution_item_3"),
                  t("changes_solution_item_4"),
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 + 0.5 }}
                    className="flex items-center gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                    <span className="text-gray-500 text-base md:text-lg">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
