export type Expense = {
  id: number;
  employee: string;
  amount: number;
  category: string;
  status: "Pending" | "Approved" | "Rejected";
};

export const expenses: Expense[] = [
  { id: 1, employee: "Alice", amount: 1200, category: "Travel", status: "Pending" },
  { id: 2, employee: "Bob", amount: 800, category: "Food", status: "Approved" },
  { id: 3, employee: "Charlie", amount: 450, category: "Office", status: "Rejected" },
  { id: 4, employee: "David", amount: 2300, category: "Travel", status: "Approved" },
  { id: 5, employee: "Eva", amount: 1600, category: "Food", status: "Pending" },
];
