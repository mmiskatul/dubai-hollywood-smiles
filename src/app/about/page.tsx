import React from "react";
import Link from "next/link";
import Image from "next/image";
import { clinicInfo } from "@/data/clinicInfo";
import { SectionHeading } from "@/components/SectionHeading";
import {
  Calendar,
  Sparkles,
  Heart,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  UserCheck,
  ArrowRight,
  Clock,
} from "lucide-react";

export const metadata = {
  title: "About Our Studio | Dubai Hollywood Smiles (Previously Charly PolyClinic)",
  description:
    "Learn about Dubai Hollywood Smiles — an intimate, private dental studio in Dubai, UAE. Founded on the principles of unhurried 1-on-1 care, listening, and clinical excellence.",
};

export default function AboutPage() {
  const philosophyPillars = [
    {
      title: "Listen",
      subtitle: "Unhurried Discussions",
      desc: "We dedicate genuine 1-on-1 time to understand your aesthetic desires, past dental experiences, and comfort preferences without rush.",
      icon: MessageSquare,
    },
    {
      title: "Plan",
      subtitle: "Bespoke Smile Design",
      desc: "Using 3D optical scanning and facial proportion analysis, Dr. Tariq engineers a custom treatment roadmap tailored to your facial character.",
      icon: UserCheck,
    },
    {
      title: "Care",
      subtitle: "Private Studio Serenity",
      desc: "From gentle chairside numbing to direct doctor follow-ups, your comfort, oral vitality, and aesthetic confidence are our highest priorities.",
      icon: Heart,
    },
  ];

  const approachItems = [
    {
      title: "Direct Doctor Relationship",
      desc: "You are cared for directly by the principal dentist at every visit—never passed off to rotating assistants or junior substitutes.",
    },
    {
      title: "Unhurried, Private Sessions",
      desc: "Our daily schedule is intentionally limited to a select few appointments, providing a calm, quiet, and uncrowded clinic environment.",
    },
    {
      title: "Natural Facial Harmony",
      desc: "We design smiles that harmonize with your lip dynamics, natural tooth color, and facial architecture rather than cookie-cutter artificial teeth.",
    },
    {
      title: "Conservative & Preventive Baseline",
      desc: "Preserving healthy tooth structure and gum vitality is the prerequisite for all of our cosmetic and restorative dental procedures.",
    },
  ];

  const clinicPhotos = [
    {
      title: "Private Treatment Suite",
      desc: "Ergonomic clinical suite with hospital-grade sterility and peaceful ambiance.",
      image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Digital Consultation Lounge",
      desc: "Dedicated space to review 3D smile mock-ups and simulations with Dr. Tariq.",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Serene Studio Reception",
      desc: "An ultra-clean, minimalist white boutique lounge designed for immediate peace.",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Modern Optical Imaging",
      desc: "High-resolution digital intraoral cameras and 3D precision imaging.",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="bg-white">
      {/* 01. HERO SECTION */}
      <section className="pt-6 sm:pt-12 pb-16 sm:pb-24 bg-white border-b border-[#E9EDEE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0F6B68] bg-[#EAF6F5] px-3 py-1 rounded-full">
                ABOUT OUR STUDIO
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#171A1C] leading-[1.15]">
                An Intimate Private Studio for Beautiful Smiles.
              </h1>

              <p className="text-base sm:text-lg text-[#5F666B] leading-relaxed">
                Welcome to Dubai Hollywood Smiles. We created our boutique clinic to provide an exceptionally personal, unhurried standard of aesthetic and restorative dentistry in Dubai, UAE.
              </p>

              <div className="pt-2 flex items-center gap-4 text-xs text-[#8A9297]">
                <span className="flex items-center gap-1.5 font-medium text-[#171A1C]">
                  <Sparkles className="w-4 h-4 text-[#0F6B68]" />
                  Boutique Private Clinic
                </span>
                <span>•</span>
                <span>Previously Charly PolyClinic</span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-4/3 sm:aspect-16/10 rounded-2xl overflow-hidden border border-[#E9EDEE] shadow-card bg-[#F8FAFA]">
                <Image
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80"
                  alt="Dubai Hollywood Smiles Private Dental Studio"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. OUR STORY */}
      <section className="py-16 sm:py-24 bg-[#FCFCFC] border-b border-[#E9EDEE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <SectionHeading
            eyebrow="OUR JOURNEY"
            title="From Charly PolyClinic to Private Smile Studio"
            description="The evolution towards a boutique, patient-first private dental model."
          />

          <div className="bg-white border border-[#E9EDEE] rounded-2xl p-6 sm:p-8 shadow-subtle space-y-4 text-sm sm:text-base text-[#5F666B] leading-relaxed">
            <p>
              Originally established as <strong className="text-[#171A1C]">Charly PolyClinic</strong>, our practice served Dubai residents across broad general healthcare and dental disciplines.
            </p>
            <p>
              Recognizing that the finest aesthetic and smile makeover work requires deep focus, unhurried time, and specialized artistry, we evolved into <strong className="text-[#171A1C]">Dubai Hollywood Smiles</strong>—a private boutique smile studio.
            </p>
            <p>
              Today, our clinic near Emirates Hospital operates on an appointment-only basis. By intentionally limiting our daily patient volume, we ensure that every visitor receives our doctor&apos;s full attention, meticulous technical precision, and an entirely stress-free clinical visit.
            </p>
          </div>
        </div>
      </section>

      {/* 03. OUR PHILOSOPHY (Listen, Plan, Care) */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E9EDEE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            eyebrow="STUDIO PHILOSOPHY"
            title="Our Three Guiding Principles"
            description="Every treatment plan and interaction in our studio follows this proven pathway."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {philosophyPillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className="bg-white border border-[#E9EDEE] rounded-2xl p-6 sm:p-8 shadow-subtle space-y-3 hover:border-[#cfd7d8] transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#EAF6F5] text-[#0F6B68] flex items-center justify-center border border-[#0F6B68]/15">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-xs font-semibold text-[#0F6B68] uppercase tracking-wider">
                    {p.subtitle}
                  </div>
                  <h3 className="text-xl font-semibold text-[#171A1C]">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5F666B] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 04. OUR APPROACH */}
      <section className="py-16 sm:py-24 bg-[#F8FAFA] border-b border-[#E9EDEE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            eyebrow="STANDARDS OF CARE"
            title="Why Patients Choose Our Private Studio"
            description="Experience a standard of dentistry that values your peace of mind and personal comfort above all."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {approachItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E9EDEE] rounded-2xl p-6 sm:p-7 shadow-subtle flex items-start gap-4"
              >
                <div className="w-6 h-6 rounded-full bg-[#EAF6F5] text-[#0F6B68] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-semibold text-[#171A1C]">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5F666B] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05. CLINIC ENVIRONMENT */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E9EDEE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            eyebrow="STUDIO ENVIRONMENT"
            title="Serene, Ultra-Clean & Welcoming"
            description="Take a look inside our private treatment suite near Emirates Hospital, Dubai."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {clinicPhotos.map((photo, idx) => (
              <div
                key={idx}
                className="group bg-white border border-[#E9EDEE] rounded-2xl overflow-hidden shadow-subtle hover:border-[#cfd7d8] transition-all"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-[#F8FAFA]">
                  <Image
                    src={photo.image}
                    alt={photo.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 space-y-1">
                  <h4 className="text-sm font-semibold text-[#171A1C]">
                    {photo.title}
                  </h4>
                  <p className="text-xs text-[#5F666B] leading-relaxed">
                    {photo.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06. ABOUT CTA BANNER */}
      <section className="py-16 sm:py-20 bg-[#EAF6F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#171A1C] leading-snug">
            Your Smile Journey Starts With a Private Consultation.
          </h2>
          <p className="text-sm sm:text-base text-[#5F666B] max-w-lg mx-auto leading-relaxed">
            Reserve your 1-on-1 session with Dr. Tariq and discover what personalized, unhurried dental care feels like.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/book-appointment"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#0F6B68] hover:bg-[#0B5250] transition-colors shadow-xs"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Private Consultation</span>
            </Link>
            <Link
              href="/treatments"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-[#0F6B68] bg-white border border-[#0F6B68]/30 hover:bg-[#F3FAF9] transition-colors"
            >
              <span>Explore Treatments</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
