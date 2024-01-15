import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Contact from "./Contact";
import About from "./About";
import SingleProductPage from "./SingleProductPage";
import Shop from "./Shop";

import Login from "./Login";
import Signup from "./Signup";

import AdminHome from "./Admin/AdminHome";

import AdminCategory from "./Admin/AdminCategory";
import AdminAddCategory from "./Admin/AdminAddCategory";
import AdminUpdateCategory from "./Admin/AdminUpdateCategory";

import AdminSubcategory from "./Admin/AdminSubcategory";
import AdminAddSubcategory from "./Admin/AdminAddSubcategory";
import AdminUpdateSubcategory from "./Admin/AdminUpdateSubcategory";

import AdminBrand from "./Admin/AdminBrand";
import AdminAddBrand from "./Admin/AdminAddBrand";
import AdminUpdateBrand from "./Admin/AdminUpdateBrand";

import AdminProduct from "./Admin/AdminProduct";
import AdminAddProduct from "./Admin/AdminAddProduct";
import AdminUpdateProduct from "./Admin/AdminUpdateProduct";
import Profile from "./Profile";
import Updateprofile from "./UpdateProfile";
import Confirmation from "./Confirmation";
import BuyerProfile from "./BuyerProfile";
import Newslatter from "./Newslatter";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Shop/:mc" element={<Shop />} />
          <Route path="/single-product/:id" element={<SingleProductPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup/>} />
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/update-profile" element={<Updateprofile/>}/>
          <Route path="/confirmation" element={<Confirmation/>}/>
          <Route path="/buyerprofile" element={<BuyerProfile/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/newslatter" element={<Newslatter/>}/>


          <Route path="/admin-home" element={<AdminHome />} />
          <Route path="/admin-category" element={<AdminCategory />} />
          <Route path="/admin-add-category" element={<AdminAddCategory />} />
          <Route
            path="/admin-update-category/:id"
            element={<AdminUpdateCategory />}
          />

          <Route path="/admin-subcategory" element={<AdminSubcategory />} />
          <Route
            path="/admin-add-subcategory"
            element={<AdminAddSubcategory />}
          />
          <Route
            path="/admin-update-subcategory/:id"
            element={<AdminUpdateSubcategory />}
          />

          <Route path="/admin-brand" element={<AdminBrand />} />
          <Route path="/admin-add-brand" element={<AdminAddBrand />} />
          <Route
            path="/admin-update-brand/:id"
            element={<AdminUpdateBrand />}
          />

          <Route path="/admin-product" element={<AdminProduct />} />
          <Route path="/admin-add-product" element={<AdminAddProduct />} />
          <Route
            path="/admin-update-product/:id"
            element={<AdminUpdateProduct />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
