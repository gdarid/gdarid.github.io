import Layout from "@/components/Layout";
import FixedNavbar from "@/components/FixedNavbar";
import AboutSection from "@/components/sections/AboutSection";

export default function AboutPage() {
  return (
    <Layout>
      <FixedNavbar />
      <div className="pt-[44px]">
        <AboutSection />
      </div>
    </Layout>
  );
}
