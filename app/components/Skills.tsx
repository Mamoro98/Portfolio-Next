"use client";
import React, { useState, useTransition, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TabButton from "./TabButton";

type Data = {
  title: string;
  id: string;
  content: React.JSX.Element;
};

interface Skill {
  name: string;
  level: number;
  category: string;
}

// Move skills array outside component to prevent recreation on every render
const SKILLS_DATA: Skill[] = [
    // Programming Languages
    { name: "Python", level: 95, category: "Programming" },
    { name: "JavaScript/TypeScript", level: 90, category: "Programming" },
    { name: "SQL", level: 85, category: "Programming" },
    { name: "C++", level: 80, category: "Programming" },
    
    // Frontend
    { name: "React.js", level: 90, category: "Frontend" },
    { name: "Next.js", level: 85, category: "Frontend" },
    { name: "Tailwind CSS", level: 90, category: "Frontend" },
    { name: "HTML/CSS", level: 95, category: "Frontend" },
    
    // Backend
    { name: "Node.js", level: 85, category: "Backend" },
    { name: "Express.js", level: 80, category: "Backend" },
    { name: "Flask", level: 85, category: "Backend" },
    { name: "Django", level: 75, category: "Backend" },
    { name: "FastAPI", level: 80, category: "Backend" },
    
    // Database
    { name: "MongoDB", level: 85, category: "Database" },
    { name: "PostgreSQL", level: 80, category: "Database" },
    { name: "SQLite", level: 85, category: "Database" },
    
    // AI/ML
    { name: "PyTorch", level: 90, category: "AI/ML" },
    { name: "JAX", level: 80, category: "AI/ML" },
    { name: "TensorFlow", level: 75, category: "AI/ML" },
    { name: "OpenCV", level: 85, category: "AI/ML" },
    { name: "Scikit-learn", level: 90, category: "AI/ML" },
    
    // Cloud & DevOps
    { name: "Azure", level: 80, category: "Cloud" },
    { name: "Docker", level: 85, category: "Cloud" },
    { name: "Git", level: 95, category: "Cloud" },
    
    // Tools
    { name: "Power BI", level: 80, category: "Tools" },
    { name: "Jupyter", level: 95, category: "Tools" },
    { name: "VS Code", level: 95, category: "Tools" },
];

const Skills = () => {
  const [tab, settab] = useState("Skills");
  const [isPending, startTransition] = useTransition();
  const [ref, inView] = useInView({ triggerOnce: true });

  const handleTabChange = useCallback((id: React.SetStateAction<string>) => {
    startTransition(() => {
      settab(id);
    });
  }, []);

  const groupedSkills = useMemo(() => {
    return SKILLS_DATA.reduce((acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    }, {} as Record<string, Skill[]>);
  }, []);

  const SkillBar = ({ skill, index }: { skill: Skill; index: number }) => (
    <motion.div
      className="mb-4"
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex justify-between items-center mb-1">
        <span className="text-white text-sm font-medium">{skill.name}</span>
        <span className="text-purple-400 text-sm">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <motion.div
          className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1 }}
        />
      </div>
    </motion.div>
  );

  const SkillsContent = useMemo(() => (
    <div ref={ref} className="mt-6 w-full max-w-full overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
        {Object.entries(groupedSkills).map(([category, categorySkills]) => (
          <div key={category} className="space-y-4 w-full max-w-full overflow-hidden">
            <h4 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-purple-500/30 truncate">
              {category}
            </h4>
            {categorySkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        ))}
      </div>
    </div>
  ), [groupedSkills, inView]);

  const tab_data: Data[] = useMemo(() => [
    {
      title: "Skills",
      id: "Skills",
      content: SkillsContent,
    },
    {
      title: "Education",
      id: "Education",
      content: (
        <div className="mt-6 space-y-6 w-full max-w-full overflow-hidden">
          <motion.div
            className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-4 sm:p-6 rounded-lg border border-white/10 w-full max-w-full overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-start space-x-3 sm:space-x-4 w-full">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0">
                MS
              </div>
              <div className="flex-1 min-w-0 overflow-hidden">
                <h4 className="text-white font-semibold text-base sm:text-lg truncate">Master's in AI for Science</h4>
                <p className="text-purple-400 font-medium text-sm break-words">Stellenbosch University | AIMS South Africa</p>
                <p className="text-gray-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  Advanced studies in artificial intelligence applications for scientific research, 
                  including machine learning, deep learning, and computational modeling.
                </p>
                <div className="flex flex-wrap gap-1 sm:gap-2 mt-3">
                  <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs whitespace-nowrap">Machine Learning</span>
                  <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs whitespace-nowrap">Deep Learning</span>
                  <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs whitespace-nowrap">Scientific Computing</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-4 sm:p-6 rounded-lg border border-white/10 w-full max-w-full overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-start space-x-3 sm:space-x-4 w-full">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0">
                BS
              </div>
              <div className="flex-1 min-w-0 overflow-hidden">
                <h4 className="text-white font-semibold text-base sm:text-lg truncate">Bachelor's in Electrical Engineering</h4>
                <p className="text-orange-400 font-medium text-sm break-words">University of Khartoum | Khartoum, Sudan</p>
                <p className="text-gray-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  First class honours degree specializing in software engineering of electronic systems. 
                  Strong foundation in mathematics, physics, and engineering principles.
                </p>
                <div className="flex flex-wrap gap-1 sm:gap-2 mt-3">
                  <span className="bg-orange-500/20 text-orange-300 px-2 py-1 rounded text-xs whitespace-nowrap">Electronics</span>
                  <span className="bg-red-500/20 text-red-300 px-2 py-1 rounded text-xs whitespace-nowrap">Software Engineering</span>
                  <span className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded text-xs whitespace-nowrap">First Class Honours</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      ),
    },
    {
      title: "Experience",
      id: "Experience",
      content: (
        <div className="mt-6 space-y-6 w-full max-w-full overflow-hidden">
          <motion.div
            className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-4 sm:p-6 rounded-lg border border-white/10 w-full max-w-full overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-start space-x-3 sm:space-x-4 w-full">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0">
                ID
              </div>
              <div className="flex-1 min-w-0 overflow-hidden">
                <h4 className="text-white font-semibold text-base sm:text-lg truncate">Research Engineer Intern</h4>
                <p className="text-green-400 font-medium text-sm break-words">InstaDeep • Aug 2025 - Present</p>
                <p className="text-gray-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  Contributing to cutting-edge research project by developing and optimizing components of a 
                  large-scale framework for multi-agent reinforcement learning using JAX and Python.
                </p>
                <div className="flex flex-wrap gap-1 sm:gap-2 mt-3">
                  <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs whitespace-nowrap">JAX</span>
                  <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs whitespace-nowrap">Python</span>
                  <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs whitespace-nowrap">MARL Research</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-4 sm:p-6 rounded-lg border border-white/10 w-full max-w-full overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-start space-x-3 sm:space-x-4 w-full">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0">
                AD
              </div>
              <div className="flex-1 min-w-0 overflow-hidden">
                <h4 className="text-white font-semibold text-base sm:text-lg truncate">Data Analyst</h4>
                <p className="text-blue-400 font-medium text-sm break-words">AmunData • 2022 - 2023</p>
                <p className="text-gray-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  Specialized in satellite data analysis and predictive modeling. Developed machine learning 
                  models for environmental monitoring and agricultural yield prediction.
                </p>
                <div className="flex flex-wrap gap-1 sm:gap-2 mt-3">
                  <span className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded text-xs whitespace-nowrap">Python</span>
                  <span className="bg-red-500/20 text-red-300 px-2 py-1 rounded text-xs whitespace-nowrap">Machine Learning</span>
                  <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs whitespace-nowrap">Satellite Data</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-4 sm:p-6 rounded-lg border border-white/10 w-full max-w-full overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-start space-x-3 sm:space-x-4 w-full">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0">
                FL
              </div>
              <div className="flex-1 min-w-0 overflow-hidden">
                <h4 className="text-white font-semibold text-base sm:text-lg truncate">Freelance Developer</h4>
                <p className="text-purple-400 font-medium text-sm break-words">Self-Employed • 2021 - Present</p>
                <p className="text-gray-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  Full-stack web development, AI/ML consulting, and embedded systems projects. 
                  Worked with multiple clients to deliver custom software solutions.
                </p>
                <div className="flex flex-wrap gap-1 sm:gap-2 mt-3">
                  <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs whitespace-nowrap">MERN Stack</span>
                  <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs whitespace-nowrap">AI/ML</span>
                  <span className="bg-orange-500/20 text-orange-300 px-2 py-1 rounded text-xs whitespace-nowrap">Consulting</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      ),
    },
  ], [SkillsContent]);

  return (
    <div>
      <div className="flex flex-row mt-10 justify-center sm:mt-0 sm:justify-normal ">
        <TabButton
          selectTab={() => handleTabChange("Skills")}
          active={tab == "Skills"}
        >
          Skills
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("Education")}
          active={tab == "Education"}
        >
          Education
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("Experience")}
          active={tab == "Experience"}
        >
          Experience
        </TabButton>
      </div>
      <div>{tab_data.find((t) => t.id === tab)?.content}</div>
    </div>
  );
};

export default Skills;
