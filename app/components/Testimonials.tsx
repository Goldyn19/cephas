"use client";
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    img: "/client1.jpg", // Real image
    quote:
      "Their attention to detail and creativity truly stood out. I was impressed by the level of professionalism and dedication they brought to every project. Highly recommended!",
    name: "Jane Doe, XYZ Company",
  },
  {
    img: "/client2.jpg", // Placeholder
    quote: `"They brought our brand to life with custom hand-drawn elements. Creative, professional, and easy to work with."
"Our students loved the art workshop! It was interactive, fun, and educational. We'll definitely invite them again."`,
    name: "Michael Johnson, Marketing Manager",
  },
  {
    img: "/client3.jpg", // Placeholder
    quote:
      "Cephas Artworld turned our school walls into a vibrant learning space. The murals are not just beautiful—they inspire the kids every day.",
    name: "Michael Johnson, Marketing Manager",
  },
];

const Testimonials = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
      className="w-full flex flex-col items-center py-24 px-4 mt-12"
    >
      <span className="text-lg font-bold mb-2 bg-gradient-to-r from-[#A084DC] to-[#F6C6EA] bg-clip-text text-transparent">Testimonials</span>
      <h2 className="text-5xl font-extrabold mb-6 text-center bg-gradient-to-r from-[#A084DC] to-[#F6C6EA] bg-clip-text text-transparent drop-shadow">What The Client Says</h2>
      <p className="max-w-3xl text-lg text-center mb-16 text-gray-100">
        Within this portfolio, you&apos;ll find a curated collection of my best work, including [mention specific types of projects, such as web designs, graphic designs, photography, writing samples, etc.].
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-6xl">
        {testimonials.map((t, idx) => (
          <div key={idx} className="flex flex-col items-center text-center px-8 py-10">
            {t.img ? (
              <img src={t.img} alt={t.name} className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-[#A084DC]/40 shadow-lg" />
            ) : (
              <div className="w-32 h-32 rounded-full bg-gray-300 mb-6 border-4 border-[#A084DC]/20" />
            )}
            <span className="text-4xl text-[#A084DC] mb-4">&quot;</span>
            <p className="text-gray-100 italic mb-6 whitespace-pre-line">{t.quote}</p>
            <span className="font-bold text-lg text-white">{t.name}</span>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Testimonials; 