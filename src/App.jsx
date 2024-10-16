import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Openpage from "./pages/Openpage.jsx";
import Summary from "./pages/showsummary.jsx";
import BookNow from "./pages/BookNow.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Openpage />,
  },
  {
    path: "/summary/:id",
    element: <Summary />,
    children: [
      {
        path: "booknow",
        element: <BookNow />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
