import React from "react";
import Link from "next/link";
import { clinicInfo } from "@/data/clinicInfo";
import { ChevronRight } from "lucide-react";

export const metadata = {
  title: "Terms of Service | Dubai Hollywood Smiles",
  description:
    "Terms of Service governing the use of the Dubai Hollywood Smiles (Previously Charly PolyClinic) website and appointment scheduling platform.",
};

export default function TermsPage() {
  return (
    <div className="bg-white">
      {/* 01. HERO */}
      <section className="pt-6 sm:pt-10 pb-12 sm:pb-16 bg-white border-b border-[#E9EDEE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <nav className="flex items-center space-x-2 text-xs text-[#8A9297]">
            <Link href="/" className="hover:text-[#0F6B68]">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#171A1C] font-medium">Terms of Service</span>
          </nav>

          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0F6B68] bg-[#EAF6F5] px-3 py-1 rounded-full">
            TERMS & CONDITIONS
          </span>

          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#171A1C]">
            Terms of Service
          </h1>

          <p className="text-sm text-[#8A9297]">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })} • Dubai Hollywood Smiles (Previously Charly PolyClinic)
          </p>
        </div>
      </section>

      {/* 02. TERMS CONTENT */}
      <section className="py-16 sm:py-20 bg-[#FCFCFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[#E9EDEE] rounded-3xl p-6 sm:p-10 shadow-subtle space-y-8 text-sm sm:text-base text-[#5F666B] leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold text-[#171A1C] mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing, browsing, or utilizing the website and appointment services of Dubai Hollywood Smiles (formerly Charly PolyClinic), you acknowledge and agree to comply with and be bound by these Terms of Service.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#171A1C] mb-3">
                2. Nature of Website Information
              </h2>
              <p>
                All informational text, procedure summaries, before-and-after imagery, and articles published on this website are provided strictly for general educational and informational purposes. They do not constitute formal dental diagnosis or individual medical prescriptions. A thorough in-person clinical assessment by a licensed practitioner is required for all treatment pathways.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#171A1C] mb-3">
                3. Online Appointment Requests
              </h2>
              <p>
                Submitting an online appointment request form indicates an expression of interest and scheduling preference. It does not constitute a guaranteed or confirmed booking until our clinical reception team reaches out and confirms doctor availability, patient registration details, and specific appointment timing.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#171A1C] mb-3">
                4. Intellectual Property & Brand Rights
              </h2>
              <p>
                All brand marks, logos, website copy, photographic layouts, and design elements relating to &ldquo;Dubai Hollywood Smiles&rdquo; and &ldquo;Charly PolyClinic&rdquo; are the intellectual property of the clinic and protected under applicable UAE copyright and intellectual property legislation.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#171A1C] mb-3">
                5. Limitation of Liability
              </h2>
              <p>
                Dubai Hollywood Smiles makes reasonable efforts to ensure the accuracy and currency of website information. However, the Clinic assumes no liability for transient technical interruptions or reliance placed on general informational content prior to clinical diagnosis.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#171A1C] mb-3">
                6. Governing Jurisdiction
              </h2>
              <p>
                These Terms of Service are governed by and construed in accordance with the laws of the Emirate of Dubai and the federal laws of the United Arab Emirates.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
