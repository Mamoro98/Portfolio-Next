"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Form from "./Form";
import Image from "next/image";
import github from "../../public/github3.png";
import linkedIn from "../../public/linkedin2.png";
import whatsapp from "../../public/whatsapp.png";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-[#64B5F6]/10" id="Contact" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Let's <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">Connect!</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? I'm here to help you build amazing digital experiences. 
            Let's discuss your project and create something extraordinary together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Whether you need a full-stack web application, AI/ML solutions, or technical consulting, 
                I'm here to help. Feel free to reach out through any of the channels below.
        </p>
      </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <EnvelopeIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">Email</p>
                  <p className="text-gray-300">omer@aims.ac.za</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                  <PhoneIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">Location</p>
                  <p className="text-gray-300">Cape Town, South Africa</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <MapPinIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">Research Focus</p>
                  <p className="text-gray-300">Multi-Agent Reinforcement Learning at AIMS/InstaDeep</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-xl font-semibold text-white mb-6">Follow Me</h4>
              <div className="flex space-x-6">
                <motion.a
                  href="https://github.com/Mamoro98"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center group-hover:from-gray-600 group-hover:to-gray-800 transition-all duration-300">
                    <Image src={github} alt="GitHub" width={35} height={35} />
                  </div>
                </motion.a>

                <motion.a
                  href="https://wa.me/+249118912916"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-700 rounded-full flex items-center justify-center group-hover:from-green-400 group-hover:to-green-600 transition-all duration-300">
                    <Image src={whatsapp} alt="WhatsApp" width={35} height={35} />
                  </div>
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/omer-kamal-40417512b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center group-hover:from-blue-400 group-hover:to-blue-600 transition-all duration-300">
                    <Image src={linkedIn} alt="LinkedIn" width={35} height={35} />
                  </div>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
            <Form />
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20 p-8 bg-gradient-to-r from-[#64B5F6]/20 to-purple-600/20 rounded-2xl border border-white/10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Let's turn your vision into reality. Download my CV to learn more about my experience, 
            or get in touch to discuss your project requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/CV.pdf"
              download
              className="inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              Download CV
            </a>
            <a
              href="https://www.linkedin.com/in/omer-kamal-40417512b/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-white/20 text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-all duration-300"
            >
              Connect on LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
