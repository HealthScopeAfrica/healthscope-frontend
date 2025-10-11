import * as React from "react"
import { Link } from "react-router";
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
        <svg xmlns="http://www.w3.org/2000/svg" width="76" height="64" viewBox="0 0 76 64" fill="none">
          <g clipPath="url(#clip0_741_2535)">
            <path fillRule="evenodd" clipRule="evenodd" d="M57.5592 5.94694C59.2213 5.15772 61.2108 5.86469 62.0009 7.52864L72.0086 28.6054C72.7978 30.2675 72.0908 32.2571 70.4268 33.0472L40.3167 47.344C38.6545 48.1332 36.665 47.4263 35.8749 45.7623L25.8673 24.6856C25.0781 23.0234 25.785 21.0339 27.449 20.2438L57.5592 5.94694ZM44.9606 31.4742L40.2521 44.4522L67.9395 31.3057L55.045 26.7966L51.7388 32.5443L44.9606 31.4742ZM62.2246 14.3412L56.4044 24.4464L69.132 28.8886L62.2246 14.3412ZM31.0593 29.2741L37.7814 43.4313L42.2748 31.0447L31.0593 29.2741ZM58.6635 8.34729L28.6382 22.6038C28.4699 22.6747 28.3348 22.8069 28.2603 22.9737C28.2283 23.0499 28.215 23.1327 28.2214 23.2151C28.2278 23.2976 28.2538 23.3773 28.2972 23.4477L29.6869 26.3745L50.3585 29.6373L60.8584 11.4453L59.5785 8.7497C59.4653 8.50824 59.3264 8.35869 59.1618 8.30107C59.0806 8.27259 58.9943 8.2619 58.9086 8.26973C58.8229 8.27756 58.7399 8.30371 58.6653 8.34643" fill="#565656"/>
          </g>
          <line x1="13.2898" y1="45.583" x2="26.8399" y2="39.1491" stroke="#565656" strokeWidth="2"/>
          <line x1="12.2312" y1="52.4258" x2="21.2646" y2="48.1365" stroke="#565656" strokeWidth="2"/>
          <defs>
            <clipPath id="clip0_741_2535">
              <rect width="40" height="40" fill="white" transform="translate(22.2927 17.1572) rotate(-25.3992)"/>
            </clipPath>
          </defs>
        </svg>
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

       <Link to="/reader/dashboard">
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Continue
        </button></Link>
      </form>

      <button onClick={onBack} className="mt-8 text-base text-gray-700 hover:underline">
        ← Back to sign in options
      </button>
    </div>
  )
}
