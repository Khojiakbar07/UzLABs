import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
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
