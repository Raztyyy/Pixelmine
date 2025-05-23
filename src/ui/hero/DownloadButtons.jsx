import googleBadge from "../../assets/google-play-badge.png";
import appleBadge from "../../assets/apple-store-badge.svg";

function DownloadButtons() {
  return (
    <div className="flex gap-4 mt-6">
      <a
        href="https://play.google.com/store/apps/details?id=org.pixelminejapan.pixelmine"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={googleBadge}
          alt="Get it on Google Play"
          className="h-12  flex-shrink-0"
        />
      </a>
      <a
        href="https://apps.apple.com/app/pixelmine/id6741455738"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={appleBadge}
          alt="Download on the App Store"
          className="h-12  flex-shrink-0"
        />
      </a>
    </div>
  );
}

export default DownloadButtons;
