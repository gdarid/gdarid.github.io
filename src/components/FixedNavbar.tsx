import { personalInfo } from "@/data/portfolio-data";
import { Mail, Linkedin, Github } from "lucide-react";
import { useState, useEffect } from "react";

export default function FixedNavbar() {
  const [showPhoto, setShowPhoto] = useState(false);

  useEffect(() => {
    const heroPhoto = document.getElementById("hero-photo");
    if (!heroPhoto) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowPhoto(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(heroPhoto);
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 h-[44px] bg-background border-b border-border z-50 flex items-center">
      <div className="w-full flex items-center justify-between">
        {/* Left: Name */}
        <div className="flex items-center h-[44px] px-4 gap-2 md:gap-3 overflow-hidden">
          <a
            href="/"
            target="_self"
            rel="noopener noreferrer"
            aria-label="Home"
          >
            <span className="text-sm font-medium whitespace-nowrap">{personalInfo.name}</span>
          </a>
        </div>

        {/* Center: Photo */}
        <div className={`absolute left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ${showPhoto ? 'opacity-100' : 'opacity-0'}`}>
          <img
            src={personalInfo.avatar}
            alt={personalInfo.name}
            className="w-[28px] h-[28px] object-cover rounded-full"
          />
        </div>

        {/* Right: Contact buttons */}
        <div className="flex items-center h-[44px]">
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center justify-center w-[44px] h-[44px] hover:text-[var(--color-brand)] transition-colors"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/guillaume-daridon-780410213/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-[44px] h-[44px] hover:text-[var(--color-brand)] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="https://github.com/gdarid"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-[44px] h-[44px] hover:text-[var(--color-brand)] transition-colors"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
        </div>
      </div>
    </nav>
  );
}
