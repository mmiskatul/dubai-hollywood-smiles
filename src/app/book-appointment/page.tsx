import React from "react";
import { clinicInfo } from "@/data/clinicInfo";
import { AppointmentForm } from "@/components/AppointmentForm";
import {
  Calendar,
  ShieldCheck,
  Clock,
  Phone,
  MessageCircle,
  CheckCircle2,
  UserCheck,
} from "lucide-react";

export const metadata = {
  title: "Book Private Consultation | Dubai Hollywood Smiles",
  description:
    "Request a 1-on-1 dental consultation or aesthetic smile makeover session at Dubai Hollywood Smiles (Previously Charly PolyClinic) in Dubai, UAE.",
};

export default function BookAppointmentPage() {
  return (
    <div className="bg-white">
      {/* 01. HERO */}
      <section className="pt-6 sm:pt-12 pb-16 sm:pb-20 bg-white border-b border-[#E9EDEE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0F6B68] bg-[#EAF6F5] px-3 py-1 rounded-full">
            PRIVATE CONSULTATION REQUEST
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#171A1C] max-w-3xl mx-auto leading-[1.15]">
            Reserve Your 1-on-1 Consultation
          </h1>

          <p className="text-base sm:text-lg text-[#5F666B] max-w-2xl mx-auto leading-relaxed">
            Select your preferred consultation timing and area of interest. We dedicate ample time for each private session with Dr. Tariq Al Mansoori.
          </p>
        </div>
      </section>

      {/* 02. BOOKING FORM & CLINICAL ASSURANCE */}
      <section className="py-16 sm:py-24 bg-[#FCFCFC] border-b border-[#E9EDEE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Form */}
            <div className="lg:col-span-7">
              <AppointmentForm />
            </div>

            {/* Right Information & Assurances */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white border border-[#E9EDEE] rounded-2xl p-6 sm:p-7 shadow-subtle space-y-5">
                <h3 className="text-lg font-semibold text-[#171A1C]">
                  What Happens Next?
                </h3>

                <div className="space-y-4 text-xs sm:text-sm text-[#5F666B]">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#EAF6F5] text-[#0F6B68] font-semibold flex items-center justify-center shrink-0 text-xs">
                      1
                    </div>
                    <div>
                      <strong className="text-[#171A1C] block">Request Received:</strong>
                      We review your preferred timing and clinical interest notes.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#EAF6F5] text-[#0F6B68] font-semibold flex items-center justify-center shrink-0 text-xs">
                      2
                    </div>
                    <div>
                      <strong className="text-[#171A1C] block">Direct Coordination:</strong>
                      We reach out via WhatsApp or phone call to confirm your dedicated private appointment slot.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#EAF6F5] text-[#0F6B68] font-semibold flex items-center justify-center shrink-0 text-xs">
                      3
                    </div>
                    <div>
                      <strong className="text-[#171A1C] block">Unhurried Studio Visit:</strong>
                      Enjoy a relaxed, 1-on-1 consultation in our private Dubai clinic near Emirates Hospital.
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#E9EDEE] space-y-2 text-xs text-[#8A9297]">
                  <div className="flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#0F6B68]" />
                    <span>Direct personal care with Dr. Tariq Al Mansoori</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#0F6B68]" />
                    <span>Private unhurried consultation windows</span>
                  </div>
                </div>
              </div>

              {/* Direct Instant Booking Card */}
              <div className="bg-[#EAF6F5] border border-[#0F6B68]/15 rounded-2xl p-6 space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#0F6B68] uppercase tracking-wider">
                  <MessageCircle className="w-4 h-4" />
                  <span>Immediate Assistance</span>
                </div>
                <h4 className="text-base font-semibold text-[#171A1C]">
                  Need Faster Confirmation?
                </h4>
                <p className="text-xs text-[#5F666B] leading-relaxed">
                  Message us directly on WhatsApp to check same-week availability.
                </p>
                <a
                  href={clinicInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#0F6B68] hover:bg-[#0B5250] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Message on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
