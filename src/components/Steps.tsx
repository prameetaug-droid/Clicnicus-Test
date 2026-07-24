import {
  SectionContainer,
  SectionHeader,
} from "./SectionContainer";

const steps = [
  {
    number: "01",
    title: "Set Up Your Programs",
    description:
      "Configure your CCM, RPM, and TCM workflows, care teams, and program requirements.",
  },
  {
    number: "02",
    title: "Enroll & Manage Patients",
    description:
      "Track enrolled patients, manage care activities, and coordinate outreach from one platform.",
  },
  {
    number: "03",
    title: "Document & Monitor Care",
    description:
      "Capture patient interactions, monitor RPM data, and maintain compliant documentation.",
  },
  {
    number: "04",
    title: "Capture Reimbursement",
    description:
      "Track program performance, capture billable time, and generate billing-ready reports.",
  },
];

export default function Steps() {
  return (
    <section className="pt-14 md:pt-20 lg:pt-[110px]">
      <SectionContainer>
        <SectionHeader
          eyebrow="JOIN CLINICUS"
          title="Get Started in 4 Simple Steps"
          description="Launch and scale your care management programs in four simple steps."
        />

        <div className="relative mt-10 sm:mt-14 lg:mt-[77px]">
          <div className="absolute left-[12%] right-[12%] top-[26px] hidden border-t border-dashed border-black xl:block" />

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col items-center text-center"
              >
                <div className="relative z-10 flex h-[48px] w-[48px] items-center justify-center rounded-[12px] bg-navy text-base font-extrabold text-white sm:h-[52px] sm:w-[52px] sm:rounded-[14px] sm:text-[17px]">
                  {step.number}
                </div>
                <h3 className="mt-4 text-[15px] font-bold text-navy sm:mt-5 sm:text-[15.5px]">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-[276px] text-xs font-medium leading-4 text-muted sm:mt-3">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
