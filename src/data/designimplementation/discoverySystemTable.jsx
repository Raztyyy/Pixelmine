// Table component
function DiscoverySystemTable({ isEN }) {
  const tableData = [
    {
      layer: 1,
      method: isEN ? "Seed Nodes" : "シードノード",
      function: isEN
        ? "Hardcoded entry points that help newcomers join the network"
        : "ネットワークへの参加を支援するハードコードされたエントリーポイント",
    },
    {
      layer: 2,
      method: isEN ? "Peer Exchange (PEX)" : "ピア交換（PEX）",
      function: isEN
        ? "Nodes share contact lists with each other every 15 seconds"
        : "ノードが15秒ごとに連絡先リストを相互に共有",
    },
    {
      layer: 3,
      method: isEN ? "Announcements" : "アナウンスメント",
      function: isEN
        ? "Nodes broadcast presence every minute; messages propagate automatically"
        : "ノードが毎分存在をブロードキャスト、メッセージは自動的に伝播",
    },
    {
      layer: 4,
      method: isEN
        ? "Local Discovery (mDNS)"
        : "ローカルディスカバリー（mDNS）",
      function: isEN
        ? "Instant discovery of nodes on the same local network"
        : "同じローカルネットワーク上のノードを即座に発見",
    },
  ];

  return (
    <div className="my-8 overflow-x-auto">
      <table className="min-w-full border-collapse table-auto">
        <thead>
          <tr className="text-white bg-emerald-600 dark:bg-emerald-800">
            <th className="px-6 py-3 text-sm font-semibold tracking-wider text-left uppercase">
              {isEN ? "Layer" : "層"}
            </th>
            <th className="px-6 py-3 text-sm font-semibold tracking-wider text-left uppercase">
              {isEN ? "Method" : "方法"}
            </th>
            <th className="px-6 py-3 text-sm font-semibold tracking-wider text-left uppercase">
              {isEN ? "Function" : "機能"}
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
                {row.layer}
              </td>
              <td className="px-6 py-4 text-gray-700 dark:text-stone-300">
                {row.method}
              </td>
              <td className="px-6 py-4 text-gray-700 dark:text-stone-300">
                {row.function}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DiscoverySystemTable;
