import React from "react";

import EventItem from "./EventItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((e) => (
        <EventItem
          key={e.id}
          date={e.date}
          description={e.title}
          price={e.amount}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
