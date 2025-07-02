"use client";
import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "Adobe Photoshop", percent: 75 },
  { name: "Figma", percent: 90 },
  { name: "Adobe XD", percent: 80 },
];

const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
      className="w-full flex justify-center py-24 px-4 mt-12"
    >
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-16 items-center">
        {/* Left: Artistic Placeholder */}
        <div className="flex-1 flex justify-center items-center">
          <div className="w-[420px] h-[420px] rounded-3xl bg-gradient-to-br from-[#A084DC] via-[#F6C6EA] to-[#635985] flex items-center justify-center">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="60" cy="60" rx="55" ry="55" fill="#fff" fillOpacity="0.12" />
              <path d="M30 90 Q60 30 90 90" stroke="#A084DC" strokeWidth="6" fill="none" />
            </svg>
          </div>
        </div>
        {/* Right: Skills */}
        <div className="flex-1 flex flex-col justify-center">
          <span className="text-lg font-bold mb-2 bg-gradient-to-r from-[#A084DC] to-[#F6C6EA] bg-clip-text text-transparent">Our Skills</span>
          <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-[#A084DC] to-[#F6C6EA] bg-clip-text text-transparent drop-shadow">What I Can Do?</h2>
          <p className="text-lg text-gray-100 mb-10 max-w-md">
            Within This Portfolio, You&apos;ll Find A Curated Collection Of My Best Work, Including [Graphic Designs, Photography, Writing Samples, Etc.].
          </p>
          <div className="space-y-8">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span className="font-semibold text-white">{skill.name}</span>
                  <span className="bg-gradient-to-r from-[#A084DC] to-[#F6C6EA] bg-clip-text text-transparent font-bold">{skill.percent}%</span>
                </div>
                <div className="w-full h-3 bg-white/20 rounded-full">
                  <div
                    className="h-3 bg-gradient-to-r from-[#A084DC] to-[#F6C6EA] rounded-full shadow-lg transition-all duration-700"
                    style={{ width: `${skill.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills; 