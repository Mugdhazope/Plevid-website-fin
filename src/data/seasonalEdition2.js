const seasonalBase = '/seasonal-edition';
const seasonalImg = (filename) => `${seasonalBase}/${encodeURIComponent(filename)}`;

export const seasonalCatalogue2 = [
  {
    id: 'bombay',
    title: 'bombay edition',
    catalogueLabel: 'South Mumbai luminosity',
    letter: 'B',
    description:
      'Warm metropolitan glow and layered brass accents inspired by Bombay\'s skyline — sculptural fixtures for luxury residences, lobbies, and hospitality interiors.',
    image: seasonalImg('Bombay edition.png'),
    pdfUrl: '#',
  },
  {
    id: 'nocturne',
    title: 'nocturne edition',
    catalogueLabel: 'Evening indigo & brass',
    letter: 'N',
    description:
      'Deep blues and muted gold accents for after-dark atmospheres — low-glare pendants and wall washes that settle rooms into quiet luxury.',
    image: seasonalImg('Nocturne Edition.png'),
    pdfUrl: '#',
  },
  {
    id: 'riviera',
    title: 'riviera edition',
    catalogueLabel: 'Coastal light & stone',
    letter: 'R',
    description:
      'Sun-bleached palettes with brushed brass and soft coastal warmth — curated fixtures for terraces, waterfront lounges, and open-air living.',
    image: seasonalImg('Riviera Edition.png'),
    pdfUrl: '#',
  },
  {
    id: 'heritage',
    title: 'heritage edition',
    catalogueLabel: 'Timeless architectural craft',
    letter: 'H',
    description:
      'Classic proportions and refined materials that honour architectural heritage — statement lighting for landmark interiors and enduring spaces.',
    image: seasonalImg('Heritage Edition.png'),
    pdfUrl: '#',
  },
];

export const seasonalCatalogue2Intro = {
  label: 'seasonal edition',
  scrollHint: 'scroll',
  nextLabel: 'next',
};
