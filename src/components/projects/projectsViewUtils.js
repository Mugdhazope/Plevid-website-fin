import imagesLoaded from 'imagesloaded';

export function preloadImages(selector, root) {
  return new Promise((resolve) => {
    imagesLoaded(root.querySelectorAll(selector), { background: true }, resolve);
  });
}

export function isInViewport(elem) {
  const bounding = elem.getBoundingClientRect();
  const vh = window.innerHeight || document.documentElement.clientHeight;
  const vw = window.innerWidth || document.documentElement.clientWidth;

  return (
    (bounding.bottom >= 0 && bounding.bottom <= vh || bounding.top >= 0 && bounding.top <= vh) &&
    (bounding.right >= 0 && bounding.right <= vw || bounding.left >= 0 && bounding.left <= vw)
  );
}
