/**
 * Portfolio Data
 * Source of data for the portfolio
 */

import type {
  PersonalInfo,
  Experience,
  Writing,
  Speaking,
  Project,
  Education,
  SocialLink,
} from "@/types/portfolio";

import headshot from "@/assets/headshot.png";

// ===== Portfolio Data =====

export const personalInfo: PersonalInfo = {
  name: "Guillaume Daridon",
  title: "Software Engineer",
  location: { city: "Nanterre", country: "FR" },
  website: "",
  email: "guillaume.daridon@gmail.com",
  avatar: headshot,
  bio: "Ingénieur logiciel passionné, j'offre de la disponibilité, de l'expérience technique et de la polyvalence pour rendre service et produire des solutions fiables.",
  skills: "Développement Python, Développement back-end, Développement full stack",
};

export const experience: Experience[] = [
  {
    id: "exp-1",
    company: "Studio Lumière",
    role: "Founder & Creative Director",
    location: "London, UK",
    startDate: "2020-01",
    endDate: null,
    description: "Founded a boutique creative studio specializing in brand identity and campaign work for purpose-driven brands",
    current: true,
  },
];

export const writing: Writing[] = [
  {
    id: "write-1",
    title: "The Death of the Logo (And What Comes Next)",
    publication: "It's Nice That",
    date: "2024-02",
    url: "https://example.com/article-1",
    featured: true,
  },
];

export const speaking: Speaking[] = [
  {
    id: "speak-1",
    event: "AIGA Design Conference 2024",
    date: "2024-10-18",
    location: "Seattle, WA",
    talk: "Story-First: A New Framework for Brand Building",
    description: "A deep dive into developing brand narratives that resonate on an emotional level and stand the test of time.",
    url: "https://example.com/talk-1",
    slidesUrl: "https://example.com/slides-1",
    upcoming: true,
  },
];

export const projects: Project[] = [
  {
    id: "proj-fast-example",
    name: "Fast example",
    description:
      "Une application FastAPI basique",
    techStack: ["Python", "FastAPI", "Coverage", "Pytest", "Github actions"],
    liveUrl: "",
    githubUrl: "https://github.com/gdarid/fast_example",
    status: "active",
  },
  {
    id: "proj-planetes",
    name: "Planètes",
    description:
      "Un exemple d'utilisation de Docusaurus, pour présenter les planètes du système solaire",
    techStack: ["Docusaurus", "Markdown", "Netlify", "React"],
    liveUrl: "",
    githubUrl: "https://github.com/gdarid/planetes",
    status: "active",
  },
  {
    id: "proj-curves",
    name: "Curves - Streamlit",
    description:
      "Une application Streamlit, pour afficher des \"courbes\" à partir de systèmes de Lindenmayer (version étendue)",
    techStack: ["Python", "Streamlit", "L-systems"],
    liveUrl: "https://curves.streamlit.app/",
    githubUrl: "https://github.com/gdarid/curves",
    status: "active",
  },
  {
    id: "proj-extractor",
    name: "Extractor",
    description:
      "Une application Flask qui à partir d'une image en entrée extrait du texte et le traduit, grâce à des API Google",
    techStack: ["Python", "Flask", "API Google", "GCP"],
    liveUrl: "",
    githubUrl: "https://github.com/gdarid/extractor",
    status: "active",
  },
];

export const education: Education[] = [
  {
    id: "edu-1",
    institution: "",
    degree: "Diplôme d'ingénieur",
    field: "Informatique",
    startYear: "1993",
    endYear: "1996",
    location: "Nantes",
    details: "Ecole Centrale - Nantes",
  },
  {
    id: "edu-2",
    institution: "",
    degree: "Classes préparatoires",
    field: "",
    startYear: "1991",
    endYear: "1993",
    location: "Bordeaux",
    details: "Lycée Michel Montaigne - Bordeaux",
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "LinkedIn",
    username: "guillaumedaridon",
    url: "https://www.linkedin.com/in/guillaume-daridon-780410213/",
  },
];
