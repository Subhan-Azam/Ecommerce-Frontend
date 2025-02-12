import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.tsx";
import Footer from "./components/footer/Footer.tsx";
import Home from "./pages/Home.tsx";
import AllCategories from "./pages/AllCategories.tsx";
import SingleProduct from "./pages/SingleProduct.tsx";
import AddToCart from "./pages/AddToCart.tsx";

const Layout = () => (
  <div>
    <Navbar />
    <Outlet />
    <Footer />
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/allCategories", element: <AllCategories /> },
      { path: "/single-product/:id", element: <SingleProduct /> },
      { path: "/addtocart", element: <AddToCart /> },
    ],
  },
]);

function App() {
  return (
    <div className="font-poppins">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
