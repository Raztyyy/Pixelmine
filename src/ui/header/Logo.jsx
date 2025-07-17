import { Link } from "react-router-dom";

function Logo({ paddingX = "0", mode }) {
  return (
    <div className="flex lg:flex-1">
      <Link to="/">
        <span className="sr-only">Pixelmine</span>
        <img
          alt="Pixelmine Logo"
          src="/logo.png"
          className={`h-[18px] w-auto ${paddingX} ${
            mode === "dark" ? "dark:invert dark:brightness-0" : ""
          }`}
        />
      </Link>
    </div>
  );
}

export default Logo;
