export interface DoctorDetail {
  slug: string;
  name: string;
  role: string;
  specialty: string;
  qualification: string;
  experience: string;
  languages: string[];
  image: string;
  shortBio: string;
  fullBio: string;
  philosophy: string;
  expertise: string[];
  schedule: string;
}

export const doctorsData: DoctorDetail[] = [
  {
    slug: "dr-tariq-al-mansoori",
    name: "Dr. Tariq Al Mansoori",
    role: "Founder & Principal Cosmetic Dentist",
    specialty: "Aesthetic Smile Design & Restorative Dentistry",
    qualification: "DDS, MSc in Aesthetic Dentistry, Member of AACD",
    experience: "15+ Years Private Practice Experience",
    languages: ["English", "Arabic"],
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
    shortBio: "Dedicated to private, 1-on-1 aesthetic smile transformations with a gentle, unhurried approach in our Dubai studio.",
    fullBio: "Dr. Tariq is the founder and principal dentist at Dubai Hollywood Smiles. Believing that exceptional dentistry requires deep personal attention, he purposefully designed the clinic as an intimate private boutique studio where only a select number of patients are seen each day. With over 15 years of dedicated clinical experience in Dubai, Dr. Tariq personally handles every consultation, digital smile simulation, and handcrafted porcelain veneer placement.",
    philosophy: "A great smile transformation should never be rushed or mass-produced. In my private studio, you receive my undivided attention, gentle precision, and a customized smile that harmonizes effortlessly with your facial character.",
    expertise: [
      "Digital Smile Design (DSD) & Facial Proportion Analysis",
      "Handcrafted Porcelain & E-Max Veneers",
      "Comprehensive Private Smile Makeovers",
      "Gentle Aesthetic Composite Resin Sculpting",
      "Laser In-Clinic Teeth Whitening Protocols",
      "Precision Guided Restorative Care & Implants",
    ],
    schedule: "Monday – Saturday: 09:00 AM – 08:00 PM (By Advance Appointment)",
  },
  {
    slug: "dr-sarah-jenkins",
    name: "Dr. Sarah Jenkins",
    role: "Consultant Orthodontist (Collaborating Specialist)",
    specialty: "Clear Aligners & Aesthetic Orthodontics",
    qualification: "BDS, MOrth RCSEd, Specialist Orthodontist",
    experience: "12+ Years Clinical Experience",
    languages: ["English", "French"],
    image: "https://images.unsplash.com/photo-1594824813589-3221f7605d33?auto=format&fit=crop&w=800&q=80",
    shortBio: "Collaborating with Dr. Tariq on discreet clear aligner treatments for seamless pre-makeover tooth alignment.",
    fullBio: "Dr. Sarah works closely alongside Dr. Tariq for patients requiring gentle, discreet orthodontic alignment prior to aesthetic veneer or restorative treatments. Her digital planning ensures predictable, discreet alignment with maximum comfort.",
    philosophy: "Gentle orthodontic alignment establishes the ideal biological foundation, preserving natural tooth structure for long-term smile beauty.",
    expertise: [
      "Custom Clear Aligner Therapy",
      "Pre-Restorative Alignment for Smile Makeovers",
      "Discreet Adult Orthodontic Correction",
      "Post-Alignment Retention Systems",
    ],
    schedule: "Private Sessions by Appointment",
  },
];
