"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clinicInfo } from "@/data/clinicInfo";
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  Calendar,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setTreatmentsOpen(false);
  }, [pathname]);

  // ── Minimal 5-item nav for private boutique clinic ──────────────────────
  const navLinks = [
    {
      name: "Treatments",
      href: "/treatments",
      hasDropdown: true,
    },
    { name: "Smile Makeover", href: "/smile-makeover" },
    { name: "Meet the Doctor", href: "/doctors" },
    { name: "About Studio", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const treatmentItems = [
    {
      title: "Porcelain Veneers",
      href: "/treatments/porcelain-veneers",
      desc: "Custom handcrafted aesthetic ceramic shells",
    },
    {
      title: "Teeth Whitening",
      href: "/treatments/teeth-whitening",
      desc: "Brighten your smile up to 8 shades",
    },
    {
      title: "Clear Aligners",
      href: "/treatments/clear-aligners",
      desc: "Discreet orthodontic alignment",
    },
    {
      title: "Dental Implants",
      href: "/treatments/dental-implants",
      desc: "Permanent tooth replacement",
    },
    {
      title: "Composite Bonding",
      href: "/treatments/composite-bonding",
      desc: "Single-visit chairside sculpting",
    },
    {
      title: "Preventive Care & Hygiene",
      href: "/treatments/general-preventive-care",
      desc: "Ultrasonic scaling, polish & exams",
    },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled
            ? "bg-white/98 backdrop-blur-md border-b border-[#E9EDEE] shadow-[0_2px_12px_-3px_rgba(0,0,0,0.05)] py-3"
            : "bg-white border-b border-[#E9EDEE]/60 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6">

            {/* ── Brand ─────────────────────────────────────────────────── */}
            <Link href="/" className="flex flex-col shrink-0 group">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0F6B68] group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-lg sm:text-[1.1rem] tracking-tight text-[#171A1C] whitespace-nowrap">
                  Dubai Hollywood Smiles
                </span>
              </div>
              <span className="text-[9px] text-[#8A9297] tracking-[0.15em] uppercase font-medium pl-4 leading-tight">
                Previously Charly PolyClinic
              </span>
            </Link>

            {/* ── Desktop Nav ────────────────────────────────────────────── */}
            <nav className="hidden lg:flex items-center gap-0.5 text-[13.5px]">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.hasDropdown && pathname.startsWith("/treatments"));

                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => setTreatmentsOpen(true)}
                      onMouseLeave={() => setTreatmentsOpen(false)}
                    >
                      <Link
                        href={link.href}
                        className={`inline-flex items-center gap-1 px-3.5 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${
                          isActive
                            ? "text-[#0F6B68] bg-[#EAF6F5]/60"
                            : "text-[#5F666B] hover:text-[#171A1C] hover:bg-[#F8FAFA]"
                        }`}
                      >
                        {link.name}
                        <ChevronDown
                          className={`w-3.5 h-3.5 opacity-50 transition-transform duration-200 ${
                            treatmentsOpen ? "rotate-180" : ""
                          }`}
                        />
                      </Link>

                      {treatmentsOpen && (
                        <div className="absolute top-full left-0 w-72 bg-white border border-[#E9EDEE] rounded-2xl shadow-xl p-2.5 z-50 mt-1 animate-in fade-in slide-in-from-top-2 duration-150">
                          <p className="text-[10px] font-semibold text-[#8A9297] uppercase tracking-widest px-3 py-1.5">
                            Private Studio Treatments
                          </p>
                          <div className="space-y-0.5">
                            {treatmentItems.map((item) => (
                              <Link
                                key={item.title}
                                href={item.href}
                                className="block px-3 py-2.5 rounded-xl hover:bg-[#F8FAFA] group/item transition-colors"
                              >
                                <div className="text-xs font-semibold text-[#171A1C] group-hover/item:text-[#0F6B68] transition-colors">
                                  {item.title}
                                </div>
                                <div className="text-[11px] text-[#8A9297] leading-tight mt-0.5">
                                  {item.desc}
                                </div>
                              </Link>
                            ))}
                          </div>
                          <div className="mt-1.5 pt-1.5 border-t border-[#E9EDEE] px-3 pb-1">
                            <Link
                              href="/treatments"
                              className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#0F6B68] hover:underline"
                            >
                              All Treatments
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3.5 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${
                      isActive
                        ? "text-[#0F6B68] bg-[#EAF6F5]/60 font-semibold"
                        : "text-[#5F666B] hover:text-[#171A1C] hover:bg-[#F8FAFA]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* ── Right Actions ──────────────────────────────────────────── */}
            <div className="hidden sm:flex items-center gap-2.5 shrink-0">
              <a
                href={clinicInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-[#0F6B68] bg-[#EAF6F5] hover:bg-[#d8efec] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp
              </a>

              <Link
                href="/book-appointment"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#0F6B68] hover:bg-[#0B5250] shadow-sm hover:shadow transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Consultation</span>
              </Link>
            </div>

            {/* ── Mobile Controls ────────────────────────────────────────── */}
            <div className="flex items-center lg:hidden gap-2">
              <Link
                href="/book-appointment"
                className="sm:hidden px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#0F6B68]"
              >
                Book
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-[#171A1C] hover:bg-[#F8FAFA] border border-[#E9EDEE] transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile Drawer ─────────────────────────────────────────────────── */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm animate-in fade-in duration-150"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Panel */}
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white border-l border-[#E9EDEE] shadow-2xl flex flex-col overflow-y-auto animate-in slide-in-from-right duration-200">
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-[#E9EDEE]">
              <div>
                <div className="font-semibold text-sm text-[#171A1C]">
                  Dubai Hollywood Smiles
                </div>
                <div className="text-[10px] text-[#8A9297] uppercase tracking-wider">
                  Previously Charly PolyClinic
                </div>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg border border-[#E9EDEE] hover:bg-[#F8FAFA]"
                aria-label="Close menu"
              >
                <X className="w-4.5 h-4.5 text-[#171A1C]" />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex-1 px-4 py-5 space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-[#EAF6F5] text-[#0F6B68] font-semibold"
                        : "text-[#171A1C] hover:bg-[#F8FAFA]"
                    }`}
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <ChevronDown className="w-4 h-4 opacity-40 -rotate-90" />
                    )}
                  </Link>
                );
              })}

              {/* Separator + secondary links */}
              <div className="pt-3 pb-1 border-t border-[#E9EDEE]">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-[#8A9297] px-4 pb-2">
                  Studio Gallery & Info
                </p>
                {[
                  { name: "Before & After Transformations", href: "/before-after" },
                  { name: "Patient Reviews", href: "/reviews" },
                  { name: "Frequently Asked Questions", href: "/faq" },
                ].map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex items-center px-4 py-2.5 rounded-xl text-sm text-[#5F666B] hover:bg-[#F8FAFA] transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </nav>

            {/* Bottom CTAs */}
            <div className="p-5 border-t border-[#E9EDEE] space-y-2.5">
              <Link
                href="/book-appointment"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-sm font-semibold text-white bg-[#0F6B68] hover:bg-[#0B5250] transition-colors"
              >
                <Calendar className="w-4 h-4" />
                Book Private Consultation
              </Link>
              <a
                href={clinicInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl text-sm font-medium text-[#0F6B68] bg-[#EAF6F5] hover:bg-[#d8efec] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Direct
              </a>
              <a
                href={`tel:${clinicInfo.phoneRaw}`}
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl text-xs font-medium text-[#5F666B] border border-[#E9EDEE] hover:bg-[#F8FAFA] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#0F6B68]" />
                Call {clinicInfo.phone}
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Navbar height spacer */}
      <div className="h-[68px] sm:h-[72px]" />
    </>
  );
};
