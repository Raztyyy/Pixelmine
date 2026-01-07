function EarnPointsTable({ isEN }) {
  const tableData = [
    {
      activity: isEN ? "Create a post" : "投稿を作成する",
      points: 10,
    },
    {
      activity: isEN ? "Leave a comment" : "コメントを残す",
      points: 5,
    },
    {
      activity: isEN ? "React to content" : "コンテンツにリアクションする",
      points: 2,
    },
    {
      activity: isEN ? "Follow someone" : "誰かをフォローする",
      points: 3,
    },
    {
      activity: isEN ? "Watch an ad" : "広告を見る",
      points: 20,
    },
  ];

  return (
    <div className="my-8 overflow-x-auto">
      <table className="min-w-full border-collapse table-auto">
        <thead>
          <tr className="text-white bg-emerald-600 dark:bg-emerald-800">
            <th className="px-6 py-3 text-sm font-semibold tracking-wider text-left uppercase">
              {isEN ? "Activity" : "アクティビティ"}
            </th>
            <th className="px-6 py-3 text-sm font-semibold tracking-wider text-left uppercase">
              {isEN ? "Points" : "獲得ポイント"}
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
                {row.activity}
              </td>
              <td className="px-6 py-4 text-gray-700 dark:text-stone-300">
                {row.points}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EarnPointsTable;
