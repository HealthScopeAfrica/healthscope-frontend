"use client";

import { useState } from "react";
import Button from "~/components/button";
import { TooltipProvider } from "~/components/ui/tooltip";
import { ArrowLeft, ArrowRight } from "lucide-react";
import OrganizationDetails from "~/partner/components/organization-details";
import ContactInformation from "~/partner/components/contact-information";
import ContactPerson from "~/partner/components/contact-person";
import LoginForm from "~/partner/components/login-form";

export default function PartnerAuthPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isOnboarding, setIsOnboarding] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    // Step 1 - Organization Details
    organizationName: "",
    type: "",
    domain: "",
    country: "",
    // Step 2 - Contact Information
    officialEmail: "",
    phoneNumber: "",
    website: "",
    address: "",
    // Step 3 - Contact Person
    firstName: "",
    lastName: "",
    contactPhone: "",
    contactEmail: "",
    // Login
    loginEmail: "",
    password: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Partner onboarding submitted:", {
      organizationDetails: {
        name: formData.organizationName,
        type: formData.type,
        domain: formData.domain,
        country: formData.country,
      },
      contactInformation: {
        email: formData.officialEmail,
        phone: formData.phoneNumber,
        website: formData.website,
        address: formData.address,
      },
      contactPerson: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.contactPhone,
        email: formData.contactEmail,
      },
    });
    // Ready for API integration
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Partner login:", {
      email: formData.loginEmail,
      password: formData.password,
    });
    // Ready for API integration
  };

  const toggleOnboarding = () => {
    setIsOnboarding(!isOnboarding);
    setCurrentStep(1);
  };

  return (
    <TooltipProvider>
      <div className="h-[90vh] flex flex-col-reverse lg:flex-row">
        {/* Left Side - Content */}
        <div className="flex-1 bg-gradient-to-br from-blue-50 to-green-50 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-20 flex flex-col justify-center relative overflow-hidden">
          {/* Health-themed background illustration */}
          <div className="absolute inset-0 opacity-10">
            <svg
              className="absolute top-10 left-10 w-20 h-20 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              className="absolute bottom-20 right-16 w-16 h-16 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              className="absolute top-1/2 right-1/4 w-12 h-12 text-blue-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          <div className="max-w-xl mx-auto lg:mx-0 relative z-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-balance leading-tight">
              Join a Trusted Partner Network
            </h1>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed text-balance text-gray-600">
              Partner with HealthScope to amplify expert voices, manage health
              contributors, and combat misinformation at scale.
            </p>

            <div className="space-y-3 mb-8 sm:mb-12">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">
                  Trusted by leading health organizations
                </span>
              </div>
              {/* <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">
                  Manage contributors and track impact
                </span>
              </div> */}
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">
                  Invite & manage contributors
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span className="text-gray-700">
                  Generate impact metrics & analytics
                </span>
              </div>
            </div>

            <Button
              onClick={toggleOnboarding}
              disabled={isOnboarding}
              className="shrink-0"
            >
              {isOnboarding ? "Starting..." : "Become a Partner"}
            </Button>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="flex-1 bg-green-50 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-20 flex flex-col justify-center">
          <div className="max-w-md w-full mx-auto">
            {!isOnboarding ? (
              <LoginForm
                formData={{
                  loginEmail: formData.loginEmail,
                  password: formData.password,
                }}
                onInputChange={handleInputChange}
                onSubmit={handleLogin}
              />
            ) : (
              // Onboarding Form
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="flex items-center justify-between mb-6 sm:mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold">
                    Partner Onboarding
                  </h2>
                  <span className="text-base sm:text-lg font-medium text-gray-600">
                    {currentStep}/3
                  </span>
                </div>

                {/* Step 1: Organization Details */}
                {currentStep === 1 && (
                  <>
                    <OrganizationDetails
                      formData={{
                        organizationName: formData.organizationName,
                        type: formData.type,
                        domain: formData.domain,
                        country: formData.country,
                      }}
                      onInputChange={handleInputChange}
                    />

                    {/* Already have account link */}
                    <div className="pt-4 text-center">
                      <button
                        type="button"
                        onClick={toggleOnboarding}
                        className="text-blue-600 hover:text-blue-800 hover:underline text-xs sm:text-sm font-medium"
                      >
                        Already have an account? Login
                      </button>
                    </div>
                  </>
                )}

                {/* Step 2: Contact Information */}
                {currentStep === 2 && (
                  <ContactInformation
                    formData={{
                      officialEmail: formData.officialEmail,
                      phoneNumber: formData.phoneNumber,
                      website: formData.website,
                      address: formData.address,
                    }}
                    onInputChange={handleInputChange}
                  />
                )}

                {/* Step 3: Contact Person */}
                {currentStep === 3 && (
                  <ContactPerson
                    formData={{
                      firstName: formData.firstName,
                      lastName: formData.lastName,
                      contactPhone: formData.contactPhone,
                      contactEmail: formData.contactEmail,
                    }}
                    onInputChange={handleInputChange}
                  />
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between gap-3 sm:gap-4 pt-4 sm:pt-6">
                  {currentStep > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleBack}
                      className="flex-[0.4] px-6 flex items-center justify-center gap-2 h-10 sm:h-12"
                    >
                      <div className="flex items-center justify-center gap-2">
                        <ArrowLeft className="h-4 w-4" />
                        <span>Back</span>
                      </div>
                    </Button>
                  )}
                  {currentStep < 3 ? (
                    <Button
                      type="button"
                      onClick={handleNext}
                      className="flex-[0.4] px-6 flex items-center justify-center gap-2 h-10 sm:h-12"
                    >
                      <div className="flex items-center justify-center gap-2">
                        <span>Next</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="flex-[0.4] px-8 flex items-center justify-center h-10 sm:h-12"
                    >
                      <div className="flex items-center justify-center">
                        <span>Submit</span>
                      </div>
                    </Button>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
