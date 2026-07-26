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
                className="relative rounded-[16px] border-0 bg-[rgba(228,234,242,0.56)] w-[811px] h-[155px] p-4 sm:rounded-[20px] sm:p-4 md:p-4 overflow-hidden" style={{ boxSizing: 'border-box' }}
              >
                <div>
                  <div style={{ position: 'absolute', width: '80px', height: '26px', left: '37px', top: '23px', background: '#FCECE9', borderRadius: '13px' }} />

                  <span style={{ position: 'absolute', width: '80px', height: '12px', left: '37px', top: '30px', fontFamily: 'Manrope, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', fontStyle: 'normal', fontWeight: 700, fontSize: '9px', lineHeight: '12px', textAlign: 'center', letterSpacing: '0.4px', color: '#E0492D' }}>
                    CHALLENGE
                  </span>

                  <p style={{ position: 'absolute', width: '260px', height: '57px', left: '37px', top: '59px', fontFamily: 'Manrope, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', fontStyle: 'normal', fontWeight: 500, fontSize: '42px', lineHeight: '57px', margin: 0, color: '#E02D3E' }}>
                    {item.stat}
                  </p>

                  <span style={{ position: 'absolute', width: '260px', height: '16px', left: '37px', top: '112px', fontFamily: 'Manrope, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', fontStyle: 'normal', fontWeight: 600, fontSize: '12px', lineHeight: '16px', color: '#5B7392' }}>
                    {item.challenge}
                  </span>

                  <div style={{ position: 'absolute', width: '116px', height: '24px', left: '378px', top: '24px', background: '#EDF5FE', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontFamily: 'Manrope, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', fontStyle: 'normal', fontWeight: 700, fontSize: '9px', lineHeight: '12px', textAlign: 'center', letterSpacing: '0.4px', color: '#9F1FF6' }}>
                      CLINICUS SOLUTION
                    </span>
                  </div>

                  <div style={{ position: 'absolute', width: '25px', height: '33px', left: '262px', top: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontFamily: 'Manrope, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', fontStyle: 'normal', fontWeight: 400, fontSize: '24px', lineHeight: '33px', color: '#9F1FF6' }}>
                      →
                    </span>
                  </div>

                  <p style={{ position: 'absolute', width: '391px', height: '36px', left: '377px', top: '59px', fontFamily: 'Manrope, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', fontStyle: 'normal', fontWeight: 400, fontSize: '26px', lineHeight: '36px', margin: 0, color: '#0F2C53' }}>
                    {item.solution}
                  </p>

                  <p style={{ position: 'absolute', width: '414px', height: '41px', left: '377px', top: '98px', fontFamily: 'Manrope, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', fontStyle: 'normal', fontWeight: 500, fontSize: '13px', lineHeight: '19px', margin: 0, color: '#5B7392' }}>
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
