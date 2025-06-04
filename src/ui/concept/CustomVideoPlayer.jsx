import { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/pro-solid-svg-icons";

export default function CustomVideoPlayer({ src, isPlaying, onPlay, id }) {
  const videoRef = useRef(null);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.play();
      setShowControls(true); // ✅ Show controls only when playing
    } else {
      video.pause();
    }
  }, [isPlaying]);

  const handlePlayClick = () => {
    onPlay(id); // Triggers parent to update playing state
  };

  return (
    <div className="relative w-full max-w-xl overflow-hidden rounded">
      <video
        ref={videoRef}
        src={src}
        className="w-full rounded "
        preload="metadata"
        controls={showControls} // ✅ only show when state says so
      />
      {!isPlaying && (
        <button
          onClick={handlePlayClick}
          aria-label="Play video"
          className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out bg-opacity-50 group bg-slate-950 hover:bg-opacity-60"
          style={{ cursor: "pointer" }}
        >
          <FontAwesomeIcon
            icon={faPlay}
            className="px-4 py-2 text-white transition-all duration-300 ease-in-out border rounded md:px-8 md:py-4 size-5 group-hover:bg-primary group-hover:border-none"
          />
        </button>
      )}
    </div>
  );
}
