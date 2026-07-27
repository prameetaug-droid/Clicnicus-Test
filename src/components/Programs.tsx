import Image from "next/image";
import {
  SectionContainer,
  SectionHeader,
} from "./SectionContainer";

const programs = [
  {
    tag: "CCM",
    title: "Chronic Care Management",
    description:
      "Coordinated care for patients with two or more chronic conditions. Automated outreach, personalized care plans, and monthly follow-ups, fully billed under our NPI.",
    cpt: "CPT codes 99490, 99439, 99487, 99489",
    image: "/images/RCMrec.svg",
  },
  {
    tag: "RPM",
    title: "Remote Patient Monitoring",
    description:
      "Real-time vital monitoring from connected devices, with automated alerts that catch deterioration before it becomes a hospitalization.",
    cpt: "CPT codes 99454, 99457, 99458",
    image: "/images/rpm.png",
  },
  {
    tag: "TCM",
    title: "Transitional Care Management",
    description:
      "Structured follow-up within 2-7 days of discharge. Reducing readmissions and closing care gaps as patients return to community care.",
    cpt: "CPT codes 99495, 99496",
    image: "/images/tcm-6efac6.png",
  },
];

export default function Programs() {
  return (
    <section className="pt-14 md:pt-24 lg:pt-[140px]">
      <SectionContainer>
        <SectionHeader
          eyebrow="PROGRAMS WE PROVIDE"
          title="CMS-Reimbursable Programs, Built In"
          description="Clinicus supports Medicare and commercial payor programs, so you capture every eligible reimbursement while delivering better patient outcomes."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-14 md:grid-cols-2 md:gap-8 lg:mt-[77px] lg:grid-cols-3 lg:gap-[33px]">
          {programs.map((program) => (
            <article
              key={program.tag}
              className="overflow-hidden rounded-[16px] border border-border bg-border sm:rounded-[18px]"
            >
              <div className="relative h-[134px] w-full">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="rounded-t-[16px] object-cover sm:rounded-t-[18px]"
                />
                <span className="absolute left-5 top-5 inline-flex h-8 w-[60px] items-center justify-center rounded-lg bg-purple-light">
                  <img 
                    src={`/images/${program.tag}.svg`} 
                    alt={program.tag}
                    width={40}
                    height={24}
                  />
                </span>
              </div>
              <div className="px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
                <h3 className="text-base font-bold leading-6 text-navy sm:text-lg">
                  {program.title}
                </h3>
                <p className="mt-1 text-[12px] font-medium leading-[18px] text-muted sm:text-[12.5px]">
                  {program.description}
                </p>
                <div className="my-4 h-px bg-border-light" />
                <p className="text-[10px] font-bold text-navy sm:text-[11px]">
                  {program.cpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
