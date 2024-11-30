'use client';
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Hardcoded user data
  const storedUser = {
    name: "John snow",
    house: "Stark",
    email: "john@gmail.com",
    password: "password123", // Example password (for demonstration)
  };

  const handleForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // Check if the entered email and password match the stored user data
      if (email === storedUser.email && password === storedUser.password) {
        setMessage(`Login Successful! Welcome, ${storedUser.name} of House ${storedUser.house}.`);
      } else {
        setMessage("Error: Invalid email or password.");
      }
    } catch (err) {
      setMessage("Error: Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
        <form onSubmit={handleForm} className="mt-6">
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm text-gray-900 focus:ring-indigo-300 focus:border-indigo-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm text-gray-900 focus:ring-indigo-300 focus:border-indigo-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 px-4 text-white rounded-lg ${
              loading ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"
            } focus:outline-none focus:ring focus:ring-indigo-300`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Feedback Message */}
        {message && (
          <div className={`mt-4 text-center ${message.includes("Error") ? "text-red-500" : "text-green-500"}`}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
}
