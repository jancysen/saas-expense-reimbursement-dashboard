import { useAuth } from "../../context/useAuth";

export default function Header() {
  const { role } = useAuth(); // ✅ NOW USED

  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6">
      <h1 className="text-lg font-semibold">Dashboard</h1>
      <span className="text-sm text-gray-500">{role}</span>
    </header>
  );
}
