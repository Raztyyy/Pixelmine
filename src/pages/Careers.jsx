import SEOHelmet from "../ui/SEOHelmet";
import StackedAvatars from "../ui/StackedAvatars";
import ScrollLink from "../ui/ScrollLink";

import heroImg from "../assets/placeholder-fullwidth.jpg";

import { truncateWords } from "../utils/truncateWords";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimer, faMoneyBill } from "@fortawesome/pro-regular-svg-icons";

import { jobData } from "../data/careers/jobData";
import AnimatedSection from "../animations/AnimatedSection";

function Careers() {
  return (
    <>
      <SEOHelmet
        title="Careers | Pixelmine Japan OPC"
        description="Explore exciting career opportunities at Pixelmine OPC. Join us in building innovative decentralized social networking solutions."
        url="https://www.pixelmine.org/careers"
        image="/social-sharing.jpg"
      />

      <AnimatedSection
        element="section"
        className="pt-[5rem] pb-[5rem] sm:pt-[2rem] sm:pb-[2rem] bg-green-50/50"
      >
        <div className="flex flex-col items-center gap-10 p-6 mx-auto ">
          <div className="flex flex-col items-center justify-center flex-1 ">
            <StackedAvatars></StackedAvatars>
            <h1 className="text-4xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-auto sm:max-w-[40rem] text-center pt-5">
              Be a Part of Our Team and Help Shape the Future
            </h1>
            <p className="pt-5 pb-7 max-w-[40rem] text-sm/6 text-gray-600 text-center">
              At Pixelmine OPC, we’re not just shaping technology—we’re crafting
              experiences that drive progress. Whether you're an innovator,
              designer, or problem-solver, you'll find a place here to grow,
              make an impact, and help define the future of digital solutions.
              Your journey starts with us.
            </p>
            <ScrollLink to="job-openings">Job Openings</ScrollLink>
          </div>
          <div className="flex justify-center flex-1 max-w-7xl">
            <img
              src={heroImg}
              alt="Hero Image"
              className="object-cover object-center rounded-3xl h-[20rem] md:h-[30rem] w-[80rem]"
            />
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection
        element="section"
        className="pt-[2rem] pb-[2rem] sm:pt-[2rem] sm:pb-[2rem]"
        id="job-openings"
      >
        <div className="flex flex-col gap-10 p-6 mx-auto max-w-7xl lg:flex-row ">
          <div className="flex-[0.5]">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold leading-snug max-w-auto sm:max-w-[20rem]">
              Current Opportunities
            </h2>
            <p className="pt-3 text-gray-600 md:pt-5 text-sm/6 ">
              Explore open roles and join our growing team.
            </p>
          </div>
          <div className="flex-1">
            <div className="flex flex-col">
              {/* Job Posting */}
              {jobData.map((job) => {
                return (
                  <Link to={`/careers/${job.slug}`} key={job.id}>
                    <div className="p-5 mb-4 border border-b-2 rounded">
                      <div className="flex flex-col items-start justify-between lg:items-center lg:flex-row">
                        <div className="flex flex-col items-start lg:items-center lg:flex-row">
                          <p className="font-semibold">{job.title}</p>
                          <p className="p-1 mt-3 text-xs font-normal rounded-lg lg:mt-0 lg:ml-3 bg-green-100 text-green-800 me-2 px-2.5 py-0.5">
                            &#x2022; {job.category}
                          </p>
                        </div>
                        <p className="my-2 text-sm text-gray-600">
                          {job.location}
                        </p>
                      </div>
                      <div>
                        <p className="py-3 text-base">
                          {truncateWords(job.roleDescription, 150)}
                        </p>
                      </div>

                      <div className="flex flex-col gap-3 mt-5 lg:flex-row">
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
        </div>
      </AnimatedSection>
    </>
  );
}

export default Careers;
