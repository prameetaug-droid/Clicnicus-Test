import Image from "next/image";

export default function HeroImage() {
  return (
    <section className="relative mt-8 overflow-hidden md:mt-11">
      <div className="relative w-full">
        <div className="relative h-[220px] w-full overflow-hidden rounded-2xl sm:h-[300px] md:h-[360px] md:rounded-none lg:h-[431px]">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/images/hero-doctor-79299a.png"
              alt="Experienced doctor using smartphone"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={78}
              className="object-cover hero-image-grayscale"
              style={{ objectPosition: '40% 35%' }}
              priority
            />
          </div>

          {/* Live Patient Snapshot widget */}
          <div
            className="absolute left-[2%] top-[20%] block w-[48%] max-w-[140px] rounded-[12px] border border-white/30 p-2 sm:left-[4%] sm:top-[24%] sm:w-[42%] sm:max-w-[200px] sm:rounded-[16.6px] sm:p-3 md:top-[26%] md:max-w-[284px] md:p-4 lg:top-[28%] lg:p-5"
            style={{ background: "rgba(26, 26, 26, 0.33)" }}
          >
            <p className="text-[7px] font-extrabold text-white sm:text-[11px] md:text-[13px] lg:text-[15.4px]">
              LIVE PATIENT SNAPSHOT
            </p>
            <p className="mt-0.5 text-[6px] font-medium text-[#BFCCDE] sm:mt-1 sm:text-[8px] md:text-[9.1px]">
              Spend Today
            </p>
            <p className="text-xs font-extrabold text-white sm:text-sm md:text-base lg:text-[18.3px]">
              98% SpO2
            </p>
            <img
              src="/images/Vector.svg"
              alt="trend chart"
              className="mt-1 w-full sm:mt-2 md:mt-3"
              loading="lazy"
              decoding="async"
            />
            <div className="mt-1.5 flex items-end justify-between sm:mt-2">
              <div>
                <p className="text-[5px] font-medium text-[#BFCCDE] sm:text-[7px] md:text-[8.3px]">
                  Blood Pressure
                </p>
                <p className="text-[7px] font-bold text-[#FF826B] sm:text-[10px] md:text-[12.4px]">
                  121/80
                </p>
              </div>
              <span className="text-[7px] font-semibold text-[#8CD9A6] sm:text-[10px] md:text-[11.5px]">
                Normal
              </span>
              <span className="h-2 w-2 rounded-full bg-green sm:h-3 sm:w-3 md:h-[14px] md:w-[14px]" />
            </div>
          </div>

          {/* Dr. Sarah Chen card */}
          <div className="absolute bottom-[6%] left-[50%] flex -translate-x-1/2 items-center gap-1 rounded-xl bg-white px-1.5 py-1.5 shadow-[0px_14px_28px_0px_rgba(15,26,51,0.16)] sm:bottom-[8%] sm:gap-2 sm:px-2 sm:py-2 md:bottom-auto md:left-[35%] md:top-[62%] md:w-[212px] md:-translate-x-0 md:gap-3 md:px-[9px] lg:left-[420px] lg:top-[302px] lg:-translate-x-0">
            <img
              src="/images/SCname.svg"
              alt="SC initials"
              className="h-6 w-6 shrink-0 rounded-full sm:h-7 sm:w-7 md:h-10 md:w-10"
              loading="lazy"
              decoding="async"
            />
            <div>
              <p className="text-[10px] font-bold text-navy sm:text-xs md:text-[14px]">
                Dr. Sarah Chen
              </p>
              <p className="text-[8px] font-medium text-muted sm:text-[9px] md:text-[11.5px]">
                Care Coordinator
              </p>
            </div>
          </div>

          {/* Find patient search */}
          <div className="absolute right-[2%] top-[42%] flex h-9 w-[48%] max-w-[130px] items-center gap-1.5 rounded-full border border-border bg-white px-2 shadow-[0px_14px_28px_0px_rgba(15,26,51,0.16)] sm:right-[3%] sm:top-[44%] sm:h-10 sm:w-[42%] sm:max-w-[170px] sm:gap-2 sm:px-2.5 md:right-[3%] md:top-[46%] md:h-12 md:max-w-[200px] md:px-3 lg:right-[211px] lg:top-[218px] lg:h-16 lg:gap-3 lg:px-[18px] lg:w-auto lg:max-w-none lg:rounded-full">
           <img
             src="/images/Greentick.svg"
             alt="checkmark"
             width={28}
             height={28}
             className="h-5 w-5 shrink-0 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8"
             loading="lazy"
             decoding="async"
           />
           <span className="text-[8px] font-medium text-muted sm:text-[10px] md:text-[11px] lg:text-[13px]">
             Find patient by ID...
           </span>
          </div>

          {/* Patients at Risk widget */}
          <div
           className="absolute hidden h-[95px] w-[130px] rounded-[12px] border-[0.5px] border-white/12 bg-[rgba(28,31,36,0.41)] p-[10px] shadow-2xl z-20 right-[2%] top-[42%] box-border sm:h-[105px] sm:w-[150px] sm:p-[12px] md:right-[3%] md:top-[48%] md:h-[120px] md:w-[170px] md:p-[13px] lg:block lg:left-[53%] lg:top-[290px] lg:h-[131px] lg:w-[183px] lg:p-[14.6px] lg:rounded-[14.5772px] lg:border-[0.607384px]"
          >
           <div className="absolute right-[10px] top-[10px] sm:right-[12px] sm:top-[12px] lg:right-[14.6px] lg:top-[14.6px]">
             <img
               src="/images/Orangebell.svg"
               alt="alert bell"
               className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6"
               loading="lazy"
               decoding="async"
             />
           </div>
           <p className="text-[5px] font-bold uppercase tracking-[0.1em] text-[#B2B2B8] sm:text-[5.5px] lg:text-[6.1px] lg:tracking-[0.12em]">
             ALERT
           </p>
           <p className="text-[9px] font-bold text-white sm:text-[10px] lg:text-[11.5px]">Patients at Risk</p>
           <div className="mt-1 rounded-[8px] bg-white/8 p-1.5 sm:mt-1.5 sm:rounded-[9px] sm:p-1.5 lg:mt-2 lg:rounded-[9.7px] lg:p-2.5">
             <div className="flex items-center gap-1 sm:gap-1.5">
               <img
                 src="/images/Triangle.svg"
                 alt="alert triangle"
                 className="h-5 w-5 shrink-0 sm:h-6 sm:w-6 lg:h-8 lg:w-8"
                 loading="lazy"
                 decoding="async"
               />
               <div>
                 <p className="text-[6px] font-bold leading-tight text-white sm:text-[7px] lg:text-[8.5px]">
                   3 patients flagged for
                 </p>
                 <p className="text-[6px] font-bold leading-tight text-white sm:text-[7px] lg:text-[8.5px]">
                   abnormal vitals today
                 </p>
               </div>
             </div>
           </div>
           <p className="mt-1 text-[5px] font-medium text-[#A6A6AD] sm:mt-1.5 sm:text-[5.5px] lg:mt-1.5 lg:text-[6.7px]">
             Action required, please review care plans.
           </p>
          </div>

          {/* Smart Scale Data widget */}
          <div
            className="absolute right-[2%] top-[3%] block w-[40%] max-w-[130px] rounded-[11px] p-2 sm:right-[4%] sm:top-[5%] sm:max-w-[160px] sm:p-2.5 md:right-[5%] md:top-[6%] md:max-w-[190px] md:rounded-[13px] md:p-[18px] lg:right-[6%] lg:top-[7%]"
            style={{ background: "rgba(0, 0, 0, 0.24)" }}
          >
            <div className="absolute right-2 top-2 sm:right-2.5 sm:top-2.5 md:right-3 md:top-3 lg:right-[18px] lg:top-[18px]">
              <img
                src="/images/thumb.svg"
                alt="thumbs up"
                className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="text-[5px] font-bold uppercase tracking-[0.08em] text-white sm:text-[5.5px] md:text-[6px] lg:text-[7.1px] lg:tracking-[0.1053em]">
              SMART SCALE DATA
            </p>
            <p className="text-[8px] font-bold text-white sm:text-[9px] md:text-xs lg:text-[13.5px]">
              Weight Tracking
            </p>
            <p className="mt-0.5 text-sm font-extrabold text-white sm:text-base md:mt-1 md:text-lg lg:text-[22.6px]">
              195 lbs
            </p>
            <p className="text-[6px] font-medium text-white sm:text-[7px] md:text-[8px] lg:text-[9.4px]">
              You have lost 3 lbs. Good job!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}