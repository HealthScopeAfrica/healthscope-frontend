/**
 * KuloAI Chat Hook
 * Custom hook for managing KuloAI chat state and interactions
 */

import { useReducer, useCallback, useEffect, useRef } from "react"
import type { KuloChatState, KuloChatAction, ChatMessage, ChatSession } from "../types"
import { CHAT_CONFIG, ERROR_MESSAGES, EMERGENCY_KEYWORDS, EMERGENCY_RESPONSE } from "../config"

/**
 * Initial state for KuloAI chat
 */
const initialState: KuloChatState = {
  isOpen: false,
  isLoading: false,
  currentSession: null,
  sessions: [],
  suggestions: [],
  isTyping: false,
  error: null
}

/**
 * Chat state reducer
 */
function chatReducer(state: KuloChatState, action: KuloChatAction): KuloChatState {
  switch (action.type) {
    case "TOGGLE_CHAT":
      return { ...state, isOpen: !state.isOpen }
    
    case "OPEN_CHAT":
      return { ...state, isOpen: true }
    
    case "CLOSE_CHAT":
      return { ...state, isOpen: false }
    
    case "START_SESSION":
      const newSession: ChatSession = {
        id: generateSessionId(),
        title: "New Chat",
        messages: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        isActive: true
      }
      return {
        ...state,
        currentSession: newSession,
        sessions: [newSession, ...state.sessions.slice(0, CHAT_CONFIG.maxSessions - 1)]
      }
    
    case "END_SESSION":
      return {
        ...state,
        currentSession: null
      }
    
    case "ADD_MESSAGE":
      if (!state.currentSession) return state
      
      const updatedSession = {
        ...state.currentSession,
        messages: [...state.currentSession.messages, action.payload],
        updatedAt: new Date(),
        title: state.currentSession.messages.length === 0 
          ? action.payload.content.slice(0, 30) + "..."
          : state.currentSession.title
      }
      
      return {
        ...state,
        currentSession: updatedSession,
        sessions: state.sessions.map((session: ChatSession) =>
          session.id === updatedSession.id ? updatedSession : session
        )
      }
    
    case "SET_LOADING":
      return { ...state, isLoading: action.payload }
    
    case "SET_TYPING":
      return { ...state, isTyping: action.payload }
    
    case "SET_ERROR":
      return { ...state, error: action.payload }
    
    case "LOAD_SESSIONS":
      return { ...state, sessions: action.payload }
    
    case "UPDATE_SESSION":
      return {
        ...state,
        currentSession: state.currentSession?.id === action.payload.id 
          ? action.payload 
          : state.currentSession,
        sessions: state.sessions.map((session: ChatSession) =>
          session.id === action.payload.id ? action.payload : session
        )
      }
    
    default:
      return state
  }
}

/**
 * Generate unique session ID
 */
function generateSessionId(): string {
  return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}

/**
 * Generate unique message ID
 */
function generateMessageId(): string {
  return `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}

/**
 * Check if message contains emergency keywords
 */
function containsEmergencyKeywords(message: string): boolean {
  const lowercaseMessage = message.toLowerCase()
  return EMERGENCY_KEYWORDS.some((keyword: string) => lowercaseMessage.includes(keyword))
}

/**
 * Mock KuloAI response (replace with actual API call)
 */
async function getKuloResponse(message: string): Promise<ChatMessage> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000))
  
  // Check for emergency keywords
  if (containsEmergencyKeywords(message)) {
    return {
      id: generateMessageId(),
      content: `${EMERGENCY_RESPONSE.title}\n\n${EMERGENCY_RESPONSE.message}`,
      sender: "kulo",
      timestamp: new Date(),
      type: "text",
      metadata: {
        confidence: 1.0,
        category: "emergency"
      }
    }
  }
  
  // Generate mock responses based on message content
  const responses = [
    "That's a great question about health! Based on current medical research, I'd recommend consulting with a healthcare professional for personalized advice.",
    "I understand your concern. Here are some general guidelines that might help, but please remember that individual cases can vary significantly.",
    "Thank you for asking! This is an important health topic. Let me share some evidence-based information that might be helpful.",
    "I appreciate you reaching out about this health concern. While I can provide general information, it's always best to discuss specific symptoms with a qualified healthcare provider."
  ]
  
  return {
    id: generateMessageId(),
    content: responses[Math.floor(Math.random() * responses.length)],
    sender: "kulo",
    timestamp: new Date(),
    type: "text",
    metadata: {
      confidence: 0.85,
      sources: ["WHO Guidelines", "Medical Literature"],
      category: "general"
    }
  }
}

/**
 * Custom hook for KuloAI chat functionality
 */
export function useKuloChat() {
  const [state, dispatch] = useReducer(chatReducer, initialState)
  const abortControllerRef = useRef<AbortController | null>(null)

  /**
   * Toggle chat panel
   */
  const toggleChat = useCallback(() => {
    dispatch({ type: "TOGGLE_CHAT" })
  }, [])

  /**
   * Open chat panel
   */
  const openChat = useCallback(() => {
    dispatch({ type: "OPEN_CHAT" })
    if (!state.currentSession) {
      dispatch({ type: "START_SESSION" })
    }
  }, [state.currentSession])

  /**
   * Close chat panel
   */
  const closeChat = useCallback(() => {
    dispatch({ type: "CLOSE_CHAT" })
    // Cancel any ongoing requests
    if (abortControllerRef.current) {
      abortControllerRef.current.abort()
    }
  }, [])

  /**
   * Send message to Kulo
   */
  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim() || state.isLoading) return

    // Ensure we have an active session
    if (!state.currentSession) {
      dispatch({ type: "START_SESSION" })
    }

    // Add user message
    const userMessage: ChatMessage = {
      id: generateMessageId(),
      content: content.trim(),
      sender: "user",
      timestamp: new Date(),
      type: "text"
    }

    dispatch({ type: "ADD_MESSAGE", payload: userMessage })
    dispatch({ type: "SET_LOADING", payload: true })
    dispatch({ type: "SET_TYPING", payload: true })
    dispatch({ type: "SET_ERROR", payload: null })

    try {
      // Cancel previous request if still pending
      if (abortControllerRef.current) {
        abortControllerRef.current.abort()
      }

      abortControllerRef.current = new AbortController()

      // Get Kulo's response
      const kuloResponse = await getKuloResponse(content)
      
      dispatch({ type: "ADD_MESSAGE", payload: kuloResponse })
    } catch (error) {
      if (error instanceof Error && error.name !== 'AbortError') {
        dispatch({ 
          type: "SET_ERROR", 
          payload: ERROR_MESSAGES.unknownError 
        })
        
        // Add error message to chat
        const errorMessage: ChatMessage = {
          id: generateMessageId(),
          content: "I'm sorry, I'm having trouble responding right now. Please try again.",
          sender: "kulo",
          timestamp: new Date(),
          type: "error"
        }
        
        dispatch({ type: "ADD_MESSAGE", payload: errorMessage })
      }
    } finally {
      dispatch({ type: "SET_LOADING", payload: false })
      dispatch({ type: "SET_TYPING", payload: false })
    }
  }, [state.currentSession, state.isLoading])

  /**
   * Start new chat session
   */
  const startNewSession = useCallback(() => {
    dispatch({ type: "START_SESSION" })
  }, [])

  /**
   * Clear error state
   */
  const clearError = useCallback(() => {
    dispatch({ type: "SET_ERROR", payload: null })
  }, [])

  /**
   * Load chat history from storage
   */
  useEffect(() => {
    const loadChatHistory = () => {
      try {
        const stored = localStorage.getItem("kulo_chat_sessions")
        if (stored) {
          const sessions = JSON.parse(stored)
          dispatch({ type: "LOAD_SESSIONS", payload: sessions })
        }
      } catch (error) {
        console.warn("Failed to load chat history:", error)
      }
    }

    loadChatHistory()
  }, [])

  /**
   * Save chat sessions to localStorage
   */
  useEffect(() => {
    if (state.sessions.length > 0) {
      try {
        localStorage.setItem("kulo_chat_sessions", JSON.stringify(state.sessions))
      } catch (error) {
        console.warn("Failed to save chat history:", error)
      }
    }
  }, [state.sessions])

  /**
   * Cleanup on unmount
   */
  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort()
      }
    }
  }, [])

  return {
    // State
    isOpen: state.isOpen,
    isLoading: state.isLoading,
    isTyping: state.isTyping,
    error: state.error,
    currentSession: state.currentSession,
    sessions: state.sessions,
    messages: state.currentSession?.messages || [],
    
    // Actions
    toggleChat,
    openChat,
    closeChat,
    sendMessage,
    startNewSession,
    clearError
  }
}