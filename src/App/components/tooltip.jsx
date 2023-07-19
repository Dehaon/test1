import React, { useEffect, useState } from "react";
import { reformDate } from "../utils/reformDate";

const Tooltip = ({ date, contributions, children, active }) => {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(active);
    // console.log(active);
  }, [active]);

  const reformedDate = reformDate(date);

  return (
    <div className="tooltip">
      {children}

      {isVisible && (
        <div className="tooltiptext">
          <p className="">{`${contributions} contributions`}</p>
          <p className="tooltipdate">{`${reformedDate}`}</p>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
