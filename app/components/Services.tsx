"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  CodeBracketIcon,
  CpuChipIcon,
  ChartBarIcon,
  CloudIcon,
  BoltIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  price: string;
}

const Services = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  const services: Service[] = [
    {
      id: 1,
      title: "Full-Stack Development",
      description: "End-to-end web application development using modern technologies and best practices.",
      icon: <CodeBracketIcon className="w-8 h-8" />,
      features: [
        "MERN Stack Development",
        "Next.js & React Applications",
        "RESTful API Development",
        "Database Design & Optimization",
        "Responsive UI/UX Design",
        "Performance Optimization"
      ],
      price: "Starting at $50/hour"
    },
    {
      id: 2,
      title: "AI & Machine Learning",
      description: "Custom AI solutions and machine learning models tailored to your business needs.",
      icon: <CpuChipIcon className="w-8 h-8" />,
      features: [
        "Computer Vision Systems",
        "Predictive Analytics",
        "Deep Learning Models",
        "Natural Language Processing",
        "Reinforcement Learning",
        "Model Deployment & MLOps"
      ],
      price: "Starting at $75/hour"
    },
    {
      id: 3,
      title: "Data Analysis & Visualization",
      description: "Transform your data into actionable insights with advanced analytics and visualization.",
      icon: <ChartBarIcon className="w-8 h-8" />,
      features: [
        "Satellite Data Analysis",
        "Business Intelligence Dashboards",
        "Statistical Analysis",
        "Power BI Integration",
        "Python Data Pipelines",
        "Real-time Analytics"
      ],
      price: "Starting at $60/hour"
    },
    {
      id: 4,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions for your applications.",
      icon: <CloudIcon className="w-8 h-8" />,
      features: [
        "Azure Cloud Deployment",
        "Docker Containerization",
        "CI/CD Pipeline Setup",
        "Microservices Architecture",
        "Cloud Migration",
        "DevOps Consulting"
      ],
      price: "Starting at $65/hour"
    },
    {
      id: 5,
      title: "Embedded Systems",
      description: "Microprocessor-based solutions for industrial automation and IoT applications.",
      icon: <BoltIcon className="w-8 h-8" />,
      features: [
        "Arduino & Raspberry Pi",
        "Industrial Automation",
        "IoT Connectivity",
        "Real-time Systems",
        "Sensor Integration",
        "Custom Hardware Solutions"
      ],
      price: "Starting at $70/hour"
    },
    {
      id: 6,
      title: "Technical Consulting",
      description: "Expert advice on technology strategy, architecture decisions, and project planning.",
      icon: <AcademicCapIcon className="w-8 h-8" />,
      features: [
        "Technology Stack Selection",
        "System Architecture Design",
        "Code Reviews & Audits",
        "Team Mentoring",
        "Project Planning",
        "Best Practices Implementation"
      ],
      price: "Starting at $80/hour"
    }
  ];

  const ServiceCard = ({ service, index }: { service: Service; index: number }) => (
    <motion.div
      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl group"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="flex items-center mb-6">
        <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
          {service.icon}
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
          <p className="text-purple-400 font-semibold">{service.price}</p>
        </div>
      </div>
      
      <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
      
      <ul className="space-y-3 mb-8">
        {service.features.map((feature, idx) => (
          <li key={idx} className="flex items-start text-gray-300">
            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group-hover:scale-105">
        Get Quote
      </button>
    </motion.div>
  );

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-gray-900/20" id="services" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">Services</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            I offer comprehensive software development and AI consulting services to help businesses 
            leverage cutting-edge technology for growth and innovation.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16 p-8 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl border border-white/10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Let's discuss your requirements and create a custom solution that fits your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#Contact"
              className="inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              Get In Touch
            </a>
            <a
              href="/CV.pdf"
              download
              className="inline-flex items-center justify-center border border-white/20 text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-all duration-300"
            >
              Download CV
            </a>
          </div>
        </motion.div>

        {/* Process Overview */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            How I <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">Work</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your requirements and goals" },
              { step: "02", title: "Planning", desc: "Creating detailed project roadmap and timeline" },
              { step: "03", title: "Development", desc: "Building your solution with regular updates" },
              { step: "04", title: "Delivery", desc: "Testing, deployment, and ongoing support" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
