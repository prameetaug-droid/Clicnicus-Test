import Image from "next/image";
import BlurGradient from "./BlurGradient";
import {
  SectionContainer,
  SectionHeader,
} from "./SectionContainer";

const featureCards = [
  {
    title: "Tech Integrations",
    description:
      "Direct integrations with your EHR, state HIE, and FDA-approved RPM devices.",
    bg: "bg-purple-card",
    icon: "link",
  },
  {
    title: "Outcome Reports",
    description:
      "Automated monthly reports and turn raw patient data into clear outcome summaries.",
    bg: "bg-purple-light",
    icon: "doc",
  },
  {
    title: "Audit-Ready Compliance",
    description: "HIPAA-compliant and audit-ready documentation always.",
    bg: "bg-purple-light",
    icon: "shield",
  },
  {
    title: "Risk Monitoring",
    description:
      "Continuous vital tracking and automated alerts flag deteriorating patients early.",
    bg: "bg-purple-card",
    icon: "link",
  },
];

function FeatureIcon({ type }: { type: string }) {
  if (type === "doc") {
    return (
      <svg width="15" height="20" viewBox="0 0 15 20" fill="none" aria-hidden>
        <rect
          x="1"
          y="1"
          width="13"
          height="18"
          rx="2"
          stroke="#0F2C53"
          strokeWidth="2.4"
        />
        <path d="M4 8H11M4 11H11M4 14H8" stroke="#0F2C53" strokeWidth="2.4" />
      </svg>
    );
  }
  if (type === "shield") {
    return (
      <svg width="18" height="20" viewBox="0 0 18 20" fill="none" aria-hidden>
        <path
          d="M9 1L17 5V10C17 15 13 18.5 9 19C5 18.5 1 15 1 10V5L9 1Z"
          stroke="#0F2C53"
          strokeWidth="2"
        />
      </svg>
    );
  }
  if (type === "link") {
    // use 2in1.svg for link-type features (Tech Integrations, Risk Monitoring)
    return (
      // Use a simple img tag so missing asset doesn't break SSR; replace with Image if the asset exists
      <img src="/images/2in1.svg" alt="link icon" width={24} height={24} />
    );
  }

  return (
    <svg width="20" height="10" viewBox="0 0 20 10" fill="none" aria-hidden>
      <path
        d="M1 5H19M14 1L19 5L14 9"
        stroke="#0F2C53"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function OurSolution() {
  return (
    <section className="relative pt-14 md:pt-20 lg:pt-[105px]">
      <BlurGradient className="-right-[80px] top-[30%] hidden h-[300px] w-[300px] opacity-40 md:block md:h-[400px] md:w-[400px]" />

      <SectionContainer>
        <SectionHeader
          eyebrow="OUR SOLUTION"
          title="One Platform For Your Complete Care Management"
          description="Clinicus replaces your fragmented mix of tools with a single connected system, purpose-built for CCM, RPM, TCM, and every care management program you run."
        />

        <div className="mt-10 flex flex-col gap-8 lg:mt-[64px] lg:flex-row lg:gap-[31px]">
          <div className="w-full lg:max-w-[511px] lg:shrink-0">
            <div className="relative h-[240px] w-full overflow-hidden rounded-t-[16px] sm:h-[320px] md:h-[380px] lg:h-[419px] lg:rounded-t-[20px]">
              <Image
                src="/images/dashboard-4e6985.png"
                alt="Clinicus unified dashboard"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="-mt-10 rounded-[16px] bg-purple-light px-6 pb-7 pt-14 sm:-mt-12 sm:px-8 sm:pb-9 sm:pt-16 lg:-mt-16 lg:rounded-[20px] lg:pt-[72px]">
              <h3 className="text-xl font-bold text-navy sm:text-[22px]">
                Unified Dashboard
              </h3>
              <p className="mt-1 max-w-[403px] text-[13px] font-medium leading-5 text-muted sm:text-[13.5px]">
                Manage patients and care teams efficiently without switching
                tools.
              </p>
            </div>
          </div>

          <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4">
            {featureCards.map((card) => (
              <div
                key={card.title}
                className={`relative flex min-h-[180px] flex-col rounded-[16px] p-5 sm:min-h-[200px] sm:rounded-[18px] lg:min-h-[222px] ${card.bg}`}
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-[11px] bg-white">
                  <FeatureIcon type={card.icon} />
                </div>
                <h3 className="text-[15px] font-bold text-navy sm:text-[15.5px]">
                  {card.title}
                </h3>
                <p className="mt-1 text-[11px] font-medium leading-4 text-muted sm:text-[11.5px]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
