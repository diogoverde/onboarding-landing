import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
