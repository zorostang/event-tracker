/** Class representing a simple event diagnostics object */
const Tracker = class Tracker {
  /**
  * initialize a tracker object.
  */
  constructor() {
    this.events = [];
  }
  /**
   * increment the events array with current time in milliseconds
   */
  increment(){
    this.events[this.events.length] = Date.now();
  }
  /**
   * get the sum of events triggered within time window
   * @param {number} window the time window in seconds
   * @return {number} the sum of the events triggered within time window
   */
  getNumberOfEvents(window = 60) {
    const maxWindow = 5 * 60; // 5 minutes max
    window >= maxWindow ? maxWindow : window;
    const end = Date.now() - (window * 1000);
    return this.events.filter(ev => ev >= end).length;
  }
}
module.exports = Tracker;