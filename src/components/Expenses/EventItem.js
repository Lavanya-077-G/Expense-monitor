import React from "react";

import "./EventItem.css";
import EventDate from "./ExpenseDate";
import Card from "../UI/Card";

function EventItem(parse) {
  // const expense = [
  //   { date: new Date("2 / 1 / 22").toISOString() },
  //   { description: "car-parts" },
  //   { price: 12 },
  // ];

  const date = new Date(parse.date);
  const description = parse.description;
  const price = parse.price;

  return (
    <li>
      <Card className="expense-item">
        <EventDate date={date} />
        <div className="expense-item__description">
          <h2>Item : {description}</h2>
          <div className="expense-item__price">Price : {price}</div>
        </div>
      </Card>
    </li>
  );
}

export default EventItem;
