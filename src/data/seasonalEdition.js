const seasonalBase = '/seasonal-edition';
const seasonalImg = (filename) => `${seasonalBase}/${encodeURIComponent(filename)}`;

export const seasonalEditions = [
  {
    id: 'bombay-edition',
    title: 'bombay edition',
    description:
      'Warm metropolitan glow and layered brass accents inspired by Bombay\'s skyline — sculptural fixtures for luxury residences, lobbies, and hospitality interiors.',
    aside:
      'A curated release of fixtures shaped by South Mumbai\'s architectural rhythm and evening light.',
    image: seasonalImg('Bombay edition.png'),
    pdfUrl: '#',
    theme: {
      mainBg: '#e8f4fc',
      subBg: '#f8fcff',
      text: '#0a0a0a',
      title: '#7eb8e8',
    },
  },
  {
    id: 'nocturne-edition',
    title: 'nocturne edition',
    description:
      'Deep blues and muted gold accents for after-dark atmospheres — low-glare pendants and wall washes that settle rooms into quiet luxury.',
    aside:
      'Seasonal finishes and bespoke configurations available for select collections through Plevid.',
    image: seasonalImg('Nocturne Edition.png'),
    pdfUrl: '#',
    theme: {
      mainBg: '#1a1f3a',
      subBg: '#252b4a',
      text: '#e8eaf5',
      title: '#c9b896',
    },
  },
  {
    id: 'riviera-edition',
    title: 'riviera edition',
    description:
      'Sun-bleached palettes with brushed brass and soft coastal warmth — curated fixtures for terraces, waterfront lounges, and open-air living.',
    aside:
      'Each piece is sourced for its craft, proportion, and ability to shape mood across the changing seasons.',
    image: seasonalImg('Riviera Edition.png'),
    pdfUrl: '#',
    theme: {
      mainBg: '#fff3c4',
      subBg: '#fffaf0',
      text: '#3d2a14',
      title: '#c9a227',
    },
  },
  {
    id: 'heritage-edition',
    title: 'heritage edition',
    description:
      'Classic proportions and refined materials that honour architectural heritage — statement lighting for landmark interiors and enduring spaces.',
    aside:
      'Organic forms and timeless silhouettes for spaces that balance tradition with contemporary refinement.',
    image: seasonalImg('Heritage Edition.png'),
    pdfUrl: '#',
    theme: {
      mainBg: '#f0ebe3',
      subBg: '#faf7f2',
      text: '#3d3428',
      title: '#8b7355',
    },
  },
];

export const seasonalIntro = {
  label: 'seasonal edition',
  lead:
    'Four curated releases across the year — each collection reimagines Plevid lighting through a distinct palette, material story, and spatial mood.',
  footnote:
    'Scroll horizontally to explore each edition. Themes transition as you move through the collection.',
};
