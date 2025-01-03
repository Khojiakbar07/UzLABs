import React, { useState, useEffect } from "react";
import { FaUser, FaLock, FaEnvelope, FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Form, Select } from "antd";

const Register = () => {
  const [username, setUsername] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [captchaResult, setCaptchaResult] = useState("");
  const [captchaQuestion, setCaptchaQuestion] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Generate a random math CAPTCHA question
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    setCaptchaQuestion(`${num1} + ${num2}`);
    setCaptchaResult((num1 + num2).toString());
    setCaptchaInput("");
    setError("");
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const { Option } = Select;

  const [gender, setGender] = useState<string | undefined>(undefined);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validation for required fields
    if (!username || !email || !password || !confirmpassword) {
      setError("Please fill in all fields.");
      return;
    }

    // Validation for CAPTCHA
    if (captchaInput !== captchaResult) {
      setError("CAPTCHA answer is incorrect. Please try again.");
      generateCaptcha(); // Reset CAPTCHA after an incorrect attempt
      return;
    }

    // Validation for password confirmation
    if (password !== confirmpassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    // Simulate an API call
    setTimeout(() => {
      setLoading(false);
      alert("Registered successfully!");
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">
          Register
        </h2>
        <form onSubmit={handleRegister} className="space-y-4">
          {/* Flex container for two inputs per row */}
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 flex items-center border rounded-md overflow-hidden bg-gray-150">
              <div className="px-3 bg-gray-100">
                <FaUser className="text-gray-600" />
              </div>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 text-gray-700 outline-none"
              />
            </div>
            <div className="flex-1 flex items-center border rounded-md overflow-hidden bg-gray-50">
              <input
                type="number"
                placeholder="JSh ShIR"
                value={idNumber}
                onChange={(e) => setIdNumber(e.target.value)}
                className="w-full px-4 py-2 text-gray-700 outline-none"
              />
              <div className="px-3 bg-gray-100">
                <FaInfoCircle className="text-gray-500" />
              </div>
            </div>
          </div>
          <div className="flex-1 flex items-center border rounded-md overflow-hidden bg-gray-50">
            <div className="px-3 bg-gray-100">
              <FaInfoCircle className="text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Familiya Ismingizni kriting"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              className="w-full px-4 py-2 text-gray-700 outline-none focus:ring focus:ring-[#17776a]"
            />
          </div>
          <div className="flex-1 flex items-center border rounded-md overflow-hidden bg-gray-50">
            <div className="px-3 bg-gray-100">
              <span className="text-gray-500 py-2">+998</span>
            </div>
            <input
              type="number"
              placeholder="Telefon Raqam"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2 text-gray-700 outline-none focus:ring focus:ring-[#17776a]"
            />
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 flex items-center border rounded-md overflow-hidden bg-gray-50">
              <div className="px-3 bg-gray-100">
                <FaEnvelope className="text-gray-500" />
              </div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 text-gray-700 outline-none focus:ring focus:ring-[#17776a]"
              />
            </div>
            {/* change */}
            <Form layout="vertical" className="p-1">
              <Select
                placeholder="Select your gender"
                value={gender}
                onChange={(value) => setGender(value)}
                allowClear
              >
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
              </Select>
            </Form>
            {/* change */}
          </div>
          {/* change */}
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 flex items-center border rounded-md overflow-hidden bg-gray-50">
              <div className="px-3 bg-gray-100">
                <FaLock className="text-gray-500" />
              </div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 text-gray-700 outline-none focus:ring focus:ring-[#17776a]"
              />
            </div>
            <div className="flex-1 flex items-center border rounded-md overflow-hidden bg-gray-50">
              <div className="px-3 bg-gray-100">
                <FaLock className="text-gray-500" />
              </div>
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmpassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 text-gray-700 outline-none focus:ring focus:ring-[#17776a]"
              />
            </div>
          </div>
          {/* change */}
          <div className="flex flex-col space-y-2">
            <label className="text-gray-600 text-sm font-medium">
              Arifmetik ifodani hisoblang:{" "}
              <span className="font-bold">{captchaQuestion}</span>
            </label>
            <input
              type="text"
              placeholder="Javobni kiriting"
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
              className="w-full px-4 py-2 border rounded-md text-gray-700 outline-none focus:ring focus:ring-[#17776a]"
            />
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
          <div className="flex items-start mb-4">
            <input
              type="checkbox"
              id="agreement"
              className="mr-2 mt-1 w-5 h-5 accent-teal-600 focus:ring-teal-300 rounded-2xl"
            />
            <label htmlFor="agreement" className="text-md text-gray-700">
              <a
                href="https://lex.uz/docs/-4396419"
                className="text-[#17776a] font-semibold"
              >
                Qonun talablari
              </a>{" "}
              doirasida shaxsga doir ma'lumotlarimdan foydalanishga va ishlov
              berishga rozilik bildiraman.
            </label>
          </div>
          <div className="flex flex-nowrap gap-8">
            <Link
              to="/login"
              className="text-[#17776a] w-full p-3 font-medium hover:text-[#145d4d]"
            >
              <div className="flex flex-row">
                <h2 className="">Kirish</h2>
                <FaLock className="text-[#17776a] m-1" />
              </div>
            </Link>
            <button
              type="submit"
              className="w-full py-3 bg-[#17776a] text-white rounded-md hover:bg-[#145d4d] transition-colors"
              disabled={loading}
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register; 