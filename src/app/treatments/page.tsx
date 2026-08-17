import React from "react";
import Link from "next/link";
import Image from "next/image";
import { treatmentsData, treatmentCategories } from "@/data/treatments";
import { SectionHeading } from "@/components/SectionHeading";
import { TreatmentCard } from "@/components/TreatmentCard";
import {
  Calendar,
  Sparkles,
  ArrowRight,
  HelpCircle,
} from "lucide-react";

export const metadata = {
  title: "Private Studio Dental Treatments | Dubai Hollywood Smiles",
  description:
    "Explore bespoke cosmetic dentistry, handcrafted porcelain veneers, in-clinic whitening, clear aligners, and restorative dental care at Dubai Hollywood Smiles.",
};

export default function TreatmentsOverviewPage() {
  return (
    <div className="bg-white">
      {/* 01. HERO SECTION */}
      <section className="pt-6 sm:pt-12 pb-16 sm:pb-20 bg-white border-b border-[#E9EDEE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0F6B68] bg-[#EAF6F5] px-3 py-1 rounded-full">
            STUDIO SERVICES
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#171A1C] max-w-3xl mx-auto leading-[1.15]">
            Bespoke Dental Treatments in Dubai
          </h1>

          <p className="text-base sm:text-lg text-[#5F666B] max-w-2xl mx-auto leading-relaxed">
            Explore our curated dental treatments delivered with gentle precision and 1-on-1 personal attention by Dr. Tariq Al Mansoori.
          </p>

          <div className="pt-2 flex justify-center gap-3">
            <Link
              href="/book-appointment"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#0F6B68] hover:bg-[#0B5250] transition-colors shadow-xs"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Private Consultation</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 02. CATEGORIES OVERVIEW */}
      <section className="py-16 sm:py-24 bg-[#FCFCFC] border-b border-[#E9EDEE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <SectionHeading
            eyebrow="TREATMENT DISCIPLINES"
            title="Curated Clinical Focus Areas"
            description="Our private studio provides comprehensive dental disciplines in an ultra-clean, peaceful environment."
          />

          <div className="space-y-12">
            {treatmentCategories.map((cat) => {
              const matchingTreatments = treatmentsData.filter(
                (t) => t.categoryId === cat.id
              );

              return (
                <div
                  key={cat.id}
                  id={cat.id}
                  className="bg-white border border-[#E9EDEE] rounded-3xl p-6 sm:p-10 shadow-subtle space-y-8"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-4 relative aspect-16/10 rounded-2xl overflow-hidden bg-[#F8FAFA] border border-[#E9EDEE]">
                      <Image
                        src={cat.image}
                        alt={cat.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover"
                      />
                    </div>

                    <div className="lg:col-span-8 space-y-3">
                      <div className="text-xs font-semibold text-[#0F6B68] uppercase tracking-wider">
                        {cat.subtitle}
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-semibold text-[#171A1C]">
                        {cat.title}
                      </h2>
                      <p className="text-sm sm:text-base text-[#5F666B] leading-relaxed">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  {/* Treatments in this category */}
                  {matchingTreatments.length > 0 && (
                    <div className="pt-4 border-t border-[#E9EDEE] space-y-4">
                      <h3 className="text-xs font-semibold text-[#8A9297] uppercase tracking-wider">
                        Available Treatments in {cat.title}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {matchingTreatments.map((tr) => (
                          <div
                            key={tr.slug}
                            className="bg-[#FCFCFC] border border-[#E9EDEE] rounded-xl p-5 hover:border-[#0F6B68]/40 hover:bg-white transition-all group flex flex-col justify-between"
                          >
                            <div className="space-y-2">
                              <h4 className="text-base font-semibold text-[#171A1C] group-hover:text-[#0F6B68] transition-colors">
                                {tr.title}
                              </h4>
                              <p className="text-xs text-[#5F666B] leading-relaxed line-clamp-2">
                                {tr.shortDescription}
                              </p>
                            </div>
                            <div className="pt-4">
                              <Link
                                href={`/treatments/${tr.slug}`}
                                className="text-xs font-semibold text-[#0F6B68] inline-flex items-center gap-1 group-hover:underline"
                              >
                                <span>Learn More</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 03. ALL SERVICES GRID */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E9EDEE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            eyebrow="ALL PROCEDURES"
            title="Individual Treatment Profiles"
            description="Explore in-depth guides, procedure steps, and aftercare details for every private studio treatment."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {treatmentsData.map((t) => (
              <TreatmentCard key={t.slug} treatment={t} />
            ))}
          </div>
        </div>
      </section>

      {/* 04. TREATMENT CTA BANNER */}
      <section className="py-16 sm:py-20 bg-[#EAF6F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-12 h-12 rounded-full bg-white text-[#0F6B68] mx-auto flex items-center justify-center shadow-xs">
            <HelpCircle className="w-6 h-6" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#171A1C] leading-snug">
            Not Sure Where to Start?
          </h2>

          <p className="text-sm sm:text-base text-[#5F666B] max-w-lg mx-auto leading-relaxed">
            A private 1-on-1 consultation allows Dr. Tariq to evaluate your teeth and smile goals in an unhurried, transparent session.
          </p>

          <div className="pt-2 flex justify-center">
            <Link
              href="/book-appointment"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#0F6B68] hover:bg-[#0B5250] transition-colors shadow-xs"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Private Consultation</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
