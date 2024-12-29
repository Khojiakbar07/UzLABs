import { useState } from "react";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Registered successfully!");
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">
          Register
        </h2>
        <form onSubmit={handleRegister} className="space-y-3">
          <div className="flex items-center border rounded-md overflow-hidden bg-gray-50">
            <div className="px-3 bg-gray-100">
              <FaUser className="text-gray-500" />
            </div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full px-3 py-2 text-gray-700 outline-none focus:ring focus:ring-[#17776a]"
              required
            />
          </div>
          <div className="flex items-center border rounded-md overflow-hidden bg-gray-50">
            <div className="px-3 bg-gray-100">
              <FaEnvelope className="text-gray-500" />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 text-gray-700 outline-none focus:ring focus:ring-[#17776a]"
              required
            />
          </div>
          <div className="flex items-center border rounded-md overflow-hidden bg-gray-50">
            <div className="px-3 bg-gray-100">
              <FaLock className="text-gray-500" />
            </div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-3 py-2 text-gray-700 outline-none focus:ring focus:ring-[#17776a]"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-[#17776a] text-white rounded-md hover:bg-[#145d4d] transition-colors"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-3">
          Already have an account?{" "}
          <Link to="/login" className="text-[#17776a] font-medium hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
