import SEOHelmet from "../ui/SEOHelmet";

function PrivacyPolicy() {
  return (
    <>
      <SEOHelmet
        title="Privacy Policy | Pixelmine Japan OPC"
        description="Understand how Pixelmine collects, uses, and protects your personal data in accordance with privacy regulations and user-first principles."
        url="https://www.pixelmine.org/privacy-policy"
        image="/social-sharing.jpg"
      />

      <section>
        {/* Hero Section */}
        <div className="pt-[3rem] pb-[3rem] sm:pt-[4em] sm:pb-[4rem] bg-green-50 dark:bg-stone-900">
          <div className="max-w-full px-6 mx-auto lg:max-w-7xl lg:px-8 ">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-full sm:max-w-[30rem] dark:text-stone-50">
              Privacy Policy
            </h1>
            <p className="pt-5 pb-5 max-w-[30rem] text-sm/6 text-gray-600 dark:text-stone-50">
              Pixelmine specifies how an organization collects, utilizes, and
              disseminates personal data.
            </p>
          </div>
        </div>

        {/* Privacy Policy Sections */}
        <div className="pt-[3rem] pb-[3rem] px-6 mx-auto max-w-full lg:max-w-7xl lg:px-8">
          <section className="mb-8">
            <p className="text-gray-600 text-sm/6 dark:text-stone-50">
              1. In these Terms, "personal information" refers to information
              that falls under Article 2, Paragraph 1 of the Act on the
              Protection of Personal Information.
            </p>
          </section>
          <section className="mb-8">
            <p className="mb-4 text-gray-600 text-sm/6 dark:text-stone-50">
              2. We may use the personal information provided by users for the
              purposes indicated below.
            </p>
            <ol className="ml-5 text-gray-600 list-disc list-inside text-sm/6 dark:text-stone-50">
              <li>Provision and guidance of our service</li>
              <li>Payment for contributions to our service</li>
              <li>
                Analyzing the status of use and other information related to our
                Services
              </li>
              <li>Contacting Users</li>
              <li>Improvement of our Services</li>
              <li>Development and guidance of our new Services</li>
              <li>Creation of anonymized statistical data</li>
            </ol>
          </section>
          <section className="mb-8">
            <p className="text-gray-600 text-sm/6 dark:text-stone-50">
              3. We will never provide Personal Data to a third party, except
              when we have obtained prior consent from the user or when
              permitted by the Act on the Protection of Personal Information or
              other relevant laws and regulations.
            </p>
          </section>
          <section className="mb-8">
            <p className="text-gray-600 text-sm/6 dark:text-stone-50">
              4. In the event that we entrust the processing of personal
              information to an external party, we will select an appropriate
              contractor, enter into a contract regarding the protection of
              personal information with the contractor, and conduct necessary
              and appropriate supervision of the contractor.
            </p>
          </section>
          <section className="mb-8">
            <p className="text-gray-600 text-sm/6 dark:text-stone-50">
              5. In the event that we receive a request from a user for
              disclosure, correction, cessation of use, deletion, or suspension
              of provision to third parties regarding their personal
              information, we will respond appropriately and promptly in
              accordance with the Act on the Protection of Personal Information.
            </p>
          </section>
        </div>
      </section>
    </>
  );
}

export default PrivacyPolicy;
