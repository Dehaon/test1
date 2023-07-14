import axios from "axios";

const http = axios.create({
  baseURL: "https://dpg.gg/test/calendar.json",
});

export const contributionsServise = {
  get: http.get,
};
