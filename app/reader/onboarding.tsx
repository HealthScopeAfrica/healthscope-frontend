import { useState, useEffect } from "react"
import { useNavigate, useSearchParams } from "react-router"
import { OnboardingSkeleton } from "~/components/ui/skeleton"
import { WelcomeStep } from "./components/onboarding/welcome-step"
import { HealthTopicsStep } from "./components/onboarding/health-topics-step"
import { AgeGroupStep } from "./components/onboarding/age-group-step"
import { LocationStep } from "./components/onboarding/location-step"

type OnboardingStep = "welcome" | "health-topics" | "age-group" | "location" | "complete"

export default function OnboardingPage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const email = searchParams.get("email") || ""

  const [isLoading, setIsLoading] = useState(true)
  const [currentStep, setCurrentStep] = useState<OnboardingStep>("welcome")
  const [userData, setUserData] = useState({
    fullName: "",
    healthTopics: [] as string[],
    ageGroup: "",
    location: "",
  })

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  const handleWelcomeComplete = (fullName: string) => {
    setUserData((prev) => ({ ...prev, fullName }))
    setCurrentStep("health-topics")
  }

  const handleHealthTopicsContinue = (topics: string[]) => {
    setUserData((prev) => ({ ...prev, healthTopics: topics }))
    setCurrentStep("age-group")
  }

  const handleAgeGroupContinue = (ageGroup: string) => {
    setUserData((prev) => ({ ...prev, ageGroup }))
    setCurrentStep("location")
  }

  const handleLocationContinue = (location: string) => {
    setUserData((prev) => ({ ...prev, location }))
    setCurrentStep("complete")
    // Here you would typically save the user data to your backend
    console.log("[v0] User onboarding complete:", { ...userData, location })
    setTimeout(() => {
      navigate("/reader/dashboard")
    }, 1600)
  }

  // Previous step navigation
  const handlePrevious = () => {
    switch (currentStep) {
      case "health-topics":
        setCurrentStep("welcome")
        break
      case "age-group":
        setCurrentStep("health-topics")
        break
      case "location":
        setCurrentStep("age-group")
        break
      default:
        break
    }
  }

  const handleSkip = () => {
    // Skip to the end and redirect to home
    console.log("[v0] User skipped onboarding")
    navigate("/")
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {isLoading ? (
          <OnboardingSkeleton />
        ) : (
          <>
            {currentStep === "welcome" && <WelcomeStep email={email} onComplete={handleWelcomeComplete} onSkip={handleSkip} />}
            {currentStep === "health-topics" && (
              <HealthTopicsStep onContinue={handleHealthTopicsContinue} onPrevious={handlePrevious} onSkip={handleSkip} />
            )}
            {currentStep === "age-group" && <AgeGroupStep onContinue={handleAgeGroupContinue} onPrevious={handlePrevious} onSkip={handleSkip} />}
            {currentStep === "location" && <LocationStep onContinue={handleLocationContinue} onPrevious={handlePrevious} onSkip={handleSkip} />}
            {currentStep === "complete" && (
              <div className="bg-white rounded-lg shadow-sm p-12 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold mb-2">All set!</h2>
                <p className="text-gray-600">Your account has been created successfully.</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
