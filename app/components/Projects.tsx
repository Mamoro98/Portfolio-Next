"use client";
import React, { useState, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import CountUp from "react-countup";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  gitUrl: string;
  previewUrl?: string;
  category: string;
}

// Projects from CV - only including actual projects
const PROJECTS_DATA: Project[] = [
    {
      id: 1,
      title: "Multi-Task Multi-Agent Reinforcement Learning",
      description: "Master's research on advancing Multi-Agent Reinforcement Learning (MARL) by extending the Sable network architecture to handle multi-task multi-env settings.",
      image: "/programming.jpeg",
      techStack: ["Python", "JAX", "Flax", "MARL", "Deep Learning"],
      gitUrl: "https://github.com/Mamoro98",
      category: "AI/ML"
    },
    {
      id: 2,
      title: "Movie Recommender System",
      description: "Built and developed a movie recommender system using the ALS (Alternating Least Squares) algorithm for collaborative filtering.",
      image: "/programming.jpeg",
      techStack: ["Python", "ALS Algorithm", "Collaborative Filtering", "Machine Learning"],
      gitUrl: "https://github.com/Mamoro98",
      category: "AI/ML"
    },
    {
      id: 3,
      title: "Temporal Analysis of Regional Sustainability",
      description: "Developed a system to calculate a region's biocapacity from satellite images using convolutional neural networks (CNNs) for environmental monitoring.",
      image: "/programming.jpeg",
      techStack: ["Python", "PyTorch", "CNNs", "Satellite Data", "Computer Vision"],
      gitUrl: "https://github.com/Mamoro98",
      category: "AI/ML"
    },
    {
      id: 4,
      title: "Clinical Appointment Website",
      description: "Developed and designed the user interface of an online clinic's appointment website in UAE using modern React technologies.",
      image: "/programming.jpeg",
      techStack: ["React.js", "Next.js", "UI/UX Design", "Healthcare"],
      gitUrl: "https://github.com/Mamoro98",
      category: "Frontend"
    },
    {
      id: 5,
      title: "Rewash Dashboard",
      description: "Developed and designed the user interface of a washing company's dashboard for business management and operations.",
      image: "/programming.jpeg",
      techStack: ["React.js", "Next.js", "Dashboard Design", "Business Operations"],
      gitUrl: "https://github.com/Mamoro98",
      category: "Frontend"
    },
    {
      id: 6,
      title: "Personal Portfolio Website",
      description: "Developed and designed a modern, responsive personal portfolio website showcasing projects and professional experience.",
      image: "/programming.jpeg",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      gitUrl: "https://github.com/Mamoro98",
      previewUrl: "https://morosama.vercel.app",
      category: "Frontend"
    },
    {
      id: 7,
      title: "SunSeek EV Solar Car",
      description: "Built a self-charging solar car that tracks sunlight to charge its battery and moves to shade to protect its components using Arduino and sensors.",
      image: "/programming.jpeg",
      techStack: ["Arduino", "C++", "Solar Energy", "Sensor Integration", "Embedded Systems"],
      gitUrl: "https://github.com/Mamoro98",
      category: "Embedded"
    },
    {
      id: 8,
      title: "GloveControl System",
      description: "Built a sensor-equipped glove allowing users to control a computer through hand movements and gestures using Arduino-based embedded systems.",
      image: "/programming.jpeg",
      techStack: ["Arduino", "C++", "Gesture Recognition", "Sensor Integration", "HCI"],
      gitUrl: "https://github.com/Mamoro98",
      category: "Embedded"
    }
];

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(() => ["All", "AI/ML", "Frontend", "Embedded"], []);

  const filteredProjects = useMemo(() => {
    return selectedCategory === "All" 
      ? PROJECTS_DATA 
      : PROJECTS_DATA.filter(project => project.category === selectedCategory);
  }, [selectedCategory]);

  const ProjectCard = ({ project }: { project: Project }) => (
    <motion.div
      className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-4">
            <a
              href={project.gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors"
            >
              <CodeBracketIcon className="w-6 h-6 text-white" />
            </a>
            {project.previewUrl && (
              <a
                href={project.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors"
              >
                <EyeIcon className="w-6 h-6 text-white" />
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <span className="text-xs bg-gradient-to-r from-purple-500 to-blue-500 text-white px-2 py-1 rounded-full">
            {project.category}
          </span>
        </div>
        
        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="py-20 px-4" id="projects">
      <div className="max-w-7xl mx-auto">
        {/* Stats Section */}
        <div className="flex justify-center mb-16">
          <div
            className="w-full max-w-4xl p-8 border border-white/20 rounded-lg flex flex-col sm:flex-row justify-evenly bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm"
            ref={ref}
          >
            <div className="flex flex-col text-white justify-center items-center">
              <h2 className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                <CountUp start={0} end={8} duration={4} redraw={true} />
              </h2>
              <span className="text-sm font-light mt-2">Projects Completed</span>
            </div>

            <div className="flex flex-col text-white justify-center items-center">
              <h2 className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                <CountUp start={0} end={4} duration={4} redraw={true} />
              </h2>
              <span className="text-sm font-light mt-2">Companies Worked</span>
            </div>

            <div className="flex flex-col text-white justify-center items-center">
              <h2 className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                <CountUp start={0} end={3} duration={4} redraw={true} suffix="+" />
              </h2>
              <span className="text-sm font-light mt-2 text-center">Years Experience</span>
            </div>
          </div>
        </div>

        {/* Projects Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">Projects</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my expertise in full-stack development, AI/ML, and software engineering.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <p className="text-gray-300 mb-6">
            Interested in working together or want to see more of my work?
          </p>
          <a
            href="https://github.com/Mamoro98"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            <CodeBracketIcon className="w-5 h-5" />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
