import { useAuth } from "../../context/useAuth";

export default function Sidebar() {
  const { role } = useAuth(); // ✅ NOW USED

  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-4">
      <h2 className="text-xl font-bold mb-6">SaaS Admin</h2>

      <nav className="space-y-2">
        <div className="px-3 py-2 rounded hover:bg-gray-800">
          Dashboard
        </div>

        {(role === "ADMIN" || role === "FINANCE") && (
          <div className="px-3 py-2 rounded hover:bg-gray-800">
            Expenses
          </div>
        )}

        {role === "ADMIN" && (
          <div className="px-3 py-2 rounded hover:bg-gray-800">
            Reimbursements
          </div>
        )}

        {role === "ADMIN" && (
          <div className="px-3 py-2 rounded hover:bg-gray-800">
            Users
          </div>
        )}
      </nav>
    </aside>
  );
}
