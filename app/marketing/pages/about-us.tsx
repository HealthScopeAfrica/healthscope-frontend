"use client";

import Button  from "~/components/button";
import { Card } from "~/components/ui/card";
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
import { Link } from "react-router";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#E8F5F0]  py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="  container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-1 sm:space-y-1">
              <svg
                width="66"
                height="22"
                viewBox="0 0 66 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask id="path-1-inside-1_1121_4192" fill="white">
                  <path d="M0 8C0 3.58172 3.58172 0 8 0H58C62.4183 0 66 3.58172 66 8V14C66 18.4183 62.4183 22 58 22H8C3.58172 22 0 18.4183 0 14V8Z" />
                </mask>
                <path
                  d="M0 8C0 3.58172 3.58172 0 8 0H58C62.4183 0 66 3.58172 66 8V14C66 18.4183 62.4183 22 58 22H8C3.58172 22 0 18.4183 0 14V8Z"
                  fill="#4572D5"
                />
                <path
                  d="M8 0V0.8H58V0V-0.8H8V0ZM66 8H65.2V14H66H66.8V8H66ZM58 22V21.2H8V22V22.8H58V22ZM0 14H0.8V8H0H-0.8V14H0ZM8 22V21.2C4.02355 21.2 0.8 17.9764 0.8 14H0H-0.8C-0.8 18.8601 3.13989 22.8 8 22.8V22ZM66 14H65.2C65.2 17.9764 61.9764 21.2 58 21.2V22V22.8C62.8601 22.8 66.8 18.8601 66.8 14H66ZM58 0V0.8C61.9764 0.8 65.2 4.02355 65.2 8H66H66.8C66.8 3.13989 62.8601 -0.8 58 -0.8V0ZM8 0V-0.8C3.13989 -0.8 -0.8 3.13989 -0.8 8H0H0.8C0.8 4.02355 4.02355 0.8 8 0.8V0Z"
                  fill="#4572D5"
                  mask="url(#path-1-inside-1_1121_4192)"
                />
                <path
                  d="M6.05682 15V6.27273H11.3239V7.21023H7.11364V10.1591H11.0511V11.0966H7.11364V14.0625H11.392V15H6.05682ZM17.9687 9.92045L17.0653 10.1761C17.0085 10.0256 16.9247 9.87926 16.8139 9.73722C16.7059 9.59233 16.5582 9.47301 16.3707 9.37926C16.1832 9.28551 15.9431 9.23864 15.6505 9.23864C15.2499 9.23864 14.9161 9.33097 14.6491 9.51562C14.3849 9.69744 14.2528 9.92898 14.2528 10.2102C14.2528 10.4602 14.3437 10.6577 14.5255 10.8026C14.7073 10.9474 14.9914 11.0682 15.3778 11.1648L16.3494 11.4034C16.9346 11.5455 17.3707 11.7628 17.6576 12.0554C17.9445 12.3452 18.088 12.7187 18.088 13.1761C18.088 13.5511 17.9801 13.8864 17.7641 14.1818C17.5511 14.4773 17.2528 14.7102 16.8693 14.8807C16.4857 15.0511 16.0397 15.1364 15.5312 15.1364C14.8636 15.1364 14.311 14.9915 13.8735 14.7017C13.436 14.4119 13.159 13.9886 13.0426 13.4318L13.9971 13.1932C14.088 13.5455 14.2599 13.8097 14.5127 13.9858C14.7684 14.1619 15.1022 14.25 15.5141 14.25C15.9829 14.25 16.3551 14.1506 16.6306 13.9517C16.909 13.75 17.0482 13.5085 17.0482 13.2273C17.0482 13 16.9687 12.8097 16.8096 12.6562C16.6505 12.5 16.4062 12.3835 16.0766 12.3068L14.9857 12.0511C14.3863 11.9091 13.946 11.6889 13.6647 11.3906C13.3863 11.0895 13.2471 10.7131 13.2471 10.2614C13.2471 9.89205 13.3508 9.56534 13.5582 9.28125C13.7684 8.99716 14.0539 8.77415 14.4147 8.61222C14.7784 8.45028 15.1903 8.36932 15.6505 8.36932C16.2982 8.36932 16.8068 8.51136 17.1761 8.79545C17.5482 9.07955 17.8124 9.45455 17.9687 9.92045ZM22.6885 8.45455V9.30682H19.2964V8.45455H22.6885ZM20.285 6.88636H21.2907V13.125C21.2907 13.4091 21.3319 13.6222 21.4143 13.7642C21.4995 13.9034 21.6075 13.9972 21.7382 14.0455C21.8717 14.0909 22.0123 14.1136 22.16 14.1136C22.2708 14.1136 22.3617 14.108 22.4328 14.0966C22.5038 14.0824 22.5606 14.071 22.6032 14.0625L22.8078 14.9659C22.7396 14.9915 22.6444 15.017 22.5223 15.0426C22.4001 15.071 22.2453 15.0852 22.0578 15.0852C21.7737 15.0852 21.4953 15.0241 21.2225 14.902C20.9527 14.7798 20.7282 14.5938 20.5492 14.3438C20.3731 14.0938 20.285 13.7784 20.285 13.3977V6.88636ZM25.1742 15.0682C24.964 15.0682 24.7836 14.9929 24.633 14.8423C24.4824 14.6918 24.4071 14.5114 24.4071 14.3011C24.4071 14.0909 24.4824 13.9105 24.633 13.7599C24.7836 13.6094 24.964 13.5341 25.1742 13.5341C25.3844 13.5341 25.5648 13.6094 25.7154 13.7599C25.866 13.9105 25.9412 14.0909 25.9412 14.3011C25.9412 14.4403 25.9057 14.5682 25.8347 14.6847C25.7665 14.8011 25.6742 14.8949 25.5577 14.9659C25.4441 15.0341 25.3162 15.0682 25.1742 15.0682ZM31.5839 15V14.233L34.4646 11.0795C34.8026 10.7102 35.081 10.3892 35.2998 10.1165C35.5185 9.84091 35.6805 9.58239 35.7856 9.34091C35.8935 9.09659 35.9475 8.84091 35.9475 8.57386C35.9475 8.26705 35.8737 8.00142 35.7259 7.77699C35.581 7.55256 35.3822 7.37926 35.1293 7.2571C34.8765 7.13494 34.5924 7.07386 34.2771 7.07386C33.9418 7.07386 33.6492 7.14347 33.3992 7.28267C33.1521 7.41903 32.9603 7.6108 32.8239 7.85795C32.6904 8.10511 32.6237 8.39489 32.6237 8.72727H31.618C31.618 8.21591 31.7359 7.76705 31.9717 7.38068C32.2075 6.99432 32.5285 6.69318 32.9347 6.47727C33.3438 6.26136 33.8026 6.15341 34.3112 6.15341C34.8225 6.15341 35.2756 6.26136 35.6705 6.47727C36.0654 6.69318 36.3751 6.98437 36.5995 7.35085C36.8239 7.71733 36.9362 8.125 36.9362 8.57386C36.9362 8.89489 36.8779 9.20881 36.7614 9.51562C36.6478 9.8196 36.4489 10.1591 36.1648 10.5341C35.8836 10.9062 35.493 11.3608 34.993 11.8977L33.0327 13.9943V14.0625H37.0896V15H31.5839ZM41.9361 15.1193C41.294 15.1193 40.7472 14.9446 40.2955 14.5952C39.8438 14.2429 39.4986 13.733 39.26 13.0653C39.0213 12.3949 38.902 11.5852 38.902 10.6364C38.902 9.69318 39.0213 8.88778 39.26 8.22017C39.5014 7.54972 39.848 7.03835 40.2997 6.68608C40.7543 6.33097 41.2997 6.15341 41.9361 6.15341C42.5725 6.15341 43.1165 6.33097 43.5682 6.68608C44.0227 7.03835 44.3693 7.54972 44.608 8.22017C44.8494 8.88778 44.9702 9.69318 44.9702 10.6364C44.9702 11.5852 44.8509 12.3949 44.6122 13.0653C44.3736 13.733 44.0284 14.2429 43.5767 14.5952C43.125 14.9446 42.5781 15.1193 41.9361 15.1193ZM41.9361 14.1818C42.5725 14.1818 43.0668 13.875 43.419 13.2614C43.7713 12.6477 43.9475 11.7727 43.9475 10.6364C43.9475 9.88068 43.8665 9.23722 43.7046 8.70597C43.5455 8.17472 43.3154 7.76989 43.0142 7.49148C42.7159 7.21307 42.3565 7.07386 41.9361 7.07386C41.3054 7.07386 40.8125 7.38494 40.4574 8.0071C40.1023 8.62642 39.9247 9.50284 39.9247 10.6364C39.9247 11.392 40.0043 12.0341 40.1634 12.5625C40.3225 13.0909 40.5511 13.4929 40.8494 13.7685C41.1506 14.044 41.5128 14.1818 41.9361 14.1818ZM46.8295 15V14.233L49.7102 11.0795C50.0483 10.7102 50.3267 10.3892 50.5454 10.1165C50.7642 9.84091 50.9261 9.58239 51.0312 9.34091C51.1392 9.09659 51.1931 8.84091 51.1931 8.57386C51.1931 8.26705 51.1193 8.00142 50.9715 7.77699C50.8267 7.55256 50.6278 7.37926 50.375 7.2571C50.1221 7.13494 49.838 7.07386 49.5227 7.07386C49.1875 7.07386 48.8948 7.14347 48.6448 7.28267C48.3977 7.41903 48.2059 7.6108 48.0696 7.85795C47.936 8.10511 47.8693 8.39489 47.8693 8.72727H46.8636C46.8636 8.21591 46.9815 7.76705 47.2173 7.38068C47.4531 6.99432 47.7741 6.69318 48.1804 6.47727C48.5894 6.26136 49.0483 6.15341 49.5568 6.15341C50.0681 6.15341 50.5213 6.26136 50.9162 6.47727C51.311 6.69318 51.6207 6.98437 51.8451 7.35085C52.0696 7.71733 52.1818 8.125 52.1818 8.57386C52.1818 8.89489 52.1235 9.20881 52.0071 9.51562C51.8934 9.8196 51.6946 10.1591 51.4105 10.5341C51.1292 10.9062 50.7386 11.3608 50.2386 11.8977L48.2784 13.9943V14.0625H52.3352V15H46.8295ZM57.0624 15.1193C56.5624 15.1193 56.1121 15.0199 55.7115 14.821C55.311 14.6222 54.99 14.3494 54.7485 14.0028C54.507 13.6562 54.3749 13.2614 54.3522 12.8182H55.3749C55.4147 13.2131 55.5936 13.5398 55.9118 13.7983C56.2329 14.054 56.6164 14.1818 57.0624 14.1818C57.4204 14.1818 57.7385 14.098 58.0169 13.9304C58.2982 13.7628 58.5184 13.5327 58.6775 13.2401C58.8394 12.9446 58.9204 12.6108 58.9204 12.2386C58.9204 11.858 58.8365 11.5185 58.6689 11.2202C58.5042 10.919 58.2769 10.6818 57.9871 10.5085C57.6973 10.3352 57.3664 10.2472 56.9942 10.2443C56.7272 10.2415 56.453 10.2827 56.1718 10.3679C55.8905 10.4503 55.659 10.5568 55.4772 10.6875L54.4885 10.5682L55.0169 6.27273H59.551V7.21023H55.9033L55.5965 9.78409H55.6476C55.8266 9.64205 56.051 9.52415 56.3209 9.4304C56.5908 9.33665 56.8721 9.28977 57.1647 9.28977C57.6988 9.28977 58.1746 9.41761 58.5922 9.6733C59.0127 9.92614 59.3422 10.2727 59.5809 10.7131C59.8223 11.1534 59.9431 11.6562 59.9431 12.2216C59.9431 12.7784 59.8181 13.2756 59.5681 13.7131C59.3209 14.1477 58.98 14.4915 58.5454 14.7443C58.1107 14.9943 57.6164 15.1193 57.0624 15.1193Z"
                  fill="#4572D5"
                />
              </svg>

              <h1 className="text-3xl sm:text-5xl font-medium text-gray-900 leading-tight">
                {/* Democratizing Health Information
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>Across Africa */}
                Democratizing Health Information Across Africa
              </h1>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl">
                HealthScope is a world-class digital health platform empowering
                millions across Africa and the globe with verified, accessible
                health information in their native languages.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                <Link to="/partner/auth/login">
                <Button className="flex flex-[0.1]" >
                  <div className="flex justify-center items-center">
                    <span>Join Our Mission</span>
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                </Button>
                </Link>
                {/* <Button
                  variant="outline"
                  className="border-gray-300 text-gray-900 px-6 py-3 sm:py-4 text-sm sm:text-base hover:bg-white w-full sm:w-auto"
                >
                  Partner With Us
                </Button> */}
              </div>
            </div>

            {/* Right Image */}
            <div className="relative mt-8 lg:-mt-8 order-first lg:order-last">
              <div className="relative max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:ml-auto">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/hs-group-pix.png"
                    alt="Healthcare team"
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute bottom-0 right-0 bg-white rounded-lg shadow-lg px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2 translate-x-2 sm:translate-x-3 translate-y-2 sm:translate-y-3 z-10">
                  {/* <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" /> */}
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                      fill="#EBF6F3"
                    />
                    <path
                      d="M27.4768 24.8899L28.9918 33.4159C29.0087 33.5163 28.9946 33.6195 28.9514 33.7116C28.9081 33.8038 28.8377 33.8806 28.7497 33.9317C28.6616 33.9828 28.56 34.0058 28.4586 33.9976C28.3571 33.9894 28.2605 33.9504 28.1818 33.8859L24.6018 31.1989C24.4289 31.0698 24.219 31 24.0033 31C23.7875 31 23.5776 31.0698 23.4048 31.1989L19.8188 33.8849C19.7401 33.9493 19.6436 33.9882 19.5422 33.9964C19.4409 34.0046 19.3394 33.9817 19.2514 33.9308C19.1634 33.8798 19.093 33.8032 19.0497 33.7112C19.0063 33.6192 18.992 33.5162 19.0088 33.4159L20.5228 24.8899"
                      stroke="#2E9776"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M24 26C27.3137 26 30 23.3137 30 20C30 16.6863 27.3137 14 24 14C20.6863 14 18 16.6863 18 20C18 23.3137 20.6863 26 24 26Z"
                      stroke="#2E9776"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <div className="text-xs sm:text-sm">
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
      <section className="bg-white py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 mb-2">
                12M+
              </div>
              <div className="text-gray-700 text-xs sm:text-sm md:text-base">
                Monthly Readers
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-600 mb-2">
                2,500+
              </div>
              <div className="text-gray-700 text-xs sm:text-sm md:text-base">
                Verified Articles
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 mb-2">
                45
              </div>
              <div className="text-gray-700 text-xs sm:text-sm md:text-base">
                Countries Reached
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-600 mb-2">
                98%
              </div>
              <div className="text-gray-700 text-xs sm:text-sm md:text-base">
                User Trust Rating
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-[#F8FFF8] py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-3 sm:mb-4">
              Our Mission & Vision
            </h2>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
              Building a healthier Africa through accessible, verified health
              information
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto mb-12 sm:mb-16 lg:mb-20">
            <Card className="p-6 sm:p-8 lg:p-10 xl:p-12 bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 sm:mb-6">
                <Target className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-900 mb-3 sm:mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                To democratize access to reliable health information across
                Africa and beyond, empowering communities to make informed
                decisions about their health and wellbeing through verified,
                culturally relevant content.
              </p>
            </Card>

            <Card className="p-6 sm:p-8 lg:p-10 xl:p-12 bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-100 flex items-center justify-center mb-4 sm:mb-6">
                <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-900 mb-3 sm:mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                A world where every African has access to trusted health
                information in their own language, breaking down barriers to
                healthcare knowledge and improving health outcomes for millions.
              </p>
            </Card>
          </div>

          {/* Core Values */}
          <div className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 w-full rounded-2xl shadow-lg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-gray-900 mb-3 sm:mb-4">
                  Our Core Values
                </h3>
                <p className="text-gray-700 text-base sm:text-lg md:text-xl">
                  The principles that guide everything we do
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <Card className="p-4 sm:p-6 bg-white text-center shadow-md hover:shadow-lg transition-all duration-300 border-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  </div>
                  <h4 className="text-base sm:text-lg font-medium text-gray-900 mb-2 sm:mb-3">
                    Trust & Accuracy
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    Every piece of content is verified by licensed healthcare
                    professionals
                  </p>
                </Card>

                <Card className="p-4 sm:p-6 bg-white text-center shadow-md hover:shadow-lg transition-all duration-300 border-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                  </div>
                  <h4 className="text-base sm:text-lg font-medium text-gray-900 mb-2 sm:mb-3">
                    Accessibility
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    Content available in 20+ languages with audio support for
                    all
                  </p>
                </Card>

                <Card className="p-4 sm:p-6 bg-white text-center shadow-md hover:shadow-lg transition-all duration-300 border-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Users className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  </div>
                  <h4 className="text-base sm:text-lg font-medium text-gray-900 mb-2 sm:mb-3">
                    Community
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    Built by healthcare workers for communities across Africa
                  </p>
                </Card>

                <Card className="p-4 sm:p-6 bg-white text-center shadow-md hover:shadow-lg transition-all duration-300 border-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                  </div>
                  <h4 className="text-base sm:text-lg font-medium text-gray-900 mb-2 sm:mb-3">
                    Innovation
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    Leveraging AI and technology to personalize health education
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Image */}
            <div className="relative order-last lg:order-first">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/healthcare professional.jpg"
                  alt="Healthcare professional"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900">
                Our Story
              </h2>
              <div className="space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
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
      <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-3 sm:mb-4">
              What Makes Us Different
            </h2>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl">
              We're not just another health website—we're a movement
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <div className="flex gap-3 sm:gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">
                  Verified by Experts
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Every article is reviewed and approved by licensed healthcare
                  professionals before publication
                </p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                </div>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">
                  Culturally Relevant
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Content created with African contexts in mind, addressing
                  local health challenges and cultural considerations
                </p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">
                  Truly Multilingual
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Available in English, French, Arabic, Swahili, and 16+ other
                  African languages with professional translations
                </p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                </div>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">
                  Audio Accessibility
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Professional voice narration for every article, making content
                  accessible to everyone including those with low literacy
                </p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-600" />
                </div>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">
                  AI-Powered Recommendations
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Smart algorithms suggest relevant content based on reading
                  history, location, and health interests
                </p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-100 flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-red-600" />
                </div>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">
                  Mobile-First Design
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Optimized for mobile devices with offline reading capabilities
                  for areas with limited connectivity
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team & Contributors */}
      <section className="bg-[#F8FFF8] py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-3 sm:mb-4">
              Our Team & Contributors
            </h2>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl">
              Driven by healthcare professionals dedicated to improving public
              health
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto mb-8 sm:mb-12">
            <Card className="p-6 sm:p-8 bg-white text-center shadow-lg hover:shadow-xl transition-all duration-300 border-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 mx-auto mb-4 sm:mb-6" />
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                200+
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2">
                Healthcare Professionals
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                Doctors, nurses, and medical experts contributing content
              </p>
            </Card>

            <Card className="p-6 sm:p-8 bg-white text-center shadow-lg hover:shadow-xl transition-all duration-300 border-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-green-400 to-teal-600 mx-auto mb-4 sm:mb-6" />
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                350+
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2">
                Community Health Workers
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                On-the-ground experts providing local health insights
              </p>
            </Card>

            <Card className="p-6 sm:p-8 bg-white text-center shadow-lg hover:shadow-xl transition-all duration-300 border-0 sm:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 mx-auto mb-4 sm:mb-6" />
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                85+
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2">
                Languages Specialists
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                Professional translators ensuring accuracy across languages
              </p>
            </Card>
          </div>

          <div className="text-center">
            <Button className="text-gray-900 px-6 py-3 sm:py-4 text-sm sm:text-base hover:bg-white bg-transparent border border-gray-300 hover:border-gray-400 transition-colors">
              Become a Contributor
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
