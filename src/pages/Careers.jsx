import SEOHelmet from "../ui/SEOHelmet";
import StackedAvatars from "../ui/StackedAvatars";
import ScrollLink from "../ui/ScrollLink";

import heroImg from "../assets/placeholder-fullwidth.jpg";

import { truncateWords } from "../utils/truncateWords";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimer,
  faMoneyBill,
  faBriefcase,
  faMapMarkerAlt,
  faArrowRight,
} from "@fortawesome/pro-solid-svg-icons";

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
  const isJP = language === "jp";

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

      {/* Hero Section - Matching Hero Style */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-700 dark:from-emerald-800 dark:via-emerald-900 dark:to-teal-900">
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
          <div className="absolute rounded-full top-10 left-1/4 w-96 h-96 bg-teal-500/30 blur-3xl animate-pulse" />
          <div
            className="absolute rounded-full bottom-10 right-1/4 w-96 h-96 bg-emerald-500/30 blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <FadeSlideUp className="relative z-10 flex flex-col justify-center max-w-4xl px-6 mx-auto text-center">
          {/* Stacked Avatars */}
          <div className="mx-auto mb-8">
            <StackedAvatars />
          </div>

          {/* Badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center px-4 py-1.5 text-xs font-bold tracking-widest text-white uppercase bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg">
              {isJP ? "採用情報" : "Join Our Team"}
            </span>
          </div>

          {/* Heading */}
          <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl drop-shadow-lg">
            {isJP
              ? "私たちのチームの一員となり、未来を共に創りましょう"
              : "Be a Part of Our Team and Help Shape the Future"}
          </h1>

          {/* Description */}
          <p className="max-w-4xl mx-auto mb-10 text-base leading-relaxed md:text-lg text-emerald-50 drop-shadow-md">
            {isJP
              ? "Pixelmine OPCでは、単に技術を形作るだけでなく、進歩を促す体験を創造しています。イノベーター、デザイナー、問題解決者のいずれであっても、ここで成長し、影響を与え、デジタルソリューションの未来を定義する場を見つけることができます。あなたの旅はここから始まります。"
              : "At Pixelmine OPC, we're not just shaping technology—we're crafting experiences that drive progress. Whether you're an innovator, designer, or problem-solver, you'll find a place here to grow, make an impact, and help define the future of digital solutions. Your journey starts with us."}
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <ScrollLink to="job-openings">
              {isJP ? "求人情報を見る" : "View Job Openings"}
            </ScrollLink>
          </div>
        </FadeSlideUp>
      </section>

      {/* Job Openings Section */}
      <StaggerContainer
        element="section"
        className="py-20 bg-white dark:bg-stone-900"
        id="job-openings"
      >
        <div className="px-6 mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="mb-12 text-center lg:text-left">
            <FadeSlideUp>
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 shadow-emerald-500/30">
                <FontAwesomeIcon
                  icon={faBriefcase}
                  className="text-white size-8"
                />
              </div>

              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
                {isJP ? "現在の募集" : "Current Opportunities"}
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-400">
                {isJP
                  ? "オープンポジションを確認して、私たちの成長チームに参加しましょう。"
                  : "Explore open roles and join our growing team."}
              </p>
            </FadeSlideUp>
          </div>

          {/* Job Cards */}
          <div className="grid gap-6">
            {jobData.map((job) => {
              return (
                <StaggerItem key={job.id}>
                  <Link to={`/careers/${job.slug}`}>
                    <div className="p-6 transition-all duration-300 bg-white border border-gray-200 shadow-lg group rounded-2xl dark:bg-stone-800 dark:border-stone-700 hover:border-emerald-500 dark:hover:border-emerald-500 hover:shadow-xl hover:-translate-y-1">
                      {/* Header */}
                      <div className="flex flex-col gap-4 mb-4 lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold text-gray-900 transition-colors dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                              {isJP ? job.titleJP || job.title : job.title}
                            </h3>
                            <span className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-lg bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                              {isJP
                                ? job.categoryJP || job.category
                                : job.category}
                            </span>
                          </div>

                          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <FontAwesomeIcon
                              icon={faMapMarkerAlt}
                              className="size-4"
                            />
                            {isJP
                              ? job.locationJP || job.location
                              : job.location}
                          </div>
                        </div>

                        {/* Arrow Icon - Desktop */}
                        <div className="hidden lg:block">
                          <div className="flex items-center justify-center w-10 h-10 transition-all bg-gray-100 rounded-xl dark:bg-stone-700 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/30">
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="text-gray-600 transition-all size-5 dark:text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 group-hover:translate-x-1"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="mb-4 text-base leading-relaxed text-gray-700 dark:text-gray-300">
                        {truncateWords(
                          isJP
                            ? job.roleDescriptionJP || job.roleDescription
                            : job.roleDescription,
                          150
                        )}
                      </p>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-200 dark:border-stone-700">
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-lg dark:bg-stone-700">
                            <FontAwesomeIcon
                              icon={faTimer}
                              className="size-4"
                            />
                          </div>
                          <span>
                            {isJP ? job.typeJP || job.type : job.type}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-lg dark:bg-stone-700">
                            <FontAwesomeIcon
                              icon={faMoneyBill}
                              className="size-4"
                            />
                          </div>
                          <span>
                            {isJP ? job.salaryJP || job.salary : job.salary}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </div>

          {/* No Jobs Message (if empty) */}
          {jobData.length === 0 && (
            <FadeSlideUp>
              <div className="p-12 text-center rounded-2xl bg-gray-50 dark:bg-stone-800">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gray-200 rounded-full dark:bg-stone-700">
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    className="text-gray-400 size-8"
                  />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  {isJP
                    ? "現在募集中のポジションはありません"
                    : "No Open Positions"}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {isJP
                    ? "新しいポジションが追加されたら、こちらでお知らせします。"
                    : "Check back soon for new opportunities."}
                </p>
              </div>
            </FadeSlideUp>
          )}
        </div>
      </StaggerContainer>
    </>
  );
}

export default Careers;
