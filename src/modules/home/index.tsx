'use client'

import Header from "@/layout/header";
import Footer from "@/layout/footer";
import HomeMain from "./main";

export default function HomeClient() {
  return (
    <div className="mx-auto min-h-screen font-sans flex flex-col">
      <Header />
      <main className="flex-1">
        <HomeMain />
      </main>
      <Footer />
    </div>
  );
}