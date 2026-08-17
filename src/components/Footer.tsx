import React from "react";
import Link from "next/link";
import { clinicInfo } from "@/data/clinicInfo";
import {
  Phone,
  MessageCircle,
  MapPin,
  Calendar,
  ShieldCheck,
  Clock,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-[#E9EDEE] text-[#5F666B] pt-12 pb-24 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Main grid ─────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 pb-10 border-b border-[#E9EDEE]">

          {/* Col 1 — Brand & contact */}
          <div className="space-y-5">
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0F6B68]" />
                <span className="font-semibold text-lg tracking-tight text-[#171A1C]">
                  Dubai Hollywood Smiles
                </span>
              </div>
              <span className="text-[10px] text-[#8A9297] tracking-wider uppercase font-medium block pl-4 mt-0.5">
                Previously Charly PolyClinic
              </span>
            </Link>

            <p className="text-xs text-[#5F666B] leading-relaxed max-w-xs">
              Private boutique dental studio in Dubai dedicated to unhurried 1-on-1 cosmetic and restorative smile transformations.
            </p>

            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0F6B68] shrink-0 mt-0.5" />
                <span>
                  <span className="font-medium text-[#171A1C]">{clinicInfo.location}</span>
                  <span className="block text-[#8A9297]">Near {clinicInfo.locationReference}</span>
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#0F6B68] shrink-0" />
                <a
                  href={`tel:${clinicInfo.phoneRaw}`}
                  className="font-medium text-[#171A1C] hover:text-[#0F6B68] transition-colors"
                >
                  {clinicInfo.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#0F6B68] shrink-0" />
                <span>Mon – Sat: 09:00 AM – 08:00 PM (By Appointment)</span>
              </div>
            </div>

            <span className="inline-flex items-center gap-1.5 text-[11px] text-[#0F6B68] font-medium bg-[#EAF6F5] px-2.5 py-1 rounded-md">
              <ShieldCheck className="w-3.5 h-3.5" />
              DHA Licensed Private Practice
            </span>
          </div>

          {/* Col 2 — Studio Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#171A1C]">
              Studio Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              {[
                { label: "Home", href: "/" },
                { label: "Meet the Doctor", href: "/doctors" },
                { label: "About Our Studio", href: "/about" },
                { label: "All Treatments", href: "/treatments" },
                { label: "Smile Makeover", href: "/smile-makeover" },
                { label: "Before & After Transformations", href: "/before-after" },
                { label: "Patient Experiences", href: "/reviews" },
                { label: "Frequently Asked Questions", href: "/faq" },
                { label: "Contact & Location", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-[#0F6B68] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Key Treatments & Book */}
          <div className="space-y-5">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#171A1C] mb-3">
                Key Treatments
              </h4>
              <ul className="space-y-2 text-xs">
                {[
                  { label: "Porcelain Veneers", href: "/treatments/porcelain-veneers" },
                  { label: "Teeth Whitening", href: "/treatments/teeth-whitening" },
                  { label: "Smile Makeover", href: "/smile-makeover" },
                  { label: "Clear Aligners", href: "/treatments/clear-aligners" },
                  { label: "Dental Implants", href: "/treatments/dental-implants" },
                  { label: "Composite Bonding", href: "/treatments/composite-bonding" },
                  { label: "Preventive & Hygiene", href: "/treatments/general-preventive-care" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="hover:text-[#0F6B68] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Book CTA Block */}
            <div className="pt-4 border-t border-[#E9EDEE] space-y-2.5">
              <p className="text-xs text-[#5F666B] leading-relaxed">
                Reserve your private 1-on-1 consultation with our doctor.
              </p>
              <Link
                href="/book-appointment"
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#0F6B68] hover:bg-[#0B5250] transition-colors shadow-xs"
              >
                <Calendar className="w-3.5 h-3.5" />
                Book Private Consultation
              </Link>
              <a
                href={clinicInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg text-xs font-medium text-[#0F6B68] bg-[#EAF6F5] hover:bg-[#d8efec] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp Direct
              </a>
            </div>
          </div>
        </div>

        {/* ── Legal Bottom Bar ───────────────────────────────────────────── */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#8A9297] gap-4">
          <span>
            © {new Date().getFullYear()} Dubai Hollywood Smiles. All rights reserved.
            <span className="hidden sm:inline"> Formerly Charly PolyClinic.</span>
          </span>

          <div className="flex items-center flex-wrap gap-4">
            <Link href="/privacy-policy" className="hover:text-[#171A1C] transition-colors">
              Privacy Policy
            </Link>
            <span aria-hidden>·</span>
            <Link href="/terms" className="hover:text-[#171A1C] transition-colors">
              Terms
            </Link>
            <span aria-hidden>·</span>
            <Link href="/medical-disclaimer" className="hover:text-[#171A1C] transition-colors">
              Medical Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
