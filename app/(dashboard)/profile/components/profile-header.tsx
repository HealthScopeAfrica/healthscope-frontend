import { FiArrowLeft } from "react-icons/fi";

interface ProfileHeaderProps {
  onBack: () => void;
}

export function ProfileHeader({ onBack }: ProfileHeaderProps) {
  return (
    <header className="border-b border-[#E5E5E5] bg-white">
      <div className="container flex flex-wrap items-center justify-between gap-3 py-5">
        <div className="flex items-center gap-3 text-[#203562]">
          <button
            type="button"
            onClick={onBack}
            aria-label="Back to dashboard"
            className="flex size-10 items-center justify-center rounded-full border border-[#E5E5E5] hover:border-[#C1C1C1]"
          >
            <FiArrowLeft className="size-5" />
          </button>
          <img src="/images/logo.png" alt="HealthScope" className="h-9 w-auto" />
        </div>
      </div>
    </header>
  );
}
