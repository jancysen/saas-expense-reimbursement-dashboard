
# SaaS Expense & Reimbursement Admin Dashboard

A production-style **SaaS admin dashboard** built using **React, TypeScript, and Tailwind CSS**, inspired by real-world expense and reimbursement platforms like Rippling.

This project focuses on **scalable frontend architecture**, role-based access, and data-heavy financial workflows.

---

## 🚀 Features

- Role-based UI access (Admin, Finance, Employee)
- Expense and reimbursement management dashboard
- Paginated expense table with approval status
- Dashboard metrics for financial visibility
- Clean, modular, and reusable component architecture
- Strict TypeScript + ESLint-compliant codebase

---

## 🧑‍💼 Roles & Access

- **Admin**
  - Full access to dashboard, expenses, reimbursements, and users
- **Finance**
  - View and manage expenses and reimbursements
- **Employee**
  - View dashboard and personal expenses

(Role switching is simulated on the frontend using React Context API.)

---

## 🛠 Tech Stack

- React 18
- TypeScript (strict mode)
- Tailwind CSS
- Vite
- React Context API
- ESLint

---

## 📁 Project Structure


npm install
npm run dev
src/
├── components/
│ └── layout/
├── context/
│ ├── AuthContext.ts
│ ├── AuthProvider.tsx
│ └── useAuth.ts
├── features/
│ ├── dashboard/
│ └── expenses/
├── App.tsx
└── main.tsx


---

---

## 🧠 Key Engineering Highlights

- Designed scalable SaaS-style frontend architecture
- Implemented role-based UI rendering without backend dependency
- Built pagination to handle large financial datasets efficiently
- Followed strict TypeScript and ESLint rules used in production codebases

---

## ▶️ Run Locally

```bash
npm install
npm run dev
