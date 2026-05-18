import React, { useState } from "react";
import ParticlesBackground from "../components/ParticlesBackground";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "MeetMovies",
      description: "A online Movie Ticket Booking Platform",
      tech: ["React", "MongoDB", "NodeJs", "ExpressJs", "Tailwind"],
      category: "fullstack",
      image: "/project_img/meet-movies-img.png",
      github: "https://github.com/...",
      live: "https://meet-movies.vercel.app/",
    },
    {
      id: 2,
      title: "Media Search",
      description:
        "Developed a React-based media search app with real-time image and video search functionality using API integration and a responsive UI.",
      tech: ["React", "Redux", "LocalStorage"],
      category: "Basic",
      image: "/project_img/mediasearch.png",
      github: "https://github.com/...",
      live: "https://media-searchh.vercel.app/",
    },
    {
      id: 3,
      title: "CountUp",
      description:
        "Built a simple and responsive calculator using HTML, CSS, and JavaScript with support for basic arithmetic operations and an intuitive UI.",
      tech: ["HTML5", "CSS", "JavaScript"],
      category: "Basic",
      image: "/project_img/countup.png",
      github: "https://github.com/...",
      live: "https://count-up-the-calculator.vercel.app/",
    },
    {
      id: 4,
      title: "Portfolio 3.0",
      description: "3D interactive portfolio with Three.js",
      tech: ["Three.js", "React", "GSAP"],
      category: "creative",
      image: "/project4.jpg",
      github: "https://github.com/...",
      live: "https://project4.com",
    },
  ];

  const categories = ["all", "fullstack", "Basic"];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="relative bg-black min-h-screen py-20 px-4 md:px-8"
    >
      <ParticlesBackground />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Here are some of my recent works. Each project is crafted with
            passion and attention to detail.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full capitalize transition-all duration-300 ${
                filter === cat
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-500/50"
                  : "bg-white/10 text-gray-300 hover:bg-white/20 backdrop-blur-sm"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-500 border border-white/10 hover:border-purple-500/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-purple-900/50 to-pink-900/50 overflow-hidden">
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all" />
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* <span className="text-6xl">{project.image}</span> */}
                  <img src={project.image} alt="" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-4 py-2 rounded-full border border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white hover:border-transparent transition flex items-center gap-1"
                  >
                    <span>📝</span> Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-4 py-2 rounded-full border border-pink-500 text-pink-400 hover:bg-pink-600 hover:text-white hover:border-transparent transition flex items-center gap-1"
                  >
                    <span>🔗</span> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-16">
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105">
            View All Projects →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
