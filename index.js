const measurePerf = require('./measure-perf');
// const measurePerf = require('./measure-perf-with-observer');

function concat(a, b) {
  return a + b;
}

function concat2(a, b) {
  return a.concat(b);
}

measurePerf({
  name: 'concat',
  func: () => concat('con', 'cat'),
  precision: 3,
  count: 1000,
});

measurePerf({
  name: 'concat2',
  func: () => concat2('con', 'cat'),
  precision: 3,
  count: 1000,
});
