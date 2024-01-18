import React, { useState } from "react";
import { auth } from "../firebase/config";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";

export const Login = () => {
  console.log(auth);
  const [userCredentials, setUserCredentials] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handleCredentials = (e) => {
    setError("");
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      userCredentials.email,
      userCredentials.password
    )
      .then((userCredential) => {
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handlePasswordReset = () => {
    const email = prompt("Please enter your email:");
    sendPasswordResetEmail(auth, email);
    alert("Email sent! Check your inbox for password reset instructions");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mt-[100px] max-w-sm mx-auto border-2 rounded-lg border-solid p-5"
      >
        <h1 className="font-bold text-xl mb-5 text-center">SIGN IN</h1>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@gmail.com"
            required
            onChange={(e) => handleCredentials(e)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            type="password"
            name="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="********"
            required
            onChange={(e) => handleCredentials(e)}
          />
        </div>
        <div className="flex items-center justify-between mb-5">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
          <span
            onClick={handlePasswordReset}
            className="text-center cursor-pointer text-base"
          >
            Forgot password?
          </span>
        </div>

        {error && <p className="my-3 text-red-600">{error}</p>}
        <hr />

        <div className="text-center mt-3 font-medium">
          Don't have an account?{" "}
          <NavLink to="/register" className="text-blue-600">
            Sign up
          </NavLink>
        </div>
      </form>
    </>
  );
};
