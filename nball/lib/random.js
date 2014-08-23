// we must use different random implementation than Math.random because
// results must be deterministic!
var seed = 0xdedababa;

module.exports = function () {
  seed *= 3133;
  seed += 0xbabadeda;
  seed %= 0xffffffff;
  return seed / 0xffffffff;
};

module.exports.srand = function (newSeed) {
  seed = newSeed;
};
