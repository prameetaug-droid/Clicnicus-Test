import Image from "next/image";
import BlurGradient from "./BlurGradient";
import { SectionContainer } from "./SectionContainer";

const metrics = [
  { value: "$20M+", label: "Revenue generated" },
  { value: "85%", label: "Care gaps reduced" },
  { value: "40%", label: "Faster tasks" },
  { value: "~70%", label: "Better outcomes" },
  { value: "97%", label: "Billing success" },
  { value: "150+", label: "EHR integrations" },
];

export default function StatsSection() {
  return (
    <section className="relative pt-12 md:pt-20 lg:pt-[95px]">
      <BlurGradient className="-left-[80px] top-[20%] hidden h-[280px] w-[280px] opacity-40 md:block md:h-[400px] md:w-[400px]" />

      <SectionContainer>
        <div className="flex flex-col items-center gap-3 text-center sm:gap-[15px] lg:relative lg:block lg:h-[449px]">
          <div
            className="order-2 rounded-[24px] p-6 sm:rounded-[32px] sm:p-8 lg:absolute lg:bottom-0 lg:left-0 lg:order-none lg:flex lg:h-[367px] lg:w-full lg:items-center lg:rounded-[38px] lg:p-0"
            style={{
              background:
                "linear-gradient(140deg, rgba(160, 35, 255, 1) 0%, rgba(15, 44, 83, 1) 100%)",
            }}
          >
            <div className="lg:pl-[57px]">
              <h2 className="text-[26px] font-light leading-[1.2] text-white sm:text-[32px] md:text-[36px] lg:max-w-[520px] lg:text-[41px] lg:leading-[51px]">
                Numbers Practices See After Switching to Clinicus
              </h2>
              <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 sm:gap-x-8 lg:mt-[28px] lg:gap-x-[48px] lg:gap-y-[15px]">
                {metrics.map((metric) => (
                  <div key={metric.label}>
                    <p className="text-2xl font-extrabold text-white sm:text-[28px] lg:text-[32px]">
                      {metric.value}
                    </p>
                    <p className="text-[11px] font-medium text-[#E5D9FA] sm:text-xs">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative order-1 hidden h-[240px] w-full overflow-hidden rounded-[24px] sm:h-[300px] sm:rounded-[32px] md:h-[360px] lg:absolute lg:right-0 lg:top-0 lg:order-none lg:block lg:h-[449px] lg:w-[48%] lg:rounded-[41px] xl:w-[560px]">
            <Image
              src="/images/stats-doctor-390097.png"
              alt="Doctor with elderly patient"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
