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
      <div className="w-full flex justify-center items-center px-4 py-24 bg-gradient-to-br from-[#18122B] via-[#635985]/30 to-[#A084DC]/10">
        <div className="relative flex flex-col lg:flex-row items-stretch max-w-5xl w-full rounded-[2.5rem] shadow-[0_12px_48px_0_rgba(80,36,143,0.35)] overflow-hidden border-2 border-[#A084DC]/40" style={{ minHeight: '440px' }}>
          {/* Diagonal background */}
          <div className="absolute inset-0 z-0" style={{clipPath: 'polygon(0 0, 72% 0, 100% 100%, 0% 100%)', background: 'rgba(255,255,255,0.13)'}} />
          {/* Image Side */}
          <div className="relative z-10 flex-1 flex items-center justify-center bg-transparent p-12">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
              alt="Cephas Artworld sample"
              className="w-64 h-64 md:w-80 md:h-80 rounded-3xl object-cover border-8 border-[#A084DC] shadow-2xl"
            />
          </div>
          {/* Text & Button Side */}
          <div className="relative z-10 flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left p-12">
            <h3 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-[#A084DC] to-[#F6C6EA] bg-clip-text text-transparent drop-shadow-lg">
              Transforming Learning Spaces
            </h3>
            <p className="text-2xl text-white/90 mb-8 font-medium max-w-xl">
              Cephas Artworld Studios transforms learning spaces through murals, beautification, creative clubs, and consultation for schools aspiring to international standards.
            </p>
            <a
              href="#"
              className="px-10 py-4 rounded-full bg-gradient-to-r from-[#A084DC] to-[#F6C6EA] text-white font-bold shadow-xl hover:scale-105 transition-transform text-2xl"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero; 