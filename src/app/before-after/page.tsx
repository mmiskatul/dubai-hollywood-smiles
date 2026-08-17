"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { beforeAfterCases } from "@/data/cases";
import { SectionHeading } from "@/components/SectionHeading";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import {
  Calendar,
  Sparkles,
  ShieldCheck,
  AlertCircle,
  Filter,
} from "lucide-react";

export default function BeforeAfterPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filterOptions = [
    { id: "all", label: "All Cases" },
    { id: "veneers", label: "Porcelain Veneers" },
    { id: "whitening", label: "Laser Whitening" },
    { id: "smile-makeover", label: "Smile Makeovers" },
    { id: "aligners", label: "Clear Aligners" },
    { id: "restorative", label: "Restorative & Implants" },
  ];

  const filteredCases = useMemo(() => {
    if (activeFilter === "all") return beforeAfterCases;
    return beforeAfterCases.filter((c) => c.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="bg-white">
      {/* 01. HERO */}
      <section className="pt-6 sm:pt-12 pb-16 sm:pb-20 bg-white border-b border-[#E9EDEE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0F6B68] bg-[#EAF6F5] px-3 py-1 rounded-full">
            CLINICAL GALLERY
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#171A1C] max-w-3xl mx-auto leading-[1.15]">
            Real Smiles. Real Transformations.
          </h1>

          <p className="text-base sm:text-lg text-[#5F666B] max-w-2xl mx-auto leading-relaxed">
            Explore authentic before and after clinical outcomes from Dubai Hollywood Smiles. Use the interactive slider to compare baseline smile conditions with final post-treatment results.
          </p>
        </div>
      </section>

      {/* 02. FILTER & GALLERY */}
      <section className="py-12 sm:py-20 bg-[#FCFCFC] border-b border-[#E9EDEE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setActiveFilter(opt.id)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                  activeFilter === opt.id
                    ? "bg-[#0F6B68] text-white shadow-xs"
                    : "bg-white text-[#5F666B] border border-[#E9EDEE] hover:bg-[#F8FAFA]"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
            {filteredCases.map((c) => (
              <div
                key={c.id}
                className="bg-white border border-[#E9EDEE] rounded-3xl p-6 sm:p-7 shadow-subtle space-y-5"
              >
                <BeforeAfterSlider
                  beforeImage={c.beforeImage}
                  afterImage={c.afterImage}
                  title={c.title}
                />

                <div className="pt-2 border-t border-[#E9EDEE] space-y-2.5 text-xs">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-[#8A9297]">
                    <span className="font-semibold text-[#0F6B68] bg-[#EAF6F5] px-2.5 py-0.5 rounded-md">
                      {c.categoryLabel}
                    </span>
                    <span>
                      Duration: <strong className="text-[#171A1C]">{c.timeframe}</strong>
                    </span>
                  </div>

                  <p className="text-[#5F666B] leading-relaxed">
                    <strong className="text-[#171A1C]">Patient Concern:</strong> {c.concern}
                  </p>

                  <p className="text-[#5F666B] leading-relaxed">
                    <strong className="text-[#171A1C]">Clinical Solution:</strong> {c.solution}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {c.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="text-[10px] bg-[#F8FAFA] text-[#5F666B] border border-[#E9EDEE] px-2 py-0.5 rounded-md"
                      >
                        ✓ {h}
                      </span>
                    ))}
                  </div>

                  <div className="text-[11px] text-[#8A9297] pt-1">
                    Clinician: <strong className="text-[#171A1C]">{c.doctor}</strong>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03. CLINICAL DISCLAIMER */}
      <section className="py-12 bg-white border-b border-[#E9EDEE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F8FAFA] border border-[#E9EDEE] rounded-2xl p-6 flex items-start gap-4 text-xs text-[#5F666B] leading-relaxed">
            <AlertCircle className="w-5 h-5 text-[#0F6B68] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#171A1C] block mb-1">
                Medical & Aesthetic Results Notice:
              </strong>
              Individual results vary. Treatment suitability and outcomes depend on each patient&apos;s oral health, periodontal foundation, anatomical facial architecture, and adherence to aftercare protocols. All cases displayed represent actual treatments performed under certified clinical protocols.
            </div>
          </div>
        </div>
      </section>

      {/* 04. CTA */}
      <section className="py-16 sm:py-20 bg-[#EAF6F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#171A1C]">
            Ready to Begin Your Transformation?
          </h2>
          <p className="text-sm sm:text-base text-[#5F666B] max-w-lg mx-auto leading-relaxed">
            Schedule your comprehensive dental assessment and smile preview at Dubai Hollywood Smiles.
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
