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
    <div className="bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="w-full max-w-screen-2xl mx-auto flex justify-between items-center py-4 px-4 md:px-6 lg:px-10">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="h-8 md:h-10" />
          <span className="hidden sm:block text-sm md:text-lg font-normal leading-tight">
            Uzlab.uz
          </span>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4 md:space-x-6">
          {/* Language Dropdown */}
          <div className="relative">
            <button
              className="flex items-center space-x-4 px-2 py-1 rounded-lg"
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-28">
                <ul className="text-gray-700">
                  {languages.map((lang) => (
                    <li
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      <img
                        src={lang.flag}
                        alt={lang.label}
                        className="h-4 mr-2"
                      />
                      <span className="text-sm">{lang.label}</span>
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
          <button className="flex items-center space-x-1 bg-[#17776a] hover:bg-[#115c52] text-white font-medium text-sm py-1 px-4 rounded-lg">
            <FaPhoneAlt className="h-4 w-4" />
            <span>1195</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
