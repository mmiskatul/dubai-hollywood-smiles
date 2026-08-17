export interface TreatmentCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  featuredTreatments: string[];
}

export interface TreatmentProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface TreatmentDetail {
  slug: string;
  title: string;
  category: string;
  categoryId: string;
  tagline: string;
  shortDescription: string;
  heroImage: string;
  galleryImages?: string[];
  overview: {
    lead: string;
    whatIsIt: string;
    whyConsider: string;
    clinicalConsiderations: string;
  };
  process: TreatmentProcessStep[];
  benefits: {
    title: string;
    description: string;
    icon?: string;
  }[];
  whatToExpect: {
    stage: string;
    title: string;
    detail: string;
  }[];
  aftercare: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedSlugs: string[];
}

export const treatmentCategories: TreatmentCategory[] = [
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    subtitle: "Smile-enhancing treatment options",
    description: "Refined aesthetic dental treatments designed to elevate tooth shade, symmetry, and overall smile radiance with natural-looking precision.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80",
    featuredTreatments: ["teeth-whitening", "porcelain-veneers", "composite-bonding"],
  },
  {
    id: "smile-makeover",
    title: "Smile Makeover",
    subtitle: "Comprehensive aesthetic smile design",
    description: "A tailored multi-disciplinary transformation addressing color, contour, alignment, and facial harmony for your dream Hollywood smile.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
    featuredTreatments: ["smile-makeover", "porcelain-veneers", "clear-aligners"],
  },
  {
    id: "restorative",
    title: "Restorative Dentistry",
    subtitle: "Rebuilding dental strength & function",
    description: "Advanced clinical solutions to repair damaged teeth, replace missing teeth, and restore full masticatory balance with durable materials.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    featuredTreatments: ["dental-implants", "root-canal-therapy", "inlays-onlays"],
  },
  {
    id: "orthodontics",
    title: "Orthodontics",
    subtitle: "Discreet alignment & bite harmony",
    description: "Modern orthodontic technologies including clear aligners that gently guide teeth into optimal positioning without traditional metal brackets.",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=80",
    featuredTreatments: ["clear-aligners"],
  },
  {
    id: "general",
    title: "General Dentistry",
    subtitle: "Routine, preventive & diagnostic care",
    description: "Foundational oral healthcare focusing on thorough examination, gentle professional scaling, cavity prevention, and maintaining gum vitality.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
    featuredTreatments: ["general-preventive-care", "pediatric-dentistry"],
  },
];

export const treatmentsData: TreatmentDetail[] = [
  {
    slug: "teeth-whitening",
    title: "In-Clinic Laser & Professional Teeth Whitening",
    category: "Cosmetic Dentistry",
    categoryId: "cosmetic",
    tagline: "Brighten your natural smile by multiple shades in a single safe, monitored clinic session.",
    shortDescription: "Professional in-office whitening combined with tailored home maintenance for long-lasting, brilliant results without enamel harm.",
    heroImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80",
    overview: {
      lead: "Professional teeth whitening in Dubai is one of the most popular, minimally invasive aesthetic dental procedures available today.",
      whatIsIt: "Our in-clinic teeth whitening utilizes clinically approved photo-activated hydrogen or carbamide peroxide gels under the direct supervision of a dental professional. Unlike over-the-counter kits, our system protects your gum tissues and tooth enamel while lifting years of intrinsic and extrinsic discoloration caused by coffee, tea, smoking, and natural aging.",
      whyConsider: "Patients seek whitening before major events (weddings, media appearances), as part of a smile rejuvenation plan, or simply to restore their youthful natural radiance and self-confidence.",
      clinicalConsiderations: "Pre-existing restorations (such as composite fillings, crowns, or veneers) do not respond to whitening agents. A thorough dental checkup and professional scaling are recommended prior to whitening for maximum efficacy.",
    },
    process: [
      {
        step: "01",
        title: "Consultation & Shade Assessment",
        description: "We evaluate your oral health, identify the origin of staining, record your baseline shade using standardized VITA guides, and confirm your suitability.",
      },
      {
        step: "02",
        title: "Plaque Removal & Gum Barrier",
        description: "Surface plaque is polished away. A specialized protective resin barrier is carefully cured over your gingival margin to safeguard sensitive gums.",
      },
      {
        step: "03",
        title: "Whitening Gel Application",
        description: "Medical-grade whitening gel is precisely applied to tooth surfaces and activated with controlled cold light to accelerate oxygen release.",
      },
      {
        step: "04",
        title: "Multi-Cycle Activation",
        description: "The gel is refreshed across 3 to 4 fifteen-minute cycles while monitoring tooth comfort and shade progression in real time.",
      },
      {
        step: "05",
        title: "Desensitizing & Home Protocol",
        description: "A remineralizing desensitizing treatment is applied, final shade recorded, and personalized maintenance guidance provided.",
      },
    ],
    benefits: [
      {
        title: "Immediate Noticeable Shade Lift",
        description: "Achieve visible improvement of up to 6–8 shades in approximately 60 to 90 minutes.",
      },
      {
        title: "Enamel Safe & Clinically Monitored",
        description: "Supervised by certified dental practitioners to safeguard enamel integrity and minimize sensitivity.",
      },
      {
        title: "Gingival Tissue Protection",
        description: "Custom isolation shields your sensitive gums from irritation during active gel contact.",
      },
      {
        title: "Even, Uniform Coloration",
        description: "Eliminates patchy stains and creates balanced, luminous luminescence across your smile zone.",
      },
    ],
    whatToExpect: [
      {
        stage: "Before Treatment",
        title: "Gentle Polish & Baseline Photos",
        detail: "A light dental polish ensures clean enamel contact. High-resolution baseline photos capture your natural baseline shade.",
      },
      {
        stage: "During Treatment",
        title: "Relaxing Experience with Protective Eyewear",
        detail: "You relax comfortably in our ergonomic treatment suite with protective eyewear while listening to your preferred music.",
      },
      {
        stage: "After Treatment",
        title: "Instant Transformation & White Diet Window",
        detail: "Your new luminous shade is revealed immediately. For the first 48 hours, avoid dark beverages and heavily pigmented foods.",
      },
    ],
    aftercare: [
      "Follow the 'White Diet' for 48 hours (avoid dark coffee, tea, red wine, berries, curry, and tobacco).",
      "Use recommended sensitivity toothpaste if transient mild sensitivity occurs.",
      "Brush twice daily with a soft-bristle toothbrush and maintain daily interdental flossing.",
      "Schedule routine 6-month hygiene visits to sustain your pristine results.",
    ],
    faqs: [
      {
        question: "How long do the whitening results typically last?",
        answer: "With good oral hygiene and mindful consumption of staining foods/beverages, professional whitening results typically last between 12 to 24 months. Periodic touch-ups can maintain your ideal shade indefinitely.",
      },
      {
        question: "Does in-clinic teeth whitening hurt?",
        answer: "Most patients experience no discomfort. Some may experience mild, transient sensitivity to temperature changes during the first 24 hours, which quickly subsides with our post-treatment remineralizing protocol.",
      },
      {
        question: "Will whitening work on existing crowns or composite veneers?",
        answer: "Whitening agents only affect natural tooth enamel. If you have visible anterior fillings, crowns, or veneers, our dentist will discuss harmonious shade matching options.",
      },
      {
        question: "How many shades lighter can my teeth become?",
        answer: "Individual results vary depending on original enamel density and nature of stains, but most patients achieve between 4 and 8 shades of visible lightening in a single session.",
      },
      {
        question: "How soon after the appointment can I eat or drink?",
        answer: "You can drink room-temperature water immediately. For colored foods and beverages, please observe the 48-hour 'White Diet' protocol to allow the enamel pore structure to fully rehydrate.",
      },
    ],
    relatedSlugs: ["porcelain-veneers", "smile-makeover", "composite-bonding"],
  },
  {
    slug: "porcelain-veneers",
    title: "Handcrafted Porcelain & E-Max Veneers",
    category: "Cosmetic Dentistry",
    categoryId: "cosmetic",
    tagline: "Ultra-thin, custom-sculpted ceramic shells designed to transform color, shape, symmetry, and proportions permanently.",
    shortDescription: "Precision-engineered porcelain and E-Max veneers crafted to enhance smile aesthetics with lifelike translucency and exceptional durability.",
    heroImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
    overview: {
      lead: "Porcelain veneers represent the pinnacle of cosmetic dentistry, offering an exquisite blend of artistry and dental science to create flawless Hollywood smiles.",
      whatIsIt: "Veneers are custom-fabricated, ultra-thin (0.3mm–0.5mm) shells of high-grade lithium disilicate (E-Max) or layered feldspathic porcelain bonded securely to the front surface of teeth. They correct intrinsic discoloration, chips, gaps, mild misalignment, and uneven tooth lengths with remarkable natural translucency.",
      whyConsider: "Ideal for patients desiring a long-term, stain-resistant solution for persistent aesthetic concerns that cannot be resolved with whitening or orthodontics alone.",
      clinicalConsiderations: "Requires conservative micro-preparation of the outer enamel layer to ensure seamless margins, natural emergence profile, and enduring adhesion. Candidacy depends on bite alignment and healthy periodontal foundation.",
    },
    process: [
      {
        step: "01",
        title: "Digital Smile Design Consultation",
        description: "Comprehensive photographic analysis, 3D intraoral scanning, facial proportion mapping, and discussion of your ideal smile vision.",
      },
      {
        step: "02",
        title: "Diagnostic Mock-Up & Preview",
        description: "We create a temporary 3D preview in your mouth, allowing you to visually assess and test drive your future smile contours before any preparation.",
      },
      {
        step: "03",
        title: "Micro-Preparation & Digital Impressions",
        description: "Ultra-conservative enamel preparation is performed with precision magnification, followed by digital optical scanning.",
      },
      {
        step: "04",
        title: "Master Dental Lab Artistry",
        description: "Expert ceramists hand-layer and fire your bespoke veneers, replicating natural light reflection, micro-texture, and incisal translucency.",
      },
      {
        step: "05",
        title: "Try-in & Adhesive Cementation",
        description: "Veneers are verified for fit and aesthetics, then permanently bonded using advanced resin cementation and refined for bite balance.",
      },
    ],
    benefits: [
      {
        title: "Stain-Resistant Glass Surface",
        description: "Non-porous medical ceramic resists discoloration from coffee, tea, and smoke permanently.",
      },
      {
        title: "Natural Translucency & Texture",
        description: "Replicates the natural multi-layered light dynamics and anatomical subtleties of youthful enamel.",
      },
      {
        title: "Customized Facial Harmony",
        description: "Every veneer is tailored to complement your lip line, eye symmetry, and facial architecture.",
      },
      {
        title: "Exceptional Longevity",
        description: "Engineered for 10–15+ years of enduring strength when supported by routine dental care.",
      },
    ],
    whatToExpect: [
      {
        stage: "Appointment 1",
        title: "3D Scan, Smile Planning & Digital Mock-Up",
        detail: "Comprehensive diagnostic photos and digital 3D scans. You preview and approve the tailored tooth proportions.",
      },
      {
        stage: "Appointment 2",
        title: "Micro-Prep & Protective Provisionals",
        detail: "Gentle preparation under local anesthesia. Beautiful temporary veneers are placed so you look great during fabrication.",
      },
      {
        stage: "Appointment 3",
        title: "Final Try-In & Permanent Bonding",
        detail: "Veneers are meticulously fitted, verified with your approval, bonded with adhesive resin, and polished to perfection.",
      },
    ],
    aftercare: [
      "Brush twice daily with non-abrasive fluoride toothpaste and floss regularly.",
      "Wear a custom protective nightguard if you have a habit of clenching or grinding teeth during sleep.",
      "Avoid biting directly into non-food objects (pens, ice, hard shells).",
      "Attend bi-annual dental hygiene and clinical checkups to inspect marginal seal.",
    ],
    faqs: [
      {
        question: "How many veneers do most patients choose?",
        answer: "It depends on your smile width and aesthetic goals. Most patients choose between 6 to 10 upper veneers to cover the full visible smile zone for complete harmony.",
      },
      {
        question: "Is the veneer preparation process painful?",
        answer: "No. The procedure is performed under gentle local anesthesia or mild topical numbing. Our ultra-conservative approach ensures optimal comfort throughout.",
      },
      {
        question: "How long do porcelain veneers last?",
        answer: "High-quality porcelain/E-Max veneers routinely last 10 to 15 years or longer when supported by good oral hygiene, regular checkups, and nightguard protection if indicated.",
      },
      {
        question: "Can veneers fall off?",
        answer: "Modern adhesive bonding creates a micro-mechanical chemical fusion with tooth enamel. Debonding is rare when performed with precision protocols and appropriate bite planning.",
      },
      {
        question: "What is the difference between porcelain and composite veneers?",
        answer: "Porcelain veneers are lab-crafted from dense ceramic with superior translucency, stain resistance, and 10–15+ year longevity, whereas composite veneers are sculpted directly chairside with resin and require more frequent polishing.",
      },
    ],
    relatedSlugs: ["smile-makeover", "teeth-whitening", "composite-bonding"],
  },
  {
    slug: "smile-makeover",
    title: "Bespoke Full Smile Makeover",
    category: "Smile Makeover",
    categoryId: "smile-makeover",
    tagline: "A comprehensive, multi-disciplinary transformation uniting aesthetic artistry and structural dental health.",
    shortDescription: "A fully personalized combination of aesthetic and restorative treatments designed to achieve your ideal Hollywood smile with balance and comfort.",
    heroImage: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1200&q=80",
    overview: {
      lead: "A Dubai Hollywood Smiles Makeover is an individually curated treatment program combining cosmetic, restorative, and alignment procedures to create a radiant, cohesive smile.",
      whatIsIt: "Rather than applying a one-size-fits-all formula, our smile makeover process evaluates facial proportions, tooth shape, lip dynamics, gum architecture, and functional occlusion. We integrate treatments such as porcelain veneers, teeth whitening, clear aligners, aesthetic gum recontouring, and restorative crowns to achieve full harmony.",
      whyConsider: "Designed for individuals with complex aesthetic concerns—including discolored, worn, uneven, spaced, or crowded teeth—who desire an authentic, confidence-elevating transformation.",
      clinicalConsiderations: "Every smile makeover begins with establishing a healthy foundation. Any active periodontal issues or dental decay are resolved before cosmetic phases commence.",
    },
    process: [
      {
        step: "01",
        title: "Comprehensive Clinical & Aesthetic Consultation",
        description: "Detailed conversation about your lifestyle, facial features, expectations, and high-definition photography with 3D intraoral scans.",
      },
      {
        step: "02",
        title: "Facial Proportion & Smile Architecture Assessment",
        description: "Digital analysis of your golden proportions, smile curve, lip support, and bite dynamics to formulate a multi-disciplinary treatment blueprint.",
      },
      {
        step: "03",
        title: "Interactive Treatment Planning & Mock-Up",
        description: "Visual simulation and temporary aesthetic preview placed in your mouth so you can test-drive your smile before proceeding.",
      },
      {
        step: "04",
        title: "Staged Clinical Execution",
        description: "Execution of the sequenced treatment phases (e.g. alignment, gum contouring, whitening, and custom veneer/crown placement).",
      },
      {
        step: "05",
        title: "Final Refinement & Maintenance Care",
        description: "Micro-adjustments of bite balance, final photographic documentation, delivery of protective nightguards, and ongoing maintenance care.",
      },
    ],
    benefits: [
      {
        title: "Holistic Facial Rejuvenation",
        description: "Restores tooth support to lips and cheeks, naturally softening lower-face fine lines and elevating facial radiance.",
      },
      {
        title: "Tailored to Your Personality",
        description: "Customized tooth anatomy, shade gradations, and contours designed to feel authentically you, not artificial.",
      },
      {
        title: "Functional Occlusal Balance",
        description: "Optimizes bite distribution to ensure comfortable chewing, speech clarity, and joint protection.",
      },
      {
        title: "Staged, Transparent Roadmap",
        description: "A clear treatment timeline with no unexpected surprises or rushed procedures.",
      },
    ],
    whatToExpect: [
      {
        stage: "Stage 1",
        title: "Discovery & Digital Design",
        detail: "Comprehensive diagnostic imaging, smile goals discussion, and 3D simulation of your prospective results.",
      },
      {
        stage: "Stage 2",
        title: "Foundation & Trial Smile",
        detail: "Addressing underlying dental health followed by an in-mouth trial smile preview for collaborative refinement.",
      },
      {
        stage: "Stage 3",
        title: "Artistic Restoration & Unveiling",
        detail: "Placement of final bespoke ceramic restorations, bite balancing, and celebration of your transformed smile.",
      },
    ],
    aftercare: [
      "Maintain rigorous oral hygiene with daily brushing and flossing.",
      "Wear your custom night retainer/guard as prescribed to protect your ceramic restorations.",
      "Attend routine semi-annual dental examinations and professional prophylactic polishings.",
      "Contact our team promptly if you notice any changes in bite sensation.",
    ],
    faqs: [
      {
        question: "How long does a full Smile Makeover take from start to finish?",
        answer: "A purely cosmetic makeover with veneers typically takes 2 to 3 weeks across 3 appointments. If alignment (clear aligners) or dental implants are required, the process may span several months with a clear phased schedule.",
      },
      {
        question: "Will my new smile look natural or overly artificial?",
        answer: "Our clinical philosophy is centered on natural elegance. We customize subtle translucency, incisal gradients, and anatomical contours that match your unique facial structure, avoiding overly opaque or bulky appearances.",
      },
      {
        question: "Can I see what my smile will look like before starting treatment?",
        answer: "Yes! We utilize 3D digital smile previews and temporary chairside mock-ups that allow you to see and feel your prospective smile directly in your mouth before any permanent work begins.",
      },
      {
        question: "Are payment plans or phased treatments available?",
        answer: "We structure treatment plans with clear staged phases so you can proceed at a pace and sequence that fits your lifestyle and schedule.",
      },
    ],
    relatedSlugs: ["porcelain-veneers", "teeth-whitening", "clear-aligners", "dental-implants"],
  },
  {
    slug: "clear-aligners",
    title: "Discreet Clear Orthodontic Aligners",
    category: "Orthodontics",
    categoryId: "orthodontics",
    tagline: "Virtually invisible, removable aligners designed to straighten teeth comfortably without metal wires or brackets.",
    shortDescription: "Custom clear aligner therapy to correct crowding, gaps, and bite alignment with discreet comfort and digital predictability.",
    heroImage: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=80",
    overview: {
      lead: "Clear aligner therapy offers a modern, discreet alternative to traditional orthodontic braces for adults and teens in Dubai.",
      whatIsIt: "Clear aligners are a series of custom-molded, medical-grade thermoplastic trays engineered using advanced 3D computer modeling. Each set applies gentle, calibrated pressure to move specific teeth incrementally into their calculated positions.",
      whyConsider: "Ideal for professionals and individuals seeking orthodontic correction without noticeable metal brackets, dietary restrictions, or complicated hygiene routines.",
      clinicalConsiderations: "Aligners must be worn 20 to 22 hours per day for optimal predictability. Treatment duration varies based on the degree of crowding, spacing, or bite complexity.",
    },
    process: [
      {
        step: "01",
        title: "3D Digital Orthodontic Scan",
        description: "Quick, radiation-free intraoral digital scan replacing traditional messy impressions.",
      },
      {
        step: "02",
        title: "3D Treatment Simulation",
        description: "Our orthodontist maps your complete tooth movement pathway, providing a video preview of your final smile alignment.",
      },
      {
        step: "03",
        title: "Custom Tray Manufacturing",
        description: "Your personalized series of ultra-clear, laser-trimmed aligners are precision-fabricated.",
      },
      {
        step: "04",
        title: "Progressive Alignment",
        description: "You switch to a new set of aligners every 1 to 2 weeks while attending periodic progress monitoring checkups.",
      },
      {
        step: "05",
        title: "Retention & Smile Stability",
        description: "Delivery of comfortable clear retainers to maintain your aligned teeth in their optimal positions permanently.",
      },
    ],
    benefits: [
      {
        title: "Virtually Invisible Aesthetics",
        description: "Ultra-clear medical polyurethane blends seamlessly with your teeth during daily professional and social interactions.",
      },
      {
        title: "Removable for Dining & Hygiene",
        description: "Remove trays easily when eating, drinking, brushing, and flossing with zero food restrictions.",
      },
      {
        title: "Smooth, Comfortable Edges",
        description: "Laser-scalloped margins prevent gum chafing and soft-tissue irritation associated with metal wires.",
      },
      {
        title: "Predictable Digital Planning",
        description: "See your planned smile outcome and estimated treatment timeline before you begin.",
      },
    ],
    whatToExpect: [
      {
        stage: "Daily Wear",
        title: "20–22 Hours per Day",
        detail: "Wear aligners consistently throughout the day and night, removing only for meals, hot drinks, and brushing.",
      },
      {
        stage: "Checkups",
        title: "Brief Reviews Every 6–8 Weeks",
        detail: "Short clinical check-ins to verify tracking and collect your next batches of custom aligner trays.",
      },
      {
        stage: "Completion",
        title: "Retention Phase",
        detail: "Custom retainers are fitted for nighttime wear to preserve your newly perfected alignment for life.",
      },
    ],
    aftercare: [
      "Rinse and gently brush aligners with lukewarm water and mild clear cleanser daily.",
      "Store aligners in their protective case whenever removed.",
      "Wear retainers consistently as instructed following active alignment.",
      "Keep regular dental hygiene appointments during aligner treatment.",
    ],
    faqs: [
      {
        question: "How long does clear aligner treatment typically take?",
        answer: "Mild alignment corrections may take 4 to 6 months, while moderate to comprehensive cases typically take 9 to 18 months. Your personalized timeline will be calculated during your 3D digital simulation.",
      },
      {
        question: "Will clear aligners affect my speech?",
        answer: "Most patients adjust within 24 to 48 hours with little to no noticeable impact on speech clarity.",
      },
      {
        question: "Can aligners fix gaps between teeth?",
        answer: "Yes, clear aligners are highly effective for closing diastemas (gaps) and correcting dental crowding.",
      },
      {
        question: "Do I need to wear a retainer after aligners?",
        answer: "Yes. Post-orthodontic retention is essential to keep teeth stable in their new positions. We provide comfortable clear retainers for nighttime wear.",
      },
    ],
    relatedSlugs: ["smile-makeover", "teeth-whitening", "porcelain-veneers"],
  },
  {
    slug: "dental-implants",
    title: "Precision Dental Implants & Tooth Replacement",
    category: "Restorative Dentistry",
    categoryId: "restorative",
    tagline: "The gold standard for replacing missing teeth with natural strength, function, and seamless aesthetics.",
    shortDescription: "Biocompatible titanium implants and ceramic crowns engineered to restore chewing power, bone health, and smile confidence permanently.",
    heroImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    overview: {
      lead: "Dental implants provide the most permanent, biologically sound solution for replacing one, several, or all missing teeth.",
      whatIsIt: "A dental implant consists of a medical-grade titanium or zirconia screw that fuses directly with the jawbone (osseointegration), mimicking a natural tooth root. It supports a custom-crafted ceramic crown, bridge, or full-arch prosthesis with unmatched stability.",
      whyConsider: "Unlike removable dentures or traditional bridges, implants do not compromise neighboring healthy teeth and actively prevent the jawbone resorption that naturally follows tooth loss.",
      clinicalConsiderations: "Requires adequate bone density and healthy gums. 3D CBCT imaging is utilized to guide computer-navigated surgical placement with millimeter precision.",
    },
    process: [
      {
        step: "01",
        title: "3D CBCT Diagnostic Scan",
        description: "High-resolution 3D bone imaging and digital planning to map bone volume and anatomical landmarks.",
      },
      {
        step: "02",
        title: "Guided Implant Placement",
        description: "Gentle surgical placement using computer-guided surgical templates under local anesthesia.",
      },
      {
        step: "03",
        title: "Osseointegration Period",
        description: "The biocompatible implant integrates securely with the jawbone over 8 to 12 weeks while supported by a temporary restoration.",
      },
      {
        step: "04",
        title: "Digital Abutment & Crown Scan",
        description: "High-precision digital impression of the integrated implant to fabricate your custom ceramic crown.",
      },
      {
        step: "05",
        title: "Permanent Crown Delivery",
        description: "Secure fixation of your handcrafted ceramic crown, bite verification, and functional testing.",
      },
    ],
    benefits: [
      {
        title: "Preserves Natural Jawbone",
        description: "Stimulates bone tissue to prevent the facial sagging and bone loss associated with missing teeth.",
      },
      {
        title: "Full 100% Chewing Power",
        description: "Restores natural bite force, allowing you to enjoy all your favorite foods with complete confidence.",
      },
      {
        title: "Protects Neighboring Teeth",
        description: "Does not require cutting down adjacent healthy teeth as required for traditional dental bridges.",
      },
      {
        title: "Lifetime Durability Potential",
        description: "With proper hygiene and regular checkups, dental implants can last a lifetime.",
      },
    ],
    whatToExpect: [
      {
        stage: "Consultation & Scan",
        title: "3D Bone Assessment",
        detail: "Accurate evaluation of bone volume, sinus position, and treatment roadmap.",
      },
      {
        stage: "Placement Day",
        title: "Gentle Guided Procedure",
        detail: "Quick, minimally invasive outpatient procedure with mild local anesthesia and minimal post-op tenderness.",
      },
      {
        stage: "Restoration",
        title: "Custom Crown Placement",
        detail: "Final placement of your permanent ceramic crown matching the exact shade and shape of adjacent teeth.",
      },
    ],
    aftercare: [
      "Practice meticulous daily oral hygiene with interdental brushes and water flosser.",
      "Avoid smoking during the initial osseointegration period to support bone healing.",
      "Attend regular clinical implant maintenance visits every 6 months.",
    ],
    faqs: [
      {
        question: "Is dental implant surgery painful?",
        answer: "Most patients report that implant placement involves minimal discomfort—often less than a routine tooth extraction. Local anesthesia ensures total comfort during the procedure, and mild soreness afterwards is easily managed with standard over-the-counter medication.",
      },
      {
        question: "How long does the entire implant process take?",
        answer: "Typically between 3 to 6 months to ensure complete, secure osseointegration with the jawbone before the final permanent crown is attached.",
      },
      {
        question: "What is the success rate of dental implants?",
        answer: "Dental implants have a documented clinical success rate exceeding 95–98% when performed by qualified implantologists in healthy candidates.",
      },
      {
        question: "Can smokers get dental implants?",
        answer: "Yes, though smoking can slow healing and increase complication risks. Our clinical team provides pre-treatment guidance to maximize success.",
      },
    ],
    relatedSlugs: ["smile-makeover", "inlays-onlays", "root-canal-therapy"],
  },
  {
    slug: "composite-bonding",
    title: "Aesthetic Composite Dental Bonding",
    category: "Cosmetic Dentistry",
    categoryId: "cosmetic",
    tagline: "Single-visit smile refinement to repair chips, close small gaps, and balance tooth proportions.",
    shortDescription: "Minimally invasive chairside cosmetic sculpting using shade-matched nanohybrid resin for instant smile rejuvenation.",
    heroImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
    overview: {
      lead: "Composite bonding is one of the most versatile, conservative cosmetic treatments available in contemporary aesthetic dentistry.",
      whatIsIt: "Our dentists skillfully apply and sculpt layers of tooth-colored nanohybrid resin directly onto the tooth structure. The material is cured with high-intensity light and polished to a lifelike luster matching your natural enamel.",
      whyConsider: "Ideal for repairing minor chipped edges, closing small gaps (diastemas), covering localized discoloration, or smoothing uneven tooth lengths in a single appointment.",
      clinicalConsiderations: "Requires minimal to no removal of natural enamel, making it a fully reversible and highly conservative aesthetic enhancement.",
    },
    process: [
      {
        step: "01",
        title: "Color Matching & Design",
        description: "Selecting the exact multi-tone resin shades to match the natural depth and gradient of your enamel.",
      },
      {
        step: "02",
        title: "Gentle Micro-Etching",
        description: "Surface conditioning creates microscopic retention for strong adhesive bonding without invasive drilling.",
      },
      {
        step: "03",
        title: "Layered Artistic Sculpting",
        description: "Applying dentin and enamel resin layers to recreate natural tooth contours and light transmission.",
      },
      {
        step: "04",
        title: "Light Polymerization",
        description: "Curing the composite with specialized blue light to achieve maximum structural hardness.",
      },
      {
        step: "05",
        title: "Diamond Finishing & High Polish",
        description: "Fine contouring and diamond polishing to achieve a natural, glass-smooth luster.",
      },
    ],
    benefits: [
      {
        title: "Single-Visit Transformation",
        description: "Completed in just one appointment with instant visual results and zero downtime.",
      },
      {
        title: "Non-Invasive & Reversible",
        description: "Preserves natural tooth structure with minimal or no enamel reduction required.",
      },
      {
        title: "Natural Shade Integration",
        description: "Seamlessly blends with adjacent tooth anatomy and color variations.",
      },
      {
        title: "Cost-Effective Enhancement",
        description: "An accessible option for localized aesthetic improvements.",
      },
    ],
    whatToExpect: [
      {
        stage: "Consultation & Shade",
        title: "Shade Selection",
        detail: "Direct comparison of resin hues under natural clinic lighting.",
      },
      {
        stage: "Chairside Sculpting",
        title: "Pain-Free Sculpting",
        detail: "Relax comfortably as our dentist sculpts and cures the material chairside.",
      },
      {
        stage: "Polishing",
        title: "Smooth Lustrous Finish",
        detail: "Micro-finishing ensures smooth edges that feel natural to your tongue and lips.",
      },
    ],
    aftercare: [
      "Avoid coffee, red wine, and berries for the first 48 hours after bonding.",
      "Refrain from biting ice, pens, or tearing tape with bonded teeth.",
      "Maintain daily brushing, flossing, and regular 6-month dental polishes.",
    ],
    faqs: [
      {
        question: "How long does composite bonding last?",
        answer: "Composite bonding typically lasts 4 to 8 years with proper oral hygiene and regular maintenance polishing.",
      },
      {
        question: "Is anesthesia required for dental bonding?",
        answer: "In most cases, no anesthesia is needed because no sensitive inner tooth structure is touched.",
      },
      {
        question: "Can composite bonding be replaced with porcelain veneers later?",
        answer: "Yes, composite bonding is completely conservative and can be transitioned to porcelain veneers in the future if desired.",
      },
    ],
    relatedSlugs: ["porcelain-veneers", "teeth-whitening", "smile-makeover"],
  },
  {
    slug: "general-preventive-care",
    title: "Comprehensive Preventive Dental Care & Hygiene",
    category: "General Dentistry",
    categoryId: "general",
    tagline: "The foundation of lifelong oral health, fresh breath, and protected teeth.",
    shortDescription: "Meticulous dental examinations, ultrasonic scaling, airflow polishing, and personalized preventive care in Dubai.",
    heroImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
    overview: {
      lead: "Regular preventive dental checkups are the essential cornerstone of a healthy, radiant smile and overall systemic wellness.",
      whatIsIt: "Our general dental care combines comprehensive visual and digital radiographic exams, ultrasonic scaling to remove hardened calculus (tartar), airflow polishing to lift superficial stains, and thorough gum pocket screening.",
      whyConsider: "Preventing dental decay and gum disease is far more comfortable, cost-effective, and beneficial than treating advanced complications.",
      clinicalConsiderations: "We recommend bi-annual preventive visits for most adults and children, or more frequent intervals for patients with a history of periodontal conditions.",
    },
    process: [
      {
        step: "01",
        title: "Digital Radiography & Exam",
        description: "Low-radiation digital x-rays and clinical examination to assess tooth roots, bone levels, and early decay.",
      },
      {
        step: "02",
        title: "Periodontal Health Check",
        description: "Gentle periodontal probing to verify healthy gum attachments and detect early gingivitis.",
      },
      {
        step: "03",
        title: "Ultrasonic Calculus Removal",
        description: "Gentle high-frequency ultrasonic scaling that lifts stubborn tartar from above and below the gumline.",
      },
      {
        step: "04",
        title: "Airflow Stain Polish",
        description: "Micro-fine airflow technology gently washes away coffee, tea, and tobacco stains without scraping enamel.",
      },
      {
        step: "05",
        title: "Fluoride Protection & Plan",
        description: "Application of protective remineralizing fluoride and custom hygiene advice tailored to your needs.",
      },
    ],
    benefits: [
      {
        title: "Early Problem Detection",
        description: "Identifies minor micro-cavities and gum inflammation before they require invasive treatment.",
      },
      {
        title: "Fresh Breath & Clean Feel",
        description: "Removes odor-causing bacterial biofilms and deposits for enduring oral freshness.",
      },
      {
        title: "Long-Term Tooth Preservation",
        description: "Protects gum attachments and underlying bone support against periodontal disease.",
      },
      {
        title: "Gentle, Comfortable Techniques",
        description: "Modern equipment ensures thorough cleaning with gentle touch and patient comfort.",
      },
    ],
    whatToExpect: [
      {
        stage: "Welcome",
        title: "Comfortable Clinical Suite",
        detail: "Relaxing environment with personalized attention from our dental hygienist and clinician.",
      },
      {
        stage: "Cleaning",
        title: "Gentle Scaling & Polish",
        detail: "Smooth, thorough plaque removal followed by airflow polishing that leaves teeth feeling glassy and clean.",
      },
      {
        stage: "Review",
        title: "Transparent Doctor Consultation",
        detail: "Clear discussion of your dental health status with digital images shown on our high-definition display.",
      },
    ],
    aftercare: [
      "Brush twice daily with soft-bristle toothbrush using fluoride toothpaste.",
      "Floss once daily between all tooth contact points.",
      "Schedule your next routine preventive checkup in 6 months.",
    ],
    faqs: [
      {
        question: "How often should I visit for a dental checkup and cleaning?",
        answer: "The standard recommendation is every 6 months to maintain optimal gum health and catch potential issues early.",
      },
      {
        question: "Does dental cleaning damage tooth enamel?",
        answer: "No. Professional ultrasonic scaling and polishing remove bacterial plaque and calculus without wearing down your natural enamel.",
      },
      {
        question: "Why do my gums bleed when I floss at home?",
        answer: "Bleeding gums are typically a sign of mild gingivitis (bacterial inflammation). A professional cleaning and consistent gentle daily flossing usually resolve this within 1 to 2 weeks.",
      },
    ],
    relatedSlugs: ["teeth-whitening", "composite-bonding", "root-canal-therapy"],
  },
  {
    slug: "root-canal-therapy",
    title: "Gentle Endodontic Root Canal Therapy",
    category: "Restorative Dentistry",
    categoryId: "restorative",
    tagline: "Save your natural tooth, eliminate pain, and restore infection-free dental function.",
    shortDescription: "Advanced rotary endodontic treatment designed to relieve tooth pain, treat internal infections, and preserve your natural tooth safely.",
    heroImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    overview: {
      lead: "Modern root canal treatment is a gentle, pain-relieving procedure designed to rescue natural teeth that would otherwise need extraction.",
      whatIsIt: "When deep decay, trauma, or cracks allow bacteria to reach the inner pulp chamber (nerve) of a tooth, infection and inflammation occur. Root canal therapy gently cleans, disinfects, and hermetically seals the root canals, preserving the natural root structure.",
      whyConsider: "Saving your natural tooth maintains your natural bite, chewing mechanics, and bone structure without requiring bridge or implant replacement.",
      clinicalConsiderations: "Following root canal therapy on posterior teeth, a ceramic crown is strongly advised to reinforce the tooth structure against biting forces.",
    },
    process: [
      {
        step: "01",
        title: "Digital Diagnostic Imaging",
        description: "Precise digital radiographs to visualize root canal anatomy and the extent of periapical inflammation.",
      },
      {
        step: "02",
        title: "Targeted Painless Numbing",
        description: "Deep, targeted local anesthesia ensures the entire procedure is completely comfortable and pain-free.",
      },
      {
        step: "03",
        title: "Rotary Canal Disinfection",
        description: "Flexible nickel-titanium rotary instruments and antibacterial irrigants cleanse the microscopic canal pathways.",
      },
      {
        step: "04",
        title: "Hermetic Biocompatible Seal",
        description: "Canals are sealed with biocompatible gutta-percha to prevent future bacterial recolonization.",
      },
      {
        step: "05",
        title: "Structural Restoration / Crown",
        description: "Rebuilding the tooth core and protecting it with a durable, shade-matched ceramic crown.",
      },
    ],
    benefits: [
      {
        title: "Immediate Pain Relief",
        description: "Removes inflamed nerve tissue, quickly relieving throbbing toothaches and infection pressure.",
      },
      {
        title: "Preserves Your Natural Tooth",
        description: "Keeps your natural root in place, avoiding the need for tooth extraction and artificial replacement.",
      },
      {
        title: "Advanced Rotary Comfort",
        description: "Modern micro-endodontic instruments complete treatment faster and with higher precision than ever.",
      },
      {
        title: "Long-Term Structural Success",
        description: "High clinical success rates when properly restored with a protective crown.",
      },
    ],
    whatToExpect: [
      {
        stage: "Comfort First",
        title: "Total Numbing Assurance",
        detail: "We ensure you are 100% numb and comfortable before starting.",
      },
      {
        stage: "Procedure",
        title: "Precise Rotary Cleaning",
        detail: "Gentle cleaning of the microscopic canals with gentle irrigation in 60 to 90 minutes.",
      },
      {
        stage: "Recovery",
        title: "Quick Relief",
        detail: "The intense ache disappears. Mild tenderness around the ligament subsides within a few days.",
      },
    ],
    aftercare: [
      "Avoid chewing hard foods on the treated tooth until your permanent crown is fitted.",
      "Take mild prescribed pain relief if slight ligament tenderness is felt after anesthesia wears off.",
      "Maintain normal brushing and flossing routines.",
    ],
    faqs: [
      {
        question: "Does a root canal hurt?",
        answer: "Contrary to common myths, modern root canal therapy does not cause pain—it relieves pain. With advanced local anesthesia and modern rotary instruments, the procedure is as comfortable as receiving a routine filling.",
      },
      {
        question: "How many visits are needed?",
        answer: "Most root canal treatments are completed in a single comfortable visit of 60 to 90 minutes, with a follow-up appointment for final crown placement.",
      },
      {
        question: "Do I really need a crown after a root canal?",
        answer: "Yes, especially for premolars and molars. Once the nerve and blood supply are removed, the tooth becomes more brittle; a crown protects it from fracturing under chewing forces.",
      },
    ],
    relatedSlugs: ["dental-implants", "general-preventive-care", "composite-bonding"],
  },
];
