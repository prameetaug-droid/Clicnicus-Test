import BlurGradient from "./BlurGradient";
import {
  SectionContainer,
  SectionHeader,
} from "./SectionContainer";

const challenges = [
  {
    stat: "$41B",
    challenge: "Hospital Readmissions",
    solution: "Reducing Hospital Readmissions",
    description:
      "Real-time monitoring and automated alerts enable timely interventions before issues escalate.",
  },
  {
    stat: "8 Hrs",
    challenge: "Administrative Burden, weekly",
    solution: "40% Faster Task Completion",
    description:
      "Automated workflows and documentation free your team from admin workloads.",
  },
  {
    stat: "~50%",
    challenge: "Patient Non-Compliance",
    solution: "~85% Care Gaps Reduced",
    description:
      "Automated outreach, 24/7 RN support, reminders, and monitoring tools keep patients active and adherent between visits.",
  },
  {
    stat: "$135K",
    challenge: "Claim Loss, yearly",
    solution: "97% Billing Success",
    description:
      "Built-in time tracking and audit-ready documentation.",
  },
];

export default function PurposeBuilt() {
  return (
    <section className="relative pt-14 md:pt-20 lg:pt-[108px]">
      <BlurGradient className="-left-[120px] top-[120px] h-[280px] w-[280px] opacity-40 sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px]" />

      <SectionContainer>
        <div className="flex flex-col items-center gap-8 lg:gap-[31px]">
          <SectionHeader
            eyebrow="PURPOSE-BUILT SOLUTION"
            title="Still Managing the Problem Or Solving It with Clinicus?"
            description="These aren't just any numbers, they're what fragmented tools and manual processes cost practices and country every day. Here's how Clinicus fixes each one of them."
          />

          <div className="flex w-full max-w-[811px] flex-col gap-5 sm:gap-[26px]">
            {challenges.map((item) => (
              <article
                key={item.stat}
                className="w-full rounded-[16px] bg-[rgba(228,234,242,0.56)] p-5 sm:p-6"
              >
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0 flex-1">
                    <span className="inline-flex rounded-[12px] bg-[#FCECE9] px-3 py-1 text-[9px] font-bold uppercase tracking-[0.4px] text-[#E0492D]">
                      CHALLENGE
                    </span>
                    <p className="mt-4 text-[34px] font-semibold leading-[42px] text-[#E02D3E] sm:text-[42px] sm:leading-[57px]">
                      {item.stat}
                    </p>
                    <p className="mt-2 text-[12px] font-semibold leading-[16px] text-[#5B7392]">
                      {item.challenge}
                    </p>
                  </div>
 
                  <div className="min-w-0 flex-1">
                    <span className="inline-flex rounded-[12px] bg-[#EDF5FE] px-3 py-1 text-[9px] font-bold uppercase tracking-[0.4px] text-[#9F1FF6]">
                      CLINICUS SOLUTION
                    </span>
                    <p className="mt-4 text-[22px] font-normal leading-[32px] text-[#0F2C53] sm:text-[26px] sm:leading-[36px]">
                      {item.solution}
                    </p>
                    <p className="mt-3 max-w-[100%] text-[13px] font-medium leading-[19px] text-[#5B7392] sm:max-w-[420px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
