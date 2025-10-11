import type { ProfileData } from "../data";

interface ProfileInfoViewProps {
  profile: ProfileData;
}

const infoFields: Array<{
  id: string;
  label: string;
  valueKey: keyof ProfileData;
}> = [
  { id: "fullName", label: "Full Name", valueKey: "name" },
  { id: "email", label: "Email", valueKey: "email" },
  { id: "phone", label: "Phone Number", valueKey: "phone" },
  { id: "location", label: "Location", valueKey: "location" },
  { id: "dob", label: "Date of Birth", valueKey: "dateOfBirth" },
  { id: "memberSince", label: "Member since", valueKey: "memberSince" },
];

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
}

export function ProfileInfoView({ profile }: ProfileInfoViewProps) {
  return (
    <div className="flex flex-col gap-6">
      <section className="rounded-2xl border border-[#E5E5E5] bg-white p-6 shadow-[0_12px_32px_rgba(15,20,27,0.04)]">
        <h3 className="text-xl font-semibold text-text-strong">
          Personal Information
        </h3>
        <dl className="mt-4 grid gap-4 md:grid-cols-2">
          {infoFields.map(({ id, label, valueKey }) => {
            const value =
              valueKey === "dateOfBirth"
                ? formatDate(profile[valueKey])
                : profile[valueKey];

            return (
              <div key={id} className="flex flex-col gap-1">
                <dt className="text-sm font-medium text-[#6E6E6E]">{label}</dt>
                <dd className="text-base font-semibold text-[#333333]">
                  {value}
                </dd>
              </div>
            );
          })}
        </dl>
        <div className="mt-10">
          <h4 className="text-lg font-semibold text-text-strong">Bio</h4>
          <p className="mt-2 text-base leading-relaxed text-[#434343] max-w-[693px]">
            {profile.bio}
          </p>
        </div>
      </section>
    </div>
  );
}
