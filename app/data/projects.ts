export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  image: string;
  client: string;
  year: string;
  results: {
    metric: string;
    label: string;
  }[];
  challenge: string;
  solution: string;
  technologies: string[];
  duration: string;
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
}

export const projects: Project[] = [
  {
    id: "retail-brand",
    title: "Retail Brand Transformation",
    slug: "retail-brand",
    category: "Social Media",
    description: "Social media strategy driving 150% engagement boost and 35% sales increase",
    image: "/social-media-fashion-forward.jpg",
    client: "Fashion Forward",
    year: "2023",
    results: [
      { metric: "150%", label: "Engagement" },
      { metric: "35%", label: "Sales Lift" },
      { metric: "500K+", label: "Reach" }
    ],
    challenge: "The client needed to increase brand awareness and drive sales through social media in a highly competitive market.",
    solution: "We developed a comprehensive social media strategy focusing on engaging content, influencer partnerships, and targeted advertising campaigns.",
    technologies: ["Facebook Ads", "Instagram", "TikTok", "Influencer Marketing"],
    duration: "6 months",
    testimonial: {
      quote: "The campaign exceeded our expectations. We've seen unprecedented growth in both engagement and sales.",
      author: "Sarah Johnson",
      position: "Marketing Director"
    }
  },
  {
    id: "ecommerce-launch",
    title: "E-commerce Product Launch",
    slug: "ecommerce-launch",
    category: "Photography",
    description: "Visual campaign resulting in 200+ first-week sales for eco-products",
    image: "/eCommerce advertising.jpg",
    client: "EcoHome Essentials",
    year: "2023",
    results: [
      { metric: "200+", label: "First Week Sales" },
      { metric: "85%", label: "CTR" },
      { metric: "1.2M", label: "Impressions" }
    ],
    challenge: "Launching a new eco-friendly product line with limited brand recognition and budget constraints.",
    solution: "Created a visually striking campaign highlighting the sustainable aspects of the products through high-quality photography and strategic placement.",
    technologies: ["Product Photography", "Social Media", "Email Marketing"],
    duration: "3 months",
    testimonial: {
      quote: "The visual campaign perfectly captured our brand's eco-friendly values and drove impressive sales.",
      author: "Michael Chen",
      position: "Brand Manager"
    }
  },
  {
    id: "tech-startup",
    title: "Tech Startup Branding",
    slug: "tech-startup",
    category: "Graphics Design",
    description: "Brand identity driving 300% lead increase for SaaS platform",
    image: "/tech-startup-branding.jpg",
    client: "InnovateTech Solutions",
    year: "2022",
    results: [
      { metric: "300%", label: "Lead Increase" },
      { metric: "40%", label: "Conversion Rate" },
      { metric: "Award", label: "Winning Design" }
    ],
    challenge: "Creating a distinctive brand identity for a new SaaS platform in a crowded market.",
    solution: "Developed a modern, tech-forward brand identity with a focus on user experience and innovation.",
    technologies: ["Brand Design", "UI/UX", "Web Design"],
    duration: "4 months",
    testimonial: {
      quote: "The new brand identity perfectly captures our innovative spirit and has significantly improved our market position.",
      author: "David Kim",
      position: "CEO"
    }
  },
  {
    id: "content-strategy",
    title: "B2B Content Strategy",
    slug: "content-strategy",
    category: "Content Creation",
    description: "Content engine reducing CPA by 60% while boosting MQLs",
    image: "/B2B marketing.png",
    client: "Enterprise Solutions Inc.",
    year: "2022",
    results: [
      { metric: "75%", label: "MQL Increase" },
      { metric: "60%", label: "CPA Reduction" },
      { metric: "4x", label: "ROI" }
    ],
    challenge: "High customer acquisition costs and low quality leads in B2B marketing.",
    solution: "Implemented a comprehensive content strategy focusing on thought leadership and educational content.",
    technologies: ["Content Marketing", "SEO", "LinkedIn Ads"],
    duration: "8 months",
    testimonial: {
      quote: "The content strategy has transformed our lead generation process and significantly reduced our acquisition costs.",
      author: "Lisa Wong",
      position: "Marketing Director"
    }
  },
  {
    id: "restaurant-campaign",
    title: "Restaurant Social Campaign",
    slug: "restaurant-campaign",
    category: "Social Media",
    description: "Geo-targeted campaign driving 40% foot traffic surge",
    image: "/restaurant-social-media-marketing.jpg",
    client: "Flavor Fusion Restaurants",
    year: "2023",
    results: [
      { metric: "500K+", label: "Reach" },
      { metric: "40%", label: "Traffic Boost" },
      { metric: "25%", label: "Repeat Rate" }
    ],
    challenge: "Increasing foot traffic and building a loyal customer base for a new restaurant location.",
    solution: "Created a geo-targeted social media campaign with engaging food content and special promotions.",
    technologies: ["Instagram", "Facebook", "Google Ads"],
    duration: "3 months",
    testimonial: {
      quote: "The campaign brought in more customers than we expected, and the repeat rate is outstanding.",
      author: "James Wilson",
      position: "Restaurant Owner"
    }
  },
  {
    id: "product-catalog",
    title: "Luxury Product Catalog",
    slug: "product-catalog",
    category: "Photography",
    description: "Premium visuals increasing average order value by 65%",
    image: "/jewellery-catalog.jpg",
    client: "Elegance Jewelers",
    year: "2022",
    results: [
      { metric: "65%", label: "AOV Increase" },
      { metric: "50%", label: "Social Shares" },
      { metric: "4.8★", label: "Reviews" }
    ],
    challenge: "Creating a premium visual experience for high-end jewelry products.",
    solution: "Developed a sophisticated photography style and catalog design that highlighted the luxury aspects of the products.",
    technologies: ["Product Photography", "Catalog Design", "E-commerce"],
    duration: "5 months",
    testimonial: {
      quote: "The new catalog has elevated our brand perception and significantly increased our average order value.",
      author: "Emma Thompson",
      position: "Creative Director"
    }
  }
]; 