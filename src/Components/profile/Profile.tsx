import React from "react";
import User from "../../assets/Icons/User.png"

const Profile: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {/* Profile Header */}
        <div className="flex flex-col items-center">
          <img
            src={User}
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover border-2 border-[#115c52] mb-4"
          />
          <h2 className="text-2xl font-semibold text-gray-800">John Doe</h2>
          <p className="text-gray-600">johndoe@example.com</p>
        </div>

        {/* Profile Details */}
        <div className="mt-8">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Personal Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <span className="block text-sm font-medium text-gray-500">Full Name</span>
              <p className="text-gray-700">John Doe</p>
            </div>
            <div>
              <span className="block text-sm font-medium text-gray-500">Email Address</span>
              <p className="text-gray-700">johndoe@example.com</p>
            </div>
            <div>
              <span className="block text-sm font-medium text-gray-500">Phone Number</span>
              <p className="text-gray-700">+1 123 456 7890</p>
            </div>
            <div>
              <span className="block text-sm font-medium text-gray-500">Address</span>
              <p className="text-gray-700">123 Main Street, Springfield</p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-[#115c52] text-white py-2 px-4 rounded-lg shadow hover:bg-[#0e4a3f] transition">
            Edit Profile
          </button>
          <button className="bg-red-500 text-white py-2 px-4 rounded-lg shadow hover:bg-red-600 transition">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
