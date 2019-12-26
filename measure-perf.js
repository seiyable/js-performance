const { performance } = require('perf_hooks');

function measurePerf({name, func, precision, count}) {
  if (typeof func !== 'function') {
    console.error('Invalid type', func);
    return;
  }
  const start = performance.now();
  const _count = count || 1;
  for (let i = 0; i < _count; i++) {
    func();
  }
  const end = performance.now();
  const elapsed = (end - start) / _count;
  const _precision = precision || 3;
  const elapsedStr = elapsed.toPrecision(_precision);
  console.log(`${name}: ${elapsedStr}ms`);
}

module.exports = measurePerf;
