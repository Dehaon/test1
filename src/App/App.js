import React, { useEffect, useState } from "react";
import "./App.css";
import { calendarServise } from "./services/calendar.service";
import Calendar from "./components/calendar";

function App() {
  const [contributions, setСontributions] = useState();
  useEffect(() => {
    getCalendar();
  }, []);

  async function getCalendar() {
    try {
      const { data } = await calendarServise.get();
      setСontributions(data);
      console.log(data);
      // setIsLoading(false);
    } catch (error) {
      // errorCatcher(error);
      console.log(error);
    }
  }

  return (
    <container>
      <Calendar contributions={contributions} />
    </container>
  );
}

export default App;
