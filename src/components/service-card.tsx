"use client";

import type React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  isFirst?: boolean;
}

const item: Variants = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
};

export default function ServiceCard({
  icon,
  title,
  description,
  isFirst,
}: ServiceCardProps) {
  if (isFirst) {
    return (
      <motion.div
        variants={item}
        whileHover={{ scale: 1.05, rotate: 1 }}
        className="bg-navy-dark rounded-xl p-8 hover:shadow-2xl transition-shadow cursor-pointer"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
          className="mb-6"
        >
          <Image
            src={icon}
            alt={title}
            width={48}
            height={48}
            className="object-contain"
          />
        </motion.div>

        {/* Title - White text */}
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>

        {/* Description - Light gray text */}
        <p className="text-gray-200 text-base leading-relaxed mb-6">
          {description}
        </p>

        {/* Button - White outline */}
        <motion.div whileTap={{ scale: 0.9 }}>
          <Button
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-navy transition-colors font-bold rounded-full px-6 py-2 bg-transparent"
          >
            Ver más
          </Button>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={item}
      whileHover={{ scale: 1.05, y: -10 }}
      className="bg-white rounded-xl border-2 border-navy-light p-8 hover:shadow-2xl transition-shadow cursor-pointer"
    >
      {/* Icon */}
      <motion.div className="mb-6">
        <Image
          src={icon}
          alt={title}
          width={48}
          height={48}
          className="object-contain"
        />
      </motion.div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-navy mb-3">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 text-base leading-relaxed mb-6">
        {description}
      </p>

      {/* Button */}
      <motion.div whileTap={{ scale: 0.9 }}>
        <Button
          variant="outline"
          className="border-2 border-navy text-navy hover:bg-navy hover:text-white transition-colors font-bold rounded-full px-6 py-2 bg-transparent"
        >
          Ver más
        </Button>
      </motion.div>
    </motion.div>
  );
}
