import React from "react";
import { PatientReview } from "@/data/reviews";
import { Star, CheckCircle2, Quote } from "lucide-react";

interface ReviewCardProps {
  review: PatientReview;
  className?: string;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({
  review,
  className = "",
}) => {
  return (
    <div
      className={`bg-white rounded-2xl border border-[#E9EDEE] p-6 shadow-subtle hover:shadow-card hover:border-[#d2dbdc] transition-all flex flex-col justify-between space-y-4 ${className}`}
    >
      <div className="space-y-3">
        {/* Star Rating & Quote Mark */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            {[...Array(review.rating)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-[#0F6B68] text-[#0F6B68]"
              />
            ))}
          </div>
          <Quote className="w-5 h-5 text-[#EAF6F5] fill-[#EAF6F5]" />
        </div>

        {/* Review Comment */}
        <p className="text-xs sm:text-sm text-[#171A1C] leading-relaxed">
          &ldquo;{review.comment}&rdquo;
        </p>

        {/* Treatment Tag */}
        <div>
          <span className="inline-block text-[10px] font-semibold text-[#0F6B68] bg-[#EAF6F5] px-2.5 py-1 rounded-md">
            {review.treatment}
          </span>
        </div>
      </div>

      {/* Patient Bio & Verification */}
      <div className="pt-3 border-t border-[#E9EDEE] flex items-center justify-between text-xs">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-[#F5F7F7] border border-[#E9EDEE] text-[#0F6B68] font-semibold flex items-center justify-center text-xs">
            {review.initials}
          </div>
          <div>
            <div className="font-semibold text-[#171A1C] flex items-center gap-1">
              <span>{review.author}</span>
              {review.verified && (
                <span title="Verified Dubai Patient" className="inline-flex">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0F6B68]" />
                </span>
              )}
            </div>
            <div className="text-[11px] text-[#8A9297]">{review.location}</div>
          </div>
        </div>

        <div className="text-[10px] text-[#8A9297]">{review.date}</div>
      </div>
    </div>
  );
};
