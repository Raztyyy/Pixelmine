import SEOHelmet from "../ui/SEOHelmet";
import { useLanguage } from "../context/LanguageContext";

function ChildSexualAbusePolicy() {
  const { language } = useLanguage();

  return (
    <>
      <SEOHelmet
        title={
          language === "en"
            ? "Child Sexual Abuse Policy | Pixelmine Japan OPC"
            : "児童性的虐待防止ポリシー | ピクセルマインジャパンOPC"
        }
        description={
          language === "en"
            ? "Learn about Pixelmine’s strict policies and proactive measures against child sexual abuse content to ensure a safe and responsible digital environment."
            : "Pixelmineの児童性的虐待資料（CSAM）に対する厳格な方針と、安全で責任あるデジタル環境を確保するための取り組みについてご覧ください。"
        }
        url="https://www.pixelmine.org/child-sexual-abuse-policy"
        image="/social-sharing.jpg"
      />

      {language === "en" ? (
        // ✅ English Version (unchanged)
        <section>
          {/* Hero Section */}
          <div className="pt-[2rem] pb-[2rem] bg-green-50 dark:bg-stone-900">
            <div className="max-w-full px-6 mx-auto lg:max-w-7xl lg:px-8">
              <h1 className="max-w-full text-2xl font-bold leading-tight sm:text-4xl lg:text-5xl dark:text-stone-50">
                Child Sexual Abuse Policy
              </h1>
              <p className="pt-5 pb-5 max-w-[30rem] text-base/6 text-stone-900 dark:text-stone-50">
                Policy on Preventing, Identifying, and Addressing Child Sexual
                Abuse Materials (CSAM)
              </p>
            </div>
          </div>

          {/* Policy Sections */}
          <div className="pt-[2rem] pb-[2rem] px-6 mx-auto max-w-full lg:max-w-7xl lg:px-8">
            <section className="mb-8">
              <h2 className="mb-4 text-lg font-semibold dark:text-stone-50">
                Purpose
              </h2>
              <p className="text-base text-stone-900 dark:text-stone-50">
                To establish and enforce rigorous standards and procedures that
                unequivocally prevent, identify, and address child sexual abuse
                materials (CSAM) within Pixelmine Japan.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-lg font-semibold dark:text-stone-50">
                Scope
              </h2>
              <p className="text-base text-stone-900 dark:text-stone-50">
                This policy applies to all employees, volunteers, contractors,
                and stakeholders associated with Pixelmine Japan.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-lg font-semibold dark:text-stone-50">
                Commitment to Child Safety
              </h2>
              <p className="text-base text-stone-900 dark:text-stone-50">
                Pixelmine Japan is firmly committed to the highest standards of
                child safety and protection. We categorically condemn all forms
                of child sexual abuse and recognize the urgent necessity of
                preventing, detecting, and responding to CSAM. This policy
                embodies our unwavering dedication to safeguarding children from
                exploitation and abuse.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-lg font-semibold dark:text-stone-50">
                Standards and Procedures
              </h2>

              <p className="mb-4 text-base font-semibold text-stone-900 dark:text-stone-50">
                1. Zero-Tolerance Policy
              </p>
              <p className="mb-4 text-base text-stone-900 dark:text-stone-50">
                Pixelmine Japan enforces a strict zero-tolerance policy
                regarding CSAM. Any involvement in the creation, distribution,
                or possession of CSAM will lead to immediate disciplinary
                action, including termination and mandatory reporting to law
                enforcement.
              </p>

              <p className="mb-4 text-base font-semibold text-stone-900 dark:text-stone-50">
                2. Training and Awareness
              </p>
              <ol className="mb-4 ml-5 list-disc list-inside text-stone-900 text-base/6 dark:text-stone-50">
                <li>
                  All employees and volunteers are required to undergo mandatory
                  training on recognizing, reporting, and preventing CSAM.
                </li>
                <li>
                  We will provide regular workshops and updates to ensure
                  continuous awareness of child safety standards.
                </li>
              </ol>

              <p className="mb-4 text-base font-semibold text-stone-900 dark:text-stone-50">
                3. Reporting Mechanisms
              </p>
              <ol className="mb-4 ml-5 list-disc list-inside text-stone-900 text-base/6 dark:text-stone-50">
                <li>
                  Clear and effective procedures for reporting suspected CSAM
                  will be established. All staff members must report any
                  suspicions immediately to the designated authority or
                  department.
                </li>
                <li>
                  All reports will be handled with utmost confidentiality and
                  subjected to prompt investigation.
                </li>
              </ol>

              <p className="mb-4 text-base font-semibold text-stone-900 dark:text-stone-50">
                4. Digital Safety Measures
              </p>
              <ol className="mb-4 ml-5 list-disc list-inside text-stone-900 text-base/6 dark:text-stone-50">
                <li>
                  We will implement state-of-the-art technology solutions to
                  monitor and filter online content, preventing access to CSAM
                  on organizational devices and networks.
                </li>
                <li>
                  Regular audits and assessments of digital safety protocols
                  will be conducted to ensure effectiveness.
                </li>
              </ol>

              <p className="mb-4 text-base font-semibold text-stone-900 dark:text-stone-50">
                5. Support for Victims
              </p>
              <ol className="mb-4 ml-5 list-disc list-inside text-stone-900 text-base/6 dark:text-stone-50">
                <li>
                  We will provide comprehensive resources and support for
                  victims of child sexual abuse, including access to counseling
                  and legal assistance.
                </li>
                <li>
                  We are committed to fostering a safe and supportive
                  environment for individuals to come forward with their
                  experiences.
                </li>
              </ol>

              <p className="mb-4 text-base font-semibold text-stone-900 dark:text-stone-50">
                6. Compliance with Laws
              </p>
              <p className="mb-4 text-base text-stone-900 dark:text-stone-50">
                Pixelmine Japan will strictly adhere to all local, state, and
                federal laws concerning child protection and the handling of
                CSAM.
              </p>

              <p className="mb-4 text-base font-semibold text-stone-900 dark:text-stone-50">
                7. Review and Amendments
              </p>
              <p className="mb-4 text-base text-stone-900 dark:text-stone-50">
                This policy will be reviewed annually and amended as necessary
                to ensure compliance with legal requirements and the adoption of
                best practices in child safety.
              </p>
              <p className="mb-4 text-base text-stone-900 dark:text-stone-50">
                Pixelmine Japan is resolutely dedicated to creating a safe
                environment for children and will take all necessary actions to
                protect them from sexual exploitation and abuse. We will not
                tolerate any violations of this policy and will act decisively
                to uphold our commitment to child safety.
              </p>
            </section>
          </div>
        </section>
      ) : (
        // ✅ Japanese Version
        <section>
          <div className="pt-[2rem] pb-[2rem] bg-green-50 dark:bg-stone-900">
            <div className="max-w-full px-6 mx-auto lg:max-w-7xl lg:px-8">
              <h1 className="max-w-full text-2xl font-bold leading-tight sm:text-4xl lg:text-5xl dark:text-stone-50">
                児童性的虐待防止ポリシー
              </h1>
              <p className="pt-5 pb-5 max-w-[30rem] text-base/6 text-stone-900 dark:text-stone-50">
                児童性的虐待資料（CSAM）の防止、特定および対応に関する方針
              </p>
            </div>
          </div>

          <div className="pt-[2rem] pb-[2rem] px-6 mx-auto max-w-full lg:max-w-7xl lg:px-8">
            <section className="mb-8">
              <h2 className="mb-4 text-lg font-semibold dark:text-stone-50">
                目的
              </h2>
              <p className="text-base text-stone-900 dark:text-stone-50">
                Pixelmine Japan 内で児童性的虐待資料（CSAM）を防止、特定、
                および対応するための厳格な基準と手順を確立し、実施することを目的とします。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-lg font-semibold dark:text-stone-50">
                適用範囲
              </h2>
              <p className="text-base text-stone-900 dark:text-stone-50">
                本ポリシーは、Pixelmine Japan に関係するすべての従業員、
                ボランティア、契約者、および利害関係者に適用されます。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-lg font-semibold dark:text-stone-50">
                児童の安全への取り組み
              </h2>
              <p className="text-base text-stone-900 dark:text-stone-50">
                Pixelmine Japan
                は、児童の安全と保護において最高水準を維持することを
                固く約束しています。あらゆる形態の児童性的虐待を断固として非難し、
                CSAM の防止、検出、および対応の重要性を強く認識しています。
                本ポリシーは、児童を搾取や虐待から守るという当社の揺るぎない
                決意を体現するものです。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-lg font-semibold dark:text-stone-50">
                基準および手順
              </h2>

              <p className="mb-4 text-base font-semibold text-stone-900 dark:text-stone-50">
                1. ゼロトレランスポリシー
              </p>
              <p className="mb-4 text-base text-stone-900 dark:text-stone-50">
                Pixelmine Japan は、CSAM に関して厳格なゼロトレランス方針を
                実施しています。CSAM の作成、配布、または所持に関与した場合は、
                即時の懲戒処分（解雇を含む）および法執行機関への通報を行います。
              </p>

              <p className="mb-4 text-base font-semibold text-stone-900 dark:text-stone-50">
                2. 研修と意識向上
              </p>
              <ol className="mb-4 ml-5 list-disc list-inside text-stone-900 text-base/6 dark:text-stone-50">
                <li>
                  すべての従業員およびボランティアは、CSAM の認識、報告、
                  防止に関する必須研修を受ける必要があります。
                </li>
                <li>
                  定期的にワークショップや最新情報を提供し、児童保護に関する意識を
                  維持・向上させます。
                </li>
              </ol>

              <p className="mb-4 text-base font-semibold text-stone-900 dark:text-stone-50">
                3. 報告メカニズム
              </p>
              <ol className="mb-4 ml-5 list-disc list-inside text-stone-900 text-base/6 dark:text-stone-50">
                <li>
                  CSAM の疑いに関する明確かつ効果的な報告手順を確立します。
                  全従業員は、疑わしい行為を直ちに指定部署または権限者に報告しなければなりません。
                </li>
                <li>報告内容は厳重に秘密を保持し、迅速に調査されます。</li>
              </ol>

              <p className="mb-4 text-base font-semibold text-stone-900 dark:text-stone-50">
                4. デジタル安全対策
              </p>
              <ol className="mb-4 ml-5 list-disc list-inside text-stone-900 text-base/6 dark:text-stone-50">
                <li>
                  組織内デバイスおよびネットワークにおいて CSAM
                  へのアクセスを防止するため、
                  最新の技術ソリューションを導入します。
                </li>
                <li>
                  デジタル安全対策の有効性を確保するため、定期的に監査と評価を行います。
                </li>
              </ol>

              <p className="mb-4 text-base font-semibold text-stone-900 dark:text-stone-50">
                5. 被害者への支援
              </p>
              <ol className="mb-4 ml-5 list-disc list-inside text-stone-900 text-base/6 dark:text-stone-50">
                <li>
                  児童性的虐待の被害者に対し、カウンセリングや法的支援など
                  包括的なサポートを提供します。
                </li>
                <li>
                  被害者が安心して声を上げられる安全で支援的な環境を整備します。
                </li>
              </ol>

              <p className="mb-4 text-base font-semibold text-stone-900 dark:text-stone-50">
                6. 法令遵守
              </p>
              <p className="mb-4 text-base text-stone-900 dark:text-stone-50">
                Pixelmine Japan は、児童保護および CSAM の取扱いに関する
                すべての地方、州、国の法令を厳格に遵守します。
              </p>

              <p className="mb-4 text-base font-semibold text-stone-900 dark:text-stone-50">
                7. 見直しと改訂
              </p>
              <p className="mb-4 text-base text-stone-900 dark:text-stone-50">
                本ポリシーは年に一度見直しを行い、法的要件および児童保護の
                最善慣行に適合するよう必要に応じて改訂します。
              </p>
              <p className="mb-4 text-base text-stone-900 dark:text-stone-50">
                Pixelmine Japan は、児童にとって安全な環境を確保することに
                全力を尽くし、性的搾取や虐待から保護するために必要なすべての措置を講じます。
                本ポリシーへの違反は一切容認せず、児童保護への取り組みを
                維持するため断固たる行動を取ります。
              </p>
            </section>
          </div>
        </section>
      )}
    </>
  );
}

export default ChildSexualAbusePolicy;
