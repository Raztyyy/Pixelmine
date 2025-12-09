// Table component
function GCESecurityPropertiesTable({ isEN }) {
  const tableData = [
    {
      property: isEN ? "Quantum Resistance" : "量子耐性",
      description: isEN
        ? "Falcon signatures protect against future quantum computing attacks"
        : "Falcon署名が将来の量子コンピューティング攻撃から保護",
    },
    {
      property: isEN ? "End-to-End Encryption" : "エンドツーエンド暗号化",
      description: isEN
        ? "Messages encrypted on sender's device, only decryptable by group members"
        : "送信者のデバイスで暗号化、グループメンバーのみが復号可能",
    },
    {
      property: isEN ? "Forward Secrecy" : "前方秘匿性",
      description: isEN
        ? "Chain key ratcheting ensures past messages remain secure if keys compromised"
        : "チェーンキーラチェットにより、キーが侵害されても過去のメッセージは安全",
    },
    {
      property: isEN ? "Post-Compromise Security" : "侵害後セキュリティ",
      description: isEN
        ? "Key rotation when members leave prevents access to future messages"
        : "メンバー離脱時のキーローテーションで将来のメッセージへのアクセスを防止",
    },
    {
      property: isEN ? "Device Portability" : "デバイス移植性",
      description: isEN
        ? "Encrypted key backups allow restoration on new devices"
        : "暗号化キーバックアップにより新しいデバイスでの復元が可能",
    },
  ];

  return (
    <div className="my-8 overflow-x-auto">
      <table className="min-w-full border-collapse table-auto">
        <thead>
          <tr className="text-white bg-emerald-600 dark:bg-emerald-800">
            <th className="px-6 py-3 text-sm font-semibold tracking-wider text-left uppercase">
              {isEN ? "Property" : "特性"}
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
                {row.property}
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

export default GCESecurityPropertiesTable;
