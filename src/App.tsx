import AdminLayout from "./components/layout/AdminLayout";
import ExpensesPage from "./features/expenses/ExpensesPage";

function App() {
  return (
    <AdminLayout>
      <ExpensesPage />
    </AdminLayout>
  );
}

export default App;
