import React from "react";
import { UserCheck, Clock, Smile, ShieldCheck } from "lucide-react";

export const TrustStrip = () => {
  const pillars = [
    {
      title: "1-on-1 Private Care",
      desc: "Direct treatment by your doctor from consultation to final polish.",
      icon: UserCheck,
    },
    {
      title: "Unhurried Appointments",
      desc: "Generous appointment windows dedicated entirely to your comfort.",
      icon: Clock,
    },
    {
      title: "Custom Smile Crafting",
      desc: "Bespoke ceramic artistry harmonizing with your natural facial lines.",
      icon: Smile,
    },
    {
      title: "Private Studio Serenity",
      desc: "An ultra-clean, peaceful dental suite near Emirates Hospital, Dubai.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="bg-white border-y border-[#E9EDEE] py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-3.5 p-2"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EAF6F5] text-[#0F6B68] flex items-center justify-center shrink-0 border border-[#0F6B68]/10">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold text-[#171A1C]">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#5F666B] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
