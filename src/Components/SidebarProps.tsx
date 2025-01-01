import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import {AiOutlineClose } from "react-icons/ai";
import person from "../assets/SideBar-Icons/person.png"
import lab from "../assets/SideBar-Icons/lab.png"
import services from "../assets/SideBar-Icons/services.png"
import Therapy from "../assets/SideBar-Icons/therapy.png"
// import { BsList } from "react-icons/bs";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";



interface SidebarProps {
  isVisible: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isVisible, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-60 bg-white shadow-lg transform ${
        isVisible ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out z-50`}
    >
      {/* Header Section */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="h-10" />
          <span className="text-lg font-normal">
            Uzlabs.uz
          </span>
        </div>
        <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
          <AiOutlineClose className="h-6 w-6" />
        </button>
      </div>

      {/* Menu Items */}
      <ul className="p-4 space-y-4">
        <Link to="/profile" className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
          <img src={person} className="h-5 w-5 text-gray-600" />
          <span className="text-sm font-medium">Profilga kirish</span>
        </Link>
        <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
          <img src={lab} className="h-5 w-5 text-gray-600" />
          <span className="text-sm font-medium">Diagnostika</span>
        </li>
        <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
          <img src={Therapy} className="h-5 w-5 text-gray-600" />
          <span className="text-sm font-medium">Pediatriya</span>
        </li>
        <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
          <img src={services} className="h-5 w-5 text-gray-600" />
          <span className="text-sm font-medium">Xizmatlar</span>
        </li>
      </ul>

      {/* Footer Section */}
      <div className="absolute bottom-0 w-full p-4 border-t">
        <div className="flex justify-between items-center">
          <button className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg">
            <FaPhoneAlt className="h-5 w-5" />
            <span className="font-medium">103</span>
          </button>
          <div className="flex flex-col items-end">
            <span className="text-sm font-medium">Call center</span>
            <div className="flex items-center space-x-1">
              <span className="text-green-500 text-xs">●</span>
              <span className="text-xs text-gray-600">24/7</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
