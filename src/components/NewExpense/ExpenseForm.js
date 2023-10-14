import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [expenseTitle, NewExpenseTitle] = useState("");
  const [expenseAmount, NewExpenseAmount] = useState("");
  const [expenseDate, NewExpenseDate] = useState("");

  //   const [expense, NewExpenses] = useState({
  //     expenseTitle: "",
  //     expenseAmount: "",
  //     expenseDate: "",
  //   });
  const titleClickHandler = (event) => {
    // console.log(event.target.value);
    NewExpenseTitle(event.target.value);
    // console.log(NewExpenseTitle);

    // NewExpenses((prevState) => {
    //   return { ...expense, expenseTitle: event.target.value };
    // });
  };

  const AmountClickHandler = (event) => {
    NewExpenseAmount(event.target.value);
  };

  const DateClickHandler = (event) => {
    NewExpenseDate(event.target.value);
  };

  const formSubmit = (event) => {
    event.preventDefault();
    const expenseData = {
      title: expenseTitle,
      amount: +expenseAmount,
      date: new Date(expenseDate),
    };
    NewExpenseAmount("");
    NewExpenseDate("");
    NewExpenseTitle("");

    props.onSaveNewExpense(expenseData);
  };

  return (
    <form onSubmit={formSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title: </label>
          <input
            type="text"
            value={expenseTitle}
            onChange={titleClickHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount: </label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={expenseAmount}
            onChange={AmountClickHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date: </label>
          <input
            type="Date"
            min="2019-01-01"
            max="2022-12-31"
            value={expenseDate}
            onChange={DateClickHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onChange}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
