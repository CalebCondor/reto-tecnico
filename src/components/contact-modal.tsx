"use client";

import { X, Phone, MessageCircle } from "lucide-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative w-full max-w-3xl bg-[#1a1f3d] rounded-[2.5rem] shadow-2xl p-8 md:p-12 overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
            >
              <X size={32} />
            </button>

            {/* Title */}
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-medium text-white leading-tight max-w-2xl mx-auto">
                Para comenzar o si tiene preguntas sobre que opción es la
                adecuada para su caso:
              </h2>
            </div>

            {/* Action Boxes */}
            <div className="grid md:grid-cols-2 gap-6 mb-10 max-w-2xl mx-auto">
              {/* Phone Box */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="border border-white/20 rounded-3xl p-8 flex flex-col items-center justify-center text-center h-full hover:bg-white/5 transition-colors"
              >
                <span className="text-white text-lg mb-6">Llámenos al</span>
                <Button className="w-full bg-[#ffc107] hover:bg-[#ffb300] text-navy font-bold rounded-full py-6 text-lg mb-4">
                  (787) 555-5555
                </Button>
                <div className="text-white/90 text-sm leading-tight">
                  <p>Lunes a Viernes</p>
                  <p>de 8am a 6pm EST</p>
                </div>
              </motion.div>

              {/* WhatsApp Box */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="border border-white/20 rounded-3xl p-8 flex flex-col items-center justify-center text-center h-full hover:bg-white/5 transition-colors"
              >
                <span className="text-white text-lg mb-6">Escríbanos por</span>
                <Button className="w-full bg-[#25D366] hover:bg-[#1faa52] text-white font-bold rounded-full py-6 text-lg mb-4 flex items-center justify-center gap-2">
                  <MessageCircle className="w-6 h-6 fill-current" />
                  WhatsApp
                </Button>
                <div className="text-white/90 text-sm">
                  <p>(24/7)</p>
                </div>
              </motion.div>
            </div>

            {/* Footer Link */}
            <div className="text-center">
              <p className="text-white text-sm md:text-base">
                Contáctenos via chat haciendo{" "}
                <button className="text-[#ffc107] underline underline-offset-4 hover:text-[#ffb300] font-medium transition-colors">
                  click aquí
                </button>
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
