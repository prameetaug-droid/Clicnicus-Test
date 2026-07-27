import Image from "next/image";
import BlurGradient from "./BlurGradient";
import { SectionContainer } from "./SectionContainer";

export default function CtaBanner() {
  return (
    <section className="relative pt-10 md:pt-16 lg:pt-[78px]">
      <BlurGradient className="-right-[80px] top-[40%] hidden h-[300px] w-[300px] opacity-40 md:block md:h-[400px] md:w-[400px]" />

      <SectionContainer>
        <div
          className="relative flex min-h-[360px] flex-col overflow-hidden rounded-[18px] sm:min-h-[400px] sm:rounded-[22px] lg:h-[367px] lg:flex-row"
          style={{
            background:
              "linear-gradient(165deg, rgba(159, 31, 246, 1) 0%, rgba(200, 180, 240, 0.4) 100%)",
          }}
        >
          <div className="relative z-10 flex flex-col justify-center px-6 py-8 sm:px-10 sm:py-10 lg:max-w-[55%] lg:pl-[69px] lg:pr-0">
            <h2 className="text-[32px] font-light leading-[1.15] text-white sm:text-[42px] md:text-[48px] lg:text-[54px] lg:leading-[64px]">
              Ready to Elevate Patient Care?
            </h2>
            <a
              href="#demo"
              className="mt-5 inline-flex h-11 w-fit items-center justify-center gap-2 rounded-[12px] bg-white px-6 text-sm font-bold text-navy transition-opacity hover:opacity-90 sm:mt-[15px] sm:h-12 sm:w-fit sm:text-[15.3px]"
            >
              <span>Book A Demo</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className="shrink-0">
                <path
                  d="M3 2L11 7L3 12"
                  stroke="#0F2C53"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          <div className="relative h-[220px] w-full sm:h-[260px] lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-[55%] xl:w-[630px]">
            <Image
              src="/images/cta-doctor-7b35af.png"
              alt="Healthcare professional"
              fill
              className="object-cover object-top lg:rounded-r-[22px]"
            />
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
