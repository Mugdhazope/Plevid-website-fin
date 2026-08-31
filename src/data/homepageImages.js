const base = '/Homepage';

const leftHeights = ['h-sm', 'h-lg', 'h-md', 'h-sm', 'h-xl', 'h-md'];
const rightHeights = ['h-md', 'h-sm', 'h-lg', 'h-sm', 'h-md', 'h-xl'];

/** Public Homepage assets — paths are URL-safe for src and CSS url(). */
export const homepageImages = {
  hero: {
    columnLeft: [
      `${base}/hp1.png`,
      `${base}/hp2.png`,
      `${base}/hp3.png`,
      `${base}/hp4.jpg`,
      `${base}/hp6.png`,
      `${base}/hp7.png`,
    ],
    columnRight: [
      `${base}/hp8.jpg`,
      `${base}/hp9.jpeg`,
      `${base}/hp10.jpg`,
      `${base}/hp11.jpg`,
      `${base}/hp12.jpg`,
      `${base}/hp13.png`,
    ],
  },
  page2: `${base}/DSC04381.JPG`,
  page3: {
    residential: `${base}/hp14.png`,
    commercial: `${base}/hp17.png`,
  },
  page5: {
    collection1: `${base}/hp5.jpg`,
    collection2: `${base}/hp%2016.jpeg`,
    collection3: `${base}/hp%2015.jpg`,
  },
  page9: {
    one: `${base}/DSC04398.JPG`,
    two: `${base}/hp4.jpg`,
    three: `${base}/hp5.jpg`,
  },
};

export const homepageHeroLeft = homepageImages.hero.columnLeft.map((src, i) => ({
  src,
  h: leftHeights[i],
}));

export const homepageHeroRight = homepageImages.hero.columnRight.map((src, i) => ({
  src,
  h: rightHeights[i],
}));
