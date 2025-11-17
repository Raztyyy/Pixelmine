import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { mockTransactions } from "../../../data/historyMock/transactionHistoryData";
import { faChevronDown, faChevronUp } from "@fortawesome/pro-solid-svg-icons";

// Reusable select wrapper with FontAwesome chevron
function SelectWithIcon({ value, onChange, children, className }) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={onChange}
        className={`p-3 pr-10 border border-gray-300 rounded-xl shadow-sm appearance-none transition-all duration-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-stone-700 dark:border-gray-600 dark:text-white ${className}`}
      >
        {children}
      </select>
      <FontAwesomeIcon
        icon={faChevronDown}
        className="absolute w-4 h-4 text-gray-400 -translate-y-1/2 pointer-events-none right-3 top-1/2"
      />
    </div>
  );
}

function AdPointsHistory() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filtersOpen, setFiltersOpen] = useState(false); // mobile toggle

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
    <div className="p-6 bg-white border border-gray-200 shadow-xl md:p-8 rounded-2xl dark:bg-stone-800 dark:border-gray-700">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Transaction History
        </h2>
        {/* Mobile filter toggle */}
        <button
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors border border-gray-300 rounded-xl 2xl:hidden hover:bg-gray-50 dark:border-gray-600 dark:text-white dark:hover:bg-stone-700"
          onClick={() => setFiltersOpen((prev) => !prev)}
        >
          Filters
          <FontAwesomeIcon icon={filtersOpen ? faChevronUp : faChevronDown} />
        </button>
      </div>

      {/* Filters */}
      <div className="mb-6">
        {/* Desktop filters (always visible) */}
        <div className="items-center justify-between hidden gap-3 2xl:flex">
          <input
            type="text"
            placeholder="Search by ID..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="p-3 transition-all duration-200 border border-gray-300 shadow-sm rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-stone-700 dark:border-gray-600 dark:text-white"
          />
          <div className="flex flex-wrap gap-3">
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
              className="px-4 py-3 text-sm font-semibold text-white transition-all duration-200 shadow-md bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl hover:from-emerald-700 hover:to-teal-700 hover:shadow-lg"
            >
              Export CSV
            </button>
          </div>
        </div>

        {/* Mobile filters (collapsible) */}
        {filtersOpen && (
          <div className="flex flex-col gap-3 mt-4 2xl:hidden">
            <input
              type="text"
              placeholder="Search by ID..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="p-3 transition-all duration-200 border border-gray-300 shadow-sm rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-stone-700 dark:border-gray-600 dark:text-white"
            />
            <SelectWithIcon
              value={filterType}
              onChange={(e) => updateParam("type", e.target.value)}
              className="w-full"
            >
              <option value="all">All Types</option>
              <option value="buy">Buy</option>
              <option value="reward">Reward</option>
            </SelectWithIcon>

            <SelectWithIcon
              value={filterStatus}
              onChange={(e) => updateParam("status", e.target.value)}
              className="w-full"
            >
              <option value="all">All Status</option>
              <option value="Completed">Completed</option>
              <option value="Pending">Pending</option>
              <option value="Failed">Failed</option>
            </SelectWithIcon>

            <SelectWithIcon
              value={filterDate}
              onChange={(e) => updateParam("date", e.target.value)}
              className="w-full"
            >
              <option value="all">All Dates</option>
              <option value="30days">Last 30 Days</option>
            </SelectWithIcon>

            <SelectWithIcon
              value={sortField}
              onChange={(e) => updateParam("sortField", e.target.value)}
              className="w-full"
            >
              <option value="date">Sort by Date</option>
              <option value="amount">Sort by Amount</option>
              <option value="points">Sort by Points</option>
              <option value="id">Sort by ID</option>
            </SelectWithIcon>

            <SelectWithIcon
              value={sortOrder}
              onChange={(e) => updateParam("sortOrder", e.target.value)}
              className="w-full"
            >
              <option value="desc">Descending</option>
              <option value="asc">Ascending</option>
            </SelectWithIcon>

            <button
              onClick={exportCSV}
              className="px-4 py-3 text-sm font-semibold text-white transition-all duration-200 shadow-md bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl hover:from-emerald-700 hover:to-teal-700 hover:shadow-lg"
            >
              Export CSV
            </button>
          </div>
        )}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border-separate border-spacing-y-2">
          <thead className="bg-gray-100 dark:bg-stone-700">
            <tr>
              <th className="p-4 font-semibold text-left text-gray-700 dark:text-gray-300">
                Transaction ID
              </th>
              <th className="p-4 font-semibold text-left text-gray-700 dark:text-gray-300">
                Date
              </th>
              <th className="p-4 font-semibold text-left text-gray-700 dark:text-gray-300">
                Purchased Points
              </th>
              <th className="p-4 font-semibold text-left text-gray-700 dark:text-gray-300">
                Amount
              </th>
              <th className="p-4 font-semibold text-left text-gray-700 dark:text-gray-300">
                Type
              </th>
              <th className="p-4 font-semibold text-left text-gray-700 dark:text-gray-300">
                Status
              </th>
              <th className="p-4 font-semibold text-left text-gray-700 dark:text-gray-300">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? (
              currentItems.map((txn) => (
                <tr
                  key={txn.id}
                  className="transition-colors bg-white border border-gray-200 shadow-sm hover:bg-gray-50 dark:bg-stone-900 dark:border-gray-700 dark:hover:bg-stone-800 rounded-xl"
                >
                  <td className="p-4 text-gray-900 dark:text-white">
                    {txn.id}
                  </td>
                  <td className="p-4 text-gray-900 dark:text-white">
                    {txn.date}
                  </td>
                  <td className="p-4 text-gray-900 dark:text-white">
                    {txn.points}
                  </td>
                  <td className="p-4 text-gray-900 dark:text-white">
                    ₱{txn.amount}
                  </td>
                  <td className="p-4 text-gray-900 capitalize dark:text-white">
                    {txn.type}
                  </td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                        txn.status === "Completed"
                          ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                          : txn.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                          : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                      }`}
                    >
                      {txn.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <button className="px-4 py-2 text-sm font-semibold text-white transition-all duration-200 rounded-lg shadow-md bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 hover:shadow-lg">
                      View
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="p-6 text-center text-gray-500 dark:text-gray-400"
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
        <div className="flex flex-col items-center gap-6 mt-8 lg:flex-row lg:justify-between">
          <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
            Total: {filteredData.length}
          </div>

          <div className="flex items-center gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() =>
                updateParam("page", (currentPage - 1).toString(), false)
              }
              className="px-4 py-2 font-medium transition-colors bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-stone-700 dark:border-gray-600 dark:text-white dark:hover:bg-stone-600"
            >
              ←
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => updateParam("page", (i + 1).toString(), false)}
                className={`px-4 py-2 font-medium rounded-lg border transition-all duration-200 ${
                  currentPage === i + 1
                    ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-emerald-600 shadow-md"
                    : "bg-white border-gray-300 hover:bg-gray-50 dark:bg-stone-700 dark:border-gray-600 dark:text-white dark:hover:bg-stone-600"
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
              className="px-4 py-2 font-medium transition-colors bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-stone-700 dark:border-gray-600 dark:text-white dark:hover:bg-stone-600"
            >
              →
            </button>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <span className="font-medium text-gray-700 dark:text-gray-300">
              Show per Page:
            </span>
            <select
              value={itemsPerPage}
              onChange={(e) => updateParam("limit", e.target.value)}
              className="p-2 transition-all duration-200 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-stone-700 dark:border-gray-600 dark:text-white"
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
