// import Accordion from "../ui/Accordion";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPuzzle } from "@fortawesome/pro-solid-svg-icons";
import { FadeSlideUp } from "../animations/AnimatedWrappers";
import SEOHelmet from "../ui/SEOHelmet";
// import "katex/dist/katex.min.css";
// import { designImplementationItems } from "../data/designimplementation/designImplementationData";
import { useLanguage } from "../context/LanguageContext";
import { images } from "../assets/images";
import FourCoreSystemsTable from "../data/designimplementation/fourCoreSystemTable";
import DiscoverySystemTable from "../data/designimplementation/discoverySystemTable";
import SyncSystemTable from "../data/designimplementation/synchronizationSystemTable";
import ReputationSystem from "../data/designimplementation/reputationSystemTable";
import GCECorePrincilesTable from "../data/designimplementation/GCECorePrinciplesTable";
import GCECryptographicPrimitivesTable from "../data/designimplementation/GCECryptographicPrimitivesTable";
import GCESecurityPropertiesTable from "../data/designimplementation/GCESecurityPropertiesTable";
import LiveStreamingWebRTCTable from "../data/designimplementation/liveStreamingWebrtcTable";
import LiveStreamingScalingOptionsTable from "../data/designimplementation/liveStreamingScalingOptionsTable";
import SecurityFeaturesTable from "../data/designimplementation/securityFeaturesTable";
import HowItAllWorksTable from "../data/designimplementation/howItAllWorksTable";
import KeyBenefitsTable from "../data/designimplementation/keyBenefitsTable";

function DesignImplementation() {
  const { language } = useLanguage();
  const isEN = language === "en";
  const imgKey = isEN ? "EN" : "JP";

  return (
    <>
      <SEOHelmet
        title={
          isEN
            ? "Design & Implementation | Pixelmine Japan OPC"
            : "設計と実装 | Pixelmine Japan OPC"
        }
        description={
          isEN
            ? "Decentralized Social Network with Byzantine Fault Tolerant Data Propagation"
            : "ビザンチン障害耐性を備えたデータ伝播による分散型ソーシャルネットワーク"
        }
        url="https://pixelmine.org/design-implementation"
        image="/social-sharing.jpg"
      />

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

        <FadeSlideUp className="relative z-10 flex flex-col items-center gap-4 p-6 mx-auto text-center max-w-7xl ">
          {/* Heading */}
          <h1 className="max-w-4xl mb-2 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl drop-shadow-lg">
            {isEN ? "Design & Implementation" : "設計と実装"}
          </h1>

          {/* Subtitle */}
          <p className="max-w-3xl text-lg leading-relaxed md:text-xl text-emerald-50 drop-shadow-md">
            {isEN
              ? "Decentralized Social Network with Byzantine Fault Tolerant Data Propagation"
              : "ビザンチン障害耐性データ伝播を備えた分散型ソーシャルネットワーク"}
          </p>
        </FadeSlideUp>
      </section>

      {/* Content Section - Clean White Background */}
      <section className="py-20 overflow-x-hidden bg-gradient-to-b from-emerald-50 to-white dark:from-stone-900 dark:to-stone-800">
        <div className="p-6 mx-auto max-w-7xl">
          {/* Content Grid */}

          {/* 1. Architecture Overview */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center justify-center w-10 h-10 text-sm font-bold text-white shadow-lg rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600">
              1
            </div>
            <h2 className="flex items-center text-xl font-bold leading-snug sm:text-2xl lg:text-3xl max-w-auto dark:text-stone-50">
              {isEN ? "Architecture Overview" : "アーキテクチャ概要"}
            </h2>
          </div>

          <h3 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white ">
            {isEN ? "Two-Component System" : "2コンポーネントシステム"}
          </h3>
          <p className="text-base leading-relaxed text-gray-700 sm:text-lg dark:text-stone-300">
            {isEN
              ? "Pixelmine operates through two interconnected components: the mobile application and the Storer engine. The mobile app serves as the user interface—where accounts are created, content is published, and connections are made. The Storer engine is a command-line application that runs on servers or personal machines, hosting and distributing public data across the network. Together, they form a decentralized infrastructure where no single component is critical to the system's operation.-Component System"
              : "Pixelmineは、モバイルアプリケーションとStorerエンジンの2つの相互接続されたコンポーネントで動作します。モバイルアプリはユーザーインターフェースとして機能し、アカウントの作成、コンテンツの公開、接続の確立を行います。Storerエンジンは、サーバーや個人のマシンで動作するコマンドラインアプリケーションで、ネットワーク全体の公開データをホスティング・配信します。これらが連携して、単一のコンポーネントに依存しない分散型インフラを形成します。"}
          </p>

          <h3 className="mt-5 mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white ">
            {isEN ? "Node Network" : "ノードネットワーク"}
          </h3>
          <p className="text-base leading-relaxed text-gray-700 sm:text-lg dark:text-stone-300">
            {isEN
              ? "The network consists of multiple independent nodes running the Storer engine. Each node maintains a partial copy of public network data and communicates with other nodes to stay synchronized. Nodes can join or leave at any time without disrupting the network. This distributed topology eliminates central points of failure and ensures continuous availability."
              : "ネットワークは、Storerエンジンを実行する複数の独立したノードで構成されています。各ノードは公開ネットワークデータの部分的なコピーを保持し、他のノードと通信して同期を維持します。ノードはネットワークを中断することなく、いつでも参加・離脱できます。この分散トポロジーにより、単一障害点を排除し、継続的な可用性を確保します。"}
          </p>

          <div className="my-10">
            <div className="p-8 overflow-hidden bg-white border shadow-lg lg:p-20 rounded-2xl border-emerald-100 ">
              <img
                src={images.DesignImg1[imgKey]}
                alt="Design & Implementation"
                className="object-cover w-full h-auto"
              />
            </div>
          </div>

          {/* 2. The Four Core Systems */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center justify-center w-10 h-10 text-sm font-bold text-white shadow-lg rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600">
              2
            </div>
            <h2 className="flex items-center text-xl font-bold leading-snug sm:text-2xl lg:text-3xl max-w-auto dark:text-stone-50">
              {isEN ? "The Four Core Systems" : "4つのコアシステム"}
            </h2>
          </div>

          <p className="text-base leading-relaxed text-gray-700 sm:text-lg dark:text-stone-300">
            {isEN
              ? "Pixelmine addresses four fundamental challenges inherent to decentralized networks:"
              : "Pixelmineは、分散型ネットワークに固有の4つの基本的な課題に対処します："}
          </p>

          <FourCoreSystemsTable isEN={isEN} />

          {/* 3. Discovery System */}
          <div className="flex items-center gap-4 mt-8 mb-8">
            <div className="flex items-center justify-center w-10 h-10 text-sm font-bold text-white shadow-lg rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600">
              3
            </div>
            <h2 className="flex items-center text-xl font-bold leading-snug sm:text-2xl lg:text-3xl max-w-auto dark:text-stone-50">
              {isEN ? "Discovery System" : "ディスカバリーシステム"}
            </h2>
          </div>

          <p className="text-base leading-relaxed text-gray-700 sm:text-lg dark:text-stone-300">
            {isEN
              ? `The Discovery System answers: "How do nodes find each other?" Without a central directory, nodes use multiple methods to discover peers.`
              : "ディスカバリーシステムは「ノードはどのようにして相互を発見するか？」という問いに答えます。中央ディレクトリがない状態で、ノードは複数の方法を使用してピアを発見します。"}
          </p>

          <h3 className="mt-5 mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white ">
            {isEN ? "Four Layers of Discovery" : "4層のディスカバリー"}
          </h3>

          <DiscoverySystemTable isEN={isEN} />

          <div className="my-10">
            <div className="p-8 overflow-hidden bg-white border shadow-lg lg:p-20 rounded-2xl border-emerald-100">
              <img
                src={images.DesignImg2[imgKey]}
                alt="Design & Implementation"
                className="object-cover w-full h-auto"
              />
            </div>
          </div>

          <p className="text-base leading-relaxed text-gray-700 sm:text-lg dark:text-stone-300">
            {isEN
              ? `This layered approach ensures redundancy—if one discovery method fails, others compensate. A node joining the network typically establishes connections with 10-50 peers within seconds.`
              : "この多層アプローチにより冗長性が確保され、1つのディスカバリー方法が失敗しても他の方法が補完します。ネットワークに参加するノードは、通常数秒以内に10～50のピアとの接続を確立します。"}
          </p>

          {/* 4. Synchronization System */}
          <div className="flex items-center gap-4 mt-8 mb-8">
            <div className="flex items-center justify-center w-10 h-10 text-sm font-bold text-white shadow-lg rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600">
              4
            </div>
            <h2 className="flex items-center text-xl font-bold leading-snug sm:text-2xl lg:text-3xl max-w-auto dark:text-stone-50">
              {isEN ? "Synchronization System" : "同期システム"}
            </h2>
          </div>

          <p className="text-base leading-relaxed text-gray-700 sm:text-lg dark:text-stone-300">
            {isEN
              ? `Once nodes have found each other, the Sync System ensures they maintain consistent data.`
              : "ノードが相互を発見した後、同期システムがデータの一貫性を維持します。"}
          </p>

          <h3 className="mt-5 mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white ">
            {isEN ? "The Four Pillars of Sync" : "同期の4本柱"}
          </h3>

          <SyncSystemTable isEN={isEN} />

          <h3 className="mt-5 mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white ">
            {isEN ? "Gossip Protocol" : "ゴシッププロトコル"}
          </h3>

          <p className="text-base leading-relaxed text-gray-700 sm:text-lg dark:text-stone-300">
            {isEN
              ? `When new data is created, it propagates through the network using a gossip protocol with time-to-live (TTL) counters. Each node forwards the message to its peers, who forward to their peers, until the TTL expires.`
              : "新しいデータが作成されると、TTL（Time-To-Live）カウンター付きのゴシッププロトコルを使用してネットワーク全体に伝播します。各ノードがピアにメッセージを転送し、そのピアがさらに自分のピアに転送し、TTLが切れるまで続きます。"}
          </p>

          <div className="my-10">
            <div className="p-8 overflow-hidden bg-white border shadow-lg lg:p-20 rounded-2xl border-emerald-100">
              <img
                src={images.DesignImg3[imgKey]}
                alt="Design & Implementation"
                className="object-cover w-full h-auto"
              />
            </div>
          </div>

          <h3 className="mt-5 mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white ">
            {isEN ? "Conflict Resolution" : "競合解決"}
          </h3>

          <p className="text-base leading-relaxed text-gray-700 sm:text-lg dark:text-stone-300">
            {isEN
              ? `When conflicting versions of data exist, the network resolves them through majority consensus. An odd number of nodes (3, 5, 7, 9, or 11) participate in voting. The variant held by the majority is accepted as authoritative.`
              : "データの競合バージョンが存在する場合、ネットワークは多数決コンセンサスによって解決します。奇数のノード（3、5、7、9、または11）が投票に参加し、多数派が保持するバージョンが正規として受け入れられます。"}
          </p>

          <div className="my-10">
            <div className="p-8 overflow-hidden bg-white border shadow-lg lg:p-20 rounded-2xl border-emerald-100">
              <img
                src={images.DesignImg4[imgKey]}
                alt="Design & Implementation"
                className="object-cover w-full h-auto"
              />
            </div>
          </div>

          {/* 5. Data & File Routing */}
          <div className="flex items-center gap-4 mt-8 mb-8">
            <div className="flex items-center justify-center w-10 h-10 text-sm font-bold text-white shadow-lg rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600">
              5
            </div>
            <h2 className="flex items-center text-xl font-bold leading-snug sm:text-2xl lg:text-3xl max-w-auto dark:text-stone-50">
              {isEN ? "Data & File Routing" : "データ＆ファイルルーティング"}
            </h2>
          </div>

          <p className="text-base leading-relaxed text-gray-700 sm:text-lg dark:text-stone-300">
            {isEN
              ? `Not every node stores all data. With partial replication, a node might not have the specific content a user needs. The Routing System forwards requests to peers that have it.`
              : "すべてのノードがすべてのデータを保存するわけではありません。部分レプリケーションにより、ノードはユーザーが必要とする特定のコンテンツを持っていない場合があります。ルーティングシステムは、そのコンテンツを持つピアにリクエストを転送します。"}
          </p>

          <div className="my-10">
            <div className="p-8 overflow-hidden bg-white border shadow-lg lg:p-20 rounded-2xl border-emerald-100">
              <img
                src={images.DesignImg5[imgKey]}
                alt="Design & Implementation"
                className="object-cover w-full h-auto"
              />
            </div>
          </div>

          <p className="text-base leading-relaxed text-gray-700 sm:text-lg dark:text-stone-300">
            <span className="font-bold">
              {isEN ? `Loop Prevention: ` : "ループ防止："}
            </span>
            {isEN
              ? `The X-Routed header prevents infinite forwarding. Once a request is marked as routed, receiving nodes only check locally—they don't forward again.`
              : "X-Routedヘッダーにより無限転送を防止します。リクエストがルーテッドとしてマークされると、受信ノードはローカルのみをチェックし、再転送しません。"}
          </p>

          {/* 6. Reputation System */}
          <div className="flex items-center gap-4 mt-8 mb-8">
            <div className="flex items-center justify-center w-10 h-10 text-sm font-bold text-white shadow-lg rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600">
              6
            </div>
            <h2 className="flex items-center text-xl font-bold leading-snug sm:text-2xl lg:text-3xl max-w-auto dark:text-stone-50">
              {isEN ? "Reputation System" : "レピュテーションシステム"}
            </h2>
          </div>

          <p className="text-base leading-relaxed text-gray-700 sm:text-lg dark:text-stone-300">
            {isEN
              ? `In a decentralized network, how do you know which nodes to trust? The Reputation System tracks every node's behavior and assigns a trust score.`
              : "分散型ネットワークでは、どのノードを信頼できるかをどのように判断するでしょうか？レピュテーションシステムは、すべてのノードの行動を追跡し、信頼スコアを割り当てます。"}
          </p>

          <h3 className="mt-5 mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white ">
            {isEN ? "What Gets Tracked" : "追跡される指標"}
          </h3>

          <ReputationSystem isEN={isEN} />

          <h3 className="mt-5 mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white ">
            {isEN ? "Score Calculation" : "スコア計算"}
          </h3>

          <div className="my-10">
            <div className="p-8 overflow-hidden bg-white border shadow-lg lg:p-20 rounded-2xl border-emerald-100">
              <img
                src={images.DesignImg6[imgKey]}
                alt="Design & Implementation"
                className="object-cover w-full h-auto"
              />
            </div>
          </div>

          <h3 className="mt-5 mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white ">
            {isEN ? "Sybil Attack Protection" : "シビル攻撃対策"}
          </h3>

          <p className="text-base leading-relaxed text-gray-700 sm:text-lg dark:text-stone-300">
            {isEN
              ? `A Sybil attack occurs when one malicious actor creates many fake nodes to gain influence. The Reputation System protects against this by requiring nodes to earn trust over time through demonstrated contribution. New nodes start with limited influence and cannot participate meaningfully in consensus until they prove reliability.`
              : "シビル攻撃とは、1人の悪意ある行為者が多数の偽ノードを作成して影響力を得ようとすることです。レピュテーションシステムは、ノードが実績を通じて時間をかけて信頼を獲得することを要求することで、これを防御します。新しいノードは限られた影響力から始まり、信頼性を証明するまでコンセンサスに有意義に参加できません。"}
          </p>

          {/* 7. Group Chat Encryption */}
          <div className="flex items-center gap-4 mt-8 mb-8">
            <div className="flex items-center justify-center w-10 h-10 text-sm font-bold text-white shadow-lg rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600">
              7
            </div>
            <h2 className="flex items-center text-xl font-bold leading-snug sm:text-2xl lg:text-3xl max-w-auto dark:text-stone-50">
              {isEN ? "Group Chat Encryption" : "グループチャット暗号化"}
            </h2>
          </div>

          <p className="text-base leading-relaxed text-gray-700 sm:text-lg dark:text-stone-300">
            {isEN
              ? `Pixelmine implements a Signal-inspired Sender Keys protocol for group chat encryption, enhanced with post-quantum cryptography. This architecture provides end-to-end encryption with forward secrecy and quantum resistance.`
              : "PixelmineはSignalにインスパイアされたSender Keysプロトコルを実装し、耐量子暗号で強化されたグループチ ャット暗号化を提供します。このアーキテクチャは、前方秘匿性と量子耐性を備えたエンドツーエンド暗号化 を実現します。"}
          </p>

          <h3 className="mt-5 mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white ">
            {isEN ? "Core Principles" : "基本原則"}
          </h3>

          <GCECorePrincilesTable isEN={isEN} />

          <h3 className="mt-5 mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white ">
            {isEN ? "Cryptographic Primitives" : "暗号プリミティブ"}
          </h3>

          <GCECryptographicPrimitivesTable isEN={isEN} />

          <h3 className="mt-5 mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white ">
            {isEN ? "Security Properties" : "セキュリティ特性"}
          </h3>

          <GCESecurityPropertiesTable isEN={isEN} />

          {/* 8. Live Streaming */}
          <div className="flex items-center gap-4 mt-8 mb-8">
            <div className="flex items-center justify-center w-10 h-10 text-sm font-bold text-white shadow-lg rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600">
              8
            </div>
            <h2 className="flex items-center text-xl font-bold leading-snug sm:text-2xl lg:text-3xl max-w-auto dark:text-stone-50">
              {isEN ? "Live Streaming" : "ライブストリーミング"}
            </h2>
          </div>

          <p className="text-base leading-relaxed text-gray-700 sm:text-lg dark:text-stone-300">
            {isEN
              ? `Pixelmine supports live streaming through a WebRTC signaling server with HLS fallback. The system manages real-time peer connections between broadcasters and viewers, automatically scaling between low-latency WebRTC and high-capacity HLS based on viewer count.`
              : "PixelmineはWebRTCシグナリングサーバーとHLSフォールバックを通じてライブストリーミングをサポートします。システムは配信者と視聴者間のリアルタイムピア接続を管理し、視聴者数に基づいて低遅延WebRTCと大容量HLS間で自動的にスケールします。"}
          </p>

          <h3 className="mt-5 mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white ">
            {isEN ? "Hybrid WebRTC/HLS Strategy" : "ハイブリッドWebRTC/HLS戦略"}
          </h3>

          <LiveStreamingWebRTCTable isEN={isEN} />

          <h3 className="mt-5 mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white ">
            {isEN ? "Scaling Options" : "スケーリングオプション"}
          </h3>

          <LiveStreamingScalingOptionsTable isEN={isEN} />

          {/* 9. Security */}
          <div className="flex items-center gap-4 mt-8 mb-8">
            <div className="flex items-center justify-center w-10 h-10 text-sm font-bold text-white shadow-lg rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600">
              9
            </div>
            <h2 className="flex items-center text-xl font-bold leading-snug sm:text-2xl lg:text-3xl max-w-auto dark:text-stone-50">
              {isEN ? "Security" : "セキュリティ"}
            </h2>
          </div>

          <p className="text-base leading-relaxed text-gray-700 sm:text-lg dark:text-stone-300">
            {isEN
              ? `Every message and data transfer in Pixelmine is cryptographically signed, ensuring authenticity and preventing tampering.`
              : "Pixelmineのすべてのメッセージとデータ転送は暗号署名され、真正性を確保し、改ざんを防止します。"}
          </p>

          <h3 className="mt-5 mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white ">
            {isEN ? "Digital Signatures" : "デジタル署名"}
          </h3>

          <div className="my-10">
            <div className="p-8 overflow-hidden bg-white border shadow-lg lg:p-20 rounded-2xl border-emerald-100">
              <img
                src={images.DesignImg7[imgKey]}
                alt="Design & Implementation"
                className="object-cover w-full h-auto"
              />
            </div>
          </div>

          <h3 className="mt-5 mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white ">
            {isEN ? "Security Features" : "セキュリティ機能"}
          </h3>

          <SecurityFeaturesTable isEN={isEN} />

          {/* 10. How It All Works Together */}
          <div className="flex items-center gap-4 mt-8 mb-8">
            <div className="flex items-center justify-center w-10 h-10 text-sm font-bold text-white shadow-lg rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600">
              10
            </div>
            <h2 className="flex items-center text-xl font-bold leading-snug sm:text-2xl lg:text-3xl max-w-auto dark:text-stone-50">
              {isEN
                ? "How It All Works Together"
                : "すべてがどのように連携するか"}
            </h2>
          </div>

          <p className="text-base leading-relaxed text-gray-700 sm:text-lg dark:text-stone-300">
            {isEN
              ? `The following demonstrates all systems working in concert when a user requests content stored on another node:`
              : "以下は、ユーザーが別のノードに保存されたコンテンツを要求した際に、すべてのシステムが連携して動作する様子を示しています:"}
          </p>

          <HowItAllWorksTable isEN={isEN} />

          {/* 11. Key Benefits */}
          <div className="flex items-center gap-4 mt-8 mb-8">
            <div className="flex items-center justify-center w-10 h-10 text-sm font-bold text-white shadow-lg rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600">
              11
            </div>
            <h2 className="flex items-center text-xl font-bold leading-snug sm:text-2xl lg:text-3xl max-w-auto dark:text-stone-50">
              {isEN ? "Key Benefits" : "主な利点"}
            </h2>
          </div>

          <KeyBenefitsTable isEN={isEN} />
        </div>
      </section>
    </>
  );
}

export default DesignImplementation;
