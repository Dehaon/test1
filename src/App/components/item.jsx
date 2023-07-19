import React, { useState } from "react";
import Tooltip from "./tooltip";

const Item = ({
  title,
  date,
  dayOfWeek,
  contributions,
  id,
  activate,
  active,
}) => {
  const [isHover, setHover] = useState(false);

  const handleActive = (id) => {
    activate(id);
  };

  const comparison = active._id === id && active.active;

  if (title) {
    const days = ["Пн", "", "Ср", "", "Пт", "", ""];
    return <span className="row-title">{days[dayOfWeek]}</span>;
  }

  const modifiedStyle = (string) => {
    return comparison
      ? string + " selected"
      : isHover
      ? string + " hover"
      : string;
  };

  let style = isHover ? "item hover" : "item";
  if (contributions.hasOwnProperty(date)) {
    if (contributions[date] >= 30) {
      // style = isHover ? "item large hover" : "item large";
      style = modifiedStyle("item large");
    } else if (contributions[date] >= 20) {
      style = modifiedStyle("item big");
    } else if (contributions[date] >= 10) {
      style = modifiedStyle("item medium");
    } else if (contributions[date] >= 1) {
      style = modifiedStyle("item little");
    }

    return (
      <Tooltip
        date={date}
        contributions={contributions[date]}
        active={comparison}
      >
        <div
          className={style}
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
          onClick={() => handleActive(id)}
        ></div>
      </Tooltip>
    );
  }

  return (
    <div
      className={style}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    ></div>
  );
};

export default Item;
