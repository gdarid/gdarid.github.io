import { projects } from "@/data/portfolio-data";
import SplitSection from "@/components/ui/split-section";
import { ExternalLink, Code2 } from "lucide-react";

/**
 * ProjectsSection Component
 * Grid layout showcasing projects
 */
export default function ProjectsSection() {
  return (
    <SplitSection title="Projets" id="projects">
      <div className="grid gap-8 md:gap-12">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group border-b border-[var(--color-brand)]/20 pb-8 last:border-b-0"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-large text-[var(--color-brand)] mb-2">
                  {project.name}
                </h3>
                <p className="text-body mb-4 max-w-xl">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-small px-3 py-1 bg-[var(--color-brand)]/10 text-[var(--color-brand)] rounded-full transition-colors hover:bg-[var(--color-brand)]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-small text-[var(--color-brand)] hover:underline transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live</span>
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-small text-[var(--color-brand)] hover:underline transition-colors"
                  >
                    <Code2 className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SplitSection>
  );
}