import { SectionContainer } from "./SectionContainer";

const stats = [
  { value: "200+", label: "Providers" },
  { value: "150K+", label: "Patients" },
  { value: "100+", label: "Payors" },
  { value: "20+", label: "U.S. States" },
];

export default function StatsBar() {
  return (
    <section className="pt-8 md:pt-12 lg:pt-[58px]">
      <SectionContainer>
        <div className="overflow-hidden rounded-[16px] border border-border-light bg-border sm:rounded-[20px]">
          <div className="grid grid-cols-2 lg:flex lg:h-[140px] lg:items-center">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center justify-center px-4 py-6 sm:py-8 lg:flex-1 lg:border-l lg:border-border lg:py-[31px] ${
                  index % 2 === 0 ? "border-r border-border lg:border-r-0" : ""
                } ${index < 2 ? "border-b border-border lg:border-b-0" : ""} ${
                  index === 0 ? "lg:border-l-0" : ""
                }`}
              >
                <span className="text-[28px] font-extrabold text-navy sm:text-[36px] lg:text-[45px]">
                  {stat.value}
                </span>
                <span className="text-sm font-medium text-muted sm:text-base lg:text-[17.5px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
