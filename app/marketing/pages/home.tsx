import Hero from "~/marketing/components/hero";
import { PiUsers, PiWarning } from "react-icons/pi";
import { LuCircleCheckBig } from "react-icons/lu";
import { generateMeta } from "~/lib/meta";

const scopes = [
  {
    title: "The Problem",
    desc: "Millions of Africans search online for health answers, but too often the results are misleading, foreign, or unverified.",
    icon: PiWarning,
    color: "#D13C53",
  },
  {
    title: "The Gap",
    desc: "African health experts, professionals, NGOs, and institutions lack unified platforms to reach the communities that need their knowledge most.",
    icon: PiUsers,
    color: "#3C82F6",
  }
];

export function meta() {
  return generateMeta('home');
}

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="py-8 md:py-16 lg:py-18">
        <h2 className="font-semibold text-center text-2xl md:text-3xl lg:text-[40px] mb-8 md:mb-12 lg:mb-16 px-4">
          Why HealthScope Matters
        </h2>
        <div className="space-y-8 md:space-y-12 lg:space-y-16">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-9">
            {scopes.map((scope) => (
              <div
                className="bg-white p-14 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                key={scope.title}
              >
                <div className="flex gap-3 md:gap-4 lg:gap-1.25 items-center mb-6">
                  <div
                    className="size-10 md:size-12 lg:size-12.5 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: scope.color + "20" }}
                  >
                    <scope.icon
                      color={scope.color}
                      className="text-xl md:text-2xl lg:text-4xl"
                    />
                  </div>
                  <h3 className="font-semibold text-lg md:text-xl lg:text-[28px] leading-tight">
                    {scope.title}
                  </h3>
                </div>
                <p className="text-sm md:text-[20px] lg:text-[22px] xl:text-[22px] text-gray-600 leading-relaxed">
                  {scope.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-gray-50 py-8 md:py-12 lg:py-16">
            <div className="container">
              <div className="flex gap-3 md:gap-4 lg:gap-1.25 items-center mb-4 md:mb-6">
                <div className="size-10 md:size-12 lg:size-12.5 rounded-sm flex items-center justify-center bg-green-50 shrink-0">
                  <LuCircleCheckBig className="text-green-500 text-xl md:text-2xl lg:text-4xl" />
                </div>
                <h3 className="font-semibold text-lg md:text-xl lg:text-[28px] leading-tight">
                  The Solution
                </h3>
              </div>
              <p className="text-sm md:text-base lg:text-2xl text-gray-500 leading-relaxed max-w-none lg:max-w-[1111px] mb-4 md:mb-6 lg:mb-8">
                HealthScope bridges this gap. We partner with stakeholders in
                the health value chain to provide accessible health knowledge,
                making trusted health information easy to find, easy to
                understand, and easy to trust.
              </p>
              <div className="flex flex-wrap gap-2 md:gap-4 lg:gap-10">
                {["Easy to Find", "Easy to Understand", "Easy to Trust"].map(
                  (item) => (
                    <div 
                      key={item}
                      className="gap-2 md:gap-3 flex bg-white rounded-full px-3 md:px-3.75 py-2 border border-gray-100 items-center shadow-sm hover:shadow-md transition-shadow"
                    >
                      <LuCircleCheckBig className="text-green-500 text-base md:text-lg lg:text-2xl shrink-0" />
                      <span className="text-xs md:text-sm lg:text-xl font-medium whitespace-nowrap">
                        {item}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}