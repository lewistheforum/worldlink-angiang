import CourseCatalogSection from "./course-catalog-section";
import LanguageTrainingHero from "./language-training-hero";

export default function LanguageTraining() {
  return (
    <main className="flex-1">
      <LanguageTrainingHero />

      {/* Course Catalog Section */}
      <div className="relative z-10 bg-white">
        <CourseCatalogSection />
      </div>
    </main>
  );
}
