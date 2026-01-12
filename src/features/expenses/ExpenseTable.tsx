type Expense = {
  id: number;
  employee: string;
  amount: number;
  category: string;
  status: "Pending" | "Approved" | "Rejected";
};


export default function ExpenseTable({ data }: { data: Expense[] }) {
  return (
    <div className="bg-white rounded shadow overflow-hidden">
      <table className="w-full border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Employee</th>
            <th className="p-3 text-left">Category</th>
            <th className="p-3 text-left">Amount</th>
            <th className="p-3 text-left">Status</th>
          </tr>
        </thead>

        <tbody>
          {data.map((expense) => (
            <tr key={expense.id} className="border-t">
              <td className="p-3">{expense.employee}</td>
              <td className="p-3">{expense.category}</td>
              <td className="p-3">₹{expense.amount}</td>
              <td className="p-3">
                <span
                  className={`px-2 py-1 rounded text-sm ${
                    expense.status === "Approved"
                      ? "bg-green-100 text-green-700"
                      : expense.status === "Rejected"
                      ? "bg-red-100 text-red-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {expense.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
