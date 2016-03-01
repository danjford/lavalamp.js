let direction = '';
const lavalampEl = document.getElementById('lavalamp'),
  padding = 500;

// Event for the 'next' button click
export const nextClick = () => {
  start( 'up' );
};

// Event for the 'previous 'button click
export const previousClick = () => {
  start( 'down' );
};

// Adds a fix to the body so the user can no longer scroll
export const toggleScroll = ( canScroll ) => {
  document.body.style.position = canScroll ? '' : 'fixed';
};

// Slides open the loading screen in the specified direction (Available through prototype)
export const start = ( slideDirection ) => {
  direction = slideDirection || 'down';
  lavalampEl.className += ` lavalamp-${direction}-start`;

  setTimeout(() => {
    toggleScroll(false);
  }, padding);
};

// Slides the loading screen shut in the specified direction (Available through prototype)
export const stop = () => {
  const startingReg = new RegExp(`lavalamp-${direction}-start`, 'g'),
    endingReg = new RegExp(`\\s?lavalamp-${direction}-end`, 'g'),
    target = direction === 'up' ? 0 : document.body.clientHeight;

  lavalampEl.className = lavalampEl.className.replace(startingReg, `lavalamp-${direction}-end`);
  toggleScroll(true);
  window.scrollTo(0, target);

  setTimeout(() => {
    lavalampEl.className = lavalampEl.className.replace(endingReg, '');
  }, padding);
};