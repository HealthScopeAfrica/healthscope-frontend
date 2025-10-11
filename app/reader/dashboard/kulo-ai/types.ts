/**
 * KuloAI Types and Interfaces
 * Centralized type definitions for the KuloAI chat system
 */

export interface ChatMessage {
  id: string
  content: string
  sender: "user" | "kulo"
  timestamp: Date
  type?: "text" | "suggestions" | "error" | "typing"
  metadata?: {
    confidence?: number
    sources?: string[]
    category?: string
  }
}

export interface ChatSession {
  id: string
  title: string
  messages: ChatMessage[]
  createdAt: Date
  updatedAt: Date
  isActive: boolean
}

export interface KuloPersonality {
  name: string
  greeting: string
  avatar: string
  description: string
  expertise: string[]
}

export interface ChatSuggestion {
  id: string
  text: string
  category: "health" | "wellness" | "emergency" | "general"
  icon?: string
}

export interface KuloChatState {
  isOpen: boolean
  isLoading: boolean
  currentSession: ChatSession | null
  sessions: ChatSession[]
  suggestions: ChatSuggestion[]
  isTyping: boolean
  error: string | null
}

export type KuloChatAction = 
  | { type: "TOGGLE_CHAT" }
  | { type: "OPEN_CHAT" }
  | { type: "CLOSE_CHAT" }
  | { type: "START_SESSION" }
  | { type: "END_SESSION" }
  | { type: "ADD_MESSAGE"; payload: ChatMessage }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_TYPING"; payload: boolean }
  | { type: "SET_ERROR"; payload: string | null }
  | { type: "LOAD_SESSIONS"; payload: ChatSession[] }
  | { type: "UPDATE_SESSION"; payload: ChatSession }