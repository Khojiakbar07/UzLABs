import { useState, useEffect } from "react";
import About from "../About";
import Services from "../Services";
import PartnersCarousel from "../PartnersCarousel";
import CarouselBanner from "../CarouselBanner";
import NewsComponent from "../NewsComponent";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      {loading ? (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
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
        </>
      )}
    </main>
  );
};

export default Home;
