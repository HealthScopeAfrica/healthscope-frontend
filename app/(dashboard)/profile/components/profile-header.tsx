import { FiArrowLeft } from "react-icons/fi";

interface ProfileHeaderProps {
  isEditing: boolean;
  canEdit: boolean;
  onEdit: () => void;
  onCancel: () => void;
  onSave: () => void;
  onBack: () => void;
}

export function ProfileHeader({
  isEditing,
  canEdit,
  onEdit,
  onCancel,
  onSave,
  onBack,
}: ProfileHeaderProps) {
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
        {canEdit ? (
          <div className="flex items-center gap-3">
            {isEditing ? (
              <>
                <button
                  type="button"
                  onClick={onSave}
                  className="inline-flex items-center rounded-full bg-[#32A682] px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#2E9776]"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={onCancel}
                  className="text-sm font-medium text-[#6E6E6E] hover:text-[#203562]"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={onEdit}
                className="inline-flex items-center gap-2 rounded-full border border-[#4C7DEA] px-5 py-2 text-sm font-semibold text-[#4C7DEA] hover:border-[#3659A6] hover:text-[#3659A6]"
              >
                Edit Profile
              </button>
            )}
          </div>
        ) : null}
      </div>
    </header>
  );
}
