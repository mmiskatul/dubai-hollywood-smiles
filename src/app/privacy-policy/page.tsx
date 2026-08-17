import React from "react";
import Link from "next/link";
import { clinicInfo } from "@/data/clinicInfo";
import { ShieldCheck, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Dubai Hollywood Smiles",
  description:
    "Privacy Policy for Dubai Hollywood Smiles (Previously Charly PolyClinic). Explaining how we collect, handle, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
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
            <span className="text-[#171A1C] font-medium">Privacy Policy</span>
          </nav>

          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0F6B68] bg-[#EAF6F5] px-3 py-1 rounded-full">
            LEGAL COMPLIANCE
          </span>

          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#171A1C]">
            Privacy Policy
          </h1>

          <p className="text-sm text-[#8A9297]">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })} • Dubai Hollywood Smiles (Previously Charly PolyClinic)
          </p>
        </div>
      </section>

      {/* 02. POLICY CONTENT */}
      <section className="py-16 sm:py-20 bg-[#FCFCFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[#E9EDEE] rounded-3xl p-6 sm:p-10 shadow-subtle space-y-8 text-sm sm:text-base text-[#5F666B] leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold text-[#171A1C] mb-3">
                1. Overview & Scope
              </h2>
              <p>
                Dubai Hollywood Smiles (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;the Clinic&rdquo;), formerly known as Charly PolyClinic, located in Dubai, United Arab Emirates, is committed to safeguarding the privacy and confidentiality of visitors to our website and patients who submit appointment inquiries.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#171A1C] mb-3">
                2. Information We Collect
              </h2>
              <p className="mb-2">We may collect personal information that you voluntarily provide when interacting with our digital channels:</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li><strong className="text-[#171A1C]">Contact Details:</strong> Full name, telephone/WhatsApp number, email address.</li>
                <li><strong className="text-[#171A1C]">Appointment Details:</strong> Preferred consultation dates, treatment interests, and voluntary preliminary dental notes.</li>
                <li><strong className="text-[#171A1C]">Technical Telemetry:</strong> Anonymized IP addresses, browser types, and navigation metrics used solely to ensure fast, secure website delivery.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#171A1C] mb-3">
                3. Use of Information
              </h2>
              <p>The information submitted via our online request forms is utilized exclusively to:</p>
              <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
                <li>Coordinate, confirm, and manage your requested dental consultations.</li>
                <li>Respond to direct clinical inquiries submitted via web forms or WhatsApp.</li>
                <li>Maintain necessary administrative records in accordance with UAE healthcare regulatory frameworks.</li>
              </ul>
              <p className="mt-2 font-medium text-[#171A1C]">
                We do not sell, rent, or lease your personal contact information to third-party commercial marketing databases.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#171A1C] mb-3">
                4. Cookies & Web Analytics
              </h2>
              <p>
                Our website utilizes minimal, essential session cookies and performance telemetry to guarantee swift loading speeds and responsive layouts across desktop and mobile devices. You may disable cookies through your browser settings without restricting core informational access.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#171A1C] mb-3">
                5. Data Security & Storage
              </h2>
              <p>
                We implement industry-standard encryption (SSL/TLS) and secure administrative protocols to protect all transmission of personal details. Physical patient medical records are maintained strictly within our secure clinical management systems in full accordance with Dubai Health Authority (DHA) standards.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#171A1C] mb-3">
                6. Patient Rights & Data Inquiries
              </h2>
              <p>
                You may request access to, correction of, or deletion of your contact information from our prospective booking records at any time by contacting our clinic coordinator at <a href={`tel:${clinicInfo.phoneRaw}`} className="text-[#0F6B68] font-medium hover:underline">{clinicInfo.phone}</a> or emailing care@dubaihollywoodsmiles.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
