// Table component
function LiveStreamingScalingOptionsTable({ isEN }) {
  const tableData = [
    {
      mode: isEN ? "Single Server" : "シングルサーバー",
      description: isEN
        ? "In-memory room state, suitable for development or single-region deployment"
        : "インメモリルーム状態、開発または単一リージョンデプロイに適切",
    },
    {
      mode: isEN ? "Multi-Server" : "マルチサーバー",
      description: isEN
        ? "Redis adapter enables horizontal scaling with shared room state"
        : "Redisアダプターにより共有ルーム状態での水平スケーリングが可能",
    },
  ];

  return (
    <div className="my-8 overflow-x-auto">
      <table className="min-w-full border-collapse table-auto">
        <thead>
          <tr className="text-white bg-emerald-600 dark:bg-emerald-800">
            <th className="px-6 py-3 text-sm font-semibold tracking-wider text-left uppercase">
              {isEN ? "Mode" : "モード"}
            </th>
            <th className="px-6 py-3 text-sm font-semibold tracking-wider text-left uppercase">
              {isEN ? "Description" : "説明"}
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
                {row.mode}
              </td>
              <td className="px-6 py-4 text-gray-700 dark:text-stone-300">
                {row.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LiveStreamingScalingOptionsTable;
