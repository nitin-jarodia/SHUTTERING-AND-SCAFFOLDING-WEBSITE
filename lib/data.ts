import {
  Building2,
  Clock3,
  Factory,
  HardHat,
  Landmark,
  Layers3,
  ShieldCheck,
  Truck,
  Wrench,
  Zap
} from "lucide-react";

export const company = {
  name: "SteelRise Shuttering & Scaffolding",
  shortName: "SteelRise",
  phone: "+91 98765 43210",
  email: "enquiry@steelrise.co.in",
  address: "Plot 42, Industrial Estate, Sector 16, Faridabad, Haryana 121002",
  location: "Delhi NCR, Haryana, Uttar Pradesh and Rajasthan",
  hours: "Mon-Sat, 8:00 AM - 7:00 PM",
  whatsapp:
    "https://wa.me/919876543210?text=Hello%20SteelRise%2C%20I%20need%20a%20quote%20for%20scaffolding%20and%20shuttering%20material."
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Insights" },
  { href: "/contact", label: "Contact" }
];

export const stats = [
  { value: 30, suffix: "+", label: "Years of site experience" },
  { value: 1000, suffix: "+", label: "Projects supported" },
  { value: 48, suffix: "hr", label: "Dispatch on common stock" },
  { value: 12, suffix: "pt", label: "Pre-dispatch checks" }
];

export const products = [
  {
    name: "Cuplock System",
    category: "Scaffolding Systems",
    badge: "High demand",
    description:
      "Modular access system with fast locking joints for multi-level work fronts and repeatable site layouts.",
    useCase: "Facade access, slab work, bridge and commercial projects",
    specs: ["Fast erection", "Rigid bay formation", "Rental and sale"]
  },
  {
    name: "Vertical Standards",
    category: "Scaffolding Systems",
    badge: "Core item",
    description:
      "Primary load-bearing members with accurate cup joints for dependable scaffold height extension.",
    useCase: "Scaffold towers, access frames, slab support staging",
    specs: ["Multiple heights", "Checked for straightness", "Bundled dispatch"]
  },
  {
    name: "Horizontal Ledgers",
    category: "Scaffolding Systems",
    badge: "Core item",
    description:
      "Connecting members that lock standards together, improve bay rigidity, and support working platforms.",
    useCase: "Bay formation, deck support, cross-site scaffold layouts",
    specs: ["Secure cup lock", "Multiple lengths", "Site-ready stock"]
  },
  {
    name: "U Head Jack",
    category: "Jacks & Supports",
    badge: "Precision support",
    description:
      "Adjustable top support for beams and shuttering frames where height accuracy and alignment matter.",
    useCase: "Beam support, slab centering, formwork alignment",
    specs: ["Thread checked", "Fine adjustment", "Heavy-duty steel"]
  },
  {
    name: "Base Jack",
    category: "Jacks & Supports",
    badge: "Site leveling",
    description:
      "Adjustable foundation support for stable scaffold setup on uneven or changing working surfaces.",
    useCase: "Ground leveling, scaffold foundation, temporary access",
    specs: ["Stable base plate", "Smooth threads", "Quick setup"]
  },
  {
    name: "Spigot Pin",
    category: "Accessories",
    badge: "Connector",
    description:
      "Precision connector for joining vertical standards securely during scaffold assembly and height extension.",
    useCase: "Vertical extension, scaffold continuity, tower assembly",
    specs: ["Tight fit", "Reusable", "Bulk availability"]
  },
  {
    name: "Steel Challi",
    category: "Working Platforms",
    badge: "Safety focused",
    description:
      "Durable steel working platforms with gripped surfaces for safer access and material handling at height.",
    useCase: "Worker movement, access decks, maintenance platforms",
    specs: ["Anti-slip profile", "Load checked", "Easy handling"]
  },
  {
    name: "Shuttering Plates",
    category: "Formwork",
    badge: "Concrete work",
    description:
      "Robust steel plates for repeatable concrete formwork, clean slab casting, and reliable site cycles.",
    useCase: "Slab shuttering, beam sides, concrete casting",
    specs: ["Cleaned before dispatch", "Strong edges", "Reusable cycles"]
  },
  {
    name: "Span / Acro Span",
    category: "Formwork",
    badge: "Slab support",
    description:
      "Reliable span systems for supporting slab shuttering across variable bay sizes and pour schedules.",
    useCase: "Slab support, centering systems, residential towers",
    specs: ["Adjustable coverage", "Fast alignment", "High reuse"]
  },
  {
    name: "Adjustable Props",
    category: "Jacks & Supports",
    badge: "Fast moving",
    description:
      "Telescopic steel props with dependable adjustment for temporary load support and renovation work.",
    useCase: "Slab support, beam formwork, repair and retrofit work",
    specs: ["Multiple sizes", "Pin checked", "Ready bundles"]
  },
  {
    name: "MS Channels",
    category: "Formwork",
    badge: "Fabrication",
    description:
      "Mild steel channels supplied for shuttering frames, bracing, and heavy structural site supports.",
    useCase: "Formwork fabrication, bracing, heavy support members",
    specs: ["MS sections", "Project quantities", "Site fabrication support"]
  },
  {
    name: "Couplers & Accessories",
    category: "Accessories",
    badge: "Complete kits",
    description:
      "Fixed, swivel, sleeve, and beam couplers with essential scaffold accessories for custom connections.",
    useCase: "Custom scaffold connections, bracing, non-standard layouts",
    specs: ["Fixed and swivel", "Beam clamps", "Bulk supply"]
  }
];

export const productCategories = [
  "All",
  "Scaffolding Systems",
  "Formwork",
  "Jacks & Supports",
  "Working Platforms",
  "Accessories"
];

export const advantages = [
  {
    title: "Material checked before loading",
    description:
      "Every outgoing lot is reviewed for fitment, straightness, cup lock condition, threads, and practical site readiness.",
    icon: ShieldCheck
  },
  {
    title: "Fast rental turnaround",
    description:
      "Common scaffold and shuttering stock is kept ready for quick loading, phased delivery, and urgent replacement.",
    icon: Truck
  },
  {
    title: "Practical quantity guidance",
    description:
      "We help contractors translate slab area, floor height, and pour cycle into sensible rental quantities.",
    icon: HardHat
  },
  {
    title: "Repair and maintenance discipline",
    description:
      "Returned material is cleaned, serviced, sorted, and bundled so your crew does not lose time separating unusable stock.",
    icon: Wrench
  }
];

export const industries = [
  { name: "Residential Towers", icon: Building2 },
  { name: "Industrial Sheds", icon: Factory },
  { name: "Commercial Complexes", icon: Building2 },
  { name: "Roads & Bridges", icon: Landmark },
  { name: "Warehouses", icon: Factory },
  { name: "Plant Maintenance", icon: Wrench }
];

export const projects = [
  {
    title: "High-Rise Residential Frame",
    location: "Gurugram",
    description:
      "Cuplock access, props, spans, and shuttering plates supplied in phase-wise lots for repeat slab cycles.",
    tag: "Residential",
    metrics: ["18 floors", "Phased delivery", "Slab cycle support"]
  },
  {
    title: "Manufacturing Plant Expansion",
    location: "Faridabad",
    description:
      "Heavy-duty props, ledgers, challi, and access scaffold coordinated around active production constraints.",
    tag: "Industrial",
    metrics: ["Live plant", "Access scaffold", "Night dispatch"]
  },
  {
    title: "Logistics Park Warehouse",
    location: "Bhiwadi",
    description:
      "Large-bay scaffolding and formwork support planned around truck access, storage zones, and pour sequences.",
    tag: "Warehouse",
    metrics: ["Large bay", "Bulk stock", "Fast pickup"]
  },
  {
    title: "Metro Station Utility Works",
    location: "Delhi NCR",
    description:
      "Access scaffold, couplers, and platforms supplied for controlled utility work in tight public infrastructure conditions.",
    tag: "Infrastructure",
    metrics: ["Tight access", "Safety-first", "Utility works"]
  }
];

export const testimonials = [
  {
    quote:
      "The material reached site in proper bundles and the threads were clean. Their team understood our slab cycle and helped us avoid an extra idle day.",
    name: "Arvind Malik",
    role: "Project Manager, NCR Buildcon"
  },
  {
    quote:
      "On industrial jobs, quick replacement and clear coordination matters more than fancy promises. SteelRise handled both without follow-up pressure.",
    name: "Neha Sethi",
    role: "Procurement Lead, Axis Infra Works"
  },
  {
    quote:
      "Their quote was clear, transport was coordinated properly, and the site team did not have to sort rejected pieces before starting work.",
    name: "Rakesh Chauhan",
    role: "Site Engineer, Shakti Projects"
  }
];

export const locations = [
  "Delhi",
  "Gurugram",
  "Noida",
  "Faridabad",
  "Ghaziabad",
  "Bhiwadi",
  "Manesar",
  "Sonipat",
  "Jaipur",
  "Panipat"
];

export const faqs = [
  {
    question: "Do you provide scaffolding and shuttering on rent?",
    answer:
      "Yes. We provide rental and supply options for cuplock scaffolding, shuttering plates, props, spans, jacks, challi, couplers, and accessories."
  },
  {
    question: "How quickly can material be delivered?",
    answer:
      "Common stock can usually be dispatched within 24 to 48 hours after quantity confirmation, site address, and commercial approval."
  },
  {
    question: "Is the material checked before delivery?",
    answer:
      "Yes. We check usable condition, threads, locking points, straightness, and bundling before dispatch so site teams can work faster."
  },
  {
    question: "Can you help estimate quantities?",
    answer:
      "Share drawings, slab area, floor height, project duration, and site location. Our team can suggest practical quantities for quotation."
  },
  {
    question: "Can material be supplied phase-wise?",
    answer:
      "Yes. For larger sites, we can plan delivery and pickup in phases so material moves with your slab cycle and site storage limits."
  },
  {
    question: "Do you support urgent replacement material?",
    answer:
      "Subject to stock and location, we support urgent replacement for common items such as props, jacks, ledgers, standards, plates, and couplers."
  }
];

export const insights = [
  {
    title: "How to Plan Scaffolding Rental for Faster Slab Cycles",
    excerpt:
      "A field-tested guide to quantity planning, delivery timing, site storage, and reducing idle material.",
    date: "May 18, 2026",
    readTime: "4 min read",
    category: "Rental Planning"
  },
  {
    title: "Cuplock vs Conventional Scaffolding: When to Choose Each",
    excerpt:
      "Understand where modular systems save labour and where custom tube-and-coupler layouts still fit.",
    date: "Apr 27, 2026",
    readTime: "5 min read",
    category: "Scaffolding"
  },
  {
    title: "Site Checklist Before Ordering Shuttering Material",
    excerpt:
      "The details contractors should confirm before ordering plates, props, spans, and jacks.",
    date: "Mar 14, 2026",
    readTime: "3 min read",
    category: "Formwork"
  }
];

export const processSteps = [
  {
    title: "Share Requirement",
    description:
      "Send product list, approximate quantities, drawings, or project details."
  },
  {
    title: "Get Practical Quote",
    description:
      "We confirm availability, rental duration, transport, and commercial terms."
  },
  {
    title: "Dispatch & Support",
    description:
      "Material is checked, bundled, loaded, and delivered with clear coordination."
  }
];

export const trustHighlights = [
  { label: "Fast dispatch", detail: "Common stock within 24-48 hours", icon: Clock3 },
  { label: "Checked material", detail: "Threads, cups, pins, and straightness", icon: ShieldCheck },
  { label: "Site-ready bundles", detail: "Sorted loading for faster unloading", icon: Truck },
  { label: "Cycle planning", detail: "Guidance for slab and access schedules", icon: HardHat }
];

export const servicePillars = [
  {
    title: "Scaffolding rental",
    description:
      "Cuplock systems, standards, ledgers, platforms, couplers, and access accessories for safe work fronts.",
    icon: Layers3
  },
  {
    title: "Shuttering and formwork",
    description:
      "Plates, props, spans, jacks, channels, and formwork support for repeat concrete cycles.",
    icon: Building2
  },
  {
    title: "Dispatch and site support",
    description:
      "Practical quantity guidance, phased loading, replacement coordination, and return planning.",
    icon: Zap
  }
];
