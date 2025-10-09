// Public auth provider for marketing pages - handles sign-in/sign-up modals
import * as React from "react"
import { AuthModal } from "./auth-modal"
import { SignInOptions } from "./sign-in-options"
import { SignUpOptions } from "./sign-up-options"
import { EmailSignIn } from "./email-sign-in"
import { EmailSignUp } from "./email-sign-up"
import { MagicLinkSent } from "./magic-link-sent"

type AuthView = "sign-in-options" | "sign-up-options" | "email-sign-in" | "email-sign-up" | "magic-link-sent"

interface PublicAuthContextType {
  openSignIn: () => void
  openSignUp: () => void
}

const PublicAuthContext = React.createContext<PublicAuthContextType | null>(null)

// Hook for components to trigger auth modals
export function usePublicAuth() {
  const context = React.useContext(PublicAuthContext)
  if (!context) {
    throw new Error("usePublicAuth must be used within PublicAuthProvider")
  }
  return context
}

interface PublicAuthProviderProps {
  children: React.ReactNode
}

export function PublicAuthProvider({ children }: PublicAuthProviderProps) {
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [authView, setAuthView] = React.useState<AuthView>("sign-in-options")
  const [userEmail, setUserEmail] = React.useState("")

  // Public API - exposed to Navigation, Hero, etc.
  const openSignIn = () => {
    setIsModalOpen(true)
    setAuthView("sign-in-options")
  }

  const openSignUp = () => {
    setIsModalOpen(true)
    setAuthView("sign-up-options")
  }

  // Modal state management
  const handleCloseModal = () => {
    setIsModalOpen(false)
    setAuthView("sign-in-options")
    setUserEmail("")
  }

  // Flow navigation between auth steps
  const handleEmailSignIn = () => setAuthView("email-sign-in")
  const handleEmailSignUp = () => setAuthView("email-sign-up")
  const handleBackToSignIn = () => setAuthView("sign-in-options")
  const handleBackToSignUp = () => setAuthView("sign-up-options")
  const handleSwitchToSignUp = () => setAuthView("sign-up-options")
  const handleSwitchToSignIn = () => setAuthView("sign-in-options")

  // Complete sign-up flow - store email and show confirmation
  const handleCreateAccount = (email: string) => {
    setUserEmail(email)
    setAuthView("magic-link-sent")
  }

  // Google OAuth handlers - TODO: implement actual OAuth
  const handleGoogleSignIn = () => {
    console.log("Sign in with Google")
    // handle Google sign-in flow
  }

  const handleGoogleSignUp = () => {
    console.log("Sign up with Google")
    // handle Google sign-up flow
  }

  const contextValue = {
    openSignIn,
    openSignUp,
  }

  return (
    <PublicAuthContext.Provider value={contextValue}>
      {children}
      
      {/* Auth modal with current step */}
      <AuthModal isOpen={isModalOpen} onClose={handleCloseModal}>
        {authView === "sign-in-options" && (
          <SignInOptions
            onEmailSignIn={handleEmailSignIn}
            onGoogleSignIn={handleGoogleSignIn}
            onSwitchToSignUp={handleSwitchToSignUp}
          />
        )}
        {authView === "sign-up-options" && (
          <SignUpOptions
            onEmailSignUp={handleEmailSignUp}
            onGoogleSignUp={handleGoogleSignUp}
            onSwitchToSignIn={handleSwitchToSignIn}
          />
        )}
        {authView === "email-sign-in" && <EmailSignIn onBack={handleBackToSignIn} />}
        {authView === "email-sign-up" && (
          <EmailSignUp onBack={handleBackToSignUp} onCreateAccount={handleCreateAccount} />
        )}
        {authView === "magic-link-sent" && <MagicLinkSent email={userEmail} />}
      </AuthModal>
    </PublicAuthContext.Provider>
  )
}