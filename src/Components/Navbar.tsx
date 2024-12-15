import { useState } from "react";
import logo from "../assets/logo.jpg";
import { FaPhoneAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import UzFlag from "../assets/uzb.png";
import RuFlag from "../assets/ru.png";
import EnFlag from "../assets/en.png";

function Navbar() {
  const { t, i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const languages = [
    { code: "uz", label: "Uz", flag: UzFlag },
    { code: "ru", label: "Ru", flag: RuFlag },
    { code: "en", label: "En", flag: EnFlag },
  ];

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode, (err) => {
      if (err) console.error("Language change error:", err);
    });
    setIsDropdownOpen(false);
  };

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  return (
    <div className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8 lg:px-14">
        {/* Logo Section */}
        <div className="flex items-center space-x-4 text-lg sm:text-sm">
          <img src={logo} alt="Logo" className="h-8 md:h-10" />
          <span className="text-sm md:text-lg font-normal leading-tight hidden sm:block">
            sog‘liqni saqlash va
            <br />
            diagnostika markazi
          </span>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4 md:space-x-6 lg:space-x-8">
          {/* Language Dropdown */}
          <div className="relative">
            <button
              className="flex items-center space-x-2 px-2 py-1 rounded-lg"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <img src={currentLanguage.flag} alt="Flag" className="h-4" />
              <span className="text-sm">{currentLanguage.label}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white shadow-md rounded-md w-20 sm:w-24">
                <ul className="text-gray-700">
                  {languages.map((lang) => (
                    <li
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className="flex items-center px-2 py-1 sm:px-4 sm:py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      <img src={lang.flag} alt={lang.label} className="h-3 sm:h-4 mr-2" />
                      <span className="text-xs sm:text-sm">{lang.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Call Center Info */}
          <div className="hidden md:flex flex-col items-end">
            <span className="text-sm font-medium">{t("call_center")}</span>
            <div className="flex items-center space-x-1">
              <span className="text-green-500 text-xs">●</span>
              <span className="text-xs font-medium">24/7</span>
            </div>
          </div>

          {/* Call Button */}
          <button className="flex items-center space-x-1 bg-[#17776a] hover:bg-[#115c52] text-white font-medium text-sm py-1 px-2 md:py-2 md:px-4 rounded-lg">
            <FaPhoneAlt className="h-4 w-4" />
            <span className="hidden sm:inline">1195</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
