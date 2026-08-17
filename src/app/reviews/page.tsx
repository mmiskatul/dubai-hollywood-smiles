import React from "react";
import Link from "next/link";
import { patientReviews } from "@/data/reviews";
import { SectionHeading } from "@/components/SectionHeading";
import { ReviewCard } from "@/components/ReviewCard";
import { Star, MessageCircle, ArrowRight, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Patient Reviews & Testimonials | Dubai Hollywood Smiles",
  description:
    "Read real patient experiences and verified reviews from people who transformed their smiles at Dubai Hollywood Smiles in Dubai, UAE.",
};

export default function ReviewsPage() {
  return (
    <div className="bg-white">
      {/* 01. HERO */}
      <section className="pt-6 sm:pt-12 pb-16 sm:pb-20 bg-white border-b border-[#E9EDEE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0F6B68] bg-[#EAF6F5] px-3 py-1 rounded-full">
            PATIENT TRUST
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#171A1C] max-w-3xl mx-auto leading-[1.15]">
            Trusted by Patients
          </h1>

          <p className="text-base sm:text-lg text-[#5F666B] max-w-2xl mx-auto leading-relaxed">
            Every smile has a unique story. Discover how our personalized approach, gentle techniques, and pristine clinical standards have helped patients in Dubai smile with confidence.
          </p>

          {/* Rating Summary Bar */}
          <div className="inline-flex items-center gap-3 bg-[#FCFCFC] border border-[#E9EDEE] rounded-full px-5 py-2 text-xs">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-[#0F6B68] text-[#0F6B68]"
                />
              ))}
            </div>
            <span className="font-semibold text-[#171A1C]">4.9 out of 5</span>
            <span className="text-[#8A9297]">•</span>
            <span className="text-[#5F666B]">Verified Dubai Clinic Reviews</span>
          </div>
        </div>
      </section>

      {/* 02. REVIEW GRID */}
      <section className="py-16 sm:py-24 bg-[#FCFCFC] border-b border-[#E9EDEE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            eyebrow="AUTHENTIC FEEDBACK"
            title="Real Experiences from Our Dental Suites"
            description="All testimonials reflect verified treatment experiences at Dubai Hollywood Smiles (formerly Charly PolyClinic)."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {patientReviews.map((rev) => (
              <ReviewCard key={rev.id} review={rev} />
            ))}
          </div>
        </div>
      </section>

      {/* 03. CTA */}
      <section className="py-16 sm:py-20 bg-[#EAF6F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#171A1C]">
            Have Questions About Your Dental Care?
          </h2>
          <p className="text-sm sm:text-base text-[#5F666B] max-w-lg mx-auto leading-relaxed">
            Our clinical team is always here to listen, answer your concerns, and guide you without obligation.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-white bg-[#0F6B68] hover:bg-[#0B5250] transition-colors shadow-xs"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
