import { useState, useEffect } from "react";
import About from "../About";
import Services from "../Services";
import PartnersCarousel from "../PartnersCarousel";
import CarouselBanner from "../CarouselBanner";
import NewsComponent from "../NewsComponent";
import Contact from "../contact-us/contact";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      {loading ? (
        <div className="fixed inset-0 flex justify-center items-center bg-white/50 backdrop-blur-sm z-50">
          <l-cardio
            size="250"
            stroke="5"
            speed="2"
            color="#17776a"
          ></l-cardio>
        </div>
      ) : (
        <>
          <CarouselBanner />
          <About />
          <NewsComponent />
          <Services />
          <PartnersCarousel />
          <Contact/>
        </>
      )}
    </main>
  );
};

export default Home;
