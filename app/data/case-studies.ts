export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  category: string;
  image: string;
  results: string[];
  description: string;
  challenge: string;
  solution: string;
  impact: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    title: "Luxury Retail Expansion",
    slug: "luxury-retail-expansion",
    category: "Brand Strategy",
    image: "/home-lux-catalog.jpg",
    results: ["+300% Engagement", "+45% Conversions"],
    description: "A comprehensive digital transformation for a luxury retail brand looking to expand their online presence.",
    challenge: "The client faced challenges in transitioning their high-end retail experience to the digital space while maintaining brand exclusivity.",
    solution: "Developed a multi-channel digital strategy combining social media, influencer partnerships, and an immersive e-commerce experience.",
    impact: [
      "300% increase in social media engagement",
      "45% improvement in conversion rates",
      "2.5x growth in online sales",
      "Expanded customer base to 3 new international markets"
    ]
  },
  {
    id: "2",
    title: "Startup Product Launch",
    slug: "startup-product-launch",
    category: "Influencer Campaign",
    image: "/startup-launch.jpg",
    results: ["3M+ Views", "+35% Signups"],
    description: "Strategic product launch campaign for a tech startup entering a competitive market.",
    challenge: "Breaking through market noise and establishing credibility as a new player in a saturated industry.",
    solution: "Implemented a targeted influencer marketing strategy combined with data-driven content creation.",
    impact: [
      "3M+ views across campaign content",
      "35% increase in product signups",
      "Established partnerships with 20+ industry influencers",
      "Generated $2M in pre-launch revenue"
    ]
  },
  {
    id: "3",
    title: "Fashion E-commerce",
    slug: "fashion-e-commerce",
    category: "Visual Identity",
    image: "/home-eCom.jpg",
    results: ["+150% Revenue", "Award Winning"],
    description: "Complete digital transformation for a fashion e-commerce brand seeking to enhance their online presence.",
    challenge: "Outdated digital presence and inconsistent brand messaging across channels.",
    solution: "Created a cohesive visual identity system and implemented an integrated digital marketing strategy.",
    impact: [
      "150% increase in online revenue",
      "Won Best E-commerce Experience Award",
      "40% reduction in customer acquisition costs",
      "Improved customer retention by 60%"
    ]
  }
]; 