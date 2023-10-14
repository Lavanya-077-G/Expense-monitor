import React from "react";
import "./ExpenseDate.css";
function EventDate(props) {
  const date = props.date;
  const month = date.toLocaleString("en-US", { month: "long" });
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{date.getDate()}</div>
      <div className="expense-date__year">{date.getFullYear()}</div>
    </div>
  );
}

export default EventDate;
