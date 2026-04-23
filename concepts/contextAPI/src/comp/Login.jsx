import React, { useContext, useState } from "react";
import UserContext from '../context/UserContext';

function Login() {
  const { setUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please fill all fields");
      return;
    }

    // simple login simulation
    setUser({ username , password });
    setUsername("");
    setPassword("");
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">

      <div className="bg-white p-8 rounded-2xl shadow-md w-[350px]">

        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">
          Login 🔐
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">

          {/* Username */}
          <div>
            <label className="block mb-1 text-gray-600">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-gray-600">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Button */}
          <button
            onClick={handleLogin}
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition"
          >
            Login
          </button>
        </form>

        {/* Footer text */}
        <p className="text-center text-gray-500 mt-4 text-sm">
          Don't have an account?{" "}
          <span className="text-indigo-500 cursor-pointer hover:underline">
            Sign up
          </span>
        </p>

      </div>
    </div>
  );
}

export default Login;