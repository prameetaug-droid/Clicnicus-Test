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

            <form className="mt-8 space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Name*"
                  required
                  className="h-12 rounded-[10px] border border-[#e4eaf2] bg-white px-4 text-sm font-medium placeholder-[#a6b4c3] focus:outline-none focus:ring-2 focus:ring-purple/20"
                />
                <input
                  type="email"
                  placeholder="Email Address*"
                  required
                  className="h-12 rounded-[10px] border border-[#e4eaf2] bg-white px-4 text-sm font-medium placeholder-[#a6b4c3] focus:outline-none focus:ring-2 focus:ring-purple/20"
                />
                <input
                  type="tel"
                  placeholder="Contact Number*"
                  required
                  className="h-12 rounded-[10px] border border-[#e4eaf2] bg-white px-4 text-sm font-medium placeholder-[#a6b4c3] focus:outline-none focus:ring-2 focus:ring-purple/20"
                />
                <input
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
            </form>
          </div>
        </div>
      </SectionContainer>

    </section>
  );
}
