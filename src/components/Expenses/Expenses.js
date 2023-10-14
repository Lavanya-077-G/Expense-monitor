import React, { useState } from "react";

import "./Expenses.css";

import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  const [initial, SetFilter] = useState("show all");

  const SelectDropDown = (DropdownValue) => {
    // const selectedValue = DropdownValue;
    // console.log("Expnese.js");
    SetFilter(DropdownValue);
    // console.log(DropdownValue);
  };
  // const setDropdown = () => {
  //   SetFilter(initial);
  // };

  const filteredYear = props.items.filter((expense) => {
    if (initial !== "show all") {
      return expense.date.getFullYear().toString() === initial;
    } else {
      return true;
    }
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          initialDropdown={initial}
          onSelectDropdown={SelectDropDown}
        />
        <ExpenseChart expenses={filteredYear} />
        {/* {DisplayContent } */}
        <ExpenseList items={filteredYear} />
        {/* /* <EventItem
          date={props.items[0].date}
          description={props.items[0].title}
          price={props.items[0].amount}
        />
        <EventItem
          date={props.items[1].date}
          description={props.items[1].title}
          price={props.items[1].amount}
        />
        <EventItem
          date={props.items[2].date}
          description={props.items[2].title}
          price={props.items[2].amount}
        /> */}
      </Card>
    </div>
  );
}

export default Expenses;
