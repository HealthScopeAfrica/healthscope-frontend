import { useState, type ChangeEvent } from "react";
import { useNavigate } from "react-router";
import { FiArrowLeft, FiEye, FiEyeOff } from "react-icons/fi";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Switch } from "~/components/ui/switch";
import { Button } from "~/components/ui/button";
import { Save, X } from "lucide-react";

export default function AccountSettings() {
  const navigate = useNavigate();
  const [passwords, setPasswords] = useState({
    current: "",
    next: "",
    confirm: "",
  });
  const [showPassword, setShowPassword] = useState({
    current: false,
    next: false,
    confirm: false,
  });
  const [security, setSecurity] = useState({
    twoFactor: false,
  });
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
  });
  const [privacy, setPrivacy] = useState({
    profileVisibility: true,
    readingHistory: false,
    dataSharing: true,
  });

  const handlePasswordChange =
    (key: keyof typeof passwords) => (event: ChangeEvent<HTMLInputElement>) => {
      setPasswords((prev) => ({ ...prev, [key]: event.target.value }));
    };

  const togglePasswordVisibility = (key: keyof typeof showPassword) => {
    setShowPassword((prev) => ({ ...prev, [key]: !prev[key] }));
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
            Account Settings
          </span>
        </div>
      </header>

      <main className="container py-6 md:py-8">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 md:gap-8">
          <section className="rounded-2xl border border-[#E5E5E5] bg-white p-5 shadow-[0_12px_32px_rgba(15,20,27,0.04)] md:p-6">
            <header className="flex flex-col gap-1">
              <h2 className="text-lg font-semibold text-text-strong md:text-xl">
                Change Password
              </h2>
              <p className="text-sm text-gray-600">
                Update your password to keep your account secure.
              </p>
            </header>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="current-password">Current Password</Label>
                <div className="relative">
                  <Input
                    id="current-password"
                    type={showPassword.current ? "text" : "password"}
                    placeholder="Enter current password"
                    value={passwords.current}
                    onChange={handlePasswordChange("current")}
                    className="pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => togglePasswordVisibility("current")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-[#203562]"
                    aria-label={
                      showPassword.current ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword.current ? (
                      <FiEyeOff className="size-5" />
                    ) : (
                      <FiEye className="size-5" />
                    )}
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="new-password">New Password</Label>
                <div className="relative">
                  <Input
                    id="new-password"
                    type={showPassword.next ? "text" : "password"}
                    placeholder="Enter new password"
                    value={passwords.next}
                    onChange={handlePasswordChange("next")}
                    className="pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => togglePasswordVisibility("next")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-[#203562]"
                    aria-label={
                      showPassword.next ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword.next ? (
                      <FiEyeOff className="size-5" />
                    ) : (
                      <FiEye className="size-5" />
                    )}
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <div className="relative">
                  <Input
                    id="confirm-password"
                    type={showPassword.confirm ? "text" : "password"}
                    placeholder="Re-enter new password"
                    value={passwords.confirm}
                    onChange={handlePasswordChange("confirm")}
                    className="pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => togglePasswordVisibility("confirm")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-[#203562]"
                    aria-label={
                      showPassword.confirm ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword.confirm ? (
                      <FiEyeOff className="size-5" />
                    ) : (
                      <FiEye className="size-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-start">
              <Button className="rounded-full px-6 py-2.5 text-sm font-semibold">
                Update Password
              </Button>
            </div>
            <div className="flex flex-col border-t border-[#E5E5E5] mt-10 py-5 gap-3 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-col gap-1">
                <h2 className="text-lg font-semibold text-text-strong md:text-xl">
                  Two-Factor Authentication
                </h2>
                <p className="text-sm text-gray-600">
                  Add an extra layer of security to your account.
                </p>
              </div>
              <Switch
                checked={security.twoFactor}
                onCheckedChange={(checked) =>
                  setSecurity((prev) => ({ ...prev, twoFactor: checked }))
                }
                aria-label="Toggle two factor authentication"
              />
            </div>
          </section>

          <section className="rounded-2xl border border-[#E5E5E5] bg-white p-5 shadow-[0_12px_32px_rgba(15,20,27,0.04)] md:p-6">
            <header className="flex flex-col gap-1">
              <h2 className="text-lg font-semibold text-text-strong md:text-xl">
                Notification Preferences
              </h2>
              <p className="text-sm text-gray-600">
                Choose how you would like to hear from HealthScope.
              </p>
            </header>
            <div className="mt-4 flex flex-col gap-4">
              <div className="flex items-start justify-between gap-4 rounded-xl border border-[#F0F1F5] bg-[#F9FAFB] px-4 py-3">
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-text-strong">
                    Email Notifications
                  </span>
                  <span className="text-xs text-gray-600">
                    Receive updates about new articles and health tips.
                  </span>
                </div>
                <Switch
                  checked={notifications.email}
                  onCheckedChange={(checked) =>
                    setNotifications((prev) => ({ ...prev, email: checked }))
                  }
                  aria-label="Toggle email notifications"
                />
              </div>

              <div className="flex items-start justify-between gap-4 rounded-xl border border-[#F0F1F5] bg-[#F9FAFB] px-4 py-3">
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-text-strong">
                    SMS Notifications
                  </span>
                  <span className="text-xs text-gray-600">
                    Get urgent health alerts via text message.
                  </span>
                </div>
                <Switch
                  checked={notifications.sms}
                  onCheckedChange={(checked) =>
                    setNotifications((prev) => ({ ...prev, sms: checked }))
                  }
                  aria-label="Toggle SMS notifications"
                />
              </div>

              <div className="rounded-xl border border-[#F0F1F5] bg-white px-4 py-3">
                <h3 className="text-sm font-semibold text-text-strong">
                  Email Frequency
                </h3>
                <ul className="mt-2 space-y-1 text-sm text-gray-600">
                  <li>Daily health tips</li>
                  <li>Weekly newsletter</li>
                  <li>New articles in your interests</li>
                  <li>Expert responses to your questions</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-[#E5E5E5] bg-white p-5 shadow-[0_12px_32px_rgba(15,20,27,0.04)] md:p-6">
            <header className="flex flex-col gap-1">
              <h2 className="text-lg font-semibold text-text-strong md:text-xl">
                Privacy Settings
              </h2>
              <p className="text-sm text-gray-600">
                Control who can see your activity and how your data is used.
              </p>
            </header>

            <div className="mt-4 flex flex-col gap-4">
              {[
                {
                  id: "profileVisibility",
                  label: "Profile Visibility",
                  description: "Make your profile visible to other users.",
                },
                {
                  id: "readingHistory",
                  label: "Reading History",
                  description: "Allow others to see your reading activity.",
                },
                {
                  id: "dataSharing",
                  label: "Anonymous Data Sharing",
                  description:
                    "Help improve HealthScope by sharing anonymized usage data.",
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
                      setPrivacy((prev) => ({
                        ...prev,
                        [id]: checked,
                      }))
                    }
                    aria-label={`Toggle ${label}`}
                  />
                </div>
              ))}
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
