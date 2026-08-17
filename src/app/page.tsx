import React from "react";
import Link from "next/link";
import Image from "next/image";
import { clinicInfo } from "@/data/clinicInfo";
import { treatmentsData } from "@/data/treatments";
import { doctorsData } from "@/data/doctors";
import { beforeAfterCases } from "@/data/cases";
import { patientReviews } from "@/data/reviews";
import { faqsData } from "@/data/faqs";
import { SectionHeading } from "@/components/SectionHeading";
import { TrustStrip } from "@/components/TrustStrip";
import { TreatmentCard } from "@/components/TreatmentCard";
import { ReviewCard } from "@/components/ReviewCard";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { FAQAccordion } from "@/components/FAQAccordion";
import {
  Calendar,
  MessageCircle,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Phone,
  ChevronRight,
  Award,
  Globe,
  UserCheck,
  Clock,
  ShieldCheck,
} from "lucide-react";

export const metadata = {
  title: "Dubai Hollywood Smiles | Private Boutique Dental Studio Dubai",
  description:
    "Your private smile studio in Dubai. Dubai Hollywood Smiles (Previously Charly PolyClinic) — bespoke 1-on-1 cosmetic, veneer, and restorative dental care by Dr. Tariq Al Mansoori.",
};

export default function HomePage() {
  const leadDoctor = doctorsData[0];
  const featuredCases = beforeAfterCases.slice(0, 2);
  const featuredReviews = patientReviews.slice(0, 3);
  const homeFaqs = faqsData.slice(0, 5);

  return (
    <div className="bg-white">

      {/* ── 01. HERO ─────────────────────────────────────────────────────── */}
      <section className="relative pt-8 sm:pt-14 pb-16 sm:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-7">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EAF6F5] text-[#0F6B68] text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Private Boutique Smile Studio
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-semibold tracking-tight text-[#171A1C] leading-[1.1]">
                Bespoke Dentistry.{" "}
                <span className="text-[#0F6B68]">1-on-1 Personal Care.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#5F666B] max-w-xl leading-relaxed">
                Welcome to an intimate, private dental clinic in Dubai where every smile makeover, porcelain veneer, and treatment is personally planned and handcrafted by Dr. Tariq Al Mansoori.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/book-appointment"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#0F6B68] hover:bg-[#0B5250] shadow-sm transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  Book Private Consultation
                </Link>

                <Link
                  href="/treatments"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-[#0F6B68] bg-white border border-[#0F6B68] hover:bg-[#EAF6F5] transition-colors"
                >
                  Explore Treatments
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Trust micro-bar */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-5 text-xs text-[#8A9297] pt-2 border-t border-[#E9EDEE]">
                <span className="flex items-center gap-1.5 font-medium text-[#171A1C]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F6B68]" />
                  Dubai, UAE (Near Emirates Hospital)
                </span>
                <span>·</span>
                <span>1-on-1 Dedicated Time</span>
                <span>·</span>
                <span>Unhurried Appointments</span>
                <span>·</span>
                <span className="text-[#0F6B68] font-medium">DHA Licensed</span>
              </div>
            </div>

            {/* Right — hero image + floating card */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-4/5 sm:aspect-square lg:aspect-4/5 rounded-3xl overflow-hidden border border-[#E9EDEE] shadow-card bg-[#F8FAFA]">
                <Image
                  src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1000&q=80"
                  alt="Dubai Hollywood Smiles Private Dental Suite"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />

                {/* Floating white info card */}
                <div className="absolute bottom-5 left-5 right-5 bg-white border border-[#E9EDEE] rounded-2xl p-4 shadow-card animate-in fade-in slide-in-from-bottom-3 duration-500">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-[#0F6B68] flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Private Studio Setting
                    </span>
                    <span className="text-[10px] text-[#8A9297] uppercase">Dubai Clinic</span>
                  </div>
                  <p className="text-xs text-[#5F666B] leading-relaxed">
                    Unhurried, personal care reserved for one patient at a time in our serene private treatment suite.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 02. TRUST STRIP ──────────────────────────────────────────────── */}
      <TrustStrip />

      {/* ── 03. CLINIC INTRODUCTION ──────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#FCFCFC] border-b border-[#E9EDEE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6">
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-[#E9EDEE] shadow-card bg-white">
                <Image
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80"
                  alt="Doctor Consultation at Dubai Hollywood Smiles"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0F6B68] bg-[#EAF6F5] px-3 py-1 rounded-full">
                PRIVATE CLINIC PHILOSOPHY
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#171A1C] leading-snug">
                Dentistry That Is Focused Purely On You.
              </h2>

              <div className="space-y-3 text-sm sm:text-base text-[#5F666B] leading-relaxed">
                <p>
                  At <strong className="text-[#171A1C]">Dubai Hollywood Smiles</strong> (formerly known as <strong className="text-[#171A1C]">Charly PolyClinic</strong>), we intentionally stepped away from the crowded, high-volume clinic model to build an intimate, private dental studio.
                </p>
                <p>
                  When you visit, you have our private suite and our doctor&apos;s full attention. No rushing between rooms, no junior substitutes. Every consultation, mock-up review, and ceramic shade selection is personally guided by Dr. Tariq Al Mansoori.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-1">
                <div className="p-3.5 rounded-xl bg-white border border-[#E9EDEE]">
                  <div className="text-lg font-bold text-[#0F6B68]">1-on-1</div>
                  <div className="text-xs text-[#5F666B] mt-0.5">Direct Doctor Care</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-[#E9EDEE]">
                  <div className="text-lg font-bold text-[#0F6B68]">15+ Yrs</div>
                  <div className="text-xs text-[#5F666B] mt-0.5">Aesthetic Dental Artistry</div>
                </div>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F6B68] hover:text-[#0B5250] transition-colors"
              >
                Learn More About Our Studio
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 04. MEET YOUR DOCTOR (Dedicated Spotlight) ───────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E9EDEE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F8FAFA] border border-[#E9EDEE] rounded-3xl p-8 sm:p-12 lg:p-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Doctor Photo */}
              <div className="lg:col-span-5">
                <div className="relative aspect-4/5 rounded-2xl overflow-hidden border border-[#E9EDEE] shadow-card bg-white">
                  <Image
                    src={leadDoctor.image}
                    alt={leadDoctor.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-top"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-3 rounded-xl border border-[#E9EDEE] shadow-xs text-xs">
                    <span className="font-semibold text-[#0F6B68] block">Lead Clinician</span>
                    <span className="text-[#171A1C] font-medium">{leadDoctor.qualification}</span>
                  </div>
                </div>
              </div>

              {/* Doctor Bio & Philosophy */}
              <div className="lg:col-span-7 space-y-6">
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0F6B68] bg-[#EAF6F5] px-3 py-1 rounded-full">
                  YOUR DEDICATED DENTIST
                </span>

                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#171A1C] leading-tight">
                    {leadDoctor.name}
                  </h2>
                  <p className="text-sm font-medium text-[#0F6B68] mt-1">
                    {leadDoctor.role} · {leadDoctor.specialty}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[#5F666B] leading-relaxed">
                  &ldquo;{leadDoctor.philosophy}&rdquo;
                </p>

                <div className="space-y-2 text-xs text-[#5F666B]">
                  <p>
                    With over 15 years of clinical practice in Dubai, Dr. Tariq specializes in minimally invasive cosmetic dentistry, digital smile design, and bespoke porcelain veneers.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1 text-xs">
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-[#E9EDEE]">
                    <Award className="w-4 h-4 text-[#0F6B68] shrink-0" />
                    <span className="font-medium text-[#171A1C]">{leadDoctor.experience}</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-[#E9EDEE]">
                    <Globe className="w-4 h-4 text-[#0F6B68] shrink-0" />
                    <span className="font-medium text-[#171A1C]">{leadDoctor.languages.join(" & ")}</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <Link
                    href={`/doctors/${leadDoctor.slug}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold text-white bg-[#0F6B68] hover:bg-[#0B5250] transition-colors"
                  >
                    View Dr. Tariq&apos;s Full Profile
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={clinicInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-medium text-[#0F6B68] bg-white border border-[#0F6B68]/30 hover:bg-[#F3FAF9] transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    Direct WhatsApp
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── 05. TREATMENTS ───────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E9EDEE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <SectionHeading
              align="left"
              eyebrow="STUDIO SERVICES"
              title="Private Dental Treatments"
              description="Personalized cosmetic, restorative, and preventive care delivered in our tranquil Dubai suite."
            />
            <Link
              href="/treatments"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F6B68] hover:underline shrink-0"
            >
              View All Treatments
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {treatmentsData.slice(0, 6).map((t) => (
              <TreatmentCard key={t.slug} treatment={t} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 06. SMILE MAKEOVER ───────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#F8FAFA] border-b border-[#E9EDEE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            <div className="lg:col-span-6 space-y-6">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0F6B68] bg-[#EAF6F5] px-3 py-1 rounded-full">
                SMILE DESIGN EXPERIENCE
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#171A1C] leading-snug">
                A Smile That Feels Authentically You
              </h2>

              <p className="text-sm sm:text-base text-[#5F666B] leading-relaxed">
                A Hollywood Smile should never feel artificial. We evaluate your natural lip dynamics, tooth shade, and facial contours to curate a smile you will love every single day.
              </p>

              {/* 5-Step compact roadmap */}
              <div className="space-y-2.5">
                <p className="text-xs font-semibold text-[#171A1C] uppercase tracking-wider">
                  The 5-Step Private Pathway
                </p>
                <div className="grid grid-cols-5 gap-2 text-center">
                  {[
                    { step: "01", name: "Consult" },
                    { step: "02", name: "Assess" },
                    { step: "03", name: "Plan" },
                    { step: "04", name: "Treat" },
                    { step: "05", name: "Follow Up" },
                  ].map((p) => (
                    <div
                      key={p.step}
                      className="bg-white border border-[#E9EDEE] rounded-xl p-2.5 shadow-subtle"
                    >
                      <div className="text-[10px] font-mono text-[#0F6B68] font-bold">{p.step}</div>
                      <div className="text-[11px] font-semibold text-[#171A1C] leading-tight mt-0.5">{p.name}</div>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/smile-makeover"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#0F6B68] hover:bg-[#0B5250] transition-colors shadow-xs"
              >
                Explore Smile Makeover
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-4/3 sm:aspect-16/10 rounded-2xl overflow-hidden border border-[#E9EDEE] shadow-card bg-white">
                <Image
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80"
                  alt="Smile Makeover at Dubai Hollywood Smiles"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 07. BEFORE & AFTER ───────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E9EDEE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <SectionHeading
              align="left"
              eyebrow="STUDIO RESULTS"
              title="Real Patients. Real Results."
              description="Authentic clinical outcomes crafted by Dr. Tariq. Drag the slider to compare before and after."
            />
            <Link
              href="/before-after"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F6B68] hover:underline shrink-0"
            >
              Full Gallery
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredCases.map((c) => (
              <div
                key={c.id}
                className="bg-white border border-[#E9EDEE] rounded-2xl p-5 sm:p-6 shadow-subtle space-y-4"
              >
                <BeforeAfterSlider
                  beforeImage={c.beforeImage}
                  afterImage={c.afterImage}
                  title={c.title}
                />
                <div className="pt-2 border-t border-[#E9EDEE] text-xs space-y-1.5">
                  <div className="flex justify-between text-[#8A9297]">
                    <span className="font-semibold text-[#0F6B68] bg-[#EAF6F5] px-2 py-0.5 rounded-md">
                      {c.categoryLabel}
                    </span>
                    <span>Duration: <strong className="text-[#171A1C]">{c.timeframe}</strong></span>
                  </div>
                  <p className="text-[#5F666B]">
                    <strong className="text-[#171A1C]">Approach:</strong> {c.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 08. REVIEWS ──────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#FCFCFC] border-b border-[#E9EDEE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <SectionHeading
              align="left"
              eyebrow="PATIENT EXPERIENCES"
              title="What Our Patients Say"
              description="Read genuine experiences from patients who appreciate our private, 1-on-1 care."
            />
            <Link
              href="/reviews"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F6B68] hover:underline shrink-0"
            >
              All Reviews
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredReviews.map((rev) => (
              <ReviewCard key={rev.id} review={rev} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 09. FAQ PREVIEW ──────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E9EDEE]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <SectionHeading
            eyebrow="COMMON QUESTIONS"
            title="Private Studio FAQs"
            description="Clear answers about booking, consultations, and our unhurried appointment approach."
          />

          <FAQAccordion items={homeFaqs} />

          <div className="text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F6B68] hover:underline"
            >
              View All Frequently Asked Questions
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 10. FINAL CTA BANNER ─────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#EAF6F5]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0F6B68] bg-white px-3.5 py-1 rounded-full shadow-2xs">
            Private Consultation
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#171A1C] leading-snug">
            Ready for a Personal Consultation?
          </h2>

          <p className="text-sm sm:text-base text-[#5F666B] leading-relaxed">
            Experience unhurried dental care tailored entirely around your smile and comfort in our private Dubai studio.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/book-appointment"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#0F6B68] hover:bg-[#0B5250] shadow-sm transition-all"
            >
              <Calendar className="w-4 h-4" />
              Book Private Consultation
            </Link>

            <a
              href={clinicInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-[#0F6B68] bg-white border border-[#0F6B68]/30 hover:bg-[#f2faf9] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Direct
            </a>
          </div>

          <div className="text-xs text-[#5F666B] flex items-center justify-center gap-2">
            <Phone className="w-3.5 h-3.5 text-[#0F6B68]" />
            <span>Direct studio line:</span>
            <a
              href={`tel:${clinicInfo.phoneRaw}`}
              className="font-semibold text-[#171A1C] hover:text-[#0F6B68]"
            >
              {clinicInfo.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
