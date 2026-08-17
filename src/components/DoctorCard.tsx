import React from "react";
import Link from "next/link";
import Image from "next/image";
import { DoctorDetail } from "@/data/doctors";
import { ArrowRight, Award, Globe } from "lucide-react";

interface DoctorCardProps {
  doctor: DoctorDetail;
  className?: string;
}

export const DoctorCard: React.FC<DoctorCardProps> = ({
  doctor,
  className = "",
}) => {
  return (
    <div
      className={`group bg-white rounded-2xl border border-[#E9EDEE] overflow-hidden shadow-subtle hover:shadow-card hover:-translate-y-1 hover:border-[#d2dbdc] transition-all duration-200 flex flex-col justify-between ${className}`}
    >
      <div>
        {/* Doctor Photo */}
        <div className="relative w-full aspect-4/3 bg-[#F8FAFA] overflow-hidden">
          <Image
            src={doctor.image}
            alt={doctor.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md text-[10px] font-semibold text-[#171A1C] border border-[#E9EDEE] shadow-xs">
            {doctor.qualification}
          </div>
        </div>

        {/* Doctor Info */}
        <div className="p-5 sm:p-6 space-y-2.5">
          <div className="text-xs font-semibold text-[#0F6B68] uppercase tracking-wider">
            {doctor.role}
          </div>

          <h3 className="text-lg font-semibold text-[#171A1C] group-hover:text-[#0F6B68] transition-colors">
            {doctor.name}
          </h3>

          <p className="text-xs text-[#5F666B] leading-relaxed line-clamp-3">
            {doctor.shortBio}
          </p>

          <div className="pt-2 flex items-center gap-3 text-[11px] text-[#8A9297]">
            <span className="flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-[#0F6B68]" />
              {doctor.experience}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Globe className="w-3.5 h-3.5 text-[#0F6B68]" />
              {doctor.languages.join(", ")}
            </span>
          </div>
        </div>
      </div>

      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1">
        <Link
          href={`/doctors/${doctor.slug}`}
          className="inline-flex items-center justify-between w-full text-xs font-semibold text-[#171A1C] bg-[#F8FAFA] hover:bg-[#EAF6F5] hover:text-[#0F6B68] border border-[#E9EDEE] px-4 py-2.5 rounded-lg transition-colors"
        >
          <span>View Full Clinical Profile</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
