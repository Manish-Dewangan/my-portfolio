import React, { useState } from "react";
import ParticlesBackground from "../components/ParticlesBackground";

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});
  const [visibleCount, setVisibleCount] = useState(6); // Initially 6 certificates

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

    // Future certificates - uncomment when needed
    // {
    //   id: 7,
    //   title: "New Certificate",
    //   issuer: "Some Platform",
    //   date: "2025",
    //   image: "/certificates/new.png",
    // },
    // {
    //   id: 8,
    //   title: "Another Certificate",
    //   issuer: "Another Platform",
    //   date: "2025",
    //   image: "/certificates/another.png",
    // },
  ];

  const visibleCertificates = certificates.slice(0, visibleCount);
  const hasMore = visibleCount < certificates.length;

  const loadMore = () => {
    setVisibleCount(certificates.length); // Show all certificates
  };

  return (
    <section
      id="certificate"
      className="relative bg-black min-h-screen py-20 px-4 md:px-8"
    >
      <ParticlesBackground />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header - Same as Projects */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            My Certificates
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Professional certifications and courses I've completed
          </p>
        </div>

        {/* Grid - Exactly like Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleCertificates.map((cert, index) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-500 border border-white/10 hover:border-purple-500/50 cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-56 bg-gradient-to-br from-purple-900/50 to-pink-900/50 overflow-hidden">
                {!loadedImages[cert.id] && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-purple-500"></div>
                  </div>
                )}
                <img
                  src={cert.image}
                  alt={cert.title}
                  onLoad={() =>
                    setLoadedImages((prev) => ({ ...prev, [cert.id]: true }))
                  }
                  onError={(e) => {
                    e.target.src =
                      "https://placehold.co/600x400/1a1a1a/purple?text=Certificate";
                  }}
                  className={`w-full h-full object-contain transition-all duration-500 group-hover:scale-110 
                    ${loadedImages[cert.id] ? "opacity-100" : "opacity-0"}`}
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all" />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-400">{cert.issuer}</p>
                <p className="text-xs text-gray-500 mt-1">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button - Same as Projects */}
        {hasMore && (
          <div className="text-center mt-16">
            <button
              onClick={loadMore}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
            >
              View All Certificates →
            </button>
          </div>
        )}

        {/* Optional: Show less button (if needed) */}
        {!hasMore && visibleCount > 6 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setVisibleCount(6)}
              className="px-6 py-2 rounded-full bg-white/10 text-gray-300 hover:bg-white/20 transition-all duration-300"
            >
              Show Less ↑
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[85vh] overflow-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-3 right-3 z-10 bg-black/50 hover:bg-black/70 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg transition"
            >
              ✕
            </button>

            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="w-full h-auto"
            />

            <div className="p-5">
              <h3 className="text-xl font-bold text-white">
                {selectedCert.title}
              </h3>
              <p className="text-purple-400">{selectedCert.issuer}</p>
              <p className="text-gray-500 text-sm">{selectedCert.date}</p>

              {selectedCert.link && (
                <a
                  href={selectedCert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-5 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                >
                  🔗 Verify Certificate
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
