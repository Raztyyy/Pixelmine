import { FadeSlideUp } from "../animations/AnimatedWrappers";
import { useLanguage } from "../context/LanguageContext";
import SEOHelmet from "../ui/SEOHelmet";

function PrivacyPolicy() {
  const { language } = useLanguage();
  const isEN = language === "en";

  return (
    <>
      <SEOHelmet
        title={
          isEN
            ? "Privacy Policy | Pixelmine Japan OPC"
            : "プライバシーポリシー | Pixelmine Japan OPC"
        }
        description={
          isEN
            ? "Understand how Pixelmine collects, uses, and protects your personal data in accordance with privacy regulations and user-first principles."
            : "Pixelmineがどのように個人情報を収集、利用、保護するかを、プライバシー法規制およびユーザーファーストの原則に基づいて説明します。"
        }
        url="https://www.pixelmine.org/privacy-policy"
        image="/social-sharing.jpg"
      />

      {/* Hero Section */}
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

        <FadeSlideUp className="relative z-10 flex flex-col items-center gap-4 p-6 mx-auto text-center max-w-7xl">
          {/* Heading */}
          <h1 className="max-w-4xl mb-2 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl drop-shadow-lg">
            {isEN ? "Privacy Policy" : "プライバシーポリシー"}
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
            {isEN
              ? "Pixelmine specifies how an organization collects, utilizes, and disseminates personal data."
              : "Pixelmineは、組織が個人データをどのように収集、利用、共有するかを定めています。"}
          </p>
        </FadeSlideUp>
      </section>

      {/* Content Section */}
      <section className="py-20 overflow-x-hidden bg-gradient-to-b from-emerald-50 to-white dark:from-stone-900 dark:to-stone-800">
        <div className="p-6 mx-auto max-w-7xl">
          <div className="space-y-16">
            {/* Section 1 */}
            <FadeSlideUp>
              <article className="relative">
                <div className="static top-0 flex items-center justify-center w-10 h-10 mb-5 text-sm font-bold text-white shadow-lg md:absolute md:mb-0 -left-2 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600">
                  1
                </div>
                <div className="pl-0 md:pl-16">
                  <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                    {isEN
                      ? 'In these Terms, "personal information" refers to information that falls under Article 2, Paragraph 1 of the Act on the Protection of Personal Information.'
                      : "本規約における「個人情報」とは、「個人情報の保護に関する法律」第2条第1項に該当する情報を指します。"}
                  </p>
                </div>
                <div className="mt-16 border-t border-gray-200 dark:border-gray-800"></div>
              </article>
            </FadeSlideUp>

            {/* Section 2 */}
            <FadeSlideUp>
              <article className="relative">
                <div className="static top-0 flex items-center justify-center w-10 h-10 mb-5 text-sm font-bold text-white shadow-lg md:absolute md:mb-0 -left-2 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600">
                  2
                </div>
                <div className="pl-0 md:pl-16">
                  <p className="mb-4 text-base leading-relaxed text-gray-700 dark:text-gray-300">
                    {isEN
                      ? "We may use the personal information provided by users for the purposes indicated below."
                      : "ユーザーから提供された個人情報は、以下の目的のために利用する場合があります。"}
                  </p>
                  <ul className="space-y-2 text-base leading-relaxed text-gray-700 list-disc list-inside dark:text-gray-300">
                    {isEN ? (
                      <>
                        <li>Provision and guidance of our service</li>
                        <li>Payment for contributions to our service</li>
                        <li>
                          Analyzing the status of use and other information
                          related to our Services
                        </li>
                        <li>Contacting Users</li>
                        <li>Improvement of our Services</li>
                        <li>Development and guidance of our new Services</li>
                        <li>Creation of anonymized statistical data</li>
                      </>
                    ) : (
                      <>
                        <li>当社サービスの提供および案内</li>
                        <li>当社サービスへの貢献に対する支払い</li>
                        <li>サービス利用状況および関連情報の分析</li>
                        <li>ユーザーへのご連絡</li>
                        <li>当社サービスの改善</li>
                        <li>新しいサービスの開発および案内</li>
                        <li>匿名化された統計データの作成</li>
                      </>
                    )}
                  </ul>
                </div>
                <div className="mt-16 border-t border-gray-200 dark:border-gray-800"></div>
              </article>
            </FadeSlideUp>

            {/* Section 3 */}
            <FadeSlideUp>
              <article className="relative">
                <div className="static top-0 flex items-center justify-center w-10 h-10 mb-5 text-sm font-bold text-white shadow-lg md:absolute md:mb-0 -left-2 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600">
                  3
                </div>
                <div className="pl-0 md:pl-16">
                  <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                    {isEN
                      ? "We will never provide Personal Data to a third party, except when we have obtained prior consent from the user or when permitted by the Act on the Protection of Personal Information or other relevant laws and regulations."
                      : "当社は、ユーザーの事前の同意を得た場合、または個人情報保護法その他関連法令で認められる場合を除き、個人データを第三者に提供することはありません。"}
                  </p>
                </div>
                <div className="mt-16 border-t border-gray-200 dark:border-gray-800"></div>
              </article>
            </FadeSlideUp>

            {/* Section 4 */}
            <FadeSlideUp>
              <article className="relative">
                <div className="static top-0 flex items-center justify-center w-10 h-10 mb-5 text-sm font-bold text-white shadow-lg md:absolute md:mb-0 -left-2 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600">
                  4
                </div>
                <div className="pl-0 md:pl-16">
                  <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                    {isEN
                      ? "In the event that we entrust the processing of personal information to an external party, we will select an appropriate contractor, enter into a contract regarding the protection of personal information with the contractor, and conduct necessary and appropriate supervision of the contractor."
                      : "個人情報の取扱いを外部業者に委託する場合は、適切な委託先を選定し、個人情報保護に関する契約を締結の上、必要かつ適切な監督を行います。"}
                  </p>
                </div>
                <div className="mt-16 border-t border-gray-200 dark:border-gray-800"></div>
              </article>
            </FadeSlideUp>

            {/* Section 5 */}
            <FadeSlideUp>
              <article className="relative">
                <div className="static top-0 flex items-center justify-center w-10 h-10 mb-5 text-sm font-bold text-white shadow-lg md:absolute md:mb-0 -left-2 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600">
                  5
                </div>
                <div className="pl-0 md:pl-16">
                  <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                    {isEN
                      ? "In the event that we receive a request from a user for disclosure, correction, cessation of use, deletion, or suspension of provision to third parties regarding their personal information, we will respond appropriately and promptly in accordance with the Act on the Protection of Personal Information."
                      : "ユーザーから、自己の個人情報に関する開示、訂正、利用停止、削除、または第三者提供の停止を求められた場合は、「個人情報の保護に関する法律」に従い、適切かつ迅速に対応いたします。"}
                  </p>
                </div>
              </article>
            </FadeSlideUp>
          </div>
        </div>
      </section>
    </>
  );
}

export default PrivacyPolicy;
