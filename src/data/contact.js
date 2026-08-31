export const contactDetails = {
  email: 'contact@plevid.com',
  phone: '+91 88281 81288',
  website: 'www.plevid.com',
  instagram: '@plevidgroup',
  hours: 'Mon — Sat, 10:00 — 19:00 IST',
};

export const offices = [
  {
    id: 'mumbai',
    label: 'Mumbai — Head Office',
    lines: [
      'Enam Sambhav, C-20, G Block Road',
      'G Block BKC, Bandra Kurla Complex',
      'Bandra East, Mumbai, Maharashtra 400051',
    ],
    mapQuery: 'Enam+Sambhav+G+Block+BKC+Bandra+East+Mumbai',
  },
  {
    id: 'bangalore',
    label: 'Bangalore — Branch Office',
    lines: [
      '10th Floor, RMZ Latitude Commercial Building',
      'Bellary Road, Vinayakanagar, Byatarayanapura',
      'Bengaluru, Karnataka 560024',
    ],
    mapQuery: 'RMZ+Latitude+Bellary+Road+Bengaluru',
  },
  {
    id: 'guwahati',
    label: 'Guwahati — Branch Office',
    lines: [
      'Shreeji Tower, Office No. 8, 1st Floor',
      'Christian Basti, G.S. Road',
      'Guwahati, Assam 781005',
    ],
    mapQuery: 'Shreeji+Tower+GS+Road+Guwahati',
  },
];

export const studioAddress = offices[0];

export const qrLinks = [
  { label: 'Website', value: 'www.plevid.com' },
  { label: 'Instagram', value: '@plevidgroup' },
  { label: 'Company Profile', value: 'Download Profile' },
  { label: 'Contact Us', value: 'Get in Touch' },
];

export const certifications = {
  heading: 'Certifications',
  items: ['BIS', 'IEC', 'ISO', 'EU Compliance'],
};

export const compliance = {
  heading: 'Compliance',
  items: [
    'Certified Quality Processes',
    'Application-Specific Engineering',
    'International Standards Alignment',
  ],
};

export const sustainability = {
  heading: 'Sustainability',
  items: [
    'Energy-Efficient Solutions',
    'Responsible Material Selection',
    'Long-Life Product Performance',
  ],
};
