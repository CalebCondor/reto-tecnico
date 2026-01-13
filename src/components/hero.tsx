"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-navy-gradient pt-8 pb-12 md:pt-20 md:pb-32 lg:pt-24 lg:pb-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              duration: 0.8,
            }}
            className="space-y-4 md:space-y-6 lg:space-y-8 order-2 md:order-1"
          >
            <div className="space-y-3 md:space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              >
                Su camino completo a la ciudadanía{" "}
                <motion.span
                  initial={{ color: "#ffffff" }}
                  animate={{ color: "#E9B664" }} // Assuming 'text-accent' is close to this gold, forcing it for animation pop
                  transition={{ delay: 1, duration: 0.5 }}
                  className="text-accent inline-block"
                >
                  Estadounidense
                </motion.span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed"
              >
                No solo asesoramos previos, lo preparamos por el filtro. La
                única firma que ofrece la asesoría tributaria que ofrecemos
                durante el proceso de ciudadanía y regularización para todo el
                país.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
              className="flex flex-col sm:flex-row gap-3 pt-2 md:pt-4"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button className="bg-accent text-navy hover:bg-accent/90 font-bold px-6 sm:px-8 py-2.5 sm:py-6 rounded-full text-sm sm:text-base w-full sm:w-auto">
                  Ver opciones
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, rotate: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 font-bold px-6 sm:px-8 py-2.5 sm:py-6 rounded-full text-sm sm:text-base bg-transparent w-full sm:w-auto"
                >
                  Consulte gratuite
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 15,
              delay: 0.2,
            }}
            className="flex justify-center md:justify-end order-1 md:order-2"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative w-full max-w-sm md:max-w-none aspect-square md:aspect-auto md:h-96"
            >
              <img
                src="/hero.png"
                alt="Familia feliz"
                className="object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
