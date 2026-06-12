import StudyAbroadHero from "./study-abroad-hero";
import StudyAbroadMarkets from "./study-abroad-markets";
import StudyAbroadDocuments from "./study-abroad-documents";
import StudyAbroadCTA from "./study-abroad-cta";
import Link from "next/link";

export default function StudyAbroad() {
  return (
    <main className="flex-1">
      <StudyAbroadHero />

      <div className="relative z-10">
        <StudyAbroadMarkets />
        <StudyAbroadDocuments />
        <StudyAbroadCTA />
      </div>
    </main>
  );
}
