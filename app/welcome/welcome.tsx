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
];
export function Welcome() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <>
      <Navigation />
      <main className="flex flex-col flex-1">
        <Hero />
        <div className="">
          <h2 className="font-semibold text-center text-2xl md:text-[40px]">
            Why HealthScope Matters
          </h2>
          <div className="">
            <div className="container py-4 md:py-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-9">
              {scopes.map((scope) => (
                <div
                  className={`md:py-10 p-2 md:px-7.5 w-full rounded-md border border-[#D5D5D5] gap-3.75`}
                  key={scope.title}
                >
                  <div className="flex gap-1.25 items-center">
                    <div
                      className="size-10 md:size-12.5 rounded-sm flex items-center justify-center"
                      style={{ backgroundColor: scope.color + "10" }}
                    >
                      <scope.icon
                        color={scope.color}
                        className="text-2xl md:text-4xl"
                      />
                    </div>
                    <h3 className="font-semibold text-lg md:text-[28px]">
                      {scope.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-base md:text-2xl text-gray-500">
                    {scope.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="bg-gray-50 py-4 md:py-12">
              <div className="container">
                <div className="flex gap-1.25 items-center">
                  <div className="size-10 md:size-12.5 rounded-sm flex items-center justify-center bg-green-50">
                    <LuCircleCheckBig className="text-green-500 text-2xl mdtext-4xl" />
                  </div>
                  <h3 className="font-semibold  text-lg md:text-[28px]">
                    The Solution
                  </h3>
                </div>
                <p className="mt-2 text-base md:text-2xl text-gray-500 max-w-[1111px]">
                  HealthScope bridges this gap. We partner with stakeholders in
                  the health value chain to provide accessible health knowledge,
                  making trusted health information easy to find, easy to
                  understand, and easy to trust.
                </p>
                <div className="flex flex-wrap gap-2 md:gap-10 mt-2 md:mt-6">
                  {["Easy to Find", "Easy to Understand", "Easy to Trust"].map(
                    (item) => (
                      <div className="gap-3 flex bg-white rounded-full px-3.75 py-2 border border-gray-100 items-center">
                        <LuCircleCheckBig className="text-green-500 text-sm md:text-2xl" />
                        <span className="text-sm md:text-xl font-medium">
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
      <Footer />
    </>
  );
}
