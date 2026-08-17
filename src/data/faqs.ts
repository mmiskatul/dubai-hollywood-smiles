export interface FAQItem {
  id: string;
  category: "general" | "treatments" | "appointments" | "patient-experience";
  categoryLabel: string;
  question: string;
  answer: string;
}

export const faqsData: FAQItem[] = [
  {
    id: "faq-01",
    category: "general",
    categoryLabel: "General",
    question: "Where is Dubai Hollywood Smiles located?",
    answer: "We are located in Dubai, United Arab Emirates, conveniently accessible near Emirates Hospital. Our clinic features dedicated valet and parking facilities for your convenience.",
  },
  {
    id: "faq-02",
    category: "general",
    categoryLabel: "General",
    question: "Was the clinic previously known as Charly PolyClinic?",
    answer: "Yes, Dubai Hollywood Smiles was formerly known as Charly PolyClinic. We have evolved our identity and enhanced our aesthetic dental suites while preserving our longstanding commitment to patient care and clinical excellence.",
  },
  {
    id: "faq-03",
    category: "appointments",
    categoryLabel: "Appointments",
    question: "How can I book an appointment?",
    answer: "You can book directly through our online appointment request form, call our clinic reception at +971 50 213 9191, or message us directly via WhatsApp. Our team will promptly confirm your preferred date and time.",
  },
  {
    id: "faq-04",
    category: "patient-experience",
    categoryLabel: "Patient Experience",
    question: "What happens during my first visit?",
    answer: "Your initial visit begins with a relaxed consultation discussing your oral health and aesthetic goals. We conduct a comprehensive clinical examination, low-radiation digital imaging, and high-definition photography. You will receive a clear, personalized treatment plan before any procedure begins.",
  },
  {
    id: "faq-05",
    category: "treatments",
    categoryLabel: "Treatments",
    question: "What dental treatments are available at Dubai Hollywood Smiles?",
    answer: "We offer comprehensive dental care including Cosmetic Dentistry (Porcelain Veneers, In-Clinic Teeth Whitening, Composite Bonding), Smile Makeovers, Clear Aligners (Orthodontics), Restorative Care (Guided Dental Implants, Root Canal Therapy, Inlays/Onlays), and Preventive General Dentistry.",
  },
  {
    id: "faq-06",
    category: "appointments",
    categoryLabel: "Appointments",
    question: "Can I contact the clinic directly through WhatsApp?",
    answer: "Yes! You can connect with our dedicated patient coordinator instantly on WhatsApp at +971 50 213 9191 for quick questions, directions, and appointment scheduling.",
  },
  {
    id: "faq-07",
    category: "treatments",
    categoryLabel: "Treatments",
    question: "How do I know which cosmetic treatment is right for me?",
    answer: "During your aesthetic consultation, we evaluate your facial proportions, tooth shade, gum symmetry, and bite alignment. We use 3D Digital Smile Design to simulate potential outcomes and help you choose the most conservative, effective pathway.",
  },
  {
    id: "faq-08",
    category: "patient-experience",
    categoryLabel: "Patient Experience",
    question: "What if I feel anxious or nervous about dental procedures?",
    answer: "We prioritize patient comfort above all else. Our team utilizes gentle numbing techniques, ergonomic chairs, soothing music, and a calm, ultra-clean white environment. We move at your pace and explain every step before proceeding.",
  },
  {
    id: "faq-09",
    category: "treatments",
    categoryLabel: "Treatments",
    question: "How long do porcelain veneers typically last?",
    answer: "When crafted from high-grade ceramic (such as E-Max or layered feldspathic porcelain) and bonded with precision, veneers routinely last 10 to 15+ years with standard oral hygiene and regular dental checkups.",
  },
  {
    id: "faq-10",
    category: "treatments",
    categoryLabel: "Treatments",
    question: "Are clear aligners suitable for all orthodontic cases?",
    answer: "Clear aligners are highly effective for correcting mild-to-moderate crowding, gaps, rotations, and bite discrepancies. A complimentary 3D scan during your orthodontic assessment will confirm if you are an ideal candidate.",
  },
  {
    id: "faq-11",
    category: "appointments",
    categoryLabel: "Appointments",
    question: "What should I do if I have a dental emergency?",
    answer: "If you experience severe tooth pain, a broken tooth, or dental trauma, please call our direct emergency line at +971 50 213 9191 or WhatsApp us immediately for priority same-day scheduling.",
  },
  {
    id: "faq-12",
    category: "general",
    categoryLabel: "General",
    question: "What languages are spoken by your dental team?",
    answer: "Our international dental team fluently speaks English, Arabic, Russian, and French to ensure clear, comfortable communication for Dubai's diverse community.",
  },
];
