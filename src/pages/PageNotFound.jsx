import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/pro-regular-svg-icons";

function PageNotFound() {
  return (
    <section className="grid min-h-full px-6 py-24 bg-white place-items-center sm:py-32 lg:px-8">
      <div className="text-center">
        <img
          src="../../logo.png"
          alt="Pixelmine Logo"
          className="h-5 mx-auto"
        />
        <p className="pt-10 text-2xl font-semibold text-primary ">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-gray-900 text-balance sm:text-7xl">
          Page not found!
        </h1>
        <p className="mt-6 text-lg text-gray-500 text-pretty font-regular sm:text-xl/8">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="flex gap-2 group border rounded-lg text-center items-center me-2 mb-2 px-6 py-3.5 text-sm transition-all duration-300 ease-in-out bg-primary text-white border-primary hover:bg-primary/80"
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="text-white transition-all duration-300 ease-in-out size-4"
            />
            Go back home
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PageNotFound;
