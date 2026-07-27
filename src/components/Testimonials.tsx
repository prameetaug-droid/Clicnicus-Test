import BlurGradient from "./BlurGradient";
import {
  SectionContainer,
  SectionHeader,
} from "./SectionContainer";

const testimonials = [
  {
    quote:
      "I never knew how much support I needed until I connected with Clinicus. Their team truly cares about my well-being.",
    initial: "J",
    name: "Jonathan, 64",
    avatar: "/images/J.svg",
  },
  {
    quote:
      "I never thought drinking pickle juice could be one of the reasons for my high blood pressure. The team educated me. They truly care!",
    initial: "D",
    name: "David, 82",
    avatar: "/images/D.svg",
  },
  {
    quote:
      "I am incredibly grateful for the support from Clinicus! Their coaching helped me lower my blood pressure, giving me peace of mind.",
    initial: "M",
    name: "Michael, 70",
    avatar: "/images/M.svg",
  },
];

export default function Testimonials() {
  return (
    <section className="relative pb-12 pt-14 md:pb-16 md:pt-20 lg:pb-[80px] lg:pt-[124px]">
      <BlurGradient className="-right-[80px] top-[30%] hidden h-[280px] w-[280px] opacity-40 md:block md:h-[400px] md:w-[400px]" />

      <SectionContainer>
        <SectionHeader
          eyebrow="REAL STORIES, REAL SUCCESS"
          title="How Patients Thrive with Clinicus"
        />

        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:gap-6 md:grid-cols-2 lg:mt-[47px] lg:grid-cols-3 lg:gap-[32px]">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="rounded-[16px] border border-border bg-surface px-5 py-6 sm:rounded-[18px] sm:px-6 sm:py-[27px] md:last:col-span-2 md:last:max-w-none lg:last:col-span-1"
              style={{ backgroundColor: "#FBFCFE" }}
            >
              <p className="text-[12px] font-medium leading-[18px] text-navy sm:text-[12.5px]">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4 sm:mt-[14px]">
                <img
                  src={item.avatar}
                  alt={`${item.initial} avatar`}
                  width={36}
                  height={36}
                  className="flex-shrink-0"
                />
                <span className="text-[12.5px] font-bold text-navy">
                  {item.name}
                </span>
              </div>
            </article>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
