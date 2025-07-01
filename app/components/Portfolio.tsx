"use client";
import React from "react";
import { motion } from "framer-motion";

const portfolioItems = [
  {
    title: "Our Portfolio One",
    desc: "Lorem Ipsum Dolore Sit Amet +",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Our Portfolio Two",
    desc: "Lorem Ipsum Dolore Sit Amet +",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Our Portfolio Three",
    desc: "Lorem Ipsum Dolore Sit Amet +",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Our Portfolio Four",
    desc: "Lorem Ipsum Dolore Sit Amet +",
    img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Our Portfolio Five",
    desc: "Lorem Ipsum Dolore Sit Amet +",
    img: "https://images.unsplash.com/photo-1465101178521-c1a9136a3fdc?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Our Portfolio Six",
    desc: "Lorem Ipsum Dolore Sit Amet +",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  },
];

const Portfolio = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
      className="w-full flex flex-col items-center py-24 px-4 mt-12"
    >
      <span className="text-lg font-bold mb-2 bg-gradient-to-r from-[#A084DC] to-[#F6C6EA] bg-clip-text text-transparent">Portfolio</span>
      <h2 className="text-5xl font-extrabold mb-6 text-center bg-gradient-to-r from-[#A084DC] to-[#F6C6EA] bg-clip-text text-transparent drop-shadow">Look What I Did</h2>
      <p className="max-w-3xl text-lg text-center mb-16 text-gray-100">
        Within This Portfolio, You'll Find A Curated Collection Of My Best Work, Including Mural, Graffiti, Playground Design, Web Designs, Graphic Designs, Photography.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
        {portfolioItems.map((item, idx) => (
          <div key={idx} className="relative rounded-3xl overflow-hidden group">
            <img src={item.img} alt={item.title} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#18122B]/70 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-lg font-bold mb-1 text-white drop-shadow">{item.title}</h3>
              <p className="text-gray-200 text-sm mb-2">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Portfolio; 