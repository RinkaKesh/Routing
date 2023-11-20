import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Products from "../Pages/Products";
import { AuthContext } from "../Context/AuthContextProvider";

const AllRoutes = () => {
  const { isAuth } = useContext(AuthContext);

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
};

export { AllRoutes };
