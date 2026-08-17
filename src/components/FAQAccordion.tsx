"use client";

import React, { useState, useMemo } from "react";
import { FAQItem, faqsData } from "@/data/faqs";
import { ChevronDown, Search, X, HelpCircle } from "lucide-react";

interface FAQAccordionProps {
  items?: FAQItem[];
  showSearch?: boolean;
  showCategoryTabs?: boolean;
  limit?: number;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  items = faqsData,
  showSearch = false,
  showCategoryTabs = false,
  limit,
}) => {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "general", label: "General & Clinic" },
    { id: "treatments", label: "Treatments" },
    { id: "appointments", label: "Appointments" },
    { id: "patient-experience", label: "Patient Care" },
  ];

  const filteredItems = useMemo(() => {
    let result = items;

    if (activeCategory !== "all") {
      result = result.filter((item) => item.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (item) =>
          item.question.toLowerCase().includes(q) ||
          item.answer.toLowerCase().includes(q)
      );
    }

    if (limit && !searchQuery && activeCategory === "all") {
      result = result.slice(0, limit);
    }

    return result;
  }, [items, activeCategory, searchQuery, limit]);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full space-y-6">
      {/* Search Bar */}
      {showSearch && (
        <div className="relative max-w-xl mx-auto">
          <Search className="w-4 h-4 text-[#8A9297] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search questions (e.g. veneers, whitening, booking)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-10 py-3 rounded-xl text-sm bg-white border border-[#E9EDEE] shadow-xs focus:outline-none focus:ring-2 focus:ring-[#0F6B68] text-[#171A1C] placeholder-[#8A9297]"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8A9297] hover:text-[#171A1C]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      )}

      {/* Category Pills */}
      {showCategoryTabs && (
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setOpenId(null);
              }}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-[#0F6B68] text-white shadow-xs"
                  : "bg-white text-[#5F666B] border border-[#E9EDEE] hover:bg-[#F8FAFA]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      )}

      {/* Accordion List */}
      {filteredItems.length === 0 ? (
        <div className="bg-white border border-[#E9EDEE] rounded-2xl p-8 text-center space-y-2">
          <HelpCircle className="w-8 h-8 text-[#8A9297] mx-auto" />
          <h4 className="text-base font-semibold text-[#171A1C]">
            No matching questions found
          </h4>
          <p className="text-xs text-[#5F666B]">
            Try different keywords or contact our team directly on WhatsApp.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white border border-[#E9EDEE] rounded-xl overflow-hidden shadow-xs hover:border-[#cfd7d8] transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-medium text-sm sm:text-base text-[#171A1C]">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#F8FAFA] border border-[#E9EDEE] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[#EAF6F5] text-[#0F6B68] border-[#0F6B68]/30" : "text-[#5F666B]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-[#5F666B] leading-relaxed border-t border-[#E9EDEE]/50 animate-in fade-in duration-150">
                    <p>{item.answer}</p>
                    {item.categoryLabel && (
                      <span className="inline-block mt-3 text-[10px] font-semibold text-[#0F6B68] bg-[#EAF6F5] px-2.5 py-0.5 rounded-md">
                        {item.categoryLabel}
                      </span>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
