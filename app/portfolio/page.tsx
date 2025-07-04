'use client'
import Image from 'next/image';
import Navbar from '../components/Navbar';
import { FooterSection } from '../components/ContactFooter';

const portfolioItems = [
  { img: "/portfolio/img1.jpg", title: "Vibrant School Mural", desc: "A large-scale mural for a local school, bringing color and inspiration to the learning environment." },
  { img: "/portfolio/img2.jpg", title: "Creative Branding", desc: "Brand identity and logo design for an educational startup." },
  { img: "/portfolio/img3.jpg", title: "Playground Beautification", desc: "Transforming a playground with playful, thematic art." },
  { img: "/portfolio/img4.jpg", title: "Corporate Wall Art", desc: "A modern mural for a corporate office space." },
  { img: "/portfolio/img5.jpg", title: "Community Art Project", desc: "Collaborative mural with local artists and students." },
  { img: "/portfolio/img6.jpg", title: "School Hallway Design", desc: "Brightening up hallways with educational themes." },
  { img: "/portfolio/img7.jpg", title: "Library Wall Art", desc: "A reading-inspired mural for a school library." },
  { img: "/portfolio/img8.jpg", title: "Reception Area Branding", desc: "Welcoming mural for a school reception area." },
  { img: "/portfolio/img9.jpg", title: "Science Lab Graphics", desc: "STEM-themed wall graphics for a science lab." },
  { img: "/portfolio/img10.jpg", title: "Art Class Showcase", desc: "Gallery wall featuring student artwork." },
  { img: "/portfolio/img11.jpg", title: "Outdoor Wall Transformation", desc: "Turning a blank exterior wall into a vibrant landmark." },
  { img: "/portfolio/img12.jpg", title: "Cultural Heritage Mural", desc: "Celebrating local culture and history through art." },
  { img: "/portfolio/img13.jpg", title: "Motivational Quote Wall", desc: "Inspiring students with hand-lettered quotes." },
  { img: "/portfolio/img14.jpg", title: "School Entrance Art", desc: "A bold, colorful welcome for students and visitors." },
];

export default function PortfolioPage() {
  return (
    <>
      <main className="min-h-screen w-full text-white font-montserrat bg-[linear-gradient(135deg,_#18122B_0%,_#635985_100%)] flex flex-col">
        <Navbar />
        {/* Hero Section */}
        <section className="w-full py-20 px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-[#A084DC] to-[#36C5F0] bg-clip-text text-transparent drop-shadow">My Portfolio</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Explore a curated collection of my best work—murals, branding, beautification, and creative projects that transform spaces and inspire communities.
          </p>
        </section>
        {/* Portfolio Grid */}
        <section className="w-full max-w-7xl mx-auto px-4 pb-24">
          <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {portfolioItems.map((item, idx) => (
              <div key={idx} className="rounded-2xl bg-white/10 backdrop-blur-lg shadow-xl border border-white/10 overflow-hidden flex flex-col hover:scale-105 transition-transform">
                <div className="relative w-full h-56">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h2 className="text-xl font-bold mb-2 bg-gradient-to-r from-[#A084DC] to-[#36C5F0] bg-clip-text text-transparent">{item.title}</h2>
                  <p className="text-gray-200 text-sm flex-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
} 