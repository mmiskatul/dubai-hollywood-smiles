import React from "react";
import Link from "next/link";
import Image from "next/image";
import { doctorsData } from "@/data/doctors";
import { clinicInfo } from "@/data/clinicInfo";
import { SectionHeading } from "@/components/SectionHeading";
import { DoctorCard } from "@/components/DoctorCard";
import {
  Calendar,
  MessageCircle,
  Award,
  Globe,
  CheckCircle2,
  Sparkles,
  Heart,
  Clock,
  ShieldCheck,
  UserCheck,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Meet Your Doctor | Dubai Hollywood Smiles",
  description:
    "Meet Dr. Tariq Al Mansoori, Founder and Principal Cosmetic Dentist at Dubai Hollywood Smiles. Experience private 1-on-1 aesthetic dental care in Dubai, UAE.",
};

export default function DoctorsPage() {
  const leadDoctor = doctorsData[0];
  const collaboratingDoctor = doctorsData[1];

  const studioPrinciples = [
    {
      title: "1-on-1 Private Attention",
      desc: "Dr. Tariq is with you at every step—from digital mock-up design to the final handcrafted ceramic bond.",
      icon: UserCheck,
    },
    {
      title: "Unhurried Appointments",
      desc: "We deliberately limit our daily appointment book to ensure you never feel rushed or left waiting.",
      icon: Clock,
    },
    {
      title: "Facial Aesthetic Harmony",
      desc: "Cosmetic dentistry designed to complement your unique lip dynamics, skin undertone, and smile line.",
      icon: Sparkles,
    },
    {
      title: "Complete Clinical Transparency",
      desc: "Clear explanations, open discussion of all conservative options, and upfront pricing.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="bg-white">
      {/* 01. HERO */}
      <section className="pt-6 sm:pt-12 pb-16 sm:pb-20 bg-white border-b border-[#E9EDEE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0F6B68] bg-[#EAF6F5] px-3 py-1 rounded-full">
            MEET YOUR DENTIST
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#171A1C] max-w-3xl mx-auto leading-[1.15]">
            Private, Personal Dentistry by Dr. Tariq Al Mansoori
          </h1>

          <p className="text-base sm:text-lg text-[#5F666B] max-w-2xl mx-auto leading-relaxed">
            At Dubai Hollywood Smiles, you are cared for by our founder and principal aesthetic clinician in an unhurried, private boutique studio setting.
          </p>
        </div>
      </section>

      {/* 02. PRIMARY DOCTOR SPOTLIGHT */}
      <section className="py-16 sm:py-24 bg-[#FCFCFC] border-b border-[#E9EDEE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[#E9EDEE] rounded-3xl p-8 sm:p-12 shadow-subtle">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Doctor Portrait */}
              <div className="lg:col-span-5">
                <div className="relative aspect-4/5 rounded-2xl overflow-hidden border border-[#E9EDEE] shadow-card bg-[#F8FAFA]">
                  <Image
                    src={leadDoctor.image}
                    alt={leadDoctor.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-3.5 rounded-xl border border-[#E9EDEE] shadow-xs">
                    <span className="text-xs font-semibold text-[#0F6B68] block">Founder & Principal Dentist</span>
                    <span className="text-xs font-medium text-[#171A1C]">{leadDoctor.qualification}</span>
                  </div>
                </div>
              </div>

              {/* Bio & Clinical Approach */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-semibold text-[#0F6B68] uppercase tracking-wider">
                    {leadDoctor.specialty}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-[#171A1C] mt-1">
                    {leadDoctor.name}
                  </h2>
                </div>

                <div className="bg-[#F8FAFA] border-l-3 border-[#0F6B68] p-4 rounded-r-xl">
                  <p className="text-sm italic text-[#171A1C] leading-relaxed">
                    &ldquo;{leadDoctor.philosophy}&rdquo;
                  </p>
                </div>

                <div className="space-y-3 text-sm text-[#5F666B] leading-relaxed">
                  <p>{leadDoctor.fullBio}</p>
                </div>

                {/* Key Expertise List */}
                <div className="space-y-2 pt-1">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#171A1C]">
                    Areas of Clinical Focus
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {leadDoctor.expertise.map((exp, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[#5F666B]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0F6B68] shrink-0" />
                        <span>{exp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Doctor credentials & booking */}
                <div className="pt-3 flex flex-wrap items-center gap-4 border-t border-[#E9EDEE]">
                  <Link
                    href="/book-appointment"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-white bg-[#0F6B68] hover:bg-[#0B5250] transition-colors"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Consultation with Dr. Tariq</span>
                  </Link>

                  <a
                    href={clinicInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-medium text-[#0F6B68] bg-[#EAF6F5] hover:bg-[#d8efec] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Direct</span>
                  </a>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 03. STUDIO PHILOSOPHY PILLARS */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E9EDEE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            eyebrow="PRIVATE PRACTICE STANDARDS"
            title="The Boutique Dental Experience"
            description="How our single-clinic, personal approach differs from large corporate dental facilities."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {studioPrinciples.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#E9EDEE] rounded-2xl p-6 shadow-subtle space-y-3 hover:border-[#cfd7d8] transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#EAF6F5] text-[#0F6B68] flex items-center justify-center border border-[#0F6B68]/15">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-[#171A1C]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#5F666B] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 04. COLLABORATING SPECIALIST (If needed) */}
      {collaboratingDoctor && (
        <section className="py-16 sm:py-24 bg-[#FCFCFC] border-b border-[#E9EDEE]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <SectionHeading
              align="left"
              eyebrow="SPECIALIST COLLABORATION"
              title="Discreet Orthodontic Support"
              description="For complex alignment cases before cosmetic smile makeovers, Dr. Tariq collaborates closely with verified specialist colleagues."
            />

            <div className="max-w-md">
              <DoctorCard doctor={collaboratingDoctor} />
            </div>
          </div>
        </section>
      )}

      {/* 05. CTA */}
      <section className="py-16 sm:py-20 bg-[#EAF6F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#171A1C]">
            Schedule Your Private Consultation
          </h2>
          <p className="text-sm sm:text-base text-[#5F666B] max-w-lg mx-auto leading-relaxed">
            Discuss your smile aspirations directly with Dr. Tariq in a relaxed, private consultation session.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <Link
              href="/book-appointment"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#0F6B68] hover:bg-[#0B5250] transition-colors shadow-xs"
            >
              <Calendar className="w-4 h-4" />
              <span>Book an Appointment</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
