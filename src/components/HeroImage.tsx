import Image from "next/image";

export default function HeroImage() {
  return (
    <section className="relative mt-8 overflow-hidden md:mt-11">
      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 md:px-0">
        <div className="relative h-[220px] w-full overflow-hidden rounded-2xl sm:h-[300px] md:h-[360px] md:rounded-none lg:h-[431px]">
          <Image
            src="/images/hero-doctor-79299a.png"
            alt="Experienced doctor using smartphone"
            fill
            className="object-cover object-center"
            priority
          />

          {/* Live Patient Snapshot widget */}
          <div
            className="absolute left-[4%] top-[28%] hidden w-[42%] max-w-[284px] rounded-[16.6px] border border-white/30 p-3 sm:block sm:p-4 md:p-5"
            style={{ background: "rgba(26, 26, 26, 0.33)" }}
          >
            <p className="text-[11px] font-extrabold text-white sm:text-[13px] md:text-[15.4px]">
              LIVE PATIENT SNAPSHOT
            </p>
            <p className="mt-1 text-[8px] font-medium text-[#BFCCDE] sm:text-[9.1px]">
              Spend Today
            </p>
            <p className="text-sm font-extrabold text-white sm:text-base md:text-[18.3px]">
              98% SpO2
            </p>
            <svg
              className="mt-2 w-full sm:mt-3"
              viewBox="0 0 256 24"
              fill="none"
              aria-hidden
            >
              <path
                d="M0 20 L30 18 L60 12 L90 16 L120 8 L150 14 L180 6 L210 10 L256 4"
                stroke="#9F1FF6"
                strokeWidth="2"
              />
            </svg>
            <div className="mt-2 flex items-end justify-between">
              <div>
                <p className="text-[7px] font-medium text-[#BFCCDE] sm:text-[8.3px]">
                  Blood Pressure
                </p>
                <p className="text-[10px] font-bold text-[#FF826B] sm:text-[12.4px]">
                  121/80
                </p>
              </div>
              <span className="text-[10px] font-semibold text-[#8CD9A6] sm:text-[11.5px]">
                Normal
              </span>
              <span className="h-3 w-3 rounded-full bg-green sm:h-[14px] sm:w-[14px]" />
            </div>
          </div>

          {/* Dr. Sarah Chen card */}
          <div className="absolute bottom-[8%] left-[50%] hidden -translate-x-1/2 items-center gap-2 rounded-2xl bg-white px-2 py-2 shadow-[0px_14px_28px_0px_rgba(15,26,51,0.16)] sm:flex md:bottom-auto md:left-[37%] md:top-[62%] md:w-[212px] md:translate-x-0 md:gap-3 md:px-[9px] lg:left-[527px] lg:top-[262px]">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple text-[10px] font-bold text-white md:h-10 md:w-10 md:text-[12px]">
              SC
            </div>
            <div>
              <p className="text-xs font-bold text-navy md:text-[14px]">
                Dr. Sarah Chen
              </p>
              <p className="text-[10px] font-medium text-muted md:text-[11.5px]">
                Care Coordinator
              </p>
            </div>
          </div>

          {/* Find patient search */}
          <div className="absolute right-[4%] top-[18%] hidden h-12 w-[42%] max-w-[209px] items-center gap-2 rounded-[32px] border border-border bg-white px-3 shadow-[0px_14px_28px_0px_rgba(15,26,51,0.16)] md:flex md:h-16 md:gap-3 md:px-[18px] lg:right-[211px] lg:top-[218px]">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green text-xs font-bold text-white md:h-8 md:w-8 md:text-[14px]">
              ✓
            </div>
            <span className="text-[11px] font-medium text-muted md:text-[13px]">
              Find patient by ID...
            </span>
          </div>

          {/* Patients at Risk widget */}
          <div
            className="absolute bottom-[6%] right-[4%] hidden w-[38%] max-w-[183px] rounded-[14.6px] border border-white/12 p-2.5 lg:block lg:bottom-auto lg:right-[461px] lg:top-[300px] lg:p-[14.6px]"
            style={{ background: "rgba(28, 31, 36, 0.41)" }}
          >
            <p className="text-[6.1px] font-bold uppercase tracking-[0.12em] text-[#B2B2B8]">
              ALERT
            </p>
            <p className="text-[11.5px] font-bold text-white">Patients at Risk</p>
            <div className="mt-2 rounded-[9.7px] bg-white/8 p-2 lg:mt-3 lg:p-2.5">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-[8.5px] bg-white/12 lg:h-8 lg:w-8">
                  <svg
                    width="15"
                    height="13"
                    viewBox="0 0 15 13"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M7.5 1L1 12H14L7.5 1Z"
                      stroke="#FCA292"
                      strokeWidth="1.1"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[8.5px] font-bold leading-tight text-white">
                    3 patients flagged for
                  </p>
                  <p className="text-[8.5px] font-bold leading-tight text-white">
                    abnormal vitals today
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-1.5 text-[6.7px] font-medium text-[#A6A6AD] lg:mt-2">
              Action required, please review care plans.
            </p>
          </div>

          {/* Smart Scale Data widget */}
          <div
            className="absolute right-[4%] top-[6%] hidden w-[38%] max-w-[190px] rounded-[13.5px] p-3 md:block md:p-[18px] lg:right-[53px] lg:top-[80px]"
            style={{ background: "rgba(0, 0, 0, 0.24)" }}
          >
            <p className="text-[6px] font-bold uppercase tracking-[0.1053em] text-white md:text-[7.1px]">
              SMART SCALE DATA
            </p>
            <p className="text-xs font-bold text-white md:text-[13.5px]">
              Weight Tracking
            </p>
            <p className="mt-0.5 text-lg font-extrabold text-white md:mt-1 md:text-[22.6px]">
              195 lbs
            </p>
            <p className="text-[8px] font-medium text-white md:text-[9.4px]">
              You have lost 3 lbs. Good job!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
