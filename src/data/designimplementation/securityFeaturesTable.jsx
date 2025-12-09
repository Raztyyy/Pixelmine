// Table component
function SecurityFeaturesTable({ isEN }) {
  const tableData = [
    {
      feature: isEN ? "ML-DSA-87 Signatures" : "ML-DSA-87署名",
      protection: isEN
        ? "Post-quantum cryptography—secure against quantum computers"
        : "耐量子暗号̶量子コンピュータに対して安全",
    },
    {
      feature: isEN ? "Kyber-1024" : "Kyber-1024",
      protection: isEN
        ? "Post-quantum key encapsulation for secure key exchange"
        : "安全な鍵交換のための耐量子鍵カプセル化",
    },
    {
      feature: isEN ? "Falcon Signatures" : "Falcon署名",
      protection: isEN
        ? "Post-quantum signatures for group chat identity verification"
        : "グループチャットID検証のための耐量子署名",
    },
    {
      feature: isEN ? "Node ID Verification" : "ノードID検証",
      protection: isEN
        ? "Identity mathematically verified from public key"
        : "公開鍵から数学的にIDを検証",
    },
    {
      feature: isEN ? "Message Timestamps" : "メッセージタイムスタンプ",
      protection: isEN
        ? "Prevents replay attacks—old messages cannot be reused"
        : "リプレイ攻撃を防止̶古いメッセージは再利用不可",
    },
    {
      feature: isEN ? "Rate Limiting" : "レート制限",
      protection: isEN
        ? "Protects against spam and DoS (60 requests/minute)"
        : "スパムとDoS攻撃から保護（60リクエスト/分）",
    },
    {
      feature: isEN ? "JWT Authentication" : "JWT認証",
      protection: isEN
        ? "User actions require valid tokens"
        : "ユーザーアクションには有効なトークンが必要",
    },
    {
      feature: isEN ? "End-to-End Encryption" : "エンドツーエンド暗号化",
      protection: isEN
        ? "Private communications encrypted between participants only"
        : "プライベート通信は参加者間のみで暗号化",
    },
    {
      feature: isEN ? "AES-256-CBC" : "AES-256-CBC",
      protection: isEN
        ? "Symmetric encryption for message content"
        : "メッセージコンテンツの対称暗号化",
    },
    {
      feature: isEN ? "Chain Key Ratcheting" : "チェーンキーラチェット",
      protection: isEN
        ? "Forward secrecy through key derivation after each message"
        : "各メッセージ後の鍵導出による前方秘匿性",
    },
  ];

  return (
    <div className="my-8 overflow-x-auto">
      <table className="min-w-full border-collapse table-auto">
        <thead>
          <tr className="text-white bg-emerald-600 dark:bg-emerald-800">
            <th className="px-6 py-3 text-sm font-semibold tracking-wider text-left uppercase">
              {isEN ? "Feature" : "機能"}
            </th>
            <th className="px-6 py-3 text-sm font-semibold tracking-wider text-left uppercase">
              {isEN ? "Protection" : "保護内容"}
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
                {row.feature}
              </td>
              <td className="px-6 py-4 text-gray-700 dark:text-stone-300">
                {row.protection}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SecurityFeaturesTable;
