import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Achievement from "./components/Achievement";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import ContactFooter from "./components/ContactFooter";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutUs />
      <Portfolio />
      <Achievement />
      <Skills />
      <Services />
      <Testimonials />
      <ContactFooter />
    </div>
  );
}
