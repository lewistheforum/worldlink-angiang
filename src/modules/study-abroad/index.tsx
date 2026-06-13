import Header from "@/layout/header";
import Footer from "@/layout/footer";
import StudyAbroad from "./components/study-abroad";

export default function StudyAbroadLayout() {
  return (
    <div className="mx-auto min-h-screen font-sans flex flex-col">
      <Header />
      <StudyAbroad />
      <Footer />
    </div>
  );
}
