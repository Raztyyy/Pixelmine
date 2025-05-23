import googleBadge from "../../assets/google-play-badge.png";
import appleBadge from "../../assets/apple-store-badge.svg";

function DownloadButtons() {
  return (
    <div className="flex gap-4 mt-6">
      <a
        href="https://play.google.com/store/apps/details?id=com.yourapp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={googleBadge} alt="Get it on Google Play" className="h-12" />
      </a>
      <a
        href="https://apps.apple.com/app/your-app/id000000000"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={appleBadge}
          alt="Download on the App Store"
          className="h-12"
        />
      </a>
    </div>
  );
}

export default DownloadButtons;
