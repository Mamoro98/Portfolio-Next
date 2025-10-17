import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
// import Services from "./components/Services";
import QuoteSection from "./components/QuoteSection";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Recommenders from "./components/Recommenders";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] w-full overflow-x-hidden">
      <Navbar />
      <div className="px-4 sm:px-8 lg:px-12 container mx-auto lg:mt-10 mt-36 max-w-full">
        <HeroSection />
      </div>
      <div className="mt-36">
        <Projects />
      </div>
      <div className="mt-7">
        <AboutMe />
      </div>
      <div className="mt-7">
        <QuoteSection />
      </div>
      <div className="mt-7">
        <Recommenders />
      </div>
      {/* <div className="mt-7">
        <Services />
      </div> */}
      <div className="mt-7">
        <Blog />
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
