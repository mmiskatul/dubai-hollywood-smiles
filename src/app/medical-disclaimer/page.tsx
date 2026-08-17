import React from "react";
import Link from "next/link";
import { clinicInfo } from "@/data/clinicInfo";
import { AlertCircle, ChevronRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Medical & Dental Disclaimer | Dubai Hollywood Smiles",
  description:
    "Medical and Dental Disclaimer for Dubai Hollywood Smiles. Clarifying treatment suitability, clinical outcomes, and the necessity of direct clinical consultation.",
};

export default function MedicalDisclaimerPage() {
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
            <span className="text-[#171A1C] font-medium">Medical Disclaimer</span>
          </nav>

          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0F6B68] bg-[#EAF6F5] px-3 py-1 rounded-full">
            CLINICAL NOTICE
          </span>

          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#171A1C]">
            Medical & Dental Disclaimer
          </h1>

          <p className="text-sm text-[#8A9297]">
            Official Healthcare Notice • Dubai Hollywood Smiles (Previously Charly PolyClinic)
          </p>
        </div>
      </section>

      {/* 02. DISCLAIMER CONTENT */}
      <section className="py-16 sm:py-20 bg-[#FCFCFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[#E9EDEE] rounded-3xl p-6 sm:p-10 shadow-subtle space-y-8 text-sm sm:text-base text-[#5F666B] leading-relaxed">
            {/* Prominent Alert Box */}
            <div className="bg-[#EAF6F5] border border-[#0F6B68]/20 rounded-2xl p-5 sm:p-6 flex items-start gap-4 text-xs sm:text-sm text-[#171A1C]">
              <AlertCircle className="w-6 h-6 text-[#0F6B68] shrink-0 mt-0.5" />
              <div className="space-y-1">
                <strong className="block text-sm font-semibold text-[#0F6B68]">
                  Primary Healthcare Statement:
                </strong>
                <p>
                  Website information is provided for general informational and educational purposes only and should never replace professional dental examination, diagnosis, or personalized treatment planning by a qualified clinician.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#171A1C] mb-3">
                1. Individual Clinical Variability
              </h2>
              <p>
                Every dental patient possesses distinct oral anatomy, periodontal health levels, bone density, and aesthetic smile contours. Treatment outcomes, healing durations, and longevity for procedures such as porcelain veneers, teeth whitening, clear aligners, and dental implants naturally vary based on biological response, occlusal habits, and oral hygiene compliance.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#171A1C] mb-3">
                2. No Guarantee of Specific Aesthetic Results
              </h2>
              <p>
                Before and after clinical photographs shown on this website illustrate real outcomes achieved by specific patients under customized treatment plans. They do not constitute an explicit promise or contractual guarantee that another individual will achieve an identical aesthetic result.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#171A1C] mb-3">
                3. The Critical Role of Clinical Consultation
              </h2>
              <p>
                No aesthetic or restorative treatment will be undertaken without a comprehensive in-person clinical assessment, including:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm mt-2">
                <li>Low-radiation diagnostic radiography / 3D CBCT scans.</li>
                <li>Comprehensive periodontal and soft tissue screening.</li>
                <li>Occlusal and functional bite analysis.</li>
                <li>Review of medical history, medications, and allergies.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#171A1C] mb-3">
                4. Emergency Care Guidance
              </h2>
              <p>
                If you are experiencing severe dental trauma, acute uncontrolled bleeding, or breathing difficulty related to oral swelling, please call our priority reception at <a href={`tel:${clinicInfo.phoneRaw}`} className="text-[#0F6B68] font-medium hover:underline">{clinicInfo.phone}</a> immediately or present to the nearest hospital emergency department in Dubai.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
