import { personalInfo } from "@/data/portfolio-data";
import SplitSection from "@/components/ui/split-section";

/**
 * ContactSection Component
 * Centered contact section
 */
export default function ContactSection() {
  return (
    <SplitSection title="Contact" id="contact">
      <div className="text-center space-y-6">
        <div className="flex justify-center mb-8">
          <img
            src={personalInfo.avatar}
            alt={personalInfo.name}
            className="w-40 h-40 object-cover rounded-full"
          />
        </div>

        <p className="text-large">{personalInfo.name}</p>

        <a
          href={`mailto:${personalInfo.email}`}
          className="text-body hover:text-[var(--color-brand)] transition-colors block"
        >
          {personalInfo.email}
        </a>

        {personalInfo.website && (
          <a
            href={`https://${personalInfo.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-body hover:text-[var(--color-brand)] transition-colors block"
          >
            {personalInfo.website}
          </a>
        )}
      </div>
    </SplitSection>
  );
}
