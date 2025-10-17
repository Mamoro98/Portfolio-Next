"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const QuoteSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <section className="py-20 px-4" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            {/* Quote marks */}
            <div className="absolute -top-6 -left-6 text-6xl text-purple-500/30 font-serif select-none">
              "
            </div>
            <div className="absolute -bottom-6 -right-6 text-6xl text-purple-500/30 font-serif select-none">
              "
            </div>
            
            {/* Main quote */}
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light text-white leading-relaxed px-8 py-12">
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-medium">
                The only limit to our realization of tomorrow will be our doubts of today.
              </span>
            </blockquote>
            
            {/* Decorative elements */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;
