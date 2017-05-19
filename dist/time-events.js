'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = require('events');

var _immutable = require('immutable');

var _utils = require('./utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TimeEvents = function () {

  /**
   * @param {Number} interval The intervals (in milliseconds) on how often to check the time. If the value is less than 10, the value 10 is used
   */


  /**
   * @description The intervals (in milliseconds) on how often to check the time. If the value is less than 10, the value 10 is used
   * @type {Number}
   */


  /**
   * @description Will contain immutable Map of the most recent Time Object
   * @type {Map}
   */
  function TimeEvents() {
    var interval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;

    _classCallCheck(this, TimeEvents);

    this.events = new _events.EventEmitter();
    this.interval = interval;
    this.nextTick = this.nextTick.bind(this);
    this.time = (0, _immutable.Map)((0, _utils.getTimeObj)());
  }

  /**
   * @param {Object} timeToResume must contain object result from getTimeObj
   */


  /**
   * @description Event Emmiter object
   * @type {EventEmitter}
   */


  /**
   * @description started will be the timeout object, cancellable
   * @type {Number}
   */


  _createClass(TimeEvents, [{
    key: 'start',
    value: function start() {
      var timeToResume = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      this.time = (0, _immutable.Map)(timeToResume ? timeToResume : (0, _utils.getTimeObj)(new Date()));
      this.started = setInterval(this.nextTick, this.interval);
      this.events.emit('start', this.time.toJS());
      return this.time.toJS();
    }
  }, {
    key: 'stop',
    value: function stop() {
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

  }, {
    key: 'nextTick',
    value: function nextTick() {
      var past = this.time.toJS();
      var pres = (0, _utils.getTimeObj)(new Date());
      var keys = Object.keys(pres);
      for (var i = 0; i < keys.length; i += 1) {
        var key = keys[i];
        if (past[key] !== pres[key]) {
          try {
            this.time = this.time.set(key, pres[key]);
            this.events.emit(key + 'Change', pres[key], past[key]);
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

  }, {
    key: 'on',
    value: function on(event, callback) {
      this.events.on(event, callback);
    }
  }]);

  return TimeEvents;
}();

exports.default = TimeEvents;
