import SEOHelmet from "../SEOHelmet";

function DashboardAnalytics() {
  return (
    <>
      <SEOHelmet
        title="Analytics | Pixelmine Japan OPC"
        description="Monitor real-time storer activity, available slots, and operational metrics with the Pixelmine OPC Dashboard. Stay updated and manage your network efficiently."
        url="https://www.pixelmine.org/dashboard"
        image="/social-sharing.jpg"
      />
      <section className="grid min-h-full px-6 py-24 bg-white rounded-lg place-items-center sm:py-32 lg:px-8">
        <div className="text-center">
          <img
            src="../../logo.png"
            alt="Pixelmine Logo"
            className="h-5 mx-auto"
          />
          <p className="pt-10 text-2xl font-semibold text-primary ">
            Coming Soon!
          </p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-gray-900 text-balance sm:text-7xl">
            This page is under construction
          </h1>
          <p className="mt-6 text-lg text-gray-500 text-pretty font-regular sm:text-xl/8">
            We're getting ready to launch this page!
          </p>
        </div>
      </section>
    </>
  );
}

export default DashboardAnalytics;
