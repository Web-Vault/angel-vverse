export interface Service {
  id: string;
  title: string;
  slug: string;
  category: string;
  icon: string;
  description: string;
  features: string[];
  benefits: string[];
  process: {
    title: string;
    description: string;
  }[];
  pricing: {
    title: string;
    price: string;
    features: string[];
    recommended?: boolean;
  }[];
}

export const services: Service[] = [
  {
    id: "1",
    title: "Strategic Content Creation",
    slug: "content-creation",
    category: "Content Marketing",
    icon: "PenTool",
    description: "Data-driven content strategies that drive engagement and conversions. We create compelling content that resonates with your audience and achieves your business goals.",
    features: [
      "Content Strategy Development",
      "SEO-Optimized Content Creation",
      "Social Media Content",
      "Blog Writing & Management",
      "Email Marketing Content",
      "Content Calendar Planning"
    ],
    benefits: [
      "Increased brand visibility",
      "Higher engagement rates",
      "Improved search rankings",
      "Better lead generation",
      "Enhanced brand authority"
    ],
    process: [
      {
        title: "Discovery & Analysis",
        description: "We analyze your current content, audience, and goals to develop a tailored strategy."
      },
      {
        title: "Strategy Development",
        description: "Creating a comprehensive content plan aligned with your business objectives."
      },
      {
        title: "Content Creation",
        description: "Producing high-quality, engaging content across multiple platforms."
      },
      {
        title: "Optimization & Distribution",
        description: "Ensuring your content reaches the right audience at the right time."
      }
    ],
    pricing: [
      {
        title: "Starter",
        price: "$999/mo",
        features: [
          "4 Blog Posts",
          "8 Social Media Posts",
          "Basic SEO Optimization",
          "Content Calendar",
          "Monthly Analytics Report"
        ]
      },
      {
        title: "Professional",
        price: "$2,499/mo",
        features: [
          "8 Blog Posts",
          "16 Social Media Posts",
          "Advanced SEO Strategy",
          "Email Newsletter",
          "Weekly Analytics Report",
          "Content Strategy Session"
        ],
        recommended: true
      },
      {
        title: "Enterprise",
        price: "Custom",
        features: [
          "Unlimited Content Creation",
          "Full Content Strategy",
          "Priority Support",
          "Custom Analytics Dashboard",
          "Dedicated Content Team",
          "Monthly Strategy Calls"
        ]
      }
    ]
  },
  {
    id: "2",
    title: "Social Media Management",
    slug: "social-media-marketing",
    category: "Social Media",
    icon: "Smartphone",
    description: "End-to-end social media solutions from strategy to execution. We help you build a strong social media presence that drives engagement and growth.",
    features: [
      "Social Media Strategy",
      "Content Creation & Curation",
      "Community Management",
      "Paid Social Advertising",
      "Analytics & Reporting",
      "Influencer Partnerships"
    ],
    benefits: [
      "Increased brand awareness",
      "Higher engagement rates",
      "Better audience targeting",
      "Improved ROI tracking",
      "Enhanced brand loyalty"
    ],
    process: [
      {
        title: "Audit & Analysis",
        description: "Evaluating your current social media presence and identifying opportunities."
      },
      {
        title: "Strategy Development",
        description: "Creating a comprehensive social media strategy aligned with your goals."
      },
      {
        title: "Content Planning",
        description: "Developing engaging content that resonates with your audience."
      },
      {
        title: "Execution & Optimization",
        description: "Implementing and continuously improving your social media presence."
      }
    ],
    pricing: [
      {
        title: "Essential",
        price: "$1,499/mo",
        features: [
          "3 Social Platforms",
          "12 Posts per Month",
          "Basic Analytics",
          "Community Management",
          "Monthly Strategy Call"
        ]
      },
      {
        title: "Growth",
        price: "$2,999/mo",
        features: [
          "5 Social Platforms",
          "24 Posts per Month",
          "Advanced Analytics",
          "Paid Social Campaigns",
          "Weekly Strategy Call",
          "Influencer Outreach"
        ],
        recommended: true
      },
      {
        title: "Enterprise",
        price: "Custom",
        features: [
          "All Social Platforms",
          "Unlimited Posts",
          "Custom Analytics",
          "Dedicated Social Team",
          "Priority Support",
          "Custom Strategy"
        ]
      }
    ]
  },
  {
    id: "3",
    title: "Brand Photography",
    slug: "product-photography",
    category: "Visual Content",
    icon: "Camera",
    description: "Premium visual storytelling for consistent brand identity. We create stunning imagery that captures your brand's essence and connects with your audience.",
    features: [
      "Product Photography",
      "Lifestyle Photography",
      "Brand Photography",
      "E-commerce Photography",
      "Social Media Photography",
      "Photo Editing & Retouching"
    ],
    benefits: [
      "Professional brand imagery",
      "Consistent visual identity",
      "Higher conversion rates",
      "Better product presentation",
      "Enhanced brand perception"
    ],
    process: [
      {
        title: "Creative Brief",
        description: "Understanding your brand vision and photography requirements."
      },
      {
        title: "Planning & Setup",
        description: "Preparing the perfect environment for your photography needs."
      },
      {
        title: "Photography Session",
        description: "Capturing high-quality images that tell your brand story."
      },
      {
        title: "Editing & Delivery",
        description: "Perfecting your images and delivering them in the right formats."
      }
    ],
    pricing: [
      {
        title: "Basic",
        price: "$999/session",
        features: [
          "4 Hours of Photography",
          "20 Edited Images",
          "Basic Retouching",
          "Digital Delivery",
          "Usage Rights"
        ]
      },
      {
        title: "Professional",
        price: "$1,999/session",
        features: [
          "8 Hours of Photography",
          "50 Edited Images",
          "Advanced Retouching",
          "Multiple Setups",
          "Priority Delivery",
          "Commercial Usage Rights"
        ],
        recommended: true
      },
      {
        title: "Enterprise",
        price: "Custom",
        features: [
          "Full Day Session",
          "Unlimited Images",
          "Premium Retouching",
          "Multiple Locations",
          "Art Direction",
          "Exclusive Rights"
        ]
      }
    ]
  },
  {
    id: "4",
    title: "Digital Advertising",
    slug: "advertising",
    category: "Paid Media",
    icon: "BarChart",
    description: "Targeted PPC campaigns that deliver measurable ROI. We create and optimize digital advertising campaigns that drive results for your business.",
    features: [
      "PPC Campaign Management",
      "Google Ads",
      "Social Media Advertising",
      "Display Advertising",
      "Remarketing Campaigns",
      "Analytics & Optimization"
    ],
    benefits: [
      "Increased lead generation",
      "Better ROI tracking",
      "Improved targeting",
      "Higher conversion rates",
      "Scalable growth"
    ],
    process: [
      {
        title: "Campaign Strategy",
        description: "Developing a data-driven advertising strategy aligned with your goals."
      },
      {
        title: "Campaign Setup",
        description: "Creating and launching optimized advertising campaigns."
      },
      {
        title: "Monitoring & Optimization",
        description: "Continuously improving campaign performance."
      },
      {
        title: "Reporting & Analysis",
        description: "Providing detailed insights and recommendations."
      }
    ],
    pricing: [
      {
        title: "Starter",
        price: "$1,499/mo",
        features: [
          "2 Campaign Platforms",
          "Basic Campaign Setup",
          "Monthly Optimization",
          "Basic Analytics",
          "Weekly Reports"
        ]
      },
      {
        title: "Growth",
        price: "$2,999/mo",
        features: [
          "4 Campaign Platforms",
          "Advanced Campaign Setup",
          "Weekly Optimization",
          "Advanced Analytics",
          "Daily Reports",
          "A/B Testing"
        ],
        recommended: true
      },
      {
        title: "Enterprise",
        price: "Custom",
        features: [
          "All Campaign Platforms",
          "Custom Strategy",
          "Real-time Optimization",
          "Custom Analytics",
          "Dedicated Team",
          "Priority Support"
        ]
      }
    ]
  }
]; 