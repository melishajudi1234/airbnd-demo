import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import Section from "@/components/home/Section";
import { properties } from "@/data/properties";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow pt-12 pb-12">
        <div className="max-w-[1280px] mx-auto px-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <Section key={i} properties={properties} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
