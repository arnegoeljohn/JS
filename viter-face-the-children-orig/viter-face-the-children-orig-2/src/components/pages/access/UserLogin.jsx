import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Logging in with", { email, password });
  };
  const FloatingInput = ({ label, type = "text", name }) => (
    <div className="relative w-full">
      <input
        type={type}
        id={name}
        name={name}
        className="w-full border border-gray-300 rounded-md px-3 pt-4 pb-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
        placeholder=" "
      />
      <label
        htmlFor={name}
        className="absolute left-3 -top-2 text-xs bg-white px-1 text-primary"
      >
        {label}
      </label>
    </div>
  );

  return (
    <section className="flex items-center justify-center min-h-screen bg-white px-4">
      <div className="w-full max-w-md">
        {/* Logo + Heading */}
        <div className="text-center mb-6">
          <div className="flex flex-col items-center space-y-2">
            <img
              src="./src/assets/ftc_svg_logo.svg"
              alt="Hand Logo"
              className="w-100 h-20"
            />
          </div>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-lg  p-6">
          <h2 className="text-lg font-bold text-gray-700 mb-4">LOGIN</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <FloatingInput label="Email" name="Email" />
            <FloatingInput label="Password" name="Password" type="Password" />
            <button
              type="submit"
              className="w-full bg-blue-300 hover:bg-blue-400 text-white font-semibold py-2 rounded-md transition"
            >
              Login
            </button>
          </form>

          {/* Footer Links */}
          <div className="mt-4 text-sm text-gray-600 text-center space-y-1">
            <p>
              Need an account?{" "}
              <Link to="/create-account" className="text-blue-500 underline">
                Create an account{" "}
              </Link>
            </p>
            <p>
              Did you forget your password?{" "}
              <Link to="/forgot-password" className="text-blue-500 underline">
                Forgot password{" "}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserLogin;
