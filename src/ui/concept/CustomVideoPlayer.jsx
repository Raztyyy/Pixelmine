import { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/pro-solid-svg-icons";

export default function CustomVideoPlayer({ src, isPlaying, onPlay, id }) {
  const videoRef = useRef(null);
  const [showControls, setShowControls] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.play();
      setShowControls(true);
    } else {
      video.pause();
    }
  }, [isPlaying]);

  const handlePlayClick = () => {
    onPlay(id);
  };

  return (
    <div
      className="relative w-full overflow-hidden group rounded-3xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src={src}
        className="w-full bg-gray-900 aspect-video rounded-3xl"
        preload="auto"
        muted
        playsInline
        controls={showControls}
      />

      {/* Play Overlay - Only when not playing */}
      {!isPlaying && (
        <button
          onClick={handlePlayClick}
          aria-label="Play video"
          className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent backdrop-blur-sm group-hover:bg-gray-900/80"
        >
          {/* Play Button Circle */}
          <div className="relative">
            {/* Pulse Ring Animation */}
            <div className="absolute inset-0 rounded-full bg-white/30 animate-ping"></div>

            {/* Main Button */}
            <div className="relative flex items-center justify-center w-20 h-20 transition-all duration-300 ease-out transform rounded-full shadow-2xl bg-gradient-to-br from-emerald-600 to-teal-600 shadow-emerald-500/50 group-hover:scale-110 group-hover:shadow-emerald-500/70 md:w-24 md:h-24">
              <FontAwesomeIcon
                icon={faPlay}
                className="ml-1 text-white size-7 md:size-8"
              />
            </div>
          </div>

          {/* Optional: Play Text Label */}
          <div className="absolute px-6 py-3 text-sm font-semibold text-white transition-all duration-300 transform translate-y-24 rounded-full opacity-0 bottom-10 bg-white/10 backdrop-blur-md group-hover:opacity-100 group-hover:translate-y-0">
            Click to Play
          </div>
        </button>
      )}

      {/* Modern Video Border Glow */}
      <div className="absolute inset-0 transition-all duration-300 pointer-events-none rounded-3xl ring-1 ring-white/10 group-hover:ring-emerald-500/50"></div>
    </div>
  );
}
