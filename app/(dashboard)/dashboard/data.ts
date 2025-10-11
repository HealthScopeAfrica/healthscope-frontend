import { FiBookOpen, FiMessageCircle } from "react-icons/fi";
import { PiHeartbeat } from "react-icons/pi";
import articleOneImage from './assets/article-1.png'
import articleTwoImage from './assets/article-2.png'
import articleThreeImage from './assets/article-3.png'

export const quickActions = [
  {
    id: "assistant",
    icon: FiMessageCircle,
    title: "Talk to Kulo",
    description: "Coming soon · AI health assistant",
  },
  {
    id: "articles",
    icon: FiBookOpen,
    title: "Browse Articles",
    description: "Expert-verified content",
  },
];

export const featuredArticles = [
  {
    id: "malaria",
    trending: true,
    category: "General Health",
    title: "Understanding Malaria Prevention in Sub-Saharan Africa",
    author: "Dr. Amara Okafor",
    readTime: "8 min read",
    image: articleOneImage,
  },
  {
    id: "mental-health",
    category: "Mental Health",
    title: "Mental Health Awareness: Breaking the Stigma",
    author: "Dr. Kwame Asante",
    readTime: "12 min read",
    image: articleTwoImage,
  },
  {
    id: "nutrition",
    trending: true,
    category: "Women's Health",
    title: "Nutrition During Pregnancy: An African Perspective",
    author: "Dr. Fatima Hassan",
    readTime: "10 min read",
    image: articleThreeImage,
  },
];

export const meetKuloCard = {
  title: "Meet Kulo",
  subtitle: "Your AI health assistant · Coming Soon!",
  cta: "Coming Soon",
};

export const healthTipCard = {
  title: "Daily Health Tip",
  tip: "Drink at least 8 glasses of water daily to maintain proper hydration and support your immune system.",
  icon: PiHeartbeat,
};
