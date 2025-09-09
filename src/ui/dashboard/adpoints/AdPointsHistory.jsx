import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { mockTransactions } from "../../../data/historyMock/transactionHistoryData";
import { faChevronDown } from "@fortawesome/pro-solid-svg-icons";

// Reusable select wrapper with FontAwesome chevron
function SelectWithIcon({ value, onChange, children, className }) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={onChange}
        className={`p-2 pr-8 border rounded-lg shadow-sm appearance-none ${className}`}
      >
        {children}
      </select>
      <FontAwesomeIcon
        icon={faChevronDown}
        className="absolute w-4 h-4 text-gray-500 -translate-y-1/2 pointer-events-none right-2 top-1/2"
      />
    </div>
  );
}

function AdPointsHistory() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Debounced search input
  const [searchInput, setSearchInput] = useState(
    searchParams.get("search") || ""
  );

  // Params
  const search = searchParams.get("search") || "";
  const filterType = searchParams.get("type") || "all";
  const filterStatus = searchParams.get("status") || "all";
  const filterDate = searchParams.get("date") || "all";
  const sortField = searchParams.get("sortField") || "date";
  const sortOrder = searchParams.get("sortOrder") || "desc";
  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const itemsPerPage = parseInt(searchParams.get("limit") || "10", 10);

  // Debounce effect → only update URL param after typing stops
  useEffect(() => {
    const handler = setTimeout(() => {
      updateParam("search", searchInput);
    }, 500);
    return () => clearTimeout(handler);
  }, [searchInput]);

  // Helper
  const updateParam = (key, value, resetPage = true) => {
    const params = new URLSearchParams(searchParams);
    const removableKeys = ["type", "status", "date", "search"];

    if (removableKeys.includes(key) && (value === "all" || value === "")) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    if (resetPage && key !== "page") {
      params.set("page", "1");
    }
    setSearchParams(params);
  };

  // Filter + sort
  const filteredData = useMemo(() => {
    let data = [...mockTransactions];
    if (search) {
      data = data.filter((txn) =>
        txn.id.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (filterType !== "all")
      data = data.filter((txn) => txn.type === filterType);
    if (filterStatus !== "all")
      data = data.filter((txn) => txn.status === filterStatus);
    if (filterDate === "30days") {
      const now = new Date();
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(now.getDate() - 30);
      data = data.filter((txn) => new Date(txn.date) >= thirtyDaysAgo);
    }
    data.sort((a, b) => {
      let fieldA = a[sortField];
      let fieldB = b[sortField];
      if (sortField === "date") {
        fieldA = new Date(a.date);
        fieldB = new Date(b.date);
      }
      if (fieldA < fieldB) return sortOrder === "asc" ? -1 : 1;
      if (fieldA > fieldB) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });
    return data;
  }, [search, filterType, filterStatus, filterDate, sortField, sortOrder]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const currentItems = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Export CSV
  const exportCSV = () => {
    const headers = [
      "Transaction ID",
      "Date",
      "Points",
      "Amount",
      "Type",
      "Status",
    ];
    const rows = filteredData.map((txn) => [
      txn.id,
      txn.date,
      txn.points,
      txn.amount,
      txn.type,
      txn.status,
    ]);
    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers, ...rows].map((row) => row.join(",")).join("\n");
    const link = document.createElement("a");
    link.href = encodeURI(csvContent);
    link.download = "transactions.csv";
    link.click();
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-xl dark:bg-stone-800">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-stone-50">
          Transaction History
        </h2>
      </div>

      {/* Filters */}
      <div className="flex items-center justify-between gap-3 mb-6">
        <input
          type="text"
          placeholder="Search by ID..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="p-2 border rounded-lg shadow-sm"
        />
        <div className="flex gap-4">
          <SelectWithIcon
            value={filterType}
            onChange={(e) => updateParam("type", e.target.value)}
          >
            <option value="all">All Types</option>
            <option value="buy">Buy</option>
            <option value="reward">Reward</option>
          </SelectWithIcon>

          <SelectWithIcon
            value={filterStatus}
            onChange={(e) => updateParam("status", e.target.value)}
          >
            <option value="all">All Status</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
            <option value="Failed">Failed</option>
          </SelectWithIcon>

          <SelectWithIcon
            value={filterDate}
            onChange={(e) => updateParam("date", e.target.value)}
          >
            <option value="all">All Dates</option>
            <option value="30days">Last 30 Days</option>
          </SelectWithIcon>

          <SelectWithIcon
            value={sortField}
            onChange={(e) => updateParam("sortField", e.target.value)}
          >
            <option value="date">Sort by Date</option>
            <option value="amount">Sort by Amount</option>
            <option value="points">Sort by Points</option>
            <option value="id">Sort by ID</option>
          </SelectWithIcon>

          <SelectWithIcon
            value={sortOrder}
            onChange={(e) => updateParam("sortOrder", e.target.value)}
          >
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </SelectWithIcon>

          <button
            onClick={exportCSV}
            className="px-3 py-1 text-sm text-white bg-green-600 rounded-lg hover:bg-green-700"
          >
            Export CSV
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border-separate border-spacing-y-2">
          <thead className="bg-gray-100 dark:bg-stone-700">
            <tr>
              <th className="p-3 text-left">Transaction ID</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Purchased Points</th>
              <th className="p-3 text-left">Amount</th>
              <th className="p-3 text-left">Type</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? (
              currentItems.map((txn) => (
                <tr
                  key={txn.id}
                  className="bg-white border rounded-lg shadow-sm dark:bg-stone-900"
                >
                  <td className="p-3">{txn.id}</td>
                  <td className="p-3">{txn.date}</td>
                  <td className="p-3 text-left">{txn.points}</td>
                  <td className="p-3 text-left">₱{txn.amount}</td>
                  <td className="p-3 text-left capitalize">{txn.type}</td>
                  <td className="p-3 text-left">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        txn.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : txn.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {txn.status}
                    </span>
                  </td>
                  <td className="p-3 text-left">
                    <button className="px-3 py-1 text-sm text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                      View
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="p-4 text-center text-gray-500 dark:text-gray-400"
                >
                  No transactions found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {!!mockTransactions.length && (
        <div className="flex items-center justify-between mt-6">
          <div className="text-sm text-gray-500">
            Total: {filteredData.length}
          </div>

          <div className="flex items-center gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() =>
                updateParam("page", (currentPage - 1).toString(), false)
              }
              className="px-3 py-1 bg-white border rounded hover:bg-gray-100 disabled:opacity-50"
            >
              ←
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => updateParam("page", (i + 1).toString(), false)}
                className={`px-3 py-1 rounded border ${
                  currentPage === i + 1
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white hover:bg-gray-100"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() =>
                updateParam("page", (currentPage + 1).toString(), false)
              }
              className="px-3 py-1 bg-white border rounded hover:bg-gray-100 disabled:opacity-50"
            >
              →
            </button>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <span>Show per Page:</span>
            <select
              value={itemsPerPage}
              onChange={(e) => updateParam("limit", e.target.value)}
              className="p-1 border rounded"
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdPointsHistory;
