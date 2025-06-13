import { Link } from "react-router-dom";
import conceptImg from "../../assets/concept-placeholder.png";
import placeholderImg from "../../assets/placeholder-2.png";
import placeholderImg3 from "../../assets/placeholder-3.png";
import roadmapPlaceholder from "../../assets/roadmap-placeholder.png";

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
            <div className="relative flex h-full flex-col overflow-hidden rounded-lg max-lg:rounded-t-[2rem] shadow ring-1 ring-black/5 dark:ring-stone-600">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center dark:text-stone-50">
                  Design & Implementation
                </p>
                <p className="mt-2 mb-2 text-sm text-gray-600 max-lg:text-center dark:text-stone-50">
                  Three key characters are integral to the network: the User,
                  the Storer, and the PXL Server. Users are simply individuals
                  who engage with the SNS mobile application...
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
              <div className="flex items-center justify-center flex-1 px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                <img
                  className="w-full max-lg:max-w-xs"
                  src={placeholderImg}
                  alt="Design and Implementation Image"
                />
              </div>
            </div>
          </div>

          {/* Network Incentives */}
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute bg-white rounded-lg inset-1 dark:bg-stone-500/20"></div>
            <div className="relative flex flex-col h-full overflow-hidden rounded-lg shadow ring-1 ring-black/5 dark:ring-stone-600">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center dark:text-stone-50">
                  Network Incentives
                </p>
                <p className="mt-2 mb-2 text-sm text-gray-600 max-lg:text-center dark:text-stone-50">
                  What distinguishes Pixelmine from other decentralized systems
                  is our unique approach to incentivizing the network by
                  awarding points to both users and storers...
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
              <div className="flex items-center justify-center flex-1 max-lg:py-6 lg:pb-2 ">
                <img
                  className="object-cover w-full h-30"
                  src={placeholderImg3}
                  alt="Network Incentives"
                />
              </div>
            </div>
          </div>

          {/* Democratic System */}
          <div className="relative max-lg:row-start-4 lg:col-start-3 lg:row-start-2">
            <div className="absolute bg-white rounded-lg inset-1 dark:bg-stone-500/20 dark:text-stone-50"></div>
            <div className="relative flex flex-col h-full overflow-hidden rounded-lg shadow ring-1 ring-black/5 dark:ring-stone-600">
              <div className="px-8 py-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center dark:text-stone-50">
                  Democratic System
                </p>
                <p className="mt-2 mb-2 text-sm text-gray-600 max-lg:text-center dark:text-stone-50">
                  Pixelmines's decentralization plays a crucial role in
                  strengthening democracy by reducing the concentration of power
                  over information. In traditional centralized systems, a few
                  entities control vast amounts of data, leading to risks of
                  manipulation, surveillance, and censorship...
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
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center dark:text-stone-50">
                  Roadmap
                </p>
                <p className="mt-2 mb-2 text-sm text-gray-600 max-lg:text-center dark:text-stone-50">
                  Our strategic roadmap outlines the evolution of Pixelmine OPC
                  Japan, focusing on innovative technology, creator empowerment,
                  and global expansion.
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
              <div className="flex items-center justify-center flex-1">
                <img
                  className="w-full"
                  src={roadmapPlaceholder}
                  alt="Roadmap"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
