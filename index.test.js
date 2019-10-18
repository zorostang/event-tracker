const Tracker = require('./index');
describe('tracker object', () => {
  let tracker;
  beforeEach(() => {
    tracker = new Tracker() // reset the class before each test
  });
  test('count(); increments the tracker array with new event after every call to count', () => {
    expect(tracker.events.length).toEqual(0);
    tracker.increment();
    expect(tracker.events.length).toEqual(1);
  });
  test('getNumberOfEvents(); returns sum of events triggered within time window otherwise 0 if no events triggered within time window', (done) => {
    const i = setInterval(() => {
      tracker.increment();
    }, 250)
    setTimeout(() => {
      console.log(tracker.events)
      expect(tracker.getNumberOfEvents(5/1000)).toEqual(0);
      expect(tracker.getNumberOfEvents(.5)).toEqual(2);
      expect(tracker.getNumberOfEvents(1)).toEqual(4);
      done();
    }, 1050)
  });
});