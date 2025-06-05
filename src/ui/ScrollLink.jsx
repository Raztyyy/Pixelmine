import { Link } from "react-scroll";

function ScrollLink({
  to,
  smooth = true,
  duration = 500,
  offset = -70,
  children,
}) {
  return (
    <Link
      to={to}
      smooth={smooth}
      duration={duration}
      offset={offset}
      className="flex items-center gap-2 mb-2 text-sm text-center transition-all duration-300 ease-in-out border rounded-lg group me-2 px-6 py-3.5 bg-primary text-white border-primary hover:bg-primary/80 cursor-pointer"
    >
      {children}
    </Link>
  );
}

export default ScrollLink;
