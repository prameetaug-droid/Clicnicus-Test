import Image from "next/image";
import { SectionContainer } from "./SectionContainer";

export default function Header() {
  return (
    <header className="relative z-20">
      <SectionContainer className="flex items-center justify-between gap-4 pt-4 pb-[14px]">
        <div className="flex items-center gap-4">
          <Image
            src="/images/logo.svg"
            alt="Clinicus"
            width={193}
            height={58}
            priority
            className="h-auto w-[130px] sm:w-[160px] lg:w-[193px]"
          />
          <div className="h-6 w-px bg-border-light" />
        </div>
        <a
          href="tel:+18337998881"
          className="header-phone flex h-9 shrink-0 items-center justify-center gap-1.5 px-2.5 py-2 sm:h-10 sm:gap-[7px] sm:px-[7px] md:w-[154px]"
        >
          <Image
            src="/images/phone-icon.svg"
            alt=""
            width={22}
            height={22}
            className="h-[18px] w-[18px] sm:h-[22px] sm:w-[22px]"
            aria-hidden
          />
          <span className="text-[10px] sm:text-[12.5px] font-bold sm:leading-[17.075px] text-navy">
            <span className="hidden sm:inline">+1 833-799-8881</span>
            <span className="inline sm:hidden">Call Us</span>
          </span>
        </a>
      </SectionContainer>
      <div className="pointer-events-none absolute left-0 right-0 top-[88px] h-0 border-t border-[#E4EAF2]" />
    </header>
  );
}
