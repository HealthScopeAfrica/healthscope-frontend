"use client";

import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/Card";
import {
  Target,
  Heart,
  Shield,
  Globe,
  Users,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#E8F5F0] py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="w-16 h-5 bg-blue-600 rounded-full" />
              <h1 className="text-5xl md:text-7xl lg:text-4xl font-medium text-gray-900 whitespace-nowrap">
                Democratizing Health Information
                <br />
                Across Africa
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                HealthScope is a world-class digital health platform <br />
                empowering millions across Africa and the globe with
                <br /> verified, accessible health information in their native
                <br /> languages.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-6 text-base">
                  Join Our Mission
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-300 text-gray-900 px-6 py-6 text-base hover:bg-white "
                >
                  Partner With Us
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative -mt-8">
              <div className="relative max-w-md ml-auto">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/images/healthscope group picture.jpg"
                    alt="Healthcare team"
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute bottom-0 right-0 bg-white rounded-lg shadow-lg px-4 py-3 flex items-center gap-2 translate-x-3 translate-y-3 z-10">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <div className="text-sm">
                    <div className="text-gray-600">Trusted by</div>
                    <div className="font-bold text-gray-900">
                      500+ Organizations
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-8 md:py-10">
        <div className="container mx-auto px-4 md:px-5 mt-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-small text-blue-600 mb-2">
                12M+
              </div>
              <div className="text-gray-700 text-sm md:text-base">
                Monthly Readers
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-small text-green-600 mb-2">
                2,500+
              </div>
              <div className="text-gray-700 text-sm md:text-base">
                Verified Articles
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-small text-blue-600 mb-2">
                45
              </div>
              <div className="text-gray-700 text-sm md:text-base">
                Countries Reached
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-small text-green-600 mb-2">
                98%
              </div>
              <div className="text-gray-700 text-sm md:text-base">
                User Trust Rating
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-[#F8FFF8] py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 mt-5">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-2xl font-small text-gray-900 mb-4">
              Our Mission & Vision
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Building a healthier Africa through accessible, verified health
              information
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto mb-20">
            <Card className="p-8 px-12 py-10 bg-white border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-small text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To democratize access to reliable health information across
                Africa and beyond, empowering communities to make informed
                decisions about their health and wellbeing through verified,
                culturally relevant content.
              </p>
            </Card>

            <Card className="p-8 px-12 py-10 bg-white border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-6 shadow-sm">
                <Heart className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-small text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A world where every African has access to trusted health
                information in their own language, breaking down barriers to
                healthcare knowledge and improving health outcomes for millions.
              </p>
            </Card>
          </div>

          {/* Core Values */}
          <div className="bg-white py-16 md:py-24 w-full">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12  ">
                <h5 className="  font-small text-gray-900 mb-4">
                  Our Core Values
                </h5>
                <p className="text-gray-700 text-lg">
                  The principles that guide everything we do
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="p-6 bg-white border-gray-200 text-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-small text-gray-900 mb-3">
                    Trust & Accuracy
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Every piece of content is
                    <br /> verified by licensed
                    <br /> healthcare professionals
                  </p>
                </Card>

                <Card className="p-6 bg-white border-gray-200 text-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-small text-black mb-3">
                    Accessibility
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Content available in 20+
                    <br /> languages with audio
                    <br /> support for all
                  </p>
                </Card>

                <Card className="p-6 bg-white border-gray-200 text-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-small text-gray-900 mb-3">
                    Community
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Built by healthcare
                    <br /> workers for communities
                    <br /> across Africa
                  </p>
                </Card>

                <Card className="p-6 bg-white border-gray-200 text-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-small text-gray-900 mb-3">
                    Innovation
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Leveraging AI and
                    <br /> technology to personalize
                    <br /> health education
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/healthcare professional.jpg"
                  alt="Healthcare professional"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-6">
              <h4 className=" md:text-2xl font-small text-gray-900">
                Our Story
              </h4>
              <div className="space-y-4 text-gray-700 leading-relaxed ">
                <p>
                  Founded in 2025, HealthScope was born from a simple
                  observation: millions of Africans lacked access to reliable
                  health information in their own languages. Medical
                  misinformation was spreading faster than facts, and language
                  barriers prevented people from understanding critical health
                  guidance.
                </p>
                <p>
                  A team of healthcare professionals, technologists, and
                  community health workers came together with a shared vision:
                  to create a platform that would make verified health
                  information accessible to everyone, regardless of language or
                  location.
                </p>
                <p>
                  Today, HealthScope serves over 12 million monthly readers
                  across 45 countries, with content in 20+ languages. We've
                  partnered with 500+ healthcare organizations, from the WHO to
                  local community health centers, all working toward the same
                  goal: a healthier, better-informed Africa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className=" md:text-2xl font-small text-gray-900 mb-4">
              What Makes Us Different
            </h2>
            <p className="text-gray-700 text-lg">
              We're not just another health website—we're a movement
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-small text-gray-900 mb-2">
                  Verified by Experts
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Every article is reviewed and approved by licensed healthcare
                  professionals before publication
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-small text-gray-900 mb-2">
                  Culturally Relevant
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Content created with African contexts in mind, addressing
                  local health challenges and cultural considerations
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-small text-gray-900 mb-2">
                  Truly Multilingual
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Available in English, French, Arabic, Swahili, and 16+ other
                  African languages with professional translations
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-small text-gray-900 mb-2">
                  Audio Accessibility
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Professional voice narration for every article, making content
                  accessible to everyone including those with low literacy
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-yellow-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-small text-gray-900 mb-2">
                  AI-Powered Recommendations
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Smart algorithms suggest relevant content based on reading
                  history, location, and health interests
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-red-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-small text-gray-900 mb-2">
                  Mobile-First Design
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Optimized for mobile devices with offline reading capabilities
                  for areas with limited connectivity
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team & Contributors */}
      <section className="bg-[#F8FFF8] py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className=" md:text-2xl font-small text-gray-900 mb-4">
              Our Team & Contributors
            </h2>
            <p className="text-gray-700 text-lg">
              Driven by healthcare professionals dedicated to improving public
              health
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-10 max-w-6xl mx-auto mb-12">
            <Card className="p-8 bg-white border-gray-200 text-center shadow-sm">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 mx-auto mb-6" />
              <div className="text-3xl font-small text-gray-900 mb-2">200+</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Healthcare Professionals
              </h4>
              <p className="text-gray-600 text-sm">
                Doctors, nurses, and medical experts contributing content
              </p>
            </Card>

            <Card className="p-8 bg-white border-gray-200 text-center shadow-sm">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-teal-600 mx-auto mb-6" />
              <div className="text-3xl font-small text-gray-900 mb-2">350+</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Community Health Workers
              </h3>
              <p className="text-gray-600 text-sm">
                On-the-ground experts providing local health insights
              </p>
            </Card>

            <Card className="p-8 bg-white border-gray-200 text-center shadow-sm">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 mx-auto mb-6" />
              <div className="text-3xl font-small text-gray-900 mb-2">85+</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Languages Specialists
              </h3>
              <p className="text-gray-600 text-sm">
                Professional translators ensuring accuracy across languages
              </p>
            </Card>
          </div>

          <div className="text-center">
            <Button className="text-gray-900 px-6 py-6 text-base hover:bg-white bg-transparent">
              Become a Contributor
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
