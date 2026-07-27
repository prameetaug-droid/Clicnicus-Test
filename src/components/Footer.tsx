import Image from "next/image";
import { SectionContainer } from "./SectionContainer";

export default function Footer() {
  return (
    <div className="relative isolate overflow-visible">
      <footer className="relative z-0 mt-12 overflow-visible md:mt-16 lg:mt-[80px]" style={{ backgroundColor: "#0F2C53" }}>
        {/* Blue banner backdrop */}
        <div className="pointer-events-none absolute left-1/2 top-0 z-0 h-[547px] w-[1440px] max-w-full -translate-x-1/2" style={{ backgroundColor: "#0F2C53" }} />
        
        <div className="pointer-events-none absolute hidden right-[30px] top-[clamp(-120px,-8.5vw,-90px)] z-10 aspect-[480/620] w-[clamp(300px,27vw,420px)] lg:block xl:right-[max(30px,calc((100vw-1440px)/2+30px))]">
          <Image
            src="/images/footer-doctor-4ebf4c.png"
            alt=""
            fill
            className="object-contain object-right"
            aria-hidden
          />
        </div>

        <SectionContainer className="relative z-10 pb-8 pt-16 sm:pb-10 sm:pt-20 lg:pt-[140px]">
        <Image
          src="/images/logo-footer.svg"
          alt="Clinicus"
          width={265}
          height={80}
          className="-mt-6 mb-8 h-auto w-[180px] sm:-mt-7 sm:mb-10 sm:w-[220px] lg:-mt-8 lg:mb-[42px] lg:w-[265px]"
        />

        <h2 className="max-w-[630px] text-[32px] font-light leading-[1.15] text-white sm:text-[40px] md:text-[44px] lg:text-[48px] lg:leading-[1.09]">
          Start Your Care Management Journey{" "}
          <span className="uppercase">Today</span>
        </h2>

        <a
          href="#demo"
          className="mt-5 inline-flex h-12 w-full items-center justify-center rounded-xl bg-white text-base font-bold text-navy transition-opacity hover:opacity-90 sm:mt-[19px] sm:h-14 sm:w-[220px] sm:text-[17.5px]"
        >
          Contact Us
        </a>

        <div className="mt-10 flex flex-col gap-8 sm:mt-12 lg:mt-[34px] lg:flex-row lg:items-start lg:gap-[50px]">
          <div className="flex flex-col gap-8 sm:flex-row sm:flex-wrap sm:gap-12 md:gap-16 lg:flex-1 lg:gap-[px] lg:pr-10">
            <div>
              <p className="text-xs font-medium text-footer-text" style={{ color: "#A6B8D1" }}>Follow us on</p>
              <Image
                src="/images/social-icons.svg"
                alt="Social media links"
                width={93}
                height={21}
                className="mt-3"
              />
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.1091em] text-footer-text" style={{ color: "#A6B8D1" }}>
                CONTACT
              </p>
              <a
                href="mailto:VBC@sciometrix.com"
                className="mt-2 block text-[13px] font-medium text-[#E0E5F0]"
              >
                VBC@sciometrix.com
              </a>
            </div>
          </div>

          <div className="w-[196px] lg:flex-[0_1_800px]">
            <p className="h-[15px] w-[59px] text-[11px] font-bold uppercase tracking-[1.2px] text-[#A6B8D1]">
              ADDRESS
            </p>
            <p className="mt-2 h-[36px] w-[196px] text-[13px] font-medium leading-[18px] text-[#E0E6F0]">
              306 S Washington Ave, 6th Floor
              <br />
              Royal Oak, Michigan - 48067
            </p>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 lg:mt-[12px]" style={{ height: "1px", backgroundColor: "#334766" }} />

        <div className="mt-5 flex flex-col gap-3 sm:mt-[22px] sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <p className="text-[11px] font-medium sm:text-[11.5px]" style={{ color: "#99ABC7" }}>
            © 2026 Sciometrix. All rights reserved.
          </p>
          <a
            href="#"
            className="text-[11px] font-medium hover:text-white sm:text-[11.5px]"
            style={{ color: "#99ABC7" }}
          >
            Privacy Policy
          </a>
        </div>
      </SectionContainer>
      </footer>
    </div>
  );
}
