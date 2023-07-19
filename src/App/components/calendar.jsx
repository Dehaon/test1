import React, { useEffect, useState } from "react";
import { generateCalendar } from "../utils/generateCalendar";
import Item from "./item";
import { contributionsServise } from "../services/contributions.service";

const Calendar = ({ users, onSort, selectedSort, onToggleBookmark }) => {
  const [contributions, setСontributions] = useState();
  const [isLoading, setLoading] = useState(true);
  const [active, setActive] = useState({});
  const { calendar, col } = generateCalendar();
  const modifiedCalendar = calendar.map((arr, index) => [
    { title: true, dayOfWeek: index }, //  === 6 ? 0 : index + 1
    ...arr,
  ]);

  console.log(col);

  useEffect(() => {
    getСontributions();
  }, []);

  async function getСontributions() {
    try {
      const { data } = await contributionsServise.get();
      setСontributions(data);
      // console.log(data);
      setLoading(false);
    } catch (error) {
      // errorCatcher(error);
      console.log(error);
    }
  }
  const activate = (id) => {
    if (active._id === id) {
      setActive((prevState) => ({ ...prevState, active: !prevState.active }));
    } else {
      setActive({ _id: id, active: true });
    }
    // console.log(id);
  };

  if (isLoading) return "Loading...";

  return (
    <table className="table">
      <thead className="table-header">
        <tr>
          <th></th>
          {col.map((month, index) => (
            <th
              key={index}
              scope="col"
              colSpan={month.columns}
              className="column-title"
            >
              {month.columns < 3 ? "" : month.title}
            </th>
          ))}
          {/* <th colSpan="4">months</th> */}
        </tr>
      </thead>
      <tbody className="table-body">
        {modifiedCalendar.map((column, index) => (
          <tr key={index}>
            {column.map((item, index) => (
              <td key={index}>
                <Item
                  {...item}
                  contributions={contributions}
                  activate={activate}
                  active={active}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Calendar;
