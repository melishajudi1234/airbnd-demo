import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PopularHomes from "@/components/PopularHomes";
// Updated at: 2026-03-17T01:36:00

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow pt-48 pb-12">
        <PopularHomes />
        <div className="px-8 max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Placeholder for content */}
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex flex-col gap-3">
              <div className="aspect-square w-full bg-zinc-100 rounded-xl"></div>
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-1">
                  <div className="h-4 w-32 bg-zinc-100 rounded"></div>
                  <div className="h-3 w-24 bg-zinc-100 rounded"></div>
                  <div className="h-4 w-16 bg-zinc-100 rounded mt-1"></div>
                </div>
                <div className="h-4 w-8 bg-zinc-100 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </div>
);
}
