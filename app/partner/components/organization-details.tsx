import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";
import { Tooltip, TooltipContent, TooltipTrigger } from "~/components/ui/tooltip";
import { FcInfo } from "react-icons/fc";

const organizationTypes = ["NGO", "Foundation", "Government", "Association", "Research Institute", "Others"];

const domains = [
  "General Health",
  "Communicable & Infectious Diseases",
  "Non-Communicable Diseases (NCDs)",
  "Maternal, Newborn, Child & Adolescent Health",
  "Nutrition & Food Security",
  "Environmental & Occupational Health",
  "Sexual & Reproductive Health and Rights (SRHR)",
  "Health Systems Strengthening",
  "Emergency Preparedness & Humanitarian Health",
  "Aging & Geriatric Health",
  "Cross-Cutting & Emerging Areas",
];

interface OrganizationDetailsProps {
  formData: {
    organizationName: string;
    type: string;
    domain: string;
    country: string;
  };
  onInputChange: (field: string, value: string) => void;
}

export default function OrganizationDetails({ formData, onInputChange }: OrganizationDetailsProps) {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex items-center gap-2 mb-4 sm:mb-6">
        <h3 className="text-lg sm:text-xl font-semibold">Organization Details</h3>
        <Tooltip>
          <TooltipTrigger asChild>
            <FcInfo className="w-4.5 h-4.5" />
          </TooltipTrigger>
          <TooltipContent>
            <p>Tell us about your organization&apos;s identity and focus.</p>
          </TooltipContent>
        </Tooltip>
      </div>

      <div className="space-y-2">
        <Label htmlFor="orgName" className="text-sm sm:text-base font-medium">
          Organization Name
        </Label>
        <Input
          id="orgName"
          value={formData.organizationName}
          onChange={(e) => onInputChange("organizationName", e.target.value)}
          className="h-10 sm:h-12 bg-white border-gray-300 text-sm sm:text-base"
          placeholder="Enter organization name"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="type" className="text-sm sm:text-base font-medium">
          Type
        </Label>
        <Select value={formData.type} onValueChange={(value) => onInputChange("type", value)}>
          <SelectTrigger className="h-10 sm:h-12 bg-white border-gray-300 text-sm sm:text-base">
            <SelectValue placeholder="Select organization type" />
          </SelectTrigger>
          <SelectContent>
            {organizationTypes.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="domain" className="text-sm sm:text-base font-medium">
          Domain/Industry
        </Label>
        <Select value={formData.domain} onValueChange={(value) => onInputChange("domain", value)}>
          <SelectTrigger className="h-10 sm:h-12 bg-white border-gray-300 text-sm sm:text-base">
            <SelectValue placeholder="Select domain" />
          </SelectTrigger>
          <SelectContent>
            {domains.map((domain) => (
              <SelectItem key={domain} value={domain}>
                {domain}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="country" className="text-sm sm:text-base font-medium">
          Country
        </Label>
        <Input
          id="country"
          value={formData.country}
          onChange={(e) => onInputChange("country", e.target.value)}
          className="h-10 sm:h-12 bg-white border-gray-300 text-sm sm:text-base"
          placeholder="Enter country"
        />
      </div>
    </div>
  );
}