import { useState } from "react"
import { Button } from "~/components/ui/button"
import { StepIndicator } from "~/components/ui/step-indicator"

interface AgeGroupStepProps {
  onContinue: (ageGroup: string) => void
  onPrevious: () => void
  onSkip: () => void
}

const ageGroups = [
  { id: "18-25", label: "18-25 years" },
  { id: "26-35", label: "26-35 years" },
  { id: "36-45", label: "36-45 years" },
  { id: "46-55", label: "46-55 years" },
  { id: "56+", label: "56+ years" },
]

export function AgeGroupStep({ onContinue, onPrevious, onSkip }: AgeGroupStepProps) {
  const [selectedAge, setSelectedAge] = useState<string>("")

  return (
    <div className="w-full max-w-2xl mx-auto">
       <h3 className="text-3xl text-blue-600 font-bold mb-8 text-center">
        Health<span className="text-green-600">Scope</span>
      </h3>
      <StepIndicator currentStep={2} totalSteps={3} />

      <h2 className="text-2xl font-bold text-center mb-3">What's your age group?</h2>
      <p className="text-center text-gray-600 mb-8">
        This helps us provide age-appropriate health information and recommendations.
      </p>

      <div className="space-y-3 mb-8">
        {ageGroups.map((group) => (
          <button
            key={group.id}
            onClick={() => setSelectedAge(group.id)}
            className={`w-full p-4 rounded-lg border-2 text-left font-medium transition-all ${
              selectedAge === group.id
                ? "bg-blue-50 border-blue-600 text-gray-900"
                : "bg-white border-gray-200 hover:border-gray-300 text-gray-900"
            }`}
          >
            {group.label}
          </button>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:justify-between sm:items-center">
        <Button variant="grayGhost" onClick={onPrevious} className="order-1 sm:order-none h-10 w-full sm:w-auto">
          Previous
        </Button>
        <Button variant="ghost" onClick={onSkip} className="order-3 sm:order-none w-full sm:w-auto h-10">
          Skip for later
        </Button>
        <Button onClick={() => onContinue(selectedAge)} disabled={!selectedAge} className="order-2 sm:order-none h-10 w-full sm:w-auto">
          Continue
        </Button>
      </div>
    </div>
  )
}
