(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Lavalamp = factory());
}(this, function () { 'use strict';

  var direction = '';
  var lavalampEl = document.getElementById('lavalamp');
  var padding = 500;
  // Event for the 'next' button click
  var nextClick = function nextClick() {
    start('up');
  };

  // Event for the 'previous 'button click
  var previousClick = function previousClick() {
    start('down');
  };

  // Adds a fix to the body so the user can no longer scroll
  var toggleScroll = function toggleScroll(canScroll) {
    document.body.style.position = canScroll ? '' : 'fixed';
  };

  // Slides open the loading screen in the specified direction (Available through prototype)
  var start = function start(slideDirection) {
    direction = slideDirection || 'down';
    lavalampEl.className += ' lavalamp-' + direction + '-start';

    setTimeout(function () {
      toggleScroll(false);
    }, padding);
  };

  // Slides the loading screen shut in the specified direction (Available through prototype)
  var stop = function stop() {
    var startingReg = new RegExp('lavalamp-' + direction + '-start', 'g'),
        endingReg = new RegExp('\\s?lavalamp-' + direction + '-end', 'g'),
        target = direction === 'up' ? 0 : document.body.clientHeight;

    lavalampEl.className = lavalampEl.className.replace(startingReg, 'lavalamp-' + direction + '-end');
    toggleScroll(true);
    window.scrollTo(0, target);

    setTimeout(function () {
      lavalampEl.className = lavalampEl.className.replace(endingReg, '');
    }, padding);
  };

  var previous = document.getElementById('lavalamp-previous');
  var next = document.getElementById('lavalamp-next');
  // Listens and executes the 'previous' click event
  previous.addEventListener('click', previousClick);

  // Listens and executes the 'next' click event
  next.addEventListener('click', nextClick);

  var Lavalamp = function Lavalamp() {};

  Lavalamp.prototype = {
    start: start,
    stop: stop
  };

  return Lavalamp;

}));
//# sourceMappingURL=lavalamp.js.map