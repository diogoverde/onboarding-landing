import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";

import * as ga from "../lib/ga";

export default function About() {
  const [query, setQuery] = useState("");

  const search = () => {
    ga.event({
      action: "search",
      params: {
        search_term: query,
      },
    });
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <span>Blog page - have a list of blog posts</span>
            <div>
              <div>
                <input
                  type="text"
                  onChange={(event) => setQuery(event.target.value)}
                ></input>
              </div>
              <div>
                <button onClick={() => search()}>Search</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
