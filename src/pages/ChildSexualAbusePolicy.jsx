import SEOHelmet from "../ui/SEOHelmet";
import { useLanguage } from "../context/LanguageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldCheck } from "@fortawesome/pro-solid-svg-icons";
import { FadeSlideUp } from "../animations/AnimatedWrappers";

function ChildSexualAbusePolicy() {
  const { language } = useLanguage();
  const isEN = language === "en";

  return (
    <>
      <SEOHelmet
        title={
          isEN
            ? "Child Sexual Abuse Policy | Pixelmine Japan OPC"
            : "児童性的虐待防止ポリシー | ピクセルマインジャパンOPC"
        }
        description={
          isEN
            ? "Learn about Pixelmine's strict policies and proactive measures against child sexual abuse content to ensure a safe and responsible digital environment."
            : "Pixelmineの児童性的虐待資料（CSAM）に対する厳格な方針と、安全で責任あるデジタル環境を確保するための取り組みについてご覧ください。"
        }
        url="https://www.pixelmine.org/child-sexual-abuse-policy"
        image="/social-sharing.jpg"
      />

      {/* Hero Section - Matching Design & Implementation Style */}
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
            {isEN ? "Child Sexual Abuse Policy" : "児童性的虐待防止ポリシー"}
          </h1>

          {/* Subtitle */}
          <p className="max-w-3xl text-lg leading-relaxed md:text-xl text-emerald-50 drop-shadow-md">
            {isEN
              ? "Policy on Preventing, Identifying, and Addressing Child Sexual Abuse Materials (CSAM)"
              : "児童性的虐待資料（CSAM）の防止、特定および対応に関する方針"}
          </p>
        </FadeSlideUp>
      </section>

      {/* Content Section */}
      <section className="py-20 overflow-x-hidden bg-gradient-to-b from-emerald-50 to-white dark:from-stone-900 dark:to-stone-800">
        <div className="p-6 mx-auto max-w-7xl">
          {isEN ? (
            // English Version
            <div className="space-y-16">
              {/* Purpose */}
              <FadeSlideUp>
                <article className="relative">
                  <div className="static top-0 flex items-center justify-center w-10 h-10 mb-5 text-sm font-bold text-white shadow-lg md:absolute md:mb-0 -left-2 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600">
                    1
                  </div>
                  <div className="pl-0 md:pl-16">
                    <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl dark:text-white">
                      Purpose
                    </h2>
                    <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                      To establish and enforce rigorous standards and procedures
                      that unequivocally prevent, identify, and address child
                      sexual abuse materials (CSAM) within Pixelmine Japan.
                    </p>
                  </div>
                  <div className="mt-16 border-t border-gray-200 dark:border-gray-800"></div>
                </article>
              </FadeSlideUp>

              {/* Scope */}
              <FadeSlideUp>
                <article className="relative">
                  <div className="static top-0 flex items-center justify-center w-10 h-10 mb-5 text-sm font-bold text-white shadow-lg md:absolute md:mb-0 -left-2 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600">
                    2
                  </div>
                  <div className="pl-0 md:pl-16">
                    <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl dark:text-white">
                      Scope
                    </h2>
                    <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                      This policy applies to all employees, volunteers,
                      contractors, and stakeholders associated with Pixelmine
                      Japan.
                    </p>
                  </div>
                  <div className="mt-16 border-t border-gray-200 dark:border-gray-800"></div>
                </article>
              </FadeSlideUp>

              {/* Commitment to Child Safety */}
              <FadeSlideUp>
                <article className="relative">
                  <div className="static top-0 flex items-center justify-center w-10 h-10 mb-5 text-sm font-bold text-white shadow-lg md:absolute md:mb-0 -left-2 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600">
                    3
                  </div>
                  <div className="pl-0 md:pl-16">
                    <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl dark:text-white">
                      Commitment to Child Safety
                    </h2>
                    <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                      Pixelmine Japan is firmly committed to the highest
                      standards of child safety and protection. We categorically
                      condemn all forms of child sexual abuse and recognize the
                      urgent necessity of preventing, detecting, and responding
                      to CSAM. This policy embodies our unwavering dedication to
                      safeguarding children from exploitation and abuse.
                    </p>
                  </div>
                  <div className="mt-16 border-t border-gray-200 dark:border-gray-800"></div>
                </article>
              </FadeSlideUp>

              {/* Standards and Procedures */}
              <FadeSlideUp>
                <article className="relative">
                  <div className="static top-0 flex items-center justify-center w-10 h-10 mb-5 text-sm font-bold text-white shadow-lg md:absolute md:mb-0 -left-2 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600">
                    4
                  </div>
                  <div className="pl-0 md:pl-16">
                    <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl dark:text-white">
                      Standards and Procedures
                    </h2>

                    <div className="space-y-6">
                      {/* 1. Zero-Tolerance Policy */}
                      <div>
                        <p className="mb-3 text-lg font-bold text-gray-900 dark:text-white">
                          1. Zero-Tolerance Policy
                        </p>
                        <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                          Pixelmine Japan enforces a strict zero-tolerance
                          policy regarding CSAM. Any involvement in the
                          creation, distribution, or possession of CSAM will
                          lead to immediate disciplinary action, including
                          termination and mandatory reporting to law
                          enforcement.
                        </p>
                      </div>

                      {/* 2. Training and Awareness */}
                      <div>
                        <p className="mb-3 text-lg font-bold text-gray-900 dark:text-white">
                          2. Training and Awareness
                        </p>
                        <ul className="ml-5 space-y-2 text-gray-700 list-disc list-outside dark:text-gray-300">
                          <li className="text-base leading-relaxed">
                            All employees and volunteers are required to undergo
                            mandatory training on recognizing, reporting, and
                            preventing CSAM.
                          </li>
                          <li className="text-base leading-relaxed">
                            We will provide regular workshops and updates to
                            ensure continuous awareness of child safety
                            standards.
                          </li>
                        </ul>
                      </div>

                      {/* 3. Reporting Mechanisms */}
                      <div>
                        <p className="mb-3 text-lg font-bold text-gray-900 dark:text-white">
                          3. Reporting Mechanisms
                        </p>
                        <ul className="ml-5 space-y-2 text-gray-700 list-disc list-outside dark:text-gray-300">
                          <li className="text-base leading-relaxed">
                            Clear and effective procedures for reporting
                            suspected CSAM will be established. All staff
                            members must report any suspicions immediately to
                            the designated authority or department.
                          </li>
                          <li className="text-base leading-relaxed">
                            All reports will be handled with utmost
                            confidentiality and subjected to prompt
                            investigation.
                          </li>
                        </ul>
                      </div>

                      {/* 4. Digital Safety Measures */}
                      <div>
                        <p className="mb-3 text-lg font-bold text-gray-900 dark:text-white">
                          4. Digital Safety Measures
                        </p>
                        <ul className="ml-5 space-y-2 text-gray-700 list-disc list-outside dark:text-gray-300">
                          <li className="text-base leading-relaxed">
                            We will implement state-of-the-art technology
                            solutions to monitor and filter online content,
                            preventing access to CSAM on organizational devices
                            and networks.
                          </li>
                          <li className="text-base leading-relaxed">
                            Regular audits and assessments of digital safety
                            protocols will be conducted to ensure effectiveness.
                          </li>
                        </ul>
                      </div>

                      {/* 5. Support for Victims */}
                      <div>
                        <p className="mb-3 text-lg font-bold text-gray-900 dark:text-white">
                          5. Support for Victims
                        </p>
                        <ul className="ml-5 space-y-2 text-gray-700 list-disc list-outside dark:text-gray-300">
                          <li className="text-base leading-relaxed">
                            We will provide comprehensive resources and support
                            for victims of child sexual abuse, including access
                            to counseling and legal assistance.
                          </li>
                          <li className="text-base leading-relaxed">
                            We are committed to fostering a safe and supportive
                            environment for individuals to come forward with
                            their experiences.
                          </li>
                        </ul>
                      </div>

                      {/* 6. Compliance with Laws */}
                      <div>
                        <p className="mb-3 text-lg font-bold text-gray-900 dark:text-white">
                          6. Compliance with Laws
                        </p>
                        <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                          Pixelmine Japan will strictly adhere to all local,
                          state, and federal laws concerning child protection
                          and the handling of CSAM.
                        </p>
                      </div>

                      {/* 7. Review and Amendments */}
                      <div>
                        <p className="mb-3 text-lg font-bold text-gray-900 dark:text-white">
                          7. Review and Amendments
                        </p>
                        <p className="mb-4 text-base leading-relaxed text-gray-700 dark:text-gray-300">
                          This policy will be reviewed annually and amended as
                          necessary to ensure compliance with legal requirements
                          and the adoption of best practices in child safety.
                        </p>
                        <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                          Pixelmine Japan is resolutely dedicated to creating a
                          safe environment for children and will take all
                          necessary actions to protect them from sexual
                          exploitation and abuse. We will not tolerate any
                          violations of this policy and will act decisively to
                          uphold our commitment to child safety.
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </FadeSlideUp>
            </div>
          ) : (
            // Japanese Version
            <div className="space-y-16">
              {/* 目的 */}
              <FadeSlideUp>
                <article className="relative">
                  <div className="static top-0 flex items-center justify-center w-10 h-10 mb-5 text-sm font-bold text-white shadow-lg md:absolute md:mb-0 -left-2 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600">
                    1
                  </div>
                  <div className="pl-0 md:pl-16">
                    <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl dark:text-white">
                      目的
                    </h2>
                    <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                      Pixelmine Japan 内で児童性的虐待資料（CSAM）を防止、特定、
                      および対応するための厳格な基準と手順を確立し、実施することを目的とします。
                    </p>
                  </div>
                  <div className="mt-16 border-t border-gray-200 dark:border-gray-800"></div>
                </article>
              </FadeSlideUp>

              {/* 適用範囲 */}
              <FadeSlideUp>
                <article className="relative">
                  <div className="static top-0 flex items-center justify-center w-10 h-10 mb-5 text-sm font-bold text-white shadow-lg md:absolute md:mb-0 -left-2 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600">
                    2
                  </div>
                  <div className="pl-0 md:pl-16">
                    <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl dark:text-white">
                      適用範囲
                    </h2>
                    <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                      本ポリシーは、Pixelmine Japan に関係するすべての従業員、
                      ボランティア、契約者、および利害関係者に適用されます。
                    </p>
                  </div>
                  <div className="mt-16 border-t border-gray-200 dark:border-gray-800"></div>
                </article>
              </FadeSlideUp>

              {/* 児童の安全への取り組み */}
              <FadeSlideUp>
                <article className="relative">
                  <div className="static top-0 flex items-center justify-center w-10 h-10 mb-5 text-sm font-bold text-white shadow-lg md:absolute md:mb-0 -left-2 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600">
                    3
                  </div>
                  <div className="pl-0 md:pl-16">
                    <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl dark:text-white">
                      児童の安全への取り組み
                    </h2>
                    <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                      Pixelmine Japan
                      は、児童の安全と保護において最高水準を維持することを
                      固く約束しています。あらゆる形態の児童性的虐待を断固として非難し、
                      CSAM
                      の防止、検出、および対応の重要性を強く認識しています。
                      本ポリシーは、児童を搾取や虐待から守るという当社の揺るぎない
                      決意を体現するものです。
                    </p>
                  </div>
                  <div className="mt-16 border-t border-gray-200 dark:border-gray-800"></div>
                </article>
              </FadeSlideUp>

              {/* 基準および手順 */}
              <FadeSlideUp>
                <article className="relative">
                  <div className="static top-0 flex items-center justify-center w-10 h-10 mb-5 text-sm font-bold text-white shadow-lg md:absolute md:mb-0 -left-2 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600">
                    4
                  </div>
                  <div className="pl-0 md:pl-16">
                    <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl dark:text-white">
                      基準および手順
                    </h2>

                    <div className="space-y-6">
                      {/* 1. ゼロトレランスポリシー */}
                      <div>
                        <p className="mb-3 text-lg font-bold text-gray-900 dark:text-white">
                          1. ゼロトレランスポリシー
                        </p>
                        <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                          Pixelmine Japan は、CSAM
                          に関して厳格なゼロトレランス方針を
                          実施しています。CSAM
                          の作成、配布、または所持に関与した場合は、
                          即時の懲戒処分（解雇を含む）および法執行機関への通報を行います。
                        </p>
                      </div>

                      {/* 2. 研修と意識向上 */}
                      <div>
                        <p className="mb-3 text-lg font-bold text-gray-900 dark:text-white">
                          2. 研修と意識向上
                        </p>
                        <ul className="ml-5 space-y-2 text-gray-700 list-disc list-outside dark:text-gray-300">
                          <li className="text-base leading-relaxed">
                            すべての従業員およびボランティアは、CSAM
                            の認識、報告、
                            防止に関する必須研修を受ける必要があります。
                          </li>
                          <li className="text-base leading-relaxed">
                            定期的にワークショップや最新情報を提供し、児童保護に関する意識を
                            維持・向上させます。
                          </li>
                        </ul>
                      </div>

                      {/* 3. 報告メカニズム */}
                      <div>
                        <p className="mb-3 text-lg font-bold text-gray-900 dark:text-white">
                          3. 報告メカニズム
                        </p>
                        <ul className="ml-5 space-y-2 text-gray-700 list-disc list-outside dark:text-gray-300">
                          <li className="text-base leading-relaxed">
                            CSAM
                            の疑いに関する明確かつ効果的な報告手順を確立します。
                            全従業員は、疑わしい行為を直ちに指定部署または権限者に報告しなければなりません。
                          </li>
                          <li className="text-base leading-relaxed">
                            報告内容は厳重に秘密を保持し、迅速に調査されます。
                          </li>
                        </ul>
                      </div>

                      {/* 4. デジタル安全対策 */}
                      <div>
                        <p className="mb-3 text-lg font-bold text-gray-900 dark:text-white">
                          4. デジタル安全対策
                        </p>
                        <ul className="ml-5 space-y-2 text-gray-700 list-disc list-outside dark:text-gray-300">
                          <li className="text-base leading-relaxed">
                            組織内デバイスおよびネットワークにおいて CSAM
                            へのアクセスを防止するため、
                            最新の技術ソリューションを導入します。
                          </li>
                          <li className="text-base leading-relaxed">
                            デジタル安全対策の有効性を確保するため、定期的に監査と評価を行います。
                          </li>
                        </ul>
                      </div>

                      {/* 5. 被害者への支援 */}
                      <div>
                        <p className="mb-3 text-lg font-bold text-gray-900 dark:text-white">
                          5. 被害者への支援
                        </p>
                        <ul className="ml-5 space-y-2 text-gray-700 list-disc list-outside dark:text-gray-300">
                          <li className="text-base leading-relaxed">
                            児童性的虐待の被害者に対し、カウンセリングや法的支援など
                            包括的なサポートを提供します。
                          </li>
                          <li className="text-base leading-relaxed">
                            被害者が安心して声を上げられる安全で支援的な環境を整備します。
                          </li>
                        </ul>
                      </div>

                      {/* 6. 法令遵守 */}
                      <div>
                        <p className="mb-3 text-lg font-bold text-gray-900 dark:text-white">
                          6. 法令遵守
                        </p>
                        <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                          Pixelmine Japan は、児童保護および CSAM
                          の取扱いに関する
                          すべての地方、州、国の法令を厳格に遵守します。
                        </p>
                      </div>

                      {/* 7. 見直しと改訂 */}
                      <div>
                        <p className="mb-3 text-lg font-bold text-gray-900 dark:text-white">
                          7. 見直しと改訂
                        </p>
                        <p className="mb-4 text-base leading-relaxed text-gray-700 dark:text-gray-300">
                          本ポリシーは年に一度見直しを行い、法的要件および児童保護の
                          最善慣行に適合するよう必要に応じて改訂します。
                        </p>
                        <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                          Pixelmine Japan
                          は、児童にとって安全な環境を確保することに
                          全力を尽くし、性的搾取や虐待から保護するために必要なすべての措置を講じます。
                          本ポリシーへの違反は一切容認せず、児童保護への取り組みを
                          維持するため断固たる行動を取ります。
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </FadeSlideUp>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default ChildSexualAbusePolicy;
