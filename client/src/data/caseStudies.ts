export interface CaseStudyData {
  id: number;
  slug: string;
  title: string;
  category: string;
  image: string;
  heroImage: string;
  challenge: string;
  challengeDetail: string;
  solution: string;
  solutionDetail: string;
  result: string;
  resultMetrics: { label: string; value: string; number: number; suffix: string }[];
  tags: string[];
  techStack: string[];
  url: string;
  timeline: string;
  industry: string;
  services: string[];
  testimonial: {
    quote: string;
    name: string;
    role: string;
  };
}

export const caseStudies: CaseStudyData[] = [
  {
    id: 1,
    slug: "eva-beauty-unisex",
    title: "Eva Beauty Unisex",
    category: "Beauty & Salon",
    image: "/images/portfolio-eva-beauty-clean.webp",
    heroImage: "/images/portfolio-eva-beauty-hero-optimized.webp",
    challenge: "Transform salon operations with seamless booking and e-commerce",
    challengeDetail:
      "Eva Beauty Unisex needed a modern digital presence that could handle online bookings, showcase their full range of services, and sell beauty products — all while reflecting their premium brand identity. Their existing workflow was entirely manual, leading to missed appointments and lost revenue opportunities.",
    solution: "Custom React platform with integrated booking and e-commerce",
    solutionDetail:
      "We designed and built a custom React-based platform that unified their online presence. The solution included a real-time booking engine synced with their calendar, a product catalog with secure checkout, and a mobile-first design that matched their premium in-salon experience. Every interaction was designed to reduce friction and drive conversions.",
    result: "150% increase in online bookings, 200% revenue growth",
    resultMetrics: [
      { label: "Online Bookings", value: "+150%", number: 150, suffix: "%" },
      { label: "Revenue Growth", value: "+200%", number: 200, suffix: "%" },
      { label: "Mobile Traffic", value: "+85%", number: 85, suffix: "%" },
    ],
    tags: ["React", "E-commerce", "Booking System"],
    techStack: ["React", "Node.js", "Stripe", "TailwindCSS", "PostgreSQL"],
    url: "https://evabeautyunisex.com/",
    timeline: "8 weeks",
    industry: "Beauty & Personal Care",
    services: ["Web Design", "E-commerce", "Booking Integration", "Mobile Optimization"],
    testimonial: {
      quote:
        "SCUART transformed our online presence completely. Bookings increased by 150% in the first month after launch.",
      name: "Maria R.",
      role: "Owner",
    },
  },
  {
    id: 2,
    slug: "etnia-braids",
    title: "Etnia Braids",
    category: "Hair Salon",
    image: "/images/portfolio-etnia-braids-clean.webp",
    heroImage: "/images/portfolio-etnia-braids-hero-optimized.webp",
    challenge: "Create portfolio showcase with integrated booking system",
    challengeDetail:
      "Etnia Braids is a specialty hair braiding studio that needed to visually showcase their intricate work while making it easy for clients to book appointments. Their previous online presence didn't reflect the artistry and craftsmanship of their services, and they were losing potential clients to competitors with stronger digital presences.",
    solution: "Visual-first portfolio with seamless appointment booking",
    solutionDetail:
      "We built a visually stunning portfolio-driven website using Next.js that puts their braiding artistry front and center. High-quality galleries with filtering by style, an integrated booking system with service selection, and a fully responsive design that looks stunning on any device. The design language emphasizes elegance and cultural identity.",
    result: "40% increase in client inquiries, premium positioning",
    resultMetrics: [
      { label: "Client Inquiries", value: "+40%", number: 40, suffix: "%" },
      { label: "Avg. Session Duration", value: "+65%", number: 65, suffix: "%" },
      { label: "Bounce Rate", value: "-30%", number: 30, suffix: "%" },
    ],
    tags: ["Next.js", "Portfolio", "Mobile Responsive"],
    techStack: ["Next.js", "React", "TailwindCSS", "Vercel", "Calendly API"],
    url: "https://etniabraids.com/",
    timeline: "6 weeks",
    industry: "Beauty & Hair Care",
    services: ["Web Design", "Portfolio Development", "Booking Integration"],
    testimonial: {
      quote:
        "The booking system they built has streamlined our entire operation. Our clients love the seamless experience.",
      name: "Diana L.",
      role: "Manager",
    },
  },
  {
    id: 3,
    slug: "arriba-gold",
    title: "Arriba Gold",
    category: "E-commerce",
    image: "/images/portfolio-arriba-gold-clean.webp",
    heroImage: "/images/portfolio-arriba-gold-hero.webp",
    challenge: "Build scalable e-commerce platform for premium chocolate brand",
    challengeDetail:
      "Arriba Gold, a premium Ecuadorian chocolate brand, needed an e-commerce platform that could handle international shipping, multi-currency payments, and convey the luxury positioning of their artisanal products. They required a solution that would scale with their growing international demand while maintaining the premium feel of their brand.",
    solution: "Shopify-powered e-commerce with premium brand experience",
    solutionDetail:
      "We developed a custom Shopify store with a luxurious design that reflects the premium quality of Arriba Gold's cacao products. The platform features multi-currency support, international shipping integration, inventory management, and a storytelling approach that connects customers with the origin of each product. Every detail — from product photography guidelines to checkout flow — was optimized for conversion.",
    result: "International shipping enabled, 300% sales increase",
    resultMetrics: [
      { label: "Sales Increase", value: "+300%", number: 300, suffix: "%" },
      { label: "International Orders", value: "+180%", number: 180, suffix: "%" },
      { label: "Cart Abandonment", value: "-45%", number: 45, suffix: "%" },
    ],
    tags: ["Shopify", "Payment Gateway", "Inventory"],
    techStack: ["Shopify", "Liquid", "JavaScript", "Stripe", "ShipStation"],
    url: "https://arribagold.com/",
    timeline: "10 weeks",
    industry: "Food & Premium Goods",
    services: ["E-commerce Development", "Brand Design", "Payment Integration", "Shipping Setup"],
    testimonial: {
      quote:
        "Professional, creative, and incredibly responsive. They understood our brand vision from day one and delivered beyond expectations.",
      name: "Carlos M.",
      role: "Founder",
    },
  },
  {
    id: 4,
    slug: "healthy-choice-ny",
    title: "Healthy Choice NY",
    category: "Food & Nutrition",
    image: "/images/portfolio-healthy-choice-clean.webp",
    heroImage: "/images/portfolio-healthy-choice-hero.webp",
    challenge: "Streamline catering orders and meal customization",
    challengeDetail:
      "Healthy Choice NY, a health-focused catering and meal prep company in New York, needed a digital platform to streamline their ordering process. Customers were placing orders via phone and email, leading to errors and inefficiencies. They needed a system that could handle custom meal plans, dietary restrictions, and bulk catering orders seamlessly.",
    solution: "Custom ordering platform with meal customization engine",
    solutionDetail:
      "We built a React-based ordering platform with a sophisticated meal customization engine. Customers can build custom meal plans based on dietary preferences, schedule recurring deliveries, and place bulk catering orders — all through an intuitive, mobile-friendly interface. The backend integrates with their kitchen management system for real-time order processing.",
    result: "50% reduction in order processing time",
    resultMetrics: [
      { label: "Order Processing", value: "-50%", number: 50, suffix: "%" },
      { label: "Online Orders", value: "+120%", number: 120, suffix: "%" },
      { label: "Customer Retention", value: "+35%", number: 35, suffix: "%" },
    ],
    tags: ["React", "Menu System", "Ordering"],
    techStack: ["React", "Node.js", "MongoDB", "Stripe", "TailwindCSS"],
    url: "https://healthychoicenewyork.com/",
    timeline: "12 weeks",
    industry: "Food & Nutrition",
    services: ["Web Application", "Ordering System", "Payment Integration", "UX Design"],
    testimonial: {
      quote:
        "The ordering system cut our processing time in half. Our customers love how easy it is to customize their meals now.",
      name: "Alex P.",
      role: "Operations Director",
    },
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudyData | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
