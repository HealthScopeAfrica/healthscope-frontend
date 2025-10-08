import Hero from "~/components/hero";
import Navigation from "~/components/navigation";
import { PiUsers, PiWarning } from "react-icons/pi";
import { LuCircleCheckBig } from "react-icons/lu";
import Footer from "~/components/footer";
import { useMediaQuery } from "@uidotdev/usehooks";

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
    color: "#CFAE37",
  },
  {
    title: "The Solution",
    desc: "HealthScope bridges this gap. We partner with stakeholders in the health value chain to provide accessible health knowledge, making trusted health information easy to find, easy to understand, and easy to trust.",
    icon: LuCircleCheckBig,
    color: "#32A682",
    bottom: ["Easy to Find", "Easy to Understand", "Easy to Trust"],
  },
];
export function Welcome() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <>
      <Navigation />
      <main className="flex flex-col flex-1">
        <Hero />
        <div className="flex flex-col gap-2 items-center md:py-12.5 md:px-25 p-4">
          <h2 className="font-semibold text-2xl md:text-[40px] leading-[120%] -tracking-[4%]">
            Why HealthScope Matters
          </h2>
          <div className="flex flex-col">
            <div className="md:grid flex flex-col md:grid-cols-2 gap-9">
              {scopes.map((scope, index) => (
                <div
                  className={`md:py-10 p-2 md:px-7.5 w-full ${
                    index === 2 ? "col-span-2" : "border bg-white "
                  } rounded-md border-[#D5D5D5] gap-3.75`}
                  key={scope.title}
                >
                  <div className="flex gap-1.25 items-center">
                    <div
                      className="size-12 rounded-sm flex items-center justify-center"
                      style={{ backgroundColor: scope.color + "10" }}
                    >
                      <scope.icon color={scope.color} size={24} />
                    </div>
                    <h3 className="font-semibold text-lg">{scope.title}</h3>
                  </div>
                  <p className="mt-2 text-base text-[#797979] leading-[160%] -tracking-[2%]">
                    {scope.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 md:gap-10 mt-2 md:mt-6">
                    {scope.bottom?.map((item, index) => (
                      <div className="gap-1 flex bg-white rounded-full px-3.75 py-2 border border-[#D5D5D5] items-center">
                        <LuCircleCheckBig
                          color="#32A682"
                          size={isMobile ? 16 : 21}
                        />
                        <span className="text-sm md:text-xl leading-[120%] tracking-[-2%]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
