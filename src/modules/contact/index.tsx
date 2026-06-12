import Header from "@/layout/header";
import Footer from "@/layout/footer";
import Contact from "./components/contact";

export default function ContactLayout() {
  return (
    <div className="mx-auto min-h-screen font-sans flex flex-col">
      <Header />
      <main className="flex-1">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
