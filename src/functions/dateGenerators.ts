const today = new Date();
const yesterday = new Date();
const tomorrow = new Date();
const startOfWeek = new Date();
const endOfWeek = new Date();
const endOfMonth = new Date();

const todayDate = today.getDate();
yesterday.setDate(todayDate - 1);
tomorrow.setDate(todayDate + 1);
startOfWeek.setDate(todayDate - 1);
endOfWeek.setDate(todayDate + 7);
endOfMonth.setDate(todayDate + 31);

// MS as in "milliseconds since midnight January 1, 1970".
const yesterdayMS = yesterday.getTime();
const tomorrowMS = tomorrow.getTime();
const startOfWeekMS = startOfWeek.getTime();
const endOfWeekMS = endOfWeek.getTime();
const endOfMonthMS = endOfMonth.getTime();

const dateWithinPastWeek = new Date(
  yesterdayMS - Math.random() * (yesterdayMS - startOfWeekMS)
);

const dateWithinWeek = new Date(
  tomorrowMS + Math.random() * (endOfWeekMS - tomorrowMS)
);

const dateWithinMonth = () => new Date(
  tomorrowMS + Math.random() * (endOfMonthMS - tomorrowMS)
);

export { dateWithinWeek, dateWithinPastWeek, dateWithinMonth, today };