import { useLanguage } from "../context/LanguageContext";
import SEOHelmet from "../ui/SEOHelmet";

function TermsAndConditions() {
  const { language } = useLanguage(); // ✅ added
  return (
    <>
      <SEOHelmet
        title={
          language === "en"
            ? "Terms of Service | Pixelmine Japan OPC"
            : "サービス利用規約 | Pixelmine Japan OPC"
        }
        description={
          language === "en"
            ? "Read the Terms of Service governing your use of Pixelmine's services, including your rights, responsibilities, and legal agreements."
            : "Pixelmineのサービス利用規約をご確認ください。お客様の権利、責任、および法的契約について説明しています。"
        }
        url="https://www.pixelmine.org/terms-of-service"
        image="/social-sharing.jpg"
      />

      <section>
        {/* Hero Section */}
        <div className="pt-[3rem] pb-[3rem] bg-green-50 dark:bg-stone-900">
          <div className="max-w-full px-6 mx-auto lg:max-w-7xl lg:px-8">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-full sm:max-w-[30rem] dark:text-stone-50">
              {language === "en" ? "Terms of Service" : "利用規約"}
            </h1>
            {/* <p className="pt-5 pb-5 max-w-[36rem] text-base text-stone-900 dark:text-stone-50">
              {language === "en"
                ? "These Terms of Service apply to all users of the social networking service Pixelmine provided by Pixelmine Japan Corporation. Please read carefully before using our services."
                : "本利用規約は、ピクセルマインジャパン株式会社が提供するソーシャルネットワーキングサービス「Pixelmine」のすべての利用者に適用されます。サービスをご利用になる前に、必ずお読みください。"}
            </p> */}
          </div>
        </div>

        {/* Terms Sections */}
        <div className="pt-[2rem] pb-[2rem] px-6 mx-auto max-w-full lg:max-w-7xl lg:px-8">
          {language === "en" ? (
            <section className="mb-8">
              <h2 className="mb-4 text-lg font-semibold dark:text-stone-50">
                1. Your Relationship With Us
              </h2>
              <p className="text-base text-stone-900 dark:text-stone-50">
                Welcome to Pixelmine! These Terms of Service (or "Terms") apply
                to all actions of persons ("you" or "User(s)", depending upon
                the context) using the social networking service "Pixelmine"
                provided by Pixelmine Japan Corporation ("we," "us," or "our").
                These Terms of Service constitute an agreement between you and
                us, between Users, between Users and third parties.
              </p>
            </section>
          ) : (
            <section className="mb-8">
              <h2 className="mb-4 text-lg font-semibold dark:text-stone-50">
                1. 当社との関係
              </h2>
              <p className="text-base text-stone-900 dark:text-stone-50">
                Pixelmineへようこそ！本利用規約（以下「本規約」といいます）は、ピクセルマインジャパン株式会社（以下「当社」といいます）が提供するソーシャルネットワーキングサービス「Pixelmine」を利用するすべての者（文脈により「あなた」または「ユーザー」といいます）の行為に適用されます。本利用規約は、あなたと当社、ユーザー間、ユーザーと第三者間の契約を構成します。
              </p>
            </section>
          )}

          {language === "en" ? (
            // ✅  English text
            <section className="mb-8">
              <h2 className="mb-4 text-lg font-semibold dark:text-stone-50">
                2. About Our Services
              </h2>
              <p className="mb-3 text-base text-stone-900 dark:text-stone-50">
                We provide a platform that enables Users to post and receive
                evaluations from other Users across our platform. Users must
                show respect toward other Users, their posts, and their votes
                when utilizing the Services.
              </p>
              <p className="text-base text-stone-900 dark:text-stone-50">
                In addition, We operate the Services according to laws and other
                rules. Each User shall abide by laws and other rules.
              </p>
            </section>
          ) : (
            // ✅ Japanese translation
            <section className="mb-8">
              <h2 className="mb-4 text-lg font-semibold dark:text-stone-50">
                2. サービスについて
              </h2>
              <p className="mb-3 text-base text-stone-900 dark:text-stone-50">
                当社は、ユーザーがプラットフォーム全体で他のユーザーから投稿および評価を受け取ることができるプラットフォームを提供します。ユーザーは、本サービスを利用する際、他のユーザー、その投稿、および投票に対して敬意を示さなければなりません。
              </p>
              <p className="text-base text-stone-900 dark:text-stone-50">
                また、当社は法令その他の規則に従って本サービスを運営します。各ユーザーは法令その他の規則を遵守するものとします。
              </p>
            </section>
          )}

          {language === "en" ? (
            // ✅ Your original English (unchanged)
            <section className="mb-8 ">
              <h2 className="mb-4 text-lg font-semibold dark:text-stone-50">
                3. Our Agreement
              </h2>
              <ol className="text-base list-decimal list-inside text-stone-900 dark:text-stone-50">
                <li>
                  These Terms set forth the conditions for the use of this
                  Service. In order to use the Services, you need to agree to
                  these Terms of Use.
                </li>
                <li>
                  We will deem that you have agreed to these Terms of Use by
                  actually using the Services.
                </li>
              </ol>
            </section>
          ) : (
            // ✅ Japanese translation (no layout or class changes)
            <section className="mb-8 ">
              <h2 className="mb-4 text-lg font-semibold dark:text-stone-50">
                3. 本規約について
              </h2>
              <ol className="text-base list-decimal list-inside text-stone-900 dark:text-stone-50">
                <li>
                  本規約は、本サービスの利用条件を定めるものです。本サービスを利用するためには、本利用規約に同意していただく必要があります。
                </li>
                <li>
                  実際に本サービスを利用することにより、本利用規約に同意したものとみなします。
                </li>
              </ol>
            </section>
          )}

          {language === "en" ? (
            // ✅ Your original English content — unchanged
            <section className="mb-8">
              <h2 className="mb-4 text-lg font-semibold dark:text-stone-50">
                4. Accepting the Terms
              </h2>
              <ol className="text-base list-decimal list-inside text-stone-900 dark:text-stone-50">
                <li>
                  In this service, we may set forth the terms of use besides
                  these Terms as the case may be. Notwithstanding any name,
                  these terms of use may constitute a part of these Terms.
                </li>
                <li>
                  In the event of a discrepancy between (any conflict between)
                  the provisions of these Terms and other terms of use, the
                  other terms of use shall take precedence.
                </li>
              </ol>
            </section>
          ) : (
            // ✅ Japanese translation version
            <section className="mb-8">
              <h2 className="mb-4 text-lg font-semibold dark:text-stone-50">
                4. 本規約の承諾
              </h2>
              <ol className="text-base list-decimal list-inside text-stone-900 dark:text-stone-50">
                <li>
                  本サービスにおいて、当社は場合により本規約以外の利用規約を定めることがあります。名称の如何を問わず、これらの利用規約は本規約の一部を構成することがあります。
                </li>
                <li>
                  本規約の規定と他の利用規約との間に齟齬（矛盾）がある場合は、他の利用規約が優先されるものとします。
                </li>
              </ol>
            </section>
          )}

          {language === "en" ? (
            // ✅ Original English version — untouched
            <section className="mb-8">
              <h2 className="mb-4 text-lg font-semibold dark:text-stone-50">
                5. Changes to the Terms
              </h2>
              <ol className="text-base list-decimal list-inside text-stone-900 dark:text-stone-50">
                <li>
                  We amend these Terms at any time and for any reason, based on
                  our discretion and judgment.
                </li>
                <li>
                  Except as otherwise provided by us, the new Terms shall take
                  effect at the time it is displayed on the service. Your
                  continued access or use of the Services after the date of the
                  new Terms constitutes your acceptance of the new Terms.
                </li>
              </ol>
            </section>
          ) : (
            // ✅ Japanese translation
            <section className="mb-8">
              <h2 className="mb-4 text-lg font-semibold dark:text-stone-50">
                5. 本規約の変更
              </h2>
              <ol className="text-base list-decimal list-inside text-stone-900 dark:text-stone-50">
                <li>
                  当社は、当社の裁量および判断により、いつでも、いかなる理由でも本規約を改定することができます。
                </li>
                <li>
                  当社が別段の定めをする場合を除き、新しい規約は本サービス上に表示された時点で効力を生じるものとします。新しい規約の日付以降も本サービスへのアクセスまたは利用を継続することにより、新しい規約に同意したものとみなします。
                </li>
              </ol>
            </section>
          )}

          {language === "en" ? (
            // ✅ English version
            <section className="mb-8">
              <h2 className="mb-4 text-lg font-semibold dark:text-stone-50">
                6. Who can use Pixelmine
              </h2>
              <ol className="text-base list-decimal list-inside text-stone-900 dark:text-stone-50">
                <li>
                  Entities, other organizations and a natural person can use our
                  services, provided.
                </li>
                <li>
                  A minor or any user who is restricted from forming a binding
                  contract with us and is not fully able to legally competent to
                  agree to these Terms cannot use our services.
                </li>
              </ol>
            </section>
          ) : (
            // ✅ Japanese translation
            <section className="mb-8">
              <h2 className="mb-4 text-lg font-semibold dark:text-stone-50">
                6. Pixelmineを利用できる方
              </h2>
              <ol className="text-base list-decimal list-inside text-stone-900 dark:text-stone-50">
                <li>
                  法人、その他の団体および自然人は、本サービスを利用することができます。
                </li>
                <li>
                  未成年者、または当社との拘束力のある契約を締結することが制限されており、本規約に同意するための法的能力を完全には有していない利用者は、本サービスを利用することができません。
                </li>
              </ol>
            </section>
          )}

          {language === "en" ? (
            // ✅ English version
            <section className="mb-8">
              <h2 className="mb-4 text-lg font-semibold dark:text-stone-50">
                7. Your Account with Us (Request for account creation)
              </h2>
              <ol className="text-base list-decimal list-inside text-stone-900 dark:text-stone-50">
                <li>
                  If you wish to hold an account, you need to agree to these
                  Terms and apply so according to the method designated by us.
                  At this time, only persons designated by us and persons
                  invited by our designees may apply.
                </li>
                <li>
                  In response to the application in the preceding paragraph, we
                  grant a user an account when we approve the application and
                  notify the applicant.
                </li>
                <li>
                  Each user can create only one account (your own). A single
                  user (もしくは individual) cannot hold multiple accounts, nor
                  can multiple users or organizations share and hold a single
                  account.
                </li>
                <li>
                  If we determine that any of the following items apply, we do
                  not approve of granting an account.
                  <ul className="mt-2 ml-6 list-disc">
                    <li>
                      If the applicant submits an application by a method other
                      than that specified in paragraph 1.
                    </li>
                    <li>
                      If the applicant had failed to comply with any of the
                      provisions of these Terms or any other terms of use, or if
                      we suspect these.
                    </li>
                    <li>In the event that we think it is inappropriate.</li>
                  </ul>
                </li>
              </ol>
            </section>
          ) : (
            // ✅ Japanese translation
            <section className="mb-8">
              <h2 className="mb-4 text-lg font-semibold dark:text-stone-50">
                7. 当社とのアカウント（アカウント作成の申請）
              </h2>
              <ol className="text-base list-decimal list-inside text-stone-900 dark:text-stone-50">
                <li>
                  アカウントを保有することを希望する場合、本規約に同意し、当社が指定する方法に従って申請する必要があります。この際、当社が指定する者および当社の指定者から招待された者のみが申請することができます。
                </li>
                <li>
                  前項の申請に対し、当社が承認し申請者に通知した時点で、利用者にアカウントが付与されます。
                </li>
                <li>
                  各利用者は1つのアカウント（自己のもの）のみを作成できます。単一の利用者（もしくは個人）が複数のアカウントを保有すること、また複数の利用者または組織が1つのアカウントを共有して保有することはできません。
                </li>
                <li>
                  以下のいずれかに該当すると当社が判断した場合、当社はアカウントの付与を承認しません。
                  <ul className="mt-2 ml-6 list-disc">
                    <li>
                      申請者が第1項に定める方法以外の方法で申請を行った場合
                    </li>
                    <li>
                      申請者が本規約その他の利用規約のいずれかの規定に違反したことがある場合、または当社がそのように疑う場合
                    </li>
                    <li>当社が不適切であると判断した場合</li>
                  </ul>
                </li>
              </ol>
            </section>
          )}

          {language === "en" ? (
            // ✅ English version
            <section className="mb-8">
              <h2 className="mb-4 text-lg font-semibold dark:text-stone-50">
                8. Request for account deletion
              </h2>
              <ol className="text-base list-decimal list-inside text-stone-900 dark:text-stone-50">
                <li>
                  If you wish to delete an account, you need to submit a request
                  for account deletion to us according to the method designated
                  by us.
                </li>
                <li>
                  In response to the application in the preceding paragraph, the
                  applicant's (user) account will be deleted when we approve the
                  application and notify the applicant.
                </li>
                <li>
                  The deletion of an account does not result in the removal of
                  posts, votes, or other actions performed by the user.
                </li>
              </ol>
            </section>
          ) : (
            // ✅ Japanese translation
            <section className="mb-8">
              <h2 className="mb-4 text-lg font-semibold dark:text-stone-50">
                8. アカウント削除の申請
              </h2>
              <ol className="text-base list-decimal list-inside text-stone-900 dark:text-stone-50">
                <li>
                  アカウントの削除を希望する場合、当社が指定する方法に従ってアカウント削除の申請を行う必要があります。
                </li>
                <li>
                  前項の申請に対し、当社が承認し申請者に通知した時点で、申請者（利用者）のアカウントが削除されます。
                </li>
                <li>
                  アカウントの削除により、利用者が行った投稿、投票、その他の行為が削除されることはありません。
                </li>
              </ol>
            </section>
          )}

          {language === "en" ? (
            // ✅ English version
            <section className="mb-8">
              <h2 className="mb-4 text-lg font-semibold dark:text-stone-50">
                9. Control of email address and password registration
              </h2>
              <ol className="text-base list-decimal list-inside text-stone-900 dark:text-stone-50">
                <li>
                  An account holder is required to register an email address
                  that endures reliable communication.
                </li>
                <li>
                  An account holder should not register an email address that is
                  shared with or accessible by third parties.
                </li>
                <li>
                  In the event that the registered email address does not meet
                  the conditions specified in the previous paragraph 2, the
                  account holder must register a new email address that meets
                  those conditions as their registered email address.
                </li>
                <li>
                  If we reach out to the registered email address and do not
                  receive a response within a week, we may consider that the
                  email address does not meet the conditions specified in the
                  paragraph 1 and 2, and we may take actions such as account
                  deletion.
                </li>
                <li>
                  An account holder must strictly manage a registered email
                  address, your password and QR-code under its own
                  responsibility so that it will not be abused.
                </li>
                <li>
                  Regarding any actions taken on our service under a specific
                  account, we shall deem them to have been performed by the
                  account holder. We shall not be liable to you for any damages
                  arising from the use of the registered email address or
                  password by a third party, unless there is willful misconduct
                  or gross negligence on our part.
                </li>
                <li>
                  An account holder must preservation QR code for them login.
                  Therefore an account holder could not login to them account If
                  the QR code was lost.
                </li>
              </ol>
            </section>
          ) : (
            // ✅ Japanese translation
            <section className="mb-8">
              <h2 className="mb-4 text-lg font-semibold dark:text-stone-50">
                9. メールアドレスおよびパスワード登録の管理
              </h2>
              <ol className="text-base list-decimal list-inside text-stone-900 dark:text-stone-50">
                <li>
                  アカウント保有者は、信頼性のある連絡が可能なメールアドレスを登録する必要があります。
                </li>
                <li>
                  アカウント保有者は、第三者と共有されている、または第三者がアクセス可能なメールアドレスを登録してはなりません。
                </li>
                <li>
                  登録されたメールアドレスが前項第2号に定める条件を満たしていない場合、アカウント保有者はそれらの条件を満たす新しいメールアドレスを登録メールアドレスとして登録しなければなりません。
                </li>
                <li>
                  当社が登録メールアドレスに連絡を行い、1週間以内に返信がない場合、当社は当該メールアドレスが第1項および第2項に定める条件を満たしていないとみなし、アカウント削除などの措置を講じることがあります。
                </li>
                <li>
                  アカウント保有者は、登録メールアドレス、パスワード、QRコードが悪用されないよう、自己の責任において厳重に管理しなければなりません。
                </li>
                <li>
                  特定のアカウントにて本サービス上で行われた一切の行為については、アカウント保有者が行ったものとみなします。当社に故意または重大な過失がない限り、第三者による登録メールアドレスまたはパスワードの使用により生じた損害について、当社は責任を負いません。
                </li>
                <li>
                  アカウント保有者はログインのためにQRコードを保存しなければなりません。したがって、QRコードを紛失した場合、アカウント保有者は自分のアカウントにログインできなくなります。
                </li>
              </ol>
            </section>
          )}

          {language === "en" ? (
            // ✅ English version
            <section className="mb-8">
              <h2 className="mb-4 text-lg font-semibold dark:text-stone-50">
                10. Usage Environment
              </h2>
              <ol className="text-base list-decimal list-inside text-stone-900 dark:text-stone-50">
                <li>
                  Users are responsible for preparing the necessary devices,
                  software, communication methods, and other environments
                  required to use this service, at their own expense. We shall
                  have no involvement in the user's usage environment and shall
                  bear no responsibility for it.
                </li>
                <li>
                  Users are required to implement security measures to prevent
                  computer virus infections, unauthorized access, and
                  information leaks.
                </li>
              </ol>
            </section>
          ) : (
            // ✅ Japanese translation
            <section className="mb-8">
              <h2 className="mb-4 text-lg font-semibold dark:text-stone-50">
                10. 利用環境
              </h2>
              <ol className="text-base list-decimal list-inside text-stone-900 dark:text-stone-50">
                <li>
                  利用者は、本サービスの利用に必要な機器、ソフトウェア、通信手段、その他の環境を自己の費用と責任において準備するものとします。当社は利用者の利用環境に関与せず、これについて一切の責任を負いません。
                </li>
                <li>
                  利用者は、コンピュータウイルス感染、不正アクセス、情報漏洩を防止するためのセキュリティ対策を講じる必要があります。
                </li>
              </ol>
            </section>
          )}

          {language === "en" ? (
            // ✅ English version
            <section className="mb-8">
              <h2 className="mb-4 text-lg font-semibold dark:text-stone-50">
                11. User's Responsibility
              </h2>
              <ol className="text-base list-decimal list-inside text-stone-900 dark:text-stone-50">
                <li>
                  Users are responsible for using our service at their own risk
                  and are fully accountable for all actions taken and their
                  outcomes within the service.
                </li>
                <li>
                  Users are responsible for the information they post and the
                  votes they cast while using our service. We hold no liability
                  for these actions.
                </li>
                <li>
                  In the event that a user violates the honor, emotional
                  well-being, copyright, privacy rights, or any other rights or
                  legal interests of others, or posts harmful or illegal
                  information, the user must address the issue at their own
                  responsibility and expense, and we will bear no liability.
                </li>
              </ol>
            </section>
          ) : (
            // ✅ Japanese translation
            <section className="mb-8">
              <h2 className="mb-4 text-lg font-semibold dark:text-stone-50">
                11. 利用者の責任
              </h2>
              <ol className="text-base list-decimal list-inside text-stone-900 dark:text-stone-50">
                <li>
                  利用者は、自己の責任において本サービスを利用するものとし、本サービス内で行った一切の行為およびその結果について全責任を負います。
                </li>
                <li>
                  利用者は、本サービスを利用して投稿した情報および行った投票について責任を負います。当社はこれらの行為について一切の責任を負いません。
                </li>
                <li>
                  利用者が他者の名誉、感情、著作権、プライバシー権、その他の権利または法的利益を侵害した場合、または有害な情報もしくは違法な情報を投稿した場合、利用者は自己の責任と費用においてこれに対処しなければならず、当社は一切の責任を負いません。
                </li>
              </ol>
            </section>
          )}

          {language === "en" ? (
            // ✅ English version
            <section className="mb-8">
              <h2 className="mb-4 text-lg font-semibold dark:text-stone-50">
                12. Contribution to Our Service
              </h2>
              <p className="mb-3 text-base text-stone-900 dark:text-stone-50">
                1. In the event that a User engages in actions such as posting
                and voting that contribute to the Service, the User can receive
                compensation based on the evaluation of their contributions,
                derived from a portion of the advertising revenue received by us
                from the operation of the Service.
              </p>
              <p className="mb-3 text-base text-stone-900 dark:text-stone-50">
                We intend to implement a system for users to receive
                compensation in the future.
              </p>
              <p className="text-base text-stone-900 dark:text-stone-50">
                2. Compensation outlined in the previous section will be
                received in a manner specified by us, and users must adhere to
                the procedures established by us.
              </p>
            </section>
          ) : (
            // ✅ Japanese translation
            <section className="mb-8">
              <h2 className="mb-4 text-lg font-semibold dark:text-stone-50">
                12. 本サービスへの貢献
              </h2>
              <p className="mb-3 text-base text-stone-900 dark:text-stone-50">
                1.
                利用者が投稿や投票など本サービスに貢献する行為を行った場合、当社が本サービスの運営から得た広告収入の一部から、その貢献の評価に基づく報酬を受け取ることができます。
              </p>
              <p className="mb-3 text-base text-stone-900 dark:text-stone-50">
                今後、利用者が報酬を受け取るための仕組みを実装する予定です。
              </p>
              <p className="text-base text-stone-900 dark:text-stone-50">
                2.
                前項に定める報酬は、当社が指定する方法で受け取るものとし、利用者は当社が定める手続きに従わなければなりません。
              </p>
            </section>
          )}

          {language === "en" ? (
            // ✅ English version
            <section className="mb-8">
              <h2 className="mb-4 text-lg font-semibold dark:text-stone-50">
                13. Posted Content Storage
              </h2>
              <ol className="text-base list-decimal list-inside text-stone-900 dark:text-stone-50">
                <li>
                  We do not assure that the content posted on our service will
                  be preserved. Posts may be demoted or hidden based on votes
                  from users. If users find it necessary to save the information
                  posted on our service, they shall do so at their own
                  responsibility.
                </li>
                <li>
                  Even if an account is deleted or canceled, we do not assure
                  that the posts and votes made by the account holder will be
                  rendered invisible. Additionally, we may continue to utilize
                  the data associated with posts and votes made by the account
                  holder regardless of the account's status.
                </li>
              </ol>
            </section>
          ) : (
            // ✅ Japanese translation
            <section className="mb-8">
              <h2 className="mb-4 text-lg font-semibold dark:text-stone-50">
                13. 投稿コンテンツの保存
              </h2>
              <ol className="text-base list-decimal list-inside text-stone-900 dark:text-stone-50">
                <li>
                  当社は、本サービス上に投稿されたコンテンツが保存されることを保証しません。投稿は、ユーザーからの投票に基づいて降格または非表示になることがあります。利用者が本サービス上に投稿された情報を保存する必要があると判断した場合は、自己の責任において保存するものとします。
                </li>
                <li>
                  アカウントが削除または取り消された場合でも、当社はアカウント保有者が行った投稿および投票が非表示になることを保証しません。また、当社はアカウントの状態に関わらず、アカウント保有者が行った投稿および投票に関連するデータを引き続き利用することがあります。
                </li>
              </ol>
            </section>
          )}

          {language === "en" ? (
            // ✅ English version
            <section className="mb-8">
              <h2 className="mb-4 text-lg font-semibold dark:text-stone-50">
                14. Prohibited Actions
              </h2>
              <p className="mb-3 text-base text-stone-900 dark:text-stone-50">
                Users are prohibited from performing the following actions while
                using this service. In the event that we determine a violation
                of prohibited activities, or a potential violation, we may
                implement measures such as account cancellation, restrictions on
                service use, or other unfavorable actions.
              </p>
              <ol className="text-base list-decimal list-inside text-stone-900 dark:text-stone-50">
                <li>
                  Actions that infringe upon the rights or legal interests of
                  our company or others, or actions that may pose a risk of such
                  infringement.
                </li>
                <li>
                  Actions that discriminate against or defame our company,
                  users, or third parties, promote discrimination against
                  others, or damage the honor or reputation of others.
                </li>
                <li>
                  Using this service while pretending to be someone else or
                  misleadingly asserting an affiliation or partnership with
                  another person or organization.
                </li>
                <li>
                  Actions that are linked to or may potentially lead to crimes
                  such as fraud, the abuse of controlled substances, child
                  trafficking, and the illegal sale of bank accounts and mobile
                  phones.
                </li>
                <li>
                  Any posting, displaying, selling, or involvement in
                  facilitating, encouraging, or assisting in the distribution of
                  information deemed obscene, involving child pornography, or
                  child abuse is prohibited.
                </li>
                <li>
                  Any use of our service for the intent of sexual activities,
                  lewd acts, or meeting individuals without prior familiarity is
                  forbidden.
                </li>
                <li>
                  Any act that entices or promotes youth to run away from home
                  is prohibited.
                </li>
                <li>
                  Illegal gambling, illegal activities (such as the transfer of
                  firearms, manufacturing of explosives, provision of child
                  pornography, forgery of public documents, murder, threats,
                  etc.), solicitation, contracting, facilitation, instigation,
                  or assistance of suicide is strictly forbidden.
                </li>
                <li>
                  Any posting or displaying information that is difficult to
                  verify for its truthfulness or contains falsehoods is
                  prohibited.
                </li>
                <li>
                  Any posting or display of spam messages or spam content is
                  prohibited.
                </li>
                <li>
                  Any posting or display of information that includes any other
                  content deemed inappropriate by us is prohibited.
                </li>
                <li>
                  Sending or posting harmful computer programs, such as viruses,
                  is prohibited.
                </li>
                <li>
                  Any actions that impose a burden on our servers or those of
                  others, interfere with the operation of this service and its
                  network or systems, or that may potentially lead to such
                  interference are prohibited.
                </li>
                <li>
                  Any actions that violate any provision of these Terms are
                  prohibited.
                </li>
                <li>
                  Any other actions that we consider inappropriate are
                  prohibited.
                </li>
              </ol>
            </section>
          ) : (
            // ✅ Japanese translation
            <section className="mb-8">
              <h2 className="mb-4 text-lg font-semibold dark:text-stone-50">
                14. 禁止事項
              </h2>
              <p className="mb-3 text-base text-stone-900 dark:text-stone-50">
                利用者は、本サービスの利用にあたり、以下の行為を行うことを禁止します。当社が禁止行為への違反、またはその可能性があると判断した場合、アカウントの取り消し、サービス利用の制限、その他の不利益な措置を実施することがあります。
              </p>
              <ol className="text-base list-decimal list-inside text-stone-900 dark:text-stone-50">
                <li>
                  当社または他者の権利もしくは法的利益を侵害する行為、またはそのおそれのある行為
                </li>
                <li>
                  当社、ユーザー、または第三者を差別もしくは誹謗中傷する行為、他者に対する差別を助長する行為、または他者の名誉や評判を傷つける行為
                </li>
                <li>
                  他人になりすまして本サービスを利用する行為、または他の個人もしくは組織との提携や協力関係を誤解させる行為
                </li>
                <li>
                  詐欺、規制薬物の濫用、児童の人身売買、銀行口座や携帯電話の不正販売などの犯罪に関連する行為、またはそれらにつながる可能性のある行為
                </li>
                <li>
                  わいせつ、児童ポルノ、児童虐待に関する情報の投稿、表示、販売、またはその配布を促進、奨励、援助する行為
                </li>
                <li>
                  性的行為、わいせつな行為、または事前に面識のない個人との出会いを目的として本サービスを利用する行為
                </li>
                <li>青少年に家出を誘引または助長する行為</li>
                <li>
                  違法賭博、違法行為（銃器の譲渡、爆発物の製造、児童ポルノの提供、公文書偽造、殺人、脅迫など）、自殺の勧誘、契約、促進、教唆、または援助
                </li>
                <li>
                  真実性の検証が困難な情報または虚偽を含む情報を投稿または表示する行為
                </li>
                <li>
                  スパムメッセージまたはスパムコンテンツを投稿または表示する行為
                </li>
                <li>
                  当社が不適切と判断するその他のコンテンツを含む情報を投稿または表示する行為
                </li>
                <li>
                  ウイルスなどの有害なコンピュータプログラムを送信または投稿する行為
                </li>
                <li>
                  当社または他者のサーバーに負担をかける行為、本サービスおよびそのネットワークまたはシステムの運営を妨害する行為、またはそれらにつながる可能性のある行為
                </li>
                <li>本規約のいずれかの規定に違反する行為</li>
                <li>当社が不適切と判断するその他の行為</li>
              </ol>
            </section>
          )}

          {language === "en" ? (
            // ✅ English version
            <section className="mb-8">
              <h2 className="mb-4 text-lg font-semibold dark:text-stone-50">
                15. Changes to the Services
              </h2>
              <p className="text-base text-stone-900 dark:text-stone-50">
                We reserve the right to add, change, suspend, or terminate the
                services at any time for any reason.
              </p>
            </section>
          ) : (
            // ✅ Japanese translation
            <section className="mb-8">
              <h2 className="mb-4 text-lg font-semibold dark:text-stone-50">
                15. サービスの変更
              </h2>
              <p className="text-base text-stone-900 dark:text-stone-50">
                当社は、いかなる理由でも、いつでも本サービスの追加、変更、中断、終了を行う権利を留保します。
              </p>
            </section>
          )}

          {language === "en" ? (
            // ✅ English version
            <section className="mb-8">
              <h2 className="mb-4 text-lg font-semibold dark:text-stone-50">
                16. Service fees
              </h2>
              <ol className="text-base list-decimal list-inside text-stone-900 dark:text-stone-50">
                <li>
                  The use of the Service shall be provided free of charge.
                </li>
                <li>
                  We may set forth paid services, paid options, and other
                  related offerings. In such cases, the service fees, payment
                  methods, and other related matters shall be determined
                  separately by us.
                </li>
              </ol>
            </section>
          ) : (
            // ✅ Japanese translation
            <section className="mb-8">
              <h2 className="mb-4 text-lg font-semibold dark:text-stone-50">
                16. サービス利用料
              </h2>
              <ol className="text-base list-decimal list-inside text-stone-900 dark:text-stone-50">
                <li>本サービスの利用は無料で提供されます。</li>
                <li>
                  当社は、有料サービス、有料オプション、その他関連する提供を定めることがあります。その場合、サービス利用料、支払方法、その他関連事項は、当社が別途定めるものとします。
                </li>
              </ol>
            </section>
          )}

          {language === "en" ? (
            // ✅ English version
            <section className="mb-8">
              <h2 className="mb-4 text-lg font-semibold dark:text-stone-50">
                17. Rights related to content
              </h2>
              <ol className="text-base list-decimal list-inside text-stone-900 dark:text-stone-50">
                <li>
                  Except as otherwise provided by us, nothing is changing about
                  your rights in your content. We do not claim ownership of your
                  content that you post on or through the Service.
                </li>
                <li>
                  We may use, free of charge, the information posted on our
                  service to the extent necessary for the smooth operation of
                  the service, as well as for the development, improvement, and
                  maintenance of our systems.
                </li>
                <li>
                  When using the information in accordance with the preceding
                  paragraph, we may omit parts of the information or the display
                  of names.
                </li>
                <li>
                  In the event that we entrust the processing of personal
                  information to an external party, we will select an
                  appropriate contractor, enter into a contract regarding the
                  protection of personal information with the contractor, and
                  conduct necessary and appropriate supervision of the
                  contractor.
                </li>
                <li>
                  In the event that we receive a request from a user for
                  disclosure, correction, cessation of use, deletion, or
                  suspension of provision to third parties regarding their
                  personal information, we will respond appropriately and
                  promptly in accordance with the Act on the Protection of
                  Personal Information.
                </li>
              </ol>
            </section>
          ) : (
            // ✅ Japanese translation
            <section className="mb-8">
              <h2 className="mb-4 text-lg font-semibold dark:text-stone-50">
                17. コンテンツに関する権利
              </h2>
              <ol className="text-base list-decimal list-inside text-stone-900 dark:text-stone-50">
                <li>
                  当社が別途定める場合を除き、お客様のコンテンツに関するお客様の権利に変更はありません。当社は、お客様が本サービス上または本サービスを通じて投稿したコンテンツの所有権を主張しません。
                </li>
                <li>
                  当社は、本サービス上に投稿された情報を、本サービスの円滑な運営、ならびに当社のシステムの開発、改善、保守に必要な範囲で無償で利用することができます。
                </li>
                <li>
                  前項に従って情報を利用する場合、当社は情報の一部または氏名の表示を省略することがあります。
                </li>
                <li>
                  当社が個人情報の処理を外部に委託する場合、当社は適切な委託先を選定し、個人情報の保護に関する契約を委託先と締結し、委託先に対して必要かつ適切な監督を行います。
                </li>
                <li>
                  当社が利用者から個人情報の開示、訂正、利用停止、削除、または第三者への提供の停止に関する請求を受けた場合、当社は個人情報の保護に関する法律に従い、適切かつ迅速に対応します。
                </li>
              </ol>
            </section>
          )}

          {language === "en" ? (
            // ✅ English version
            <section className="mb-8">
              <h2 className="mb-4 text-lg font-semibold dark:text-stone-50">
                18. Exclusion of organized crime groups
              </h2>
              <p className="mb-3 text-base text-stone-900 dark:text-stone-50">
                The user shall warrant the following to our company.
              </p>
              <ol className="text-base list-decimal list-inside text-stone-900 dark:text-stone-50">
                <li>
                  The user warrants that they are not and have not been within
                  the last five years a member of an organized crime group, a
                  member of a designated organized crime group, a quasi-member
                  of an organized crime group, a company affiliated with an
                  organized crime group, a corporate extortionist, an individual
                  claiming to represent a social movement, a violent group with
                  special knowledge, or any other person equivalent to these
                  (hereinafter collectively referred to as 'antisocial forces').
                </li>
                <li>
                  The user warrants that they do not have a relationship in
                  which antisocial forces are recognized as effectively
                  controlling or being involved in the management.
                </li>
                <li>
                  The user warrants that they are not utilizing antisocial
                  forces for the purpose of obtaining unlawful benefits for
                  themselves or a third party, or for the purpose of causing
                  damage to a third party.
                </li>
                <li>
                  The user warrants that they do not have any relationship
                  involving the provision of funds or other benefits to
                  antisocial forces or any other involvement.
                </li>
              </ol>
            </section>
          ) : (
            // ✅ Japanese translation
            <section className="mb-8">
              <h2 className="mb-4 text-lg font-semibold dark:text-stone-50">
                18. 反社会的勢力の排除
              </h2>
              <p className="mb-3 text-base text-stone-900 dark:text-stone-50">
                利用者は、当社に対し以下の事項を表明し保証するものとします。
              </p>
              <ol className="text-base list-decimal list-inside text-stone-900 dark:text-stone-50">
                <li>
                  利用者は、現在および過去5年間において、暴力団、暴力団員、指定暴力団員、暴力団準構成員、暴力団関係企業、総会屋、社会運動等標ぼうゴロ、特殊知能暴力集団、またはこれらに準ずる者（以下総称して「反社会的勢力」といいます）のいずれでもなく、またいずれでもなかったことを表明し保証します。
                </li>
                <li>
                  利用者は、反社会的勢力が経営を実質的に支配し、または経営に関与していると認められる関係を有していないことを表明し保証します。
                </li>
                <li>
                  利用者は、自己または第三者の不法な利益を得る目的、もしくは第三者に損害を与える目的で、反社会的勢力を利用していないことを表明し保証します。
                </li>
                <li>
                  利用者は、反社会的勢力に対する資金その他の利益の提供、その他の関与を行っていないことを表明し保証します。
                </li>
              </ol>
            </section>
          )}

          {language === "en" ? (
            // ✅ English version
            <section className="mb-8">
              <h2 className="mb-4 text-lg font-semibold dark:text-stone-50">
                19. Disclaimer
              </h2>
              <ol className="text-base list-decimal list-inside text-stone-900 dark:text-stone-50">
                <li>
                  We do not engage in users' communications or activities. In
                  the event of a dispute between users or between a user and a
                  third party, it shall be resolved between the parties
                  involved, and we shall not be held responsible.
                </li>
                <li>
                  We shall not be liable for any damages arising from the
                  addition, modification, interruption, or termination of the
                  content of this service. This also applies in the event of
                  decreased display speed or disruptions caused by excessive
                  access or other unforeseen factors.
                </li>
                <li>
                  We are not obligated to monitor or store the information
                  posted on this service. However, at our sole discretion and
                  judgment, we may view, store, and disclose the information
                  posted on this service to third parties (hereinafter referred
                  to as 'viewing, etc.').
                </li>
                <li>
                  We shall not be responsible for the legality, morality,
                  reliability, or accuracy of the information posted on this
                  service.
                </li>
                <li>
                  If we determine that any acts in violation of these Terms or
                  other terms and conditions of use have occurred or are likely
                  to occur, we may take all necessary measures, including the
                  deletion of the user's account or restrictions on the use of
                  our service. We are not obligated to disclose the reasons for
                  such measures and shall not be liable for any damages arising
                  from them.
                </li>
                <li>
                  In the event that these Terms and other terms and conditions
                  of use fall under consumer contracts as defined by the
                  Consumer Contract Act, the provisions that completely exempt
                  us from liability for damages shall not apply. In such cases,
                  if the damages incurred by the user are based on our breach of
                  contract or tort and if there is intent or gross negligence on
                  our part, we shall be liable for damages up to the amount
                  directly suffered by the user.
                </li>
              </ol>
            </section>
          ) : (
            // ✅ Japanese translation
            <section className="mb-8">
              <h2 className="mb-4 text-lg font-semibold dark:text-stone-50">
                19. 免責事項
              </h2>
              <ol className="text-base list-decimal list-inside text-stone-900 dark:text-stone-50">
                <li>
                  当社は、ユーザー間の通信または活動には関与しません。ユーザー間またはユーザーと第三者との間で紛争が生じた場合は、当事者間で解決するものとし、当社は一切の責任を負いません。
                </li>
                <li>
                  当社は、本サービスの内容の追加、変更、中断、終了により生じた損害について責任を負いません。また、過剰なアクセスやその他の予期しない要因による表示速度の低下や障害が発生した場合も同様とします。
                </li>
                <li>
                  当社は、本サービス上に投稿された情報を監視または保存する義務を負いません。ただし、当社の独自の裁量および判断により、本サービス上に投稿された情報を閲覧、保存、第三者に開示（以下「閲覧等」といいます）することがあります。
                </li>
                <li>
                  当社は、本サービス上に投稿された情報の合法性、道徳性、信頼性、正確性について責任を負いません。
                </li>
                <li>
                  当社が、本規約その他の利用条件に違反する行為が発生した、または発生する可能性があると判断した場合、ユーザーのアカウントの削除または本サービスの利用制限を含む、必要なすべての措置を講じることができます。当社はこれらの措置の理由を開示する義務を負わず、これらにより生じた損害について責任を負いません。
                </li>
                <li>
                  本規約およびその他の利用条件が消費者契約法に定める消費者契約に該当する場合、当社の損害賠償責任を完全に免除する規定は適用されません。この場合、ユーザーが被った損害が当社の契約違反または不法行為に基づき、当社に故意または重大な過失がある場合に限り、当社はユーザーが直接被った金額の範囲内で損害賠償責任を負うものとします。
                </li>
              </ol>
            </section>
          )}

          {language === "en" ? (
            // ✅ English (unchanged)
            <section className="mb-8">
              <h2 className="mb-4 text-lg font-semibold dark:text-stone-50">
                20. Validity of these Terms and other terms and conditions of
                use
              </h2>
              <ol className="text-base list-decimal list-inside text-stone-900 dark:text-stone-50">
                <li>
                  Even if any provision of these Terms and other terms and
                  conditions of use is deemed invalid based on laws and
                  regulations, the remaining provisions of these Terms and other
                  terms and conditions of use shall remain valid.
                </li>
                <li>
                  Even if all or part of these Terms and other terms and
                  conditions of use are deemed invalid or canceled in relation
                  to a specific user, they shall remain valid in relation to
                  other users.
                </li>
              </ol>
            </section>
          ) : (
            // ✅ Japanese translation
            <section className="mb-8">
              <h2 className="mb-4 text-lg font-semibold dark:text-stone-50">
                20. 本規約およびその他の利用条件の有効性
              </h2>
              <ol className="text-base list-decimal list-inside text-stone-900 dark:text-stone-50">
                <li>
                  本規約およびその他の利用条件のいずれかの規定が法令等に基づき無効とされた場合でも、本規約およびその他の利用条件の残りの規定は引き続き有効とします。
                </li>
                <li>
                  本規約およびその他の利用条件の全部または一部が特定のユーザーに関して無効または取り消されたとみなされた場合でも、他のユーザーに対しては引き続き有効とします。
                </li>
              </ol>
            </section>
          )}

          {language === "en" ? (
            // ✅ English (unchanged)
            <section className="mb-8">
              <h2 className="mb-4 text-lg font-semibold dark:text-stone-50">
                21. Governing law and jurisdiction
              </h2>
              <ol className="text-base list-decimal list-inside text-stone-900 dark:text-stone-50">
                <li>
                  The Japanese version of these Terms of Use shall be the
                  official text, and the establishment, coming into force, and
                  interpretation of these Terms of Use shall be governed by the
                  laws of Japan. Our Terms are written in Japanese (Japan). Any
                  translated version is provided solely for your convenience. To
                  the extent any translated version of our Terms conflicts with
                  the Japanese version, the Japanese version controls. Any
                  amendment to or waiver proposed by you of our Terms requires
                  our express consent.
                </li>
                <li>
                  Any dispute arising between the User and us attributable or
                  related to the Services (including the content of posts, etc.)
                  shall be subject to the exclusive jurisdiction of Tokyo
                  District Court as the court of first instance.
                </li>
              </ol>
            </section>
          ) : (
            // ✅ Japanese translation
            <section className="mb-8">
              <h2 className="mb-4 text-lg font-semibold dark:text-stone-50">
                21. 準拠法および管轄裁判所
              </h2>
              <ol className="text-base list-decimal list-inside text-stone-900 dark:text-stone-50">
                <li>
                  本利用規約の正文は日本語版とし、本利用規約の成立、効力発生、解釈については、日本法を準拠法とします。本規約は日本語（日本）で作成されています。翻訳版は利用者の便宜のためにのみ提供されます。本規約の翻訳版と日本語版が矛盾する場合には、日本語版が優先されます。利用者による本規約の改正または免除の提案には、当社の明示的な同意が必要です。
                </li>
                <li>
                  本サービスに起因または関連してユーザーと当社との間で生じた紛争（投稿内容等を含む）については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
                </li>
              </ol>
            </section>
          )}
        </div>
      </section>
    </>
  );
}

export default TermsAndConditions;
