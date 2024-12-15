import logo from "../assets/logo.jpg";
import { FaPhoneAlt } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-white text-black shadow-sm max-w-8xl">
      {" "}
      <div className="container mx-auto flex justify-between items-center py-4 px-14">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img
            src={logo} // Replace with the actual logo URL
            alt="Logo"
            className="h-10"
          />
          <span className="text-xl font-normal">
            sog‘liqni saqlash va
            <br />
            diagnostika markazi
          </span>
        </div>

        {/* Right Section */}
        <div className=" bg-[#f8f8fa] flex items-center space-x-8">
          {/* Call Center Info */}
          <div className="flex items-center space-x-8">
            {/* Call Center Status */}
            <div className="flex flex-col items-end space-x-2">
              <span className="text-black font-normal">Call center</span>
              <div className="flex items-center space-x-1">
                <span className="text-green-500 text-xs">●</span>
                <span className="text-sm font-normal text-black">24/7</span>
              </div>
            </div>

            {/* Call Button */}
            <button className="flex items-center space-x-2 text-black font-normal py-2 px-4 rounded-lg">
              <FaPhoneAlt className="h-4 w-4" />
              <span>1195</span>
            </button>
          </div>
        </div>
      </div>
      <div className="container text-xs mx-auto text-center flex justify-between px-14 pb-2">
        <p>&copy;Barcha huquqlar himoyalangan 2024</p>
        <p>Materiallardan foydalanganda my.uzbmb.uzga havola bo‘lishi shart.</p>
      </div>
    </div>
  );
}

export default Footer;
