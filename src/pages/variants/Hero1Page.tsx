import Layout from "@/components/Layout";
import FixedNavbar from "@/components/FixedNavbar";
import Hero1 from "@/components/sections/hero-variants/Hero1";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import EducationSection from "@/components/sections/EducationSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";
// import Slideshow from "@/components/ui/slideshow";

export default function Hero1Page() {
  return (
    <Layout>
      <FixedNavbar />
      <div className="pt-[44px]">
        <Hero1 />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
        {/* <Slideshow /> */}
      </div>
    </Layout>
  );
}
