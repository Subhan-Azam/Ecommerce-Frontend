import React from "react";
import Navbar from "./(components)/navbar/Navbar.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import AllCategories from "./pages/AllCategories.tsx";
import Footer from "./(components)/footer/Footer.tsx";
import SingleProduct from "./pages/SingleProduct.tsx";
import AddToCart from "./pages/AddToCart.tsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar /> <Home /> <Footer />
        </>
      ),
    },
    {
      path: "/allCategories",
      element: (
        <>
          <Navbar /> <AllCategories />
          <Footer />
        </>
      ),
    },
    {
      path: "/single-product/:id",
      element: (
        <>
          <Navbar /> <SingleProduct/> <Footer/>
        </>
      ),
    },
    
    // {
    //   path: "/single-product/:id",
    //   element: <SingleProduct />,
    // },
    {
      path: "/addtocart",
      element: (
        <>
          <Navbar /> <AddToCart /> <Footer />
        </>
      ),
    },
  ]);

  return (
    <div className="font-poppins">
      {/* Navbar Section */}
      <RouterProvider router={router}>
        <Navbar />
      </RouterProvider>
    </div>
  );
}

export default App;
