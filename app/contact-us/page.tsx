'use client'
import Image from 'next/image';
import Navbar from '../components/Navbar';
import {  FooterSection } from '../components/ContactFooter';

export default function ContactUsPage() {
  return (
    <>
      <main className="min-h-screen w-full text-white font-montserrat bg-[linear-gradient(135deg,_#18122B_0%,_#635985_100%)] flex flex-col">
        <Navbar />
        <section className="flex-1 flex items-center justify-center py-16 px-2">
          <div className="w-full max-w-2xl rounded-3xl bg-white/10 backdrop-blur-lg shadow-2xl border border-white/10 flex flex-col md:flex-row items-center md:items-stretch overflow-hidden">
            {/* Image */}
            <div className="flex-shrink-0 flex items-center justify-center p-8 md:p-0 md:pl-8 bg-gradient-to-b from-[#18122B] to-[#635985]/40">
              <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-[#36C5F0] shadow-lg">
                <Image
                  src="/ceo.svg"
                  alt="Contact Cephas Artworld"
                  width={224}
                  height={224}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            {/* Contact Info */}
            <div className="flex-1 flex flex-col justify-center p-8">
              <span className="text-[#36C5F0] font-semibold uppercase tracking-wide text-sm mb-2">Contact</span>
              <h1 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-[#A084DC] to-[#36C5F0] bg-clip-text text-transparent">Let&apos;s Connect</h1>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#36C5F0]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm0 0v4a4 4 0 01-8 0v-4" /></svg>
                  <span className="text-gray-200">info@cephasartworld.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#36C5F0]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5h2l.4 2M7 13h10l1.4-7H6.6M7 13l-1.4 7h10.8L17 13M7 13l1.4-7h6.2L17 13" /></svg>
                  <span className="text-gray-200">+234 703 772 0872</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#36C5F0]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5h2l.4 2M7 13h10l1.4-7H6.6M7 13l-1.4 7h10.8L17 13M7 13l1.4-7h6.2L17 13" /></svg>
                  <span className="text-gray-200">+234 915 405 4640</span>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-2">
                <span className="font-semibold">Follow</span>
                <a href="#" className="text-[#36C5F0] text-xl hover:scale-110 transition"><i className="fab fa-facebook-f" /></a>
                <a href="#" className="text-[#36C5F0] text-xl hover:scale-110 transition"><i className="fab fa-instagram" /></a>
                <a href="#" className="text-[#36C5F0] text-xl hover:scale-110 transition"><i className="fab fa-twitter" /></a>
                <span className="ml-2 text-gray-200">| Cephas Artworld</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <FooterSection />
    </>
  );
} 