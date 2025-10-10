/**
 * KuloAI Chat Panel Component
 * Main chat interface with message display and input
 */

import { useState, useRef, useEffect } from "react"
import { X, Send, MessageCircle, Plus, AlertTriangle } from "lucide-react"
import { useKuloChat } from "../hooks/use-kulo-chat"
import type { ChatMessage } from "../types"
import { CHAT_CONFIG, HEALTH_DISCLAIMER } from "../config"

interface ChatPanelProps {
  className?: string
}

/**
 * Individual message component
 */
function ChatMessageComponent({ message }: { message: ChatMessage }) {
  const isUser = message.sender === "user"
  const isError = message.type === "error"
  
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className={`max-w-[80%] p-3 rounded-lg ${
          isUser
            ? "bg-blue-600 text-white"
            : isError
            ? "bg-red-50 border border-red-200 text-red-800"
            : "bg-gray-100 text-gray-900"
        }`}
      >
        {isError && (
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="h-4 w-4" />
            <span className="text-sm font-medium">Error</span>
          </div>
        )}
        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
        <p className="text-xs opacity-70 mt-1">
          {message.timestamp.toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </p>
        {message.metadata?.confidence && (
          <p className="text-xs opacity-60 mt-1">
            Confidence: {Math.round(message.metadata.confidence * 100)}%
          </p>
        )}
      </div>
    </div>
  )
}

/**
 * Typing indicator component
 */
function TypingIndicator() {
  return (
    <div className="flex justify-start mb-4">
      <div className="bg-gray-100 text-gray-900 p-3 rounded-lg">
        <div className="flex items-center gap-1">
          <span className="text-sm">Kulo is typing</span>
          <div className="flex gap-1">
            <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"></div>
            <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
            <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * Welcome message component
 */
function WelcomeMessage() {
  return (
    <div className="flex justify-center mb-6">
      <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg max-w-md">
        <div className="flex items-center gap-2 mb-2">
          <MessageCircle className="h-5 w-5 text-blue-600" />
          <h3 className="font-medium text-blue-900">Welcome to KuloAI</h3>
        </div>
        <p className="text-sm text-blue-800 mb-3">
          I'm here to help with health-related questions and provide general medical information.
        </p>
        <div className="bg-yellow-50 border border-yellow-200 p-3 rounded">
          <p className="text-xs text-yellow-800">
            <strong>Important:</strong> {HEALTH_DISCLAIMER}
          </p>
        </div>
      </div>
    </div>
  )
}

/**
 * Chat suggestions component
 */
function ChatSuggestions({ onSuggestionClick }: { onSuggestionClick: (text: string) => void }) {
  const suggestions = [
    "What are common symptoms of dehydration?",
    "How can I improve my sleep quality?",
    "What's a healthy daily water intake?",
    "Tell me about stress management techniques"
  ]

  return (
    <div className="mb-4">
      <p className="text-sm text-gray-600 mb-2">Try asking:</p>
      <div className="space-y-2">
        {suggestions.map((suggestion, index) => (
          <button
            key={index}
            onClick={() => onSuggestionClick(suggestion)}
            className="block w-full text-left p-2 text-sm bg-gray-50 hover:bg-gray-100 rounded border text-gray-700 transition-colors"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  )
}

/**
 * Main chat panel component
 */
export function KuloChatPanel({ className = "" }: ChatPanelProps) {
  const {
    isOpen,
    isLoading,
    isTyping,
    error,
    currentSession,
    messages,
    toggleChat,
    closeChat,
    sendMessage,
    startNewSession,
    clearError
  } = useKuloChat()

  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isTyping])

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const messageText = input.trim()
    setInput("")
    await sendMessage(messageText)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion)
    inputRef.current?.focus()
  }

  if (!isOpen) {
    return (
      <button
        onClick={toggleChat}
        className={`fixed bottom-4 right-4 z-50 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${className}`}
        aria-label="Open KuloAI Chat"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    )
  }

  return (
    <div className={`fixed bottom-4 right-4 z-50 bg-white rounded-lg shadow-2xl border w-80 h-96 flex flex-col ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b bg-blue-600 text-white rounded-t-lg">
        <div className="flex items-center gap-2">
          <MessageCircle className="h-5 w-5" />
          <h3 className="font-medium">KuloAI Health Assistant</h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={startNewSession}
            className="p-1 hover:bg-blue-700 rounded"
            title="Start new conversation"
          >
            <Plus className="h-4 w-4" />
          </button>
          <button
            onClick={closeChat}
            className="p-1 hover:bg-blue-700 rounded"
            title="Close chat"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Error Display */}
      {error && (
        <div className="p-3 bg-red-50 border-b border-red-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-red-600" />
              <p className="text-sm text-red-800">{error}</p>
            </div>
            <button
              onClick={clearError}
              className="text-red-600 hover:text-red-800"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4">
        {messages.length === 0 ? (
          <div>
            <WelcomeMessage />
            <ChatSuggestions onSuggestionClick={handleSuggestionClick} />
          </div>
        ) : (
          <div>
            {messages.map((message: ChatMessage) => (
              <ChatMessageComponent key={message.id} message={message} />
            ))}
            {isTyping && <TypingIndicator />}
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex gap-2">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask me about your health..."
            className="flex-1 p-2 border rounded-lg resize-none text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={1}
            maxLength={CHAT_CONFIG.maxMessageLength}
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            title="Send message"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
        <div className="flex justify-between items-center mt-2">
          <p className="text-xs text-gray-500">
            {input.length}/{CHAT_CONFIG.maxMessageLength}
          </p>
          <p className="text-xs text-gray-500">
            Press Enter to send, Shift+Enter for new line
          </p>
        </div>
      </form>
    </div>
  )
}