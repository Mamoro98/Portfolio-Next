import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]  ">
      <Navbar />
      <div className=" px-12 py-4 container mx-auto lg:mt-10 mt-36 ">
        <HeroSection />
      </div>
      <div className="mt-36">
        <Projects />
      </div>
      <div className="mt-36">
        <AboutMe />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}
