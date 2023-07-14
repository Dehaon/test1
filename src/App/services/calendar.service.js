import axios from "axios";

const http = axios.create({
  baseURL: "https://dpg.gg/test/calendar.json",
});

export const calendarServise = {
  get: http.get,
};
