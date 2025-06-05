import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="flex lg:flex-1">
      <Link to="/">
        <span className="sr-only">Pixelmine</span>
        <img alt="Pixelmine Logo" src="/logo.png" className="h-[18px] w-auto" />
      </Link>
    </div>
  );
}

export default Logo;
