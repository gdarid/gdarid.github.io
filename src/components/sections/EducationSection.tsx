import { education } from "@/data/portfolio-data";
import SplitSection from "@/components/ui/split-section";

export default function EducationSection() {
  return (
    <SplitSection title="Formation" id="education">
      <div className="relative">
        {/* Center line - only on md and up */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[var(--color-brand)] opacity-30 transform -translate-x-1/2"></div>

        <div className="space-y-12 md:space-y-20">
          {education.map((edu) => (
            <div key={edu.id} className="relative">

              {/* Mobile: Stacked layout */}
              <div className="md:hidden space-y-3 text-center">
                <p className="text-small text-[var(--color-brand)]">
                  {edu.startYear} - {edu.endYear}
                </p>
                <h3 className="text-large text-[var(--color-brand)]">
                  {edu.degree}
                </h3>
                <p className="text-body">{edu.institution}</p>
                {edu.details && (
                  <p className="text-body max-w-xl mx-auto">{edu.details}</p>
                )}
              </div>

              {/* Desktop: Split layout */}
              <div className="hidden md:grid grid-cols-2 gap-6">
                {/* Left: Title, Degree, Institution */}
                <div className="text-right pr-8">
                  <h3 className="text-large mb-1 text-[var(--color-brand)]">
                    {edu.degree}
                  </h3>
                  <p className="text-small mb-2 text-[var(--color-brand)]">
                    {edu.startYear} - {edu.endYear}
                  </p>
                  <p className="text-body">{edu.institution}</p>
                </div>

                {/* Right: Details */}
                <div className="pl-8">
                  {edu.details && (
                    <p className="text-body max-w-md">{edu.details}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SplitSection>
  );
}