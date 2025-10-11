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
  },
  
];

export type ReadingHistoryItem = (typeof readingHistory)[number];

export const settingsOverview = [
  {
    id: "account",
    title: "Account Settings",
    description: "Manage your password, security, and account preferences",
    icon: FiShield,
  },
  {
    id: "notifications",
    title: "Notifications",
    description: "Control how and when you receive notifications",
    icon: FiBell,
  },
  {
    id: "privacy",
    title: "Privacy & Data",
    description: "Manage your privacy and data sharing preferences",
    icon: FiSliders,
  },
  {
    id: "content",
    title: "Content Preferences",
    description: "Customize your reading experience and recommendations",
    icon: FiBookOpen,
  },
];

export const quickSettings = [
  {
    id: "emailNotifications",
    label: "Email Notifications",
    description: "Weekly health newsletter and article updates",
    enabled: true,
  },
  {
    id: "profileVisibility",
    label: "Profile Visibility",
    description: "Make your profile visible to other users",
    enabled: true,
  },
  {
    id: "dataSharing",
    label: "Data Sharing",
    description: "Share anonymized data to improve HealthScope",
    enabled: false,
  },
];

export const helpLinks = [
  {
    id: "support",
    label: "Contact Support",
    description: "Get help from the HealthScope team",
    icon: FiHelpCircle,
  },
  {
    id: "privacy",
    label: "Privacy Policy",
    description: "Learn how we protect your data",
    icon: FiShield,
  },
  {
    id: "terms",
    label: "Terms of Use",
    description: "Review the terms & conditions",
    icon: FiFileText,
  },
];

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
