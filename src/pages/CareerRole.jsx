import { Link, useParams } from "react-router-dom";
import SEOHelmet from "../ui/SEOHelmet";
import { jobData } from "../data/careers/jobData";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimer,
  faMoneyBill,
  faBuilding,
  faLocationDot,
} from "@fortawesome/pro-regular-svg-icons";
import { truncateWords } from "../utils/truncateWords";

function CareerRole() {
  const { role_slug } = useParams();
  const job = jobData.find((job) => job.slug === role_slug);
  const otherJobs = jobData.filter((job) => job.slug !== role_slug);

  return (
    <>
      <SEOHelmet
        title={`${job.title} | Pixelmine Japan OPC`}
        description={job.roleDescription}
        url="https://www.pixelmine.org"
        image="/social-sharing.jpg"
      />

      <section
        className="pt-[2rem] pb-[2rem] sm:pt-[2rem] sm:pb-[2rem]"
        id="job-openings"
      >
        <div className="flex flex-col gap-10 p-6 mx-auto max-w-7xl lg:flex-row ">
          <div className="max-w-2xl">
            <div className="flex flex-col flex-wrap items-start gap-2">
              <h1 className="mb-3 text-3xl font-bold leading-tight lg:text-4xl">
                {job.title}
              </h1>
              <p className="text-sm text-gray-600">
                <span className="mr-2">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="text-gray-600 size-4 group-hover:text-indigo-600"
                  />
                </span>
                {job.location}
              </p>
              <p className="text-sm text-gray-600">
                <span className="mr-2">
                  <FontAwesomeIcon
                    icon={faBuilding}
                    className="text-gray-600 size-4 group-hover:text-indigo-600"
                  />
                </span>
                {job.category}
              </p>
              <p className="text-sm text-gray-600">
                <span className="mr-2">
                  <FontAwesomeIcon
                    icon={faTimer}
                    className="text-gray-600 size-4 group-hover:text-indigo-600"
                  />
                </span>
                {job.type}
              </p>
              <p className="text-sm text-gray-600">
                <span className="mr-2">
                  <FontAwesomeIcon
                    icon={faMoneyBill}
                    className="text-gray-600 size-4 group-hover:text-indigo-600"
                  />
                </span>
                {job.salary}
              </p>
              <a
                className="gap-2 group border rounded-lg text-sm text-center items-center me-2 mb-2 transition-all duration-300 ease-in-out px-6 py-3.5 bg-primary text-white border-primary hover:bg-primary/80 mt-4"
                href={job.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply Now
              </a>
            </div>

            {/* About Company */}
            <div className="mt-10">
              <h2 className="mb-4 text-xl font-semibold leading-tight">
                About PixelMine OPC
              </h2>
              <p className="text-sm text-gray-600">{job.companyDescription}</p>
            </div>

            {/* Role Overview */}
            <div className="mt-10">
              <h2 className="mb-4 text-xl font-semibold leading-tight">
                Role Overview
              </h2>
              <p className="text-sm text-gray-600">{job.roleDescription}</p>
            </div>

            {/* Responsibilities */}
            <div className="mt-10">
              <h2 className="mb-4 text-xl font-semibold leading-tight">
                Responsibilities
              </h2>
              <ol className="mt-2 ml-0 text-gray-600 list-disc list-inside md:ml-5 text-sm/6">
                {job.responsibilities.map((data, index) => {
                  return <li key={index}>{data}</li>;
                })}
              </ol>
            </div>

            {/* Qualifications */}
            <div className="mt-10">
              <h2 className="mb-4 text-xl font-semibold leading-tight">
                Qualifications
              </h2>
              <ol className="mt-2 ml-0 text-gray-600 list-disc list-inside md:ml-5 text-sm/6">
                {job.qualifications.map((data, index) => {
                  return <li key={index}>{data}</li>;
                })}
              </ol>
            </div>

            {/* Nice to Have */}
            {job.niceToHave.length > 0 && (
              <div className="mt-10">
                <h2 className="mb-4 text-xl font-semibold leading-tight">
                  Nice to Have
                </h2>
                <ol className="mt-2 ml-0 text-gray-600 list-disc list-inside md:ml-5 text-sm/6">
                  {job.niceToHave.map((data, index) => {
                    return <li key={index}>{data}</li>;
                  })}
                </ol>
              </div>
            )}

            {/* Perks */}
            {job.perks.length > 0 && (
              <div className="mt-10">
                <h2 className="mb-2 text-xl font-semibold leading-tight">
                  What We Offer
                </h2>
                <p className="mb-4 italic"> Exciting Perks Await!</p>
                <ol className="mt-2 ml-0 text-gray-600 list-disc list-inside md:ml-5 text-sm/6">
                  {job.perks.map((data, index) => {
                    return <li key={index}>{data}</li>;
                  })}
                </ol>
              </div>
            )}

            {/* Questions */}
            {job.questions.length > 0 && (
              <div className="mt-10">
                <h2 className="mb-2 text-xl font-semibold leading-tight">
                  Employer questions
                </h2>
                <p className="mb-4">
                  Your application will include the following questions:
                </p>
                <ol className="mt-2 ml-0 text-gray-600 list-disc list-inside md:ml-5 text-sm/6">
                  {job.questions.map((data, index) => {
                    return <li key={index}>{data}</li>;
                  })}
                </ol>
              </div>
            )}
          </div>
          <div className="flex-1 hidden lg:block ">
            <h2 className="mb-4 text-xl font-semibold leading-tight">
              Other Jobs from Pixelmine OPC
            </h2>

            {otherJobs.map((job) => {
              return (
                <Link to={`/careers/${job.slug}`} key={job.id}>
                  <div className="p-5 mb-4 border border-b-2 rounded">
                    <div className="flex flex-col items-start justify-between ">
                      <div className="flex flex-col items-start ">
                        <p className="font-semibold">{job.title}</p>
                      </div>
                      <p className="my-2 text-sm text-gray-600">
                        {job.location}
                      </p>
                    </div>
                    <div>
                      <p className="py-3 text-sm text-gray-600">
                        {truncateWords(job.roleDescription, 15)}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3 mt-2 ">
                      <p className="text-sm text-gray-600">
                        <span className="mr-2">
                          <FontAwesomeIcon
                            icon={faTimer}
                            className="text-gray-600 size-4 group-hover:text-indigo-600"
                          />
                        </span>
                        {job.type}
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="mr-2">
                          <FontAwesomeIcon
                            icon={faMoneyBill}
                            className="text-gray-600 size-4 group-hover:text-indigo-600"
                          />
                        </span>
                        {job.salary}
                      </p>
                    </div>
                    <div></div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default CareerRole;
