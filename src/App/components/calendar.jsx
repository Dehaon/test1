import React from "react";
import { generateCalendar } from "../utils/generateCalendar";
import Item from "./item";

const Calendar = ({ users, onSort, selectedSort, onToggleBookmark }) => {
  const calendar = generateCalendar().map((arr, index) => [
    { title: true, dayOfWeek: index }, //  === 6 ? 0 : index + 1
    ...arr,
  ]);
  console.log(calendar);

  return (
    <table>
      <thead>
        <tr>
          {/* {months.map((month) => (
        <th
          key={column}
          scope="col"
        >
          {month.name}
        </th>
      ))} */}
          <th>months</th>
        </tr>
      </thead>
      <tbody>
        {calendar.map((column, index) => (
          <tr key={index}>
            {column.map((item, index) => (
              <td key={index}>
                <Item {...item} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Calendar;
