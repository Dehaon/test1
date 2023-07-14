import React, { useEffect, useState } from "react";
import { generateCalendar } from "../utils/generateCalendar";
import Item from "./item";
import { contributionsServise } from "../services/contributions.service";
// import { ContributionsProvider } from "../hooks/useContributions";

const Calendar = ({ users, onSort, selectedSort, onToggleBookmark }) => {
  const [contributions, setСontributions] = useState();
  const [isLoading, setLoading] = useState(true);
  const calendar = generateCalendar().map((arr, index) => [
    { title: true, dayOfWeek: index }, //  === 6 ? 0 : index + 1
    ...arr,
  ]);

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
  if (isLoading) return "Loading...";

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
                <Item {...item} contributions={contributions} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Calendar;
