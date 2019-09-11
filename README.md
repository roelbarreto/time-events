# time-events
Javascript library to allow subscribing on time change events like: millisecondsChange, secondsChange, minutesChange, hoursChange, dayChange, dateChange, weekChange, monthChange and yearChange

[![npm version](https://badge.fury.io/js/time-events.svg)](http://badge.fury.io/js/time-events)
[![NPM](https://nodei.co/npm/time-events.png)](https://npmjs.org/package/time-events)

## Table Of Contents
- [Features](#Features)
- [Requirements](#Requirements)
- [Installation](#Installation)
- [Usage](#Usage)
- [Demo](#Demo)

## Features

This project library provides the following features:
-

## QuickStart
1. Enable to listen to any time eent change like: `millisecondsChange`, `secondsChange`, `minutesChange`, `hoursChange`, `dayChange`, `dateChange`, `weekChange`, `monthChange` and `yearChange`
2. Subcribe to any events callback error via on `error` event
3. Start and Stop timer available that returns start time and stop time to enable resuming for later use

## Requirements
- immutable
- babel

## Installation
- `npm install time-events`

## Usage

```javascript
import TimeEvents from 'time-events';

const time = new TimeEvents();

/**
 * @param currentSeconds will be the ccurrent machine seconds returned bew new Date()
 * @param previousSeconds time will be the previous seconds based on event time, in this example it is previous Seconds
 */
time.on('secondsChange', (currentSeconds, previousSeconds) => console.log(currentSeconds, previousSeconds));
/**
 * @description Diffirent hour event example
 */
time.on('hourChange', (currentHour, previousHour) => console.log(currentHour, previousHour));
/**
 * @description Identify which event throw an error: hours, seconds, ...
 */
time.on('error', (error, eventType, currentTimeObj, previousTimeObj) => console.log(error, eventType));

time.start();

// Get the current time provided by the instance
const currentTimeObj = time.time.toJS();
console.log(currentTimeObj.seconds);
console.log(currentTimeObj.hours);
console.log(currentTimeObj.year);

// Check if time is started
// time.started property is the return value of setInterval() method on your environment
console.log(!!time.started);

```

## Demo App
 
To run the demo, follow these steps: 
- `npm install`
- `npm start`

To run the test, follow these steps: 
- `npm install`
- `npm run test`


