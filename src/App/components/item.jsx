import React from "react";

const Item = ({ title, date, dayOfWeek, contributions }) => {
  if (title) {
    const days = ["Пн", "", "Ср", "", "Пт", "", ""];
    return <span>{days[dayOfWeek]}</span>;
  }
  if (contributions.hasOwnProperty(date)) {
    let style;
    if (contributions[date] >= 30) {
      style = "item large hoverable";
    } else if (contributions[date] >= 20) {
      style = "item big";
    } else if (contributions[date] >= 10) {
      style = "item medium";
    } else if (contributions[date] >= 1) {
      style = "item little";
    }
    return (
      <div className={style}>
        <div className="tooltip">
          <span className="tooltiptext">{`${contributions[date]} контрибуций`}</span>
          <span className="tooltipdate">{`${date}`}</span>
        </div>
      </div>
    );
  }

  return <div className="item"></div>;
};

export default Item;
