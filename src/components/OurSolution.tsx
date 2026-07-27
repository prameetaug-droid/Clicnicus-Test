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
      // Use a static SVG asset for the shield so designers can update it in Figma
      // Keep it as a plain <img> to avoid SSR/next/image layout issues with missing assets
      <img
        src="/images/Audit-Ready%20Compliance.svg"
        alt="Audit-Ready Compliance"
        width={18}
        height={20}
      />
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

        <div className="mt-12 flex flex-col gap-4 sm:mt-14 sm:gap-6 md:mt-16 md:gap-8 lg:mt-[64px] lg:flex-row lg:gap-[48px]">
          <div className="relative w-full lg:max-w-[511px] lg:shrink-0">
            <div className="absolute left-1/2 top-[120px] h-[150px] w-[320px] -translate-x-1/2 rounded-[20px] bg-[#3772B2] z-0 sm:left-[-5px] sm:top-[100px] sm:h-[295px] sm:w-[360px] sm:translate-x-0 md:left-[-5px] md:top-[140px] md:h-[335px] md:w-[430px] md:translate-x-0 lg:left-[-5px] lg:top-[80px] lg:h-[465px] lg:w-[490.56px] lg:translate-x-0" />
            <div className="relative z-10 h-[220px] sm:h-[180px] md:h-[340px] lg:h-[460px] overflow-visible">
              <Image
                src="/images/dashboard-4e6985.png"
                alt="Clinicus unified dashboard"
                fill
                className="object-contain object-center"
                style={{ objectPosition: '50% 8%' }}
              />
            </div>
            <div className="relative z-20 mt-[80px] px-4 sm:mt-[140px] sm:px-6 md:mt-[112px] md:px-7 lg:mt-[24px] lg:px-0">
              <h3 className="text-xl font-bold text-navy sm:text-[22px]">
                Unified Dashboard
              </h3>
              <p className="mt-1 max-w-[403px] text-[13px] font-medium leading-5 text-muted sm:text-[13.5px]">
                Manage patients and care teams efficiently without
                <br />
                switching tools.
              </p>
            </div>
          </div>

          <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:gap-6 lg:gap-6">
            {featureCards.map((card) => (
              <div
                key={card.title}
                className={`relative feature-card flex min-h-[160px] flex-col rounded-[16px] p-5 sm:min-h-[180px] sm:rounded-[18px] md:min-h-[200px] lg:min-h-[222px] shadow-sm border border-opacity-20`}
                style={{ 
                  background: (card.title === 'Tech Integrations' || card.title === 'Risk Monitoring') ? '#F5E9FE' : '#EDF5FE',
                  borderColor: (card.title === 'Tech Integrations' || card.title === 'Risk Monitoring') ? '#D8B5F8' : '#B8DFFE'
                }}
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-[11px] bg-white shadow-xs">
                  <FeatureIcon type={card.icon} />
                </div>
                <h3 className="text-[15px] font-bold text-navy sm:text-[16px] md:text-[15px]">
                  {card.title}
                </h3>
                <p className="mt-2 text-[11px] font-medium leading-4 text-muted sm:text-[12px] md:text-[11px]">
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
