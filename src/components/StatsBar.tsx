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
        <div className="rounded-[20px] border border-[#e5ebf0] bg-[#e4eaf2] px-0 py-8 lg:h-[140px] lg:py-[31px]">
          <div className="flex flex-col items-center justify-center gap-6 lg:flex-row lg:gap-0">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="flex w-full flex-col items-center justify-center lg:w-[300px]"
              >
                <span className="text-[45px] font-extrabold text-[#0f2c53]">
                  {stat.value}
                </span>
                <span className="text-[17.5px] font-medium text-[#5b7392]">
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
