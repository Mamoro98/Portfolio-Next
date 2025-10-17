"use client";
import React, { useState, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CalendarIcon, ClockIcon, TagIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  readTime: string;
  publishDate: string;
  image: string;
  externalUrl?: string;
}

// Move articles array outside component to prevent recreation
const ARTICLES_DATA: Article[] = [
    {
      id: 1,
      title: "The Future of AI in Software Development",
      excerpt: "Exploring how artificial intelligence is transforming the way we write code, from automated testing to intelligent code completion and beyond.",
      content: "Artificial Intelligence is revolutionizing software development...",
      category: "AI/ML",
      tags: ["Artificial Intelligence", "Software Development", "Automation", "Future Tech"],
      readTime: "8 min read",
      publishDate: "2024-01-15",
      image: "/programming.jpeg",
      externalUrl: "https://medium.com/@omer-mamoro"
    },
    {
      id: 2,
      title: "Building Scalable Web Applications with MERN Stack",
      excerpt: "A comprehensive guide to architecting and developing scalable web applications using MongoDB, Express.js, React, and Node.js.",
      content: "The MERN stack has become one of the most popular choices...",
      category: "Web Development",
      tags: ["MERN", "React", "Node.js", "MongoDB", "Scalability"],
      readTime: "12 min read",
      publishDate: "2024-01-08",
      image: "/programming.jpeg",
      externalUrl: "https://dev.to/mamoro98"
    },
    {
      id: 3,
      title: "Computer Vision in Agricultural Technology",
      excerpt: "How machine learning and computer vision are revolutionizing agriculture through satellite imagery analysis and crop monitoring.",
      content: "Computer vision technology is transforming agriculture...",
      category: "AI/ML",
      tags: ["Computer Vision", "Agriculture", "Satellite Data", "Machine Learning"],
      readTime: "10 min read",
      publishDate: "2023-12-22",
      image: "/programming.jpeg"
    },
    {
      id: 4,
      title: "Microservices Architecture: Lessons Learned",
      excerpt: "Practical insights from implementing microservices architecture in production environments, including common pitfalls and best practices.",
      content: "Microservices architecture has become increasingly popular...",
      category: "Architecture",
      tags: ["Microservices", "Architecture", "Docker", "DevOps", "Best Practices"],
      readTime: "15 min read",
      publishDate: "2023-12-10",
      image: "/programming.jpeg"
    },
    {
      id: 5,
      title: "Getting Started with PyTorch for Deep Learning",
      excerpt: "A beginner-friendly introduction to PyTorch, covering basic concepts, model building, and training neural networks for real-world applications.",
      content: "PyTorch has emerged as one of the leading frameworks...",
      category: "AI/ML",
      tags: ["PyTorch", "Deep Learning", "Neural Networks", "Python", "Tutorial"],
      readTime: "20 min read",
      publishDate: "2023-11-28",
      image: "/programming.jpeg",
      externalUrl: "https://towards-datascience.com"
    },
    {
      id: 6,
      title: "Optimizing React Performance: Advanced Techniques",
      excerpt: "Advanced strategies for optimizing React applications, including memoization, code splitting, and performance monitoring techniques.",
      content: "React performance optimization is crucial for user experience...",
      category: "Web Development",
      tags: ["React", "Performance", "Optimization", "JavaScript", "Frontend"],
      readTime: "14 min read",
      publishDate: "2023-11-15",
      image: "/programming.jpeg"
    }
];

const Blog = () => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(() => ["All", "AI/ML", "Web Development", "Architecture"], []);

  const filteredArticles = useMemo(() => {
    return selectedCategory === "All" 
      ? ARTICLES_DATA 
      : ARTICLES_DATA.filter(article => article.category === selectedCategory);
  }, [selectedCategory]);

  const ArticleCard = ({ article, index }: { article: Article; index: number }) => (
    <motion.article
      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-purple-500/30 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl group"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="relative">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
            {article.category}
          </span>
        </div>
        {article.externalUrl && (
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
              <ArrowTopRightOnSquareIcon className="w-4 h-4 text-white" />
            </div>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
          <div className="flex items-center gap-1">
            <CalendarIcon className="w-4 h-4" />
            <span>{new Date(article.publishDate).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>
          <div className="flex items-center gap-1">
            <ClockIcon className="w-4 h-4" />
            <span>{article.readTime}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-purple-300 transition-colors duration-300">
          {article.title}
        </h3>
        
        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
          {article.excerpt}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {article.tags.slice(0, 3).map((tag, idx) => (
            <span
              key={idx}
              className="flex items-center gap-1 text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded-md"
            >
              <TagIcon className="w-3 h-3" />
              {tag}
            </span>
          ))}
          {article.tags.length > 3 && (
            <span className="text-xs text-gray-400 px-2 py-1">
              +{article.tags.length - 3} more
            </span>
          )}
        </div>
        
        <button 
          className="w-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 hover:from-purple-500/30 hover:to-blue-500/30 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 border border-purple-500/30 group-hover:border-purple-400/50"
          onClick={() => article.externalUrl ? window.open(article.externalUrl, '_blank') : null}
        >
          {article.externalUrl ? 'Read on External Site' : 'Read More'}
        </button>
      </div>
    </motion.article>
  );

  return (
    <section className="py-20 px-4" id="blog" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Latest <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">Articles</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Sharing insights on software development, artificial intelligence, and emerging technologies. 
            Stay updated with my latest thoughts and technical discoveries.
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

        {/* Articles Grid - Commented out until articles are written */}
        {/* <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredArticles.map((article, index) => (
            <ArticleCard key={article.id} article={article} index={index} />
          ))}
        </motion.div> */}

        {/* Placeholder for future articles */}
        <div className="text-center py-16">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-12 border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Articles Coming Soon!
            </h3>
            <p className="text-gray-300 mb-6">
              I'm currently working on some exciting articles about Multi-Agent Reinforcement Learning, 
              AI research, and software development. Stay tuned for updates!
            </p>
            <div className="flex items-center justify-center space-x-2 text-purple-400">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            </div>
          </div>
        </div>

        {/* Call to Action - Commented out until articles are available */}
        {/* <motion.div
          className="text-center mt-16 p-8 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl border border-white/10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Want to Read More?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Follow me on my writing platforms to stay updated with my latest articles and insights 
            on software development and artificial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://medium.com/@omer-mamoro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              Follow on Medium
            </a>
            <a
              href="https://dev.to/mamoro98"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-white/20 text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-all duration-300"
            >
              Follow on Dev.to
            </a>
          </div>
        </motion.div> */}

        {/* Newsletter Signup */}
        <motion.div
          className="mt-12 p-8 bg-gradient-to-r from-gray-800/30 to-gray-900/30 rounded-2xl border border-white/10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-300 mb-6">
              Get notified when I publish new articles about software development and AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
