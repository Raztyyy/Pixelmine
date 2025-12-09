// Table component
function FourCoreSystemsTable({ isEN }) {
  const tableData = [
    {
      challenge: isEN ? "Discovery" : "ディスカバリー",
      question: isEN
        ? "How do nodes find each other across the internet without a central directory?"
        : "中央ディレクトリなしで、ノードはどのようにしてインターネット上で相互を発見するか？",
    },
    {
      challenge: isEN ? "Synchronization" : "同期",
      question: isEN
        ? "How does data stay consistent across all nodes when anyone can add new content?"
        : "誰でも新しいコンテンツを追加できる状況で、どのようにして全ノード間でデータの一貫性を保つか？",
    },
    {
      challenge: isEN ? "Routing" : "ルーティング",
      question: isEN
        ? "How do users access data that might not be stored on their local node?"
        : "ユーザーは、ローカルノードに保存されていないデータにどのようにアクセスするか？",
    },
    {
      challenge: isEN ? "Reputation" : "レピュテーション",
      question: isEN
        ? "How do we identify which nodes are trustworthy and performing reliably?"
        : "どのノードが信頼でき、確実に動作しているかをどのように特定するか？",
    },
  ];

  return (
    <div className="my-8 overflow-x-auto">
      <table className="min-w-full border-collapse table-auto">
        <thead>
          <tr className="text-white bg-emerald-600 dark:bg-emerald-800">
            <th className="px-6 py-3 text-sm font-semibold tracking-wider text-left uppercase">
              {isEN ? "Challenge" : "課題"}
            </th>
            <th className="px-6 py-3 text-sm font-semibold tracking-wider text-left uppercase">
              {isEN ? "Questions" : "解決すべき問題"}
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
                {row.challenge}
              </td>
              <td className="px-6 py-4 text-gray-700 dark:text-stone-300">
                {row.question}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FourCoreSystemsTable;
