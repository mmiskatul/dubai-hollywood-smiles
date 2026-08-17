export interface PatientReview {
  id: string;
  author: string;
  initials: string;
  location: string;
  rating: number;
  date: string;
  treatment: string;
  treatmentSlug?: string;
  doctorName: string;
  comment: string;
  verified: boolean;
}

export const patientReviews: PatientReview[] = [
  {
    id: "rev-01",
    author: "Fatima Al Suwaidi",
    initials: "FA",
    location: "Downtown Dubai",
    rating: 5,
    date: "2 weeks ago",
    treatment: "Smile Makeover & Porcelain Veneers",
    treatmentSlug: "porcelain-veneers",
    doctorName: "Dr. Tariq Al Mansoori",
    comment: "The entire experience at Dubai Hollywood Smiles was extraordinary. The clinic is pristine, modern, and completely white and calming. Dr. Tariq took the time to show me a digital mock-up before doing anything. My veneers look so natural that even my closest friends just think my natural teeth became perfect.",
    verified: true,
  },
  {
    id: "rev-02",
    author: "Alexander Wright",
    initials: "AW",
    location: "Dubai Marina",
    rating: 5,
    date: "1 month ago",
    treatment: "Laser Teeth Whitening",
    treatmentSlug: "teeth-whitening",
    doctorName: "Dr. Elena Rostova",
    comment: "Had my whitening done before my wedding in Dubai. Absolutely zero pain, zero sensitivity afterwards, and my teeth lifted 7 shades in 75 minutes. The team explains every step with total clarity.",
    verified: true,
  },
  {
    id: "rev-03",
    author: "Layla Mansour",
    initials: "LM",
    location: "Palm Jumeirah",
    rating: 5,
    date: "1 month ago",
    treatment: "Clear Aligners",
    treatmentSlug: "clear-aligners",
    doctorName: "Dr. Sarah Jenkins",
    comment: "Dr. Sarah Jenkins made my clear aligner journey completely seamless. The 3D scan at the beginning showed me exactly how my teeth would shift week by week. 8 months later, my smile is straight and I could not be happier.",
    verified: true,
  },
  {
    id: "rev-04",
    author: "Marcus Lindqvist",
    initials: "ML",
    location: "Jumeirah Golf Estates",
    rating: 5,
    date: "2 months ago",
    treatment: "Dental Implant & Crown",
    treatmentSlug: "dental-implants",
    doctorName: "Dr. Karim Hassan",
    comment: "I was extremely anxious about needing a dental implant after an old root fracture. Dr. Karim is a master surgeon—the guided procedure was completely painless and the ceramic crown matches my surrounding teeth identically. High-end clinical care at its finest.",
    verified: true,
  },
  {
    id: "rev-05",
    author: "Mariam K.",
    initials: "MK",
    location: "Emirates Hills, Dubai",
    rating: 5,
    date: "2 months ago",
    treatment: "Composite Bonding & General Care",
    treatmentSlug: "composite-bonding",
    doctorName: "Dr. Tariq Al Mansoori",
    comment: "I used to visit them when they were Charly PolyClinic, and the new Dubai Hollywood Smiles clinic environment is simply breathtaking. Pristine cleanliness, respectful staff, and exquisite attention to dental aesthetics.",
    verified: true,
  },
  {
    id: "rev-06",
    author: "James Thornton",
    initials: "JT",
    location: "DIFC Dubai",
    rating: 5,
    date: "3 months ago",
    treatment: "Preventive Checkup & Airflow Polish",
    treatmentSlug: "general-preventive-care",
    doctorName: "Dr. Elena Rostova",
    comment: "The most thorough and gentle dental cleaning I've had in 10 years living in the UAE. The airflow polishing left my teeth spotless without any discomfort. Transparent pricing and no pushy sales tactics.",
    verified: true,
  },
];
