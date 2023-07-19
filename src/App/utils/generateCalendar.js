export function generateCalendar() {
  const today = new Date();
  const dayOfWeek = today.getDay() - 1;
  const day = 24 * 60 * 60 * 1000;

  const startDate = new Date(today.getTime() - (357 + dayOfWeek) * day);
  const calendar = [];

  const months = [
    "Янв.",
    "Февр.",
    "Март",
    "Апр.",
    "Май",
    "Июнь",
    "Июль",
    "Авг.",
    "Сент.",
    "Окт.",
    "Нояб.",
    "Дек.",
  ];
  let columns = {};

  for (let j = 0; j < 7; j++) {
    const datesWeek = [];
    for (let i = 0; i < 52; i++) {
      const date = new Date(startDate.getTime() + (i * 7 + j) * day);
      const month =
        date.getMonth() < 9
          ? `0${date.getMonth() + 1}`
          : `${date.getMonth() + 1}`;
      datesWeek.push({
        dayOfWeek: date.getDay(),
        date: `${date.getFullYear()}-${month}-${date.getDate()}`,
        title: false,
        id: i * 7 + j,
      });

      if (columns.hasOwnProperty(i)) {
        columns[i].push(date.getMonth());
      } else {
        columns[i] = [date.getMonth()];
      }
    }
    calendar.push(datesWeek);
  }

  Object.keys(columns).map(
    (key) =>
      (columns[key] = columns[key].reduce((acc, num) => {
        if (acc.hasOwnProperty(num)) {
          acc[num] += 1;
        } else {
          acc[num] = 1;
        }
        return acc;
      }, {}))
  );

  Object.keys(columns).forEach((key) => {
    if (Object.keys(columns[key]).length === 1) {
      return (columns[key] = Number(Object.keys(columns[key])[0]));
    } else {
      const v = Object.values(columns[key]);
      const maxV = Math.max.apply(null, v);
      const index = v.indexOf(maxV);
      return (columns[key] = Number(Object.keys(columns[key])[index]));
    }
  });

  const monthColumns = {};
  let flex = { month: -1, title: "", columns: 0 };
  let counter = -1;

  for (let key in columns) {
    if (
      counter in monthColumns &&
      columns[key] === monthColumns[counter].month
    ) {
      monthColumns[counter].columns += 1;
    } else {
      counter += 1;
      monthColumns[counter] = Object.create(flex);
      monthColumns[counter].month = columns[key];
      monthColumns[counter].title = months[columns[key]];
      monthColumns[counter].columns = 1;
    }
  }
  const col = Object.values(monthColumns);
  return { calendar, col };
}
