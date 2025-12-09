// Table component
function HowItAllWorksTable({ isEN }) {
  const tableData = [
    {
      step: 1,
      action: isEN
        ? "REQUEST arrives at user's local node"
        : "リクエストがユーザーのローカルノードに到着",
      system: isEN ? "Client" : "クライアント",
    },
    {
      step: 2,
      action: isEN
        ? "LOCAL CHECK: File not found locally"
        : "ローカルチェック：ファイルがローカルに見つからない",
      system: isEN ? "Storage" : "ストレージ",
    },
    {
      step: 3,
      action: isEN
        ? "DISCOVERY provides list of connected peers"
        : "ディスカバリーが接続ピアのリストを提供",
      system: isEN ? "Discovery" : "ディスカバリー",
    },
    {
      step: 4,
      action: isEN
        ? "REPUTATION sorts peers by trust score (high-score first)"
        : "レピュテーションが信頼スコアでピアをソート",
      system: isEN ? "Reputation" : "レピュテーション",
    },
    {
      step: 5,
      action: isEN
        ? "ROUTING forwards request to peers until found"
        : "ルーティングが見つかるまでピアにリクエストを転送",
      system: isEN ? "Routing" : "ルーティング",
    },
    {
      step: 6,
      action: isEN
        ? "FILE DOWNLOADED with signature verification"
        : "ファイルをダウンロード、署名を検証",
      system: isEN ? "Security" : "セキュリティ",
    },
    {
      step: 7,
      action: isEN
        ? "REPUTATION UPDATED: Serving peer gets +points"
        : "レピュテーション更新：提供ピアに＋ポイント",
      system: isEN ? "Reputation" : "レピュテーション",
    },
    {
      step: 8,
      action: isEN
        ? "RESPONSE: File delivered to user instantly"
        : "レスポンス：ファイルを即座にユーザーに配信",
      system: isEN ? "Client" : "クライアント",
    },
  ];

  return (
    <div className="my-8 overflow-x-auto">
      <table className="min-w-full border-collapse table-auto">
        <thead>
          <tr className="text-white bg-emerald-600 dark:bg-emerald-800">
            <th className="px-6 py-3 text-sm font-semibold tracking-wider text-left uppercase">
              {isEN ? "Step" : "ステップ"}
            </th>
            <th className="px-6 py-3 text-sm font-semibold tracking-wider text-left uppercase">
              {isEN ? "Action" : "アクション"}
            </th>
            <th className="px-6 py-3 text-sm font-semibold tracking-wider text-left uppercase">
              {isEN ? "System" : "システム"}
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 dark:bg-stone-900 dark:divide-stone-700">
          {tableData.map((row, index) => (
            <tr
              key={index}
              className="transition-colors hover:bg-emerald-50 dark:hover:bg-stone-800"
            >
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-stone-50">
                {row.step}
              </td>
              <td className="px-6 py-4 text-gray-700 dark:text-stone-300">
                {row.action}
              </td>
              <td className="px-6 py-4 text-gray-700 dark:text-stone-300">
                {row.system}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HowItAllWorksTable;
