import { Mail, CheckCircle } from "lucide-react"

interface MagicLinkSentProps {
  email: string
}

export function MagicLinkSent({ email }: MagicLinkSentProps) {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Success Icon */}
      <div className="mb-6 relative">
        <Mail className="h-16 w-16 text-gray-700" strokeWidth={1.5} />
        <CheckCircle className="h-8 w-8 text-green-600 absolute -bottom-1 -right-1 bg-white rounded-full" />
      </div>

      <h1 className="text-3xl font-bold mb-4">Check your email</h1>

      <p className="text-lg text-gray-700 mb-2">A magic link has been sent to</p>

      <p className="text-lg font-semibold text-gray-900 mb-8">{email}</p>

      <p className="text-base text-gray-600 max-w-md mb-8">
        Click the link in the email to complete your sign up. The link will expire in 24 hours.
      </p>

      <div className="w-full max-w-md p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-gray-700">
          Didn't receive the email? Check your spam folder or{" "}
          <button className="text-blue-600 hover:underline font-medium">resend the link</button>.
        </p>
      </div>
    </div>
  )
}