import React, { useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthProvider";

const LogIn = () => {
  const { logIn, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    logIn(email, password)
      .then(() => {
        toast.success("Logged in successful!");
        navigate(from);
      })
      .catch(() => {
        toast.error("Wrong email or password.");
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success("Google login successful!");
        navigate(from);
      })
      .catch(() => {
        toast.error("Google login failed.");
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-amber-50 p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-amber-800 mb-6">
          Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-amber-400"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-amber-400"
          />

          <button
            type="submit"
            className="w-full bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700"
          >
            Login
          </button>
        </form>

        <button
          onClick={handleGoogleLogin}
          className="mt-4 w-full flex items-center justify-center border py-2 rounded-lg hover:bg-amber-100 gap-2"
        >
          <FcGoogle className="text-xl" />
          Login with Google
        </button>

        <p className="mt-4 text-sm text-center">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="text-amber-600 underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
