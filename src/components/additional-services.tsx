"use client";

import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";

const listContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const listItem: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" as const, stiffness: 50 },
  },
};

const testimonialContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const testimonialItem: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 80 },
  },
};

export default function AdditionalServices() {
  return (
    <section className="bg-white py-12 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 mb-12 md:mb-16 items-start">
          {/* Left side - Title, Text, Button */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start text-left"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-navy">
              Servicios adicionales
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
              Nuestros abogados especializados le ofrecen representación experta
              frente a los desafíos más complejos con el IRS y las autoridades
              de inmigración.
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="border-2 border-navy text-navy hover:bg-navy hover:text-white font-bold rounded-full px-8 py-6 text-base"
              >
                Agendar consulta
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side - List */}
          <div>
            <motion.ul
              variants={listContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-4 text-sm md:text-base text-gray-700"
            >
              {[
                "Representación en vistas sobre embargos.",
                "Negociación de gravámenes.",
                "Representación ante el US Tax Court.",
                "Representación ante el US Board of Immigration.",
                "Solicitud de perdón de penalidades.",
                "Representación en casos de robo de identidad contributiva.",
                "Ofertas en compromiso para negociar el monto de la deuda.",
              ].map((item, index) => (
                <motion.li
                  variants={listItem}
                  key={index}
                  className="flex items-start gap-3"
                >
                  <span className="text-accent font-bold text-lg leading-none mt-1">
                    •
                  </span>
                  <span className="font-medium text-navy/80">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>

        {/* Featured Card */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring" }}
          className="relative mt-12 md:mt-64 lg:mt-68 mb-16"
        >
          <div className="bg-[#1e2345] rounded-3xl p-8 md:p-12 lg:px-16 overflow-visible relative">
            {/* Background Decoration (Abstract curves) */}
            <div className="absolute top-0 right-0 bottom-0 w-1/2 overflow-hidden rounded-r-3xl pointer-events-none opacity-20">
              <div className="absolute -right-20 -top-40 w-[500px] h-[500px] rounded-full border-[40px] border-white/10" />
              <div className="absolute -right-10 -top-20 w-[400px] h-[400px] rounded-full border-[40px] border-white/10" />
            </div>

            <div className="flex flex-col lg:flex-row items-center">
              {/* Image - Pop out effect */}
              <div className="hidden lg:block lg:w-5/12 relative h-0">
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="absolute bottom-[-160px] left-[-20px] w-[115%] flex items-end"
                >
                  <img
                    src="/servicio.png"
                    alt="Couple smiling"
                    className="w-full h-auto max-h-[500px] object-contain object-bottom drop-shadow-2xl"
                  />
                </motion.div>
              </div>

              {/* Mobile Image (Just inline) - Hidden on mobile/tablet as requested */}
              <div className="hidden w-full mb-8 -mt-20">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <img
                    src="/servicio.png"
                    alt="Couple smiling"
                    className="w-3/4 mx-auto h-auto object-contain drop-shadow-2xl"
                  />
                </motion.div>
              </div>

              {/* Content */}
              <div className="lg:w-7/12 lg:ml-auto relative z-10 text-center lg:text-left pl-0 lg:pl-12">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                  Verificación de elegibilidad gratuita de 15 minutos
                </h3>
                <p className="text-gray-300 text-sm md:text-base mb-8 max-w-xl mx-auto lg:mx-0">
                  Descubra si califica y qué obstáculos podrían estar en su
                  camino antes de gastar un dólar.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block"
                >
                  <Button className="border-white border-2 text-white rounded-full px-8 py-6 text-base font-semibold transition-all">
                    Consultar ahora
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-2">
            Clientes <span className="text-accent">satisfechos</span>
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-navy">
            confían en Puente Legal
          </h3>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={testimonialContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            {
              name: "Herman miller",
              title: "Chief financial",
              text: "Lorem ipsum dolor amet ipsum ad est et nullam sed ipsum ante molestie. adipiscing elit eiusmod tempor lorem ipsum incididunt.",
            },
            {
              name: "Shoko mugikura",
              title: "Financial manager",
              text: "Lorem ipsum dolor amet ipsum ad est et nullam sed ipsum ante molestie. adipiscing elit eiusmod tempor lorem ipsum incididunt.",
            },
            {
              name: "Matthew taylor",
              title: "Office manager",
              text: "Lorem ipsum dolor amet ipsum ad est et nullam sed ipsum ante molestie. adipiscing elit eiusmod tempor lorem ipsum incididunt.",
            },
          ].map((testimonial, index) => (
            <motion.div
              variants={testimonialItem}
              key={index}
              className="flex flex-col"
            >
              {/* Speech Bubble */}
              <motion.div
                whileHover={{
                  y: -5,
                  boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
                }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative mb-6"
              >
                <p className="text-gray-500 text-sm leading-relaxed">
                  {testimonial.text}
                </p>
                {/* Tail arrow */}
                <div className="absolute -bottom-3 left-10 w-6 h-6 bg-white border-b border-r border-gray-100 transform rotate-45" />
              </motion.div>

              {/* User Profile */}
              <div className="flex items-center gap-4 pl-6">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden flex-shrink-0">
                  {/* Placeholder formatting if no image */}
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    <span className="text-xl grayscale">👤</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-navy text-base leading-tight">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-gray-400 font-medium">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
