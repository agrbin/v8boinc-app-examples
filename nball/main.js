var Vector = require('./lib/vector.js'),
  random = require('./lib/random.js'),
  progress = require('./lib/progress.js');

module.exports = function main(input) {
  var it = null,
    N = input[1],
    K = input[0],
    probe = null,
    inside_ball = 0;

  random.srand(input[2] || 0);

  for (it = 0; it < N; ++it) {
    probe = new Vector(K);
    inside_ball += probe.insideBall();
    progress(it / N);
  }

  return [inside_ball, N];
};
