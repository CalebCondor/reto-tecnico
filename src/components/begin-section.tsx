"use client";

import { useState } from "react";
import ContactModal from "@/components/contact-modal";
import { Button } from "@/components/ui/button";
import { FileText, Shield } from "lucide-react";
import { motion, Variants } from "framer-motion";

const timelineContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const timelineItem: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 150 },
  },
};

const packageContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const packageItem: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100 },
  },
};

export default function BeginSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Top Section - White Background */}
      <section className="bg-white pt-16 md:pt-24 pb-12 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4">
              Comience con certeza
            </h2>
            <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
              Antes de aplicar, realizamos un diagnóstico profundo para asegurar
              que su caso sea exitoso.
            </p>
          </motion.div>

          {/* Timeline Card - Floating overlaps spacing */}
          <div className="bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 p-8 md:p-12 max-w-5xl mx-auto relative z-20 mb-[-100px] md:mb-[-140px]">
            {/* Timeline Steps */}
            <motion.div
              variants={timelineContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8 md:mb-12 relative"
            >
              {/* Connecting Line (Desktop) */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "calc(100% - 10rem)" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                className="hidden md:block absolute top-6 left-20 right-20 h-0.5 bg-yellow-400 -z-10"
              />

              {/* Step 1 */}
              <motion.div
                variants={timelineItem}
                className="flex flex-col items-center flex-1 w-full md:w-auto text-center z-10 bg-white md:bg-transparent p-2 md:p-0 rounded-lg"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold text-lg mb-4 md:mb-6 shadow-sm ring-4 ring-white"
                >
                  1
                </motion.div>
                <div className="mb-4 text-accent">
                  <FileText size={40} strokeWidth={1.5} />
                </div>
                <h4 className="font-semibold text-navy text-sm md:text-base leading-tight">
                  Revisión de su
                  <br />
                  expediente migratorio
                </h4>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                variants={timelineItem}
                className="flex flex-col items-center flex-1 w-full md:w-auto text-center z-10 bg-white md:bg-transparent p-2 md:p-0 rounded-lg"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: -10 }}
                  className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold text-lg mb-4 md:mb-6 shadow-sm ring-4 ring-white"
                >
                  2
                </motion.div>
                <div className="mb-4 text-accent">
                  <Shield size={40} strokeWidth={1.5} />
                </div>
                <h4 className="font-semibold text-navy text-sm md:text-base leading-tight">
                  Revisión de sus
                  <br />
                  antecedentes penales
                </h4>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                variants={timelineItem}
                className="flex flex-col items-center flex-1 w-full md:w-auto text-center z-10 bg-white md:bg-transparent p-2 md:p-0 rounded-lg"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold text-lg mb-4 md:mb-6 shadow-sm ring-4 ring-white"
                >
                  3
                </motion.div>
                <div className="mb-4 text-navy font-serif text-3xl font-bold flex items-center h-10">
                  <span className="text-4xl text-navy/80 tracking-tighter">
                    IRS
                  </span>
                </div>
                <h4 className="font-semibold text-navy text-sm md:text-base leading-tight">
                  Revisión de sus aspectos
                  <br />
                  contributivos con el IRS
                </h4>
              </motion.div>
            </motion.div>

            {/* Price & Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="text-center space-y-6"
            >
              <p className="text-navy font-semibold text-lg">
                Costo de investigación integral desde:{" "}
                <span className="font-bold">$800</span>
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-navy hover:bg-navy-dark text-white rounded-full px-12 py-6 text-base font-medium min-w-[240px]"
                >
                  Agendar consulta
                </Button>
              </motion.div>
              <p className="text-gray-400 text-xs italic max-w-lg mx-auto">
                Este análisis es indispensable para recomendar el paquete de
                naturalización adecuado.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom Section - Navy Background */}
      <section className="bg-navy pt-40 md:pt-56 pb-24 px-4 relative z-0">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Nuestros Paquetes
            </h2>
          </motion.div>

          {/* Packages Grid */}
          <motion.div
            variants={packageContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {/* Package 1 */}
            <motion.div
              variants={packageItem}
              whileHover={{ y: -20, scale: 1.02 }}
              className="border border-white/20 rounded-2xl p-8 bg-[#1e2345] hover:bg-[#252b50] transition-colors relative group"
            >
              <h3 className="text-white text-lg font-bold mb-4 leading-snug min-h-[56px] flex items-center justify-center text-center">
                Naturalización
                <br />+ Plan de Pago
              </h3>
              <div className="text-center mb-8">
                <span className="text-white/60 text-sm">Desde</span>
                <div className="text-4xl font-bold text-white mt-1">$1,100</div>
              </div>
              <motion.div whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-accent hover:bg-yellow-500 text-navy font-bold rounded-full py-6 mb-8 uppercase text-sm tracking-wide"
                >
                  Comenzar ahora
                </Button>
              </motion.div>
              <ul className="space-y-3 text-xs md:text-sm text-gray-300 text-left">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5 min-w-[6px]">▪</span>{" "}
                  Solicitud de inmigración.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5 min-w-[6px]">▪</span>{" "}
                  Coordinación de plan de pago con IRS.
                </li>
              </ul>
            </motion.div>

            {/* Package 2 (Popular) */}
            <motion.div
              variants={packageItem}
              whileHover={{ y: -25, scale: 1.05 }}
              className="border border-accent/50 rounded-2xl p-8 bg-[#1e2345] relative hover:bg-[#252b50] transition-colors"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <motion.span
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="bg-[#1a1f3d] text-white text-[10px] uppercase font-bold px-3 py-1 rounded-full border border-gray-600 shadow-xl tracking-wider inline-block"
                >
                  Más Popular
                </motion.span>
              </div>
              <h3 className="text-white text-lg font-bold mb-4 leading-snug min-h-[56px] flex items-center justify-center text-center">
                Naturalización
                <br />+ Análisis financiero
              </h3>
              <div className="text-center mb-8">
                <span className="text-white/60 text-sm">Desde</span>
                <div className="text-4xl font-bold text-white mt-1">$1,800</div>
              </div>
              <motion.div whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-accent hover:bg-yellow-500 text-navy font-bold rounded-full py-6 mb-8 uppercase text-sm tracking-wide"
                >
                  Comenzar ahora
                </Button>
              </motion.div>
              <ul className="space-y-3 text-xs md:text-sm text-gray-300 text-left">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5 min-w-[6px]">▪</span>{" "}
                  Solicitud de inmigración.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5 min-w-[6px]">▪</span>{" "}
                  coordinación de plan de pago parcial con IRS (Si, califica).
                </li>
              </ul>
            </motion.div>

            {/* Package 3 */}
            <motion.div
              variants={packageItem}
              whileHover={{ y: -20, scale: 1.02 }}
              className="border border-white/20 rounded-2xl p-8 bg-[#1e2345] hover:bg-[#252b50] transition-colors"
            >
              <h3 className="text-white text-lg font-bold mb-4 leading-snug min-h-[56px] flex items-center justify-center text-center">
                Naturalización
                <br />+ Protección contra Embargos I
              </h3>
              <div className="text-center mb-8">
                <span className="text-white/60 text-sm">Desde</span>
                <div className="text-4xl font-bold text-white mt-1">$1,600</div>
              </div>
              <motion.div whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-accent hover:bg-yellow-500 text-navy font-bold rounded-full py-6 mb-8 uppercase text-sm tracking-wide"
                >
                  Comenzar ahora
                </Button>
              </motion.div>
              <ul className="space-y-3 text-xs md:text-sm text-gray-300 text-left">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5 min-w-[6px]">▪</span>{" "}
                  Solicitud de inmigración.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5 min-w-[6px]">▪</span>{" "}
                  Protección continua a su cuenta mientras completamos los
                  requisitos para un plan de pago.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5 min-w-[6px]">▪</span>{" "}
                  Coordinación con plan de pago con IRS.
                </li>
                <li className="text-[10px] text-accent mt-4 italic opacity-80">
                  (No incluye cuota de presentación de $725)
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Carousel Indicator style */}
          <div className="flex justify-center gap-2 mt-16">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="w-12 h-1.5 bg-accent rounded-full"
            ></motion.div>
            <div className="w-12 h-1.5 bg-gray-600 rounded-full"></div>
          </div>
        </div>
      </section>
      {/* Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
