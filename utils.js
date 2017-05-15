export function getTimeObj(date = null) {
  return date ?
    {
      year: date.getFullYear(),
      month: date.getMonth(),
      day: date.getDay(),
      date: date.getDate(),
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
      milliseconds: date.getMilliseconds(),
    }
    :
    {
      year: null,
      month: null,
      day: null,
      date: null,
      hours: null,
      minutes: null,
      seconds: null,
      milliseconds: null,
    };
}
