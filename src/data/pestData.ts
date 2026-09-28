import {
  PestService,
  ProtectionPlan,
  PestTarget3D,
  ProtectionStep,
  CommercialSector,
  Testimonial,
  FAQItem,
  PhotoShowcaseItem,
  GovernmentCertificate
} from '../types';

export const METRICS_DATA = [
  { label: 'Properties Protected', value: '25,000+', subtext: 'Homes & businesses secured across UP & India' },
  { label: 'Customer Rating', value: '4.9 ★', subtext: 'Based on 5,800+ verified customer reviews' },
  { label: 'Safe Formulation', value: '100% Odorless', subtext: 'CIB&RC approved child & pet friendly' },
  { label: 'Rapid Dispatch', value: '< 2 Hours', subtext: 'Emergency response across Lucknow & major hubs' }
];

export const CERTIFICATIONS_DATA = [
  { name: 'CIB&RC Approved Chemicals', issuer: 'Central Insecticides Board & Registration Committee', icon: 'ShieldCheck' },
  { name: 'IPCA Standard Adherence', issuer: 'Indian Pest Control Association Benchmark', icon: 'CheckCircle2' },
  { name: 'FSSAI & ISO Audit Compliance', issuer: 'Food Safety & Environmental Standards', icon: 'Award' },
  { name: 'Certified Master Technicians', issuer: 'Govt. Trained Professional Applicators', icon: 'Leaf' }
];

export const SERVICES_DATA: PestService[] = [
  {
    id: 'termite-shield',
    iconName: 'Shield',
    title: 'Termite Control & Barrier Treatment',
    subtitle: 'Drill-Fill-Seal Deep Chemical Barrier Protection',
    description: 'Specialized subterranean anti-termite treatment utilizing non-repellent termiticides injected into walls, door frames, and flooring to eradicate the queen and safeguard your costly woodwork.',
    features: [
      'Precision Drill-Fill-Seal at skirting & wooden door frames',
      'CIB&RC approved odorless Imidacloprid / Fipronil termiticides',
      'Sub-slab & foundation barrier preventing soil-to-wood tunnels',
      'Written 3 to 5 Year Warranty with complimentary checkups'
    ],
    scientificCategory: 'Subterranean Termite Protocol',
    urgencyLevel: 'Emergency',
    targetPests: ['Subterranean Termites', 'Drywood Termites', 'Wood Borers', 'Powder Post Beetles'],
    treatmentMethod: 'Drill-Fill-Seal Injection + Sub-Soil Liquid Barrier',
    guaranteeDays: 1095, // 3 Years
    featured: true,
    image: '/images/termite-drill.jpg',
    badge: '3-5 Year Written Warranty'
  },
  {
    id: 'general-pest-perimeter',
    iconName: 'Bug',
    title: 'Cockroach & Ant Herbal Gel Treatment',
    subtitle: '100% Odorless Herbal Gel + Residual Micro-Spraying',
    description: 'Advanced fipronil herbal gel dot technology placed in kitchen cabinet hinges, drawers, and warm appliance voids. Eliminates entire cockroach nests within 72 hours without emptying kitchen utensils.',
    features: [
      'No need to empty utensils, groceries, or vacate your kitchen',
      '100% odorless, non-toxic, and safe for infants, elders & pets',
      'Cascade effect: roaches carry bait to hidden nests for 100% elimination',
      'Skirting & drain residual spray to stop drainage re-entry'
    ],
    scientificCategory: 'Blattella Germanica & Formicidae Protocol',
    urgencyLevel: 'High',
    targetPests: ['German Cockroaches', 'American Roaches', 'Black & Red Ants', 'Silverfish', 'Lizards'],
    treatmentMethod: 'Bayer Maxforce Herbal Gel Dots + Non-staining Skirting Spray',
    guaranteeDays: 90,
    featured: true,
    image: '/images/kitchen-gel.jpg',
    badge: '100% Odorless & Safe'
  },
  {
    id: 'bedbug-thermal',
    iconName: 'Flame',
    title: 'Bed Bug Thermal & Chemical Eradication',
    subtitle: 'Dual-Phase Superheated Steam & Micro-Dusting',
    description: 'Thorough eradication for box beds, deewans, mattresses, and wall cracks. Includes 2 comprehensive service rounds (Day 1 and Day 15) to eliminate live bugs as well as newly hatched eggs.',
    features: [
      '2-Visit complete cycle treatment (breaks 14-day egg hatch cycle)',
      'High-pressure steam penetration for mattress seams & headboards',
      'Eco-friendly micro-encapsulated spray in bed crevices & sockets',
      'Complete peace of mind with 90-day written service warranty'
    ],
    scientificCategory: 'Cimex Lectularius Eradication',
    urgencyLevel: 'Emergency',
    targetPests: ['Bed Bugs', 'Bed Bug Nymphs & Eggs', 'Mattress Mites', 'Fleas'],
    treatmentMethod: 'Thermal Steam Infusion + Residual Contact Chemistry',
    guaranteeDays: 90,
    featured: true,
    image: '/images/bedbug-steam.jpg',
    badge: '2-Visit Egg-Cycle Protocol'
  },
  {
    id: 'rodent-exclusion',
    iconName: 'Home',
    title: 'Rodent & Rat Management',
    subtitle: 'Ultrasonic Exclusion + Tamper-Proof Bait Stations',
    description: 'Scientific rodent proofing for residential villas, godowns, shops, and false ceilings. We deploy non-toxic glue boards, tamper-proof lockable bait stations, and seal exterior drainage & cable entry points.',
    features: [
      'Identification of active burrowing paths, pipe entries, and false ceilings',
      'Safe, lockable bait boxes & industrial glue pads (zero hazard to pets)',
      'Wire-mesh exclusion to block return routes permanently',
      'Odor-free carcass recovery and anti-bacterial sanitization'
    ],
    scientificCategory: 'Rodentia Structural Exclusion',
    urgencyLevel: 'High',
    targetPests: ['Roof Rats', 'Bandicoot Rats', 'Norway Rats', 'House Mice'],
    treatmentMethod: 'Multi-Catch Glue Traps + Rodenticide Bait Stations + Entry Sealing',
    guaranteeDays: 180,
    featured: true,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    badge: 'Tamper-Proof Station Baiting'
  },
  {
    id: 'mosquito-fly-mist',
    iconName: 'Wind',
    title: 'Mosquito & Vector Control Fogging',
    subtitle: 'Thermal Smoke Fogging & Anti-Larval Treatment',
    description: 'Crucial vector control for residential colonies, gardens, basements, and open plots in UP & India. Kills adult biting mosquitoes while biological larvicides neutralize larvae in coolers and stagnant water.',
    features: [
      'Cold ULV fine misting for indoor rooms and office spaces',
      'Thermal smoke fogging for compound walls, gardens, and drains',
      'Temephos anti-larval drops in water coolers, tanks, and sumps',
      'Proven defense against Dengue, Chikungunya & Malaria vectors'
    ],
    scientificCategory: 'Culicidae Vector Suppression',
    urgencyLevel: 'Moderate',
    targetPests: ['Aedes Aegypti Mosquitoes', 'Anopheles Mosquitoes', 'Culex Mosquitoes', 'Drain Flies'],
    treatmentMethod: 'Thermal Outdoor Fogging + Indoor ULV Mist + Biological Larvicide',
    guaranteeDays: 30,
    featured: false,
    image: '/images/mosquito-fogging.jpg',
    badge: 'Dengue & Malaria Shield'
  },
  {
    id: 'commercial-biosecurity',
    iconName: 'Building2',
    title: 'Commercial & Industrial Pest Management',
    subtitle: 'Audit-Ready FSSAI, ISO 22000 & HACCP Standards',
    description: 'Comprehensive pest management contracts for restaurants, cloud kitchens, food factories, hotels, hospitals, universities, and logistics warehouses across Uttar Pradesh and all major Indian cities.',
    features: [
      'Complete FSSAI compliance registers, bait station mapping & visit logs',
      'Monthly/Fortnightly scheduled night services without business disruption',
      'Full Material Safety Data Sheets (MSDS) & GST compliant invoicing',
      'Priority 2-hour emergency callback SLA across Indian branches'
    ],
    scientificCategory: 'Enterprise Integrated Pest Management (IPM)',
    urgencyLevel: 'High',
    targetPests: ['Pantry Pests', 'Drain Flies', 'Cockroaches', 'Rats', 'Stored Grain Insects'],
    treatmentMethod: 'Comprehensive IPM + Digital Site Register + Barrier Sealing',
    guaranteeDays: 365,
    featured: true,
    image: '/images/restaurant-ipm.jpg',
    badge: 'FSSAI & HACCP Compliant'
  }
];

export const PLANS_DATA: ProtectionPlan[] = [
  {
    id: 'plan-single',
    name: 'Single Relief Treatment',
    badge: '1-Time Quick Fix',
    priceMonthly: 799,
    priceAnnual: 799,
    description: 'Instant relief from active cockroach, ant, or insect infestation for 1 BHK / 2 BHK apartments in Lucknow & across India.',
    includes: [
      '1 Comprehensive on-site treatment (Herbal Gel + Skirting spray)',
      'Coverage for German cockroaches, black/red ants & silverfish',
      '100% odorless chemistry (no need to empty kitchen cabinets)',
      '30-Day Money-Back Warranty with 1 free recall visit if needed',
      'CIB&RC approved child and pet-friendly formulation'
    ],
    guaranteeText: '30-Day Warranty + Free Re-visit within 30 Days',
    recommendedFor: '1 BHK / 2 BHK Flats, small rental apartments needing immediate pest relief',
    popular: false,
    image: '/images/kitchen-gel.jpg'
  },
  {
    id: 'plan-quarterly',
    name: 'Quarterly Home Shield AMC',
    badge: 'Most Popular Across UP & India',
    priceMonthly: 1999, // ₹1,999 / year
    priceAnnual: 1999,
    description: 'Year-round 365-day complete pest defense with 4 scheduled seasonal services and unlimited free emergency visits.',
    includes: [
      '4 Scheduled quarterly deep services (once every 3 months)',
      'Complete coverage: Cockroaches, Ants, Spiders, Lizards & Silverfish',
      'Herbal gel baiting in kitchen + exterior drainage perimeter spray',
      '100% FREE unlimited emergency callout visits between visits',
      '365-Day Unconditional Pest-Free Guarantee with dedicated technician',
      'Valid for 1 BHK, 2 BHK, and 3 BHK flats'
    ],
    guaranteeText: '365-Day Total Pest-Free Written Warranty',
    recommendedFor: 'Independent houses, flats, and villas wanting continuous zero-pest living',
    popular: true,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'plan-comprehensive',
    name: 'Total Home & Termite Comprehensive AMC',
    badge: 'All-Inclusive Maximum Protection',
    priceMonthly: 3999, // ₹3,999 / year
    priceAnnual: 3999,
    description: 'Ultimate all-in-one protection combining 4 general pest control visits PLUS specialized Anti-Termite Drill-Fill-Seal treatment.',
    includes: [
      'Everything included in Quarterly Home Shield AMC (4 Visits/Year)',
      'Complete Anti-Termite Drill-Fill-Seal treatment for woodwork & walls',
      'Written 3 to 5 Year Warranty on Termite Protection',
      'Rodent inspection and tamper-proof bait box installation',
      '2-Hour priority emergency response SLA in Lucknow & major cities',
      'Senior Entomologist lead inspection with digital service certificate'
    ],
    guaranteeText: '100% Comprehensive 3-Year Anti-Termite + 1-Year Pest Warranty',
    recommendedFor: 'Homeowners, luxury villas, bungalows, and high-value properties',
    popular: false,
    image: '/images/termite-drill.jpg'
  }
];

export const PEST_TARGETS_3D: PestTarget3D[] = [
  {
    id: 'termite',
    name: 'Subterranean Termite',
    latinName: 'Coptotermes formosanus / Termitidae',
    threatLevel: 'Critical',
    habit: 'Wood chewing, furniture hollowing & mud tubes on brick walls',
    icon: 'ShieldAlert',
    repelledState: true
  },
  {
    id: 'cockroach',
    name: 'German Cockroach',
    latinName: 'Blattella germanica',
    threatLevel: 'Severe',
    habit: 'Kitchen cabinets, under-sink spaces & gas stove crevices',
    icon: 'Bug',
    repelledState: true
  },
  {
    id: 'rodent',
    name: 'House Rat / Roof Rat',
    latinName: 'Rattus rattus',
    threatLevel: 'Critical',
    habit: 'False ceilings, kitchen storerooms & electrical wire gnawing',
    icon: 'Zap',
    repelledState: true
  },
  {
    id: 'bedbug',
    name: 'Bed Bug',
    latinName: 'Cimex lectularius',
    threatLevel: 'Severe',
    habit: 'Mattress seams, deewans, box beds & wooden headboards',
    icon: 'Flame',
    repelledState: true
  }
];

export const PROTECTION_STEPS: ProtectionStep[] = [
  {
    number: '01',
    title: 'Site Inspection & Infestation Mapping',
    subtitle: 'Nesting Zones & Moisture Detection',
    description: 'Our certified technician examines wall voids, wooden skirtings, kitchen joints, and drainage gullies to map the pest root cause.',
    highlights: ['Skirting & Door Frame Check', 'Drainage Entry Point Audit', 'Species Identification'],
    icon: 'Scan',
    image: '/images/technician-action.jpg'
  },
  {
    number: '02',
    title: 'Targeted Eco-Safe Treatment',
    subtitle: '100% Odorless CIB&RC Chemistry',
    description: 'Application of herbal gel dots, sub-surface drill-fill termiticides, or micro-encapsulated spray that destroys colonies without foul smell.',
    highlights: ['Zero Utensil Shifting Required', 'Child & Pet Friendly Formulations', 'Non-Staining Application'],
    icon: 'Sparkles',
    image: '/images/kitchen-gel.jpg'
  },
  {
    number: '03',
    title: 'Structural Barrier Fortification',
    subtitle: 'Blocking Re-entry Routes',
    description: 'We install bait networks, seal structural cracks, and apply perimeter barriers to ensure pests cannot migrate from outside or drains.',
    highlights: ['Drainage & Pipe Sealing', 'Tamper-Proof Rodent Stations', 'Perimeter Residual Layer'],
    icon: 'ShieldCheck',
    image: '/images/termite-drill.jpg'
  },
  {
    number: '04',
    title: 'Digital Warranty & Support',
    subtitle: 'Free Re-Treatment Commitment',
    description: 'Receive your GST bill, chemical safety sheet (MSDS), and warranty card. If pests recur during warranty, we re-treat 100% free of charge.',
    highlights: ['Written Service Guarantee', 'Free Unlimited Callbacks', '24/7 Helpline Support'],
    icon: 'Award',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
  }
];

export const COMMERCIAL_SECTORS: CommercialSector[] = [
  {
    id: 'restaurants-food',
    title: 'Restaurants, Cafes & Cloud Kitchens',
    industry: 'Food & Beverage',
    iconName: 'Utensils',
    description: 'Zero-cockroach kitchen certification compliant with FSSAI hygiene standards. Night application ensures zero interruption to dining guests.',
    complianceStandards: ['FSSAI Food Safety Act', 'HACCP Biosecurity', 'Clean Kitchen Certification'],
    image: '/images/restaurant-ipm.jpg'
  },
  {
    id: 'warehouses-logistics',
    title: 'Warehouses, Godowns & Logistics Hubs',
    industry: 'Supply Chain & Storage',
    iconName: 'Warehouse',
    description: 'High-volume rodent exclusion, pest bait station mapping, and termite protection for corrugated boxes and bulk food grains across transport nagars.',
    complianceStandards: ['ISO 22000 Standards', 'Pest Station Mapping Logs', 'Fire & Wire Gnaw Prevention'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'healthcare-hospitals',
    title: 'Hospitals, Clinics & Diagnostic Labs',
    industry: 'Healthcare & Pharma',
    iconName: 'Hospital',
    description: 'Ultra-sensitive medical pest control utilizing odorless herbal gels and non-allergenic chemistry safe for ICUs, patient wards, and operating rooms.',
    complianceStandards: ['NABH Infection Control', 'Bio-Medical Hygiene Protocol', 'Zero-Chemical Drift'],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'education-campus',
    title: 'Colleges, Universities & Hostels',
    industry: 'Educational Institutions',
    iconName: 'GraduationCap',
    description: 'Large-scale campus pest defense for auditoriums, student hostels, canteens, and libraries (including Amity University zone & institutions).',
    complianceStandards: ['Campus Health & Safety', 'Hostel Bed Bug Sanitization', 'Mosquito Vector Defense'],
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Vikramaditya Verma',
    role: 'Homeowner, Gomti Nagar',
    propertyType: 'Residential Home',
    location: 'Lucknow, Uttar Pradesh',
    quote: 'We had an acute termite issue in our wooden wardrobes and door frames. Srivastava Pest Control came the same day, drilled neatly at the skirting, and injected the chemical with zero mess. 2 years on, not a single trace of termites. Highly professional team!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    verifiedCustomer: true,
    serviceType: 'Anti-Termite Treatment',
    propertyImage: '/images/termite-drill.jpg'
  },
  {
    id: 'test-2',
    author: 'Pooja Agarwal',
    role: 'Resident, Indira Nagar',
    propertyType: 'Residential Home',
    location: 'Lucknow, Uttar Pradesh',
    quote: 'The herbal cockroach gel is genuinely odorless! We have a 6-month-old baby and 2 dogs, so we were nervous about toxic sprays. The technician put tiny dots inside kitchen cabinets without removing a single utensil. Within 3 days, all roaches disappeared completely.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    verifiedCustomer: true,
    serviceType: 'Cockroach & Ant Gel AMC',
    propertyImage: '/images/kitchen-gel.jpg'
  },
  {
    id: 'test-3',
    author: 'Sunil Mehrotra',
    role: 'Managing Director, Mehrotra Sweets & Restaurant',
    propertyType: 'Restaurant Chain',
    location: 'Lucknow & Kanpur',
    quote: 'Srivastava Pest Control manages our commercial kitchen biosecurity. Their service logs and FSSAI audit documentation helped us ace our food inspection with 100% compliance. 24/7 priority support is genuine.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    verifiedCustomer: true,
    serviceType: 'Commercial IPM Contract',
    propertyImage: '/images/restaurant-ipm.jpg'
  },
  {
    id: 'test-4',
    author: 'Rajesh Singhal',
    role: 'Facility Manager, Tech Park',
    propertyType: 'Commercial Office',
    location: 'Noida & Lucknow',
    quote: 'We contracted them for our corporate facilities across Uttar Pradesh. Their technician team is well-uniformed, background verified, and punctual. Their rodent exclusion in false ceilings solved our 6-month problem in one visit.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
    verifiedCustomer: true,
    serviceType: 'Annual Maintenance Contract',
    propertyImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80'
  }
];

export const TESTIMONIALS = TESTIMONIALS_DATA;
export const PROTECTION_PLANS = PLANS_DATA;

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'Where is your office located, and do you serve outside Lucknow?',
    answer: 'Our main registered office is located at Shop no 2 Shyam enclave Malhaur near Amity university Lucknow-226028. While our headquarters are in Lucknow, Srivastava Pest Control Services operates a nationwide service network providing residential, commercial, and industrial pest management across Uttar Pradesh (Kanpur, Varanasi, Prayagraj, Gorakhpur, Noida, Ghaziabad) and all major cities all over India.'
  },
  {
    id: 'faq-2',
    category: 'General',
    question: 'How quickly can your technician visit my premises in Lucknow or elsewhere in India?',
    answer: 'We offer same-day priority dispatch within 2 hours across Lucknow (Malhaur, Chinhat, Gomti Nagar, Indira Nagar, Aliganj, Hazratganj, etc.) and scheduled 24 to 48-hour service appointments across Uttar Pradesh and all major cities in India. For immediate assistance, call our Primary number at 9838425271 or Alternative at 8299405414.'
  },
  {
    id: 'faq-3',
    category: 'Safety & Eco',
    question: 'Is your cockroach gel and spray treatment safe for children, pregnant women, and pets?',
    answer: 'Yes, 100%! We exclusively use CIB&RC (Central Insecticides Board) approved, government-registered formulations. Our kitchen cockroach treatment uses odorless fipronil herbal gel dots that require zero clearing of utensils and produce no toxic fumes or foul odor. Your family can stay in the house comfortably during and after the treatment.'
  },
  {
    id: 'faq-4',
    category: 'Pricing & Plans',
    question: 'What are the charges for pest control in Lucknow and Uttar Pradesh?',
    answer: 'Our charges are highly competitive and transparent: Single 1-BHK / 2-BHK general pest & cockroach treatment starts from just ₹799 - ₹999. Our most popular Annual AMC (Quarterly Home Shield with 4 visits + unlimited free emergency calls) is ₹1,999/year. Anti-Termite treatments with 3-5 Year Warranty start from ₹2,499 - ₹3,499 depending on square footage (approx. ₹3-₹5 per sq ft). No hidden fees.'
  },
  {
    id: 'faq-5',
    category: 'Safety & Eco',
    question: 'How does your Anti-Termite Drill-Fill-Seal treatment work, and does it damage walls?',
    answer: 'Our technicians drill tiny 12mm holes at skirting level and door frame junctions at 1-foot intervals, inject specialized termiticide deep under high pressure, and neatly seal the holes with matching white cement or filler. This creates an invisible chemical barrier that terminates the colony queen and prevents future attacks for 3 to 5 years, with zero structural damage.'
  },
  {
    id: 'faq-6',
    category: 'Commercial',
    question: 'Do you provide FSSAI audit documentation, GST bills, and MSDS chemical sheets for businesses?',
    answer: 'Yes. For all commercial contracts (restaurants, sweet shops, warehouses, hospitals, offices, factories across India), we provide GST invoices, FSSAI pest management logbooks, technician certificates, and Material Safety Data Sheets (MSDS) to ensure you clear all health and safety audits effortlessly.'
  }
];

export const FAQS_DATA = FAQ_DATA;

export const PHOTO_SHOWCASE_DATA: PhotoShowcaseItem[] = [
  {
    id: 'photo-1',
    title: 'Precision Drill-Fill-Seal Anti-Termite Woodwork Shield',
    subtitle: 'Deep Chemical Barrier Injected Along Skirtings & Door Frames',
    category: 'termite',
    location: 'Gomti Nagar Extension, Lucknow',
    image: '/images/termite-drill.jpg',
    beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    afterImage: '/images/termite-drill.jpg',
    description: 'Subterranean termites were silently hollowing expensive teak door frames and skirting boards. Our certified technician applied calibrated 12mm drill-fill pressure injection with CIB&RC approved Imidacloprid.',
    problemIdentified: 'Hollow wooden sound, mud tubes running along wall plaster, and microscopic wood powder.',
    treatmentDone: '12mm precision hole drilling at 1-foot intervals along wooden frames, pressurized termiticide injection, and neat surface color matching seal.',
    resultAchieved: 'Queen colony neutralized within 48 hours. Woodwork preserved without replacing doors, saving ₹1,80,000+ in carpentry replacement.',
    warranty: '5-Year Written Free Warranty',
    badge: 'Woodwork Saved',
    serviceName: 'Termite Control & Barrier Treatment'
  },
  {
    id: 'photo-2',
    title: 'Zero-Disruption Modular Kitchen Odorless Cockroach Gel',
    subtitle: '100% Odorless Bayer Herbal Dots — Zero Utensils Vacated',
    category: 'kitchen',
    location: 'Indira Nagar & Malhaur, Lucknow',
    image: '/images/kitchen-gel.jpg',
    beforeImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
    afterImage: '/images/kitchen-gel.jpg',
    description: 'Homeowner needed cockroach elimination but could not move kitchen utensils, spices, or expose infants to toxic chemical fumes. Our odorless gel dot protocol solved it cleanly.',
    problemIdentified: 'German cockroach colonies inside cabinet hinges, refrigerator motor vents, and under-sink pipe fittings.',
    treatmentDone: 'Applied 80+ micro-gel dots of Bayer Maxforce in hidden crevices, accompanied by non-staining botanical skirting residual barrier.',
    resultAchieved: '100% nest collapse via domino transfer effect in 72 hours. No chemical smell, zero cleaning required after treatment.',
    warranty: '90-Day Free Callback Guarantee',
    badge: '100% Odorless & Safe',
    serviceName: 'Cockroach & Ant Herbal Gel Treatment'
  },
  {
    id: 'photo-3',
    title: 'Dual-Phase Superheated Bed Bug Steam & Crevice Disinfestation',
    subtitle: '180°C Dry Thermal Steam Breaks Egg-Hatching Cycle',
    category: 'bedbug',
    location: 'Aliganj & Mahanagar, Lucknow',
    image: '/images/bedbug-steam.jpg',
    beforeImage: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80',
    afterImage: '/images/bedbug-steam.jpg',
    description: 'Severe bed bug infestation causing sleepless nights and painful red welts. We deployed industrial high-temperature dry steam combined with a 2-visit service schedule.',
    problemIdentified: 'Live bed bugs, cluster spots, and microscopic egg casings deeply buried in box-bed joints and mattress seams.',
    treatmentDone: 'High-pressure steam infusion along mattress seams, headboard cavities, and electrical faceplates, followed by day-15 second visit.',
    resultAchieved: 'Complete eradication of both live insects and newly hatched nymphs. Natural non-toxic steam sanitized mattresses safely.',
    warranty: '90-Day Complete Peace Guarantee',
    badge: '100% Sleep Peace',
    serviceName: 'Bed Bug Thermal & Chemical Eradication'
  },
  {
    id: 'photo-4',
    title: 'Audit-Ready Commercial Kitchen & Restaurant Biosecurity',
    subtitle: 'FSSAI Hygiene Grade A+ Compliant Midnight Operations',
    category: 'commercial',
    location: 'Hazratganj & Vibhuti Khand, Lucknow',
    image: '/images/restaurant-ipm.jpg',
    beforeImage: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&w=800&q=80',
    afterImage: '/images/restaurant-ipm.jpg',
    description: 'High-end fine dining restaurant required strict FSSAI compliance and zero pests in prep counters without leaving harmful chemical residues on food equipment.',
    problemIdentified: 'Nocturnal American roaches near grease traps, drain flies, and potential rodent intrusion from rear loading dock.',
    treatmentDone: 'Bio-enzymatic drain foam flush, food-grade gel matrices on appliance motors, and tamper-proof rodent perimeter stations.',
    resultAchieved: 'Restaurant awarded A+ Hygiene rating in food safety inspection. Zero smell and zero interruption to banquet dinners.',
    warranty: 'Annual Corporate IPM Contract',
    badge: 'FSSAI Audit A+',
    serviceName: 'Commercial & Industrial Pest Management'
  },
  {
    id: 'photo-5',
    title: 'Certified Master Technician On-Site Inspection & Mapping',
    subtitle: 'Govt. Trained Technicians with Digital Moisture & Acoustic Probes',
    category: 'all',
    location: 'Amar Shaheed Path & Sushant Golf City, Lucknow',
    image: '/images/technician-action.jpg',
    description: 'Our certified applicator conducting full forensic inspection of wall voids, moisture levels, and wooden frames before choosing targeted chemical formulations.',
    problemIdentified: 'Unclear pest signs where homeowner suspected either wood borers or subterranean termites.',
    treatmentDone: 'Digital acoustic sensor check and thermal scanning confirmed localized termite mud tunnels inside concealed drywall cavity.',
    resultAchieved: 'Targeted spot barrier implemented immediately, preventing spread across the entire 4-bedroom villa.',
    warranty: 'Complimentary On-Site Inspection',
    badge: 'Certified Specialist',
    serviceName: 'Termite Control & Barrier Treatment'
  },
  {
    id: 'photo-6',
    title: 'Heavy Logistics Godown & Industrial Rodent Exclusion',
    subtitle: 'Tamper-Proof Station Grid & Anti-Gnawing Barriers',
    category: 'commercial',
    location: 'Transport Nagar & Barabanki Industrial Corridor',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    description: 'Large distribution warehouse storing packaged consumer goods and food grains needed total rodent exclusion to prevent inventory damage.',
    problemIdentified: 'Rats chewing carton boxes, electrical cable conduits, and dropping feces near packaging lines.',
    treatmentDone: 'Installed 40 lockable tamper-proof rodent bait stations along perimeter walls, reinforced entry pipes with steel wire mesh.',
    resultAchieved: '100% elimination of rodent sightings and zero product damage reported over 12 consecutive months.',
    warranty: 'Full Industrial AMC & Logbooks',
    badge: 'Zero Stock Loss',
    serviceName: 'Rodent & Rat Management'
  },
  {
    id: 'photo-7',
    title: 'Outdoor Lawn, Garden & Compound Cold Fogging',
    subtitle: 'Vector Eradication Against Dengue, Malaria & Chikungunya',
    category: 'all',
    location: 'Vipul Khand & Gomti Nagar, Lucknow',
    image: '/images/mosquito-fogging.jpg',
    description: 'Residential society with heavy greenery and stagnant rainwater pools suffered severe evening mosquito swarms.',
    problemIdentified: 'Aedes and Anopheles breeding in garden hedges, storm water trenches, and basement corners.',
    treatmentDone: 'Thermal fogging of boundary foliage and biological larvicide application in open water drains and coolers.',
    resultAchieved: 'Immediate knockdown of adult biting mosquitoes; safe outdoor play area restored for children in the evening.',
    warranty: 'Colony & Villa Package',
    badge: 'Dengue Shield',
    serviceName: 'Mosquito & Vector Control Fogging'
  },
  {
    id: 'photo-8',
    title: 'Before & After: Complete Home Transformation Handover',
    subtitle: 'From Severe Infestation Distress to Spotless, Odorless Tranquility',
    category: 'before_after',
    location: 'Jankipuram & Malhaur, Lucknow',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    description: 'A 3-BHK home plagued by simultaneous termite mud tubes and kitchen cockroaches transformed into a safe, spotless sanctuary with our Total Home Comprehensive plan.',
    problemIdentified: 'Simultaneous termite spread in master bedroom wardrobe and heavy cockroach clusters in modular kitchen cabinets.',
    treatmentDone: 'Integrated dual protocol: Drill-Fill-Seal chemical wall barrier + Bayer herbal gel dots across kitchen and bathrooms.',
    resultAchieved: 'Complete eradication of all pests, zero chemical smells, and a 3-year written protection warranty certificate issued on site.',
    warranty: '3-Year Termite + 1-Year General AMC',
    badge: '100% Odorless Verified',
    serviceName: 'Total Home & Termite Comprehensive AMC'
  }
];

export const GOVERNMENT_CERTIFICATES: GovernmentCertificate[] = [
  {
    id: 'cibrc-central-license',
    title: 'Central Insecticides Board (CIB&RC) Commercial Pest Control License',
    badge: 'Govt. Central License',
    category: 'CIB&RC Registered Chemical Protocol',
    issuer: 'Directorate of Plant Protection, Quarantine & Storage, Ministry of Agriculture & Farmers Welfare, Govt. of India',
    regNumber: 'CIB&RC/GOI/UP-LKO/2021/8842',
    legalAct: 'The Insecticides Act, 1968 & Insecticides Rules, 1971 (Section 13)',
    validityText: 'Active & Verified • Pan-India Commercial Validity',
    image: '/images/cert-cibrc.jpg',
    description: 'Mandatory central license authorizing commercial handling, storage, and application of CIB&RC approved odorless termiticides, herbal fipronil gels, and micro-encapsulated formulations across residential and enterprise premises.',
    authorizedScope: [
      'Subterranean Termite reticulation and drill-fill chemical barriers',
      'Food-safe herbal cockroach bait matrices (100% odorless)',
      'Cold ULV misting & thermal vector smoke fogging',
      'Micro-encapsulated residual perimeter sprays'
    ]
  },
  {
    id: 'up-state-agriculture-license',
    title: 'Uttar Pradesh State Agriculture Pest Control Operator License',
    badge: 'State Govt. Authorized',
    category: 'Commercial Pest Management Operator',
    issuer: 'Department of Agriculture & Plant Protection Directorate, Government of Uttar Pradesh',
    regNumber: 'UP-AGRI/PEST-LIC/LKO/4109',
    legalAct: 'U.P. Commercial Pest Management Rules & Plant Protection Regulations',
    validityText: 'Govt. Certified Operator • Valid 2024–2029 (5-Year Cycle)',
    image: '/images/cert-up-license.jpg',
    description: 'Official State Government of Uttar Pradesh operational license issued to Srivastava Pest Control Services for commercial extermination, hospital biosecurity, and residential disinfection across Lucknow and all 75 UP districts.',
    authorizedScope: [
      'Residential apartments, villas & builder society pest management',
      'Structural wood borer & pre/post construction termite proofing',
      'Public health vector control (Dengue, Malaria, Chikungunya)',
      'Rodent burrow trapping and structural mesh exclusion'
    ]
  },
  {
    id: 'fssai-iso-biosecurity-cert',
    title: 'FSSAI & ISO 22000 Food Biosecurity & Audit Compliance Certification',
    badge: 'Food Safety & Hygiene Grade A+',
    category: 'FSSAI & Industrial Hygiene Standards',
    issuer: 'Food Safety and Standards Authority of India (FSSAI) & Quality Management Standards Benchmark',
    regNumber: 'FSSAI-BIOSEC/REG/9920147',
    legalAct: 'Food Safety and Standards Act, 2006 & ISO 22000 Food Biosecurity Standards',
    validityText: 'Audit Grade A+ • Certified for Commercial Food Units',
    image: '/images/cert-fssai.jpg',
    description: 'Specialized accreditation verifying audit-ready Integrated Pest Management (IPM) protocols for commercial restaurants, bakeries, cloud kitchens, cold storage, and FMCG warehouses with zero food contamination risk.',
    authorizedScope: [
      'Restaurants, banquet halls & sweet manufacturing facilities',
      'Industrial food processing plants & grain storage warehouses',
      'Digital barcode station mapping & FSSAI audit registers',
      'Non-toxic bio-enzymatic drain flushing & kitchen sanitization'
    ]
  }
];

