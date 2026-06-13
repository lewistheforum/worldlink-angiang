import VirtualMentorshipSection from "./virtual-mentorship-section";
import AboutUsHero from "./about-us-hero";

export default function AboutUs() {
  return (
    <main className="flex-1">
      <AboutUsHero />

      {/* Content Section */}
      <div className="relative z-10 bg-white">
        <VirtualMentorshipSection />
      </div>
    </main>
  );
}
