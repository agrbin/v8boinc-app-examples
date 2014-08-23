// if this module is running under node (rather than jsapp or browser-port
// where boinc_fraction_done function is available in global scope) the we can
// use differentlly defined progress function.
//
// that function can do nothing or output progress of test done.
//
// if module is to be submitted or tested under v8boinc then
// boinc_fraction_done **must** be called.

if (typeof boinc_fraction_done === 'undefined') {
  module.exports = function () {};
} else {
  module.exports = boinc_fraction_done;
}
