import React from "react";

const ContactFooter = () => {
  return (
    <>
      {/* Contact Us Section */}
      <section className="w-full flex flex-col items-center justify-center py-24 px-4 bg-gradient-to-br from-[#18122B] via-[#635985]/60 to-[#A084DC]/20 backdrop-blur-md">
        <div className="max-w-7xl w-full flex flex-col lg:flex-row justify-between gap-12 rounded-3xl shadow-2xl bg-white/5 p-8 border border-[#A084DC]/10">
          {/* Left: Text */}
          <div className="flex-1">
            <span className="text-lg font-bold mb-2 block bg-gradient-to-r from-[#A084DC] to-[#F6C6EA] bg-clip-text text-transparent">Contact Us</span>
            <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-[#A084DC] to-[#F6C6EA] bg-clip-text text-transparent">Get In Touch</h2>
            <p className="text-lg text-gray-200 mb-8 max-w-lg">
              We&apos;d Love To Hear From You! At Cephas Artworld, We Believe In Creating Art That Speaks And Inspiring Creativity In Everyone. Reach Out To Us Today And Let&apos;s Bring Your Artistic Vision To Life!
            </p>
            <a href="mailto:info@cephasartworld.com" className="inline-flex items-center text-lg font-bold text-white hover:text-sky-400 transition">
              Contact Now <span className="ml-2 text-sky-400 text-2xl">&#8594;</span>
            </a>
          </div>
          {/* Right: Contact Info */}
          <div className="flex-1 flex flex-col gap-8 justify-center text-white">
            <div className="flex items-start gap-4">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="url(#mail-gradient)" className="mt-1">
                <defs>
                  <linearGradient id="mail-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#A084DC" />
                    <stop offset="1" stopColor="#F6C6EA" />
                  </linearGradient>
                </defs>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15A2.25 2.25 0 012.25 17.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.75 1.707l-7.5 6.75a2.25 2.25 0 01-3 0l-7.5-6.75A2.25 2.25 0 012.25 6.993V6.75" />
              </svg>
              <div>
                <div className="font-semibold bg-gradient-to-r from-[#A084DC] to-[#F6C6EA] bg-clip-text text-transparent">Email</div>
                <div className="text-gray-200">info@cephasartworld.com</div>
                <div className="text-gray-200">creative@cephasartworld.com</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="url(#phone-gradient)" className="mt-1">
                <defs>
                  <linearGradient id="phone-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#A084DC" />
                    <stop offset="1" stopColor="#F6C6EA" />
                  </linearGradient>
                </defs>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 6.75A2.25 2.25 0 014.5 4.5h2.25a2.25 2.25 0 012.25 2.25v1.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25v-1.5zm0 0v10.5A2.25 2.25 0 004.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75" />
              </svg>
              <div>
                <div className="font-semibold bg-gradient-to-r from-[#A084DC] to-[#F6C6EA] bg-clip-text text-transparent">Contact</div>
                <div className="text-gray-200">+234 703 772 0872</div>
                <div className="text-gray-200">+234 915 405 4640</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="w-full bg-gradient-to-br from-[#18122B] via-[#635985]/60 to-[#A084DC]/20 py-12 px-4 mt-0 border-t border-[#A084DC]/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-gray-200">
          <div>
            <div className="font-bold text-white mb-2">Personal Portfolio</div>
            <div className="mb-4 text-sm">Within This Portfolio, You&apos;ll Find A Curated Collection Of My Best Work</div>
            <div className="flex gap-3">
              <a href="#" className="text-white hover:text-sky-400"><i className="fab fa-facebook-f" /></a>
              <a href="#" className="text-white hover:text-sky-400"><i className="fab fa-instagram" /></a>
              <a href="#" className="text-white hover:text-sky-400"><i className="fab fa-twitter" /></a>
            </div>
          </div>
          <div>
            <div className="font-bold text-white mb-2">Information</div>
            <div className="mb-2 text-sm">FAQs</div>
            <div className="mb-2 text-sm">Our Blog</div>
            <div className="mb-2 text-sm">Term and Condition</div>
          </div>
          <div>
            <div className="font-bold text-white mb-2">Menu</div>
            <div className="mb-2 text-sm">About</div>
            <div className="mb-2 text-sm">Destination</div>
            <div className="mb-2 text-sm">Testimonials</div>
          </div>
          <div>
            <div className="font-bold text-white mb-2">Company</div>
            <div className="mb-2 text-sm">Term & conditions</div>
            <div className="mb-2 text-sm">Privacy Policy</div>
            <div className="mb-2 text-sm">Press Centre</div>
          </div>
        </div>
        <div className="text-center text-gray-400 text-xs mt-10">© Personal Portfolio 2025. All rights reserved.</div>
      </footer>
    </>
  );
};

export default ContactFooter; 