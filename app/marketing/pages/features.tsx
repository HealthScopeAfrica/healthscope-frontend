import type { Route } from "../+types/home";
import { generateMeta } from "~/lib/meta";

export function meta({}: Route.MetaArgs) {
  return generateMeta("features");
}

type Feature = { title: string; body: string; img: string; alt: string };

const FEATURES: Feature[] = [
  {
    title: "Multilingual & Audio Access",
    body:
      "Read or listen in multiple African languages. Health knowledge should be easy to understand, wherever you are. Break down language barriers to better health.",
    img: "/images/features-1.png",
    alt: "People using multilingual content",
  },
  {
    title: "Expert-Reviewed Articles",
    body:
      "Health content written and reviewed by African health professionals—giving you facts you can trust. No guesswork, just reliable information tailored to your needs.",
    img: "/images/features-w.png",
    alt: "Open journals and research",
  },
  {
    title: "Virtual Consultations",
    body:
      "Go beyond articles with direct access to licensed professionals—book one-on-one consultations for personalized care. Connect with experts who understand your context.",
    img: "/images/features-3.png",
    alt: "Doctor and patient on video call",
  },
  {
    title: "Smart Search",
    body:
      "Search by symptoms, topics, or keywords, and discover personalized suggestions that guide you to the right information quickly. AI-powered intelligence that understands what you need.",
    img: "/images/features-4.png",
    alt: "AI smart search interface",
  },
];

export default function Features() {
  return (
    <main className="py-14 md:py-20"> {/* extra top/bottom margin for the whole section */}
      <div className="container">
        {/* Heading block */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Our Core Features — 20px / 120% / -2% */}
          <p className="font-normal tracking-[-0.02em] leading-[120%] text-[20px] text-slate-700">
            Our Core Features
          </p>

          {/* Small extra space between lines */}
          <h1 className="mt-3 font-medium tracking-[-0.02em] leading-[120%] text-[24px] sm:text-[28px] md:text-[32px] text-slate-900">
            Accessible, accurate, and culturally relevant
            <br className="hidden sm:block" />
            healthcare information
          </h1>
        </div>

        {/* Grid: tighter column gap, a bit more row gap */}
        <div className="
    mt-14 md:mt-20
    grid grid-cols-1 md:grid-cols-2
    gap-y-20 md:gap-y-[88px]
    gap-x-30
    
    md:[&>article:nth-child(odd)]:-mr-[1px]
    md:[&>article:nth-child(even)]:-ml-[1px]
  ">
          {FEATURES.map((f) => (
            <article
              key={f.title}
              className="
                mx-auto w-full max-w-[384px]
                md:w-[384px] md:h-[575px]
                overflow-hidden border border-slate-200 bg-white shadow-sm
                flex flex-col
                rounded-b-[10px]  /* bottom-only radius */
                md:-mr-[2px]
              "
            >
              {/* Square image: 384x384 on md+, responsive square on small screens */}
              <div className="w-full">
                <div className="aspect-square w-full overflow-hidden md:w-[384px] md:h-[384px]">
                  <img
                    src={f.img}
                    alt={f.alt}
                    loading="lazy"
                    className="h-full w-full object-cover" /* preserves ratio, fills square */
                  />
                </div>
              </div>

              {/* Content (gap: 15px) */}
              <div className="flex flex-col gap-[15px] p-4 sm:p-5">
                {/* Title — 24px / 120% / -2% / semi-bold / centered */}
                <h3 className="font-semibold tracking-[-0.02em] leading-[120%] text-[20px] sm:text-[22px] md:text-[24px] text-slate-900">
                  {f.title}
                </h3>

                {/* Body — 16px / 145% / 0% tracking */}
                <p className="text-[16px] leading-[145%] tracking-[0] text-slate-600">
                  {f.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
