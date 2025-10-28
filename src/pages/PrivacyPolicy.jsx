import SEOHelmet from "../ui/SEOHelmet";
import { useLanguage } from "../context/LanguageContext";

function PrivacyPolicy() {
  const { language } = useLanguage();

  return (
    <>
      <SEOHelmet
        title={
          language === "en"
            ? "Privacy Policy | Pixelmine Japan OPC"
            : "プライバシーポリシー | ピクセルマインジャパンOPC"
        }
        description={
          language === "en"
            ? "Understand how Pixelmine collects, uses, and protects your personal data in accordance with privacy regulations and user-first principles."
            : "Pixelmineがどのように個人情報を収集、利用、保護するかを、プライバシー法規制およびユーザーファーストの原則に基づいて説明します。"
        }
        url="https://www.pixelmine.org/privacy-policy"
        image="/social-sharing.jpg"
      />

      {language === "en" ? (
        // ✅ English Version
        <section>
          {/* Hero Section */}
          <div className="pt-[2rem] pb-[2rem] bg-green-50 dark:bg-stone-900">
            <div className="max-w-full px-6 mx-auto lg:max-w-7xl lg:px-8 ">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-full sm:max-w-[30rem] dark:text-stone-50">
                Privacy Policy
              </h1>
              <p className="pt-5 pb-5 max-w-[30rem] text-base/6 text-stone-900 dark:text-stone-50">
                Pixelmine specifies how an organization collects, utilizes, and
                disseminates personal data.
              </p>
            </div>
          </div>

          {/* Privacy Policy Sections */}
          <div className="pt-[2rem] pb-[2rem] px-6 mx-auto max-w-full lg:max-w-7xl lg:px-8">
            <section className="mb-8">
              <p className="text-stone-900 text-base/6 dark:text-stone-50">
                1. In these Terms, "personal information" refers to information
                that falls under Article 2, Paragraph 1 of the Act on the
                Protection of Personal Information.
              </p>
            </section>
            <section className="mb-8">
              <p className="mb-4 text-stone-900 text-base/6 dark:text-stone-50">
                2. We may use the personal information provided by users for the
                purposes indicated below.
              </p>
              <ol className="ml-5 list-disc list-inside text-stone-900 text-base/6 dark:text-stone-50">
                <li>Provision and guidance of our service</li>
                <li>Payment for contributions to our service</li>
                <li>
                  Analyzing the status of use and other information related to
                  our Services
                </li>
                <li>Contacting Users</li>
                <li>Improvement of our Services</li>
                <li>Development and guidance of our new Services</li>
                <li>Creation of anonymized statistical data</li>
              </ol>
            </section>
            <section className="mb-8">
              <p className="text-stone-900 text-base/6 dark:text-stone-50">
                3. We will never provide Personal Data to a third party, except
                when we have obtained prior consent from the user or when
                permitted by the Act on the Protection of Personal Information
                or other relevant laws and regulations.
              </p>
            </section>
            <section className="mb-8">
              <p className="text-stone-900 text-base/6 dark:text-stone-50">
                4. In the event that we entrust the processing of personal
                information to an external party, we will select an appropriate
                contractor, enter into a contract regarding the protection of
                personal information with the contractor, and conduct necessary
                and appropriate supervision of the contractor.
              </p>
            </section>
            <section className="mb-8">
              <p className="text-stone-900 text-base/6 dark:text-stone-50">
                5. In the event that we receive a request from a user for
                disclosure, correction, cessation of use, deletion, or
                suspension of provision to third parties regarding their
                personal information, we will respond appropriately and promptly
                in accordance with the Act on the Protection of Personal
                Information.
              </p>
            </section>
          </div>
        </section>
      ) : (
        // ✅ Japanese Version
        <section lang="ja">
          <div className="pt-[2rem] pb-[2rem] bg-green-50 dark:bg-stone-900">
            <div className="max-w-full px-6 mx-auto lg:max-w-7xl lg:px-8 ">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-full sm:max-w-[30rem] dark:text-stone-50">
                プライバシーポリシー
              </h1>
              <p className="pt-5 pb-5 max-w-[30rem] text-base/6 text-stone-900 dark:text-stone-50">
                Pixelmineは、組織が個人データをどのように収集、利用、共有するかを定めています。
              </p>
            </div>
          </div>

          {/* Japanese-translated sections */}
          <div className="pt-[2rem] pb-[2rem] px-6 mx-auto max-w-full lg:max-w-7xl lg:px-8">
            <section className="mb-8">
              <p className="text-stone-900 text-base/6 dark:text-stone-50">
                1.
                本規約における「個人情報」とは、「個人情報の保護に関する法律」第2条第1項に該当する情報を指します。
              </p>
            </section>
            <section className="mb-8">
              <p className="mb-4 text-stone-900 text-base/6 dark:text-stone-50">
                2.
                ユーザーから提供された個人情報は、以下の目的のために利用する場合があります。
              </p>
              <ol className="ml-5 list-disc list-inside text-stone-900 text-base/6 dark:text-stone-50">
                <li>当社サービスの提供および案内</li>
                <li>当社サービスへの貢献に対する支払い</li>
                <li>サービス利用状況および関連情報の分析</li>
                <li>ユーザーへのご連絡</li>
                <li>当社サービスの改善</li>
                <li>新しいサービスの開発および案内</li>
                <li>匿名化された統計データの作成</li>
              </ol>
            </section>
            <section className="mb-8">
              <p className="text-stone-900 text-base/6 dark:text-stone-50">
                3.
                当社は、ユーザーの事前の同意を得た場合、または個人情報保護法その他関連法令で認められる場合を除き、個人データを第三者に提供することはありません。
              </p>
            </section>
            <section className="mb-8">
              <p className="text-stone-900 text-base/6 dark:text-stone-50">
                4.
                個人情報の取扱いを外部業者に委託する場合は、適切な委託先を選定し、個人情報保護に関する契約を締結の上、必要かつ適切な監督を行います。
              </p>
            </section>
            <section className="mb-8">
              <p className="text-stone-900 text-base/6 dark:text-stone-50">
                5.
                ユーザーから、自己の個人情報に関する開示、訂正、利用停止、削除、または第三者提供の停止を求められた場合は、「個人情報の保護に関する法律」に従い、適切かつ迅速に対応いたします。
              </p>
            </section>
          </div>
        </section>
      )}
    </>
  );
}

export default PrivacyPolicy;
