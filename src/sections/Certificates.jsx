import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { FaExternalLinkAlt, FaTimes, FaAward } from "react-icons/fa";

const CertificateCard = ({ cert, index, onClick }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-80px" });
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      onClick={() => onClick(cert)}
      className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 cursor-pointer transition-all duration-500"
    >
      {/* Image Section */}
      <div className="relative h-52 bg-gradient-to-br from-purple-900/40 to-blue-900/40 overflow-hidden">
        {/* Loading Spinner */}
        {!loaded && !error && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full border-2 border-purple-500/30 border-t-purple-500 animate-spin" />
          </div>
        )}

        <img
          src={
            error
              ? "https://placehold.co/600x400/1a1a1a/purple?text=Certificate"
              : cert.image
          }
          alt={cert.title}
          onLoad={() => setLoaded(true)}
          onError={() => {
            setError(true);
            setLoaded(true);
          }}
          className={`w-full h-full object-contain transition-all duration-700 group-hover:scale-110 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />

        {/* Zoom hint icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white text-xl">
            🔍
          </div>
        </div>

        {/* Issuer Badge */}
        <span className="absolute top-3 left-3 px-3 py-1 text-xs font-medium rounded-full bg-black/60 text-purple-300 backdrop-blur-sm border border-purple-500/30">
          {cert.issuer}
        </span>

        {/* Verify badge if link exists */}
        {cert.link && (
          <span className="absolute top-3 right-3 px-2 py-1 text-xs font-medium rounded-full bg-green-500/20 text-green-400 backdrop-blur-sm border border-green-500/30 flex items-center gap-1">
            <FaExternalLinkAlt size={8} />
            Verified
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 relative">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-base font-semibold text-white group-hover:text-purple-400 transition-colors duration-300 leading-snug">
              {cert.title}
            </h3>
            <p className="text-sm text-gray-400 mt-1">{cert.issuer}</p>
          </div>
          <FaAward className="text-purple-400/60 shrink-0 mt-1" size={18} />
        </div>

        <div className="flex items-center justify-between mt-3">
          <span className="text-xs px-2 py-1 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/25">
            {cert.date}
          </span>
          <span className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
            Click to view →
          </span>
        </div>
      </div>

      {/* Bottom glow bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.div>
  );
};

const CertificateModal = ({ cert, onClose }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.85, y: 40 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
        className="bg-gray-900/95 border border-white/10 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-auto relative shadow-2xl shadow-purple-500/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <motion.button
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white flex items-center justify-center transition-colors"
        >
          <FaTimes size={14} />
        </motion.button>

        {/* Image */}
        <div className="relative bg-gradient-to-br from-purple-900/30 to-blue-900/30">
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center h-64">
              <div className="w-10 h-10 rounded-full border-2 border-purple-500/30 border-t-purple-500 animate-spin" />
            </div>
          )}
          <img
            src={cert.image}
            alt={cert.title}
            onLoad={() => setLoaded(true)}
            className={`w-full h-auto rounded-t-2xl transition-opacity duration-500 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        {/* Info */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-white">{cert.title}</h3>
              <p className="text-purple-400 mt-1">{cert.issuer}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xs px-2 py-1 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/25">
                  {cert.date}
                </span>
                {cert.link && (
                  <span className="text-xs px-2 py-1 rounded-full bg-green-500/15 text-green-400 border border-green-500/25">
                    ✓ Verified
                  </span>
                )}
              </div>
            </div>
            <FaAward className="text-purple-400 shrink-0" size={28} />
          </div>

          {/* Verify Button */}
          {cert.link && (
            <motion.a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-shadow"
            >
              <FaExternalLinkAlt size={12} />
              Verify Certificate
            </motion.a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { margin: "-100px" });

  const certificates = [
    {
      id: 1,
      title: "Frontend Web Developer Certificate",
      issuer: "Infosys",
      date: "2025",
      image: "/certificates/frontend_infosys.png",
      link: "https://verify-link.com/cert1",
    },
    {
      id: 2,
      title: "GFG C Nation skill UP",
      issuer: "GeeksForGeeks",
      date: "2025",
      image: "/certificates/gfg_c.png",
    },
    {
      id: 3,
      title: "GFG C++ Course",
      issuer: "GeeksForGeeks",
      date: "2025",
      image: "/certificates/gfg_cpp.png",
    },
    {
      id: 4,
      title: "GFG Python Certificate",
      issuer: "GeeksForGeeks",
      date: "2025",
      image: "/certificates/gfg-python.png",
    },
    {
      id: 5,
      title: "Problem Solving Basic",
      issuer: "HackerRank",
      date: "2025",
      image: "/certificates/ps_basic_hr.png",
    },
    {
      id: 6,
      title: "GFG 160 DSA Challenge",
      issuer: "GeeksForGeeks",
      date: "2025",
      image: "/certificates/gfg_160.png",
    },
  ];

  const visibleCertificates = certificates.slice(0, visibleCount);
  const hasMore = visibleCount < certificates.length;

  return (
    <section
      id="certificate"
      className="relative bg-black min-h-screen py-20 px-4 md:px-8"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            My Certificates
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Professional certifications and courses I've completed
          </p>

          {/* Stats Row */}
          <div className="flex items-center justify-center gap-8 mt-8">
            {[
              { label: "Certificates", value: certificates.length },
              {
                label: "Platforms",
                value: new Set(certificates.map((c) => c.issuer)).size,
              },
              { label: "Year", value: "2025" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleCertificates.map((cert, index) => (
            <CertificateCard
              key={cert.id}
              cert={cert}
              index={index}
              onClick={setSelectedCert}
            />
          ))}
        </div>

        {/* Load More / Show Less */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          className="flex items-center justify-center gap-4 mt-16"
        >
          {hasMore && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setVisibleCount(certificates.length)}
              className="group relative px-8 py-3.5 rounded-full text-white font-semibold overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                View All Certificates
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>
          )}

          {!hasMore && certificates.length > 6 && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setVisibleCount(6)}
              className="px-6 py-2.5 rounded-full bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-gray-200 transition-all text-sm"
            >
              Show Less ↑
            </motion.button>
          )}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCert && (
          <CertificateModal
            cert={selectedCert}
            onClose={() => setSelectedCert(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
