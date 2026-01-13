"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-navy-gradient pt-4 pb-12 md:pt-20 md:pb-32 lg:pt-24 lg:pb-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 md:items-center">
          {/* Image - First on mobile, second on desktop */}
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
              className="relative w-full max-w-md md:max-w-none aspect-[4/3] md:aspect-auto md:h-96"
            >
              <img
                src="/hero.png"
                alt="Familia feliz"
                className="object-cover w-full h-full rounded-2xl md:rounded-lg"
              />
            </motion.div>
          </motion.div>

          {/* Content - Second on mobile, first on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              duration: 0.8,
            }}
            className="space-y-4 md:space-y-6 lg:space-y-8 order-2 md:order-1 text-center md:text-left"
          >
            <div className="space-y-3 md:space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              >
                Su camino completo a la{" "}
                <motion.span
                  initial={{ color: "#ffffff" }}
                  animate={{ color: "#E9B664" }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="text-accent inline-block"
                >
                  ciudadanía
                </motion.span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed max-w-xl mx-auto md:mx-0"
              >
                No solo tramitamos papeles, lo preparamos para el éxito. La
                única firma que ofrece verificación de antecedentes penales,
                asesoría tributaria y preparación completa de ciudadanía y
                representación legal. Todo en un solo lugar.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
              className="flex gap-4 pt-4 justify-center md:justify-start"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-yellow-400 text-[#0B1B3A] hover:bg-yellow-300 font-medium px-6 py-2.5 rounded-full text-sm shadow-md transition-all">
                  Ver opciones
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  className="border border-white/40 text-white bg-white/10 hover:bg-white/20 font-medium px-6 py-2.5 rounded-full text-sm backdrop-blur-sm transition-all"
                >
                  Consulta gratuita
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
