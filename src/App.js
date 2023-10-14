import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const expense = [
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [initial_expense, AddNewExpense] = useState(expense);
  const renderNewExpense = (createNewExpense) => {
    const expenseData = {
      ...createNewExpense,
    };
    AddNewExpense((prevState) => {
      return [expenseData, ...prevState];
    });
    console.log("app.js");
    console.log(expenseData);
  };
  return (
    <div>
      <NewExpense onNewExpense={renderNewExpense} />
      <Expenses items={initial_expense} />
    </div>
  );
}

export default App;
