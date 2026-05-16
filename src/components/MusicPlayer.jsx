import React, { useState, useRef, useEffect } from "react";
import Music1 from "../assets/music/i_was_never_there.m4a";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef(null);

  const playlist = [Music1];

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.log("Playback failed:", error);
            setIsPlaying(false);
          });
      }
    }
  };

  const handleDoubleClick = (e) => {
    e.stopPropagation();
    if (isLoading) return;

    setIsLoading(true);
    const nextTrack = (currentTrack + 1) % playlist.length;
    setCurrentTrack(nextTrack);

    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  const handleTrackEnd = () => {
    const nextTrack = (currentTrack + 1) % playlist.length;
    setCurrentTrack(nextTrack);
  };

  // Preload next track
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
    }
  }, [currentTrack]);

  return (
    <div
      className="fixed bottom-8 right-4 flex flex-col items-center gap-2"
      style={{ zIndex: 1000 }}
    >
      {/* Text - No Background, Small, Centered */}
      <span className="text-[10px] md:text-[11px] text-white/90 font-medium tracking-wide whitespace-nowrap">
        Wanna play music while scoring?
      </span>

      {/* Button with Neon Glow - Slightly Bigger */}
      <button
        onClick={togglePlay}
        onDoubleClick={handleDoubleClick}
        disabled={isLoading}
        className={`p-3 rounded-full shadow-lg transition transform hover:scale-110 active:scale-95 ${
          isLoading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        style={{
          background:
            "linear-gradient(135deg, rgb(0, 240, 255), rgb(0, 255, 128))",
          boxShadow:
            "rgb(0, 240, 255) 0px 0px 15px, rgb(0, 255, 128) 0px 0px 25px",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        aria-label="Play music"
      >
        {isLoading ? (
          // Loading Spinner
          <svg
            className="animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeOpacity="0.25"
              fill="none"
            />
            <path
              d="M12 2a10 10 0 0 1 10 10"
              stroke="currentColor"
              fill="none"
            />
          </svg>
        ) : isPlaying ? (
          // Pause Icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <rect x="6" y="4" width="4" height="16"></rect>
            <rect x="14" y="4" width="4" height="16"></rect>
          </svg>
        ) : (
          // Play Icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ marginLeft: "2px" }}
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>

      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        src={playlist[currentTrack]}
        onEnded={handleTrackEnd}
        onError={() => {
          console.error("Error loading audio");
          setIsPlaying(false);
        }}
      />
    </div>
  );
};

export default MusicPlayer;
