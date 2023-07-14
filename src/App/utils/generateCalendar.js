export function generateCalendar() {
  const today = new Date();
  const dayOfWeek = today.getDay() - 1;
  const day = 24 * 60 * 60 * 1000;

  const startDate = new Date(today.getTime() - (357 + dayOfWeek) * day);
  const calendar = [];

  for (let j = 0; j < 7; j++) {
    const datesWeek = [];
    for (let i = 0; i < 52; i++) {
      const date = new Date(startDate.getTime() + (i + j * 7) * day);
      const month =
        date.getMonth() < 9
          ? `0${date.getMonth() + 1}`
          : `${date.getMonth() + 1}`;
      datesWeek.push({
        dayOfWeek: date.getDay(),
        date: `${date.getFullYear()}-${month}-${date.getDate()}`,
        title: false,
      });
    }
    calendar.push(datesWeek);
  }
  // console.log(calendar1);
  return calendar;
}
