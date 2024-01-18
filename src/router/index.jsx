import { createBrowserRouter } from "react-router-dom";
import { Register } from "../components/Register";
import { Login } from "../components/Login";
import { Home } from "../components/Home";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
