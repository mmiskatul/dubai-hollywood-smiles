import React from "react";
import { clinicInfo } from "@/data/clinicInfo";
import { ContactForm } from "@/components/ContactForm";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Mail,
  ShieldCheck,
  Building,
} from "lucide-react";

export const metadata = {
  title: "Contact & Studio Location | Dubai Hollywood Smiles",
  description:
    "Contact Dubai Hollywood Smiles (Previously Charly PolyClinic) in Dubai, UAE. Call +971 50 213 9191 or visit our private studio near Emirates Hospital.",
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* 01. HERO */}
      <section className="pt-6 sm:pt-12 pb-16 sm:pb-20 bg-white border-b border-[#E9EDEE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0F6B68] bg-[#EAF6F5] px-3 py-1 rounded-full">
            GET IN TOUCH
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#171A1C] max-w-3xl mx-auto leading-[1.15]">
            Contact Our Private Studio
          </h1>

          <p className="text-base sm:text-lg text-[#5F666B] max-w-2xl mx-auto leading-relaxed">
            Have questions regarding our treatments or wish to schedule a 1-on-1 consultation? We are here to assist you with genuine transparency.
          </p>
        </div>
      </section>

      {/* 02. CONTACT INFO & FORM */}
      <section className="py-16 sm:py-24 bg-[#FCFCFC] border-b border-[#E9EDEE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Left Contact Information Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-semibold text-[#0F6B68] uppercase tracking-wider">
                  STUDIO LOCATION
                </span>
                <h2 className="text-2xl font-semibold text-[#171A1C] mt-1">
                  Dubai Hollywood Smiles
                </h2>
                <p className="text-xs text-[#8A9297] uppercase font-medium">
                  Previously Charly PolyClinic
                </p>
              </div>

              <div className="space-y-4">
                {/* Phone */}
                <div className="bg-white border border-[#E9EDEE] rounded-2xl p-5 shadow-subtle flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EAF6F5] text-[#0F6B68] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 text-xs sm:text-sm">
                    <div className="text-[#8A9297] font-medium">Direct Phone Line</div>
                    <a
                      href={`tel:${clinicInfo.phoneRaw}`}
                      className="font-semibold text-[#171A1C] hover:text-[#0F6B68] text-base block"
                    >
                      {clinicInfo.phone}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="bg-white border border-[#E9EDEE] rounded-2xl p-5 shadow-subtle flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EAF6F5] text-[#0F6B68] flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 text-xs sm:text-sm">
                    <div className="text-[#8A9297] font-medium">WhatsApp Support</div>
                    <a
                      href={clinicInfo.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#0F6B68] hover:underline block"
                    >
                      Message Direct Support →
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="bg-white border border-[#E9EDEE] rounded-2xl p-5 shadow-subtle flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EAF6F5] text-[#0F6B68] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 text-xs sm:text-sm">
                    <div className="text-[#8A9297] font-medium">Studio Address</div>
                    <div className="font-semibold text-[#171A1C]">
                      {clinicInfo.location}
                    </div>
                    <div className="text-[#8A9297] text-xs">
                      Near {clinicInfo.locationReference}
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-white border border-[#E9EDEE] rounded-2xl p-5 shadow-subtle flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EAF6F5] text-[#0F6B68] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 text-xs sm:text-sm">
                    <div className="text-[#8A9297] font-medium">Consultation Hours</div>
                    <div className="text-[#171A1C] font-semibold">
                      Mon – Sat: 09:00 AM – 08:00 PM
                    </div>
                    <div className="text-[#8A9297] text-xs">
                      Sundays by Advance Appointment
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-[#E9EDEE] rounded-3xl p-6 sm:p-10 shadow-subtle space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-[#171A1C]">
                    Send a Direct Message
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5F666B] mt-1">
                    Fill in your details below and we will get back to you promptly.
                  </p>
                </div>

                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
