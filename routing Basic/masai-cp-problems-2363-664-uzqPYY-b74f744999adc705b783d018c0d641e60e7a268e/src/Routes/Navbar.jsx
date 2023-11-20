import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";

function Navbar() {
  const { isAuth } = useContext(AuthContext);

  return (
    <div
      className="navbar"
      style={{
        display: "flex",
        justifyContent: "space-around",
        margin: "20px",
      }}
    >
      <Link to="/login">Login</Link>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      {isAuth ? (
        <Link to="/products">Products</Link>
      ) : (
        <Link to="/login">Products</Link>
      )}
    </div>
  );
}

export { Navbar };
