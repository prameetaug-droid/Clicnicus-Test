"use client";

import { FormEvent, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Script from "next/script";
import { SectionContainer } from "./SectionContainer";

const features = [
  "One platform for CCM, RPM, TCM.",
  "Automated CPT code tracking",
  "Automated workflows and EHR sync",
  "Scale without extra headcount",
  "HIPAA-compliant, audit-ready",
  "NPI-level analytics built-in",
];

export default function Hero() {
  const [showPopup, setShowPopup] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  // Only render form after hydration to prevent extension conflicts
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const payload = {
      fields: [
        { name: "firstname", value: formData.get("name") ?? "" },
        { name: "email", value: formData.get("email") ?? "" },
        { name: "phone", value: formData.get("phone") ?? "" },
        { name: "company", value: formData.get("organization") ?? "" },
      ],
      context: {
        pageUri: event.currentTarget.ownerDocument.location.href,
        pageName: "Clinicus Landing Page",
      },
    };

    try {
      const response = await fetch("/api/hubspot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setShowPopup(true);
      } else {
        const errorResponse = await response.json().catch(() => null);
        const errorText = errorResponse?.error || errorResponse?.message || "The submission could not be completed. Please try again.";
        console.error("HubSpot submission failed", errorText);
      }
    } catch (error) {
      console.error("HubSpot submission failed", error);
    }
  }

  return (
    <>
      {showPopup
        ? createPortal(
            <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0F2C53]/20 px-4 py-6">
              <div className="relative w-full max-w-[833px] overflow-hidden rounded-[12px] border border-[#D2E2FF] bg-[#F7F7F7] px-6 pb-8 pt-28 shadow-[0_40px_80px_rgba(15,26,51,0.15)] sm:px-8">
                <div className="absolute left-1/2 top-8 -translate-x-1/2">
                  <img
                    src="/images/Tick.svg"
                    alt="Success tick"
                    className="h-[64px] w-[64px]"
                  />
                </div>

                <h2 className="mx-auto max-w-[600px] text-center text-[48px] font-normal leading-[66px] text-[#0F2C53]">
                  You’re All Set
                </h2>
                <p className="mx-auto mt-3 max-w-[600px] text-center text-[20px] leading-[27px] text-[#0F2C53]">
                  Thanks for reaching out to Clinicus.
                </p>
                <p className="mx-auto mt-3 max-w-[560px] text-center text-[16px] leading-[140%] text-[#666666]">
                  Your demo request is in, and a member of our team will be in touch soon to schedule your personalized 30-minute walkthrough.
                </p>

                <div className="mx-auto mt-8 w-full max-w-[769px] rounded-t-[12px] bg-[linear-gradient(135.02deg,rgba(255,255,255,0.3)_12.37%,rgba(242,202,255,0.3)_87.63%)] px-6 py-6">
                  <p className="text-center text-[18px] font-semibold text-[#223D5E]">
                    What Happens Next?
                  </p>

                  <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div className="space-y-3 text-center">
                      <div className="mx-auto flex h-[62px] w-[62px] items-center justify-center">
                        <img
                          src="/images/File.svg"
                          alt="File icon"
                          className="h-[35px] w-[35px]"
                        />
                      </div>
                      <p className="text-[16px] font-semibold text-[#223D5E]">
                        Request Received
                      </p>
                      <p className="mx-auto max-w-[137px] text-[14px] leading-[19px] text-[#223D5E]">
                        We’ve received your demo request.
                      </p>
                    </div>

                    <div className="relative space-y-3 text-center">
                      <div className="hidden md:block absolute -left-2 top-0 h-full w-px bg-white/70" />
                      <div className="mx-auto flex h-[62px] w-[62px] items-center justify-center">
                        <img
                          src="/images/People.svg"
                          alt="People icon"
                          className="h-[35px] w-[35px]"
                        />
                      </div>
                      <p className="text-[16px] font-semibold text-[#223D5E]">
                        Our Team Will Reach Out
                      </p>
                      <p className="mx-auto max-w-[186px] text-[14px] leading-[19px] text-[#223D5E]">
                        A Clinicus specialist will contact you soon.
                      </p>
                    </div>

                    <div className="relative space-y-3 text-center">
                      <div className="hidden md:block absolute -left-2 top-0 h-full w-px bg-white/70" />
                      <div className="mx-auto flex h-[62px] w-[62px] items-center justify-center">
                        <img
                          src="/images/Calendar.svg"
                          alt="Calendar icon"
                          className="h-[35px] w-[35px]"
                        />
                      </div>
                      <p className="text-[16px] font-semibold text-[#223D5E]">
                        Personalized Demo
                      </p>
                      <p className="mx-auto max-w-[146px] text-[14px] leading-[19px] text-[#223D5E]">
                        We’ll schedule a walkthrough tailored to your needs.
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setShowPopup(false)}
                  className="mt-8 w-full rounded-[12px] bg-[#9f1ff6] py-3.5 text-[16px] font-bold text-white transition-colors hover:bg-[#8b1ae6]"
                >
                  Got It
                </button>
              </div>
            </div>,
            document.body
          )
        : null}

      <section className="relative z-10 pt-8 md:pt-12 lg:pt-[58px]">
        <SectionContainer>
          <div className="flex flex-col items-stretch gap-10 lg:flex-row lg:items-start lg:justify-between xl:gap-10">
            <div className="w-full lg:max-w-[560px] lg:shrink-0">
              <p className="text-[10px] font-bold uppercase tracking-[0.0952em] sm:text-[10.5px]" style={{ color: '#9F1FF6' }}>
                TRUSTED CARE MANAGEMENT PLATFORM
              </p>
              <h1 className="mt-3 text-[32px] font-light leading-[1.15] text-navy sm:mt-[15px] sm:text-[38px] md:text-[44px] lg:text-[50px] lg:leading-[58px]">
                Care Program That Improves Patient Outcomes & Maximizes Practice
                Revenue
              </h1>
              <p className="mt-3 text-[14px] font-medium leading-[21px] text-muted sm:mt-[15px] sm:text-[14.5px]">
                Clinicus unifies care delivery, coordination, monitoring, and
                billing on one system - capturing every reimbursement, improving
                outcomes, and reducing admin burden.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-[31px] sm:grid-cols-2 sm:gap-x-6 sm:gap-y-[22px] md:gap-x-10">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-[9px]">
                    <span className="flex h-[20.57px] w-[20.57px] shrink-0 items-center justify-center rounded-[6.5px] bg-purple-light text-[10.3px] font-bold text-purple">
                      ✓
                    </span>
                    <span className="text-[11px] font-semibold leading-[15.9px] text-navy sm:text-[11.7px]">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div
              id="demo"
              className="w-full rounded-[28px] px-11 py-9 lg:max-w-[581px] lg:shrink-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(248, 238, 255, 0.3) 0%, rgba(159, 31, 246, 0.13) 100%)",
              }}
            >
              <div className="text-center">
                <span className="badge">BOOK YOUR DEMO</span>
                <h2 className="mt-6 text-[32px] font-extrabold leading-normal text-navy">
                  Book a 30-Min Demo
                </h2>
                <p className="mx-auto mt-3 text-[14px] font-medium leading-normal text-[#5b7392]">
                  See Clinicus in action for your programs.
                </p>
              </div>

              <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                {isHydrated ? (
                  <>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <input
                        name="name"
                        type="text"
                        placeholder="Name*"
                        required
                        className="h-12 rounded-[10px] border border-[#e4eaf2] bg-white px-4 text-sm font-medium placeholder-[#a6b4c3] focus:outline-none focus:ring-2 focus:ring-purple/20"
                      />
                      <input
                        name="email"
                        type="email"
                        placeholder="Email Address*"
                        required
                        className="h-12 rounded-[10px] border border-[#e4eaf2] bg-white px-4 text-sm font-medium placeholder-[#a6b4c3] focus:outline-none focus:ring-2 focus:ring-purple/20"
                      />
                      <input
                        name="phone"
                        type="tel"
                        placeholder="Contact Number*"
                        required
                        className="h-12 rounded-[10px] border border-[#e4eaf2] bg-white px-4 text-sm font-medium placeholder-[#a6b4c3] focus:outline-none focus:ring-2 focus:ring-purple/20"
                      />
                      <input
                        name="organization"
                        type="text"
                        placeholder="Organization*"
                        required
                        className="h-12 rounded-[10px] border border-[#e4eaf2] bg-white px-4 text-sm font-medium placeholder-[#a6b4c3] focus:outline-none focus:ring-2 focus:ring-purple/20"
                      />
                    </div>

                    <p className="text-center text-[10px] font-medium leading-[15px] text-[#8b95a0]">
                      By submitting this form, you agree to receive communications from Clinicus including emails, calls, and marketing messages. You may unsubscribe at any time.
                    </p>

                    <button
                      type="submit"
                      className="w-full rounded-[12px] bg-[#9f1ff6] py-3.5 text-center text-[18.5px] font-bold text-white hover:bg-[#8b1ae6] transition-colors"
                    >
                      Submit
                    </button>
                  </>
                ) : (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-6">
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className="h-12 rounded-[10px] border border-[#e4eaf2] bg-gray-100 animate-pulse"
                        />
                      ))}
                    </div>
                    <div className="h-10 w-full rounded-[12px] bg-gray-100 animate-pulse" />
                  </div>
                )}
              </form>
              <div
                className="hidden hs-form-html"
                data-region="na1"
                data-form-id="099516c3-b602-4fcd-aeda-cc07e30085dd"
                data-portal-id="51257300"
              />
              <Script
                src="https://js.hsforms.net/forms/embed/developer/51257300.js"
                strategy="afterInteractive"
              />
            </div>
          </div>
        </SectionContainer>
      </section>
    </>
  );
}