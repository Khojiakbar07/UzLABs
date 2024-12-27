import { FaHome, FaUser, FaMicroscope, FaClipboardList, FaStethoscope  } from "react-icons/fa";
import { Link } from "react-router-dom";

function BottomNavBar() {
  return (
    <div className="block md:hidden fixed bottom-0 w-full bg-white shadow-md border-t border-gray-200">
      <div className="max-w-screen-md mx-auto flex justify-around items-center py-2">

        {/* Diagnostics */}
        <div className="flex flex-col items-center text-gray-700 hover:text-[#115c52]">
          <FaStethoscope  className="text-xl" />
          <span className="text-xs mt-1">Diagnostika</span>
        </div>

        {/* Services */}
        <div className="flex flex-col items-center text-gray-700 hover:text-[#115c52]">
          <FaClipboardList className="text-xl" />
          <span className="text-xs mt-1">Xizmatlar</span>
        </div>

        {/* Home */}
        <Link to="/" className="flex flex-col items-center text-[#115c52]">
          <FaHome className="text-xl" />
          <span className="text-xs mt-1">Asosiy</span>
        </Link>

        {/* Lab */}
        <div className="flex flex-col items-center text-gray-700 hover:text-[#115c52]">
          <FaMicroscope className="text-xl" />
          <span className="text-xs mt-1">Laboratoriya</span>
        </div>

        {/* Profile */}
        <Link to="/profile" className="flex flex-col items-center text-gray-700 hover:text-[#115c52]">
          <FaUser className="text-xl" />
          <span className="text-xs mt-1">Profil</span>
        </Link>
      </div>
    </div>
  );
}

export default BottomNavBar;
