module.exports = function main(input) {
  boinc_fraction_done(0.1);
  if (input == 1) {
    return 1;
  }
  if (input == 2) {
    throw 1;
  }
  if (input == 3) {
    // this can't be good -> resluts must be deterministic
    return Math.random();
  }
}
