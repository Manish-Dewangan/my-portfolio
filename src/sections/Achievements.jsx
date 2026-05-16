import React from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import {
  SiCodechef,
  SiLeetcode,
  SiGeeksforgeeks,
  SiHackerrank,
  SiCodeforces,
  SiCodingninjas,
} from "react-icons/si";

const Achievements = () => {
  const codingStats = [
    {
      platform: "CodeChef",
      rating: "⭐⭐⭐",
      color: "from-brown-500 to-orange-500",
      icon: SiCodechef,
      link: "https://codechef.com/users/manish1302",
    },
    {
      platform: "HackerRank",
      rating: "⭐⭐⭐⭐⭐  C++",
      color: "from-green-500 to-emerald-500",
      icon: SiHackerrank,
      link: "https://www.hackerrank.com/profile/manish_dewangan1",
    },
    {
      platform: "LeetCode",
      rating: "🏅 150+ Problems Solved",
      color: "from-yellow-500 to-orange-500",
      icon: SiLeetcode,
      link: "https://leetcode.com/u/Manish130206",
    },
    {
      platform: "Codeforces",
      rating: "💜 Newbie (450+)",
      color: "from-purple-500 to-pink-500",
      icon: SiCodeforces,
      link: "https://codeforces.com/profile/Manish_D13",
    },
    {
      platform: "GeeksForGeeks",
      rating: "🏅 500+ Problems Solved",
      color: "from-yellow-500 to-orange-500",
      icon: SiGeeksforgeeks,
      link: "https://codeforces.com/profile/Manish_D13",
    },
  ];

  const achievements = [
    {
      title: "Winner - National Hackathon 2024",
      organizer: "TechFest India",
      date: "2024",
      icon: "🏆",
    },
    {
      title: "Top 10 - Google Code Jam",
      organizer: "Google",
      date: "2023",
      icon: "🎯",
    },
    {
      title: "Open Source Contributor - React.js",
      organizer: "Meta",
      date: "2023",
      icon: "⭐",
    },
    {
      title: "Best Project Award",
      organizer: "College Tech Fest",
      date: "2023",
      icon: "🥇",
    },
    {
      title: "100 Days of Code - Complete",
      organizer: "GitHub",
      date: "2024",
      icon: "✅",
    },
    {
      title: "Mentor at Coding Bootcamp",
      organizer: "CodeChef",
      date: "2023",
      icon: "👨‍🏫",
    },
  ];

  return (
    <section
      id="achievements"
      className="relative min-h-screen py-20 px-4 bg-black"
    >
      <ParticlesBackground />

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-4">
          Achievements
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Coding profiles, competition wins, and recognitions
        </p>

        {/* Coding Profiles Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
            <span className="text-3xl">💻</span> Coding Profiles
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {codingStats.map((stat, i) => (
              <a
                key={i}
                href={stat.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-xl p-5 border border-yellow-500/30 hover:scale-105 transition-all duration-300"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      {stat.platform}
                    </h4>
                    <p className="text-yellow-400 text-sm mt-1">
                      {stat.rating}
                    </p>
                  </div>
                  <span className="text-3xl">{stat.icon && <stat.icon />}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Achievements List */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
            <span className="text-3xl">🏅</span> Awards & Recognitions
          </h3>
          <div className="space-y-4">
            {achievements.map((ach, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-orange-500/30 hover:border-orange-500/70 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{ach.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white">
                      {ach.title}
                    </h4>
                    <p className="text-orange-400 text-sm">{ach.organizer}</p>
                    <p className="text-gray-500 text-xs">{ach.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/10">
          <div className="text-center">
            <p className="text-3xl font-bold text-yellow-400">3000+</p>
            <p className="text-gray-400 text-sm">Problems Solved</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-yellow-400">35+</p>
            <p className="text-gray-400 text-sm">Contest Participated</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-yellow-400">500+</p>
            <p className="text-gray-400 text-sm">Active Days</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-yellow-400">1000+</p>
            <p className="text-gray-400 text-sm">Coding Hours</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
