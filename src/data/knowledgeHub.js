export const knowledgeHubContent = {
  label: 'Knowledge Hub',
  title: 'Understanding Light',
  subtitle: 'See Light. Understand Light. Design Better.',
  topics: [
    {
      id: 'cct',
      title: 'CCT (Correlated Colour Temperature)',
      description:
        'Defines the warmth or coolness of light. Lower values create warm, comfortable environments; higher values support focus and visibility.',
      scale: ['2700K', '3000K', '4000K', '5000K', '6500K'],
    },
    {
      id: 'cri',
      title: 'CRI (Colour Rendering Index)',
      description:
        'Measures how accurately light reveals true colours. A higher CRI ensures better visual comfort and colour fidelity.',
      highlight: '90+',
    },
    {
      id: 'beam-angles',
      title: 'Beam Angles (Light Distribution)',
      description:
        'Controls the spread of light. Narrow beams highlight, wide beams illuminate.',
      angles: ['15°', '24°', '36°', '60°'],
    },
    {
      id: 'ugr',
      title: 'UGR (Unified Glare Rating)',
      description:
        'Indicates glare level and visual comfort. Lower UGR values mean better comfort in interior spaces.',
    },
    {
      id: 'ip-ratings',
      title: 'IP Ratings (Ingress Protection)',
      description:
        'Defines the level of protection against dust and water. Higher IP ratings ensure durability in challenging environments.',
      highlight: 'IP65',
    },
    {
      id: 'lighting-effects',
      title: 'Lighting Effects',
      subtitle: 'Shape. Accentuate. Elevate.',
      description:
        'Different lighting effects create depth, highlight architecture, and enhance the experience of a space.',
      effects: ['Wall Wash', 'Graze', 'Accent', 'Wash', 'Downlight'],
    },
    {
      id: 'sustainability',
      title: 'Sustainability',
      subtitle: 'Light with Responsibility',
      description:
        'Energy-efficient solutions, responsible materials, and long-term performance for a better tomorrow.',
    },
  ],
  footer: {
    title: 'Knowledge Drives Better Design.',
    text: 'The right light, applied the right way, makes every space work better.',
  },
};
