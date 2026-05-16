import React from "react";
import Profile from "../assets/Profile.png";
import {
  FaFlutter,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa6";
import {
  SiReact,
  SiExpress,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";
import ParticlesBackground from "../components/ParticlesBackground";

const About = () => {
  const glows = [
    "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
    "-bottom-0 -right-10 w-[420px] h-[420px] opacity-15 blur-[140px] delay-300",
    "-top-1/2 -left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] opacity-20 blur-[100px]",
  ];

  const techStack = [
    { icon: SiReact, name: "React", color: "#61dafb" },
    { icon: SiTailwindcss, name: "Tailwind", color: "#38bdf8" },
    { icon: SiNodedotjs, name: "Node.js", color: "#68a063" },
    { icon: SiExpress, name: "Express.js", color: "#ffffff" },
    { icon: SiMongodb, name: "MongoDB", color: "#4db33d" },
    { icon: FaFlutter, name: "Flutter", color: "#61dafb" },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/manish130206",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/manish-dewangan/",
      label: "LinkedIn",
    },
    {
      icon: FaTwitter,
      href: "https://x.com/Manishdew1302",
      label: "Twitter",
    },
    {
      icon: FaEnvelope,
      href: "mailto:manishdewangan1302@email.com",
      label: "Email",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen w-full flex flex-col justify-center items-center relative bg-black text-white overflow-hidden px-4 py-16"
    >
      <ParticlesBackground />
      {/* Animated Glows */}
      <div className="absolute inset-0 pointer-events-none">
        {glows.map((c, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] animate-pulse ${c}`}
          />
        ))}
      </div>

      {/* Title */}
      <div className="relative z-10 text-center mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] drop-shadow-lg">
          About Me
        </h1>
        <div className="w-20 h-1 bg-gradient-to-r from-[#00bf8f] to-[#1cd8d2] mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Main Content - Left/Right Split */}
      <div className="relative z-10 max-w-6xl w-full mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-start">
          {/* LEFT COLUMN - Profile Image + Social Links */}
          <div className="lg:flex-1 flex flex-col items-center gap-6">
            {/* Profile Image with Glow Effect */}
            <div className="relative group">
              <div className="absolute -inset-3 bg-gradient-to-r from-[#00bf8f] to-[#1cd8d2] rounded-2xl opacity-50 blur-md group-hover:opacity-100 transition duration-500"></div>
              <div className="absolute -inset-3 bg-gradient-to-r from-[#00bf8f] to-[#1cd8d2] rounded-2xl opacity-30 group-hover:opacity-70 transition duration-500 animate-pulse"></div>
              <div className="relative lg:w-[440px] lg:h-[440px] md:w-96 md:h-96 rounded-2xl overflow-hidden border-2 border-white/10 bg-gradient-to-br from-[#302b63] to-[#1cd8d2]">
                <img
                  src={Profile}
                  alt="Manish Dewangan"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-2">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#00bf8f] hover:border-[#00bf8f] hover:bg-white/10 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN - Bio + Tech Stack */}
          <div className="lg:w-1/2 space-y-6">
            {/* Name & Title */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00bf8f] to-[#1cd8d2] bg-clip-text text-transparent">
                Manish Dewangan
              </h2>
              <p className="text-gray-400 text-lg mt-2">MERN Stack Developer</p>
            </div>

            {/* Bio */}
            <div className="space-y-3">
              <p className="text-gray-300 leading-relaxed">
                A Computer Science student and a passionate developer who enjoys
                building real-world applications and improving problem-solving
                skills through coding.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I like creating full-stack web applications and experimenting
                with ideas like smart systems and user-focused dashboards. I aim
                to build solutions that combine performance, scalability, and
                intuitive design to deliver a seamless user experience.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Apart from development, I actively work on improving my
                problem-solving skills and explore new technologies to grow as a
                developer, with a focus on building efficient and scalable
                solutions.
              </p>
            </div>

            {/* Buttons - Fixed Layout */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-3 rounded-full bg-gradient-to-r from-[#00bf8f] to-[#1cd8d2] text-black font-semibold text-sm hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#00bf8f]/25">
                📄 View Resume
              </button>

              <a
                href="#achievements"
                className="px-8 py-3 rounded-full font-semibold text-sm text-center text-white bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] shadow-lg hover:scale-105 transition-all duration-300"
              >
                🏆 View My Achievements
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
