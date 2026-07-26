import { type ReactNode } from "react";

export function SectionContainer({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-20 xl:px-[120px] ${className}`}
    >
      {children}
    </div>
  );
}

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[10px] font-bold uppercase tracking-[0.12em] sm:text-[11px]" style={{ color: 'var(--color-purple)' }}>
      {children}
    </p>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-[28px] font-light leading-[1.2] text-navy sm:text-[34px] md:text-[38px] lg:text-[40px] lg:leading-[50px]">
      {children}
    </h2>
  );
}

export function SectionDescription({ children }: { children: ReactNode }) {
  return (
    <p className="max-w-[640px] text-[14px] font-medium leading-[21px] text-muted sm:text-[15px] sm:leading-[22px]">
      {children}
    </p>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  className = "",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center gap-3 text-center sm:gap-[15px] ${className}`}
    >
      <SectionEyebrow>{eyebrow}</SectionEyebrow>
      <SectionTitle>{title}</SectionTitle>
      {description ? <SectionDescription>{description}</SectionDescription> : null}
    </div>
  );
}
