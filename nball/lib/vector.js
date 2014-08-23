var random = require('./random.js');

function Vector(k) {
  var it;
  this.components = new Array(k);
  for (it = 0; it < k; ++it) {
    this.components[it] = random() * 2 - 1;
  }
}

Vector.prototype.insideBall = function () {
  var norm = 0, it;
  for (it = 0; it < this.components.length; ++it) {
    norm += this.components[it] * this.components[it];
  }
  return norm < 1;
};

module.exports = Vector;

