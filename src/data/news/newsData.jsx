import placeholder from "../../assets/news-placeholder-1.jpg";
import placeholder2 from "../../assets/news-placeholder-2.jpg";

import featuredNews from "../../assets/featured-news.png";

export const newsData = [
  {
    id: "001",
    title: "Best conversion rate",
    date: "April 7, 2025",
    category: "Event",
    content: (
      <>
        <p className="mb-2 ">
          During our recent participation in the{" "}
          <strong>Global Web3 Expo</strong>, Pixelmine's decentralized content
          delivery network recorded a <strong>37% increase</strong> in
          conversion rates.
        </p>
        <p className="mb-2 ">
          This milestone confirms the effectiveness of community-first
          architecture in real-world use. By decentralizing authority and
          reducing bottlenecks, we’ve created an ecosystem where users and
          creators engage with greater trust and speed.
        </p>
        <p className="mb-2 ">
          We continue to iterate on this foundation to improve performance
          across multiple verticals.
        </p>
      </>
    ),
    preview:
      "The fundamental idea is similar to that of other decentralized systems. It entails distributing authority, control, and decision-making among various nodes rather than concentrating them in a single central entity.",
    img: placeholder,
    isFeatured: false,
    link: "",
    slug: "best-conversion-rate",
    author: "Pixelmine OPC",
  },
  {
    id: "002",
    title: "Launch of Pixelmine 2.0",
    date: "May 20, 2025",
    category: "Announcement",
    content: (
      <>
        <p className="mb-2 ">
          We’re thrilled to announce the launch of{" "}
          <strong>Pixelmine 2.0</strong> — a significant update that reimagines
          decentralized collaboration.
        </p>
        <p className="mb-2 ">
          Featuring a sleek, modernized interface and lightning-fast
          peer-to-peer protocols, Pixelmine 2.0 brings powerful new tools for
          creators, communities, and developers.
        </p>
        <ol className="mt-2 mb-2 ml-5 list-disc list-inside text-sm/6">
          <li>Real-time collaborative publishing</li>
          <li>Improved wallet integrations</li>
          <li>Enhanced identity control</li>
        </ol>
        <p className="mb-2 ">
          This launch marks a major step toward our goal of a more equitable and
          creator-led internet.
        </p>
      </>
    ),
    preview:
      "Pixelmine 2.0 introduces a completely redesigned interface, new collaborative tools, and faster decentralized protocols, marking a major leap in our mission to build the next-generation social web.",
    img: placeholder2,
    isFeatured: false,
    link: "",
    slug: "launch-of-pixelmine-2",
    author: "Pixelmine OPC",
  },
  {
    id: "003",
    title:
      "世界を驚かす次代のエンジニア常識をつくり変える分散型SNS「Pixelmine」を開発",
    date: "May 20, 2025",
    category: "Event",
    content: "",
    preview:
      "社長の名は」立ち上げから3年、出演者100名超。社長が感じた悔しさや葛藤を超えていく挑戦ストーリーを伝え、働く人に勇気を与えてきました。その挑戦の想いは広がり、舞台は、TikTokから東京ビッグサイトへ。Climbers2025への出場権を手にする社長は誰だ...。",
    img: featuredNews,
    isFeatured: true,
    link: "https://shachono-nawa.com/climbers",
    slug: "",
    author: "Pixelmine OPC",
  },
];
