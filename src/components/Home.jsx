import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { logOut, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    logOut()
      .then(() => {
        console.log("User logged out successfully");
        navigate("/login");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="text-center">
      <h1 className="text-5xl text-lime-600 mt-[200px] tracking-wide">
        Welcome {user?.displayName}
      </h1>
      <button
        onClick={handleSignOut}
        type="button"
        className="mt-5 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Log out
      </button>
    </div>
  );
};
