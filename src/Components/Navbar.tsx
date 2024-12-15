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
    console.log("Changing language to:", languageCode); // Debug log
    i18n.changeLanguage(languageCode, (err) => {
      if (err) console.error("Language change error:", err);
      else console.log("Language changed successfully to:", languageCode);
    });
    setIsDropdownOpen(false);
  };
  

  const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0];

  return (
    <div className="bg-white shadow-lg max-w-8xl sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-14 max-md:px-0">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img
            src={logo}
            alt="Logo"
            className="h-10 max-md:h-8"
          />
          <span className="text-xl max-md:text-lg max-sm:text-sm font-normal leading-tight">
            sog‘liqni saqlash va
            <br />
            diagnostika markazi
          </span>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-8 max-md:space-x-7 max-sm:space-x-6">
          {/* Language Dropdown */}
          <div className="relative">
            <button
              className="flex items-center space-x-2 px-4 py-2 rounded-lg"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <img
                src={currentLanguage.flag}
                alt="Flag"
                className="h-4"
              />
              <span className="text-base font-medium">{currentLanguage.label}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 font-medium"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white shadow-md rounded-md w-24">
                <ul className="text-gray-700">
                  {languages.map((lang) => (
                    <li
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      <img src={lang.flag} alt={lang.label} className="h-4 mr-2" />
                      {lang.label}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Call Center Info */}
          <div className="flex items-center space-x-8">
            <div className="flex flex-col items-end space-x-2">
              <span className="font-medium">{t("call_center")}</span>
              <div className="flex items-center space-x-1">
                <span className="text-green-500 text-xs">●</span>
                <span className="text-sm font-medium">24/7</span>
              </div>
            </div>

            {/* Call Button */}
            <button className="flex items-center space-x-2 bg-[#17776a] hover:bg-[#115c52] text-white font-medium py-2 px-4 rounded-lg">
              <FaPhoneAlt className="h-4 w-4" />
              <span>1195</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
