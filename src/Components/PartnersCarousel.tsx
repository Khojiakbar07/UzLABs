import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aloka from "../assets/Partners/Aloka.jpg";
import BioRad from "../assets/Partners/biorad1.png";
import CerTest from "../assets/Partners/CerTest.png";
import Chengda from "../assets/Partners/Chengda.jpg";
import Glaxosmithkline from "../assets/Partners/glaxosmithkline.svg";
import Haier from "../assets/Partners/Haier2.jpg";
import Hitachi from "../assets/Partners/Hitachi.png";
import InterLabService from "../assets/Partners/InterLabService.jpg";
import Qiagen from "../assets/Partners/Qiagen.png";
import Roche from "../assets/Partners/roche.webp";
import Sanofi from "../assets/Partners/Sanofi-Logo.png";
import Serum from "../assets/Partners/Serumi.png";
import Siemens from "../assets/Partners/siemense.png";
import Sysmex from "../assets/Partners/Sysmex_company.png";
import Wantai from "../assets/Partners/Wantai.png";

const partners = [
  { id: 1, logo: Aloka, name: "Aloka" },
  { id: 2, logo: BioRad, name: "BioRad" },
  { id: 3, logo: CerTest, name: "CerTest" },
  { id: 4, logo: Chengda, name: "Chengda" },
  { id: 5, logo: Glaxosmithkline, name: "Glaxosmithkline" },
  { id: 6, logo: Haier, name: "Haier" },
  { id: 7, logo: Hitachi, name: "Hitachi" },
  { id: 8, logo: InterLabService, name: "InterLabService" },
  { id: 9, logo: Qiagen, name: "Qiagen" },
  { id: 10, logo: Roche, name: "Roche" },
  { id: 11, logo: Sanofi, name: "Sanofi" },
  { id: 12, logo: Serum, name: "Serum" },
  { id: 13, logo: Siemens, name: "Siemens" },
  { id: 14, logo: Sysmex, name: "Sysmex" },
  { id: 15, logo: Wantai, name: "Wantai" },
];

const PartnersCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };
  

  return (
    <div className="bg-[#f8f8fa] py-8 mb-0 sm:mb-24">
      <h2 className=" text-[#76818f] text-2xl font-semibold text-center mb-6">
        Hamkor tashkilotlar
      </h2>
      <div className="max-w-7xl mx-auto px-4">
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