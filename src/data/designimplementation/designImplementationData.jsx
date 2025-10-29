import "katex/dist/katex.min.css";
import { BlockMath, InlineMath } from "react-katex";

export const designImplementationItems = [
  {
    title: "1. Abstract",
    titleJP: "1. 概要",
    content: (
      <>
        <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
          This paper presents an innovative architecture for a decentralized
          social networking system (SNS) that leverages consensus-driven data
          verification. The proposed system employs a unique mechanism utilizing
          odd-numbered node quorums, in conjunction with a hash-based majority
          voting process. This multifaceted design strategy ensures the
          integrity and consistency of data across a network of distributed
          nodes without dependence on a central authority, thereby enhancing its
          resilience against Byzantine failures and various forms of malicious
          activities.
        </p>
        <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
          We conduct a thorough examination of the theoretical foundations that
          support this architecture, detailing the algorithms and protocols that
          enable effective consensus among nodes. Additionally, we address
          critical implementation considerations, including scalability,
          performance optimization, and user experience. Furthermore, we
          emphasize the security features inherent in our approach, discussing
          how these features protect against data tampering and unauthorized
          access while ensuring the authenticity of user interactions within the
          network. Through these discussions, we aim to provide a comprehensive
          understanding of both the potential applications and practical
          implications of this decentralized SNS architecture.
        </p>
      </>
    ),
    contentJP: (
      <>
        <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
          本論文では、コンセンサス駆動型データ検証を活用した分散型ソーシャルネットワークシステム（SNS）の革新的なアーキテクチャを提案する。
          提案するシステムは、奇数ノードのクォーラムとハッシュベースの多数決プロセスを組み合わせた独自のメカニズムを採用している。
          この多層的な設計戦略により、中央集権的な権威に依存することなく、分散ノード間でのデータの整合性と一貫性を確保し、
          ビザンチン障害や様々な悪意ある行為に対する耐性を高めている。
        </p>
        <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
          本研究では、このアーキテクチャを支える理論的基盤を詳細に検討し、
          ノード間の効果的なコンセンサスを実現するアルゴリズムとプロトコルを説明する。
          さらに、スケーラビリティ、パフォーマンス最適化、ユーザーエクスペリエンスといった
          実装上の重要な課題にも言及する。また、本手法に内在するセキュリティ機能を強調し、
          データ改ざんや不正アクセスを防止しつつ、ネットワーク内でのユーザー間のやり取りの真正性を確保する方法についても議論する。
          これらの議論を通じて、この分散型SNSアーキテクチャの応用可能性と実践的意義の両面を包括的に理解することを目的としている。
        </p>
      </>
    ),
  },

  {
    title: "2. Introduction",
    titleJP: "2. はじめに",
    content: (
      <>
        <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
          Traditional social networks rely on centralized infrastructures, which
          inherently introduce vulnerabilities such as single points of failure
          and centralized control over user data and interactions. This
          centralization can lead to issues like data breaches and user privacy
          concerns. In contrast, decentralized social network alternatives
          strive to eliminate these vulnerabilities but encounter significant
          challenges related to maintaining data consistency and verifying the
          authenticity of information across a network of independent nodes.
        </p>
        <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
          To address these challenges, this paper proposes a novel system that
          enhances data propagation and verification through the implementation
          of distributed consensus mechanisms. The proposed framework utilizes
          advanced cryptographic hashing techniques, which ensure that data
          integrity is preserved during transmission and storage. Furthermore,
          it employs a majority voting system within groups of nodes containing
          an odd number of members. This approach not only facilitates efficient
          decision-making but also bolsters the resilience of the network
          against malicious activities or failures, as it requires a majority
          agreement for consensus, thereby reducing the risk of erroneous data
          being accepted as valid. Through these mechanisms, the system aims to
          provide a reliable and secure decentralized framework for social
          networking.
        </p>
      </>
    ),
    contentJP: (
      <>
        <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
          従来のソーシャルネットワークは中央集権型のインフラに依存しており、
          これにより単一障害点（Single Point of Failure）や、
          ユーザーデータおよびやり取りに対する中央集権的な管理といった
          脆弱性が本質的に存在する。この中央集権構造は、データ漏えいや
          ユーザーのプライバシー侵害といった問題を引き起こす可能性がある。
          一方で、分散型ソーシャルネットワークはこれらの脆弱性を排除することを
          目指しているが、独立したノード群全体でデータの一貫性を維持し、
          情報の真正性を検証するという重大な課題に直面している。
        </p>
        <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
          これらの課題を解決するために、本論文では分散コンセンサスメカニズムを
          導入し、データの伝播と検証を強化する新しいシステムを提案する。
          提案するフレームワークでは、高度な暗号ハッシュ技術を利用して、
          データの送信および保存の過程で整合性を確保する。
          さらに、奇数のメンバーで構成されるノードグループ内で多数決方式を採用し、
          効率的な意思決定を促進すると同時に、ネットワークの耐障害性および
          悪意ある行為に対する耐性を向上させる。この方式では、
          コンセンサスに過半数の同意を必要とするため、誤ったデータが
          有効と判断されるリスクを低減することができる。
          これらのメカニズムを通じて、本システムは信頼性と安全性を
          兼ね備えた分散型ソーシャルネットワークの枠組みを提供することを目的としている。
        </p>
      </>
    ),
  },

  {
    title: "3. Problem Statement",
    titleJP: "3. 問題提起",
    content: (
      <>
        <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
          Decentralized social networks encounter three critical challenges that
          require careful attention and resolution:
        </p>
        <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
          <span className="mr-2 font-semibold ">3.1. Data Coherence:</span>
          One of the primary challenges is achieving data coherence among all
          participating nodes within the network. This involves developing
          mechanisms that allow for a unified agreement on what constitutes the
          official version of the content shared across the platform. Techniques
          such as consensus algorithms can be employed to ensure that
          information is synchronized and that all nodes have access to
          consistent and accurate data.
        </p>
        <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
          <span className="mr-2 font-semibold ">
            3.2. Byzantine Fault Tolerance:
          </span>
          Another major hurdle is the need for Byzantine Fault Tolerance (BFT),
          which addresses the potential threat posed by malicious nodes that may
          attempt to disrupt the network by spreading false information or
          acting in a deceitful manner. Implementing BFT protocols is essential
          for ensuring that the system can continue to function correctly, even
          in the presence of a certain number of compromised nodes. This
          includes robust mechanisms for verifying the legitimacy of data and
          preventing fraud, which is vital for maintaining trust among users.
        </p>
        <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
          <span className="mr-2 font-semibold ">
            3.3. Efficient Verification:
          </span>
          Finally, there is the challenge of efficient verification processes
          that mitigate the computational burden while upholding stringent
          security standards. Investing in advanced cryptographic techniques and
          optimized algorithms can help reduce the processing power required to
          validate transactions and content changes, allowing the network to
          operate more smoothly and responsively. This balance between
          efficiency and security is crucial to ensure a seamless user
          experience without compromising the integrity of the network.
        </p>
        <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
          Addressing these challenges is vital for the successful implementation
          and sustainability of decentralized social networks, ultimately
          fostering a secure and reliable environment for users.
        </p>
      </>
    ),
    contentJP: (
      <>
        <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
          分散型ソーシャルネットワークは、慎重な検討と解決を要する
          3つの重要な課題に直面している。
        </p>

        <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
          <span className="mr-2 font-semibold ">
            3.1. データの一貫性（Data Coherence）:
          </span>
          主な課題の一つは、ネットワーク内のすべての参加ノード間で
          データの一貫性を実現することである。これは、
          プラットフォーム上で共有されるコンテンツの正式版が何であるかについて、
          統一的な合意を形成できるメカニズムの開発を必要とする。
          この目的のために、コンセンサスアルゴリズムのような技術を
          活用することで、情報の同期を維持し、すべてのノードが
          一貫性のある正確なデータにアクセスできるようにすることができる。
        </p>

        <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
          <span className="mr-2 font-semibold ">
            3.2. ビザンチン障害耐性（Byzantine Fault Tolerance）:
          </span>
          もう一つの大きな課題は、悪意のあるノードによる虚偽情報の拡散や
          不正行動によってネットワークが混乱させられる可能性に対処する
          ビザンチン障害耐性（BFT）の必要性である。
          BFTプロトコルを導入することは、一定数のノードが侵害されていても
          システムが正しく機能し続けることを保証する上で不可欠である。
          これには、データの正当性を検証し、不正を防止するための
          強固な仕組みが含まれ、ユーザー間の信頼を維持するために極めて重要である。
        </p>

        <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
          <span className="mr-2 font-semibold ">
            3.3. 効率的な検証（Efficient Verification）:
          </span>
          最後の課題は、厳格なセキュリティ基準を維持しながら、
          計算負荷を軽減する効率的な検証プロセスを確立することである。
          高度な暗号技術や最適化されたアルゴリズムを活用することで、
          トランザクションやコンテンツ変更の検証に必要な処理能力を削減し、
          ネットワークのスムーズで応答性の高い運用を実現できる。
          効率性と安全性のバランスを取ることは、
          ネットワークの完全性を損なうことなく
          シームレスなユーザー体験を保証する上で不可欠である。
        </p>

        <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
          これらの課題に取り組むことは、分散型ソーシャルネットワークを
          成功裏に実装し、持続可能に運用するために極めて重要であり、
          ユーザーにとって安全で信頼性の高い環境を促進する基盤となる。
        </p>
      </>
    ),
  },
  {
    title: "4. Proposed Solution",
    titleJP: "4. 提案された解決策",
    content: (
      <>
        <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
          Our system architecture relies on the use of odd-numbered node
          quorums, which generally consist of 3, 5, or 7 participating nodes.
          This design is crucial for verifying the integrity of data through the
          process of cryptographic hash comparison, a method that ensures high
          security and reliability.
        </p>
        <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
          When nodes disperse content across the network, they engage in a
          querying process where each node reaches out to multiple peers to
          gather hash values. The node then selects the hash that appears with
          the highest frequency among the responses. This approach effectively
          mitigates the risk posed by potentially malicious actors, as a
          minority attempting to compromise the network cannot outvote the
          majority's validation, thus safeguarding the overall integrity of the
          data. This mechanism fortifies our system against corruption and
          enhances resilience against attacks.
        </p>
      </>
    ),
    contentJP: (
      <>
        <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
          本システムのアーキテクチャは、3、5、または7ノードといった
          奇数個のノードで構成されるクォーラムの使用に基づいている。
          この設計は、暗号学的ハッシュ比較のプロセスを通じて
          データの完全性を検証する上で極めて重要であり、
          高いセキュリティと信頼性を確保する手段となる。
        </p>

        <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
          ノードがネットワーク全体にコンテンツを分散する際、
          各ノードは複数のピアに問い合わせを行い、
          ハッシュ値を収集するプロセスに参加する。
          その後、最も多く出現したハッシュ値を選択する。
          このアプローチにより、悪意のあるノードによる攻撃のリスクが
          効果的に軽減される。少数のノードがネットワークを改ざんしようとしても、
          大多数の検証結果を上回ることはできず、
          データ全体の完全性が保護される。
          このメカニズムにより、システムは改ざんに強く、
          攻撃に対する耐性が向上する。
        </p>
      </>
    ),
  },

  {
    title: "5. System Architecture",
    titleJP: "5. システムアーキテクチャ",
    content: (
      <>
        <p className="mb-2 text-sm font-semibold sm:text-base dark:text-stone-50">
          5.1. Network Topology
        </p>
        <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
          The system functions as a decentralized peer-to-peer network, where
          each individual node plays a crucial role in maintaining various
          components essential for its operation.
        </p>
        <div className="my-4 ml-5">
          <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
            <span className="mr-2 font-semibold ">
              5.1.1. Local Data Store:
            </span>
            Each node contains a comprehensive cache that stores both
            user-generated content and posts. This allows for rapid retrieval
            and efficient management of data, enhancing the user experience.
          </p>
          <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
            <span className="mr-2 font-semibold ">5.1.2. Peer Registry:</span>
            This component keeps a detailed list of all known participants
            within the network. Each participant is associated with a reputation
            score, which is determined by their activity and contributions to
            the network. This score helps to foster trust and reliability among
            users.
          </p>

          <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
            <span className="mr-2 font-semibold ">5.1.3. Hash Index:</span>
            To ensure the integrity and security of the data stored within the
            network, each piece of content is assigned a unique cryptographic
            hash. This digest not only identifies the content but also protects
            it against unauthorized modifications, maintaining the original
            state of the information.
          </p>

          <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
            <span className="mr-2 font-semibold ">
              5.1.4. Verification Queue:
            </span>
            Content that is newly submitted to the network enters a verification
            queue. This queue contains items that are pending consensus from the
            network's participants before they can be officially recorded and
            distributed. This consensus mechanism is vital for maintaining the
            accuracy and legitimacy of the shared content.
          </p>
        </div>
        <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
          Overall, these components work in harmony to create a resilient and
          trustworthy network, enabling efficient data sharing and collaboration
          among users.
        </p>
        <p className="mt-5 mb-2 text-sm font-semibold sm:text-base dark:text-stone-50">
          5.2. Node Selection Algorithm
        </p>
        <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
          In any data verification operation, the system strategically selects
          an odd number of nodes, denoted as n, where n is always greater than
          or equal to 3 and must be an odd number. This selection process is
          based on several criteria to ensure robust and reliable verification.
          The criteria may include the nodes' current operational status, their
          geographical distribution, and the historical performance metrics of
          each node. By adhering to these parameters, the system aims to
          establish a reliable and effective network for data validation,
          minimizing the risk of discrepancies and enhancing the overall
          integrity of the data being processed.
        </p>

        <div className="my-4 ml-5 text-sm sm:text-base dark:text-stone-50">
          <p className="mb-2 font-semibold">5.2.1. Node Selection Function</p>
          <p className="mb-2 ">Scoring Function:</p>
          <p className="mb-2 ">
            Let <InlineMath math={`N = \\{n_1, n_2, \\ldots, n_m\\}`} /> be the
            set of active peer nodes.
          </p>
          <p className="mb-2 ">
            <InlineMath
              math={`S(n_i) = 0.4 \\cdot R(n_i) + 0.3 \\cdot L(n_i) + 0.2 \\cdot D(n_i) + 0.1 \\cdot P(n_i)`}
            />
          </p>
          <p className="mb-2">where:</p>
          <ul className="mb-2 ml-10 list-disc">
            <li>
              <InlineMath math={`R(n_i) \\in [0,1]`} /> : normalized
              reputation/uptime score
            </li>
            <li>
              <InlineMath math={`L(ni )∈[0,1]`} /> : normalized latency score
              (inverted, lower is better)
            </li>
            <li>
              <InlineMath math={`D(ni )∈[0,1]`} /> : geographic diversity score
            </li>
            <li>
              <InlineMath math={`P(ni )∈[0,1]`} /> : normalized
              stake/proof-of-work contribution
            </li>
          </ul>

          <p className="mt-4 mb-2 ">Selection Function:</p>
          <p className="mb-2 ">
            <InlineMath
              math={`\\text{SelectNodes}(k) = \\{n_{i_1}, n_{i_2}, \\ldots, n_{i_k}\\}`}
            />
          </p>
          <p className="mb-2 ">
            <InlineMath
              math={`\\text{where } S(n_{i_j}) \\geq S(n_{i_{j+1}}) \\text{ for all } j \\in \\{1, \\ldots, k-1\\} \\text{ and } k \\text{ is odd.}`}
            />
          </p>
        </div>

        <div className="my-4 ml-5 text-sm sm:text-base dark:text-stone-50">
          <p className="mb-2 font-semibold">5.2.2.Content Hash Function</p>
          <p className="mb-2 ">For content 𝑐 with components:</p>
          <ul className="mb-2 ml-10 list-disc">
            <li>
              <InlineMath math={`Id_c`} /> : unique identifier
            </li>
            <li>
              <InlineMath math={`pk_c`} /> : author's public key
            </li>
            <li>
              <InlineMath math={`t_c`} /> : timestamp
            </li>
            <li>
              <InlineMath math={`d_c`} /> : data payload
            </li>
            <li>
              <InlineMath math={`h_p`} /> : parent hash
            </li>
          </ul>

          <p className="mb-2 ">The content hash is:</p>
          <p className="mb-2 ">
            <InlineMath
              math={`H(c) = \\text{SHA-256}(\\text{idc} \\parallel \\text{pk}_c \\parallel t_c \\parallel d_c \\parallel h_p)`}
            />
          </p>
          <p className="mb-2 ">
            where <InlineMath math={`\\parallel`} /> denotes concatenation.
          </p>
        </div>

        <div className="my-4 ml-5 text-sm sm:text-base dark:text-stone-50">
          <p className="mb-2 font-semibold">5.2.3. Verification Protocol </p>
          <p className="mb-2 ">
            <span className="font-semibold">Input:</span> Content 𝑐 verification
            node set <InlineMath math={`V = \\{v_1, v_2, \\ldots, v_k\\}`} />{" "}
            where 𝑘 is odd.
          </p>
          <ul className="mb-2 ml-10 list-none">
            <li>
              <p className="mb-2">Step 1 - Local Hash:</p>
              <p className="mb-2 ml-5">
                <InlineMath math={`h_{\\text{local}} = H(c)`} />
              </p>
            </li>
            <li>
              <p className="mb-2">Step 2 - Remote Hash Collection:</p>
              <p className="mb-2 ml-5">
                <InlineMath
                  math={`H = \\{h_i : h_i = v_i.H(c), v_i \\in V, h_i \\neq \\bot\\}`}
                />
              </p>
              <p className="mb-2 ml-5">
                where <InlineMath math={`\\bot`} /> represents a null/failed
                response.
              </p>
            </li>
            <li>
              <p className="mb-2">Step 3 - Vote Counting:</p>
              <p className="mb-2 ml-5">
                For each unique hash <InlineMath math={`h \\in H`} />
              </p>
              <p className="mb-2 ml-10">
                <InlineMath
                  math={`\\text{votes}(h) = |\\{h_i \\in H : h_i = h\\}|`}
                />
              </p>
            </li>

            <li>
              <p className="mb-2">Step 4 - Majority Hash:</p>
              <p className="mb-2 ml-5">
                <InlineMath
                  math={`h_{\\text{majority}} = \\text{arg } \\text{max} \\text{ votes}(h) \\newline {h \\in H}`}
                />
              </p>
            </li>
            <li>
              <p className="mb-2">Step 5 - Verification Decision:</p>
              <p className="mb-2 ml-5">
                The verification result{" "}
                <InlineMath math={`V_{\\text{result}}`} /> is:
              </p>
              <p className="mb-2 ml-10">
                <InlineMath
                  math={`V_{\\text{result}} = \\begin{cases}  \\text{PASS} & \\text{if } \\text{votes}(h_{\\text{majority}}) \\geq \\lceil \\frac{k}{2} \\rceil + 1 \\text{ and }  h_{\\text{majority}} = h_{\\text{local}} \\  \\text{FAIL} & \\text{otherwise}  \\end{cases}`}
                />
              </p>
              <p className="mb-2 ml-5">
                Alternatively, using the threshold function:
              </p>
              <p className="mb-2 ml-10">
                <InlineMath
                  math={`\\theta(k) = \\lceil \\frac{k}{2} \\rceil + 1`}
                />
              </p>
            </li>
          </ul>
        </div>

        <div className="my-4 ml-5 text-sm sm:text-base dark:text-stone-50">
          <p className="mb-2 font-semibold">
            5.2.4. Consensus Threshold Properties
          </p>
          <p className="mb-2 ">For 𝑘 verification nodes:</p>
          <ul className="mb-2 ml-10 list-disc">
            <li>
              Minimum required votes:{" "}
              <InlineMath
                math={`\\theta(k) = \\lceil \\frac{k}{2} \\rceil + 1`}
              />
            </li>
            <li>
              For <InlineMath math={`k = 5: \\theta(5) = 3`} /> (simple
              majority)
            </li>
            <li>
              For <InlineMath math={`k = 7: \\theta(7) = 4`} />
            </li>
            <li>
              Byzantine fault tolerance: can tolerate up to{" "}
              <InlineMath math={`\\lfloor \\frac{k-1}{2} \\rfloor`} /> malicious
              nodes
            </li>
          </ul>
        </div>

        <div className="my-4 ml-5 text-sm sm:text-base dark:text-stone-50">
          <p className="mb-2 font-semibold">5.2.5. Success Probability</p>
          <p className="mb-2 ">
            If nodes have probability pp p of honest behavior, the probability
            of successful verification is:
          </p>
          <p className="mb-2 ">
            <InlineMath
              math={`P(\\text{success}) = \\sum_{i=\\theta(k)}^{k} \\binom{k}{i} p^i (1-p)^{k-i}`}
            />
          </p>
          <p className="mb-2 ">
            This follows a binomial distribution representing the probability
            that at least <InlineMath math={`θ(k)\\theta(k) θ(k)`} /> nodes
            return the correct hash.
          </p>
        </div>
      </>
    ),
    contentJP: (
      <>
        <p className="mb-2 text-sm font-semibold sm:text-base dark:text-stone-50">
          5.1. ネットワークトポロジー
        </p>
        <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
          本システムは分散型ピアツーピアネットワークとして機能し、
          各ノードはシステム運用に不可欠なさまざまなコンポーネントの
          保持に重要な役割を果たします。
        </p>
        <div className="my-4 ml-5">
          <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
            <span className="mr-2 font-semibold ">
              5.1.1. ローカルデータストア:
            </span>
            各ノードはユーザー生成コンテンツや投稿を保持する包括的なキャッシュを持っています。
            これにより、データの迅速な取得と効率的な管理が可能となり、ユーザー体験が向上します。
          </p>
          <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
            <span className="mr-2 font-semibold ">5.1.2. ピアレジストリ:</span>
            このコンポーネントはネットワーク内のすべての既知参加者の詳細なリストを保持します。
            各参加者には、活動やネットワークへの貢献度に基づいて評価スコアが割り当てられます。
            このスコアはユーザー間の信頼性を高める助けとなります。
          </p>

          <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
            <span className="mr-2 font-semibold ">
              5.1.3. ハッシュインデックス:
            </span>
            ネットワーク内に保存されるデータの整合性と安全性を保証するため、
            各コンテンツには固有の暗号ハッシュが割り当てられます。
            このダイジェストはコンテンツを識別するだけでなく、無断変更から保護し、
            情報の元の状態を維持します。
          </p>

          <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
            <span className="mr-2 font-semibold ">5.1.4. 検証キュー:</span>
            新しくネットワークに提出されたコンテンツは検証キューに入ります。
            このキューには、ネットワーク参加者の合意が得られるまで保留されるアイテムが含まれます。
            この合意メカニズムは、共有コンテンツの正確性と正当性を維持するために不可欠です。
          </p>
        </div>
        <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
          これらのコンポーネントは協調して動作し、強靭で信頼性の高いネットワークを作り出し、
          ユーザー間で効率的なデータ共有とコラボレーションを可能にします。
        </p>

        <p className="mt-5 mb-2 text-sm font-semibold sm:text-base dark:text-stone-50">
          5.2. ノード選択アルゴリズム
        </p>
        <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
          データ検証操作において、システムは戦略的に奇数のノード n
          を選択します。 n は常に 3
          以上の奇数である必要があります。この選択プロセスは複数の
          基準に基づき、堅牢で信頼性の高い検証を保証します。
          基準にはノードの稼働状況、地理的分布、各ノードの過去の性能指標などが含まれます。
          これらのパラメータに従うことで、システムは信頼性の高いデータ検証ネットワークを構築し、
          不整合のリスクを最小化し、処理されるデータの整合性を高めます。
        </p>

        <div className="my-4 ml-5 text-sm sm:text-base dark:text-stone-50">
          <p className="mb-2 font-semibold">5.2.1. ノード選択関数</p>
          <p className="mb-2 ">スコアリング関数:</p>
          <p className="mb-2 ">
            <InlineMath math={`N = \\{n_1, n_2, \\ldots, n_m\\}`} /> を
            アクティブなピアノードの集合とします。
          </p>
          <p className="mb-2 ">
            <InlineMath
              math={`S(n_i) = 0.4 \\cdot R(n_i) + 0.3 \\cdot L(n_i) + 0.2 \\cdot D(n_i) + 0.1 \\cdot P(n_i)`}
            />
          </p>
          <p className="mb-2">ここで:</p>
          <ul className="mb-2 ml-10 list-disc">
            <li>
              <InlineMath math={`R(n_i) \\in [0,1]`} /> :
              正規化された評判/稼働時間スコア
            </li>
            <li>
              <InlineMath math={`L(ni )∈[0,1]`} /> :
              正規化レイテンシスコア（低い方が良い）
            </li>
            <li>
              <InlineMath math={`D(ni )∈[0,1]`} /> : 地理的多様性スコア
            </li>
            <li>
              <InlineMath math={`P(ni )∈[0,1]`} /> :
              正規化されたステーク/Proof-of-Work貢献度
            </li>
          </ul>

          <p className="mt-4 mb-2 ">選択関数:</p>
          <p className="mb-2 ">
            <InlineMath
              math={`\\text{SelectNodes}(k) = \\{n_{i_1}, n_{i_2}, \\ldots, n_{i_k}\\}`}
            />
          </p>
          <p className="mb-2 ">
            <InlineMath
              math={`\\text{where } S(n_{i_j}) \\geq S(n_{i_{j+1}}) \\text{ for all } j \\in \\{1, \\ldots, k-1\\} \\text{ and } k \\text{ is odd.}`}
            />
          </p>
        </div>

        <div className="my-4 ml-5 text-sm sm:text-base dark:text-stone-50">
          <p className="mb-2 font-semibold">5.2.2. コンテンツハッシュ関数</p>
          <p className="mb-2 ">コンテンツ 𝑐 の構成要素:</p>
          <ul className="mb-2 ml-10 list-disc">
            <li>
              <InlineMath math={`Id_c`} /> : ユニーク識別子
            </li>
            <li>
              <InlineMath math={`pk_c`} /> : 著者の公開鍵
            </li>
            <li>
              <InlineMath math={`t_c`} /> : タイムスタンプ
            </li>
            <li>
              <InlineMath math={`d_c`} /> : データペイロード
            </li>
            <li>
              <InlineMath math={`h_p`} /> : 親ハッシュ
            </li>
          </ul>
          <p className="mb-2 ">コンテンツハッシュは以下の通りです:</p>
          <p className="mb-2 ">
            <InlineMath
              math={`H(c) = \\text{SHA-256}(\\text{idc} \\parallel \\text{pk}_c \\parallel t_c \\parallel d_c \\parallel h_p)`}
            />
          </p>
          <p className="mb-2 ">
            <InlineMath math={`\\parallel`} /> は連結を示します。
          </p>
        </div>

        <div className="my-4 ml-5 text-sm sm:text-base dark:text-stone-50">
          <p className="mb-2 font-semibold">5.2.3. 検証プロトコル </p>
          <p className="mb-2 ">
            <span className="font-semibold">入力:</span> コンテンツ 𝑐
            の検証ノード集合
            <InlineMath math={`V = \\{v_1, v_2, \\ldots, v_k\\}`} />
            （k は奇数）
          </p>
          <ul className="mb-2 ml-10 list-none">
            <li>
              <p className="mb-2">ステップ1 - ローカルハッシュ:</p>
              <p className="mb-2 ml-5">
                <InlineMath math={`h_{\\text{local}} = H(c)`} />
              </p>
            </li>
            <li>
              <p className="mb-2">ステップ2 - リモートハッシュ収集:</p>
              <p className="mb-2 ml-5">
                <InlineMath
                  math={`H = \\{h_i : h_i = v_i.H(c), v_i \\in V, h_i \\neq \\bot\\}`}
                />
              </p>
              <p className="mb-2 ml-5">
                <InlineMath math={`\\bot`} /> は null/失敗応答を表します。
              </p>
            </li>
            <li>
              <p className="mb-2">ステップ3 - 投票集計:</p>
              <p className="mb-2 ml-5">
                各ユニークハッシュ <InlineMath math={`h \\in H`} />
              </p>
              <p className="mb-2 ml-10">
                <InlineMath
                  math={`\\text{votes}(h) = |\\{h_i \\in H : h_i = h\\}|`}
                />
              </p>
            </li>
            <li>
              <p className="mb-2">ステップ4 - 過半数ハッシュ:</p>
              <p className="mb-2 ml-5">
                <InlineMath
                  math={`h_{\\text{majority}} = \\text{arg } \\text{max} \\text{ votes}(h) \\newline {h \\in H}`}
                />
              </p>
            </li>
            <li>
              <p className="mb-2">ステップ5 - 検証判定:</p>
              <p className="mb-2 ml-5">
                検証結果 <InlineMath math={`V_{\\text{result}}`} /> は次の通り:
              </p>
              <p className="mb-2 ml-10">
                <InlineMath
                  math={`V_{\\text{result}} = \\begin{cases}  \\text{PASS} & \\text{if } \\text{votes}(h_{\\text{majority}}) \\geq \\lceil \\frac{k}{2} \\rceil + 1 \\text{ and }  h_{\\text{majority}} = h_{\\text{local}} \\  \\text{FAIL} & \\text{otherwise}  \\end{cases}`}
                />
              </p>
              <p className="mb-2 ml-5">もしくは、閾値関数を用いて表すと:</p>
              <p className="mb-2 ml-10">
                <InlineMath
                  math={`\\theta(k) = \\lceil \\frac{k}{2} \\rceil + 1`}
                />
              </p>
            </li>
          </ul>
        </div>

        <div className="my-4 ml-5 text-sm sm:text-base dark:text-stone-50">
          <p className="mb-2 font-semibold">5.2.4. コンセンサス閾値の特性</p>
          <p className="mb-2 ">k 個の検証ノードに対して:</p>
          <ul className="mb-2 ml-10 list-disc">
            <li>
              最小投票数:{" "}
              <InlineMath
                math={`\\theta(k) = \\lceil \\frac{k}{2} \\rceil + 1`}
              />
            </li>
            <li>
              <InlineMath math={`k = 5: \\theta(5) = 3`} /> （単純過半数）
            </li>
            <li>
              <InlineMath math={`k = 7: \\theta(7) = 4`} />
            </li>
            <li>
              ビザンチン障害耐性: 最大{" "}
              <InlineMath math={`\\lfloor \\frac{k-1}{2} \\rfloor`} />{" "}
              の悪意あるノードを許容
            </li>
          </ul>
        </div>

        <div className="my-4 ml-5 text-sm sm:text-base dark:text-stone-50">
          <p className="mb-2 font-semibold">5.2.5. 成功確率</p>
          <p className="mb-2 ">
            ノードが誠実に動作する確率 p
            を持つ場合、検証成功の確率は以下の通りです:
          </p>
          <p className="mb-2 ">
            <InlineMath
              math={`P(\\text{success}) = \\sum_{i=\\theta(k)}^{k} \\binom{k}{i} p^i (1-p)^{k-i}`}
            />
          </p>
          <p className="mb-2 ">
            これは二項分布に従い、少なくとも <InlineMath math={`\\theta(k)`} />{" "}
            個のノードが正しいハッシュを返す確率を表します。
          </p>
        </div>
      </>
    ),
  },
  {
    title: "6. Byzantine Fault Tolerance",
    titleJP: "6. ビザンチン障害耐性",
    content: (
      <>
        <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
          The system tolerates up to{" "}
          <InlineMath math={`\\lfloor \\frac{n} {2} \\rfloor`} /> Byzantine
          failures, where n is the size of the verification quorum. With five
          nodes, up to 2 can be malicious or faulty. The odd-numbered
          requirement prevents ties when equal numbers of nodes produce the same
          hash.
        </p>
        <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
          Proof of tolerance:
        </p>

        <ul className="mb-2 ml-10 list-disc">
          <li>For n nodes with f malicious nodes</li>
          <li>
            Honest nodes: <InlineMath math={`h = n - f`} />
          </li>
          <li>
            For consensus: <InlineMath math={`h > f`} /> (honest majority
            required)
          </li>
          <li>
            With n odd and <InlineMath math={`n ≥ 2f + 1`} />, we guarantee{" "}
            <InlineMath math={`h ≥ f + 1`} />
          </li>
          <li>Therefore, honest nodes always form a majority</li>
        </ul>
      </>
    ),
    contentJP: (
      <>
        <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
          システムは <InlineMath math={`\\lfloor \\frac{n} {2} \\rfloor`} />
          までのビザンチン障害を許容します。ここで n
          は検証クオーラムのサイズです。 5 ノードの場合、最大 2
          ノードが悪意または障害を持つ可能性があります。
          奇数ノードの要件により、同じハッシュを生成するノードが同数の場合でも同点を防ぎます。
        </p>
        <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
          許容性の証明:
        </p>

        <ul className="mb-2 ml-10 list-disc">
          <li>n ノードに f 個の悪意あるノードが存在する場合</li>
          <li>
            誠実なノード: <InlineMath math={`h = n - f`} />
          </li>
          <li>
            コンセンサスには: <InlineMath math={`h > f`} />{" "}
            （誠実な過半数が必要）
          </li>
          <li>
            n が奇数かつ <InlineMath math={`n ≥ 2f + 1`} /> の場合、
            <InlineMath math={`h ≥ f + 1`} /> が保証されます
          </li>
          <li>したがって、誠実なノードは常に過半数を形成します</li>
        </ul>
      </>
    ),
  },
  {
    title: "7. Security Analysis",
    titleJP: "7. セキュリティ分析",
    content: (
      <>
        <p className="mb-2 text-sm font-semibold sm:text-base dark:text-stone-50">
          7.1. Attack Vectors and Mitigations
        </p>
        <ul className="mb-2 list-disc">
          <p className="text-sm sm:text-base dark:text-stone-50">
            Sybil Attack: Attacker creates multiple fake nodes to control
            verification quorums
          </p>
          <li className="mb-2 ml-10">
            <span className="italic">Mitigation</span>: Node reputation system,
            proof-of-work or proof-of-stake requirements, geographic diversity
            scoring
          </li>
          <p className="text-sm sm:text-base dark:text-stone-50">
            Eclipse Attack: Attacker isolates the target node by controlling all
            its peer connections
          </p>
          <li className="mb-2 ml-10">
            <span className="italic">Mitigation</span>: Maintain a diverse peer
            set, periodic peer discovery, and reputation-based connection
            scoring
          </li>
          <p className="text-sm sm:text-base dark:text-stone-50">
            Hash Collision Attack: Attacker attempts to find content with a
            matching hash
          </p>
          <li className="mb-2 ml-10">
            <span className="italic">Mitigation</span>: Use of SHA-256 makes
            collision attacks computationally infeasible (2^128 operations)
          </li>
          <p className="text-sm sm:text-base dark:text-stone-50">
            Denial of Service: Malicious nodes refuse to respond to verification
            requests
          </p>
          <li className="mb-2 ml-10">
            <span className="italic">Mitigation</span>: Timeout mechanisms,
            reputation penalties, dynamic quorum size adjustment
          </li>
        </ul>

        <p className="mb-2 text-sm font-semibold sm:text-base dark:text-stone-50">
          7.2. Cryptographic Properties
        </p>

        <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
          The system relies on:
        </p>

        <ul className="mb-2 ml-10 list-disc">
          <li>
            Collision Resistance: SHA-256 provides 128-bit collision resistance
          </li>
          <li>
            Preimage Resistance: Given a hash, finding the original content is
            computationally infeasible
          </li>
          <li>
            Digital Signatures: ECDSA or Ed25519 for author authentication
          </li>
        </ul>
      </>
    ),
    contentJP: (
      <>
        <p className="mb-2 text-sm font-semibold sm:text-base dark:text-stone-50">
          7.1. 攻撃ベクトルと緩和策
        </p>
        <ul className="mb-2 list-disc">
          <p className="text-sm sm:text-base dark:text-stone-50">
            Sybil 攻撃: 攻撃者が複数の偽ノードを作成して検証クオーラムを支配
          </p>
          <li className="mb-2 ml-10">
            <span className="italic">緩和策</span>:
            ノード評判システム、Proof-of-Work または Proof-of-Stake
            の要件、地理的多様性スコアリング
          </li>
          <p className="text-sm sm:text-base dark:text-stone-50">
            Eclipse 攻撃: 攻撃者がターゲットノードの全ピア接続を支配して隔離
          </p>
          <li className="mb-2 ml-10">
            <span className="italic">緩和策</span>:
            多様なピアセットの維持、定期的なピア探索、評判ベースの接続スコアリング
          </li>
          <p className="text-sm sm:text-base dark:text-stone-50">
            ハッシュ衝突攻撃: 攻撃者が一致するハッシュを持つコンテンツを探索
          </p>
          <li className="mb-2 ml-10">
            <span className="italic">緩和策</span>: SHA-256
            を使用することで衝突攻撃は計算上実行不可能（2^128 操作）
          </li>
          <p className="text-sm sm:text-base dark:text-stone-50">
            サービス拒否攻撃: 悪意あるノードが検証要求に応答拒否
          </p>
          <li className="mb-2 ml-10">
            <span className="italic">緩和策</span>:
            タイムアウト機構、評判ペナルティ、動的クオーラムサイズ調整
          </li>
        </ul>

        <p className="mb-2 text-sm font-semibold sm:text-base dark:text-stone-50">
          7.2. 暗号学的特性
        </p>

        <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
          システムは以下に依存しています:
        </p>

        <ul className="mb-2 ml-10 list-disc">
          <li>衝突耐性: SHA-256 は 128 ビットの衝突耐性を提供</li>
          <li>
            事前画像耐性: ハッシュから元のコンテンツを求めることは計算上困難
          </li>
          <li>デジタル署名: 著者認証のための ECDSA または Ed25519</li>
        </ul>
      </>
    ),
  },
  {
    title: "8. Performance Considerations",
    titleJP: "8. パフォーマンスに関する考慮事項",
    content: (
      <>
        <p className="mb-2 text-sm font-semibold sm:text-base dark:text-stone-50">
          8.1. Scalability
        </p>
        <ul className="mb-2 list-disc">
          <p className="text-sm sm:text-base dark:text-stone-50">
            Verification Latency: With n=5 nodes and average query time of
            100ms:
          </p>
          <li className="ml-10">Sequential queries: 500ms</li>
          <li className="ml-10">
            Parallel queries: ~100ms (limited by slowest node)
          </li>
          <li className="mb-2 ml-10">
            Optimization: Use a timeout of 200ms with fallback nodes
          </li>

          <p className="text-sm sm:text-base dark:text-stone-50">
            Network Overhead: For each content verification:
          </p>
          <li className="ml-10">Hash requests: 32 bytes × n nodes</li>
          <li className="ml-10">Hash responses: 32 bytes × n nodes</li>
          <li className="ml-10">Total: 64n bytes (320 bytes for n=5)</li>
        </ul>

        <p className="mb-2 text-sm font-semibold sm:text-base dark:text-stone-50">
          8.2. Optimization Strategies
        </p>

        <ul className="mb-2 ml-10 list-none">
          <li>
            Caching: Nodes cache verification results with TTL to avoid repeated
            queries for popular content
          </li>
          <li>
            Bloom Filters: Probabilistic data structures to quickly check if
            peers likely have content
          </li>
          <li>
            Content-Addressed Storage: Use a hash as an identifier for
            deduplication
          </li>
          <li>
            Gossip Protocol: Propagate content updates probabilistically to
            reduce redundant transmissions
          </li>
        </ul>
      </>
    ),
    contentJP: (
      <>
        <p className="mb-2 text-sm font-semibold sm:text-base dark:text-stone-50">
          8.1. スケーラビリティ
        </p>
        <ul className="mb-2 list-disc">
          <p className="text-sm sm:text-base dark:text-stone-50">
            検証レイテンシ: n=5 ノードで平均クエリ時間 100ms の場合:
          </p>
          <li className="ml-10">逐次クエリ: 500ms</li>
          <li className="ml-10">並列クエリ: 約100ms（最も遅いノードに制限）</li>
          <li className="mb-2 ml-10">
            最適化: タイムアウト200msとフォールバックノードの使用
          </li>

          <p className="text-sm sm:text-base dark:text-stone-50">
            ネットワークオーバーヘッド: 各コンテンツ検証に対して:
          </p>
          <li className="ml-10">ハッシュリクエスト: 32 バイト × n ノード</li>
          <li className="ml-10">ハッシュレスポンス: 32 バイト × n ノード</li>
          <li className="ml-10">合計: 64n バイト（n=5 の場合 320 バイト）</li>
        </ul>

        <p className="mb-2 text-sm font-semibold sm:text-base dark:text-stone-50">
          8.2. 最適化戦略
        </p>

        <ul className="mb-2 ml-10 list-none">
          <li>
            キャッシング: ノードは TTL
            付きで検証結果をキャッシュし、人気コンテンツの繰り返しクエリを回避
          </li>
          <li>
            ブルームフィルター:
            ピアがコンテンツを持っている可能性を素早く確認する確率的データ構造
          </li>
          <li>
            コンテンツアドレスストレージ: ハッシュを識別子として使用し重複排除
          </li>
          <li>
            ゴシッププロトコル:
            コンテンツ更新を確率的に伝播させ、冗長な送信を削減
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "9. Future Directions",
    titleJP: "9. 将来の方向性",
    content: (
      <>
        <p className="mb-2 text-sm font-semibold sm:text-base dark:text-stone-50">
          9.1. Adaptive Quorum Sizing
        </p>
        <ul className="mb-2 list-disc">
          <p className="text-sm sm:text-base dark:text-stone-50">
            Dynamically adjust verification node count based on:
          </p>
          <li className="ml-10">Content importance or value</li>
          <li className="ml-10">Network conditions and node availability</li>
          <li className="mb-2 ml-10">Historical attack frequency</li>
        </ul>

        <p className="mb-2 text-sm font-semibold sm:text-base dark:text-stone-50">
          9.2. Weighted Voting
        </p>
        <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
          Assign vote weights based on node reputation, allowing trusted nodes
          to have greater influence while maintaining Byzantine fault tolerance.
        </p>

        <p className="mb-2 text-sm font-semibold sm:text-base dark:text-stone-50">
          9.3. Zero-Knowledge Proofs
        </p>
        <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
          Implement privacy-preserving verification that allows nodes to prove
          content validity without revealing the content itself.
        </p>

        <p className="mb-2 text-sm font-semibold sm:text-base dark:text-stone-50">
          9.4. Sharding
        </p>
        <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
          Partition the network into sub-networks responsible for different
          content domains to improve scalability.
        </p>
      </>
    ),
    contentJP: (
      <>
        <p className="mb-2 text-sm font-semibold sm:text-base dark:text-stone-50">
          9.1. 適応型クオーラムサイズ
        </p>
        <ul className="mb-2 list-disc">
          <p className="text-sm sm:text-base dark:text-stone-50">
            以下に基づき検証ノード数を動的に調整:
          </p>
          <li className="ml-10">コンテンツの重要度や価値</li>
          <li className="ml-10">ネットワーク状況およびノードの可用性</li>
          <li className="mb-2 ml-10">過去の攻撃頻度</li>
        </ul>

        <p className="mb-2 text-sm font-semibold sm:text-base dark:text-stone-50">
          9.2. 重み付き投票
        </p>
        <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
          ノードの評判に応じて投票の重みを割り当て、信頼されたノードがより大きな影響力を持つ一方で、ビザンチン耐性を維持します。
        </p>

        <p className="mb-2 text-sm font-semibold sm:text-base dark:text-stone-50">
          9.3. ゼロ知識証明
        </p>
        <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
          ノードがコンテンツ自体を公開せずに、その有効性を証明できるプライバシー保護型検証を実装。
        </p>

        <p className="mb-2 text-sm font-semibold sm:text-base dark:text-stone-50">
          9.4. シャーディング
        </p>
        <p className="mb-2 text-sm sm:text-base dark:text-stone-50">
          ネットワークを異なるコンテンツドメインごとに担当するサブネットワークに分割し、スケーラビリティを向上。
        </p>
      </>
    ),
  },
];
