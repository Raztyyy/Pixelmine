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
      className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white border-transparent shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105 font-semibold transition-all duration-300 ease-in-out border rounded-lg group px-6 py-3.5 text-sm"
    >
      {children}
    </Link>
  );
}

export default ScrollLink;
