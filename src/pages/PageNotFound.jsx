import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faHome } from "@fortawesome/pro-solid-svg-icons";

function PageNotFound() {
  return (
    <section className="relative grid min-h-screen px-6 overflow-hidden place-items-center bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-700">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Dotted Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Animated Gradient Blobs */}
        <div className="absolute rounded-full top-20 left-1/4 w-96 h-96 bg-teal-500/30 blur-3xl animate-pulse" />
        <div
          className="absolute rounded-full bottom-20 right-1/4 w-96 h-96 bg-emerald-500/30 blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative z-10 max-w-2xl text-center">
        {/* Logo */}
        <div className="flex justify-center mb-12">
          <img
            src="../../logo.png"
            alt="Pixelmine Logo"
            className="h-6 brightness-0 invert"
          />
        </div>

        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span className="inline-flex items-center px-6 py-2 text-sm font-bold tracking-widest text-white uppercase border rounded-full shadow-lg bg-white/10 backdrop-blur-md border-white/20">
            Error 404
          </span>
        </div>

        {/* Heading */}
        <h2 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl drop-shadow-lg">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mb-10 text-lg leading-relaxed md:text-xl text-emerald-50 drop-shadow-md">
          Sorry, we couldn't find the page you're looking for. The page may have
          been moved or deleted.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-semibold text-white transition-all duration-300 border-2 border-white/30 rounded-2xl bg-white/10 backdrop-blur-md hover:bg-white/20 hover:scale-105"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="size-5" />
            Go Back
          </button>
        </div>
      </div>
    </section>
  );
}

export default PageNotFound;
