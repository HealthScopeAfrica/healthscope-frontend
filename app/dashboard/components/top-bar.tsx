import { FiBell, FiSettings, FiUser } from "react-icons/fi";

const controls = [
  { id: "notifications", icon: FiBell, label: "Notifications" },
  { id: "settings", icon: FiSettings, label: "Settings" },
];

export function DashboardTopBar() {
  return (
    <header className="border-b border-border bg-white">
      <div className="container flex items-center justify-between gap-4 py-3 xl:py-4">
        <div className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="HealthScope"
            className="h-12 w-auto"
          />
        </div>

        <nav className="flex items-center gap-4">
          {controls.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              type="button"
              aria-label={label}
              className="flex size-12 items-center justify-center rounded-lg bg-blue-50/50 text-text-strong transition hover:border-[#C1C1C1] hover:text-[#203562]"
            >
              <Icon className="size-6" />
            </button>
          ))}
          <button
            type="button"
            className="hidden items-center gap-2 rounded-full cursor-pointer border border-gray-100 bg-white px-5 py-4 text-xl font-medium text-text-strong hover:border-[#C1C1C1] sm:flex"
          >
            <FiUser className="size-6" />
            Profile
          </button>
        </nav>
      </div>
    </header>
  );
}
