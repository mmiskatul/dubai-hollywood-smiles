export interface BeforeAfterCase {
  id: string;
  title: string;
  category: "whitening" | "veneers" | "smile-makeover" | "restorative" | "aligners";
  categoryLabel: string;
  patientAgeGender?: string;
  timeframe: string;
  concern: string;
  solution: string;
  doctor: string;
  beforeImage: string;
  afterImage: string;
  highlights: string[];
}

export const beforeAfterCases: BeforeAfterCase[] = [
  {
    id: "case-01",
    title: "10-Unit E-Max Porcelain Veneers Smile Makeover",
    category: "veneers",
    categoryLabel: "Porcelain Veneers",
    timeframe: "3 Appointments over 14 Days",
    concern: "Severe tetracycline discoloration, uneven incisal edges, and asymmetry in smile width.",
    solution: "10 custom handcrafted E-Max ultra-thin ceramic veneers in shade BL2 with natural incisal translucency.",
    doctor: "Dr. Tariq Al Mansoori",
    beforeImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80",
    afterImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=80",
    highlights: ["Natural incisal gradient", "Balanced golden proportion", "Stain-resistant ceramic"],
  },
  {
    id: "case-02",
    title: "In-Clinic Laser Teeth Whitening Transformation",
    category: "whitening",
    categoryLabel: "Teeth Whitening",
    timeframe: "Single 75-Minute Session",
    concern: "Deep coffee and lifestyle staining causing yellowed anterior teeth (baseline shade A3.5).",
    solution: "Professional multi-cycle laser-activated whitening protocol followed by remineralization.",
    doctor: "Dr. Elena Rostova",
    beforeImage: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=900&q=80",
    afterImage: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=900&q=80",
    highlights: ["Lifted 7 VITA shades", "Zero gum irritation", "Luminous uniform tone"],
  },
  {
    id: "case-03",
    title: "Comprehensive Aesthetic Smile Reconstruction",
    category: "smile-makeover",
    categoryLabel: "Smile Makeover",
    timeframe: "Phased over 6 Weeks",
    concern: "Worn dentition, chipped anterior teeth, bite collapse, and narrow smile corridor.",
    solution: "Full aesthetic smile makeover integrating 8 upper veneers, 2 crowns, and posterior bite leveling.",
    doctor: "Dr. Tariq Al Mansoori & Dr. Karim Hassan",
    beforeImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80",
    afterImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80",
    highlights: ["Restored lip support", "Harmonized smile curve", "Enhanced chewing function"],
  },
  {
    id: "case-04",
    title: "Discreet Clear Aligner Spacing Correction",
    category: "aligners",
    categoryLabel: "Clear Aligners",
    timeframe: "7 Months Active Wear",
    concern: "Central diastema (front tooth gap) and moderate lower incisor crowding.",
    solution: "Series of 18 custom clear aligner stages followed by clear nighttime retention.",
    doctor: "Dr. Sarah Jenkins",
    beforeImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80",
    afterImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=80",
    highlights: ["Closed central gap", "Discreet wire-free treatment", "Aligned bite contact"],
  },
  {
    id: "case-05",
    title: "Anterior Dental Implant & Ceramic Crown",
    category: "restorative",
    categoryLabel: "Restorative Dentistry",
    timeframe: "3 Months Osseointegration",
    concern: "Fractured right central incisor requiring gentle extraction and permanent replacement.",
    solution: "Guided single dental implant with immediate temporary crown, finalized with custom zirconia ceramic crown.",
    doctor: "Dr. Karim Hassan",
    beforeImage: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=900&q=80",
    afterImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80",
    highlights: ["100% natural emergence profile", "Preserved bone contour", "Indistinguishable from natural tooth"],
  },
  {
    id: "case-06",
    title: "Multi-Tooth Composite Bonding Refinement",
    category: "veneers",
    categoryLabel: "Cosmetic Dentistry",
    timeframe: "Single 90-Minute Appointment",
    concern: "Minor chipped lateral edges and small developmental spaces between front teeth.",
    solution: "Direct chairside nanohybrid composite bonding and high-gloss diamond polishing.",
    doctor: "Dr. Tariq Al Mansoori",
    beforeImage: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=900&q=80",
    afterImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=80",
    highlights: ["Single visit result", "No tooth drilling required", "Seamless color blend"],
  },
];
