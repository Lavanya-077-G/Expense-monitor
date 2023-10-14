import React from "react";
import { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
function NewExpense(props) {
  const createNewExpense = (extractedExpensedata) => {
    const expenseData = {
      ...extractedExpensedata,
      id: Math.random(),
    };
    props.onNewExpense(expenseData);
  };

  const [initialState , editingState] = useState(false);

  const startEditingHandler = () => {
    editingState(true);
  }

  const cancelEditingHandler = ()=>{
    editingState(false);
  }

  return (
    <div className="new-expense">
      {!initialState && <button onClick={startEditingHandler}>Add Expenses</button>}
      {initialState && <ExpenseForm onSaveNewExpense={createNewExpense} onChange={cancelEditingHandler}/>}
    </div>
  );
}

export default NewExpense;
