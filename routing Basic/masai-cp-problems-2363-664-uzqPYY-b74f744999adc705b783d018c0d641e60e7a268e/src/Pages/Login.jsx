import React from "react";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { isAuth, setIsAuth } = useContext(AuthContext);

  async function getLogin() {
    try {
      let response = await fetch(`https://reqres.in/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      response.status == "200" && setIsAuth(true);
      response.status == "200" && navigate("/");
    } catch (error) {
      console.log("Login-Error :", error);
    }
  }
  return (
    <div>
      <form
        className="auth_form"
        onSubmit={(e) => {
          e.preventDefault();
          getLogin();
        }}
      >
        <input
          style={{ padding: "5px", margin: "10px", width: 200 }}
          type="email"
          className="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <input
          style={{ padding: "5px", margin: "10px", width: 200 }}
          type="password"
          className="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <input className="submit" type="submit" />
      </form>
    </div>
  );
}
