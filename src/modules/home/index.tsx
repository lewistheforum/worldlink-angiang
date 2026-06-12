'use client'

import Header from "@/layout/header";
import Footer from "@/layout/footer";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import CourseCatalogSection from "./components/CourseCatalogSection";
import VirtualMentorshipSection from "./components/VirtualMentorshipSection";
import PopularCoursesSection from "./components/PopularCoursesSection";
import TestimonialSection from "./components/TestimonialSection";
import AppDownloadSection from "./components/AppDownloadSection";
import DocumentGallerySection from "./components/DocumentGallerySection";

export default function HomeClient() {
  return (
    <div className="mx-auto min-h-screen font-sans">
      <Header />
      <main>
        <HeroSection />
        <VirtualMentorshipSection />
        <CourseCatalogSection />
        <TestimonialSection />
        <PopularCoursesSection />
        <FeaturesSection />
        <DocumentGallerySection />
      </main>
      <Footer />
    </div>
  );
}