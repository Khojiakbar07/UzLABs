import logo from "../assets/logo.jpg";
import { FaPhoneAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white text-black shadow-sm">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Logo Section */}
        <div className="flex items-center space-x-4 text-center md:text-left">
          <img
            src={logo}
            alt="Logo"
            className="h-8 md:h-10"
          />
          <span className="text-sm md:text-lg font-normal leading-tight">
            Uzlabs.uz
          </span>
        </div>

        {/* Call Center Section */}
        <div className="bg-[#f8f8fa] p-3 rounded-lg flex flex-row items-center gap-3 space-y-0 sm:space-y-0 sm:space-x-6">
          {/* Call Center Info */}
          <div className="flex flex-col sm:flex-col items-center sm:items-end">
            <span className="font-normal">Call center</span>
            <div className="flex items-center space-x-1 text-sm">
              <span className="text-green-500 text-xs">●</span>
              <span className="text-black">24/7</span>
            </div>
          </div>

          {/* Call Button */}
          <button className="flex items-center width-full space-x-1 bg-[#17776a] hover:bg-[#115c52] text-white font-medium text-sm py-1 px-2 md:py-2 md:px-4 rounded-lg">
            <FaPhoneAlt className="h-4 w-4" />
            <span className="">1195</span>
          </button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-200 py-2 text-xs text-center text-gray-600 px-4">
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          <p>&copy; Barcha huquqlar himoyalangan 2024</p>
          <p>
            Materiallardan foydalanganda{" "}
            <span className="font-medium text-[#17776a]">Uzlabs.uz</span> ga
            havola bo‘lishi shart.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
