import Background from './components/Background';
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Process from './components/sections/Process';
import Reviews from './components/sections/Reviews';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

export default function App() {
  return (
    <div className="relative bg-[#030306] text-white min-h-screen selection:bg-[#00ccff] selection:text-[#030306]">
      {/* Liquid Mesh & Film Grain Background */}
      <Background />

      {/* Main UI Sections */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Process />
        <Reviews />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}