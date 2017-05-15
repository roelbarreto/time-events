import TimeEvents from './time-events';

const time = new TimeEvents();

time.on('secondsChange', (a) => console.log(a, 'seconds'));
time.on('minutesChange', (a) => console.log(a, 'minutes'));
time.on('hoursChange', (a) => console.log(a, 'hours'));
time.on('dayChange', (a) => console.log(a, 'day'));
time.on('monthChange', (a) => console.log(a, 'month'));
time.on('yearChange', (a) => console.log(a, 'year'));

time.start();