import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { GiNinjaHead } from "react-icons/gi";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import {
  SiCodechef,
  SiLeetcode,
  SiGeeksforgeeks,
  SiHackerrank,
  SiCodeforces,
} from "react-icons/si";

// ─── Animated Counter ────────────────────────────────────────────────────────
const AnimatedCounter = ({ target, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-80px", once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const end = parseInt(target);
    const duration = 2000;
    const totalSteps = 60;
    const stepTime = Math.floor(duration / totalSteps);
    const stepValue = Math.ceil(end / totalSteps);
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

// ─── Coding Profile Card ─────────────────────────────────────────────────────
const CodingCard = ({ stat, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-60px" });

  const iconColorMap = {
    CodeChef: "text-orange-400",
    HackerRank: "text-green-400",
    LeetCode: "text-yellow-400",
    Codeforces: "text-purple-400",
    GeeksForGeeks: "text-green-500",
    "Code 360": "text-blue-400",
    AtCoder: "text-gray-300",
  };

  const bgColorMap = {
    CodeChef:
      "from-orange-500/10 to-orange-500/5 border-orange-500/25 hover:border-orange-500/60",
    HackerRank:
      "from-green-500/10 to-green-500/5 border-green-500/25 hover:border-green-500/60",
    LeetCode:
      "from-yellow-500/10 to-yellow-500/5 border-yellow-500/25 hover:border-yellow-500/60",
    Codeforces:
      "from-purple-500/10 to-purple-500/5 border-purple-500/25 hover:border-purple-500/60",
    GeeksForGeeks:
      "from-green-600/10 to-green-600/5 border-green-600/25 hover:border-green-600/60",
    "Code 360":
      "from-blue-500/10 to-blue-500/5 border-blue-500/25 hover:border-blue-500/60",
    AtCoder:
      "from-gray-500/10 to-gray-500/5 border-gray-500/25 hover:border-gray-500/60",
  };

  return (
    <motion.a
      ref={ref}
      href={stat.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ scale: 1.03, y: -3 }}
      whileTap={{ scale: 0.98 }}
      className={`group relative bg-gradient-to-br ${
        bgColorMap[stat.platform] ||
        "from-white/5 to-white/10 border-yellow-500/25 hover:border-yellow-500/60"
      } backdrop-blur-sm rounded-xl p-5 border transition-all duration-300 overflow-hidden`}
    >
      {/* Glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-white/5 rounded-xl" />

      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Icon */}
          <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <stat.icon
              className={`text-2xl ${iconColorMap[stat.platform] || "text-yellow-400"}`}
            />
          </div>

          {/* Info */}
          <div>
            <h4 className="text-base font-bold text-white group-hover:text-yellow-300 transition-colors">
              {stat.platform}
            </h4>
            <p
              className={`text-sm mt-0.5 ${
                iconColorMap[stat.platform] || "text-yellow-400"
              }`}
            >
              {stat.rating}
            </p>
          </div>
        </div>

        {/* Arrow */}
        <FaExternalLinkAlt className="text-gray-600 group-hover:text-gray-300 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 text-xs" />
      </div>

      {/* Bottom glow bar */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left bg-gradient-to-r ${
          stat.platform === "HackerRank" || stat.platform === "GeeksForGeeks"
            ? "from-green-500 to-emerald-400"
            : stat.platform === "LeetCode"
              ? "from-yellow-500 to-orange-400"
              : stat.platform === "Codeforces"
                ? "from-purple-500 to-pink-400"
                : stat.platform === "CodeChef"
                  ? "from-orange-500 to-red-400"
                  : "from-yellow-500 to-orange-400"
        }`}
      />
    </motion.a>
  );
};

// ─── Achievement Card ─────────────────────────────────────────────────────────
const AchievementCard = ({ ach, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-orange-500/20 hover:border-orange-500/60 transition-all duration-300 overflow-hidden"
    >
      {/* Hover background */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10 flex items-center gap-4">
        {/* Icon bubble */}
        <div className="w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-orange-500/30 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
          {ach.icon}
        </div>

        <div className="flex-1 min-w-0">
          <h4 className="text-base font-semibold text-white group-hover:text-yellow-300 transition-colors leading-snug">
            {ach.title}
          </h4>
          <p className="text-orange-400 text-sm mt-0.5">{ach.organizer}</p>
          <span className="inline-block mt-1.5 text-xs px-2 py-0.5 rounded-full bg-orange-500/15 text-orange-300 border border-orange-500/25">
            {ach.date}
          </span>
        </div>
      </div>

      {/* Bottom glow bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.div>
  );
};

// ─── Stat Box ─────────────────────────────────────────────────────────────────
const StatBox = ({ value, suffix, label, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative text-center bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-yellow-500/40 transition-all duration-300 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <p className="relative z-10 text-3xl font-bold text-yellow-400">
        <AnimatedCounter target={value} suffix={suffix} />
      </p>
      <p className="relative z-10 text-gray-400 text-sm mt-1">{label}</p>
    </motion.div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────
const Achievements = () => {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { margin: "-100px" });
  const codingRef = useRef(null);
  const codingInView = useInView(codingRef, { margin: "-100px" });
  const achRef = useRef(null);
  const achInView = useInView(achRef, { margin: "-100px" });

  const codingStats = [
    {
      platform: "CodeChef",
      rating: "⭐⭐ 2 Star",
      icon: SiCodechef,
      link: "https://codechef.com/users/manish1302",
    },
    {
      platform: "HackerRank",
      rating: "⭐⭐⭐⭐⭐ C++",
      icon: SiHackerrank,
      link: "https://www.hackerrank.com/profile/manish_dewangan1",
    },
    {
      platform: "LeetCode",
      rating: "🏅 170+ Problems Solved",
      icon: SiLeetcode,
      link: "https://leetcode.com/u/Manish130206",
    },
    {
      platform: "Codeforces",
      rating: "💜 Newbie (450+)",
      icon: SiCodeforces,
      link: "https://codeforces.com/profile/Manish_D13",
    },
    {
      platform: "GeeksForGeeks",
      rating: "🏅 600+ Problems Solved",
      icon: SiGeeksforgeeks,
      link: "https://www.geeksforgeeks.org/profile/manish_d1302",
    },
    {
      platform: "Code 360",
      rating: "1523 (Achiever)",
      icon: GiNinjaHead,
      link: "https://www.naukri.com/code360/profile/ManishD",
    },
    {
      platform: "AtCoder",
      rating: "165 (10 Kyu)",
      icon: FaCode,
      link: "https://atcoder.jp/users/Manish_D13",
    },
  ];

  const achievements = [
    {
      title: "7 Time College Topper",
      organizer: "Coding 360",
      date: "2024 - Present",
      icon: "🏆",
    },
    {
      title: "500+ Days of Coding Streak",
      organizer: "Overall Platforms",
      date: "2024 - Present",
      icon: "✅",
    },
    {
      title: "1st Position in Digital Poster Making Competition",
      organizer: "NSS SSIPMT, Raipur",
      date: "2025",
      icon: "🥇",
    },
    {
      title: "2nd Position in Photography Competition",
      organizer: "NSS SSIPMT, Raipur",
      date: "2024",
      icon: "⭐",
    },
  ];

  const stats = [
    { value: "3000", suffix: "+", label: "Problems Solved" },
    { value: "35", suffix: "+", label: "Contests Participated" },
    { value: "500", suffix: "+", label: "Active Days" },
    { value: "1000", suffix: "+", label: "Coding Hours" },
  ];

  return (
    <section
      id="achievements"
      className="relative min-h-screen py-20 px-4 bg-black"
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Achievements
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Coding profiles, competition wins, and recognitions
          </p>
        </motion.div>

        {/* Coding Profiles */}
        <motion.div
          ref={codingRef}
          initial={{ opacity: 0, y: 20 }}
          animate={codingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
            <span className="text-3xl">💻</span> Coding Profiles
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {codingStats.map((stat, i) => (
              <CodingCard key={i} stat={stat} index={i} />
            ))}
          </div>
        </motion.div>

        {/* Awards */}
        <motion.div
          ref={achRef}
          initial={{ opacity: 0, y: 20 }}
          animate={achInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
            <span className="text-3xl">🏅</span> Awards & Recognitions
          </h3>
          <div className="space-y-4">
            {achievements.map((ach, i) => (
              <AchievementCard key={i} ach={ach} index={i} />
            ))}
          </div>
        </motion.div>

        {/* Stats Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-white/10">
          {stats.map((stat, i) => (
            <StatBox
              key={i}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
