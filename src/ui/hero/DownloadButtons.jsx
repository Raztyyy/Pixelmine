import googleBadge from "../../assets/google-play-badge.png";
import appleBadge from "../../assets/apple-store-badge.svg";

function DownloadButtons({ direction = "row" }) {
  return (
    <div className={`flex flex-${direction} gap-4 mt-1 md:mt-5`}>
      <a
        href="https://play.google.com/store/apps/details?id=org.pixelminejapan.pixelmine"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <img
          src={googleBadge}
          alt="Get it on Google Play"
          className="flex-shrink-0 h-12 transition-all duration-300 ease-in-out group-hover:scale-90"
        />
      </a>
      <a
        href="https://apps.apple.com/app/pixelmine/id6741455738"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <img
          src={appleBadge}
          alt="Download on the App Store"
          className="flex-shrink-0 h-12 transition-all duration-300 ease-in-out group-hover:scale-90"
        />
      </a>
    </div>
  );
}

export default DownloadButtons;
