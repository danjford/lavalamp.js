import { animate, previousClick, nextClick, start, stop, scroll } from './events';

const previous = document.getElementById('lavalamp-previous'),
  next = document.getElementById('lavalamp-next');


// Listens and executes the 'previous' click event
previous.addEventListener('click', previousClick);

// Listens and executes the 'next' click event
next.addEventListener('click', nextClick);

const Lavalamp = () => {};

Lavalamp.prototype = {
  start,
  stop
};

export default Lavalamp;