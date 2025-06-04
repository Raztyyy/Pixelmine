import { Link } from "react-router-dom";
import conceptImg from "../../assets/concept.jpg";
import placeholderImg from "../../assets/placeholder-2.png";
import placeholderImg3 from "../../assets/placeholder-3.png";

export default function Example() {
  return (
    <section className="py-24 bg-gray-50 sm:py-32">
      <div className="px-6 mx-auto max-w-auto lg:max-w-7xl lg:px-8">
        <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Concept
                </p>
                <p className="mt-2 mb-2 text-gray-600 max-w-auto text-sm/6 max-lg:text-center">
                  Pixelmine's approach promotes a more democratic online
                  environment, allowing users more significant influence over
                  their interactions and community standards. By distributing
                  authority rather than concentrating it...
                </p>

                <div className="max-lg:text-center">
                  <Link
                    to="concept"
                    className="text-sm transition-all duration-300 ease-in-out text-primary hover:text-primary hover:font-semibold"
                  >
                    Read More <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
              <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                  <img
                    className="object-cover object-top size-full"
                    src={conceptImg}
                    alt="Concept Img"
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Design & Implementation
                </p>
                <p className="mt-2 mb-2 text-gray-600 max-w-auto text-sm/6 max-lg:text-center">
                  Three key characters are integral to the network: the User,
                  the Storer, and the PXL Server. Users are simply individuals
                  who engage with the SNS mobile application...
                </p>
                <div className="max-lg:text-center">
                  <Link
                    to="design-implementation"
                    className="text-sm transition-all duration-300 ease-in-out text-primary hover:text-primary hover:font-semibold"
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
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute bg-white rounded-lg inset-px"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Network Incentives
                </p>
                <p className="mt-2 mb-2 text-gray-600 max-w-auto text-sm/6 max-lg:text-center">
                  What distinguishes Pixelmine from other decentralized systems
                  is our unique approach to incentivizing the network by
                  awarding points to both users and storers...
                </p>
                <div className="max-lg:text-center">
                  <Link
                    to="network-incentives"
                    className="text-sm transition-all duration-300 ease-in-out text-primary hover:text-primary hover:font-semibold"
                  >
                    Read More <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
              <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2 ">
                <img
                  className="h-[min(152px,40cqw)] w-full object-cover overflow-visible"
                  src={placeholderImg3}
                  alt=""
                />
              </div>
            </div>
            <div className="absolute rounded-lg shadow pointer-events-none inset-px ring-1 ring-black/5"></div>
          </div>
          <div className="relative max-lg:row-start-4 lg:col-start-3 lg:row-start-2">
            <div className="absolute bg-white rounded-lg inset-px"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Democratic System
                </p>
                <p className="mt-2 mb-2 text-gray-600 max-w-auto text-sm/6 max-lg:text-center">
                  Pixelmines's decentralization plays a crucial role in
                  strengthening democracy by reducing the concentration of power
                  over information. In traditional centralized systems, a few
                  entities control vast amounts of data, leading to risks of
                  manipulation, surveillance, and censorship...
                </p>
                <div className="max-lg:text-center">
                  <Link
                    to="democratic-system"
                    className="text-sm transition-all duration-300 ease-in-out text-primary hover:text-primary hover:font-semibold"
                  >
                    Read More <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center flex-1 px-8 max-lg:py-6 lg:pb-2">
                <img
                  className="w-full max-w-xs"
                  src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-accessibility.png"
                  alt=""
                />
              </div>
            </div>
            <div className="absolute rounded-lg shadow pointer-events-none inset-px ring-1 ring-black/5"></div>
          </div>
          <div className="relative max-lg:row-start-2 lg:col-start-3 lg:row-start-1">
            <div className="absolute bg-white rounded-lg inset-px"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Roadmap
                </p>
                <p className="mt-2 text-gray-600 max-w-auto text-sm/6 max-lg:text-center">
                  Execute and govern independently with verifiable trust.
                </p>
              </div>
              <div className="flex items-center justify-center flex-1 px-8 max-lg:py-6 lg:pb-2">
                <img
                  className="w-full max-w-xs"
                  src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-secure-payments.png"
                  alt=""
                />
              </div>
            </div>
            <div className="absolute rounded-lg shadow pointer-events-none inset-px ring-1 ring-black/5"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
