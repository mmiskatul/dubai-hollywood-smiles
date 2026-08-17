import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { doctorsData } from "@/data/doctors";
import { clinicInfo } from "@/data/clinicInfo";
import { SectionHeading } from "@/components/SectionHeading";
import {
  Calendar,
  MessageCircle,
  Award,
  Globe,
  Clock,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Heart,
} from "lucide-react";

interface DoctorPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return doctorsData.map((doc) => ({
    slug: doc.slug,
  }));
}

export async function generateMetadata({ params }: DoctorPageProps) {
  const { slug } = await params;
  const doctor = doctorsData.find((d) => d.slug === slug);
  if (!doctor) return { title: "Doctor Not Found" };

  return {
    title: `${doctor.name} | ${doctor.role} | Dubai Hollywood Smiles`,
    description: doctor.shortBio,
  };
}

export default async function DoctorDetailPage({ params }: DoctorPageProps) {
  const { slug } = await params;
  const doctor = doctorsData.find((d) => d.slug === slug);

  if (!doctor) {
    notFound();
  }

  return (
    <div className="bg-white">
      {/* 01. BREADCRUMBS & HERO */}
      <section className="pt-6 sm:pt-10 pb-16 sm:pb-24 bg-white border-b border-[#E9EDEE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-xs text-[#8A9297]">
            <Link href="/" className="hover:text-[#0F6B68]">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/doctors" className="hover:text-[#0F6B68]">
              Doctors
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#171A1C] font-medium">{doctor.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Doctor Photo */}
            <div className="lg:col-span-5">
              <div className="relative aspect-4/5 rounded-3xl overflow-hidden border border-[#E9EDEE] shadow-card bg-[#F8FAFA]">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>

            {/* Doctor Intro */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0F6B68] bg-[#EAF6F5] px-3 py-1 rounded-full mb-3">
                  {doctor.specialty}
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#171A1C]">
                  {doctor.name}
                </h1>
                <p className="text-base text-[#0F6B68] font-medium mt-1">
                  {doctor.role}
                </p>
              </div>

              <p className="text-base text-[#5F666B] leading-relaxed">
                {doctor.shortBio}
              </p>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
                <div className="bg-[#FCFCFC] border border-[#E9EDEE] rounded-xl p-3.5 space-y-1">
                  <div className="text-[#8A9297] flex items-center gap-1.5 font-medium">
                    <Award className="w-4 h-4 text-[#0F6B68]" />
                    Qualification & Experience
                  </div>
                  <div className="font-semibold text-[#171A1C]">
                    {doctor.qualification} ({doctor.experience})
                  </div>
                </div>

                <div className="bg-[#FCFCFC] border border-[#E9EDEE] rounded-xl p-3.5 space-y-1">
                  <div className="text-[#8A9297] flex items-center gap-1.5 font-medium">
                    <Globe className="w-4 h-4 text-[#0F6B68]" />
                    Languages Spoken
                  </div>
                  <div className="font-semibold text-[#171A1C]">
                    {doctor.languages.join(", ")}
                  </div>
                </div>
              </div>

              {/* Booking CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/book-appointment"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-white bg-[#0F6B68] hover:bg-[#0B5250] transition-colors shadow-xs"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book With {doctor.name.split(" ")[1]}</span>
                </Link>

                <a
                  href={clinicInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-[#0F6B68] bg-[#EAF6F5] hover:bg-[#d8efec] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Inquire via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. FULL BIOGRAPHY & CLINICAL PHILOSOPHY */}
      <section className="py-16 sm:py-24 bg-[#FCFCFC] border-b border-[#E9EDEE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <SectionHeading
            eyebrow="BACKGROUND"
            title="Biography & Clinical Philosophy"
          />

          <div className="bg-white border border-[#E9EDEE] rounded-2xl p-6 sm:p-8 shadow-subtle space-y-6 text-sm sm:text-base text-[#5F666B] leading-relaxed">
            <div>
              <h3 className="text-base font-semibold text-[#171A1C] mb-2">
                About {doctor.name}
              </h3>
              <p>{doctor.fullBio}</p>
            </div>

            <div className="bg-[#F8FAFA] border border-[#E9EDEE] rounded-xl p-5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#0F6B68] uppercase tracking-wider">
                <Heart className="w-4 h-4" />
                Clinical Approach & Philosophy
              </div>
              <p className="text-xs sm:text-sm text-[#171A1C] italic">
                &ldquo;{doctor.philosophy}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03. AREAS OF EXPERTISE & CLINIC SCHEDULE */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E9EDEE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <SectionHeading
            eyebrow="SPECIALIZATION"
            title="Clinical Areas of Focus"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {doctor.expertise.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FCFCFC] border border-[#E9EDEE] rounded-xl p-4 flex items-center gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-[#EAF6F5] text-[#0F6B68] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-[#171A1C]">{item}</span>
              </div>
            ))}
          </div>

          <div className="bg-[#F8FAFA] border border-[#E9EDEE] rounded-2xl p-6 flex items-start gap-4 text-xs sm:text-sm text-[#5F666B]">
            <Clock className="w-5 h-5 text-[#0F6B68] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#171A1C] block mb-1">
                Consultation Schedule:
              </strong>
              {doctor.schedule}
            </div>
          </div>
        </div>
      </section>

      {/* 04. CTA */}
      <section className="py-16 sm:py-20 bg-[#EAF6F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#171A1C]">
            Schedule Your Visit With {doctor.name}
          </h2>
          <p className="text-sm sm:text-base text-[#5F666B] max-w-lg mx-auto leading-relaxed">
            Experience unhurried dental care with an experienced specialist in Dubai.
          </p>
          <div className="pt-2 flex justify-center">
            <Link
              href="/book-appointment"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-white bg-[#0F6B68] hover:bg-[#0B5250] transition-colors shadow-xs"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
