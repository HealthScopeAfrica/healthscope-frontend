import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import {
  allHealthInterests,
  defaultProfile,
  profileTabs,
  readingHistory,
  type ProfileData,
} from "./data";
import { ProfileHeader } from "./components/profile-header";
import { ProfileSidebar } from "./components/profile-sidebar";
import { ProfileTabs } from "./components/profile-tabs";
import { ProfileInfoView } from "./components/profile-info-view";
import { ProfileInfoForm } from "./components/profile-info-form";
import { HealthInterests } from "./components/health-interests";
import { Tabs, TabsContent, TabsList } from "~/components/ui/tabs";
import { ReadingHistory } from "./components/reading-history";

export function Profile() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<ProfileData>(defaultProfile);
  const [draft, setDraft] = useState<ProfileData>(defaultProfile);
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");
  const [selectedInterests, setSelectedInterests] = useState(
    new Set<string>(defaultProfile.interests)
  );

  const tabs = useMemo(() => profileTabs, []);

  const resetDraft = useCallback(() => {
    setDraft(profile);
    setSelectedInterests(new Set(profile.interests));
  }, [profile]);

  const handleEdit = () => {
    setActiveTab("profile");
    resetDraft();
    setIsEditing(true);
  };

  const handleCancel = () => {
    resetDraft();
    setIsEditing(false);
  };

  const handleSave = () => {
    const updatedProfile = {
      ...draft,
      interests: Array.from(selectedInterests),
    };
    setProfile(updatedProfile);
    setIsEditing(false);
  };

  const handleFormChange = (key: keyof ProfileData, value: string) => {
    setDraft((prev) => ({ ...prev, [key]: value }));
  };

  const handleToggleInterest = (interest: string) => {
    setSelectedInterests((prev) => {
      const next = new Set(prev);
      if (next.has(interest)) {
        next.delete(interest);
      } else {
        next.add(interest);
      }
      const nextArray = Array.from(next);
      setDraft((prevDraft) => ({ ...prevDraft, interests: nextArray }));
      return next;
    });
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    if (value !== "profile" && isEditing) {
      setIsEditing(false);
      resetDraft();
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <ProfileHeader
        isEditing={isEditing}
        onEdit={handleEdit}
        onCancel={handleCancel}
        onSave={handleSave}
        onBack={() => navigate("/dashboard")}
        canEdit={activeTab === "profile"}
      />
      <main className="container flex flex-col gap-8 py-8">
        <div className="grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)]">
          <ProfileSidebar
            profile={isEditing ? draft : profile}
            isEditing={isEditing}
          />
          <Tabs
            value={activeTab}
            onValueChange={handleTabChange}
            className="flex flex-col gap-6"
          >
            <TabsList className="flex flex-wrap gap-5 h-auto p-0">
              <ProfileTabs tabs={tabs} />
            </TabsList>
            <TabsContent
              value="profile"
              className="flex flex-col gap-6 focus-visible:outline-none"
            >
              {isEditing ? (
                <>
                  <ProfileInfoForm
                    formData={draft}
                    onChange={handleFormChange}
                  />
                  <HealthInterests
                    items={allHealthInterests}
                    editable
                    selected={selectedInterests}
                    onToggle={handleToggleInterest}
                  />
                </>
              ) : (
                <>
                  <ProfileInfoView profile={profile} />
                  <HealthInterests
                    items={allHealthInterests}
                    selected={new Set(profile.interests)}
                  />
                </>
              )}
            </TabsContent>
            <TabsContent value="reading" className="focus-visible:outline-none">
              <ReadingHistory items={readingHistory} />
            </TabsContent>
            <TabsContent
              value="settings"
              className="focus-visible:outline-none"
            >
              <section className="rounded-2xl border border-[#E5E5E5] bg-white p-6 shadow-[0_12px_32px_rgba(15,20,27,0.04)]">
                <h3 className="text-xl font-semibold text-text-strong">
                  Settings
                </h3>
                <p className="mt-2 text-sm text-[#6E6E6E]">
                  Manage notification preferences and privacy controls from this
                  tab soon.
                </p>
              </section>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
