import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow">
        <section>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              <span>About Page</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                sapiente perferendis, illum beatae dignissimos quaerat
                molestias, voluptate debitis asperiores inventore ipsam.
                Aspernatur, quibusdam! Debitis unde sint aliquid quod dolorum
                accusantium.
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus nulla voluptatem quia, vero tempore incidunt ullam,
                aperiam nostrum, temporibus ipsum quisquam! Deleniti vitae
                corporis quis ab error, repellat non alias!
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus nulla voluptatem quia, vero tempore incidunt ullam,
                aperiam nostrum, temporibus ipsum quisquam! Deleniti vitae
                corporis quis ab error, repellat non alias!
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus nulla voluptatem quia, vero tempore incidunt ullam,
                aperiam nostrum, temporibus ipsum quisquam! Deleniti vitae
                corporis quis ab error, repellat non alias!
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
