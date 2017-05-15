import { getTimeObj } from './utils';


test('Blank Date Value test', () => {
  const date = getTimeObj();

  const blank = {
    year: null,
    month: null,
    day: null,
    date: null,
    hours: null,
    minutes: null,
    seconds: null,
    milliseconds: null,
  };

  expect(date).toEqual(blank);
});


test('Today Date Value test', () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const day = today.getDay();
  const date = today.getDate();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();
  const milliseconds = today.getMilliseconds();
  const todayValues = {
    year,
    month,
    day,
    date,
    hours,
    minutes,
    seconds,
    milliseconds,
  };
  const todayObject = getTimeObj(today);

  expect(todayObject).toEqual(todayValues);
});