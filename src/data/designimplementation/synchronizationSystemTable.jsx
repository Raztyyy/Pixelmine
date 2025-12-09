// Table component
function SyncSystemTable({ isEN }) {
  const tableData = [
    {
      component: isEN ? "Bootstrap" : "ブートストラップ",
      function: isEN
        ? "Downloads existing data when a new node joins—catching up on everything it missed"
        : "新しいノードが参加した際に既存のデータをダウンロード̶見逃したすべてを追いつく",
    },
    {
      component: isEN ? "Gossip" : "ゴシップ",
      function: isEN
        ? "Instantly spreads new changes to all nodes—like news propagating through a network"
        : "新しい変更を即座に全ノードに拡散̶ニュースがネットワークを通じて広がるように",
    },
    {
      component: isEN ? "File Sync" : "ファイル同期",
      function: isEN
        ? "Keeps photos, videos, and attachments synchronized—larger files handled separately"
        : "写真、動画、添付ファイルを同期̶大きなファイルは別途処理",
    },
    {
      component: isEN ? "Consensus" : "コンセンサス",
      function: isEN
        ? "Resolves conflicts when nodes disagree—uses voting to determine authoritative data"
        : "ノード間の競合を解決̶投票により正規データを決定",
    },
  ];

  return (
    <div className="my-8 overflow-x-auto">
      <table className="min-w-full border-collapse table-auto">
        <thead>
          <tr className="text-white bg-emerald-600 dark:bg-emerald-800">
            <th className="px-6 py-3 text-sm font-semibold tracking-wider text-left uppercase">
              {isEN ? "Component" : "コンポーネント"}
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
              <td className="px-6 py-4 text-gray-700 dark:text-stone-300">
                {row.component}
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

export default SyncSystemTable;
