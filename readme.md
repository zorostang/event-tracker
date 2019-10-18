# Simple Event Diagnostics

A small node library to track the number of events within a specified time window. 

## Getting Started

This library exports a single class called Tracker. Tracker has only two methods: increment() and getNumberOfEvents(). After installing the library you can initialize a new Tracker object like so:

```
const Tracker = require('basic-event-diagnostics');
const tracker = new Tracker();
```
Within your project call tracker.increment() everywhere where your event of interest would be triggered

```
const Tracker = require('basic-event-diagnostics');
const tracker = new Tracker();

const server = http.createServer(function (req, res) {
  tracker.increment()
})

server.listen(3000)
```

To get the number of events that were triggered within a specified time window call tracker.getNumberOfEvents(). Leaning on example above we could return the number of events to client hitting the web server like like so:

```
const Tracker = require('basic-event-diagnostics');
const tracker = new Tracker();

const server = http.createServer(function (req, res) {
  tracker.increment()
  const window = 60;
  res.end(`There have been ${tracker.getNumberOfEvents(window)} events in the last ${window} seconds`);
})

server.listen(3000)
```

### Installing

```
npm install @zorostang/basic-event-diagnostics
```

## Running the tests

```
npm run test
```
