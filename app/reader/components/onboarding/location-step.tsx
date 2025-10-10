import { useState } from "react"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import { StepIndicator } from "~/components/ui/step-indicator"

interface LocationStepProps {
  onContinue: (location: string) => void
  onPrevious: () => void
  onSkip: () => void
}

export function LocationStep({ onContinue, onPrevious, onSkip }: LocationStepProps) {
  const [location, setLocation] = useState("")

  return (
    <div className="w-full max-w-2xl mx-auto">
       <h3 className="text-3xl text-blue-600 font-bold mb-12 text-center">
        Health<span className="text-green-600">Scope</span>
      </h3>
      <StepIndicator currentStep={3} totalSteps={3} />

      <h2 className="text-2xl font-bold text-center mb-3">Where are you located?</h2>
      <p className="text-center text-gray-600 mb-8">
        This helps us provide region-specific health information and resources.
      </p>

      <div className="mb-8">
        <Label htmlFor="location" className="text-base font-medium mb-2 block">
          Country or Region
        </Label>
        <Input
          id="location"
          type="text"
          placeholder="e.g., Nigeria, Kenya, South Africa..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="h-12"
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:justify-between sm:items-center">
        <Button variant="outline" onClick={onPrevious} className="order-1 sm:order-none h-10 w-full sm:w-auto">
          Previous
        </Button>
        <Button variant="ghost" onClick={onSkip} className="order-3 sm:order-none w-full sm:w-auto h-10">
          Skip for later
        </Button>
        <Button onClick={() => onContinue(location)} disabled={!location.trim()} className="order-2 sm:order-none h-10 w-full sm:w-auto">
          Continue
        </Button>
      </div>
    </div>
  )
}