import React from "react";
import Link from "next/link";
import Image from "next/image";
import { beforeAfterCases } from "@/data/cases";
import { faqsData } from "@/data/faqs";
import { SectionHeading } from "@/components/SectionHeading";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { FAQAccordion } from "@/components/FAQAccordion";
import {
  Calendar,
  Sparkles,
  ArrowRight,
  Smile,
  Palette,
  Layers,
  Ratio,
  Maximize2,
  Scale,
} from "lucide-react";

export const metadata = {
  title: "Bespoke Smile Makeover Dubai | Dubai Hollywood Smiles",
  description:
    "Experience a personalized 1-on-1 Smile Makeover at Dubai Hollywood Smiles by Dr. Tariq Al Mansoori. Combining handcrafted porcelain veneers, digital smile design, and facial harmony principles.",
};

export default function SmileMakeoverPage() {
  const makeoverCases = beforeAfterCases.filter(
    (c) => c.category === "smile-makeover" || c.category === "veneers"
  ).slice(0, 2);

  const makeoverFaqs = faqsData.filter(
    (f) => f.category === "treatments" || f.category === "patient-experience"
  ).slice(0, 5);

  const considerations = [
    {
      title: "Tooth Color & Luminosity",
      desc: "Selecting the ideal multi-tone shade with natural enamel translucency that illuminates your complexion.",
      icon: Palette,
    },
    {
      title: "Tooth Shape & Character",
      desc: "Customizing tooth contours (softened, bold, or natural rounded) that complement your unique facial features.",
      icon: Layers,
    },
    {
      title: "Golden Proportion",
      desc: "Harmonizing width-to-length ratios to ensure the smile looks balanced from every viewing angle.",
      icon: Ratio,
    },
    {
      title: "Alignment & Symmetry",
      desc: "Aligning dental midlines and arch curvatures with your facial center and lower lip curve.",
      icon: Maximize2,
    },
    {
      title: "Gum Line Architecture",
      desc: "Ensuring an aesthetic, symmetrical gingival margin frame that elevates the smile line without excess gum show.",
      icon: Smile,
    },
    {
      title: "Bite Balance & Function",
      desc: "Preserving optimal chewing mechanics and TMJ health so your new smile is as strong as it is stunning.",
      icon: Scale,
    },
  ];

  const journeySteps = [
    {
      num: "01",
      title: "Private Consultation & Vision",
      desc: "An unhurried dialogue with Dr. Tariq exploring your smile aspirations, lifestyle, and aesthetic preferences with high-definition photography.",
    },
    {
      num: "02",
      title: "3D Smile Assessment",
      desc: "Digital intraoral scanning and facial proportion mapping to analyze tooth dimensions, incisal curves, and lip support.",
    },
    {
      num: "03",
      title: "Treatment Planning & Chairside Mock-Up",
      desc: "We engineer a bespoke roadmap and create a live chairside mock-up, allowing you to test-drive your prospective smile before treatment.",
    },
    {
      num: "04",
      title: "Artisanal Clinical Placement",
      desc: "Delivering your sequenced aesthetic restorations—whether handcrafted porcelain veneers, whitening, or discreet alignment.",
    },
    {
      num: "05",
      title: "Refinement & Long-Term Care",
      desc: "Fine micro-adjustments for perfect bite balance, delivery of protective retainers, and ongoing preventive hygiene.",
    },
  ];

  return (
    <div className="bg-white">
      {/* 01. HERO SECTION */}
      <section className="pt-6 sm:pt-12 pb-16 sm:pb-24 bg-white border-b border-[#E9EDEE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0F6B68] bg-[#EAF6F5] px-3 py-1 rounded-full">
                SMILE DESIGN EXPERIENCE
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#171A1C] leading-[1.12]">
                Your Smile. <br />
                <span className="text-[#0F6B68]">Artistically Handcrafted For You.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#5F666B] max-w-xl leading-relaxed">
                A bespoke 1-on-1 smile makeover combining digital smile design, porcelain veneers, and facial harmony principles in our private Dubai studio.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/book-appointment"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#0F6B68] hover:bg-[#0B5250] transition-colors shadow-xs"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Private Consultation</span>
                </Link>

                <Link
                  href="/before-after"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-[#0F6B68] bg-white border border-[#0F6B68] hover:bg-[#EAF6F5] transition-colors"
                >
                  <span>View Case Gallery</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-4/3 sm:aspect-16/10 lg:aspect-4/5 rounded-3xl overflow-hidden border border-[#E9EDEE] shadow-card bg-[#F8FAFA]">
                <Image
                  src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1000&q=80"
                  alt="Smile Makeover Patient at Dubai Hollywood Smiles"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. WHAT IS A SMILE MAKEOVER? */}
      <section className="py-16 sm:py-24 bg-[#FCFCFC] border-b border-[#E9EDEE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <SectionHeading
            eyebrow="STUDIO PHILOSOPHY"
            title="What is a Private Smile Makeover?"
            description="A personalized aesthetic treatment program designed around your individual facial character and oral health."
          />

          <div className="bg-white border border-[#E9EDEE] rounded-2xl p-6 sm:p-8 shadow-subtle space-y-4 text-sm sm:text-base text-[#5F666B] leading-relaxed">
            <p>
              A smile makeover is not a one-size-fits-all procedure. In our private studio, it is an individually curated treatment program combining cosmetic, restorative, and alignment procedures to create a radiant, cohesive smile.
            </p>
            <p>
              Depending on your clinical starting point and aesthetic goals, your makeover may incorporate ultra-thin porcelain veneers, discreet clear aligners, in-clinic laser teeth whitening, or conservative composite bonding.
            </p>
            <p>
              At Dubai Hollywood Smiles, we avoid artificial, overly opaque &lsquo;chiclet&rsquo; teeth. Our focus is on authentic tooth anatomy, lifelike translucency, and natural harmony with your smile line.
            </p>
          </div>
        </div>
      </section>

      {/* 03. SMILE JOURNEY (Large Numbered Steps) */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E9EDEE]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            eyebrow="THE PROCESS"
            title="The 5-Step Private Makeover Pathway"
            description="A calm, structured pathway from your first 1-on-1 consultation to your final radiant reveal."
          />

          <div className="space-y-6">
            {journeySteps.map((step) => (
              <div
                key={step.num}
                className="bg-white border border-[#E9EDEE] rounded-2xl p-6 sm:p-8 shadow-subtle flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 hover:border-[#cfd7d8] transition-colors"
              >
                <div className="text-3xl sm:text-4xl font-mono font-bold text-[#0F6B68] shrink-0 bg-[#EAF6F5] px-4 py-2 rounded-xl border border-[#0F6B68]/15">
                  {step.num}
                </div>
                <div className="space-y-1.5 grow">
                  <h3 className="text-lg sm:text-xl font-semibold text-[#171A1C]">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5F666B] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04. SMILE CONSIDERATIONS (Cards) */}
      <section className="py-16 sm:py-24 bg-[#F8FAFA] border-b border-[#E9EDEE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            eyebrow="AESTHETIC ARCHITECTURE"
            title="Key Smile Design Considerations"
            description="We assess 6 essential clinical and artistic factors to craft a smile that feels naturally yours."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {considerations.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#E9EDEE] rounded-2xl p-6 sm:p-7 shadow-subtle space-y-3 hover:border-[#cfd7d8] transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#EAF6F5] text-[#0F6B68] flex items-center justify-center border border-[#0F6B68]/15">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-[#171A1C]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5F666B] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 05. BEFORE & AFTER SHOWCASE */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E9EDEE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            eyebrow="TRANSFORMATIONS"
            title="Real Smile Makeover Results"
            description="Explore authentic patient transformations crafted by Dr. Tariq in our Dubai dental suites."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
            {makeoverCases.map((c) => (
              <div
                key={c.id}
                className="bg-white border border-[#E9EDEE] rounded-2xl p-5 sm:p-6 shadow-subtle space-y-4"
              >
                <BeforeAfterSlider
                  beforeImage={c.beforeImage}
                  afterImage={c.afterImage}
                  title={c.title}
                />
                <div className="pt-2 text-xs text-[#5F666B] space-y-1">
                  <p><strong className="text-[#171A1C]">Concern:</strong> {c.concern}</p>
                  <p><strong className="text-[#171A1C]">Solution:</strong> {c.solution}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <Link
              href="/before-after"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#0F6B68] hover:underline"
            >
              <span>View All Before & After Cases</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 06. FAQS */}
      <section className="py-16 sm:py-24 bg-[#FCFCFC] border-b border-[#E9EDEE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <SectionHeading
            eyebrow="QUESTIONS"
            title="Smile Makeover FAQs"
            description="Helpful information about smile design consultations, timing, and longevity."
          />

          <FAQAccordion items={makeoverFaqs} />
        </div>
      </section>

      {/* 07. FINAL CTA */}
      <section className="py-16 sm:py-20 bg-[#EAF6F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#171A1C] leading-snug">
            Ready to Begin Your Smile Transformation?
          </h2>
          <p className="text-sm sm:text-base text-[#5F666B] max-w-lg mx-auto leading-relaxed">
            Book a dedicated 1-on-1 smile consultation with Dr. Tariq Al Mansoori in our private Dubai studio.
          </p>
          <div className="pt-2 flex justify-center">
            <Link
              href="/book-appointment"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#0F6B68] hover:bg-[#0B5250] transition-colors shadow-xs"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Private Consultation</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
