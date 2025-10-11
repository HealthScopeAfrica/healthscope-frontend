import { FiSearch } from "react-icons/fi";

export function WelcomeSection() {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <p className="md:text-2xl font-bold text-text-strong">Welcome back,</p>
        <h1 className="md:text-2xl font-bold text-text-strong -mt-2">Sarah!</h1>
        <p className="text-xs text-[#6E6E6E] md:text-base">
          Discover trusted health information tailored for you.
        </p>
      </div>

      <label className="flex items-center gap-3 rounded-lg border border-[#E5E5E5] bg-gray-100/60 px-5 py-3 text-[#717182] max-w-[740px]">
        <FiSearch className="size-5 text-gray-400" />
        <span className="sr-only">Search health topics</span>
        <input
          type="search"
          placeholder="Search health topics, symptoms, or ask a question..."
          className="w-full border-0 bg-transparent text-base text-[#333333] outline-none placeholder:text-[#A5A5A5]"
        />
      </label>
    </section>
  );
}
