const projectImg = (filename) => `/Projects/img-to-use/${encodeURIComponent(filename)}`;

export const projects = [
  {
    id: 'yoo-villas',
    title: 'Yoo Villas',
    status: 'Completed',
    location: 'Pune, Maharashtra',
    client: 'Panchshil Realty',
    designer: 'YOO Studio · Kelly Hoppen CBE',
    image: projectImg('Yoo villas.png'),
    description:
      'Panchshil Realty’s YOO-branded villa community — architectural, landscape, and pool lighting across 40+ luxury residences designed with YOO Studio and Kelly Hoppen CBE.',
  },
  {
    id: 'amari-raaya',
    title: 'Amari Raaya Maldives',
    status: 'Completed',
    location: 'Raa Atoll, Maldives',
    client: 'ONYX Hospitality Group',
    designer: 'LDP',
    image: projectImg('Amari Raya.png'),
    description:
      'Private island resort with 187 beach and overwater villas — architectural, landscape, and pool lighting across premium hospitality amenities on 15.4 hectares.',
  },
  {
    id: 'grand-hyatt-goa',
    title: 'Grand Hyatt Goa',
    status: 'Completed',
    location: 'Bambolim, Goa',
    client: 'DB Hospitality (Dynamix Group)',
    designer: 'Chandrashekhar Kanetkar',
    image: projectImg('grand hyatt.jpg.avif'),
    description:
      '28-acre waterfront resort with 313 rooms and suites — Indo-Portuguese architecture illuminated across landscaped gardens, pools, and façades overlooking Bambolim Bay.',
  },
  {
    id: 'taj-lakefront',
    title: 'Taj Lakefront Bhopal',
    status: 'Completed',
    location: 'Bhopal, Madhya Pradesh',
    client: 'Dilip Buildcon Ltd',
    designer: 'Hafeez Contractor · Studio HBA',
    image: projectImg('Taj Lakefront Bhopal.jpg.avif'),
    description:
      '198-key luxury hotel on the Upper Lake — architectural, landscape, and pool lighting across dining venues and public spaces by Hafeez Contractor and Studio HBA.',
  },
  {
    id: 'novotel-mumbai-airport',
    title: 'Novotel Mumbai Airport Road',
    status: 'Completed',
    location: 'Mumbai, Maharashtra',
    client: 'Gundecha Builders',
    designer: 'Light@Work',
    image: projectImg('Novotel.jpg'),
    description:
      'Full-service business hotel with 203 rooms and suites — architectural, interior, and landscape lighting across lobby, dining, and guest experiences.',
  },
  {
    id: 'fairfield-marriott-goa',
    title: 'Fairfield by Marriott Calangute',
    status: 'Completed',
    location: 'Calangute, Goa',
    client: 'Vision Hospitality',
    designer: 'Light@Work',
    image: projectImg('Marriott Goa.jpg'),
    description:
      '169-room hospitality lighting programme for lobby, dining, spa, and guest rooms — interior, landscape, and public-area illumination for Vision Hospitality.',
  },
  {
    id: 'monte-south',
    title: 'Monte South',
    status: 'Completed',
    location: 'Byculla, Mumbai',
    client: 'Marathon Realty · Adani Realty',
    designer: 'Hafeez Contractor · LSG Inc.',
    image: projectImg('Monte South.jpg'),
    description:
      'Four iconic 64-storey towers across 12.5 acres — architectural, landscape, and feature lighting for one of South Mumbai’s largest luxury residential communities.',
  },
  {
    id: 'riverglad-villas',
    title: 'Riverglad Villas',
    status: 'Completed',
    location: 'Goa',
    client: 'B & F Realty',
    designer: 'Light@Work',
    image: projectImg('riverglad.jpg'),
    description:
      '16 luxury 4 & 5 BHK villas on approx. 8.5 acres with 100m+ river frontage — architectural, landscape, and outdoor lighting across a resort-style private community.',
  },
  {
    id: 'ayuska-by-avadh',
    title: 'Ayuska by Avadh',
    status: 'Completed',
    location: 'Navsari, Gujarat',
    client: 'Avadh Group',
    designer: 'Light@Work',
    image: projectImg('Ayuska.png'),
    description:
      '120+ premium villas across 23+ acres with 70% landscaped open space — architectural, landscape, and exterior lighting for wellness-focused luxury living.',
  },
  {
    id: 'vera-by-s-raheja',
    title: 'Vera by S. Raheja',
    status: 'Completed',
    location: 'Juhu (JVPD), Mumbai',
    client: 'S. Raheja Realty',
    designer: 'Brainwave Designs',
    image: projectImg('Panaroma by S Raheja.jpg'),
    description:
      'Boutique 10-apartment tower with spacious 4 BHK residences — architectural, landscape, and feature lighting for a low-density luxury development in Juhu.',
  },
  {
    id: 'r-bagmane-residence',
    title: 'R. Bagmane Residence',
    status: 'Completed',
    location: 'Bengaluru, Karnataka',
    client: 'R. Bagmane',
    designer: 'Lightbook',
    image: projectImg('R Bagmane Residence.jpg'),
    description:
      'Bespoke ultra-luxury private residence — custom architectural, interior, landscape, and feature lighting integrating water features and outdoor living spaces.',
  },
  {
    id: 'encube-rd-centre',
    title: 'Encube Ethicals Global R&D Centre',
    status: 'Operational',
    location: 'Palava (Dombivli), Maharashtra',
    client: 'Encube Ethicals',
    designer: 'AIMS',
    image: projectImg('Encube.jpg'),
    description:
      '200,000 sq.ft pharmaceutical research campus — interior, façade, landscape, and smart lighting controls across a ₹100+ crore facility for 250+ scientists.',
  },
  {
    id: 'ajanta-pharma-hq',
    title: 'Ajanta Pharma Corporate HQ',
    status: 'Completed',
    location: 'Chakala, Andheri East, Mumbai',
    client: 'Ajanta Pharma Ltd.',
    designer: 'Brainwave Designs',
    image: projectImg('Ajanta Pharma.png'),
    description:
      '100,000+ sq.ft corporate headquarters with premium glass façade — architectural, interior, and feature lighting for Ajanta Pharma’s Mumbai R&D and corporate campus.',
  },
  {
    id: 'bhumi-world-outlet-mall',
    title: 'Outlet Mall of India',
    status: 'Ongoing',
    location: 'Bhiwandi, Maharashtra',
    client: 'Bhumi World',
    designer: 'AIMS',
    image: projectImg('Bhumi World.png'),
    description:
      '750,000 sq.ft retail and entertainment hub — architectural, landscape, external, and feature lighting for Maharashtra’s first dedicated outlet mall with 150+ brands.',
  },
  {
    id: 'mumbai-cruise-terminal',
    title: 'Mumbai International Cruise Terminal',
    status: 'Completed',
    location: 'Ballard Pier, Mumbai',
    client: 'Mumbai Port Authority',
    designer: 'AIMS',
    image: projectImg('MICT.webp'),
    description:
      'India’s largest cruise terminal at 4.15 lakh sq.ft — interior, exterior, public-area, and architectural lighting across the iconic wave-inspired G+3 facility.',
  },
  {
    id: 'dlf-one-midtown',
    title: 'DLF One Midtown',
    status: 'Completed',
    location: 'New Delhi',
    client: 'DLF Limited',
    designer: 'HB Design',
    image: projectImg('DLF One Mid Town.jpg'),
    description:
      'Premium high-rise residential community with expansive central greens — architectural, landscape, exterior, and amenity lighting across world-class lifestyle facilities.',
  },
  {
    id: 'jain-derasar-monte-south',
    title: 'Jain Derasar Monte South',
    status: 'Completed',
    location: 'Byculla, Mumbai',
    client: 'Adani–Marathon',
    designer: 'Lighting Concept',
    image: projectImg('Jain Temple.jpg'),
    description:
      'Traditional white marble Jain temple within the 12.5-acre Monte South development — architectural, heritage, landscape, and feature lighting enhancing divinity and craftsmanship.',
  },
  {
    id: 'dlf-the-dahlias',
    title: 'DLF The Dahlias',
    status: 'Ongoing',
    location: 'Gurugram, Haryana',
    client: 'DLF Limited',
    designer: 'Hafeez Contractor',
    image: projectImg('Dahilas.jpg'),
    description:
      'DLF’s flagship ultra-luxury community with expansive 4 & 5 BHK residences — architectural, landscape, feature, and exterior lighting across a grand clubhouse and amenity spaces.',
  },
  {
    id: 'peninsula-bishops-gate',
    title: 'Peninsula Bishops Gate',
    status: 'Completed',
    location: 'Breach Candy, Mumbai',
    client: 'Peninsula Land',
    designer: 'Hafeez Contractor · Lightbook',
    image: projectImg('Peninsula Bishops Gate.jpeg'),
    description:
      '12 exclusive 5 BHK ultra-luxury residences with Arabian Sea views — architectural, interior, landscape, and feature lighting across the lowest-density luxury development in South Mumbai.',
  },
  {
    id: 'tesla-india-hq',
    title: 'Panchshil Business Park East',
    status: 'Completed',
    location: 'Kharadi, Pune',
    client: 'Panchshil Realty · Tesla India Motors HQ',
    designer: 'Nulty',
    image: projectImg('Tesla HQ.webp'),
    description:
      '2.1 million sq.ft Grade-A office campus — architectural, interior, workplace, and feature lighting for Tesla India Motors HQ and global corporate occupiers.',
  },
];
