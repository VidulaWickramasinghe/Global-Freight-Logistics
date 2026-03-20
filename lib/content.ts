export type Service = {
  title: string;
  description: string;
  bestFor: string[];
};

export type Industry = {
  title: string;
  description: string;
};

export const company = {
  name: "Global Freight Weight Transportation (Pvt) Ltd.",
  shortName: "Global Freight Weight Transportation",
  tagline: "Moving Cargo with Confidence",
  email: "info@yourcompany.lk",
  phone: "+94 XX XXX XXXX",
  location: "Sri Lanka",
  website: "www.yourcompany.lk",
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Why Choose Us", href: "/why-choose-us" },
  { label: "Industries", href: "/industries" },
  { label: "Contact Us", href: "/contact" },
  { label: "Request a Quote", href: "/quote" },
  { label: "FAQ", href: "/faq" },
] as const;

export const heroStats = [
  { value: "Multi-Modal", label: "Air, ocean, and ground freight support" },
  { value: "End-to-End", label: "Planning, coordination, handling, and delivery support" },
  { value: "Sri Lanka + Global", label: "Local expertise connected to international trade routes" },
];

export const services: Service[] = [
  {
    title: "Air Freight Services",
    description:
      "Fast and dependable air cargo solutions for urgent, high-value, and time-sensitive shipments that require efficient movement and careful coordination.",
    bestFor: ["Urgent deliveries", "Small to medium consignments", "High-value goods", "Time-critical commercial cargo"],
  },
  {
    title: "Ocean Freight Services",
    description:
      "Flexible sea freight solutions for import and export cargo, including containerized, commercial, and bulk shipments across international routes.",
    bestFor: ["Container shipments", "Bulk cargo", "Commercial imports and exports", "Long-distance international trade"],
  },
  {
    title: "Ground Freight Transportation",
    description:
      "Reliable inland transportation for domestic pickup, delivery, local distribution, and integrated cargo movement after airport or port arrival.",
    bestFor: ["Domestic transport", "Warehouse-to-site delivery", "Regional distribution", "Integrated post-arrival movement"],
  },
  {
    title: "Import & Export Freight Forwarding",
    description:
      "Professional freight forwarding support for businesses moving cargo into and out of international markets with structured coordination.",
    bestFor: ["Importers", "Exporters", "Trading companies", "Growing businesses entering global markets"],
  },
  {
    title: "Customs Coordination Support",
    description:
      "Support for customs-related logistics coordination, shipment document flow, and smoother cargo processing through required procedures.",
    bestFor: ["Import clearance coordination", "Export processing support", "Documentation management", "Trade compliance assistance"],
  },
  {
    title: "Warehousing & Distribution",
    description:
      "Secure cargo storage, staging, consolidation, and delivery planning support that improves inventory flow and shipment readiness.",
    bestFor: ["Temporary storage", "Cargo consolidation", "Dispatch support", "Supply chain coordination"],
  },
  {
    title: "Door-to-Door Logistics",
    description:
      "Convenient end-to-end shipment handling that coordinates multiple transport stages under one streamlined logistics service.",
    bestFor: ["Businesses seeking convenience", "Full shipment coordination", "Reduced logistics complexity", "International trade support"],
  },
];

export const industries: Industry[] = [
  {
    title: "Manufacturing",
    description: "Freight coordination for raw materials, equipment, components, and finished goods.",
  },
  {
    title: "Retail & Wholesale",
    description: "Reliable cargo movement for stock replenishment, distribution, and commercial inventory flow.",
  },
  {
    title: "Import / Export Trading",
    description: "Cross-border shipment support for businesses handling international trade activity.",
  },
  {
    title: "Construction & Project Cargo",
    description: "Transport planning and logistics coordination for project-based equipment and cargo movement.",
  },
  {
    title: "Industrial Supply Chains",
    description: "Consistent freight support that helps maintain supply chain continuity and operational confidence.",
  },
  {
    title: "E-commerce",
    description: "Shipment and distribution support to strengthen fulfilment operations and stock movement.",
  },
  {
    title: "SME & Corporate Businesses",
    description: "Flexible logistics support designed for both growing enterprises and established organizations.",
  },
];

export const values = [
  "Reliability",
  "Integrity",
  "Efficiency",
  "Customer Commitment",
  "Safety & Care",
  "Global Mindset",
];

export const processSteps = [
  {
    title: "Shipment Assessment",
    description: "We review cargo type, urgency, origin, destination, and service requirements.",
  },
  {
    title: "Route & Mode Planning",
    description: "We identify the most suitable transport solution across air, ocean, or ground freight.",
  },
  {
    title: "Documentation & Coordination",
    description: "We support preparation, communication, and planning to keep shipment flow organized.",
  },
  {
    title: "Cargo Movement",
    description: "Your shipment is moved safely through the selected channel with structured handling.",
  },
  {
    title: "Delivery & Follow-Through",
    description: "We remain engaged through final delivery with professionalism, care, and support.",
  },
];

export const faqs = [
  {
    question: "What types of freight do you handle?",
    answer:
      "We support air freight, ocean freight, ground freight, import and export coordination, customs support, warehousing, and door-to-door logistics services.",
  },
  {
    question: "Do you manage both local and international shipments?",
    answer:
      "Yes. We coordinate domestic cargo movement within Sri Lanka and international freight across major trade routes.",
  },
  {
    question: "Can you help with import and export logistics?",
    answer:
      "Yes. We provide freight forwarding, route planning, shipment coordination, and documentation-related logistics support for trade operations.",
  },
  {
    question: "Do you provide warehousing services?",
    answer:
      "Yes. We offer temporary storage, cargo staging, consolidation, and organized delivery planning support.",
  },
  {
    question: "How do I request a quote?",
    answer:
      "You can use the Request a Quote page or contact our team directly with your shipment details.",
  },
];
