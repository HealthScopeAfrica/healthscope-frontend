import { useNavigate } from "react-router";
import { useState } from "react";
import { FiArrowLeft, FiCheckSquare, FiSquare } from "react-icons/fi";
import { Switch } from "~/components/ui/switch";
import { Save, X } from "lucide-react";

const emailTypeOptions = [
  "New articles in your interests",
  "Weekly health newsletter",
  "Expert responses to questions",
  "Health reminders",
  "Account and security updates",
];

const pushTypeOptions = [
  "Breaking health news",
  "Daily health tips",
  "Reading reminders",
  "Expert Q&A updates",
];

export default function NotificationSettings() {
  const navigate = useNavigate();
  const [channels, setChannels] = useState({
    email: true,
    push: true,
    sms: false,
  });
  const [emailTypes, setEmailTypes] = useState(
    () => new Set<string>(emailTypeOptions)
  );
  const [pushTypes, setPushTypes] = useState(
    () => new Set<string>(pushTypeOptions)
  );
  const [preferences, setPreferences] = useState({
    sounds: true,
    quietHours: false,
    urgentOnly: false,
  });

  const toggleEmailType = (type: string) => {
    setEmailTypes((prev) => {
      const next = new Set(prev);
      next.has(type) ? next.delete(type) : next.add(type);
      return next;
    });
  };

  const togglePushType = (type: string) => {
    setPushTypes((prev) => {
      const next = new Set(prev);
      next.has(type) ? next.delete(type) : next.add(type);
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* <header className="border-b border-[#E5E5E5] bg-white">
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
            Notification Settings
          </span>
        </div>
      </header> */}

      <main className="container py-6 md:py-8">
         
        <div className="mx-auto flex max-w-4xl flex-col gap-6 md:gap-8">
          <section className="rounded-2xl border border-[#E5E5E5] bg-white p-5 shadow-[0_12px_32px_rgba(15,20,27,0.04)] md:p-6">
            <header className="flex flex-col gap-1"> 
              <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold text-text-strong md:text-xl">
                Notification Types
              </h2>
              <button
                type="button"
                onClick={() => navigate(-1)}
                aria-label="Back"
                className="flex size-10 items-center justify-center rounded-full border border-[#E5E5E5] hover:border-[#C1C1C1]"
              >
                <FiArrowLeft className="size-5" />
              </button>
            </div>
              <p className="text-sm text-gray-600">
                Choose the channels and content you want to hear about.
              </p>
            </header>

            <div className="mt-4 flex flex-col gap-6">
              <div className="flex flex-col gap-3 rounded-xl border border-[#F0F1F5] bg-[#F9FAFB] px-4 py-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-semibold text-text-strong">
                      Email Notifications
                    </span>
                    <span className="text-xs text-gray-600">
                      Receive updates via email
                    </span>
                  </div>
                  <Switch
                    checked={channels.email}
                    onCheckedChange={(checked) =>
                      setChannels((prev) => ({ ...prev, email: checked }))
                    }
                    aria-label="Toggle email notifications"
                  />
                </div>
                <div className="grid gap-2 rounded-xl border border-[#E5E5E5] bg-white p-4">
                  <span className="text-xs font-semibold uppercase tracking-wide text-gray-600">
                    Email Types
                  </span>
                  <div className="grid gap-2">
                    {emailTypeOptions.map((type) => {
                      const selected = emailTypes.has(type);
                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() => toggleEmailType(type)}
                          className="flex items-center gap-3 text-sm text-text-strong"
                        >
                          {selected ? (
                            <FiCheckSquare className="size-5 text-[#4C7DEA]" />
                          ) : (
                            <FiSquare className="size-5 text-[#C1C1C1]" />
                          )}
                          <span>{type}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 rounded-xl border border-[#F0F1F5] bg-[#F9FAFB] px-4 py-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-semibold text-text-strong">
                      Push Notifications
                    </span>
                    <span className="text-xs text-gray-600">
                      Receive notifications on your device
                    </span>
                  </div>
                  <Switch
                    checked={channels.push}
                    onCheckedChange={(checked) =>
                      setChannels((prev) => ({ ...prev, push: checked }))
                    }
                    aria-label="Toggle push notifications"
                  />
                </div>
                <div className="grid gap-2 rounded-xl border border-[#E5E5E5] bg-white p-4">
                  <span className="text-xs font-semibold uppercase tracking-wide text-gray-600">
                    Push Notification Types
                  </span>
                  <div className="grid gap-2">
                    {pushTypeOptions.map((type) => {
                      const selected = pushTypes.has(type);
                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() => togglePushType(type)}
                          className="flex items-center gap-3 text-sm text-text-strong"
                        >
                          {selected ? (
                            <FiCheckSquare className="size-5 text-[#4C7DEA]" />
                          ) : (
                            <FiSquare className="size-5 text-[#C1C1C1]" />
                          )}
                          <span>{type}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 rounded-xl border border-[#F0F1F5] bg-[#F9FAFB] px-4 py-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-semibold text-text-strong">
                      SMS Notifications
                    </span>
                    <span className="text-xs text-gray-600">
                      Receive critical health alerts via SMS
                    </span>
                  </div>
                  <Switch
                    checked={channels.sms}
                    onCheckedChange={(checked) =>
                      setChannels((prev) => ({ ...prev, sms: checked }))
                    }
                    aria-label="Toggle SMS notifications"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-[#E5E5E5] bg-white p-5 shadow-[0_12px_32px_rgba(15,20,27,0.04)] md:p-6">
            <header className="flex flex-col gap-1">
              <h2 className="text-lg font-semibold text-text-strong md:text-xl">
                Notification Preferences
              </h2>
              <p className="text-sm text-gray-600">
                Fine tune sounds and delivery windows.
              </p>
            </header>
            <div className="mt-4 flex flex-col gap-4">
              <div className="flex items-start justify-between gap-4 rounded-xl border border-[#F0F1F5] bg-[#F9FAFB] px-4 py-3">
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-text-strong">
                    Notification Sounds
                  </span>
                  <span className="text-xs text-gray-600">
                    Play a sound for new notifications
                  </span>
                </div>
                <Switch
                  checked={preferences.sounds}
                  onCheckedChange={(checked) =>
                    setPreferences((prev) => ({ ...prev, sounds: checked }))
                  }
                  aria-label="Toggle notification sounds"
                />
              </div>

              <div className="flex items-start justify-between gap-4 rounded-xl border border-[#F0F1F5] bg-[#F9FAFB] px-4 py-3">
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-text-strong">
                    Quiet Hours
                  </span>
                  <span className="text-xs text-gray-600">
                    Pause non-urgent notifications
                  </span>
                </div>
                <Switch
                  checked={preferences.quietHours}
                  onCheckedChange={(checked) =>
                    setPreferences((prev) => ({ ...prev, quietHours: checked }))
                  }
                  aria-label="Toggle quiet hours"
                />
              </div>

              <div className="flex items-start justify-between gap-4 rounded-xl border border-[#F0F1F5] bg-[#F9FAFB] px-4 py-3">
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-text-strong">
                    Urgent Only Mode
                  </span>
                  <span className="text-xs text-gray-600">
                    Only receive critical health alerts
                  </span>
                </div>
                <Switch
                  checked={preferences.urgentOnly}
                  onCheckedChange={(checked) =>
                    setPreferences((prev) => ({ ...prev, urgentOnly: checked }))
                  }
                  aria-label="Toggle urgent only mode"
                />
              </div>
            </div>
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
