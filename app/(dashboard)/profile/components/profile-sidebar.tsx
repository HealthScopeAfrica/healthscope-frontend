import { FiCamera, FiMapPin } from "react-icons/fi";
import { contactItems, profileStats, type ProfileData } from "../data";
import type { IconType } from "react-icons";

interface ProfileSidebarProps {
  profile: ProfileData;
  isEditing: boolean;
}

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: IconType;
  label: string;
  value: string;
}) {
  return (
    <li className="flex items-center gap-3 text-sm text-[#434343]">
      <span className="flex size-9 items-center justify-center rounded-full bg-[#EDF2FD] text-[#4C7DEA]">
        <Icon className="size-4" />
      </span>
      <div className="flex flex-col leading-tight">
        <span className="text-xs text-[#949494]">{label}</span>
        <span className="font-medium text-[#333333]">{value}</span>
      </div>
    </li>
  );
}

function StatRow({
  icon: Icon,
  label,
  value,
}: {
  icon: IconType;
  label: string;
  value: string | number;
}) {
  return (
    <li className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <Icon className="size-5 text-[#2b7fff]" />
        <span className="">{label}</span>
      </div>
      <span className="font-semibold text-text-strong">{value}</span>
    </li>
  );
}

export function ProfileSidebar({ profile, isEditing }: ProfileSidebarProps) {
  return (
    <aside className="flex flex-col gap-6">
      <section className="rounded-2xl border border-[#E5E5E5] bg-white p-4 shadow-[0_12px_32px_rgba(15,20,27,0.04)]">
        <div className="relative flex flex-col items-center gap-4">
          <div className="relative flex size-28 items-center justify-center rounded-full bg-[#4C7DEA] text-2xl font-semibold text-white">
            {profile.initials}
            {isEditing ? (
              <button
                type="button"
                aria-label="Change profile picture"
                className="absolute -bottom-1 -right-1 flex size-9 items-center justify-center rounded-full border border-white bg-white text-[#4C7DEA] shadow-sm"
              >
                <FiCamera className="size-4" />
              </button>
            ) : null}
          </div>
          <div className="text-center">
            <h2 className="text-xl font-semibold text-[#203562]">
              {profile.name}
            </h2>
            <div className="mt-1 flex items-center justify-center gap-2 text-sm text-[#6E6E6E]">
              <FiMapPin className="size-4 text-[#4C7DEA]" />
              <span>{profile.location}</span>
            </div>
          </div>
        </div>

        <ul className="mt-6 flex flex-col gap-4">
          {contactItems.map(({ id, icon, label, valueKey }) => (
            <InfoRow
              key={id}
              icon={icon}
              label={label}
              value={String(profile[valueKey])}
            />
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-[#E5E5E5] bg-white p-4 shadow-[0_12px_32px_rgba(15,20,27,0.04)]">
        <h3 className="text-lg font-semibold text-text-strong">Your Stats</h3>
        <ul className="mt-4 flex flex-col gap-3">
          {profileStats.map(({ id, icon, label, value }) => (
            <StatRow key={id} icon={icon} label={label} value={value} />
          ))}
        </ul>
      </section>
    </aside>
  );
}
