import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const Education = () => {
  const educations = [
    {
      degree: "B.Tech CSE",
      institution:
        "Shri Shankaracharya Institute of Professional Management and Technology (SSIPMT)",
      location: "Raipur",
      duration: "2023 - 2027",
      grade: "CGPA: 7.6",
      description:
        "Pursuing Bachelor's degree with focus on software development, data structures, and algorithms.",
    },
    {
      degree: "12th Grade (Mathematics)",
      institution: "Advani Oerlikon Government Higher Secondary School",
      location: "Birgaon, Raipur",
      duration: "2023",
      grade: "Grade: 77.60%",
      description:
        "Completed Higher Secondary Education with Mathematics as major subject.",
    },
    {
      degree: "10th Grade",
      institution: "Pragya Vidya Mandir",
      location: "Urla, Raipur",
      duration: "2021",
      grade: "Grade: 96%",
      description:
        "Completed Secondary School Education with outstanding academic performance.",
    },
  ];

  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section id="education" className="bg-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-semibold text-center mb-16">
          Education
        </h2>

        {!isMobile ? (
          // Desktop Timeline
          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white/20 h-full" />

            <div className="space-y-16">
              {educations.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50, y: 30 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className={`flex ${
                    idx % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div className="w-[45%]">
                    <div className="bg-gray-900/80 backdrop-blur border border-gray-700/70 rounded-xl p-6 shadow-lg">
                      <h3 className="text-xl font-semibold">{edu.degree}</h3>
                      <p className="text-gray-400 mt-1">{edu.institution}</p>
                      <p className="text-gray-500 text-sm">{edu.location}</p>
                      <p className="text-blue-400 text-sm mt-2">
                        {edu.duration} | {edu.grade}
                      </p>
                      <p className="text-gray-300 text-sm mt-3">
                        {edu.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <div className="w-4 h-4 rounded-full bg-white shadow-[0_0_0_4px_rgba(255,255,255,0.2)]" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          // Mobile Layout
          <div className="relative">
            {/* Left Border Line */}
            <div className="absolute left-4 top-0 bottom-0 w-1 bg-white/20" />

            <div className="space-y-8">
              {educations.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative ml-12"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[45px] top-5 w-4 h-4 rounded-full bg-white shadow-[0_0_0_4px_rgba(255,255,255,0.2)]" />

                  <div className="bg-gray-900/80 backdrop-blur border border-gray-700/70 rounded-xl p-5 shadow-lg">
                    <h3 className="text-lg font-semibold">{edu.degree}</h3>
                    <p className="text-gray-400 text-sm mt-1">
                      {edu.institution}
                    </p>
                    <p className="text-gray-500 text-xs">{edu.location}</p>
                    <p className="text-blue-400 text-xs mt-2">
                      {edu.duration} | {edu.grade}
                    </p>
                    <p className="text-gray-300 text-sm mt-3">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Education;
