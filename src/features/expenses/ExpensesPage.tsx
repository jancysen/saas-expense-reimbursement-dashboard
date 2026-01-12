import { useState } from "react";
import ExpenseTable from "./ExpenseTable";
import { expenses } from "./expenseData";

const PAGE_SIZE = 3;

export default function ExpensesPage() {
  const [page, setPage] = useState(1);

  const startIndex = (page - 1) * PAGE_SIZE;
  const paginatedData = expenses.slice(
    startIndex,
    startIndex + PAGE_SIZE
  );

  const totalPages = Math.ceil(expenses.length / PAGE_SIZE);

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Expenses</h2>

      <ExpenseTable data={paginatedData} />

      <div className="flex justify-end items-center gap-3">
        <button
          className="px-3 py-1 border rounded disabled:opacity-50"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Previous
        </button>

        <span className="text-sm">
          Page {page} of {totalPages}
        </span>

        <button
          className="px-3 py-1 border rounded disabled:opacity-50"
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
