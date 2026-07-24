import Image from "next/image";
import { SectionContainer } from "./SectionContainer";

export default function Header() {
  return (
    <header className="relative z-20">
      <SectionContainer className="flex items-center justify-between gap-4 pt-4 pb-[14px]">
        <Image
          src="/images/logo.svg"
          alt="Clinicus"
          width={193}
          height={58}
          priority
          className="h-auto w-[130px] sm:w-[160px] lg:w-[193px]"
        />
        <a
          href="tel:+18337998881"
          className="flex h-9 shrink-0 items-center justify-center gap-1.5 rounded-[10px] bg-phone-bg px-2.5 py-2 sm:h-10 sm:gap-[7px] sm:px-[7px] md:w-[154px]"
        >
          <Image
            src="/images/phone-icon.svg"
            alt=""
            width={22}
            height={22}
            className="h-[18px] w-[18px] sm:h-[22px] sm:w-[22px]"
            aria-hidden
          />
          <span className="text-[10px] font-bold text-navy sm:text-[12.5px]">
            <span className="hidden min-[400px]:inline">+1 833-799-8881</span>
            <span className="min-[400px]:hidden">Call Us</span>
          </span>
        </a>
      </SectionContainer>
      <div className="h-px w-full bg-border" />
    </header>
  );
}
