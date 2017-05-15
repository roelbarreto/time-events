import { EventEmitter } from 'events';
import { Map } from 'immutable';
import { getTimeObj } from './utils';

export default class TimeEvents {

  /**
   * @description Will contain immutable Map of the most recent Time Object
   * @type {Map}
   */
  time;

  /**
   * @description started will be the timeout object, cancellable
   * @type {Number}
   */
  started;

  /**
   * @description The intervals (in milliseconds) on how often to check the time. If the value is less than 10, the value 10 is used
   * @type {Number}
   */
  interval;

  /**
   * @description Event Emmiter object
   * @type {EventEmitter}
   */
  events;

  /**
   * @param {Number} interval The intervals (in milliseconds) on how often to check the time. If the value is less than 10, the value 10 is used
   */
  constructor(interval = 10) {
    this.events = new EventEmitter();
    this.interval = interval;
    this.nextTick = this.nextTick.bind(this);
    this.time = Map(getTimeObj());
  }

  /**
   * @param {Object} timeToResume must contain object result from getTimeObj
   */
  start(timeToResume = null) {
    this.time = Map(timeToResume ? timeToResume : getTimeObj(new Date()));
    this.started = setInterval(this.nextTick, this.interval);
    this.events.emit('start', this.time.toJS());
    return this.time.toJS();
  }

  stop() {
    if (this.started) {
      this.events.emit('stop', this.time.toJS());
      clearInterval(this.started);
      this.started = null;
      return this.time.toJS();
    }
  }

  /**
   * @description fired every intervals (in milliseconds)
   */
  nextTick() {
    const past = this.time.toJS();
    const pres = getTimeObj(new Date());
    const keys = Object.keys(pres);
    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];
      if (past[key] !== pres[key]) {
        try {
          this.time = this.time.set(key, pres[key]);
          this.events.emit(`${key}Change`, pres[key], past[key]);
        } catch (e) {
          this.events.emit('error', e, key, pres, past);
        }
      }
    }
  }

  /**
   * @description subscribe to time events
   * @param {String} event
   * @param {Function} callback
   */
  on(event, callback) {
    this.events.on(event, callback);
  }

}