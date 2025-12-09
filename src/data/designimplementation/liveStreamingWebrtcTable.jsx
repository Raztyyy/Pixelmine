// Table component
function LiveStreamingWebRTCTable({ isEN }) {
  const tableData = [
    {
      viewer_count: isEN ? "1 - 50" : "1～50",
      mode: isEN ? "WebRTC" : "WebRTC",
      latency: isEN ? "~100-500ms" : "～100-500ms",
      notes: isEN
        ? "Direct P2P signaling, low latency"
        : "直接P2Pシグナリング、低遅延",
    },
    {
      viewer_count: isEN ? "51+" : "51以上",
      mode: isEN ? "HLS" : "HLS",
      latency: isEN ? "5-15s" : "5-15秒",
      notes: isEN ? "CDN-based, unlimited scale" : "CDNベース、無制限スケール",
    },
  ];

  return (
    <div className="my-8 overflow-x-auto">
      <table className="min-w-full border-collapse table-auto">
        <thead>
          <tr className="text-white bg-emerald-600 dark:bg-emerald-800">
            <th className="px-6 py-3 text-sm font-semibold tracking-wider text-left uppercase">
              {isEN ? "Viewer Count" : "視聴者数"}
            </th>
            <th className="px-6 py-3 text-sm font-semibold tracking-wider text-left uppercase">
              {isEN ? "Mode" : "モード"}
            </th>
            <th className="px-6 py-3 text-sm font-semibold tracking-wider text-left uppercase">
              {isEN ? "Latency" : "遅延"}
            </th>
            <th className="px-6 py-3 text-sm font-semibold tracking-wider text-left uppercase">
              {isEN ? "Notes" : "備考"}
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
                {row.viewer_count}
              </td>
              <td className="px-6 py-4 text-gray-700 dark:text-stone-300">
                {row.mode}
              </td>
              <td className="px-6 py-4 text-gray-700 dark:text-stone-300">
                {row.latency}
              </td>
              <td className="px-6 py-4 text-gray-700 dark:text-stone-300">
                {row.notes}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LiveStreamingWebRTCTable;
