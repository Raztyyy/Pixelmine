import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/pro-regular-svg-icons";

function PageNotFound() {
  return (
    <section class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div class="text-center">
        <p class="text-3xl font-semibold text-primary ">404</p>
        <h1 class="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
          Page not found
        </h1>
        <p class="mt-6 text-pretty text-lg font-regular text-gray-500 sm:text-xl/8">
          We're getting ready to launch this page!
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="flex gap-2 group border rounded-lg text-sm text-center items-center me-2 mb-2 px-6 py-3.5 text-sm transition-all duration-300 ease-in-out bg-primary text-white border-primary hover:bg-primary/80"
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="size-4 text-white transition-all duration-300 ease-in-out"
            />
            Go back home
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PageNotFound;
