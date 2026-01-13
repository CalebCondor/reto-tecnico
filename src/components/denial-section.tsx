"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function DenialSection() {
  return (
    <section className="py-8 md:py-24 px-4 bg-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col gap-6">
          {/* Content First on Mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full text-center space-y-4 px-4"
          >
            <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
              Cada año, más de 100,000
              <br />
              Solicitudes de ciudadanía son
              <br />
              <motion.span
                initial={{ color: "#ffffff", scale: 1 }}
                whileInView={{ color: "#ef4444", scale: [1, 1.1, 1] }}
                transition={{
                  delay: 1,
                  duration: 0.5,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
                className="inline-block text-red-500"
              >
                DENEGADAS
              </motion.span>
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
              Las restricciones son mayores cada año: Muchas solicitudes son
              denegadas por fallar en el examen, no poder probar buen carácter
              moral (DUI, delitos menores, deudas de pensiones alimenticias,
              deudas con el IRS)
            </p>
          </motion.div>

          {/* Images - First Right, Second Left */}
          <div className="flex flex-col gap-4 w-full">
            {/* First Image - Right Aligned */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 60, delay: 0.2 }}
              className="w-48 self-end pr-4"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/denial1.png"
                  alt="Persona frustrada con documentos"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Second Image - Left Aligned */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 60, delay: 0.4 }}
              className="w-40 self-start pl-4"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/denial2.png"
                  alt="Persona preocupada pensando"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center justify-between gap-12">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -100, rotate: -10 }}
            whileInView={{ opacity: 1, x: 0, rotate: -3 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 60, delay: 0.2 }}
            className="w-1/4 max-w-sm"
          >
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl transform hover:rotate-0 transition-transform duration-500">
              <Image
                src="/denial1.png"
                alt="Persona frustrada con documentos"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Center Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-1/2 text-center space-y-6"
          >
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Cada año, más de 100,000
              <br />
              Solicitudes de ciudadanía son
              <br />
              <motion.span
                initial={{ color: "#ffffff", scale: 1 }}
                whileInView={{ color: "#ef4444", scale: [1, 1.1, 1] }}
                transition={{
                  delay: 1,
                  duration: 0.5,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
                className="inline-block text-red-500"
              >
                DENEGADAS
              </motion.span>
            </h2>
            <p className="text-gray-300 text-base leading-relaxed max-w-2xl mx-auto">
              Las restricciones son mayores cada año: Muchas solicitudes son
              denegadas por fallar en el examen, no poder probar buen carácter
              moral (DUI, delitos menores, deudas de pensiones alimenticias,
              deudas con el IRS)
            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotate: 10 }}
            whileInView={{ opacity: 1, x: 0, rotate: 3 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 60, delay: 0.2 }}
            className="w-1/4 max-w-sm"
          >
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl transform hover:rotate-0 transition-transform duration-500">
              <Image
                src="/denial2.png"
                alt="Persona preocupada pensando"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Background Element */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay pointer-events-none"></div>
    </section>
  );
}
