import { useState, useEffect } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (captchaInput !== captchaResult) {
      setError("CAPTCHA answer is incorrect. Please try again.");
      generateCaptcha(); // Reset CAPTCHA after an incorrect attempt
      return;
    }

    setLoading(true);

    // Simulate an API call
    setTimeout(() => {
      setLoading(false);
      alert("Logged in successfully!");
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">Login</h2>
        <form onSubmit={handleLogin} className="space-y-3">
          <div className="flex items-center border rounded-md overflow-hidden bg-gray-50">
            <div className="px-3 bg-gray-100">
              <FaUser className="text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 text-gray-700 outline-none focus:ring focus:ring-[#17776a]"
              required
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-gray-600 text-sm font-medium">
              Arfimetik ifodani hisoblang:{" "}
              <span className="font-bold">{captchaQuestion}</span>
            </label>
            <input
              type="text"
              placeholder="Javobni kiriting"
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
              className="w-full px-3 py-2 border rounded-md text-gray-700 outline-none focus:ring focus:ring-[#17776a]"
              required
            />
            {error && (
              <p className="text-sm text-red-500">
                {error}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-[#17776a] text-white rounded-md hover:bg-[#145d4d] transition-colors"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-3">
          Don't have an account?{" "}
          <Link to="/register" className="text-[#17776a] font-medium hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
