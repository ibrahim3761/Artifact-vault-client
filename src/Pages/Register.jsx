import React, { useState, use } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Provider/AuthProvider";
import { Bounce, toast } from "react-toastify";
import { IoMdEyeOff } from "react-icons/io";
import { FaEye } from "react-icons/fa";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { googleLogin, createUser, setUser, updateUser } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error("Password must be at least 6 characters and include uppercase, lowercase, and a number.", {
        position: "top-right",
        autoClose: 3000,
        theme: "light",
        transition: Bounce,
      });
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate(location.state?.from?.pathname || "/");
            toast.success("Registration successful!", {
              position: "top-right",
              autoClose: 3000,
              theme: "light",
              transition: Bounce,
            });
          })
          .catch((error) => {
            setUser(user);
            toast.error(`Profile update failed: ${error.message}`, {
              position: "top-right",
              autoClose: 3000,
              theme: "light",
              transition: Bounce,
            });
          });
      })
      .catch((error) => {
        toast.error(`Registration failed: ${error.message}`, {
          position: "top-right",
          autoClose: 3000,
          theme: "light",
          transition: Bounce,
        });
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        navigate(location.state?.from?.pathname || "/");
        toast.success("Google login successful!", {
          position: "top-right",
          autoClose: 3000,
          theme: "light",
          transition: Bounce,
        });
      })
      .catch((error) => {
        toast.error(`Google login failed`, {
          position: "top-right",
          autoClose: 3000,
          theme: "light",
          transition: Bounce,
        });
      });
  };

  return (
    <div className="flex justify-center items-center py-10 bg-amber-50 px-4 rounded-2xl">
      <title>ArtifactVault - Register</title>
      <div className="bg-white text-gray-900 rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-amber-800">
          Register
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-1">Photo URL</label>
            <input
              type="text"
              name="photo"
              placeholder="Profile photo URL"
              className="px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          <div className="flex flex-col relative">
            <label className="font-semibold mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Create a password"
              required
              className="px-4 py-2 pr-10 rounded border focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-[38px] text-gray-600"
              aria-label="Toggle password visibility"
            >
              {showPassword ? <FaEye /> : <IoMdEyeOff />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-lg font-semibold transition"
          >
            Register
          </button>

          <button
            onClick={handleGoogleLogin}
            type="button"
            className="w-full mt-4 flex items-center justify-center gap-2 border py-2 rounded-lg hover:bg-amber-100 transition"
          >
            <FcGoogle className="text-xl" />
            Continue with Google
          </button>

          <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-amber-600 hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
