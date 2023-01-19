import { createBrowserRouter } from "react-router-dom";
import Faq from "../Components/Faq/Faq";
import Main from "../Layout/Main";
import Home from "../Pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        // loader: fetch("https://products-server-side.vercel.app/products"),
      },
      {
        path: "/faq",
        element: <Faq />,
      },
    ],
  },
]);
