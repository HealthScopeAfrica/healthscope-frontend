import { useNavigate } from "react-router";
import { useState } from "react";
import {
  FiArrowLeft,
  FiCheckSquare,
  FiInfo,
  FiShield,
  FiSquare,
} from "react-icons/fi";
import { Switch } from "~/components/ui/switch";
import {
  Download,
  Eye,
  Save,
  Trash2,
  TriangleAlert,
  Users,
  X,
} from "lucide-react";

const visibleInfoOptions = [
  "Full Name",
  "Location (City/Country)",
  "Health Interests",
  "Join Date",
  "Professional Title",
];

const communicationOptions = [
  "Verified health experts",
  "Other HealthScope users",
  "Community moderators",
  "HealthScope support team",
];

export default function PrivacySettings() {
  const navigate = useNavigate();
  const [visibility, setVisibility] = useState({
    publicProfile: true,
    readingHistory: false,
    searchableProfile: true,
  });
  const [visibleInfo, setVisibleInfo] = useState(() => {
    const defaults = new Set<string>([
      "Full Name",
      "Location (City/Country)",
      "Health Interests",
    ]);
    return defaults;
  });
  const [privacy, setPrivacy] = useState({
    dataSharing: true,
    expertContact: true,
    locationContent: false,
  });
  const [communication, setCommunication] = useState(() => {
    const defaults = new Set<string>([
      "Verified health experts",
      "Community moderators",
      "HealthScope support team",
    ]);
    return defaults;
  });

  const toggleInfo = (label: string) => {
    setVisibleInfo((prev) => {
      const next = new Set(prev);
      next.has(label) ? next.delete(label) : next.add(label);
      return next;
    });
  };

  const toggleCommunication = (label: string) => {
    setCommunication((prev) => {
      const next = new Set(prev);
      next.has(label) ? next.delete(label) : next.add(label);
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <header className="border-b border-[#E5E5E5] bg-white">
        <div className="container flex items-center justify-between gap-3 py-4 md:py-5">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => navigate(-1)}
              aria-label="Back"
              className="flex size-10 items-center justify-center rounded-full border border-[#E5E5E5] hover:border-[#C1C1C1]"
            >
              <FiArrowLeft className="size-5" />
            </button>
            <img
              src="/images/logo.png"
              alt="HealthScope"
              className="h-9 w-auto"
            />
          </div>
          <span className="text-base font-semibold text-text-strong md:text-lg">
            Privacy Settings
          </span>
        </div>
      </header>

      <main className="container py-6 md:py-8">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 md:gap-8">
          <section className="rounded-2xl border border-[#CCE1FF] bg-[#F1F6FF] p-5 shadow-[0_8px_24px_rgba(76,125,234,0.12)] md:p-6">
            <div className="flex items-start gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-blue-500 shadow-[0_2px_8px_rgba(76,125,234,0.15)]">
                <FiInfo className="size-5" />
              </span>
              <div className="flex flex-col gap-1">
                <h2 className="text-lg font-semibold text-text-strong md:text-xl">
                  Your Privacy Matters
                </h2>
                <p className="text-sm text-[#4C5C72]">
                  HealthScope is committed to protecting your privacy. You have
                  full control over what information is shared and how it’s
                  used. All health data is encrypted and handled according to
                  healthcare privacy standards.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-[#E5E5E5] bg-white p-5 shadow-[0_12px_32px_rgba(15,20,27,0.04)] md:p-6">
            <header className="flex items-center gap-2 text-text-strong">
              <Eye className="size-5 text-blue-500" />
              <h2 className="text-lg font-semibold md:text-xl">
                Profile Visibility
              </h2>
            </header>
            <div className="mt-4 flex flex-col gap-4">
              {[
                {
                  id: "publicProfile",
                  label: "Public Profile",
                  description:
                    "Make your profile visible to other HealthScope users",
                },
                {
                  id: "readingHistory",
                  label: "Reading History",
                  description:
                    "Allow others to see your reading activity and interests",
                },
                {
                  id: "searchableProfile",
                  label: "Searchable Profile",
                  description: "Allow your profile to appear in user searches",
                },
              ].map(({ id, label, description }) => (
                <div
                  key={id}
                  className="flex items-start justify-between gap-4 rounded-xl border border-[#F0F1F5] bg-[#F9FAFB] px-4 py-3"
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-semibold text-text-strong">
                      {label}
                    </span>
                    <span className="text-xs text-gray-600">{description}</span>
                  </div>
                  <Switch
                    checked={visibility[id as keyof typeof visibility]}
                    onCheckedChange={(checked) =>
                      setVisibility((prev) => ({ ...prev, [id]: checked }))
                    }
                    aria-label={`Toggle ${label}`}
                  />
                </div>
              ))}

              {visibility.publicProfile && (
                <div className="rounded-xl border border-[#F0F1F5] bg-white px-4 py-3">
                  <span className="text-xs font-semibold uppercase tracking-wide text-gray-600">
                    Visible Information
                  </span>
                  <div className="mt-3 grid gap-2 md:grid-cols-2">
                    {visibleInfoOptions.map((option) => {
                      const selected = visibleInfo.has(option);
                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => toggleInfo(option)}
                          className="flex items-center gap-3 text-sm text-text-strong"
                        >
                          {selected ? (
                            <FiCheckSquare className="size-5 text-blue-500" />
                          ) : (
                            <FiSquare className="size-5 text-[#C1C1C1]" />
                          )}
                          <span>{option}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </section>

          <section className="rounded-2xl border border-[#E5E5E5] bg-white p-5 shadow-[0_12px_32px_rgba(15,20,27,0.04)] md:p-6">
            <header className="flex items-center gap-2 text-text-strong">
              <FiShield className="size-5 text-[#32A682]" />
              <h2 className="text-lg font-semibold md:text-xl">
                Data &amp; Privacy
              </h2>
            </header>
            <div className="mt-4 flex flex-col gap-4">
              {[
                {
                  id: "dataSharing",
                  label: "Anonymous Data Sharing",
                  description:
                    "Share anonymized usage data to help improve HealthScope",
                },
                {
                  id: "expertContact",
                  label: "Expert Contact",
                  description:
                    "Allow verified health experts to contact you directly",
                },
                {
                  id: "locationContent",
                  label: "Location-Based Content",
                  description:
                    "Use your location to show relevant local health information",
                },
              ].map(({ id, label, description }) => (
                <div
                  key={id}
                  className="flex items-start justify-between gap-4 rounded-xl border border-[#F0F1F5] bg-[#F9FAFB] px-4 py-3"
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-semibold text-text-strong">
                      {label}
                    </span>
                    <span className="text-xs text-gray-600">{description}</span>
                  </div>
                  <Switch
                    checked={privacy[id as keyof typeof privacy]}
                    onCheckedChange={(checked) =>
                      setPrivacy((prev) => ({ ...prev, [id]: checked }))
                    }
                    aria-label={`Toggle ${label}`}
                  />
                </div>
              ))}

              <div className="rounded-xl border border-[#CFEBD6] bg-[#E9F8EF] px-4 py-3 text-sm text-[#24765C]">
                <h3 className="font-semibold text-[#1F5B48]">
                  What data is shared?
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Reading patterns and preferences (anonymized)</li>
                  <li>App usage statistics</li>
                  <li>Search queries and interests</li>
                  <li>Feature usage and feedback</li>
                </ul>
                <p className="mt-2 text-xs">
                  No personal information, health data, or identifiable content
                  is shared.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-[#E5E5E5] bg-white p-5 shadow-[0_12px_32px_rgba(15,20,27,0.04)] md:p-6">
            <header className="flex items-center gap-2 text-text-strong">
              <Users className="size-5 text-[#6E59A6]" />
              <h2 className="text-lg font-semibold md:text-xl">
                Communication
              </h2>
            </header>
            <p className="mt-2 text-sm text-gray-600">Who can contact you?</p>
            <div className="mt-3 grid gap-2 md:grid-cols-2">
              {communicationOptions.map((option) => {
                const selected = communication.has(option);
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => toggleCommunication(option)}
                    className="flex items-center gap-3 rounded-xl border border-[#F0F1F5] bg-[#F9FAFB] px-4 py-3 text-sm text-text-strong transition hover:border-[#D5D5D5]"
                  >
                    {selected ? (
                      <FiCheckSquare className="size-5 text-blue-500" />
                    ) : (
                      <FiSquare className="size-5 text-[#C1C1C1]" />
                    )}
                    <span>{option}</span>
                  </button>
                );
              })}
            </div>
          </section>

          <section className="rounded-2xl border border-[#E5E5E5] bg-white p-5 shadow-[0_12px_32px_rgba(15,20,27,0.04)] md:p-6">
            <header className="flex items-center gap-2 text-text-strong">
              <Download className="size-5 text-gray-800" />
              <h2 className="text-lg font-semibold md:text-xl">
                Data Management
              </h2>
            </header>
            <div className="mt-4 grid gap-3">
              <div className="flex flex-col gap-1 rounded-xl border border-[#F0F1F5] bg-[#F9FAFB] px-4 py-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <span className="text-sm font-semibold text-text-strong">
                    Download Your Data
                  </span>
                  <p className="text-xs text-gray-600">
                    Get a copy of all your HealthScope data.
                  </p>
                </div>
                <button className="mt-3 rounded-full flex items-center gap-2 border border-blue-500 px-4 py-2 text-sm font-semibold text-blue-500 transition hover:bg-[#EBF1FF] md:mt-0">
                  <Download className="size-4" />
                  <span>Request Export</span>
                </button>
              </div>
              <div className="flex flex-col gap-1 rounded-xl border border-[#F0F1F5] bg-[#F9FAFB] px-4 py-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <span className="text-sm font-semibold text-text-strong">
                    Delete Reading History
                  </span>
                  <p className="text-xs text-gray-600">
                    Clear all your reading activity and recommendations.
                  </p>
                </div>
                <button className="mt-3 flex items-center gap-2 rounded-full border border-[#F05A6E] px-4 py-2 text-sm font-semibold text-[#F05A6E] transition hover:bg-[#FDECEF] md:mt-0">
                  <Trash2 className="size-4" />
                  Clear History
                </button>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-[#F8C7CD] bg-[#FDECEF] p-5 shadow-[0_12px_32px_rgba(246,66,91,0.12)] md:p-6">
            <header className="flex items-center gap-2 text-[#D13C53]">
              <TriangleAlert className="size-5 shrink-0" />
              <span className="text-lg font-semibold md:text-xl">
                Deactivate Account
              </span>
            </header>
            <p className="mt-2 text-sm text-[#D13C53]">
              Deactivate your HealthScope account and all associated data. This
              action is temporary.
            </p>
            <div className="mt-4 rounded-xl border border-[#F8C7CD] bg-white px-4 py-3 text-sm text-gray-600">
              <h3 className="font-semibold text-[#D13C53]">
                What will be deactivated:
              </h3>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Your profile and account information</li>
                <li>Reading history and bookmarks</li>
                <li>Health interests and preferences</li>
                <li>All saved content and notes</li>
                <li>Communication history with experts</li>
              </ul>
            </div>
            <button className="mt-4 flex items-center gap-2 rounded-full border border-[#D13C53] px-4 py-2 text-sm font-semibold text-[#D13C53] transition hover:bg-[#FCE8EB]">
              <Trash2 className="size-5 shrink-0" />
              Deactivate my account
            </button>
          </section>

          <div className="flex flex-wrap items-center justify-end gap-3">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="rounded-full flex items-center gap-2 border border-[#E5E5E5] px-5 py-2.5 bg-white text-sm font-medium text-text-strong transition hover:border-[#C1C1C1] hover:text-[#203562]"
            >
              <X className="size-5" />
              Cancel
            </button>
            <button
              type="button"
              className="flex items-center gap-2 rounded-full bg-green-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2E9776]"
            >
              <Save className="size-5" />
              Save Changes
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
