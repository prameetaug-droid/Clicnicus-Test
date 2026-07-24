"use client";

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
  return (
    <section className="relative z-10 pt-8 md:pt-12 lg:pt-[58px]">
      <SectionContainer>
        <div className="flex flex-col items-stretch gap-10 lg:flex-row lg:items-start lg:justify-between xl:gap-10">
          <div className="w-full lg:max-w-[560px] lg:shrink-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.0952em] text-purple sm:text-[10.5px]">
              • TRUSTED CARE MANAGEMENT PLATFORM
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
            className="w-full rounded-[20px] px-6 pb-8 pt-6 sm:rounded-[24px] sm:px-8 lg:max-w-[581px] lg:shrink-0 lg:rounded-[28px] lg:px-11 lg:pb-9 lg:pt-[30px]"
            style={{
              background:
                "linear-gradient(180deg, rgba(248, 238, 255, 0.3) 0%, rgba(159, 31, 246, 0.13) 100%)",
            }}
          >
            <p className="text-center text-[10px] font-bold uppercase tracking-[0.1273em] text-purple sm:text-[11px]">
              BOOK YOUR DEMO
            </p>
            <h2 className="mt-3 text-center text-[26px] font-extrabold text-navy sm:mt-4 sm:text-[32px]">
              Book a 30-Min Demo
            </h2>
            <p className="mt-1 text-center text-[13px] font-medium text-muted sm:mt-[6px] sm:text-[14px]">
              See Clinicus in action for your programs.
            </p>

            <form
              className="mt-5 space-y-4 sm:mt-[23px] sm:space-y-[18px]"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-[20px]">
                <label className="block">
                  <span className="sr-only">Name</span>
                  <input
                    type="text"
                    placeholder="Name*"
                    className="h-12 w-full rounded-[10px] border border-border bg-white px-4 text-[12.5px] font-medium text-navy placeholder:text-placeholder outline-none focus:border-purple"
                  />
                </label>
                <label className="block">
                  <span className="sr-only">Email Address</span>
                  <input
                    type="email"
                    placeholder="Email Address*"
                    className="h-12 w-full rounded-[10px] border border-border bg-white px-4 text-[12.5px] font-medium text-navy placeholder:text-placeholder outline-none focus:border-purple"
                  />
                </label>
                <label className="block">
                  <span className="sr-only">Contact Number</span>
                  <input
                    type="tel"
                    placeholder="Contact Number*"
                    className="h-12 w-full rounded-[10px] border border-border bg-white px-4 text-[12.5px] font-medium text-navy placeholder:text-placeholder outline-none focus:border-purple"
                  />
                </label>
                <label className="block">
                  <span className="sr-only">Organization</span>
                  <input
                    type="text"
                    placeholder="Organization*"
                    className="h-12 w-full rounded-[10px] border border-border bg-white px-4 text-[12.5px] font-medium text-navy placeholder:text-placeholder outline-none focus:border-purple"
                  />
                </label>
              </div>
              <p className="text-[10px] font-medium leading-[15px] text-form-disclaimer">
                By submitting this form, you agree to receive communications from
                Clinicus including emails, calls, and marketing messages. You
                may unsubscribe at any time.
              </p>
              <button
                type="submit"
                className="h-[52px] w-full rounded-xl bg-purple text-base font-bold text-white transition-opacity hover:opacity-90 sm:h-[58px] sm:text-[18.5px]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
