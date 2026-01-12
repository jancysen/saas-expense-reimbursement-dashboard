import StatsCard from "./StatsCard";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Dashboard Overview</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard title="Total Expenses" value="₹1,24,500" />
        <StatsCard title="Pending Reimbursements" value="12" />
        <StatsCard title="Approved" value="36" />
        <StatsCard title="Rejected" value="4" />
      </div>
    </div>
  );
}
