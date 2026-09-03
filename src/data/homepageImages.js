const base = '/Revised%20Home%20Page%20Images';

/** Encode a filename so spaces and special chars work in src and CSS url(). */
function img(name) {
  return `${base}/${encodeURIComponent(name)}`;
}

const leftHeights = ['h-sm', 'h-lg', 'h-md', 'h-sm', 'h-xl', 'h-md'];
const rightHeights = ['h-md', 'h-sm', 'h-lg', 'h-sm', 'h-md', 'h-xl'];

/**
 * Homepage assets from public/Revised Home Page Images.
 * Hero columns are paired left↔right to match Home Page REFERENCES.pdf
 * (project grid pairs + product/fixture pairs).
 */
export const homepageImages = {
  hero: {
    // Left / right pairs (top → bottom as in the PDF)
    columnLeft: [
      img('DJI_20260713192949_0869_D.JPG'), // ping-pong / wavy ceiling lounge
      img('DJI_20260713194127_0889_D.JPG'), // elevator lobby
      img('mict 4.png'), // stone wall + water feature lighting
      img('grand hyatt.jpg.avif'), // steep-roof resort pool night
      img('DSC09404.jpg'), // cylindrical outdoor fixture
      img('Copy of DSC09461.jpg'), // bollards overlooking water
    ],
    columnRight: [
      img('Dahilas.jpg'), // terrace lounge at dusk
      img('IMG_9225-HDR.jpg'), // facade vertical strip lights
      img('DJI_20260713192621_0851_D.JPG'), // undulating ceiling detail
      img('hp13.png'), // bamboo pavilion arches
      img('Copy of DSC04381.JPG'), // outdoor spotlight / camera fixture
      img('Copy of DSC09646.jpg'), // recessed ground light in grate
    ],
  },
  page2: img('Amari Raya.png'),
  page3: {
    // PDF: 01 craftsmanship (warm residential) · 02 immersive (cool grid facade)
    residential: img('IMG_9775-HDR.jpg'),
    commercial: img('IMG_8899-HDR.jpg'),
  },
  page5: {
    collection1: img('Panaroma by S Raheja.jpg'),
    collection2: img('Monte South.jpg'),
    collection3: img('IMG_8872-HDR.jpg'),
  },
  page9: {
    one: img('hp14.png'),
    two: img('Amari Raya.png'),
    three: img('grand hyatt.jpg.avif'),
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
