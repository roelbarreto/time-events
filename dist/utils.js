"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTimeObj = getTimeObj;
function getTimeObj() {
  var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  return date ? {
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDay(),
    date: date.getDate(),
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
    milliseconds: date.getMilliseconds()
  } : {
    year: null,
    month: null,
    day: null,
    date: null,
    hours: null,
    minutes: null,
    seconds: null,
    milliseconds: null
  };
}
