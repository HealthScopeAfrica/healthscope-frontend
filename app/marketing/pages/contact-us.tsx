import { useState } from "react";

const ACTION_URL = "/api/contact"; // we'll replace this with the endpoint we have

// marketing/pages/contact-us.tsx
export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
<section className="relative flex items-center justify-center min-h-[440px] md:min-h-[520px] bg-black">
  <img
    src="/images/contact-hero-img.png"
    alt="Healthcare professionals"
    className="w-full h-auto object-contain"  // ⬅️ preserves image aspect ratio (no squish)
    // If you want fill with possible crop: object-cover h-full w-full
  />
  {/* a subtle overlay only over the image area */}
  <div className="absolute inset-0 bg-black/25 pointer-events-none" />

  <div className="absolute inset-0 flex items-center justify-center">
    <div  className="
        flex flex-col items-center text-center
        gap-[24px] md:gap-[50px]
        w-full max-w-[768px]
        md:h-[180px]
      ">
      <h1 className="
          text-[#2F6FE4]
          font-medium
          tracking-[-0.04em]
          leading-[110%]
          text-[34px] sm:text-[44px] md:text-[56px]
        ">
        CONTACT US
      </h1>
      <p className="
          text-white
          font-medium
          tracking-[-0.02em]
          leading-[120%]
          text-[16px] sm:text-[20px] md:text-[28px]
          max-w-[768px]
        ">
        Need help? you are welcomed to leave your contact
        info and we will be in touch shortly
      </p>
    </div>
  </div>
</section>


      {/* CONTACT GRID */}
      <section className="border-t border-slate-200 bg-white">
        <div
          className="
            mx-auto max-w-[1440px] min-h-[380px]
            grid grid-cols-1 md:grid-cols-3
            gap-[20px] px-6 md:px-[100px] py-10 md:py-[40px]
          "
        >
          {/* Card template = 400x300 on md+; fluid on mobile */}
          {/* VISIT US */}
          <div
            className="
              mx-auto w-full max-w-[400px] md:w-[400px]
              min-h-[260px] md:h-[300px]
              flex flex-col items-center text-center
              p-[20px] gap-[20px]
              md:border-r md:border-slate-200
            "
          >
            <div className="p-3">
              <img
                src="/icons/visit-us-icon.png"
                alt="Visit us"
                className="h-7 w-7 md:h-8 md:w-8 object-contain"
              />
            </div>

            {/* Heading (24px, 120%, -2%) */}
            <h3 className="font-semibold tracking-[-0.02em] leading-[120%] text-[20px] md:text-[24px] text-slate-800 uppercase">
              Visit Us
            </h3>

            {/* Body (20px regular) */}
            <p className="tracking-[-0.02em] leading-[120%] text-[16px] md:text-[20px] text-slate-600">
              Stop by to learn more about our health insights and wellness programs.
            </p>

            {/* Link (20px semi-bold) */}
            <a
              href="https://maps.google.com/?q=4%20Rising%20street%20Lekki%2C%20Lagos"
              target="_blank"
              rel="noreferrer"
              className="tracking-[-0.02em] leading-[120%] text-[16px] md:text-[20px] font-semibold text-[#2F6FE4] hover:underline"
            >
              4 Rising street lekki, lagos
            </a>
          </div>

          {/* CALL US */}
          <div
            className="
              mx-auto w-full max-w-[400px] md:w-[400px]
              min-h-[260px] md:h-[300px]
              flex flex-col items-center text-center
              p-[20px] gap-[20px]
              md:border-r md:border-slate-200
            "
          >
            <div className="p-3">
              <img
                src="/icons/call-us-icon.png"
                alt="Call us"
                className="h-7 w-7 md:h-8 md:w-8 object-contain"
              />
            </div>

            <h3 className="font-semibold tracking-[-0.02em] leading-[120%] text-[20px] md:text-[24px] text-slate-800 uppercase">
              Call Us
            </h3>

            <p className="tracking-[-0.02em] leading-[120%] text-[16px] md:text-[20px] text-slate-600">
              Have a health question? We are here to help and guide you.
            </p>

            <a
              href="tel:+2348017345231"
              className="tracking-[-0.02em] leading-[120%] text-[16px] md:text-[20px] font-semibold text-[#2F6FE4] hover:underline"
            >
              +234 801 7345 231
            </a>
          </div>

          {/* EMAIL US */}
          <div
            className="
              mx-auto w-full max-w-[400px] md:w-[400px]
              min-h-[260px] md:h-[300px]
              flex flex-col items-center text-center
              p-[20px] gap-[20px]
            "
          >
            <div className="p-3">
              <img
                src="/icons/email-us-icon.png"
                alt="Email us"
                className="h-7 w-7 md:h-8 md:w-8 object-contain"
              />
            </div>

            <h3 className="font-semibold tracking-[-0.02em] leading-[120%] text-[20px] md:text-[24px] text-slate-800 uppercase">
              Email Us
            </h3>

            <p className="tracking-[-0.02em] leading-[120%] text-[16px] md:text-[20px] text-slate-600">
              Write to us for inquires, feedback, or collaborations.
            </p>

            <a
              href="mailto:support@healthscope.africa"
              className="tracking-[-0.02em] leading-[120%] text-[16px] md:text-[20px] font-semibold text-[#2F6FE4] hover:underline"
            >
              Support@healthscope.com
            </a>
          </div>
        </div>
      </section>
      {/* Newsletter section comes from the global Footer */}
    </main>
  );
}
