export type Service = {
  title: string;
  short: string;
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
  tagline: "Move Cargo with Confidence",
  email: "info@globalfreight.lk",
  phone: "+94 XX XXX XXXX",
  location: "Colombo, Sri Lanka",
  website: "www.globalfreight.lk",
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
  { value: "Air • Ocean • Ground", label: "Flexible multimodal freight planning for urgent, bulk, and domestic cargo." },
  { value: "Import & Export", label: "End-to-end shipment coordination for businesses trading across borders." },
  { value: "Sri Lanka to the World", label: "Local expertise backed by practical international freight support." },
];

export const services: Service[] = [
  {
    title: "Air Freight",
    short: "Fast and dependable air cargo solutions for urgent shipments.",
    description:
      "Our air freight services are ideal for urgent, high-value, and time-sensitive shipments. We support import and export cargo through efficient coordination and careful handling.",
    bestFor: ["Urgent deliveries", "High-value cargo", "Time-critical shipments"],
  },
  {
    title: "Ocean Freight",
    short: "Flexible sea freight services for containerized and bulk shipments.",
    description:
      "Cost-effective solutions for large-volume international cargo, supporting both FCL and LCL operations across global routes.",
    bestFor: ["Container shipments", "Bulk cargo", "International trade"],
  },
  {
    title: "Ground Freight",
    short: "Reliable inland transportation and local distribution.",
    description:
      "Inland transport, cargo pickup, and final delivery. We provide practical coordination for domestic cargo movement.",
    bestFor: ["Domestic transport", "Last-mile delivery", "Distribution"],
  },
  {
    title: "Import & Export",
    short: "End-to-end shipment planning and freight forwarding.",
    description:
      "Assisting businesses with inbound and outbound coordination, route management, and logistics support.",
    bestFor: ["Importers", "Exporters", "Trading businesses"],
  },
  {
    title: "Customs Coordination",
    short: "Professional support for documentation and compliance.",
    description:
      "Reducing complexity in customs procedures and trade documentation for smoother shipment processing.",
    bestFor: ["Clearance support", "Documentation", "Compliance"],
  },
  {
    title: "Warehousing",
    short: "Secure storage and cargo consolidation solutions.",
    description:
      "Temporary storage, shipment staging, and organized delivery planning to maintain supply chain continuity.",
    bestFor: ["Inventory support", "Consolidation", "Staging"],
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
    step: "01",
    title: "Assessment",
    description: "Understanding your cargo type, urgency, and destination.",
  },
  {
    step: "02",
    title: "Planning",
    description: "Identifying the most suitable mode: air, ocean, or ground.",
  },
  {
    step: "03",
    title: "Coordination",
    description: "Handling documentation and operational planning.",
  },
  {
    step: "04",
    title: "Movement",
    description: "Professional transport with careful monitoring.",
  },
  {
    step: "05",
    title: "Delivery",
    description: "Ensuring safe arrival and final follow-through.",
  },
];

export const faqs = [
  {
    question: "What types of freight do you handle?",
    answer:
      "We support air freight, ocean freight, ground freight, import and export coordination, customs support, and warehousing services.",
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
