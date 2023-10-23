import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Recommenders from "./components/Recommenders";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] sm:w-full w-full  ">
      <Navbar />
      <div className=" px-12  container mx-auto lg:mt-10 mt-36 sm:max-md:mx-[15%] ">
        <HeroSection />
      </div>
      <div className="mt-36">
        <Projects />
      </div>
      <div className="mt-7">
        <AboutMe />
      </div>
      <div className="mt-7">
        <Recommenders />
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
