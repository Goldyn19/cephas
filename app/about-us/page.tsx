'use client'
import Image from 'next/image';
import Navbar from '../components/Navbar';
import ContactFooter from '../components/ContactFooter';
import { useEffect } from 'react';

export default function AboutUsPage() {
  return (
    <>
      <main className="min-h-screen w-full text-white font-montserrat px-2 md:px-8 py-8 md:py-16 lg:px-32" style={{ background: 'linear-gradient(135deg, #18122B 0%, #635985 100%)' }}>
        <Navbar />
        {/* About Us Section */}
        <section className="max-w-5xl mx-auto mt-20 mb-16">
          <div className="rounded-3xl bg-white/10 backdrop-blur-lg shadow-2xl px-6 md:px-16 py-12 md:py-16 border border-white/10 relative overflow-hidden">
            <BrushStroke />
            <h1 className="text-5xl md:text-6xl text-center font-extrabold mb-4 bg-gradient-to-r from-[#A084DC] to-[#36C5F0] bg-clip-text text-transparent drop-shadow">About Us</h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto text-center mb-10">
              Cephas Artworld Studios is a creative studio passionate about transforming schools through art. We specialize in mural design, school beautification, and educational consultation to elevate learning spaces to international standards.
            </p>
            <div className="grid md:grid-cols-2 gap-10 items-start">
              {/* Left: About Text */}
              <div>
                <p className="mb-6 text-gray-200">
                  With over a decade of experience in the art and education space, Cephas Artworld Studios has led impactful projects across schools, public institutions, and corporate spaces. However, our deepest impact has been within educational environments, where we specialize in creating vibrant, thematic murals, aesthetic wall designs, and strategic beautification plans that enhance both the physical appeal and the learning atmosphere of schools.
                </p>
              </div>
              {/* Right: Image and Caption/Text */}
              <div>
                <div className="rounded-2xl overflow-hidden shadow-xl mb-4 bg-white/20 border border-white/10">
                  <Image
                    src="/carousel/cephas-mural.jpg"
                    alt="Cephas Artworld team painting a mural"
                    width={420}
                    height={300}
                    className="object-cover w-full h-72"
                  />
                </div>
                <p className="text-gray-300 text-xs mb-2">@CephasArtworld</p>
                <p className="text-gray-200 text-base">
                  Our team works hand-in-hand with school leaders to visually communicate core values, cultures, and academic focus through art—transforming bare walls into inspiring canvases of imagination, heritage, and innovation. Beyond aesthetics, we provide consultation services to schools aspiring to reach international standards. This includes advising on curriculum enrichment through the arts, creative space planning, brand identity through visual storytelling, and aligning campus beautification with global best practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="max-w-3xl mx-auto mb-16">
          <div className="rounded-3xl bg-white/10 backdrop-blur-lg shadow-2xl px-6 md:px-12 py-10 border border-white/10">
            <span className="text-[#36C5F0] font-semibold uppercase tracking-wide text-sm block mb-2">Our Skills</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-[#A084DC] to-[#36C5F0] bg-clip-text text-transparent">What I Can Do?</h2>
            <p className="text-gray-300 mb-8 max-w-xl">
              Within this portfolio, you&apos;ll find a curated collection of my best work, including graphic designs, photography, writing samples, and more.
            </p>
            <div className="space-y-6">
              <SkillBar label="Adobe Photoshop" percent={75} />
              <SkillBar label="Figma" percent={90} />
              <SkillBar label="Adobe XD" percent={80} />
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="max-w-2xl mx-auto mb-24">
          <div className="rounded-3xl bg-white/10 backdrop-blur-lg shadow-2xl px-6 md:px-12 py-12 border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#A084DC] to-[#36C5F0] bg-clip-text text-transparent text-center">Mission</h2>
            <p className="text-lg text-gray-200 text-center">
              Our mission is to inspire and transform educational spaces through vibrant art, purposeful beautification, and visionary consultation—igniting creativity, cultural identity, and global excellence in every school we touch.
            </p>
          </div>
        </section>
      </main>
      <ContactFooter />
    </>
  );
}

function BrushStroke() {
  return (
    <svg width="120" height="32" viewBox="0 0 120 32" fill="none" className="mx-auto mb-2" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 20 Q40 5 80 20 T115 20" stroke="#A084DC" strokeWidth="6" fill="none" opacity="0.5" />
      <path d="M10 25 Q40 15 70 25 T110 25" stroke="#36C5F0" strokeWidth="3" fill="none" opacity="0.4" />
    </svg>
  );
}

// Animated SkillBar component
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
function SkillBar({ label, percent }: { label: string; percent: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (inView) setWidth(percent);
  }, [inView, percent]);
  return (
    <div ref={ref}>
      <div className="flex justify-between mb-1">
        <span className="font-medium text-white">{label}</span>
        <span className="text-sm text-[#36C5F0] font-bold">{percent}%</span>
      </div>
      <div className="w-full bg-white/10 rounded-full h-2.5">
        <div
          className="bg-gradient-to-r from-[#36C5F0] to-[#A084DC] h-2.5 rounded-full transition-all duration-700"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
}
