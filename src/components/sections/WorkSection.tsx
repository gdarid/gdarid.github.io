import { experience } from "@/data/portfolio-data";
import SplitSection from "@/components/ui/split-section";
import { format } from "date-fns";

/**
 * WorkSection Component
 * Split timeline layout
 */
export default function WorkSection() {
  return (
    <SplitSection title="Expérience" id="work">
      <div className="relative">
        {/* Center line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[var(--color-brand)] opacity-30 transform -translate-x-1/2"></div>

        <div className="space-y-12 md:space-y-20">
          {experience.map((job) => {
            const startYear = format(new Date(job.startDate), "yyyy");
            const endYear = job.endDate ? format(new Date(job.endDate), "yyyy") : "Present";

            return (
              <div key={job.id} className="relative">
                {/* Mobile: Stacked layout */}
                <div className="md:hidden space-y-3 text-center">
                  <p className="text-small text-[var(--color-brand)]">
                    {startYear} - {endYear}
                  </p>
                  <h3 className="text-large text-[var(--color-brand)]">
                    {job.role}
                  </h3>
                  <p className="text-body">{job.company}</p>
                  <p className="text-body max-w-xl mx-auto">
                    {job.description}
                  </p>
                </div>

                {/* Desktop: Split layout */}
                <div className="hidden md:grid grid-cols-2 gap-6">
                  {/* Left: Title, Role, Company */}
                  <div className="text-right pr-8">
                    <p className="text-small mb-2 text-[var(--color-brand)]">
                      {startYear} - {endYear}
                    </p>
                    <h3 className="text-large mb-1 text-[var(--color-brand)]">
                      {job.role}
                    </h3>
                    <p className="text-body">{job.company}</p>
                  </div>

                  {/* Right: Description */}
                  <div className="pl-8">
                    <p className="text-body max-w-md">
                      {job.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SplitSection>
  );
}
