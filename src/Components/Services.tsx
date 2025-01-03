import { useState } from "react";
import PlayMarket from "../assets/Icons/play_market.svg";
import AppStore from "../assets/Icons/app_store.svg";
import QRCode from "../assets/QRCode.png";
import MainService from "./services/MainService";
import AdmissionService from "./services/AdmissionService";
import PermitService from "./services/PermitService";
import ResultService from "./services/ResultService";

const tabs = [
  { id: "asosiy", label: "Asosiy" },
  { id: "qabul", label: "Qabul uchun" },
  { id: "natija", label: "Natijani ko'rish" },
  { id: "konsultatsiya", label: "Konsultasiya" },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState("asosiy");

  return (
    <div className="bg-[#f8f8fa]">
  <div className="max-w-screen-xl mx-auto px-4 mb-4 sm:mb-24">
    {/* Header */}
    <h2 className="text-3xl sm:text-2xl text-center font-semibold py-6">Xizmatlar</h2>

    {/* Tabs */}
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-center items-center">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`py-2 px-4 rounded-2xl shadow-md text-sm sm:text-base font-semibold transition-all ${
            activeTab === tab.id
              ? "bg-[#17776a] text-white"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>

    {/* Cards Section */}
    <div className="bg-[#eaf3f6] py-4 mt-6 rounded-lg shadow-md">
      <div className="px-4 sm:px-8">
        {activeTab === "asosiy" && <MainService />}
        {activeTab === "qabul" && <AdmissionService />}
        {activeTab === "natija" && <ResultService />}
        {activeTab === "konsultatsiya" && <PermitService />}
      </div>
    </div>

    {/* QR Code Section */}
    <div className="bg-white py-6 px-4 sm:px-8 rounded-xl shadow-lg border border-gray-200 mt-14 mb-0">
      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-6">
        {/* Text Section */}
        <div className="text-center sm:text-left">
          <h1 className="text-[#000] text-xl sm:text-2xl font-semibold mb-2">
            <span className="text-[#17776a] text-xl sm:text-2xl font-semibold mb-2">
              Uzlabs.uz
            </span> - barchasi o'z qo'lingizda!
          </h1>
          <p className="text-gray-700 text-sm sm:text-base mb-4">
            Mobil ilovani yuklab olish uchun Google Play yoki App Store-ga quyidagi tugma orqali
            o'ting yoki QR kodni skaner qiling.
          </p>
          <div className="flex justify-center sm:justify-start gap-4">
            <a href="#" className="hover:opacity-90">
              <img src={PlayMarket} alt="Google Play" className="w-32 h-10" />
            </a>
            <a href="#" className="hover:opacity-90">
              <img src={AppStore} alt="App Store" className="w-32 h-10" />
            </a>
          </div>
        </div>

        {/* QR Code Image */}
        <div className="flex justify-center mb-0">
          <img
            src={QRCode}
            alt="QR Code"
            className="w-32 h-32 sm:w-28 sm:h-28 md:w-36 md:h-36"
          />
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default Services;
