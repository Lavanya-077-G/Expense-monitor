import React from "react";

import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const EnteredValue = (event) => {
    // console.log("ExpenseFilter");
    // console.log(event.target.value);
    props.onSelectDropdown(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.initialDropdown} onChange={EnteredValue}>
          <option value="show all">Show All</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
