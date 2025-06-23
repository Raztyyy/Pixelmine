import { Link } from "react-router-dom";
import conceptImg from "../../assets/concept.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPuzzle,
  faMap,
  faCoins,
  faHandshakeSimple,
} from "@fortawesome/pro-solid-svg-icons";
// import designImplementation from "../../assets/design-and-implementation.png";
// import networkIncentives from "../../assets/network-incentives.png";
// import roadmap from "../../assets/roadmap.png";

export default function Example() {
  return (
    <section className="py-24 bg-gray-50 sm:py-32 dark:bg-stone-800">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
          {/* Concept */}
          <div className="relative lg:row-span-2">
            <div className="absolute bg-white rounded-lg inset-1 lg:rounded-l-3xl dark:bg-stone-500/20"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-lg lg:rounded-l-[2rem] shadow ring-1 ring-black/5 dark:ring-stone-600">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center dark:text-stone-50">
                  Concept
                </p>
                <p className="mt-2 mb-2 text-sm text-gray-600 max-lg:text-center dark:text-stone-50">
                  Pixelmine's approach promotes a more democratic online
                  environment, allowing users more significant influence over
                  their interactions and community standards. By distributing
                  authority rather than concentrating it...
                </p>
                <div className="max-lg:text-center">
                  <Link
                    to="concept"
                    className="text-sm font-medium transition-all duration-300 ease-in-out text-primary hover:text-primary hover:font-semibold dark:text-green-400"
                  >
                    Read More <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
              <div className="flex-1 w-full px-5 pt-5 ">
                <div className="overflow-hidden rounded-t-2xl ">
                  <img
                    className="object-cover object-top w-full h-full lg:h-full md:h-[37rem] "
                    src={conceptImg}
                    alt="Concept Img"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Design & Implementation */}
          <div className="relative max-lg:row-start-1">
            <div className="absolute bg-white rounded-lg inset-1 max-lg:rounded-t-3xl dark:bg-stone-500/20"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-lg max-lg:rounded-t-[2rem] shadow ring-1 ring-black/5 dark:ring-stone-600 ">
              <div className="px-8 py-8 text-center lg:text-start sm:px-10 sm:pt-10">
                <div className="flex flex-col items-center justify-center gap-4 lg:justify-start lg:flex-row">
                  <FontAwesomeIcon
                    icon={faPuzzle}
                    className="p-2 rounded bg-primary/80 text-slate-100 size-5"
                  />
                  <p className="text-lg font-medium tracking-tight text-gray-950 max-lg:text-center dark:text-stone-50">
                    Design & Implementation
                  </p>
                </div>
                <p className="mt-5 mb-2 text-sm text-gray-600 max-lg:text-center dark:text-stone-50">
                  The network is built around three primary components: the
                  User, the Storer, and the PXL Server. The User is any
                  individual who interacts with the SNS mobile application,
                  engaging with content, sharing media, and participating in the
                  platform’s social features. The Storer serves as a
                  decentralized node tasked with securely storing encrypted
                  data, such as user-generated content and metadata...
                </p>
                <div className="max-lg:text-center">
                  <Link
                    to="design-implementation"
                    className="text-sm font-medium transition-all duration-300 ease-in-out text-primary hover:text-primary hover:font-semibold dark:text-green-400"
                  >
                    Read More <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
              {/* <div className="flex items-center justify-center flex-1 px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                <img
                  className="w-full max-lg:max-w-xs"
                  src={designImplementation}
                  alt="Design and Implementation Image"
                />
              </div> */}
            </div>
          </div>

          {/* Network Incentives */}
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute bg-white rounded-lg inset-1 dark:bg-stone-500/20"></div>
            <div className="relative flex flex-col h-full overflow-hidden rounded-lg shadow ring-1 ring-black/5 dark:ring-stone-600">
              <div className="px-8 py-8 text-center sm:px-10 sm:pt-10 lg:text-start">
                <div className="flex flex-col items-center justify-center gap-4 lg:justify-start lg:flex-row">
                  <FontAwesomeIcon
                    icon={faCoins}
                    className="p-2 rounded bg-primary/80 text-slate-100 size-5"
                  />
                  <p className="text-lg font-medium tracking-tight text-gray-950 max-lg:text-center dark:text-stone-50">
                    Network Incentives
                  </p>
                </div>
                <p className="mt-5 mb-2 text-sm text-gray-600 max-lg:text-center dark:text-stone-50">
                  Activity Points represent the overall activity of a user,
                  which includes actions such as posting content, commenting on
                  posts, messaging, and reacting to content. PXL Points, on the
                  other hand, reflect the quality of a user’s activity. While
                  Activity Points increase with every interaction within the
                  app, PXL Points assess the quality of those interactions.
                </p>
                <div className="max-lg:text-center">
                  <Link
                    to="network-incentives"
                    className="text-sm font-medium transition-all duration-300 ease-in-out text-primary hover:text-primary hover:font-semibold dark:text-green-400"
                  >
                    Read More <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
              {/* <div className="flex items-center justify-center flex-1 max-lg:py-6 lg:pb-2 ">
                <img
                  className="object-cover w-full "
                  src={networkIncentives}
                  alt="Network Incentives"
                />
              </div> */}
            </div>
          </div>

          {/* Democratic System */}
          <div className="relative max-lg:row-start-4 lg:col-start-3 lg:row-start-2">
            <div className="absolute bg-white rounded-lg inset-1 dark:bg-stone-500/20 dark:text-stone-50"></div>
            <div className="relative flex flex-col h-full overflow-hidden rounded-lg shadow ring-1 ring-black/5 dark:ring-stone-600">
              <div className="px-8 py-8 text-center sm:px-10 sm:pt-10 lg:text-start">
                <div className="flex flex-col items-center justify-center gap-4 lg:justify-start lg:flex-row">
                  <FontAwesomeIcon
                    icon={faHandshakeSimple}
                    className="p-2 rounded bg-primary/80 text-slate-100 size-5"
                  />
                  <p className="text-lg font-medium tracking-tight text-gray-950 max-lg:text-center dark:text-stone-50">
                    Democratic System
                  </p>
                </div>
                <p className="mt-5 mb-2 text-sm text-gray-600 max-lg:text-center dark:text-stone-50">
                  Pixelmine focuses on user participation, transparency, and the
                  fair distribution of information. By empowering users to
                  express their opinions, Pixelmine facilitates meaningful
                  discussions around social, political, and cultural issues. A
                  key feature of Pixelmine is its commitment to inclusivity. The
                  platform employs algorithms that promote diverse viewpoints
                  instead of just trending content...
                </p>
                <div className="max-lg:text-center">
                  <Link
                    to="democratic-system"
                    className="text-sm font-medium transition-all duration-300 ease-in-out text-primary hover:text-primary hover:font-semibold dark:text-green-400"
                  >
                    Read More <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
              {/* <div className="flex items-center justify-center flex-1 px-8 max-lg:py-6 lg:pb-2">
                <img
                  className="w-full max-w-xs"
                  src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-accessibility.png"
                  alt="Democratic System"
                />
              </div> */}
            </div>
          </div>

          {/* Roadmap */}
          <div className="relative max-lg:row-start-2 lg:col-start-3 lg:row-start-1">
            <div className="absolute bg-white rounded-lg inset-1 dark:bg-stone-500/20"></div>
            <div className="relative flex flex-col h-full overflow-hidden rounded-lg shadow ring-1 ring-black/5 dark:ring-stone-600">
              <div className="px-8 py-8 text-center sm:px-10 sm:pt-10 lg:text-start">
                <div className="flex flex-col items-center justify-center gap-4 lg:justify-start lg:flex-row">
                  <FontAwesomeIcon
                    icon={faMap}
                    className="p-2 rounded bg-primary/80 text-slate-100 size-5"
                  />
                  <p className="text-lg font-medium tracking-tight text-gray-950 max-lg:text-center dark:text-stone-50">
                    Roadmap
                  </p>
                </div>
                <p className="mt-5 mb-2 text-sm text-gray-600 max-lg:text-center dark:text-stone-50">
                  Our strategic roadmap charts the future development of
                  Pixelmine OPC Japan, emphasizing a commitment to cutting-edge
                  technology, meaningful creator empowerment, and a vision for
                  global expansion. This plan highlights our dedication to
                  building advanced solutions that not only push the boundaries
                  of innovation but also provide creators with the tools,
                  support, and opportunities they need...
                </p>
                <div className="max-lg:text-center">
                  <Link
                    to="roadmap"
                    className="text-sm font-medium transition-all duration-300 ease-in-out text-primary hover:text-primary hover:font-semibold dark:text-green-400"
                  >
                    Read More <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
              {/* <div className="flex items-center justify-center flex-1 max-lg:py-6 lg:pb-2">
                <img className="w-full" src={roadmap} alt="Roadmap" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
