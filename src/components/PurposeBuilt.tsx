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
                className="rounded-[16px] border border-border-light bg-[rgba(228,234,242,0.56)] p-5 sm:rounded-[20px] sm:p-6 md:p-8"
              >
                <div className="grid gap-6 md:grid-cols-[1fr_auto_1fr] md:items-start md:gap-4 lg:gap-6">
                  <div>
                    <span className="inline-flex h-[26px] items-center justify-center rounded-[13px] bg-challenge-bg px-3 text-[9px] font-bold uppercase tracking-[0.0444em] text-[#E0492D]">
                      CHALLENGE
                    </span>
                    <p className="mt-3 text-[32px] font-medium text-challenge sm:text-[38px] md:text-[42px]">
                      {item.stat}
                    </p>
                    <p className="mt-1 text-xs font-semibold leading-4 text-muted sm:text-[12px]">
                      {item.challenge}
                    </p>
                  </div>

                  <div className="hidden items-center justify-center text-2xl text-purple md:flex">
                    →
                  </div>

                  <div>
                    <span className="inline-flex h-6 items-center justify-center rounded-xl bg-purple-light px-3 text-[9px] font-bold uppercase tracking-[0.0444em] text-purple" style={{ color: '#9F1FF6' }}>
                      CLINICUS SOLUTION
                    </span>
                    <p className="mt-3 text-xl text-navy sm:text-2xl md:text-[26px]">
                      {item.solution}
                    </p>
                    <p className="mt-2 text-[13px] leading-[19px] text-muted">
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
