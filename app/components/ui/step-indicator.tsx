interface StepIndicatorProps {
  currentStep: number
  totalSteps: number
}

export function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-center gap-2 mb-8">
      {Array.from({ length: totalSteps }).map((_, index) => {
        const stepNumber = index + 1
        const isActive = stepNumber <= currentStep
        const isCurrentStep = stepNumber === currentStep

        return (
          <div key={stepNumber} className="flex items-center">
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium transition-colors ${
                isActive ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-500"
              }`}
            >
              {stepNumber}
            </div>
            {stepNumber < totalSteps && (
              <div
                className={`w-12 h-0.5 mx-1 transition-colors ${
                  isActive && !isCurrentStep ? "bg-blue-600" : "bg-gray-200"
                }`}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
