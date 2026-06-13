import HeroSection from "./components/hero-section";
import FeaturesSection from "./components/features-section";
import CourseCatalogSection from "@/modules/language-training/components/course-catalog-section";
import VirtualMentorshipSection from "@/modules/about-us/components/virtual-mentorship-section";
import PopularCoursesSection from "@/modules/study-abroad/components/popular-courses-section";
import TestimonialSection from "./components/testimonial-section";
import DocumentGallerySection from "./components/document-gallery-section";

export default function HomeMain() {
  return (
    <>
      <HeroSection />
      <VirtualMentorshipSection />
      <CourseCatalogSection variant="tabs" />
      <PopularCoursesSection />
      <FeaturesSection />
      <DocumentGallerySection />
      <TestimonialSection />
    </>
  );
}
