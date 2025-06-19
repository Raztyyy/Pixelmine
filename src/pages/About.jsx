import BioCard from "../ui/about/BioCard";
import heroImg from "../assets/placeholder-fullwidth.jpg";
import SEOHelmet from "../ui/SEOHelmet";
import AnimatedSection from "../animations/AnimatedSection";

const teamMember = [
  {
    name: "Yutaro Sodei",
    image: "/team/yutaro-sodei-img.jpg",
    title: "Engineer / CEO / Lead Developer of Pixelmine",
    bio: "Born in 1995. Yutaro Sodei is the lead developer of Pixelmine SNS, a decentralized social platform built on the principle of data freedom. The project aims to eliminate dependence on personal information and make big data openly accessible to everyone. He holds an international PCT patent for a peer-to-peer communication protocol and a real-world-integrated advertising system that returns over 90% of ad revenue directly to users. In addition to Pixelmine SNS, he is also developing various applications—including those that enable matching across different industries and apps with built-in tipping features—exploring new, user-driven economic ecosystems. Leveraging blockchain technology, he is working to build a transparent and sustainable digital infrastructure through cross-sector innovation. Previously, he supported the digital transformation and e-commerce strategy of a publicly listed apparel brand, contributing through both technical execution and business insight. From full-stack development to business design and team management, Sodei is committed to creating next-generation services centered around freedom, transparency, and efficiency.",
  },
  {
    name: "Kai Sumiya",
    image: "/team/kai-sumiya-img.jpg",
    title: "Entrepreneur / Investor / Co-Founder of Pixelmine",
    bio: "Born in 1995. Questioning the conventional structures of advertising and data, Kai co-founded the decentralized social platform Pixelmine SNS” with developer Yutaro Sodei. Kai has led various ventures including real estate, IT consulting, custom system development, nano-coating technologies, the management of a group of four restaurants, and licensing businesses. He excels in team building and oversees internal operations at Pixelmine, leveraging his broad expertise in finance and legal affairs. Through Pixelmine, Kai is taking on the challenge of redefining the internet society",
  },
  // {
  //   name: "Satoshi Chihara",
  //   image: "/team/satoshi-chihara-img.jpg",
  //   title: "Quality Assurance (QA) Manager",
  //   bio: "Born in 1990. After working in finance at a securities firm and in corporate planning at a business enterprise, he became independent in 2019. Since then, he has built a diverse career spanning SNS marketing, influencer marketing, IT/IoT development, and business design consulting. He has led projects such as SaaS development for professional sports teams, IoT implementation for major infrastructure firms, and R&D of eco-friendly technologies. At Pixelmine SNS, he joined through his collaboration with Yutaro Sodei and now leads debugging efforts. More than just a technical contributor, he is driven by a strong sense of purpose to help build a decentralized, user-first internet. With a deep commitment to freedom and transparency, he supports the foundational infrastructure of Pixelmine, aiming to make it a trusted platform for the digital age.",
  // },
];

function About() {
  return (
    <>
      <SEOHelmet
        title="About Us | Pixelmine Japan OPC"
        description="Learn more about Pixelmine Japan OPC — our mission, team, and commitment to building a transparent, fair, and decentralized social network."
        url="https://www.pixelmine.org/about-us"
        image="/social-sharing.jpg"
      />

      <AnimatedSection
        element="section"
        className="pt-[3rem] pb-[6rem] sm:pb-[4rem]"
      >
        {/* Hero Section */}
        <div className="flex flex-col items-center p-6 mx-auto text-center max-w-7xl">
          <h1 className="text-lg font-medium uppercase dark:text-stone-50">
            About Us
          </h1>
          <hr className="mx-auto mt-2 mb-4 border-b-4 w-14 border-primary dark:border-green-400" />
          <p className="text-4xl font-semibold max-w-7xl sm:text-4xl lg:text-5xl dark:text-stone-50">
            The Organization and the people behind Pixelmine
          </p>

          <img
            src={heroImg}
            alt="Hero image"
            className="object-cover rounded mt-14"
          />
        </div>

        <div className="flex flex-col gap-10 p-6 mx-auto max-w-7xl ">
          <div className="flex-1 text-center lg:text-start">
            <h2 className="text-4xl leading-tight text-center sm:text-4xl lg:text-5xl max-w-auto lg:text-start dark:text-stone-50">
              About Pixelmine Japan
            </h2>
            <p className="mt-4 text-gray-600 text-sm/6 dark:text-stone-50">
              Pixelmine Japan was established in 2021 with the objective of
              transforming social networking through decentralization. In
              response to the increasing concerns surrounding data privacy and
              centralized control, the founders sought to develop a platform
              that enables users to retain ownership of their data while
              engaging in a transparent and secure environment.
            </p>
            <p className="mt-4 text-gray-600 text-sm/6 dark:text-stone-50">
              The company broadened its offerings to encompass a variety of
              tools for creators, including customizable profiles and enhanced
              engagement metrics. Embracing a community-driven approach,
              Pixelmine consistently solicits feedback from users and implements
              modifications based on their suggestions. The platform is
              dedicated to the principles of user empowerment, privacy, and
              transparency, thereby establishing new benchmarks for the
              operation of social networks in the digital era.
            </p>
            <p className="mt-4 text-gray-600 text-sm/6 dark:text-stone-50">
              Through its unwavering commitment to innovation and community
              engagement, Pixelmine aspires to redefine the social media
              landscape for the foreseeable future.
            </p>
          </div>
          <div className="flex-1">
            {/* <h2 className="text-4xl leading-tight text-center sm:text-4xl lg:text-5xl max-w-auto lg:text-start dark:text-stone-50">
              Meet Our Team
            </h2> */}
            <div className="flex flex-col gap-16 mt-10 lg:gap-28 lg:flex-row">
              {teamMember.map((memberDetails) => (
                <BioCard
                  memberDetails={memberDetails}
                  key={memberDetails.name}
                />
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}

export default About;
