import logo from "../assets/logo.jpg";
import { FaPhoneAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white text-black shadow-sm">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Logo Section */}
        <div className="flex items-center space-x-4 text-center md:text-left">
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-auto"
          />
          <span className="text-lg md:text-base font-normal leading-tight">
            sog‘liqni saqlash va <br /> diagnostika markazi
          </span>
        </div>

        {/* Call Center Section */}
        <div className="bg-[#f8f8fa] p-3 rounded-lg flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-6">
          {/* Call Center Info */}
          <div className="flex flex-col items-center sm:items-end">
            <span className="font-normal">Call center</span>
            <div className="flex items-center space-x-1 text-sm">
              <span className="text-green-500 text-xs">●</span>
              <span className="text-black">24/7</span>
            </div>
          </div>

          {/* Call Button */}
          <button className="flex items-center space-x-2 bg-[#17776a] text-white font-normal py-2 px-4 rounded-lg shadow hover:bg-[#115c52] transition">
            <FaPhoneAlt className="h-4 w-4" />
            <span>1195</span>
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
