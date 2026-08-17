import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { treatmentsData } from "@/data/treatments";
import { clinicInfo } from "@/data/clinicInfo";
import { SectionHeading } from "@/components/SectionHeading";
import { TreatmentCard } from "@/components/TreatmentCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import {
  Calendar,
  MessageCircle,
  Sparkles,
  CheckCircle2,
  Clock,
  ShieldCheck,
  ArrowRight,
  ChevronRight,
  Info,
} from "lucide-react";

interface TreatmentPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return treatmentsData.map((treatment) => ({
    slug: treatment.slug,
  }));
}

export async function generateMetadata({ params }: TreatmentPageProps) {
  const { slug } = await params;
  const treatment = treatmentsData.find((t) => t.slug === slug);
  if (!treatment) return { title: "Treatment Not Found" };

  return {
    title: `${treatment.title} | Dubai Hollywood Smiles`,
    description: treatment.shortDescription,
  };
}

export default async function TreatmentDetailPage({ params }: TreatmentPageProps) {
  const { slug } = await params;
  const treatment = treatmentsData.find((t) => t.slug === slug);

  if (!treatment) {
    notFound();
  }

  const relatedTreatments = treatmentsData.filter((t) =>
    treatment.relatedSlugs.includes(t.slug)
  );

  const formattedFaqs = treatment.faqs.map((f, i) => ({
    id: `tf-${i}`,
    category: "treatments" as const,
    categoryLabel: treatment.category,
    question: f.question,
    answer: f.answer,
  }));

  return (
    <div className="bg-white">
      {/* 01. BREADCRUMBS & HERO */}
      <section className="pt-6 sm:pt-10 pb-16 sm:pb-24 bg-white border-b border-[#E9EDEE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-xs text-[#8A9297]">
            <Link href="/" className="hover:text-[#0F6B68]">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/treatments" className="hover:text-[#0F6B68]">
              Treatments
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#171A1C] font-medium truncate max-w-xs sm:max-w-none">
              {treatment.title}
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Info */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0F6B68] bg-[#EAF6F5] px-3 py-1 rounded-full">
                {treatment.category}
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#171A1C] leading-[1.15]">
                {treatment.title}
              </h1>

              <p className="text-base sm:text-lg text-[#5F666B] leading-relaxed">
                {treatment.tagline}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/book-appointment"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-white bg-[#0F6B68] hover:bg-[#0B5250] transition-colors shadow-xs"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation</span>
                </Link>

                <a
                  href={clinicInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-[#0F6B68] bg-[#EAF6F5] hover:bg-[#d8efec] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="lg:col-span-5">
              <div className="relative aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 rounded-2xl overflow-hidden border border-[#E9EDEE] shadow-card bg-[#F8FAFA]">
                <Image
                  src={treatment.heroImage}
                  alt={treatment.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. OVERVIEW SECTION */}
      <section className="py-16 sm:py-24 bg-[#FCFCFC] border-b border-[#E9EDEE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <SectionHeading
            eyebrow="TREATMENT OVERVIEW"
            title="Understanding Your Dental Care"
            description={treatment.overview.lead}
          />

          <div className="bg-white border border-[#E9EDEE] rounded-2xl p-6 sm:p-8 shadow-subtle space-y-6 text-sm sm:text-base text-[#5F666B] leading-relaxed">
            <div>
              <h3 className="text-base font-semibold text-[#171A1C] mb-2">
                What is this procedure?
              </h3>
              <p>{treatment.overview.whatIsIt}</p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-[#171A1C] mb-2">
                Why patients consider it
              </h3>
              <p>{treatment.overview.whyConsider}</p>
            </div>

            <div className="bg-[#F8FAFA] border border-[#E9EDEE] rounded-xl p-4 sm:p-5 flex items-start gap-3">
              <Info className="w-5 h-5 text-[#0F6B68] shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-[#5F666B]">
                <strong className="text-[#171A1C] block mb-1">
                  Clinical Considerations:
                </strong>
                {treatment.overview.clinicalConsiderations}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. 5-STEP TREATMENT PROCESS */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E9EDEE]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            eyebrow="CLINICAL PROTOCOL"
            title="The Step-by-Step Patient Pathway"
            description="Our structured, transparent procedure ensures optimal precision, minimal discomfort, and enduring aesthetic results."
          />

          <div className="space-y-4">
            {treatment.process.map((step) => (
              <div
                key={step.step}
                className="bg-white border border-[#E9EDEE] rounded-2xl p-6 sm:p-7 shadow-subtle flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 hover:border-[#cfd7d8] transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#EAF6F5] text-[#0F6B68] font-mono font-bold text-lg flex items-center justify-center shrink-0 border border-[#0F6B68]/15">
                  {step.step}
                </div>
                <div className="space-y-1 grow">
                  <h4 className="text-base font-semibold text-[#171A1C]">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5F666B] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04. BENEFITS */}
      <section className="py-16 sm:py-24 bg-[#F8FAFA] border-b border-[#E9EDEE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            eyebrow="KEY ADVANTAGES"
            title="Why Choose Dubai Hollywood Smiles for This Care"
            description="Experience dental treatments designed around clinical longevity, tissue preservation, and visual beauty."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {treatment.benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E9EDEE] rounded-2xl p-6 shadow-subtle space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EAF6F5] text-[#0F6B68] flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="text-base font-semibold text-[#171A1C]">
                  {benefit.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#5F666B] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05. WHAT TO EXPECT & AFTERCARE */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E9EDEE]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
            {/* What to expect */}
            <div className="bg-[#FCFCFC] border border-[#E9EDEE] rounded-2xl p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-semibold text-[#171A1C]">
                What to Expect
              </h3>
              <div className="space-y-4">
                {treatment.whatToExpect.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <span className="text-xs font-semibold text-[#0F6B68] uppercase tracking-wider">
                      {item.stage}
                    </span>
                    <h4 className="text-sm font-semibold text-[#171A1C]">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#5F666B] leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Aftercare & Guidelines */}
            <div className="bg-[#FCFCFC] border border-[#E9EDEE] rounded-2xl p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-semibold text-[#171A1C]">
                Aftercare & Longevity
              </h3>
              <ul className="space-y-3">
                {treatment.aftercare.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#5F666B]">
                    <div className="w-5 h-5 rounded-full bg-[#EAF6F5] text-[#0F6B68] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 06. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 sm:py-24 bg-[#F8FAFA] border-b border-[#E9EDEE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <SectionHeading
            eyebrow="TREATMENT FAQS"
            title="Questions About This Treatment"
            description="Find direct answers to common questions about timelines, suitability, and expected outcomes."
          />

          <FAQAccordion items={formattedFaqs} />
        </div>
      </section>

      {/* 07. RELATED TREATMENTS */}
      {relatedTreatments.length > 0 && (
        <section className="py-16 sm:py-24 bg-white border-b border-[#E9EDEE]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <SectionHeading
              eyebrow="COMPLEMENTARY CARE"
              title="Related Treatments"
              description="Explore other dental services commonly paired with this treatment."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {relatedTreatments.map((t) => (
                <TreatmentCard key={t.slug} treatment={t} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 08. FINAL CTA */}
      <section className="py-16 sm:py-20 bg-[#EAF6F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#171A1C] leading-snug">
            Let&apos;s Talk About Your Smile
          </h2>
          <p className="text-sm sm:text-base text-[#5F666B] max-w-lg mx-auto leading-relaxed">
            Schedule a consultation with our experienced dental team in Dubai to discuss {treatment.title}.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/book-appointment"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-white bg-[#0F6B68] hover:bg-[#0B5250] transition-colors shadow-xs"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </Link>
            <a
              href={clinicInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-[#0F6B68] bg-white border border-[#0F6B68]/30 hover:bg-[#F3FAF9] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
