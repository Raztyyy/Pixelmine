import { useParams } from "react-router-dom";
import SEOHelmet from "../ui/SEOHelmet";
import { jobData } from "../data/careers/jobData";

function CareerRole() {
  const { role_slug } = useParams();
  const job = jobData.find((job) => job.slug === role_slug);

  return (
    <>
      <SEOHelmet
        title="Page Under Construction | Pixelmine Japan OPC"
        description="This page is currently under construction. Please check back soon for updates from Pixelmine Japan OPC."
        url="https://www.pixelmine.org"
        image="/social-sharing.jpg"
      />

      <section className="grid min-h-full px-6 py-24 bg-white place-items-center sm:py-32 lg:px-8">
        <div className="text-center">
          <img
            src="../../logo.png"
            alt="Pixelmine Logo"
            className="h-5 mx-auto"
          />
          <p className="pt-10 text-2xl font-semibold text-primary ">
            Coming Soon!
          </p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-gray-900 text-balance sm:text-7xl">
            {job.title} job posting is under construction
          </h1>
          <p className="mt-6 text-lg text-gray-500 text-pretty font-regular sm:text-xl/8">
            We're getting ready to launch this page!
          </p>
        </div>
      </section>
    </>
  );
}

export default CareerRole;
