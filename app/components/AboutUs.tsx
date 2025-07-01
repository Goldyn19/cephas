"use client";
import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
      className="w-full flex flex-col items-center py-24 px-4 mt-12"
    >
      <h2 className="text-4xl font-extrabold mb-6 text-center bg-gradient-to-r from-[#A084DC] to-[#F6C6EA] bg-clip-text text-transparent drop-shadow">About Us</h2>
      <p className="max-w-3xl text-lg text-center mb-12 text-gray-100">
        Cephas Artworld Studios is a creative studio passionate about transforming schools through art. We specialize in mural design, school beautification, and educational consultation to elevate learning spaces to international standards.
      </p>
      <h3 className="text-3xl font-bold mb-8 text-center text-white">Proficient in</h3>
      <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
        <div className="flex items-center text-xl font-semibold px-2 py-1">
          Art Education and Consultancy
          <span className="ml-2 text-[#A084DC] text-2xl">&#8599;</span>
        </div>
        <div className="flex items-center text-xl font-semibold px-2 py-1">
          Branding
          <span className="ml-2 text-[#A084DC] text-2xl">&#8599;</span>
        </div>
        <div className="flex items-center text-xl font-semibold px-2 py-1">
          Mural
          <span className="ml-2 text-[#A084DC] text-2xl">&#8599;</span>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutUs; 