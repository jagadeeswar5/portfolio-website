"use client";

import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Portfolio = () => {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme") || "light";
      setTheme(storedTheme);
      setMounted(true);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("theme", theme);
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [theme, mounted]);

  // Experience Data
  const experiences = [
    { title: "Research Assistant", company: "California State University, Sacramento", duration: "2024 - Present", description: "Conducting research in HLB disease modeling using C++ models and RStudio. Developing ML models for predictive analysis and automation." },
    { title: "Teaching Assistant", company: "California State University, Sacramento", duration: "2024 - Present", description: "Taught Java and algorithms to undergraduate students. Assisted students in understanding core programming concepts." },
    { title: "Web Development Intern", company: "Manach Tech Info", duration: "2023", description: "Developed e-commerce platforms using React.js and Node.js. Integrated REST APIs, reducing page load times by 40%." },
  ];

  // Skills Data
  const skills = [
    { category: "Languages", items: ["Python", "JavaScript", "TypeScript", "C++", "R", "SQL", "Bash"] },
    { category: "Frameworks", items: ["React.js", "Next.js", "Node.js", "Flask", "TensorFlow", "PyTorch", "OpenCV"] },
    { category: "Cloud & DevOps", items: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Git"] },
  ];

  // Certifications Data
  const certifications = [
    { name: "AWS AI Practitioner Certification", year: "2025", link: "https://www.credly.com/badges/b5356ca6-f78b-4944-adb5-9a3f18bea850/public_url" },
    { name: "Operations Research: Models and Applications - Coursera", year: "2024", link: "https://coursera.org/share/80813419fd16512f31791c3048e6012c" },
  ];

  // Projects Data
  const projects = [
    { name: "AR-Based Interior Design System", description: "AI-driven furniture placement with AR visualization.", link: "https://github.com/jkamireddy/ar-interior-design" },
    { name: "GDP Prediction System", description: "Machine learning-powered GDP prediction system for India and the US.", link: "#" },
    { name: "AI-Powered Resume Analyzer", description: "NLP-powered resume analysis using OpenAI GPT.", link: "https://github.com/jagadeeswar5/AI_Resume_Analyzer.git" },
    { name: "AI Branding Generator", description: "Generates logos, color palettes, and branding assets using AI.", link: "https://github.com/jagadeeswar5/AI-Branding-Generator.git" },
    { name: "AI Code Explainer", description: "Explains code snippets in multiple languages using NLP.", link: "https://github.com/jkamireddy/ai-code-explainer" },
    { name: "AI Flowchart Generator", description: "Converts text into structured flowcharts.", link: "https://github.com/jkamireddy/ai-flowchart" },
    { name: "AI Event Scheduler", description: "AI-powered event scheduler with Google Calendar integration.", link: "https://github.com/jkamireddy/ai-event-scheduler" },
  ];

  return (
    <div className={`min-h-screen flex flex-col items-center px-6 transition-all duration-500 overflow-x-hidden ${
        theme === "dark"
          ? "bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white"
          : "bg-white text-gray-900"
      }`}
    >
      {/* Header with Name & Icons */}
      <header className="w-full text-center mt-10">
        <h1 className="text-5xl font-bold text-blue-400">K. Jagadeeswar Reddy</h1>
        <div className="flex justify-center gap-6 mt-4">
          <a href="https://www.linkedin.com/in/jagadeeswarkamireddy/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} className="text-blue-400 hover:text-blue-500 transition" />
          </a>
          <a href="https://github.com/jagadeeswar5" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} className="text-gray-300 hover:text-white transition" />
          </a>
          <a href="mailto:kamireddy.jagadeeswar@gmail.com">
            <FaEnvelope size={30} className="text-red-400 hover:text-red-500 transition" />
          </a>
        </div>
      </header>

      {/* Experience, Skills & Certifications */}
      <section className="mt-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Experience (Left) */}
        <div>
          <h2 className="text-3xl font-semibold text-center text-blue-400">Experience</h2>
          <div className="mt-6 space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="p-6 bg-gray-800 shadow-lg rounded-xl hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-semibold text-blue-300">{exp.title}</h3>
                <p className="text-gray-400">{exp.company} ({exp.duration})</p>
                <p className="text-gray-300 mt-2">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills & Certifications (Right) */}
        <div>
          <h2 className="text-3xl font-semibold text-center text-blue-400">Skills</h2>
          <div className="mt-6 grid gap-3">
            {skills.map((skill, index) => (
              <div key={index} className="p-4 bg-gray-800 shadow-lg rounded-xl">
                <h3 className="text-lg font-semibold text-blue-300">{skill.category}</h3>
                <p className="text-gray-300 mt-2">{skill.items.join(", ")}</p>
              </div>
            ))}
          </div>

          {/* Certifications BELOW Skills */}
          <h2 className="text-3xl font-semibold text-center text-blue-400 mt-8">Certifications</h2>
          <div className="mt-6 grid gap-3">
            {certifications.map((cert, index) => (
              <a href={cert.link} target="_blank" rel="noopener noreferrer" key={index} className="block">
                <div className="p-4 bg-gray-800 shadow-lg rounded-xl hover:bg-gray-700 transition">
                  <h3 className="text-lg font-semibold text-blue-300">{cert.name}</h3>
                  <p className="text-gray-400">{cert.year}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mt-10 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-blue-400">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {projects.map((proj, index) => (
            <a href={proj.link} target="_blank" rel="noopener noreferrer" key={index} className="block">
              <div className="p-6 bg-gray-800 shadow-lg rounded-xl hover:scale-105 transition">
                <h3 className="text-xl font-semibold text-blue-300">{proj.name}</h3>
                <p className="text-gray-300 mt-2">{proj.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
