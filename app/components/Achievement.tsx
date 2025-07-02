"use client";
import React from "react";
import { motion } from "framer-motion";

const achievements = [
  {
    title: "Mural and Graffiti Art",
    count: "50+ Project",
  },
  {
    title: "Branding",
    count: "5000+ Project",
  },
  {
    title: "School Beautification Projects",
    count: "35+ Project",
  },
];

const Achievement = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
      className="w-full flex justify-center py-24 px-4 mt-12"
    >
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-16">
        {/* Left Side */}
        <div className="flex-1 flex flex-col justify-center">
          <span className="text-lg font-bold mb-2 bg-gradient-to-r from-[#A084DC] to-[#F6C6EA] bg-clip-text text-transparent">Achievement</span>
          <h2 className="text-5xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-[#A084DC] to-[#F6C6EA] bg-clip-text text-transparent drop-shadow">Some Client<br />Projects</h2>
          <p className="text-lg text-gray-100 mb-10 max-w-md">
            Within This Portfolio, You&apos;ll Find A Curated Collection Of My Best Work, Including Mural, Graffiti, Playground Design, Web Designs, Graphic Designs, Photography.
          </p>
          <a href="#" className="flex items-center text-lg font-bold mt-2 bg-gradient-to-r from-[#A084DC] to-[#F6C6EA] bg-clip-text text-transparent hover:scale-105 transition w-max">
            Explore More <span className="ml-2">&#8594;</span>
          </a>
        </div>
        {/* Right Side */}
        <div className="flex-1 flex flex-col gap-8 justify-center">
          {achievements.map((item) => (
            <div key={item.title} className="relative group">
              {/* Animated Gradient Border */}
              <div className="absolute inset-0 rounded-2xl p-[2px] animate-gradient-border bg-gradient-to-r from-[#A084DC] via-[#F6C6EA] to-[#A084DC] blur-[2px] opacity-80 group-hover:opacity-100 transition-opacity" style={{zIndex: 0}} />
              <div className="relative flex items-center justify-between py-6 px-6 rounded-2xl bg-[#18122B]/80 z-10">
                <div>
                  <div className="text-2xl font-bold mb-2 text-white">{item.title}</div>
                  <div className="text-[#A084DC] text-base font-semibold">{item.count}</div>
                </div>
                <span className="text-2xl text-[#A084DC]">&#8599;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Achievement; 