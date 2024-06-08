import React from "react";
import { loader as HomeLoader } from "./pages/Home";
import { loader as HeadphonesLoader } from "./pages/Headphones";
import { loader as SpeakersLoader } from "./pages/Speakers";
import { loader as EarphonesLoader } from "./pages/Earphones";
import { loader as productslug } from "./pages/productslug";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  Headphones,
  Speakers,
  Earphones,
  Checkout,
  Home,
  Productslug,
  Error,
  Login,
} from "./pages";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: HomeLoader,
        },
        {
          path: "/headphones",
          element: <Headphones />,
          loader: HeadphonesLoader,
        },
        {
          path: "/products/:slug",
          element: <Productslug />,
          loader: productslug,
        },
        {
          path: "/speakers",
          element: <Speakers />,
          loader: SpeakersLoader,
        },
        {
          path: "/earphones",
          element: <Earphones />,
          loader: EarphonesLoader,
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
