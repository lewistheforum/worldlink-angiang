import Header from "@/layout/header";
import Footer from "@/layout/footer";
import LanguageTraining from "./components/language-training";

export default function LanguageTrainingLayout() {
  return (
    <div className="mx-auto min-h-screen font-sans flex flex-col">
      <Header />
      <LanguageTraining />
      <Footer />
    </div>
  );
}
