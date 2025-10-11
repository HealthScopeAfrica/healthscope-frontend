import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Tooltip, TooltipContent, TooltipTrigger } from "~/components/ui/tooltip";
import { Info } from "lucide-react";

interface ContactPersonProps {
  formData: {
    firstName: string;
    lastName: string;
    contactPhone: string;
    contactEmail: string;
  };
  onInputChange: (field: string, value: string) => void;
}

export default function ContactPerson({ formData, onInputChange }: ContactPersonProps) {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex items-center gap-2 mb-4 sm:mb-6">
        <h3 className="text-lg sm:text-xl font-semibold">Contact Person</h3>
        <Tooltip>
          <TooltipTrigger asChild>
            <button type="button" className="text-gray-500 hover:text-gray-700">
              <Info className="h-4 w-4" />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Who should we reach out to regarding this partnership?</p>
          </TooltipContent>
        </Tooltip>
      </div>

      <div className="space-y-2">
        <Label htmlFor="firstName" className="text-sm sm:text-base font-medium">
          First Name
        </Label>
        <Input
          id="firstName"
          value={formData.firstName}
          onChange={(e) => onInputChange("firstName", e.target.value)}
          className="h-10 sm:h-12 bg-white border-gray-300 text-sm sm:text-base"
          placeholder="Enter first name"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="lastName" className="text-sm sm:text-base font-medium">
          Last Name
        </Label>
        <Input
          id="lastName"
          value={formData.lastName}
          onChange={(e) => onInputChange("lastName", e.target.value)}
          className="h-10 sm:h-12 bg-white border-gray-300 text-sm sm:text-base"
          placeholder="Enter last name"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="contactPhone" className="text-sm sm:text-base font-medium">
          Phone
        </Label>
        <Input
          id="contactPhone"
          type="tel"
          value={formData.contactPhone}
          onChange={(e) => onInputChange("contactPhone", e.target.value)}
          className="h-10 sm:h-12 bg-white border-gray-300 text-sm sm:text-base"
          placeholder="Enter phone number"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="contactEmail" className="text-sm sm:text-base font-medium">
          Email
        </Label>
        <Input
          id="contactEmail"
          type="email"
          value={formData.contactEmail}
          onChange={(e) => onInputChange("contactEmail", e.target.value)}
          className="h-10 sm:h-12 bg-white border-gray-300 text-sm sm:text-base"
          placeholder="Enter email address"
        />
      </div>
    </div>
  );
}