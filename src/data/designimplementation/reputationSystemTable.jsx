// Table component
function ReputationSystem({ isEN }) {
  const tableData = [
    {
      metric: isEN ? "Uptime" : "稼働時間",
      measurement: isEN
        ? "Is the node online when contacted? Tracked during peer exchange and health checks."
        : "連絡時にノードがオンラインか？ピア交換とヘルスチェック中に追跡",
    },
    {
      metric: isEN ? "Sync Accuracy" : "同期精度",
      measurement: isEN
        ? "Does the node have correct data? Measured during consensus voting."
        : "ノードは正しいデータを持っているか？コンセンサス投票中に測定",
    },
    {
      metric: isEN ? "Gossip Relay" : "ゴシップ中継",
      measurement: isEN
        ? "Does the node help spread messages? Good nodes relay gossip promptly."
        : "ノードはメッセージの拡散を支援しているか？良いノードは迅速に中継",
    },
    {
      metric: isEN ? "Data Served" : "データ提供",
      measurement: isEN
        ? "Does the node share files when asked? Nodes that serve data earn reputation."
        : "ノードは要求時にファイルを共有するか？データを提供するノードはレピュテーションを獲得",
    },
  ];

  return (
    <div className="my-8 overflow-x-auto">
      <table className="min-w-full border-collapse table-auto">
        <thead>
          <tr className="text-white bg-emerald-600 dark:bg-emerald-800">
            <th className="px-6 py-3 text-sm font-semibold tracking-wider text-left uppercase">
              {isEN ? "Metric" : "指標"}
            </th>
            <th className="px-6 py-3 text-sm font-semibold tracking-wider text-left uppercase">
              {isEN ? "Measurement" : "測定内容"}
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
                {row.metric}
              </td>
              <td className="px-6 py-4 text-gray-700 dark:text-stone-300">
                {row.measurement}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ReputationSystem;
