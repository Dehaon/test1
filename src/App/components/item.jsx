import React from "react";

const Item = ({ title, date, dayOfWeek }) => {
  if (title) {
    const days = ["Пн", "", "Ср", "", "Пт", "", ""];
    return <span>{days[dayOfWeek]}</span>;
  }
  return <div className="item"></div>;
};

export default Item;
