import logo from "../assets/logo.jpg";
import { FaPhoneAlt } from "react-icons/fa";
import UzFlag from "../assets/uzb.png";
import RuFlag from "../assets/ru.png";
import EnFlag from "../assets/en.png";

function Navbar() {
  return (
    <div className="bg-white shadow-lg sticky top-0 z-50 ">
      <div className="container mx-auto flex justify-between items-center py-4 px-14">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img
            src={logo} // Replace with the actual logo URL
            alt="Logo"
            className="h-10"
          />
          <span className="text-xl font-normal">
            Bilim va malakalarni 
            <br></br>
            baholash agentligi
          </span>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-8">
          {/* Language Dropdown */}
          <div className="relative">
            <button className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-200">
              <img
                src={UzFlag}
                alt="Flag"
                className="h-4"
              />
              <span className="text-base font-medium">Uz</span>
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
            <div className="absolute right-0 mt-2 bg-white shadow-md rounded-md w-24">
              <ul className="text-gray-700">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Ru</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">En</li>
              </ul>
            </div>
          </div>

        {/* Call Center Info */}
        <div className="flex items-center space-x-8">
          {/* Call Center Status */}
          <div className="flex flex-col  items-end space-x-2">
            <span className="font-medium">Call center</span>
            <div className="flex items-center space-x-1">
              <span className="text-green-500 text-xs">●</span>
              <span className="text-sm font-medium">24/7</span>
            </div>
          </div>

          {/* Call Button */}
          <button
            className="flex items-center space-x-2 bg-[#17776a] hover:bg-[#115c52] text-white font-medium py-2 px-4 rounded-lg"
          >
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
