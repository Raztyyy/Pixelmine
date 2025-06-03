import { useState } from "react";
import CustomVideoPlayer from "../ui/concept/CustomVideoPlayer";

function Concept() {
  const [playingId, setPlayingId] = useState(null);
  const [activeVideoId, setActiveVideoId] = useState(1); // Default visible video

  const videos = [
    {
      id: 1,
      src: "/videos/concept-video-2.mp4",
      title:
        "【静かに世界を揺るがす！？】20代若き挑戦-真の分散型SNSピクセルマインの爆誕！",
    },

    {
      id: 2,
      src: "/videos/concept-video-1.mp4",
      title: "【WEB3信者の悲しい末路０１】先行者利益という言葉に騙された人たち",
    },
    {
      id: 3,
      src: "/videos/concept-video-3.mp4",
      title: "【WEB3信者の悲しい末路０２】データビジネス崩壊のお知らせ・・・",
    },
  ];

  const handlePlay = (id) => {
    setPlayingId(id);
  };

  const handleSwitch = (id) => {
    setActiveVideoId(id);
    setPlayingId(null); // Pause any playing video
  };

  return (
    <section className="grid min-h-full gap-6 px-6 py-24 bg-green-50/50 sm:py-32 lg:px-8 ">
      <div className="flex flex-col items-center gap-10 p-2 mx-auto lg:p-6 lg:flex-row sm:items-start lg:items-center max-w-7xl ">
        {/* Left Column */}
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-full sm:max-w-[30rem]">
            Concept
          </h1>
          <p className="pt-5 pb-2 max-w-full sm:max-w-[30rem] text-sm sm:text-base text-gray-600">
            The abstract concept underlying Pixelmine that serves as a crucial
            foundation for the system's development.
          </p>

          <p className="mt-2 mb-5 pt-2 pb-2 max-w-full sm:max-w-[30rem] text-xs sm:text-[0.7rem] text-gray-600 border-l-4 border-primary pl-5 font-light">
            Watch the presentation by Yutaro Sodei, the Chief Executive Officer
            of Pixelmine Japan. In this presentation, he delivers a
            comprehensive overview of the system and asserts its significant
            potential impact on the social networking service (SNS) market
          </p>
          {/* Switch Buttons */}
          <div className="flex flex-col gap-5 ">
            {videos.map((video) => (
              <button
                key={video.id}
                onClick={() => handleSwitch(video.id)}
                className={`inline-flex transition-all duration-300 ease-in-out text-xs text-start ${
                  video.id === activeVideoId
                    ? "text-primary font-semibold"
                    : "text-gray-900  "
                }`}
              >
                <span
                  className={`flex items-center justify-center ${
                    video.id === activeVideoId
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-100 text-gray-800"
                  } text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm`}
                >
                  {video.id}
                </span>
                {video.title}
              </button>
            ))}
          </div>
        </div>
        {/* Right Column */}
        <div className="flex-1">
          {/* All videos mounted, only one visible */}
          {videos.map((video) => (
            <div
              key={video.id}
              className={`w-full h-full shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] ${
                video.id === activeVideoId ? "block" : "hidden"
              }`}
            >
              <CustomVideoPlayer
                id={video.id}
                src={video.src}
                isPlaying={playingId === video.id}
                onPlay={() => handlePlay(video.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Concept;
