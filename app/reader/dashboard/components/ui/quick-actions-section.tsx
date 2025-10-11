/**
 * Quick Actions Section Component
 * Extracted from dashboard for modularity
 */

import { Link } from "react-router";

interface QuickActionsSectionProps {
  onChatClick: () => void;
}

export function QuickActionsSection({ onChatClick }: QuickActionsSectionProps) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
      <div className="grid sm:grid-cols-2 gap-4">
        <div
          className="bg-gray-50 border-gray-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          onClick={onChatClick}
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 10C0 4.47715 4.47715 0 10 0H38C43.5229 0 48 4.47715 48 10V38C48 43.5229 43.5228 48 38 48H10C4.47715 48 0 43.5228 0 38V10Z"
                  fill="#99A1AF"
                />
                <path
                  d="M14.9922 28.3417C15.1392 28.7126 15.172 29.119 15.0862 29.5087L14.0212 32.7987C13.9869 32.9655 13.9957 33.1384 14.047 33.3008C14.0982 33.4633 14.19 33.61 14.3138 33.727C14.4377 33.844 14.5893 33.9274 14.7544 33.9693C14.9195 34.0113 15.0925 34.0104 15.2572 33.9667L18.6702 32.9687C19.0379 32.8958 19.4187 32.9276 19.7692 33.0607C21.9046 34.0579 24.3235 34.2689 26.5993 33.6564C28.8751 33.0439 30.8614 31.6473 32.2079 29.7131C33.5543 27.7788 34.1743 25.4311 33.9585 23.0842C33.7427 20.7374 32.7049 18.5422 31.0282 16.8859C29.3516 15.2296 27.1439 14.2187 24.7946 14.0316C22.4452 13.8444 20.1053 14.4931 18.1876 15.863C16.2699 17.233 14.8977 19.2362 14.3131 21.5193C13.7284 23.8024 13.9689 26.2186 14.9922 28.3417Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">
                Talk to Kulo
              </h4>
              <p className="text-sm text-gray-500">
                Coming soon - AI health assistant
              </p>
            </div>
          </div>
        </div>

        <Link to="/reader/dashboard/articles">
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 10C0 4.47715 4.47715 0 10 0H38C43.5229 0 48 4.47715 48 10V38C48 43.5229 43.5228 48 38 48H10C4.47715 48 0 43.5228 0 38V10Z"
                    fill="#00C950"
                  />
                  <path
                    d="M24 19V33"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 30C14.7348 30 14.4804 29.8946 14.2929 29.7071C14.1054 29.5196 14 29.2652 14 29V16C14 15.7348 14.1054 15.4804 14.2929 15.2929C14.4804 15.1054 14.7348 15 15 15H20C21.0609 15 22.0783 15.4214 22.8284 16.1716C23.5786 16.9217 24 17.9391 24 19C24 17.9391 24.4214 16.9217 25.1716 16.1716C25.9217 15.4214 26.9391 15 28 15H33C33.2652 15 33.5196 15.1054 33.7071 15.2929C33.8946 15.4804 34 15.7348 34 16V29C34 29.2652 33.8946 29.5196 33.7071 29.7071C33.5196 29.8946 33.2652 30 33 30H27C26.2044 30 25.4413 30.3161 24.8787 30.8787C24.3161 31.4413 24 32.2044 24 33C24 32.2044 23.6839 31.4413 23.1213 30.8787C22.5587 30.3161 21.7956 30 21 30H15Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Browse Articles</h4>
                <p className="text-sm text-gray-600">
                  Explore health content
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}