"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import { clinicInfo } from "@/data/clinicInfo";

export const MobileBottomCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/98 backdrop-blur-md border-t border-[#E9EDEE] p-2.5 px-4 shadow-[0_-4px_15px_-3px_rgba(0,0,0,0.06)] flex items-center justify-between gap-2">
      <a
        href={`tel:${clinicInfo.phoneRaw}`}
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg text-xs font-semibold text-[#171A1C] bg-[#F8FAFA] border border-[#E9EDEE]"
      >
        <Phone className="w-3.5 h-3.5 text-[#0F6B68]" />
        <span>Call</span>
      </a>

      <a
        href={clinicInfo.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg text-xs font-semibold text-[#0F6B68] bg-[#EAF6F5] border border-[#0F6B68]/20"
      >
        <MessageCircle className="w-3.5 h-3.5 text-[#0F6B68]" />
        <span>WhatsApp</span>
      </a>

      <Link
        href="/book-appointment"
        className="flex-1.5 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs font-semibold text-white bg-[#0F6B68]"
      >
        <Calendar className="w-3.5 h-3.5" />
        <span>Book</span>
      </Link>
    </div>
  );
};
