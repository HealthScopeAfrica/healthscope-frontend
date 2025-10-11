/**
 * KuloAI Configuration and Constants
 * Centralized configuration for the KuloAI system
 */

import type { KuloPersonality, ChatSuggestion } from "./types"

/**
 * Kulo AI Personality Configuration
 */
export const KULO_PERSONALITY: KuloPersonality = {
  name: "Kulo",
  greeting: "Hi! I'm Kulo, your AI health companion. How can I help you today?",
  avatar: "/kulo-avatar.png", // TODO: Add actual avatar image
  description: "Kulo is an AI health assistant trained on trusted medical sources to provide reliable health information.",
  expertise: [
    "General Health Information",
    "Wellness Tips",
    "Symptom Guidance",
    "Nutrition Advice",
    "Mental Health Support",
    "Preventive Care"
  ]
}

/**
 * Chat Suggestions for Quick Interactions
 */
export const CHAT_SUGGESTIONS: ChatSuggestion[] = [
  {
    id: "health-general",
    text: "General health questions",
    category: "health",
    icon: "❤️"
  },
  {
    id: "nutrition",
    text: "Nutrition and diet advice",
    category: "wellness",
    icon: "🥗"
  },
  {
    id: "mental-health",
    text: "Mental health support",
    category: "wellness",
    icon: "🧠"
  },
  {
    id: "symptoms",
    text: "Symptom checker",
    category: "health",
    icon: "🩺"
  },
  {
    id: "emergency",
    text: "Emergency guidance",
    category: "emergency",
    icon: "🚨"
  },
  {
    id: "prevention",
    text: "Preventive care tips",
    category: "wellness",
    icon: "🛡️"
  }
]

/**
 * Chat Configuration
 */
export const CHAT_CONFIG = {
  maxMessages: 100,
  maxMessageLength: 1000,
  typingDelay: 1000,
  autoSaveInterval: 30000, // 30 seconds
  sessionTimeout: 3600000, // 1 hour
  maxSessions: 10,
  
  // API Configuration (for future implementation)
  api: {
    baseUrl: "/api/kulo",
    endpoints: {
      chat: "/chat",
      sessions: "/sessions",
      feedback: "/feedback"
    },
    timeout: 10000
  },

  // UI Configuration
  ui: {
    animationDuration: 300,
    showTypingIndicator: true,
    showTimestamps: false,
    showConfidenceScores: false,
    enableVoiceInput: false, // TODO: Implement voice input
    enableSuggestions: true
  }
}

/**
 * Emergency Keywords and Responses
 */
export const EMERGENCY_KEYWORDS = [
  "emergency", "urgent", "critical", "chest pain", "difficulty breathing",
  "severe bleeding", "unconscious", "overdose", "suicide", "heart attack",
  "stroke", "choking", "severe injury"
]

export const EMERGENCY_RESPONSE = {
  title: "🚨 This seems like an emergency",
  message: "If this is a medical emergency, please call your local emergency number immediately or go to the nearest emergency room. I'm here to provide general health information, but cannot replace emergency medical care.",
  actions: [
    { text: "Call Emergency Services", action: "emergency" },
    { text: "Find Nearest Hospital", action: "hospital" },
    { text: "Continue Chat", action: "continue" }
  ]
}

/**
 * Default Error Messages
 */
export const ERROR_MESSAGES = {
  networkError: "I'm having trouble connecting right now. Please check your internet connection and try again.",
  serverError: "I'm experiencing some technical difficulties. Please try again in a moment.",
  rateLimitError: "You're chatting quite actively! Please wait a moment before sending another message.",
  unknownError: "Something unexpected happened. Please try refreshing the page.",
  sessionExpired: "Your chat session has expired. Starting a new conversation..."
}

/**
 * Health Disclaimer
 */
export const HEALTH_DISCLAIMER = `
⚠️ **Important Health Disclaimer**

I'm Kulo, an AI assistant designed to provide general health information and guidance. Please remember:

• I cannot diagnose medical conditions or replace professional medical advice
• For serious symptoms or emergencies, contact healthcare professionals immediately
• Always consult with qualified healthcare providers for personalized medical advice
• The information I provide is for educational purposes only

Your health and safety are important. When in doubt, seek professional medical care.
`