import Header from "@/layout/header";
import Footer from "@/layout/footer";
import AboutUs from "./components/about-us";

export default function AboutUsLayout() {
  return (
    <div className="mx-auto min-h-screen font-sans flex flex-col">
      <Header />
      <AboutUs />
      <Footer />
    </div>
  );
}
