"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe, FaPython, FaReact, FaNodeJs, FaAws, FaUniversity, FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    title: "AI-Powered Resume Analyzer",
    description: "An intelligent resume analyzer that extracts skills and matches job listings using NLP.",
    repo: "https://github.com/jkamireddy/resume-analyzer",
  },
  {
    title: "AI-Powered Interview Coach",
    description: "An AI-driven interview feedback system that evaluates spoken answers and provides insights.",
    repo: "https://github.com/jkamireddy/interview-coach",
  },
  {
    title: "E-Commerce Product Catalog Management System",
    description: "Built a scalable e-commerce catalog using MongoDB and Flask for efficient product data handling.",
    repo: "https://github.com/jkamireddy/ecommerce-catalog",
  },
  {
    title: "AR-Based Intelligent Interior Design System",
    description: "AI-driven furniture placement and visualization tool with AR integration.",
    repo: "https://github.com/jkamireddy/ar-interior-design",
  },
];

const certifications = [
  { name: "AWS AI Practitioner Certification", year: "2025" },
  { name: "Leadership Certificate - Cumberland University", year: "2024" },
  { name: "Excellence Award in Literature & World Geography", year: "High School" },
];

const experiences = [
  {
    title: "Research Assistant",
    company: "CSU Sacramento",
    duration: "2024 - Present",
    description: "Conducting research in AI and data analytics, contributing to published work in data-driven projects.",
  },
  {
    title: "Web Development Intern",
    company: "Manach Tech Info",
    duration: "2023",
    description: "Developed web applications, optimized user experience, and implemented new design features.",
  },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white p-8">
      {/* Header */}
      <header className="flex flex-col items-center text-center">
        <motion.h1 
          className="text-5xl font-extrabold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          K. Jagadeeswar Reddy
        </motion.h1>
        <p className="text-gray-400 mt-2 text-lg">Software Developer | AI & Web Enthusiast</p>
        <div className="mt-4 flex gap-4">
          <a href="https://github.com/jkamireddy" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-3xl hover:text-gray-300 transition duration-300" />
          </a>
          <a href="https://linkedin.com/in/jkamireddy" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-3xl text-blue-400 hover:text-blue-600 transition duration-300" />
          </a>
          <a href="mailto:kamireddy.jagadeeswar@gmail.com">
            <FaEnvelope className="text-3xl text-red-400 hover:text-red-600 transition duration-300" />
          </a>
          <a href="https://jkamireddy.dev" target="_blank" rel="noopener noreferrer">
            <FaGlobe className="text-3xl text-green-400 hover:text-green-600 transition duration-300" />
          </a>
        </div>
      </header>

      {/* Education Section */}
      <section className="mt-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-300 mb-6">Education</h2>
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <FaUniversity className="text-4xl text-yellow-500 mb-2" />
          <h3 className="text-xl font-semibold text-gray-100">Master's in Computer Science</h3>
          <p className="text-gray-400">California State University, Sacramento | Expected Graduation: 2025</p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="mt-10 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-300 mb-6 text-center">Experience</h2>
        <div className="grid gap-6">
          {experiences.map((exp, index) => (
            <div key={index} className="p-6 bg-gray-800 shadow-lg rounded-xl">
              <FaBriefcase className="text-4xl text-blue-400 mb-2" />
              <h3 className="text-xl font-semibold text-gray-100">{exp.title} - {exp.company}</h3>
              <p className="text-gray-400">{exp.duration}</p>
              <p className="text-gray-400 mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="mt-10 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-300 mb-6 text-center">Certifications</h2>
        <div className="grid gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="p-6 bg-gray-800 shadow-lg rounded-xl">
              <h3 className="text-xl font-semibold text-gray-100">{cert.name}</h3>
              <p className="text-gray-400">{cert.year}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="mt-10 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-300 mb-6 text-center">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-6 bg-gray-800 shadow-lg rounded-xl hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-100">{project.title}</h3>
              <p className="text-gray-400 mt-2">{project.description}</p>
              <a href={project.repo} target="_blank" rel="noopener noreferrer">
                <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                  View on GitHub
                </button>
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} K. Jagadeeswar | Built with 💙</p>
      </footer>
    </div>
  );
};

export default Portfolio;
