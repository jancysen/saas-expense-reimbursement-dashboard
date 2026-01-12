 type StatsCardProps = {
  title: string;
  value: string | number;
};

export default function StatsCard({ title, value }: StatsCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-5">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-bold mt-1">{value}</p>
    </div>
  );
}
