export const items = [
  {
    title: {
      en: "What is Activity Points and PXL Points?",
      jp: "アクティビティポイントとPXLポイントとは？",
    },
    content: {
      en: (
        <>
          <p className="mb-2 text-sm text-stone-900 sm:text-base dark:text-stone-50">
            Activity Points represent the overall activity of a user, which
            includes actions such as posting content, commenting on posts,
            messaging, and reacting to content. PXL Points, on the other hand,
            reflect the quality of a user’s activity. While Activity Points
            increase with every interaction within the app, PXL Points assess
            the quality of those interactions.
          </p>
          <p className="text-sm text-stone-900 sm:text-base dark:text-stone-50">
            For example, when a user posts content, their Activity Points will
            increase. However, if other users flag that content as offensive or
            inappropriate, the Activity Points will still rise, but the user’s
            PXL Points will decrease due to the low quality of the content.
          </p>
        </>
      ),
      jp: (
        <>
          <p className="mb-2 text-sm text-stone-900 sm:text-base dark:text-stone-50">
            アクティビティポイントは、ユーザーの全体的な活動を表します。これには、コンテンツの投稿、コメント、メッセージ送信、コンテンツへのリアクションなどのアクションが含まれます。一方、PXLポイントはユーザーの活動の質を反映します。アクティビティポイントはアプリ内でのすべてのインタラクションごとに増加しますが、PXLポイントはそのインタラクションの質を評価します。
          </p>
          <p className="text-sm text-stone-900 sm:text-base dark:text-stone-50">
            例えば、ユーザーがコンテンツを投稿した場合、アクティビティポイントは増加します。しかし、他のユーザーがそのコンテンツを不適切や攻撃的とフラグした場合でも、アクティビティポイントは増加しますが、コンテンツの質が低いため、PXLポイントは減少します。
          </p>
        </>
      ),
    },
  },

  {
    title: {
      en: "What is Incentives Distribution?",
      jp: "インセンティブ配分とは？",
    },
    content: {
      en: (
        <>
          <p className="mb-2 text-sm text-stone-900 sm:text-base dark:text-stone-50">
            PXL Points serve as the primary determinant of the incentives
            available to users within the Pixelmine system. The calculation of a
            user’s PXL Points is achieved by dividing the total number of PXL
            Points they possess by the overall number of users participating in
            the system.
          </p>
          <p className="mb-2 text-sm text-stone-900 sm:text-base dark:text-stone-50">
            This methodology effectively promotes the creation of high-quality
            and informative content, thereby benefiting the entire network of
            users.
          </p>
        </>
      ),
      jp: (
        <>
          <p className="mb-2 text-sm text-stone-900 sm:text-base dark:text-stone-50">
            PXLポイントは、Pixelmineシステム内でユーザーが受け取るインセンティブを決定する主要な指標です。ユーザーのPXLポイントの計算は、ユーザーが保有するPXLポイントの合計を、システムに参加している全ユーザー数で割ることで行われます。
          </p>
          <p className="mb-2 text-sm text-stone-900 sm:text-base dark:text-stone-50">
            この方法により、高品質で有益なコンテンツの作成が促進され、ネットワーク全体のユーザーにとって利益となります。
          </p>
        </>
      ),
    },
  },
];
