import React from "react";
import Link from "next/link";
import { faqsData } from "@/data/faqs";
import { clinicInfo } from "@/data/clinicInfo";
import { SectionHeading } from "@/components/SectionHeading";
import { FAQAccordion } from "@/components/FAQAccordion";
import {
  HelpCircle,
  MessageCircle,
  Phone,
  Calendar,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Frequently Asked Questions | Dubai Hollywood Smiles",
  description:
    "Find clear answers about dental treatments, cosmetic smile makeovers, booking, pricing, and clinic location at Dubai Hollywood Smiles in Dubai.",
};

export default function FAQPage() {
  return (
    <div className="bg-white">
      {/* 01. HERO */}
      <section className="pt-6 sm:pt-12 pb-16 sm:pb-20 bg-white border-b border-[#E9EDEE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0F6B68] bg-[#EAF6F5] px-3 py-1 rounded-full">
            PATIENT KNOWLEDGE BASE
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#171A1C] max-w-3xl mx-auto leading-[1.15]">
            Frequently Asked Questions
          </h1>

          <p className="text-base sm:text-lg text-[#5F666B] max-w-2xl mx-auto leading-relaxed">
            Search our curated knowledge base for answers to common questions about dental care, cosmetic procedures, appointment requests, and clinic standards.
          </p>
        </div>
      </section>

      {/* 02. SEARCHABLE FAQ COMPONENT */}
      <section className="py-16 sm:py-24 bg-[#FCFCFC] border-b border-[#E9EDEE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <FAQAccordion
            items={faqsData}
            showSearch={true}
            showCategoryTabs={true}
          />
        </div>
      </section>

      {/* 03. STILL HAVE QUESTIONS? */}
      <section className="py-16 sm:py-20 bg-[#EAF6F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-12 h-12 rounded-full bg-white text-[#0F6B68] mx-auto flex items-center justify-center shadow-xs">
            <MessageCircle className="w-6 h-6" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-semibold text-[#171A1C]">
            Still Have a Question We Haven&apos;t Answered?
          </h2>

          <p className="text-sm sm:text-base text-[#5F666B] max-w-lg mx-auto leading-relaxed">
            Our friendly patient coordinators in Dubai are available to answer your specific questions via WhatsApp or phone.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
            <a
              href={clinicInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-white bg-[#0F6B68] hover:bg-[#0B5250] transition-colors shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask on WhatsApp</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-[#0F6B68] bg-white border border-[#0F6B68]/30 hover:bg-[#f3faf9] transition-colors"
            >
              <span>Contact Us Form</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
