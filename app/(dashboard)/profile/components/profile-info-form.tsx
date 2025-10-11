import type { ChangeEvent } from "react";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import { DatePicker } from "~/components/ui/date-picker";
import type { ProfileData } from "../data";

interface ProfileInfoFormProps {
  formData: ProfileData;
  onChange: (key: keyof ProfileData, value: string) => void;
  onSave?: () => void;
  onCancel?: () => void;
}

function Field({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label
        htmlFor={id}
        className="text-sm font-medium text-[#6E6E6E]"
      >
        {label}
      </Label>
      {children}
    </div>
  );
}

export function ProfileInfoForm({ formData, onChange, onSave, onCancel }: ProfileInfoFormProps) {
  const handleInput =
    (key: keyof ProfileData) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      onChange(key, event.target.value);
    };

  return (
    <section className="rounded-2xl border border-[#E5E5E5] bg-white p-6 shadow-[0_12px_32px_rgba(15,20,27,0.04)]">
      <h3 className="text-xl font-semibold text-text-strong">
        Personal Information
      </h3>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <Field id="profile-name" label="Full Name">
          <Input
            id="profile-name"
            type="text"
            value={formData.name}
            onChange={handleInput("name")}
          />
        </Field>
        <Field id="profile-email" label="Email">
          <Input
            id="profile-email"
            type="email"
            value={formData.email}
            onChange={handleInput("email")}
          />
        </Field>
        <Field id="profile-phone" label="Phone Number">
          <Input
            id="profile-phone"
            type="tel"
            value={formData.phone}
            onChange={handleInput("phone")}
          />
        </Field>
        <Field id="profile-location" label="Location">
          <Input
            id="profile-location"
            type="text"
            value={formData.location}
            onChange={handleInput("location")}
          />
        </Field>
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="profile-date-of-birth"
            className="text-sm font-medium text-[#6E6E6E]"
          >
            Date of Birth
          </Label>
          <DatePicker
            id="profile-date-of-birth"
            value={formData.dateOfBirth}
            onChange={(value) => onChange("dateOfBirth", value)}
            placeholder="Select a date"
            className="w-full"
          />
        </div>
        <Field id="profile-member-since" label="Member since">
          <Input
            id="profile-member-since"
            type="text"
            value={formData.memberSince}
            onChange={handleInput("memberSince")}
          />
        </Field>
      </div>
      <div className="mt-6 flex flex-col gap-2">
        <Label
          htmlFor="profile-bio"
          className="text-sm font-medium text-[#6E6E6E]"
        >
          Bio
        </Label>
        <Textarea
          id="profile-bio"
          value={formData.bio}
          onChange={handleInput("bio")}
          rows={4}
          placeholder="Tell us about yourself…"
        />
      </div>
      
      {/* Save/Cancel buttons */}
      <div className="mt-6 flex items-center justify-start gap-4">
        <button
          type="button"
          onClick={onCancel}
          className="text-sm font-medium text-[#6E6E6E] hover:text-[#203562]"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={onSave}
          className="inline-flex items-center rounded-full bg-[#32A682] px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#2E9776]"
        >
          Save Changes
        </button>
      </div>
    </section>
  );
}
