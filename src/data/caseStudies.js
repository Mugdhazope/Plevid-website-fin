const caseStudyImg = (studyFolder, driveFolder, filename) =>
  `/case-study/${studyFolder}/${driveFolder}/${encodeURIComponent(filename)}`;

const encubeDriveFolder = 'drive-download-20260702T183523Z-3-001';
const mictDriveFolder = 'drive-download-20260702T185248Z-3-001';

const encubeImageFilenames = [
  'IMG_8832-HDR.jpg',
  'IMG_8851-HDR.jpg',
  'IMG_8866-HDR.jpg',
  'IMG_8872-HDR.jpg',
  'IMG_8926-HDR.jpg',
  'IMG_8935-HDR.jpg',
  'IMG_8998-HDR.jpg',
  'IMG_9004-HDR.jpg',
  'IMG_9040-HDR.jpg',
  'IMG_9121-HDR.jpg',
  'IMG_9216-HDR.jpg',
  'IMG_9225-HDR.jpg',
  'IMG_9229-HDR.jpg',
  'ap2.jpg',
  'WhatsApp Image 2026-06-16 at 9.50.26 PM.jpeg',
  'WhatsApp Image 2026-06-16 at 9.50.26 PM-2.jpeg',
  'WhatsApp Image 2026-06-16 at 9.50.27 PM.jpeg',
  'WhatsApp Image 2026-06-16 at 9.50.28 PM.jpeg',
  'WhatsApp Image 2026-06-16 at 9.50.28 PM-2.jpeg',
  'WhatsApp Image 2026-06-16 at 9.50.28 PM-3.jpeg',
  'WhatsApp Image 2026-06-16 at 9.50.30 PM.jpeg',
  'WhatsApp Image 2026-06-16 at 9.50.30 PM-2.jpeg',
  'WhatsApp Image 2026-06-16 at 9.50.30 PM-3.jpeg',
  'WhatsApp Image 2026-06-16 at 9.50.31 PM.jpeg',
  'WhatsApp Image 2026-06-16 at 9.50.31 PM-2.jpeg',
  'WhatsApp Image 2026-06-16 at 9.50.32 PM-2.jpeg',
  'WhatsApp Image 2026-06-16 at 9.50.33 PM.jpeg',
  'WhatsApp Image 2026-06-16 at 9.50.33 PM-2.jpeg',
  'WhatsApp Image 2026-06-21 at 3.15.54 AM.jpeg',
];

const mictImageFilenames = [
  'Infrastructure -MICT.jpg',
  'mict1.png',
  'mict2.png',
  'mict 4.png',
  'hp16.png',
  '4.jpg',
  'unnamed.webp',
];

const encubeImages = encubeImageFilenames.map((filename) => caseStudyImg('encube', encubeDriveFolder, filename));
const mictImages = mictImageFilenames.map((filename) => caseStudyImg('mict', mictDriveFolder, filename));

export const caseStudies = [
  {
    id: 'encube-ethicals',
    title: 'Encube Ethicals R&D Centre',
    subtitle: 'Lighting innovation for the world\'s largest topical formulations R&D hub',
    location: 'Lodha Life Sciences Hub, Palava, Maharashtra',
    status: 'Completed',
    client: 'Encube Ethicals',
    image: encubeImages[0],
    images: encubeImages,
    description:
      'Comprehensive architectural lighting for a state-of-the-art research and development facility, balancing precision task lighting with ambient comfort for collaborative spaces.',
    details: [
      { label: 'Location', value: 'Lodha Life Sciences Hub, Palava, Maharashtra, India' },
      { label: 'Sector', value: 'Pharmaceutical Research & Development' },
      { label: 'Project Type', value: 'Corporate Campus & R&D Centre' },
      { label: 'Client', value: 'Encube Ethicals' },
    ],
    expertise: [
      'Encube Ethicals has established the world\'s largest R&D centre dedicated to topical formulations at the Lodha Life Sciences Hub in Palava.',
      'Designed to empower innovation and scientific excellence, the centre brings together cutting-edge research, collaborative workspaces, and advanced infrastructure.',
      'Plevid delivered an integrated lighting solution that enhances precision, wellbeing and efficiency — creating a future-ready environment for 250+ researchers and scientists.',
    ],
    quote:
      'Intelligent lighting environments that empower innovation, enhance wellbeing, and support the future of pharmaceutical research.',
    facts: [
      { value: '200,000 sq.ft', label: 'Built-up area' },
      { value: '₹100 crore', label: 'Investment value' },
      { value: '18 months', label: 'Phase 1 completed in' },
      { value: '250+', label: 'Scientists & researchers' },
      { value: '25-acre campus', label: 'Lodha Life Sciences Hub, Palava' },
      { value: 'World\'s largest', label: 'Topical formulation R&D hub' },
    ],
  },
  {
    id: 'mumbai-cruise-terminal',
    title: 'Mumbai International Cruise Terminal',
    subtitle: 'Gateway to India\'s maritime tourism future',
    location: 'Ballard Pier Extension, Mumbai, Maharashtra',
    status: 'Completed',
    client: 'Mumbai Port Authority (MbPA)',
    image: mictImages[0],
    images: mictImages,
    description:
      'Landmark infrastructure lighting defining the cruise terminal experience — integrating façade illumination, public realm lighting, and wayfinding across a large-scale waterfront development.',
    details: [
      { label: 'Location', value: 'Ballard Pier Extension, Mumbai, Maharashtra, India' },
      { label: 'Sector', value: 'Infrastructure & Public Realm' },
      { label: 'Project Type', value: 'International Cruise Terminal' },
      { label: 'Client', value: 'Mumbai Port Authority (MbPA)' },
    ],
    facts: [
      { value: '4,15,000 sq.ft', label: 'Built-up area' },
      { value: '10,000/day', label: 'Passenger capacity' },
      { value: '5 vessels', label: 'Simultaneous berthing capacity' },
      { value: '₹556 crore', label: 'Project investment' },
      { value: 'Intl. & domestic', label: 'Terminal function' },
      { value: 'India\'s largest', label: 'International cruise terminal' },
      { value: 'Cruise tourism vision', label: 'Strategic importance for India' },
    ],
    scopeOfWork: [
      'Interior Lighting',
      'Facade Lighting',
      'Landscape Lighting',
      'Wayfinding Lighting',
      'Public Realm Lighting',
      'Feature Lighting',
      'Lighting Simulations & Lux Calculations',
      'Fixture Specification',
      'Mock-ups & Testing',
      'Site Coordination',
      'Commissioning Support',
    ],
    expertise: [
      'To create a world-class passenger experience through integrated architectural lighting that enhances orientation, visual comfort, safety, and the terminal\'s identity as India\'s premier cruise gateway.',
      'The lighting strategy was developed to support high passenger volumes, seamless navigation, operational efficiency, and a memorable arrival and departure experience while maintaining long-term performance and energy efficiency.',
    ],
  },
];
