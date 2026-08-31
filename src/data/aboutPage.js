const aboutBase = '/about-plevid-2';
const aboutImg = (filename) => `${aboutBase}/${encodeURIComponent(filename)}`;

export const aboutImages = {
  heroCenter: aboutImg('Homepage1.png'),
  heroLeft: aboutImg('Homepage 2.png'),
  heroRight: aboutImg('Homepage 3.png'),
  ceoMessage: 'https://selemen.liqium.com/img/bg13.jpg',
};

export const ceoMessage = {
  eyebrow: "CEO's Message",
  title: 'Light Creates Experience.',
  paragraphs: [
    'At Plevid, our purpose is simple yet profound: to transform architectural vision into meaningful experiences through light.',
    'We operate at the intersection of creativity and precision—where design intent meets technical execution. Our commitment to quality, performance, and detail ensures that every solution we deliver enhances spaces and elevates the way people experience them.',
    'With a passion for innovation and a deep respect for architecture, we continue to build long-term relationships based on trust, collaboration, and results.',
    'As we look ahead, our focus remains unchanged: to lead with integrity, innovate with purpose, and illuminate possibilities for a better tomorrow.',
    'Thank you to our partners, clients, and team for being part of this journey. Together, we are setting new standards in architectural lighting.',
  ],
  signature: {
    name: 'David Kuli',
    role: 'CEO',
  },
};

export const atAGlance = {
  eyebrow: 'Plevid Group',
  title: 'Plevid At A Glance.',
  intro:
    'We engineer architectural lighting solutions that perform beautifully and stand the test of time. With a strong pan-India presence and global partnerships, we bring local expertise with international standards.',
  facts: [
    {
      label: 'Headquarters',
      value: 'Mumbai',
    },
    {
      label: 'Branch Offices',
      value: 'Bangalore, Guwahati',
    },
    {
      label: 'Pan-India Operations',
      value: 'Delivering Lighting Solutions Across Major Cities',
    },
    {
      label: 'International Partnerships',
      value: 'Collaborating with Leading Global Technology Brands',
    },
    {
      label: 'Architectural Lighting Engineering',
      value: 'Design Intent • Technical Precision • On-time Execution',
    },
  ],
  projects: [
    { city: 'Delhi NCR', project: 'DLF The Camellias, Gurgaon' },
    { city: 'Mumbai', project: 'Mumbai International Cruise Terminal' },
    { city: 'Bhopal', project: 'Taj Lakefront, Bhopal' },
    { city: 'Guwahati', project: 'Branch Office' },
    { city: 'Pune', project: 'Yoo Villas, Pune' },
    { city: 'Goa', project: 'River Gold Villas, Goa' },
    { city: 'Hyderabad', project: 'Microsoft Campus, Hyderabad' },
    { city: 'Bangalore', project: 'Welcome Hotel – ITC, Bangalore' },
  ],
  stats: [
    {
      value: '160+',
      label: 'Projects Delivered',
      detail: 'Across Diverse Sectors and Scales',
    },
    {
      value: '10+',
      label: 'Cities Served',
      detail: 'Pan-India Presence with Local Expertise',
    },
    {
      value: '3',
      label: 'Countries',
      detail: 'Delivering Excellence Beyond Borders',
    },
    {
      value: '4',
      label: 'Global Partners',
      detail: 'Collaborating with Leading Brands Worldwide',
    },
    {
      value: '5',
      label: 'Sectors Served',
      detail: 'Hospitality • Commercial • Residential • Infrastructure • Institutional',
    },
  ],
};

export const ourJourney = {
  eyebrow: 'Plevid Group',
  title: 'Our Journey.',
  subtitle: 'Growing Through Partnerships.',
  intro:
    'From a vision to redefine architectural lighting to becoming a trusted partner across India and beyond—our journey is built on precision, collaboration, and long-term relationships.',
  milestones: [
    {
      year: '2020',
      title: 'Plevid Founded',
      text: 'Established with a vision to deliver world-class architectural lighting solutions in India.',
    },
    {
      year: '2020',
      title: 'First International Partnership',
      text: 'Partnered with leading global brands to bring advanced lighting technology and design innovation.',
    },
    {
      year: '2021',
      title: 'Expansion into Residential & Commercial Projects',
      text: 'Strengthened our presence in residential and commercial sectors with tailored lighting solutions.',
    },
    {
      year: '2022',
      title: 'Entry into Hospitality & Infrastructure Projects',
      text: 'Expanded into hospitality and large-scale infrastructure projects, delivering light that defines experiences.',
    },
    {
      year: '2024',
      title: '100+ Projects Delivered',
      text: 'Crossed a significant milestone of 100+ successful projects across multiple sectors and cities.',
    },
    {
      year: '2026',
      title: 'Bangalore Office Established',
      text: 'Opened our Bangalore office to enhance our reach and service capabilities in South India.',
    },
    {
      year: '2026',
      title: 'Guwahati Office Established',
      text: 'Established our Guwahati office to strengthen our presence in the Northeast region.',
    },
    {
      year: '2026',
      title: 'Knowledge Hub & Experience Center Launch',
      text: 'Launched our Knowledge Hub and Experience Center to inspire, educate, and collaborate with the industry.',
    },
  ],
};

export const whyPlevid = {
  title: 'Defining Spaces Through Light.',
  paragraphs: [
    'Light is more than illumination—it is an architectural material that shapes perception, influences emotion, and transforms how spaces are experienced.',
    'At Plevid, we align design intent with technical precision to create lighting environments that enhance architecture, reveal materiality, and elevate human experience.',
    'Every project begins with a deep understanding of context, function, and visual goals. Through careful integration of optics, controls, materials, and engineering, we deliver lighting solutions that perform seamlessly in the real world.',
    'Because exceptional lighting is not only seen—it is felt.',
  ],
  pillars: [
    {
      title: 'Design Intent Led Approach',
      text: 'Every lighting decision begins with understanding the architectural vision and desired experience.',
    },
    {
      title: 'Architectural Integration',
      text: 'Light is thoughtfully integrated with form, materials, and spatial composition.',
    },
    {
      title: 'Visual Comfort & Wellbeing',
      text: 'Solutions are engineered to minimise glare, enhance comfort, and support user wellbeing.',
    },
    {
      title: 'Performance That Endures',
      text: 'Long-term reliability, maintainability, and efficiency are considered from concept to commissioning.',
    },
  ],
  footer:
    'Creating lighting experiences that elevate form, enhance function, and leave a lasting impression.',
};

export const globalPartnerships = {
  eyebrow: 'Plevid Group',
  title: 'Global Partnerships. Proven Expertise.',
  intro:
    'Collaborating with globally recognised brands to bring design innovation, engineering excellence, and proven performance to architectural projects across India.',
  partners: [
    {
      name: 'PUK',
      country: 'Italy',
      description:
        'Since 1968, PUK specialises in architectural and outdoor lighting solutions that combine Italian design excellence with technical precision and long-term reliability.',
      applications:
        'Facade Lighting • Landscape Lighting • Public Realm • Exterior Architecture • Urban Spaces',
    },
    {
      name: 'Stella',
      country: 'Brazil',
      description:
        "One of Brazil's leading lighting brands, Stella develops innovative LED solutions focused on design performance, and user experience.",
      applications:
        'Residential Lighting • Hospitality • Retail • Interior Architecture • Decorative Lighting',
    },
    {
      name: 'ROE Visual',
      country: 'Europe',
      description:
        'ROE Visual is a global leader in premium LED display technology, delivering immersive visual experiences through high-performance digital solutions.',
      applications:
        'Broadcast Studios • Hospitality • Corporate Spaces • Retail • Entertainment • Digital Installations',
    },
    {
      name: 'Goccia Illuminazione',
      country: 'Italy',
      description:
        'Goccia combines timeless Italian design with robust engineering to create durable, high-performance lighting solutions for demanding environments.',
      applications:
        'Landscape Lighting • Outdoor Architecture • Marine Environments • Infrastructure • Public Spaces',
    },
  ],
  footer: 'Global Expertise. Local Execution.',
  locations: 'Italy | Brazil | Europe | India',
};
