// User Sovereignity
export const userSovereignityItems = [
  {
    title: {
      en: "Strengthening User Control",
      jp: "ユーザーコントロールの強化",
    },
    content: {
      en: (
        <>
          <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
            In centralized systems, users function as tenants, occupying space
            on infrastructure owned by others and subject to non-negotiable
            terms. Pixelmine fundamentally alters this dynamic. Users generate
            and retain their own cryptographic keys, ensuring that only they can
            authorize access to their data. Content cannot be modified, moved,
            or deleted without explicit owner consent. Control is embedded
            within the system's architecture rather than granted by the
            platform.
          </p>
        </>
      ),
      jp: (
        <>
          <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
            中央集権型システムでは、ユーザーは他者が所有するインフラストラクチャ上のスペースを占有し
            、交渉不可能な条件に従うテナントとして機能します。Pixelmineはこの力学を根本的に変革します
            。ユーザーは自身の暗号鍵を生成・保持し、自分だけがデータへのアクセスを承認できることを保
            証します。コンテンツは所有者の明示的な同意なしに変更、移動、削除することはできません。コ
            ントロールはプラットフォームから付与されるのではなく、システムのアーキテクチャに組み込ま
            れています。
          </p>
        </>
      ),
    },
  },
  {
    title: { en: "Self-Sovereign Identity", jp: "自己主権型アイデンティティ" },
    content: {
      en: (
        <>
          <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
            On conventional platforms, user identity is subject to the
            provider's discretion; accounts may be suspended, usernames
            reassigned, and histories erased. Pixelmine employs cryptographic
            key pairs to establish identity. Users generate and control their
            own keys, rendering their identity portable, verifiable, and
            irrevocable by any external party. Users are not merely entries in
            another entity's database.
          </p>
        </>
      ),
      jp: (
        <>
          <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
            従来のプラットフォームでは、ユーザーのアイデンティティはプロバイダーの裁量に委ねられてい
            ます。アカウントは停止され、ユーザー名は再割り当てされ、履歴は消去される可能性があります
            。Pixelmineは暗号鍵ペアを使用してアイデンティティを確立します。ユーザーは自身の鍵を生成・
            管理し、アイデンティティを携帯可能で検証可能なものとし、外部の第三者によって取り消し不可
            能なものにします。ユーザーは他者のデータベースの単なるエントリーではありません。
          </p>
        </>
      ),
    },
  },
  {
    title: { en: "Data Portability", jp: "データポータビリティ" },
    content: {
      en: (
        <>
          <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
            Centralized platforms often benefit from user lock-in, as
            accumulated data makes migration more difficult. Pixelmine enables
            users to export their data at any time in standard formats. Content,
            connections, and history remain the user's property and are fully
            portable. The platform is designed to serve its users rather than
            restrict them.
          </p>
        </>
      ),
      jp: (
        <>
          <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
            中央集権型プラットフォームは、蓄積されたデータが移行を困難にするため、ユーザーのロックイ
            ンから利益を得ることが多いです。Pixelmineはユーザーがいつでも標準フォーマットでデータをエ
            クスポートできるようにします。コンテンツ、つながり、履歴はユーザーの所有物であり、完全に
            携帯可能です。プラットフォームはユーザーを制限するのではなく、ユーザーに奉仕するよう設計
            されています。
          </p>
        </>
      ),
    },
  },
];

// Privacy & Security
export const privacySecurityItems = [
  {
    title: { en: "End-to-End Encryption", jp: "エンドツーエンド暗号化" },
    content: {
      en: (
        <>
          <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
            Privacy should not rely on trust in the platform. Pixelmine
            implements end-to-end encryption for private communications,
            ensuring that messages are encrypted on the sender's device and can
            only be decrypted by the intended recipient. Neither intermediate
            nodes, server operators, nor third parties can access content in
            transit or at rest. Privacy is enforced through cryptographic
            methods rather than policy.
          </p>
        </>
      ),
      jp: (
        <>
          <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
            プライバシーはプラットフォームへの信頼に依存すべきではありません。Pixelmineはプライベート
            通信にエンドツーエンド暗号化を実装し、メッセージは送信者のデバイスで暗号化され、意図され
            た受信者のみが復号できることを保証します。中間ノード、サーバーオペレーター、第三者のいず
            れも、転送中または保存中のコンテンツにアクセスできません。プライバシーはポリシーではなく
            、暗号技術によって強制されます。
          </p>
        </>
      ),
    },
  },
  {
    title: { en: "Post-Quantum Security", jp: "耐量子セキュリティ" },
    content: {
      en: (
        <>
          <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
            Current encryption standards are vulnerable to future threats posed
            by quantum computers, which may be able to break widely used
            cryptographic algorithms. Pixelmine addresses this risk by
            implementing post-quantum cryptography, ensuring that data encrypted
            today remains secure against future advances in computation.
            Security is engineered for long-term resilience rather than solely
            present-day threats.
          </p>
        </>
      ),
      jp: (
        <>
          <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
            現在の暗号化標準は、広く使用されている暗号アルゴリズムを破る可能性のある量子コンピュータ
            による将来の脅威に対して脆弱です。Pixelmineは耐量子暗号を実装することでこのリスクに対処し
            、今日暗号化されたデータが将来の計算能力の進歩に対しても安全であり続けることを保証します
            。セキュリティは現在の脅威だけでなく、長期的な耐障害性のために設計されています。
          </p>
        </>
      ),
    },
  },
];

// Network Resilience
export const networkResilienceItems = [
  {
    title: { en: "Censorship Resistance", jp: "検閲耐性" },
    content: {
      en: (
        <>
          <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
            When content resides on a single server, its removal requires only a
            single decision by one authority. Decentralization fundamentally
            alters this dynamic. Data replicated across multiple independent
            nodes cannot be erased by any single actor. There is no central
            point of control or single jurisdiction responsible for enforcing
            removal. The network's architecture inherently renders unilateral
            censorship impractical.
          </p>
        </>
      ),
      jp: (
        <>
          <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
            コンテンツが単一のサーバーに存在する場合、その削除には1つの権威による1つの決定のみが必要
            です。分散化はこの力学を根本的に変えます。複数の独立したノードに複製されたデータは、単一
            のアクターによって消去することはできません。中央制御点も、削除を強制する単一の管轄権もあ
            りません。ネットワークのアーキテクチャは本質的に一方的な検閲を実行不可能にします。
          </p>
        </>
      ),
    },
  },
  {
    title: { en: "Network Self-Healing", jp: "ネットワーク自己修復" },
    content: {
      en: (
        <>
          <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
            Centralized systems are characterized by a single point of failure;
            if the server becomes unavailable, the entire service is disrupted.
            Pixelmine distributes data and functionality across multiple
            independent nodes. If one node fails, others continue to operate,
            allowing the network to adapt, reroute, and self-heal. Availability
            is an inherent property of the architecture rather than a guarantee
            from a service provider.
          </p>
        </>
      ),
      jp: (
        <>
          <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
            中央集権型システムは単一障害点を特徴とします。サーバーが利用不能になると、サービス全体が
            中断されます。Pixelmineはデータと機能を複数の独立したノードに分散します。1つのノードに障
            害が発生しても、他のノードは動作を継続し、ネットワークは適応、再ルーティング、自己修復を
            行います。可用性はサービスプロバイダーからの保証ではなく、アーキテクチャの固有の特性です
            。
          </p>
        </>
      ),
    },
  },
];

// Trust & Transparency
export const trustTransparencyItems = [
  {
    title: { en: "Node Reputation", jp: "ノードレピュテーション" },
    content: {
      en: (
        <>
          <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
            Node performance varies across the network. Some nodes maintain high
            uptime, reliably relay data, and accurately store content, while
            others do not. Pixelmine monitors node behavior over time and
            assigns reputation scores accordingly. Nodes that contribute
            positively gain trust and influence, whereas unreliable nodes are
            deprioritized. The network incentivizes positive participation
            through its reputation system.
          </p>
        </>
      ),
      jp: (
        <>
          <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
            ノードのパフォーマンスはネットワーク全体で異なります。一部のノードは高い稼働時間を維持し
            、データを確実に中継し、コンテンツを正確に保存しますが、そうでないノードもあります。Pixel
            mineは時間の経過とともにノードの動作を監視し、それに応じてレピュテーションスコアを割り当
            てます。積極的に貢献するノードは信頼と影響力を獲得し、信頼性の低いノードは優先度が下げら
            れます。ネットワークはレピュテーションシステムを通じて積極的な参加にインセンティブを与え
            ます。
          </p>
        </>
      ),
    },
  },
  {
    title: {
      en: "Tamper-Resistance via Majority Consensus",
      jp: "多数決コンセンサスによる改ざん耐性",
    },
    content: {
      en: (
        <>
          <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
            Data integrity within a decentralized system relies on consensus.
            When user data is distributed across multiple nodes, any attempt to
            alter it must address independent copies maintained elsewhere.
            Pixelmine resolves conflicts through majority consensus; if most
            nodes agree on a version of the data, that version is considered
            authoritative. Tampering would require compromising a majority of
            the network simultaneously, rendering unauthorized modification
            effectively infeasible.
          </p>
        </>
      ),
      jp: (
        <>
          <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
            分散システムにおけるデータの整合性はコンセンサスに依存します。ユーザーデータが複数のノー
            ドに分散されている場合、それを変更しようとする試みは、他の場所で維持されている独立したコ
            ピーに対処する必要があります。Pixelmineは多数決コンセンサスによって競合を解決します。ほと
            んどのノードがデータのバージョンに同意すれば、そのバージョンが権威あるものとみなされます
            。改ざんにはネットワークの過半数を同時に侵害する必要があり、不正な変更は事実上実行不可能
            になります。
          </p>
        </>
      ),
    },
  },
  {
    title: {
      en: "Verifiable History",
      jp: "検証可能な履歴",
    },
    content: {
      en: (
        <>
          <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
            In centralized systems, historical records can be altered without
            detection. Pixelmine maintains verifiable records of data changes
            across the network. Both users and nodes can independently confirm
            that content has not been altered without authorization. Trust is
            established through verification rather than assumption.
          </p>
        </>
      ),
      jp: (
        <>
          <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
            中央集権型システムでは、過去の記録は検出されずに変更される可能性があります。Pixelmineはネ
            ットワーク全体でデータ変更の検証可能な記録を維持します。ユーザーとノードの両方が、コンテ
            ンツが許可なく変更されていないことを独立して確認できます。信頼は仮定ではなく、検証によっ
            て確立されます。
          </p>
        </>
      ),
    },
  },
  {
    title: {
      en: "Open Protocol",
      jp: "オープンプロトコル",
    },
    content: {
      en: (
        <>
          <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
            Transparency necessitates more than stated intentions; it requires
            systems that are open to audit. Pixelmine's protocol is open and
            publicly documented. Any participant can inspect data flows,
            decision-making processes, and system operations. No hidden
            algorithms influence user experience. All operational rules are
            accessible to participants.
          </p>
        </>
      ),
      jp: (
        <>
          <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
            透明性には、表明された意図以上のものが必要です。監査に開かれたシステムが必要です。Pixelmi
            neのプロトコルはオープンで公開されています。参加者は誰でもデータフロー、意思決定プロセス
            、システム運用を検査できます。隠れたアルゴリズムがユーザー体験に影響を与えることはありま
            せん。すべての運用ルールは参加者がアクセス可能です。
          </p>
        </>
      ),
    },
  },
];

// Governance & Economy
export const governanceEconomyItems = [
  {
    title: { en: "Community Governance", jp: "コミュニティガバナンス" },
    content: {
      en: (
        <>
          <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
            In the absence of a central authority, decisions are made
            collectively. Pixelmine employs community governance, allowing
            participants to determine protocol changes, moderation standards,
            and network policies rather than imposing them on participants. The
            system evolves in alignment with user interests rather than those of
            a corporation or founding team.
          </p>
        </>
      ),
      jp: (
        <>
          <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
            中央権威がない場合、決定は集合的に行われます。Pixelmineはコミュニティガバナンスを採用し、
            参加者がプロトコルの変更、モデレーション基準、ネットワークポリシーを参加者に押し付けるの
            ではなく、決定できるようにします。システムは企業や創設チームの利益ではなく、ユーザーの利
            益に沿って進化します。
          </p>
        </>
      ),
    },
  },
  {
    title: {
      en: "Points and Economic Incentives",
      jp: "ポイントと経済的インセンティブ",
    },
    content: {
      en: (
        <>
          <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
            Decentralization depends on active participation, as nodes are
            responsible for storing data, relaying messages, and maintaining
            connectivity. Pixelmine incentivizes participation through an
            internal points-based economy. Users who contribute resources to the
            network earn points, while those who consume resources spend them.
            This structure fosters a self-sustaining ecosystem in which
            participation is rewarded, and network health is linked to
            collective contribution.
          </p>
        </>
      ),
      jp: (
        <>
          <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
            分散化は積極的な参加に依存します。ノードはデータの保存、メッセージの中継、接続性の維持を
            担当します。Pixelmineは内部のポイントベース経済を通じて参加にインセンティブを与えます。ネ
            ットワークにリソースを提供するユーザーはポイントを獲得し、リソースを消費するユーザーはポ
            イントを使用します。この構造は、参加が報われ、ネットワークの健全性が集団的貢献に連動する
            自己持続型エコシステムを育成します。
          </p>
        </>
      ),
    },
  },
  {
    title: {
      en: "Community-Powered Infrastructure",
      jp: "コミュニティ主導のインフラストラクチャ",
    },
    content: {
      en: (
        <>
          <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
            Traditional platforms depend on corporate data centers financed by
            external capital. Pixelmine operates on infrastructure contributed
            by its users. Each node operator provides storage and bandwidth to
            sustain the network. This model distributes both cost and ownership,
            resulting in a platform that is collectively maintained rather than
            corporately controlled.
          </p>
        </>
      ),
      jp: (
        <>
          <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
            従来のプラットフォームは外部資本によって資金調達された企業のデータセンターに依存していま
            す。Pixelmineはユーザーが提供するインフラストラクチャ上で運営されます。各ノードオペレータ
            ーはネットワークを維持するためにストレージと帯域幅を提供します。このモデルはコストと所有
            権の両方を分散させ、企業が管理するのではなく、集合的に維持されるプラットフォームを実現し
            ます。
          </p>
        </>
      ),
    },
  },
  {
    title: {
      en: "Permissionless Participation",
      jp: "パーミッションレス参加",
    },
    content: {
      en: (
        <>
          <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
            Participation in the Pixelmine network does not require application,
            approval, or gatekeeping. Any individual can operate a node,
            contribute resources, or develop applications using the protocol.
            Participation is open by default, and the network expands through
            voluntary contributions rather than centralized recruitment.{" "}
          </p>
        </>
      ),
      jp: (
        <>
          <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
            Pixelmineネットワークへの参加には、申請、承認、ゲートキーピングは必要ありません。誰でもノ
            ードを運営し、リソースを提供し、プロトコルを使用してアプリケーションを開発できます。参加
            はデフォルトでオープンであり、ネットワークは中央集権的な募集ではなく、自発的な貢献によっ
            て拡大します。
          </p>
        </>
      ),
    },
  },
];
