import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Poster from "../assets/Icons/poster.svg";
import AboutCarousel from "./AboutCarousel";
import { Link } from "react-router-dom";
import AboutBanner from "../assets/Banner/AboutBanner.png"

function About() {
  return (
    <section className="py-4 md:py-8 bg-[#f8f8fa]">
      {/* Header Section */}
      <div className="flex justify-center items-center p-8 font-sans">
      <div className="flex items-center max-w-6xl w-full gap-10 lg:flex-row flex-col">
        <div className="flex-1 flex justify-center items-center">
          <img src={AboutBanner} alt="Phone with Portal" className="max-w-full h-auto"/>
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">
            Uzlabs.uz klinikasi haqida
          </h1>
          <p className="mb-4">
          Uzlabs.uz klinikasi – Toshkent shahrida joylashgan zamonaviy tibbiyot markazi bo'lib, 
          yuqori sifatli diagnostika va sog'liqni saqlash xizmatlarini taqdim etadi.
          Klinika eng so'nggi texnologiyalar va tibbiy bilimlar asosida ishlaydi,
          bu esa bemorlarga ishonchli va samarali davolanish imkonini beradi.
          Agar sizga qo'shimcha ma'lumot kerak bo'lsa yoki klinika xizmatlaridan foydalanmoqchi bo'lsangiz,
          aloqa ma'lumotlari orqali bog'lanishingiz mumkin.
          </p>
          <div className="flex gap-4 mt-4">
            <Link to="/login" className="bg-[#17776a] font-medium border border-[#17776a] text-white px-6 py-2 rounded-xl hover:bg-[#115c52] transition-colors">
              Kirish
            </Link>
            <Link to="/register" className="bg-white font-medium border border-[#17776a] text-[#17776a] px-6 py-2 rounded-xl hover:bg-[#115c52] hover:text-white transition-colors">
              Ro'yxatdan o'tish
            </Link>
          </div>
        </div>
      </div>
    </div>

      {/* Poster Section */}
      <div className="bg-[#eaf3f6] p-6 md:p-8 rounded-xl shadow-sm border border-[#d3e4eb] max-w-screen-xl mx-auto my-6 md:my-10">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-between items-center">
          <img className="h-6 w-6 md:h-8 md:w-8" src={Poster} alt="Poster" />
          <h3 className="text-sm sm:text-lg md:text-xl font-semibold text-[#17776a] text-center md:text-left flex-1">
            Tibbiy va Laboratoriya tahlillari (qon tahlillari, diagnostika va boshqalar)
          </h3>
          <button className="bg-[#17776a] text-sm md:text-base font-medium border border-[#17776a] text-white px-4 md:px-6 py-2 rounded-xl hover:bg-[#115c52] transition-colors">
            Xizmatdan foydalanish →
          </button>
        </div>
      </div>

      {/* Cards Carousel Section */}
      <AboutCarousel/>

    </section>
  );
}

export default About;
