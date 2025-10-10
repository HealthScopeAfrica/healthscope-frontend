import { X, Send, Mic } from "lucide-react"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Badge } from "~/components/ui/badge"
import { useEffect } from "react"

interface KuloChatPanelProps {
  isOpen: boolean
  onClose: () => void
}

export function KuloChatPanel({ isOpen, onClose }: KuloChatPanelProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/20 z-40 transition-opacity" onClick={onClose} />}

      {/* Sliding Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          borderTopLeftRadius: "2rem",
          borderBottomLeftRadius: "2rem",
        }}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">K</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Kulo</h3>
                <p className="text-xs text-gray-500">AI Health Assistant</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Coming Soon Content */}
          <div className="flex-1 flex items-center justify-center p-6">
            <div className="text-center max-w-sm">
              <div className="w-20 h-20 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-4xl">🤖</span>
              </div>
              <Badge className="mb-4 bg-blue-500">Coming Soon</Badge>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Meet Kulo</h4>
              <p className="text-gray-600 mb-6">
                Your AI-powered health assistant is currently under development. Soon you'll be able to ask health
                questions and get instant, verified answers!
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <p>✓ 24/7 health information</p>
                <p>✓ Personalized recommendations</p>
                <p>✓ Voice and text support</p>
              </div>
            </div>
          </div>

          {/* Input Area (Disabled) */}
          <div className="p-6 border-t border-gray-200 bg-gray-50">
            <div className="flex items-center gap-3 mb-3">
              <Input 
                placeholder="Type your health question..." 
                disabled 
                className="flex-1 bg-gray-50 border-gray-200 text-gray-400 placeholder:text-gray-400 cursor-not-allowed h-12 rounded-xl"
              />
              <Button 
                size="icon" 
                disabled 
                className="bg-blue-400/50 hover:bg-blue-400/50 text-white cursor-not-allowed h-12 w-12 rounded-xl"
              >
                <Send className="h-5 w-5" />
              </Button>
              <Button 
                size="icon" 
                disabled 
                variant="outline"
                className="border-gray-50 bg-white text-gray-400 hover:bg-gray-100 cursor-not-allowed h-12 w-12 rounded-xl"
              >
                <Mic className="h-5 w-5" />
              </Button>
            </div>
            <p className="text-xs text-center text-gray-500 font-medium">Chat functionality coming soon</p>
          </div>
        </div>
      </div>
    </>
  )
}