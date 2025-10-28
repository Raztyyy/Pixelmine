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
import {
  FadeSlideUp,
  StaggerContainer,
  StaggerItem,
} from "../animations/AnimatedWrappers";

import { useLanguage } from "../context/LanguageContext";

function Careers() {
  const { language } = useLanguage();
  const isJP = language === "jp"; // simple flag

  return (
    <>
      <SEOHelmet
        title={
          isJP
            ? "キャリア | Pixelmine Japan OPC"
            : "Careers | Pixelmine Japan OPC"
        }
        description={
          isJP
            ? "Pixelmine OPCでのエキサイティングなキャリアの機会を探求してください。革新的な分散型ソーシャルネットワーキングソリューションの構築に参加しましょう。"
            : "Explore exciting career opportunities at Pixelmine OPC. Join us in building innovative decentralized social networking solutions."
        }
        url="https://www.pixelmine.org/careers"
        image="/social-sharing.jpg"
      />

      <section className="pt-[2rem] pb-[2rem] bg-green-50/50 dark:bg-stone-900">
        <div className="flex flex-col items-center gap-10 p-6 mx-auto ">
          <FadeSlideUp className="flex flex-col items-center justify-center flex-1 dark:text-stone-50">
            <StackedAvatars></StackedAvatars>
            <h1 className="text-4xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-auto sm:max-w-[40rem] text-center pt-5">
              {isJP
                ? "私たちのチームの一員となり、未来を共に創りましょう"
                : "Be a Part of Our Team and Help Shape the Future"}
            </h1>
            <p className="pt-5 pb-7 max-w-[45rem] text-base text-stone-900 text-center dark:text-stone-50">
              {isJP
                ? "Pixelmine OPCでは、単に技術を形作るだけでなく、進歩を促す体験を創造しています。イノベーター、デザイナー、問題解決者のいずれであっても、ここで成長し、影響を与え、デジタルソリューションの未来を定義する場を見つけることができます。あなたの旅はここから始まります。"
                : "At Pixelmine OPC, we’re not just shaping technology—we’re crafting experiences that drive progress. Whether you're an innovator, designer, or problem-solver, you'll find a place here to grow, make an impact, and help define the future of digital solutions. Your journey starts with us."}
            </p>
            <ScrollLink to="job-openings">
              {isJP ? "求人情報" : "Job Openings"}
            </ScrollLink>
          </FadeSlideUp>
          <div className="flex justify-center flex-1 max-w-7xl">
            {/* <img
              src={heroImg}
              alt="Hero Image"
              className="object-cover object-center rounded-3xl h-[20rem] md:h-[30rem] w-[80rem]"
            /> */}
          </div>
        </div>
      </section>

      <StaggerContainer
        element="section"
        className="pt-[2rem] pb-[2rem]"
        id="job-openings"
      >
        <div className="flex flex-col gap-10 p-6 mx-auto max-w-7xl lg:flex-row ">
          <StaggerItem className="flex-[0.5]">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold leading-snug max-w-auto sm:max-w-[20rem] dark:text-stone-50">
              {isJP ? "現在の募集" : "Current Opportunities"}
            </h2>
            <p className="pt-3 text-base text-stone-900 md:pt-5 dark:text-stone-50">
              {isJP
                ? "オープンポジションを確認して、私たちの成長チームに参加しましょう。"
                : "Explore open roles and join our growing team."}
            </p>
          </StaggerItem>

          <div className="flex-1">
            <div className="flex flex-col ">
              {/* Job Posting */}
              {jobData.map((job) => {
                return (
                  <StaggerItem key={job.id}>
                    <Link to={`/careers/${job.slug}`}>
                      <div className="p-5 mb-4 border border-b-2 rounded dark:bg-stone-50">
                        <div className="flex flex-col items-start justify-between lg:items-center lg:flex-row">
                          <div className="flex flex-col items-start lg:items-center lg:flex-row">
                            <p className="font-semibold">
                              {isJP ? job.titleJP || job.title : job.title}
                            </p>
                            <p className="p-1 mt-3 text-xs font-normal rounded-lg lg:mt-0 lg:ml-3 bg-green-100 text-green-800 me-2 px-2.5 py-0.5">
                              &#x2022;{" "}
                              {isJP
                                ? job.categoryJP || job.category
                                : job.category}
                            </p>
                          </div>
                          <p className="my-2 text-sm text-stone-900">
                            {isJP
                              ? job.locationJP || job.location
                              : job.location}
                          </p>
                        </div>
                        <div>
                          <p className="py-3 text-base text-stone-700">
                            {truncateWords(
                              isJP
                                ? job.roleDescriptionJP || job.roleDescription
                                : job.roleDescription,
                              150
                            )}
                          </p>
                        </div>

                        <div className="flex flex-col gap-3 mt-5 lg:flex-row">
                          <p className="text-sm text-stone-900">
                            <span className="mr-2">
                              <FontAwesomeIcon
                                icon={faTimer}
                                className="text-stone-900 size-4 group-hover:text-indigo-600"
                              />
                            </span>
                            {isJP ? job.typeJP || job.type : job.type}
                          </p>
                          <p className="text-sm text-stone-900">
                            <span className="mr-2">
                              <FontAwesomeIcon
                                icon={faMoneyBill}
                                className="text-stone-900 size-4 group-hover:text-indigo-600"
                              />
                            </span>
                            {isJP ? job.salaryJP || job.salary : job.salary}
                          </p>
                        </div>
                        <div></div>
                      </div>
                    </Link>
                  </StaggerItem>
                );
              })}
            </div>
          </div>
        </div>
      </StaggerContainer>
    </>
  );
}

export default Careers;
