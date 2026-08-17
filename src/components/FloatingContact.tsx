"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle, Phone, Calendar } from "lucide-react";
import { clinicInfo } from "@/data/clinicInfo";

export const FloatingContact = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 hidden md:flex flex-col gap-2.5 items-end">
      {/* WhatsApp Quick Trigger */}
      <a
        href={clinicInfo.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 bg-[#EAF6F5] hover:bg-[#d5ece9] text-[#0F6B68] px-4 py-2.5 rounded-full border border-[#0F6B68]/20 shadow-md hover:shadow-lg transition-all"
        title="Chat on WhatsApp"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-out whitespace-nowrap text-xs font-semibold">
          Chat on WhatsApp
        </span>
        <MessageCircle className="w-5 h-5 text-[#0F6B68] fill-[#0F6B68]/15" />
      </a>

      {/* Direct Call Trigger */}
      <a
        href={`tel:${clinicInfo.phoneRaw}`}
        className="group flex items-center gap-2 bg-white hover:bg-[#F8FAFA] text-[#171A1C] hover:text-[#0F6B68] px-4 py-2.5 rounded-full border border-[#E9EDEE] shadow-md hover:shadow-lg transition-all"
        title={`Call ${clinicInfo.phone}`}
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-out whitespace-nowrap text-xs font-semibold">
          {clinicInfo.phone}
        </span>
        <Phone className="w-5 h-5 text-[#0F6B68]" />
      </a>

      {/* Book Appointment CTA Button */}
      <Link
        href="/book-appointment"
        className="flex items-center gap-2 bg-[#0F6B68] hover:bg-[#0B5250] text-white px-4 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all text-xs font-medium"
      >
        <Calendar className="w-4 h-4" />
        <span>Book Appointment</span>
      </Link>
    </div>
  );
};
