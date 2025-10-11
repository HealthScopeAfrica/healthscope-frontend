import type { IconType } from "react-icons";
import {
  FiBell,
  FiBookOpen,
  FiCalendar,
  FiFileText,
  FiHeart,
  FiHelpCircle,
  FiMail,
  FiPhone,
  FiSettings,
  FiShield,
  FiSliders,
  FiUser,
} from "react-icons/fi";

export const profileTabs = [
  { id: "profile", label: "Profile Information", icon: FiUser },
  { id: "reading", label: "Reading History", icon: FiBookOpen },
  { id: "settings", label: "Settings", icon: FiSettings },
];

export const profileStats = [
  { id: "read", label: "Articles Read", value: 47, icon: FiBookOpen },
  { id: "bookmarked", label: "Bookmarked", value: 12, icon: FiHeart },
  { id: "streak", label: "Learning Streak", value: "15 days", icon: FiCalendar },
];

export const allHealthInterests = [
  "General Health",
  "Mental Health",
  "Women's Health",
  "Child Health",
  "Fitness & Nutrition",
  "Prevention & Wellness",
];

export const defaultProfile = {
  initials: "DSO",
  name: "Kris Vanessa",
  email: "krisnessa@email.com",
  phone: "+234 80 1234 5678",
  location: "Lagos, Nigeria",
  memberSince: "2025",
  dateOfBirth: "1995-06-15",
  bio: "An individual passionate about learning and understanding African health outcomes through evidence-based information.",
  interests: allHealthInterests,
};

export const readingHistory = [
  {
    id: "malaria-prevention",
    title: "Understanding Malaria Prevention in Sub-Saharan Africa",
    category: "General Health",
    readDuration: "15 min",
    readAt: "2 days ago",
  },
  {
    id: "mental-health-awareness",
    title: "Mental Health Awareness: Breaking the Stigma",
    category: "Mental Health",
    readDuration: "12 min",
    readAt: "1 week ago",
  },
  {
    id: "nutrition-during-pregnancy",
    title: "Nutrition During Pregnancy: An African Perspective",
    category: "Women's Health",
    readDuration: "18 min",
    readAt: "2 weeks ago",
  }
];

export type ReadingHistoryItem = (typeof readingHistory)[number];

export type ProfileData = typeof defaultProfile;

type ContactItem = {
  id: string;
  icon: IconType;
  label: string;
  valueKey: keyof ProfileData;
};

export const contactItems: ContactItem[] = [
  { id: "email", icon: FiMail, label: "Email", valueKey: "email" },
  { id: "phone", icon: FiPhone, label: "Phone", valueKey: "phone" },
  {
    id: "memberSince",
    icon: FiCalendar,
    label: "Member since",
    valueKey: "memberSince",
  },
];
