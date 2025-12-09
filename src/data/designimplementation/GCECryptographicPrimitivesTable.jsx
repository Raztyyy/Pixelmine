// Table component
function GCECryptographicPrimitivesTable({ isEN }) {
  const tableData = [
    {
      primitive: isEN ? "Post-Quantum Signatures" : "耐量子署名",
      algorithm: isEN ? "Falcon" : "Falcon",
      purpose: isEN
        ? "Identity verification, quantum-resistant signatures"
        : "ID検証、量子耐性署名",
    },
    {
      primitive: isEN ? "Symmetric Encryption" : "対称暗号",
      algorithm: isEN ? "AES-256-CBC" : "AES-256-CBC",
      purpose: isEN
        ? "Message content encryption"
        : "メッセージコンテンツ暗号化",
    },
    {
      primitive: isEN ? "Asymmetric Encryption" : "非対称暗号",
      algorithm: isEN ? "RSA/ECC" : "RSA/ECC",
      purpose: isEN ? "Sender key distribution" : "Sender Key配布",
    },
    {
      primitive: isEN ? "Hash Function" : "ハッシュ関数",
      algorithm: isEN ? "SHA-256" : "SHA-256",
      purpose: isEN
        ? "Chain key ratcheting, key derivation"
        : "チェーンキーラチェット、キー導出",
    },
    {
      primitive: isEN ? "Key Size" : "キーサイズ",
      algorithm: isEN ? "256-bit" : "256ビット",
      purpose: isEN ? "Sender key and chain key" : "Sender Keyとチェーンキー",
    },
    {
      primitive: isEN ? "IV Size" : "IVサイズ",
      algorithm: isEN ? "128-bit (random)" : "128ビット（ランダム）",
      purpose: isEN
        ? "Per-message initialization vector"
        : "メッセージごとの初期化ベクトル",
    },
  ];

  return (
    <div className="my-8 overflow-x-auto">
      <table className="min-w-full border-collapse table-auto">
        <thead>
          <tr className="text-white bg-emerald-600 dark:bg-emerald-800">
            <th className="px-6 py-3 text-sm font-semibold tracking-wider text-left uppercase">
              {isEN ? "Primitive" : "プリミティブ"}
            </th>
            <th className="px-6 py-3 text-sm font-semibold tracking-wider text-left uppercase">
              {isEN ? "Algorithm" : "アルゴリズム"}
            </th>
            <th className="px-6 py-3 text-sm font-semibold tracking-wider text-left uppercase">
              {isEN ? "Purpose" : "目的"}
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
                {row.primitive}
              </td>
              <td className="px-6 py-4 text-gray-700 dark:text-stone-300">
                {row.algorithm}
              </td>
              <td className="px-6 py-4 text-gray-700 dark:text-stone-300">
                {row.purpose}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GCECryptographicPrimitivesTable;
