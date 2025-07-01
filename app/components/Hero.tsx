"use client";
import React from "react";

const GlowArc = () => (
  <svg className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[120vw] h-[60vh] glow-arc pointer-events-none" viewBox="0 0 1200 600" fill="none">
    <ellipse cx="600" cy="600" rx="550" ry="200" stroke="#fff" strokeWidth="16" opacity="0.7" filter="url(#glow)" />
    <defs>
      <filter id="glow" x="-100%" y="-100%" width="300%" height="300%">
        <feGaussianBlur stdDeviation="16" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  </svg>
);

const cephasLetters = (
  <div className="w-full flex justify-between items-center px-2 md:px-12 lg:px-24 select-none relative overflow-hidden">
    {[...'C','E','P','H','A','S'].map((l, i) => (
      <span
        key={i}
        className={`font-orbitron text-white glow-letter animate-glow-delay-${i}`}
        style={{
          fontSize: 'clamp(2.5rem, 10vw, 10rem)',
          flex: 1,
          textAlign: 'center',
          letterSpacing: '0.25em',
        }}
      >
        {l}
      </span>
    ))}
  </div>
);

// Add the animation to the global CSS if not present
// @keyframes glow-horizontal { 0% { left: -33%; } 100% { left: 100%; } }
// .animate-glow-horizontal { animation: glow-horizontal 2.5s linear infinite; position: absolute; }

const Hero = () => {
  return (
    <>
      <section className="relative flex flex-col items-center justify-center min-h-[100dvh] h-[100dvh] hero-glow-bg overflow-hidden pt-32 pb-20">
        {/* Glowing Arc SVG */}
        <GlowArc />
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center w-full">
          {cephasLetters}
          <h1 className="mt-8 text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg tracking-wide">
            Beautifying Schools.<br />
            <span className="bg-gradient-to-r from-[#A084DC] to-[#F6C6EA] bg-clip-text text-transparent">Inspiring Minds.</span>
          </h1>
        </div>
      </section>
      {/* Below the fold content (visible on scroll) */}
      <div className="w-full flex flex-col items-center text-center px-6 py-20 bg-transparent">
        <p className="text-xl text-white/90 mb-8 max-w-2xl">
          Cephas Artworld Studios transforms learning spaces through murals, beautification, creative clubs, and consultation for schools aspiring to international standards.
        </p>
        <a
          href="#"
          className="px-8 py-4 rounded-full bg-gradient-to-r from-[#A084DC] to-[#F6C6EA] text-white font-bold shadow-lg hover:scale-105 transition-transform text-lg"
        >
          View Portfolio
        </a>
      </div>
    </>
  );
};

export default Hero; 