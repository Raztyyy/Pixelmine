function HowPxlWorks({ isEN }) {
  const tableData = [
    {
      step: isEN ? "Monthly Incentive Pool" : "月間インセンティブプール",
      value: "¥5,000,000",
    },
    {
      step: isEN ? "Total Network Points" : "ネットワーク全体のポイント合計",
      value: 64,
    },
    {
      step: isEN ? "PXL Value" : "PXLの価値（1 PXLあたり）",
      value: "1 PXL = ¥78,125",
    },
  ];

  return (
    <div className="my-8 overflow-x-auto">
      <table className="min-w-full overflow-hidden border-collapse table-auto rounded-xl">
        <tbody className="divide-y bg-gradient-to-r from-emerald-50 to-emerald-50 divide-emerald-200">
          {tableData.map((row, index) => (
            <tr
              key={index}
              className="transition-colors hover:bg-emerald-200 dark:hover:bg-stone-800"
            >
              <td className="px-6 py-4 text-lg font-medium text-gray-900 dark:text-stone-50">
                {row.step}
              </td>
              <td className="px-6 py-4 text-lg text-gray-700 dark:text-stone-300">
                {row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HowPxlWorks;
