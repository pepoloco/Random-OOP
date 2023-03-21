// function Stopwatch() {
//   let startTime,
//     endTime,
//     running,
//     duration = 0;

//   this.start = function () {
//     if (running) throw new Error("Stopwatch has already started.");
//     running = true;
//     startTime = new Date();
//   };
//   this.stop = function () {
//     if (!running) throw new Error(`Stopwatch is not started.`);
//     running = false;
//     endTime = new Date();
//     const secs = (endTime.getTime() - startTime.getTimE()) / 1000;
//     duration += secs;
//   };
//   this.reset = function () {
//     startTime = null;
//     endTime = null;
//     running = false;
//     duration = 0;
//   };
// }

// Stopwatch();

// object StopWatch
// duration -> reset , start , stop
//
//
const circle = {
  radius: 1,
  draw: function () {},
};
