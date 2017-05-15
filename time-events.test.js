import TimeEvents from './time-events';
test('Start Stop Test', () => {


  const time = new TimeEvents();

  expect(time.started).toBe(undefined);

  const startTime = time.start();

  expect(time.started).not.toBeNull();

  const stopTime = time.stop();

  expect(time.started).toBeNull();

  expect(startTime).not.toBe(stopTime);

  expect(startTime).toEqual(stopTime);

});

test('Event Listener Test', () => {


  const time = new TimeEvents();

  let isStarted = false;

  time.on('start', () => isStarted = true);

  expect(isStarted).toBeFalsy();

  time.start();

  expect(isStarted).toBeTruthy();

  time.stop();

});

test('Time Change Test', () => {

  const time = new TimeEvents();

  let isMillisecondsChanged = false;

  time.on('millisecondsChange', () => isMillisecondsChanged = true);

  time.events.emit('millisecondsChange');

  expect(isMillisecondsChanged).toBeTruthy();
});