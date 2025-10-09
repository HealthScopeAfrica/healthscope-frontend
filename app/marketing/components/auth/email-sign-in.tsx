import * as React from "react"
import { Mail } from "lucide-react"

interface EmailSignInProps {
  onBack: () => void
}

export function EmailSignIn({ onBack }: EmailSignInProps) {
  const [email, setEmail] = React.useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email sign in logic here
    console.log("Sign in with email:", email)
  }

  return (
    <div className="flex flex-col items-center">
      {/* Email Icon */}
      <div className="mb-8">
        <Mail className="h-12 w-12 text-gray-700" strokeWidth={1.5} />
      </div>

      <h1 className="text-4xl font-bold text-center mb-12">Sign in with email</h1>

      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
        <div>
          <label htmlFor="email" className="block text-base font-medium text-gray-900 mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Krisnessa@gmail.com"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-lg focus:outline-none focus:border-gray-900 transition-colors"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Continue
        </button>
      </form>

      <button onClick={onBack} className="mt-8 text-base text-gray-700 hover:underline">
        Back to sign in options
      </button>
    </div>
  )
}
