import React from "react";
import Link from "next/link";
import Image from "next/image";
import { TreatmentDetail } from "@/data/treatments";
import { ArrowUpRight, Sparkles } from "lucide-react";

interface TreatmentCardProps {
  treatment: TreatmentDetail;
  className?: string;
}

export const TreatmentCard: React.FC<TreatmentCardProps> = ({
  treatment,
  className = "",
}) => {
  return (
    <div
      className={`group bg-white rounded-2xl border border-[#E9EDEE] overflow-hidden shadow-subtle hover:shadow-card hover:-translate-y-1 hover:border-[#d2dbdc] transition-all duration-200 flex flex-col justify-between ${className}`}
    >
      <div>
        {/* Card Image */}
        <div className="relative w-full aspect-16/10 bg-[#F8FAFA] overflow-hidden">
          <Image
            src={treatment.heroImage}
            alt={treatment.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-[10px] font-semibold text-[#0F6B68] border border-[#E9EDEE] shadow-xs">
            {treatment.category}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 sm:p-6 space-y-2.5">
          <div className="flex items-center gap-2 text-xs text-[#0F6B68] font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Dubai Hollywood Smiles Care</span>
          </div>

          <h3 className="text-lg font-semibold text-[#171A1C] group-hover:text-[#0F6B68] transition-colors leading-snug">
            {treatment.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#5F666B] leading-relaxed line-clamp-2">
            {treatment.shortDescription}
          </p>
        </div>
      </div>

      {/* Card Footer Link */}
      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-2">
        <Link
          href={`/treatments/${treatment.slug}`}
          className="inline-flex items-center justify-between w-full text-xs font-semibold text-[#0F6B68] bg-[#EAF6F5] hover:bg-[#0F6B68] hover:text-white px-4 py-2.5 rounded-lg transition-colors"
        >
          <span>Explore Treatment Details</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
