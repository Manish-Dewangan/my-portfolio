import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Profile from "../assets/manish_profile.png";
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
    href: "https://github.com/Manish-Dewangan",
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

const quickFacts = [
  { label: "Location", value: "Raipur, India", icon: "📍" },
  { label: "Education", value: "B.Tech CSE", icon: "🎓" },
  { label: "Experience", value: "2+ Years Coding", icon: "💻" },
  { label: "Focus", value: "Full Stack Dev", icon: "🎯" },
];

const TechBadge = ({ tech, index, isInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{
        duration: 0.4,
        delay: 0.4 + index * 0.08,
        type: "spring",
        stiffness: 200,
      }}
      whileHover={{ scale: 1.1, y: -5 }}
      className="group flex flex-col items-center gap-2"
    >
      <div
        className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300"
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = tech.color;
          e.currentTarget.style.boxShadow = `0 0 20px ${tech.color}30`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        <tech.icon
          className="text-2xl transition-colors duration-300"
          style={{ color: tech.color }}
        />
      </div>
      <span className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
        {tech.name}
      </span>
    </motion.div>
  );
};

const ProfileImage = ({ isInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative group"
    >
      <div className="absolute -inset-3 bg-gradient-to-r from-[#00bf8f] to-[#1cd8d2] rounded-2xl opacity-30 blur-md group-hover:opacity-60 transition duration-500" />
      <div className="absolute -inset-3 bg-gradient-to-r from-[#00bf8f] to-[#1cd8d2] rounded-2xl opacity-20 group-hover:opacity-40 transition duration-500 animate-pulse" />

      <div className="relative lg:w-[400px] lg:h-[400px] md:w-80 md:h-80 w-64 h-64 rounded-2xl overflow-hidden border-2 border-white/10 bg-gradient-to-br from-[#302b63] to-[#1cd8d2]">
        <img
          src={Profile}
          alt="Manish Dewangan"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        className="absolute -bottom-3 -right-3 px-4 py-2 rounded-full bg-black/80 border border-green-500/40 backdrop-blur-sm flex items-center gap-2"
      >
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-xs text-green-400 font-medium">
          Available for work
        </span>
      </motion.div>
    </motion.div>
  );
};

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    margin: "-15%",
    once: false,
  });

  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen w-full flex flex-col justify-center items-center relative bg-black text-white overflow-hidden px-4 py-20"
    >
      {/* Animated Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 -left-10 w-[360px] h-[360px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-15 blur-[120px] animate-pulse" />
        <div className="absolute -bottom-0 -right-10 w-[420px] h-[420px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-10 blur-[140px] animate-pulse delay-300" />
      </div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center mb-16"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] drop-shadow-lg">
          About Me
        </h1>
        <div className="w-20 h-1 bg-gradient-to-r from-[#00bf8f] to-[#1cd8d2] mx-auto mt-4 rounded-full" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT — Image + Socials */}
          <div className="flex flex-col items-center justify-center gap-6">
            <ProfileImage isInView={isInView} />

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex gap-3"
            >
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#00bf8f] hover:border-[#00bf8f]/50 hover:bg-white/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Bio + Tech */}
          <div className="space-y-6">
            {/* Name & Title */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00bf8f] to-[#1cd8d2] bg-clip-text text-transparent">
                Manish Dewangan
              </h2>
              <p className="text-gray-400 text-lg mt-1">MERN Stack Developer</p>
            </motion.div>

            {/* Quick Facts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="grid grid-cols-2 gap-3"
            >
              {quickFacts.map((fact, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.9 }
                  }
                  transition={{ duration: 0.4, delay: 0.15 + idx * 0.08 }}
                  className="bg-white/5 rounded-xl p-3 border border-white/10 hover:border-[#00bf8f]/30 transition-colors duration-300"
                >
                  <span className="text-lg">{fact.icon}</span>
                  <p className="text-xs text-gray-500 mt-1">{fact.label}</p>
                  <p className="text-sm text-white font-medium">{fact.value}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="space-y-3"
            >
              <p className="text-gray-300 leading-relaxed">
                A Computer Science student and a passionate developer who enjoys
                building real-world applications and improving problem-solving
                skills through coding.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I like creating full-stack web applications and experimenting
                with ideas like smart systems and user-focused dashboards.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Apart from development, I actively work on improving my
                problem-solving skills and explore new technologies.
              </p>
            </motion.div>

            {/* Tech Stack + Buttons */}
            <div className="pt-2">
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.35 }}
                className="text-sm text-gray-500 mb-3 uppercase tracking-wider font-medium"
              >
                Tech Stack
              </motion.p>
              {/* <div className="flex flex-wrap gap-5 mb-6">
                {techStack.map((tech, idx) => (
                  <TechBadge
                    key={idx}
                    tech={tech}
                    index={idx}
                    isInView={isInView}
                  />
                ))}
              </div> */}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.a
                  href="/Resume.pdf"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-3 rounded-full text-black font-semibold text-sm overflow-hidden text-center"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00bf8f] to-[#1cd8d2]" />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    📄 View Resume
                  </span>
                </motion.a>

                <motion.a
                  href="#achievements"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-full font-semibold text-sm text-center text-white border border-white/20 hover:border-[#00bf8f]/50 hover:bg-white/5 transition-all duration-300"
                >
                  <span className="flex items-center justify-center gap-2">
                    🏆 View Achievements
                  </span>
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
