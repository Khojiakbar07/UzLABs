import { useState } from "react";
import PlayMarket from "../assets/Icons/play_market.svg";
import AppStore from "../assets/Icons/app_store.svg";
import QRCode from "../assets/qr-code.svg";
import AsosiyServices from "./Services/main";
import QabulServices from "./Services/admission";
import Result from "./Services/result";

const tabs = [
  { id: "asosiy", label: "Asosiy" },
  { id: "qabul", label: "Qabul uchun" },
  { id: "natija", label: "Natijani ko'rish" },
  { id: "ruxsatnoma", label: "Abituriyent ruxsatnomasi" },
  { id: "test", label: "Diagnostik test" },
  { id: "sertifikat", label: "Milliy sertifikatlar" },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState("asosiy");

  return (
    <div className="bg-[#f8f8fa]">
      <div className="bg-[#f8f8fa] max-w-screen-xl mx-auto mb-12">
        {/* Header */}
        <h2 className="text-3xl font-semibold text-center">Xizmatlar</h2>

        {/* Tabs */}
        <div className="flex grid-cols-6 mt-6 gap-6 justify-start">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center w-max py-2 px-4 rounded-2xl shadow-lg ${
                activeTab === tab.id ? "bg-[#17776a] text-white" : "bg-white text-gray-700"
              }`}
            >
              <p className="text-center text-sm font-semibold">{tab.label}</p>
            </button>
          ))}
        </div>

        {/* Cards Section */}
        <div className="bg-gray-50 py-4">
          <div className="max-w-screen-xl mx-auto">
            {activeTab === "asosiy" && <AsosiyServices />}
            {activeTab === "qabul" && <QabulServices />}
            {activeTab == "natija" && <Result/>}
          </div>
        </div>

        {/* QR Code for  */}
        <div className="bg-[#f8f8fa] py-6 px-8 rounded-xl shadow-lg border border-gray-200 max-w-screen-xl mx-auto my-14">
      <div className="flex justify-between items-center">
        <div className="max-w-lg">
            <h1 className="text-2xl font-semibold ">UZLABs - barchasi o'z qo'lingizda!</h1>
            <p>Mobil ilovamni yuklab olish uchun Google Play yoki App Store maketga quyidagi tugma orqali o'ting yoki QR kodni skaner qiling.</p>
            <div className="flex gap-4 mt-4">
                <a href="#" className="bg-white text-black pr-4 py-2 rounded-md">
                    <img src={PlayMarket} alt="Google Play" className="w-17 h-17" />
                </a>
                <a href="#" className="bg-gray-100 text-black pr-4 py-2 rounded-md ">
                    <img src={AppStore} alt="App Store" className="w-17 h-17" />
                </a>
            </div>
        </div>
        <div>
            <img src={QRCode} alt="QR Code" className="w-24 h-24" />
        </div>
      </div>
     </div>
      </div>
    </div>
  );
};

export default Services;
