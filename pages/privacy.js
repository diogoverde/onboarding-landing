import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";

export default function Privacy() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <span>Privacy page</span>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
