import { useState } from "react"
import { Heart, Brain, User, Activity, Smile } from "lucide-react"
import { Button } from "~/components/ui/button"
import { StepIndicator } from "~/components/ui/step-indicator"
import { Link } from "react-router";
interface HealthTopicsStepProps {
  onContinue: (topics: string[]) => void
  onPrevious: () => void
  onSkip: () => void
}

const healthTopics = [
  { id: "general", label: "General Health", icon: Activity, color: "bg-blue-50 text-blue-600 border-blue-200" },
  { id: "mental", label: "Mental Health", icon: Brain, color: "bg-purple-50 text-purple-600 border-purple-200" },
  { id: "womens", label: "Women's Health", icon: Heart, color: "bg-pink-50 text-pink-600 border-pink-200" },
  { id: "fitness", label: "Fitness & Nutrition", icon: Activity, color: "bg-green-50 text-green-600 border-green-200" },
  { id: "elderly", label: "Elderly Care", icon: User, color: "bg-orange-50 text-orange-600 border-orange-200" },
  { id: "child", label: "Child Health", icon: Smile, color: "bg-emerald-50 text-emerald-600 border-emerald-200" },
]

export function HealthTopicsStep({ onContinue, onPrevious, onSkip }: HealthTopicsStepProps) {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([])

  const toggleTopic = (topicId: string) => {
    setSelectedTopics((prev) => (prev.includes(topicId) ? prev.filter((id) => id !== topicId) : [...prev, topicId]))
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <h3 className="text-3xl text-blue-600 font-bold mb-12 text-center">
        Health<span className="text-green-600">Scope</span>
      </h3>
      <StepIndicator currentStep={1} totalSteps={3} />

      <h2 className="text-2xl font-bold text-center mb-3">What health topics interest you most?</h2>
      <p className="text-center text-gray-600 mb-8">
        Select the areas where you'd like to receive personalized content and insights.
      </p>

      <div className="grid grid-cols-2 gap-4 mb-8">
        {healthTopics.map((topic) => {
          const Icon = topic.icon
          const isSelected = selectedTopics.includes(topic.id)

          return (
            <button
              key={topic.id}
              onClick={() => toggleTopic(topic.id)}
              className={`flex items-center gap-3 p-4 rounded-lg border-2 transition-all ${
                isSelected ? `${topic.color} border-current` : "bg-white border-gray-200 hover:border-gray-300"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="font-medium text-gray-900">{topic.label}</span>
            </button>
          )
        })}
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:justify-between sm:items-center">
        <Button variant="grayGhost" onClick={onPrevious} className="order-1 sm:order-none h-10 w-full sm:w-auto">
          Previous
        </Button>
        <Link to="/reader/dashboard">
          <Button variant="ghost" onClick={onSkip} className="order-3 sm:order-none w-full sm:w-auto h-10">
            Skip for later
          </Button>
        </Link>
        <Button onClick={() => onContinue(selectedTopics)} disabled={selectedTopics.length === 0} className="order-2 sm:order-none h-10 w-full sm:w-auto">
          Continue
        </Button>
      </div>
    </div>
  )
}
