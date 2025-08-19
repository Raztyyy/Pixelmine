import { useRef, useState, useEffect } from "react";

export default function BioContent({ bio }) {
  const scrollRef = useRef(null);
  const [showFade, setShowFade] = useState(false);

  const checkFade = () => {
    const el = scrollRef.current;
    if (!el) return;
    // show fade if scrollable and not at the bottom
    const atBottom = el.scrollHeight - el.scrollTop === el.clientHeight;
    setShowFade(!atBottom && el.scrollHeight > el.clientHeight);
  };

  useEffect(() => {
    checkFade();
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", checkFade);
    window.addEventListener("resize", checkFade); // in case container size changes

    return () => {
      el.removeEventListener("scroll", checkFade);
      window.removeEventListener("resize", checkFade);
    };
  }, []);

  return (
    <div className="relative px-2 overflow-hidden text-sm text-gray-700 max-h-72">
      <div ref={scrollRef} className="pr-2 overflow-y-auto max-h-72">
        {bio.split("\n").map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
      </div>

      {/* Bottom fade, only visible when content is scrollable and not at bottom */}
      {showFade && (
        <div className="absolute bottom-0 left-0 w-full h-12 pointer-events-none bg-gradient-to-t from-white to-transparent dark:from-stone-50"></div>
      )}
    </div>
  );
}
