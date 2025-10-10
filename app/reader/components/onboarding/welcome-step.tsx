import { useState } from "react";
import {Button }from "~/components/ui/button";
import { Label } from "~/components/ui/label";

interface WelcomeStepProps {
  email: string;
  onComplete: (fullName: string) => void;
  onSkip: () => void;
}

export function WelcomeStep({ email, onComplete, onSkip }: WelcomeStepProps) {
  const [fullName, setFullName] = useState("");

  return (
    <div className="w-full max-w-md mx-auto text-center">
      <h3 className="text-3xl text-blue-600 font-bold mb-4">
        Health<span className="text-green-600">Scope</span>
      </h3>
      {/* Medical Cross Icon */}
      <div className="mb-8 flex justify-center">
        <svg
          width="168"
          height="172"
          viewBox="0 0 168 172"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M63 14.7236C61.1435 14.7236 59.363 15.4611 58.0503 16.7739C56.7375 18.0866 56 19.8671 56 21.7236V53.2236C56 55.0801 55.2625 56.8606 53.9497 58.1734C52.637 59.4861 50.8565 60.2236 49 60.2236H21C19.1435 60.2236 17.363 60.9611 16.0503 62.2739C14.7375 63.5866 14 65.3671 14 67.2236V109.014C14 110.87 14.7375 112.651 16.0503 113.963C17.363 115.276 19.1435 116.014 21 116.014H49C50.8565 116.014 52.637 116.751 53.9497 118.064C55.2625 119.377 56 121.157 56 123.014V151.014C56 152.87 56.7375 154.651 58.0503 155.963C59.363 157.276 61.1435 158.014 63 158.014H105C106.857 158.014 108.637 157.276 109.95 155.963C111.263 154.651 112 152.87 112 151.014V123.014C112 121.157 112.737 119.377 114.05 118.064C115.363 116.751 117.143 116.014 119 116.014H147C148.857 116.014 150.637 115.276 151.95 113.963C153.263 112.651 154 110.87 154 109.014V67.0136C154 65.1571 153.263 63.3766 151.95 62.0639C150.637 60.7511 148.857 60.0136 147 60.0136H119C117.143 60.0136 115.363 59.2761 114.05 57.9634C112.737 56.6506 112 54.8701 112 53.0136V21.7236C112 19.8671 111.263 18.0866 109.95 16.7739C108.637 15.4611 106.857 14.7236 105 14.7236H63ZM42 21.7236C42 16.1541 44.2125 10.8127 48.1508 6.87439C52.089 2.93613 57.4305 0.723633 63 0.723633H105C110.57 0.723633 115.911 2.93613 119.849 6.87439C123.788 10.8127 126 16.1541 126 21.7236V45.9996H147C152.57 45.9996 157.911 48.2121 161.849 52.1504C165.788 56.0886 168 61.4301 168 66.9996V109C168 114.569 165.788 119.911 161.849 123.849C157.911 127.787 152.57 130 147 130H126V151C126 156.569 123.788 161.911 119.849 165.849C115.911 169.787 110.57 172 105 172H63C57.4305 172 52.089 169.787 48.1508 165.849C44.2125 161.911 42 156.569 42 151V130H21C15.4305 130 10.089 127.787 6.15076 123.849C2.21249 119.911 0 114.569 0 109V67.2376C0 61.6681 2.21249 56.3267 6.15076 52.3884C10.089 48.4501 15.4305 46.2376 21 46.2376H42V21.7236Z"
            fill="#4C7DEA"
          />
        </svg>
      </div>

      <h1 className="text-3xl font-bold mb-4">Welcome to HealthScope!</h1>

      <p className="text-lg text-gray-700 mb-8">
        We need a little more information to finish creating your account.
      </p>

      <div className="mb-6 text-left">
        <Label htmlFor="fullName" className="text-base font-medium mb-2 block">
          Your full name
        </Label>
        <input
          id="fullName"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full px-4 py-3 border-b-2 border-0 border-gray-300 rounded-lg text-lg focus:outline-none focus:border-gray-900 transition-colors"
          placeholder="John Doe"
        />
      </div>

      <p className="text-base text-gray-700 mb-8">
        {/* Your email is{" "}
        <span className="font-semibold">{email || "user email"}</span> */}
      </p>

      <Button
        onClick={() => onComplete(fullName)}
        disabled={!fullName.trim()}
        className="w-full h-12 text-base"
      >
        Create Account
      </Button>
      <br />
      <Button variant="ghost" onClick={onSkip}>
        Skip for later
      </Button>
    </div>
  );
}
