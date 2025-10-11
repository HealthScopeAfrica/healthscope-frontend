import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { Tooltip, TooltipContent, TooltipTrigger } from "~/components/ui/tooltip";
import { Info } from "lucide-react";

interface ContactInformationProps {
  formData: {
    officialEmail: string;
    phoneNumber: string;
    website: string;
    address: string;
  };
  onInputChange: (field: string, value: string) => void;
}

export default function ContactInformation({ formData, onInputChange }: ContactInformationProps) {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex items-center gap-2 mb-4 sm:mb-6">
        <h3 className="text-lg sm:text-xl font-semibold">Contact Information</h3>
        <Tooltip>
          <TooltipTrigger asChild>
            <button type="button" className="text-gray-500 hover:text-gray-700">
              <Info className="h-4 w-4" />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Provide your official contact details</p>
          </TooltipContent>
        </Tooltip>
      </div>

      <div className="space-y-2">
        <Label htmlFor="officialEmail" className="text-sm sm:text-base font-medium">
          Official Email
        </Label>
        <Input
          id="officialEmail"
          type="email"
          value={formData.officialEmail}
          onChange={(e) => onInputChange("officialEmail", e.target.value)}
          className="h-10 sm:h-12 bg-white border-gray-300 text-sm sm:text-base"
          placeholder="Enter official email"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phoneNumber" className="text-sm sm:text-base font-medium">
          Phone Number
        </Label>
        <Input
          id="phoneNumber"
          type="tel"
          value={formData.phoneNumber}
          onChange={(e) => onInputChange("phoneNumber", e.target.value)}
          className="h-10 sm:h-12 bg-white border-gray-300 text-sm sm:text-base"
          placeholder="Enter phone number"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="website" className="text-sm sm:text-base font-medium">
          Website
        </Label>
        <Input
          id="website"
          type="url"
          value={formData.website}
          onChange={(e) => onInputChange("website", e.target.value)}
          className="h-10 sm:h-12 bg-white border-gray-300 text-sm sm:text-base"
          placeholder="Enter website URL"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="address" className="text-sm sm:text-base font-medium">
          Address
        </Label>
        <Textarea
          id="address"
          value={formData.address}
          onChange={(e) => onInputChange("address", e.target.value)}
          className="bg-white border-gray-300 min-h-20 sm:min-h-24 resize-none text-sm sm:text-base"
          placeholder="Enter organization address"
        />
      </div>
    </div>
  );
}