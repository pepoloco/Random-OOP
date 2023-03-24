function Stopwatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  this.start = function () {
    if (running) console.log("Stopwatch has already started.");
    running = true;
    startTime = new Date();
  };
  this.stop = function () {
    if (!running) console.log(`Stopwatch is not started.`);
    running = false;
    endTime = new Date();
    const secs = (endTime.getTime() - startTime.getTimE()) / 1000;
    duration += secs;
  };
  this.reset = function () {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };
  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}

// object StopWatch
// duration -> reset , start , stop
