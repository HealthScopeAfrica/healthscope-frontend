import { useState } from "react";
import { Link } from "react-router";
import { helpLinks, quickSettings, settingsOverview } from "../data";
import { Switch } from "~/components/ui/switch";
import { cn } from "~/lib/utils";

export function SettingsContent() {
  const [toggles, setToggles] = useState(() =>
    quickSettings.reduce<Record<string, boolean>>((acc, setting) => {
      acc[setting.id] = setting.enabled;
      return acc;
    }, {})
  );

  const handleToggle = (id: string, value: boolean) => {
    setToggles((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="flex flex-col gap-6">
      <section className="rounded-2xl border border-[#E5E5E5] bg-white p-6 shadow-[0_12px_32px_rgba(15,20,27,0.04)]">
        <h3 className="text-xl font-semibold text-text-strong">
          Settings Overview
        </h3>
        <div className="mt-4 grid gap-4 xl:mt-6 sm:grid-cols-2">
          {settingsOverview.map(({ id, title, description, icon: Icon, href }) => {
            const className =
              "flex h-full gap-3 rounded-xl border border-[#F0F1F5] bg-white px-4 py-3 shadow-[0_4px_16px_rgba(15,20,27,0.04)] transition hover:border-[#D5D5D5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4C7DEA]/30";

            const content = (
              <>
                <span className="flex size-10 items-center justify-center rounded-full bg-blue-50 text-blue-500">
                  <Icon className="size-5" />
                </span>
                <div className="flex flex-col gap-1">
                  <h4 className="text-base font-semibold text-text-strong">
                    {title}
                  </h4>
                  <p className="text-sm text-gray-600">{description}</p>
                </div>
              </>
            );

            return href ? (
              <Link key={id} to={href} className={cn(className, "items-start")}>
                {content}
              </Link>
            ) : (
              <article key={id} className={cn(className, "items-start")}>
                {content}
              </article>
            );
          })}
        </div>
      </section>

      <section className="rounded-2xl border border-[#E5E5E5] bg-white p-6 shadow-[0_12px_32px_rgba(15,20,27,0.04)]">
        <h3 className="text-xl font-semibold text-text-strong">
          Quick Settings
        </h3>
        <ul className="mt-4 xl:mt-6 flex flex-col divide-y divide-[#F0F1F5]">
          {quickSettings.map(({ id, label, description }) => {
            const enabled = toggles[id];

            return (
              <li
                key={id}
                className="flex items-start justify-between gap-4 py-4 first:pt-0 last:pb-0"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-base font-semibold text-text-strong">
                    {label}
                  </span>
                  <span className="text-sm text-gray-600">{description}</span>
                </div>
                <Switch
                  checked={enabled}
                  onCheckedChange={(checked) => handleToggle(id, checked)}
                  aria-label={label}
                />
              </li>
            );
          })}
        </ul>
      </section>

      <section className="rounded-2xl border border-[#E5E5E5] bg-white p-6 shadow-[0_12px_32px_rgba(15,20,27,0.04)]">
        <h3 className="text-xl font-semibold text-text-strong">
          Help &amp; Support
        </h3>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {helpLinks.map(({ id, label, description, icon: Icon }) => (
            <button
              key={id}
              type="button"
              className="flex items-start gap-3 rounded-xl border border-[#F0F1F5] bg-white px-4 py-3 text-left shadow-[0_4px_16px_rgba(15,20,27,0.04)] transition hover:border-[#D5D5D5]"
            >
              <span className="flex size-9 items-center justify-center rounded-full bg-[#F3F3F5] text-blue-500">
                <Icon className="size-5" />
              </span>
              <div className="flex flex-col gap-1">
                <span className="text-sm font-semibold text-text-strong">
                  {label}
                </span>
                <span className="text-xs text-gray-600">{description}</span>
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
