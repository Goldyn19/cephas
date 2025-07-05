"use client";
import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Mural, Painting and Graffiti Art",
    desc: "Vibrant wall art that expresses stories, culture, and urban creativity.",
  },
  {
    title: "School Beautification Projects",
    desc: "Creative upgrades that make school spaces more vibrant, welcoming, and inspiring.",
  },
  {
    title: "Thematic Classroom Makeovers",
    desc: "Transforming classrooms with creative themes to inspire and engage learners.",
  },
  {
    title: "Educational & Business Consultation",
    desc: "Expert guidance to improve learning outcomes and grow successful businesses.",
  },
  {
    title: "School Branding & Identity Design",
    desc: "Creating a unique, professional look that reflects a school's values and vision.",
  },
  {
    title: "Creative Art Clubs & Talent Development",
    desc: "Nurturing artistic skills and creativity through engaging clubs and mentorship.",
  },
];

const ServiceIcon = () => (
  <svg width="36" height="36" fill="none" viewBox="0 0 36 36" stroke="currentColor" className="text-[#A084DC] mx-auto mb-4 drop-shadow-lg">
    <ellipse cx="18" cy="18" rx="16" ry="16" fill="#A084DC" fillOpacity="0.12" />
    <path d="M10 26 Q18 10 26 26" stroke="#A084DC" strokeWidth="4" fill="none" />
  </svg>
);

const Services = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0 }}
      className="w-full flex flex-col items-center py-24 px-4 mt-12"
    >
      <span className="text-lg font-bold mb-2 bg-gradient-to-r from-[#A084DC] to-[#F6C6EA] bg-clip-text text-transparent">Services</span>
      <h2 className="text-5xl font-extrabold mb-6 text-center bg-gradient-to-r from-[#A084DC] to-[#F6C6EA] bg-clip-text text-transparent drop-shadow">Providing Services</h2>
      <p className="max-w-4xl text-lg text-center mb-16 text-gray-100">
        Cephas Artworld Studios offers creative services including custom murals, graffiti, and fine art commissions such as portraits and illustrations. The studio provides art workshops for all ages, supports school art programs, and coordinates exhibitions. They also offer live art performances, event decorations, and custom branding designs. Additionally, Cephas Artworld sells art supplies and unique merchandise featuring original artworks.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
        {services.map((service) => (
          <div key={service.title} className="flex flex-col items-center py-8 px-2">
            <ServiceIcon />
            <h3 className="text-xl font-bold mb-2 text-center text-white">{service.title}</h3>
            <p className="text-gray-200 text-center">{service.desc}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Services; 