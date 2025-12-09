// Table component
function GCECorePrincilesTable({ isEN }) {
  const tableData = [
    {
      princile: isEN ? "Post-Quantum Security" : "耐量子セキュリティ",
      description: isEN
        ? "Falcon signatures provide resistance against quantum computing attacks"
        : "Falcon署名が量子コンピューティング攻撃に対する耐性を提供",
    },
    {
      princile: isEN ? "Sender Keys" : "Sender Keys",
      description: isEN
        ? "Each participant generates a unique symmetric key for encrypting their messages"
        : "各参加者が自分のメッセージを暗号化するための一意の対称鍵を生成",
    },
    {
      princile: isEN ? "Asymmetric Distribution" : "非対称配布",
      description: isEN
        ? "Sender keys are encrypted with each recipient's public key"
        : "Sender Keysは各受信者の公開鍵で暗号化",
    },
    {
      princile: isEN ? "Chain Key Ratcheting" : "チェーンキーラチェット",
      description: isEN
        ? "Keys are ratcheted after each message for forward secrecy"
        : "前方秘匿性のため、各メッセージ後にキーをラチェット",
    },
    {
      princile: isEN ? "Key Rotation" : "キーローテーション",
      description: isEN
        ? "Keys are rotated when members join or leave for post-compromise security"
        : "メンバーの参加・離脱時にキーをローテーション",
    },
  ];

  return (
    <div className="my-8 overflow-x-auto">
      <table className="min-w-full border-collapse table-auto">
        <thead>
          <tr className="text-white bg-emerald-600 dark:bg-emerald-800">
            <th className="px-6 py-3 text-sm font-semibold tracking-wider text-left uppercase">
              {isEN ? "Principle" : "原則"}
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
                {row.princile}
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

export default GCECorePrincilesTable;
