import React from "react";
import Slider from "react-slick";
import Oxford from "../assets/Icons/oxford.jpg";
import Scantron from "../assets/Icons/scantron.jpg";
import ALTE from "../assets/Icons/alte.png";
import Cambridge from "../assets/Icons/cambr.png";
import TOEFL from "../assets/Icons/itp.png";
import OSYM from "../assets/Icons/osym.png";
import CITO from "../assets/Icons/cito.png";
import GRE from "../assets/Icons/gre.jpg";
import AZER from "../assets/Icons/azer.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const partners = [
  { id: 1, logo: Oxford, name: "Oxford" },
  { id: 2, logo: Scantron, name: "Scantron" },
  { id: 3, logo: ALTE, name: "ALTE" },
  { id: 4, logo: Cambridge, name: "Cambridge Assessment" },
  { id: 5, logo: TOEFL, name: "TOEFL ITP" },
  { id: 6, logo: OSYM, name: "OSYM" },
  { id: 7, logo: CITO, name: "CITO" },
  { id: 8, logo: GRE, name: "GRE" },
  { id: 8, logo: AZER, name: "AZER" },
];

const PartnersCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 slides at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true, // Center items
    centerPadding: "40px", // Add space around center
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: false, // Disable centering for mobile
        },
      },
    ],
  };

  return (
    <div className="bg-[#f8f8fa] py-8">
      <h2 className=" text-[#76818f] text-2xl font-semibold text-center mb-6">
        Hamkor tashkilotlar
      </h2>
      <div className="max-w-8xl mx-auto px-4">
        <Slider {...settings}>
          {partners.map((partner) => (
            <div key={partner.id} className="px-4">
              <div className="bg-white shadow-md rounded-xl my-2 flex flex-col items-center justify-center p-6">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className=" h-16 w-22  mb-4" 
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PartnersCarousel;
