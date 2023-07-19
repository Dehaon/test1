export function reformDate(string) {
  const weekDay = new Intl.DateTimeFormat("RU-ru", { weekday: "long" }).format(
    new Date(string)
  );
  const month = new Intl.DateTimeFormat("RU-ru", { month: "long" }).format(
    new Date(string)
  );
  const monthDay = new Date(string).getDate();
  const year = new Date(string).getFullYear();

  const result =
    weekDay.charAt(0).toUpperCase() +
    weekDay.slice(1) +
    ", " +
    month.charAt(0).toUpperCase() +
    month.slice(1) +
    " " +
    monthDay +
    ", " +
    year;
  //   console.log(result);
  return result;
}
