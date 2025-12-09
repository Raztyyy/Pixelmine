// Table component
function KeyBenefitsTable({ isEN }) {
  const tableData = [
    {
      benefits: isEN ? "No Single Point of Failure" : "単一障害点なし",
      how: isEN
        ? "Data exists on many nodes. Routing finds content even if nodes are offline."
        : "データは多くのノードに存在。ルーティングがオフラインノードがあってもコンテンツを検索",
    },
    {
      benefits: isEN ? "Fast Global Updates" : "高速グローバル更新",
      how: isEN
        ? "Gossip propagates changes to all nodes within 2-3 seconds."
        : "ゴシップが2～3秒以内に全ノードに変更を伝播",
    },
    {
      benefits: isEN ? "Quality Connections" : "高品質な接続",
      how: isEN
        ? "Reputation ensures connections to reliable, honest nodes first."
        : "レピュテーションが信頼性の高い正直なノードへの接続を優先",
    },
    {
      benefits: isEN ? "Attack Resistant" : "攻撃耐性",
      how: isEN
        ? "Sybil protection prevents fake nodes from gaining influence."
        : "シビル対策により偽ノードが影響力を得ることを防止",
    },
    {
      benefits: isEN ? "Self-Healing" : "自己修復",
      how: isEN
        ? "Discovery finds new peers. Reputation drops bad nodes automatically."
        : "ディスカバリーが新しいピアを発見。レピュテーションが悪いノードを自動的に除外",
    },
    {
      benefits: isEN ? "Efficient Storage" : "効率的なストレージ",
      how: isEN
        ? "Partial replication—routing fetches what's needed on demand."
        : "部分レプリケーション̶ルーティングが必要なものをオンデマンドで取得",
    },
    {
      benefits: isEN ? "Future-Proof" : "将来対応",
      how: isEN
        ? "Post-quantum cryptography protects against emerging threats."
        : "耐量子暗号が新たな脅威から保護",
    },
    {
      benefits: isEN ? "Secure Messaging" : "安全なメッセージング",
      how: isEN
        ? "End-to-end encryption with forward secrecy for all communications."
        : "すべての通信に前方秘匿性を備えたエンドツーエンド暗号化",
    },
    {
      benefits: isEN ? "Scalable Streaming" : "スケーラブルストリーミング",
      how: isEN
        ? "Hybrid WebRTC/HLS scales from small broadcasts to unlimited audiences."
        : "ハイブリッドWebRTC/HLSが小規模配信から無制限の視聴者まで自動スケール",
    },
  ];

  return (
    <div className="my-8 overflow-x-auto">
      <table className="min-w-full border-collapse table-auto">
        <thead>
          <tr className="text-white bg-emerald-600 dark:bg-emerald-800">
            <th className="px-6 py-3 text-sm font-semibold tracking-wider text-left uppercase">
              {isEN ? "Benefit" : "利点"}
            </th>
            <th className="px-6 py-3 text-sm font-semibold tracking-wider text-left uppercase">
              {isEN ? "How Pixelmine Achieves It" : "Pixelmineの実現方法"}
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
                {row.benefits}
              </td>
              <td className="px-6 py-4 text-gray-700 dark:text-stone-300">
                {row.how}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default KeyBenefitsTable;
