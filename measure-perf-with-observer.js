const {performance, PerformanceObserver} = require('perf_hooks');

const measurePerf = ({name, func, precision, count}) => {
  // set a callback function that'll be called when a performance result entry is added to the performance timeilne
  const obs = new PerformanceObserver((items) => {
    const entries = items.getEntriesByType('function');
    average = entries[0].duration / count;

    // log
    const _precision = precision || 3;
    const elapsedStr = average.toPrecision(_precision);
    console.log(`${name}: ${elapsedStr}ms`);
    obs.disconnect();
  });

  const _count = count || 1;
  const bulk = () => {
    for (let i = 0; i < _count; i++) {
      func();
    }
  }

  // start observing
  obs.observe({entryTypes: ['function'], buffered: true});
  const wrappedBulk = performance.timerify(bulk);
  wrappedBulk();
};

module.exports = measurePerf;
