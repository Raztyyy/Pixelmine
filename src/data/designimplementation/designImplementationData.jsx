import "katex/dist/katex.min.css";
import { BlockMath, InlineMath } from "react-katex";

export const designImplementationItems = [
  {
    title: "1. Abstract",
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
  },
  {
    title: "2. Introduction",
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
  },
  {
    title: "3. Problem Statement ",
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
  },
  {
    title: "4. Proposed Solution",
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
  },
  {
    title: "5. System Architecture ",
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
          <p className="mb-2 ">For content with components:</p>
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
  },
  {
    title: "6. Byzantine Fault Tolerance",
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
  },
  {
    title: "7. Security Analysis",
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
  },
  {
    title: "8. Performance Considerationss",
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
  },
  {
    title: "9. Future Directions",
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
  },
];
