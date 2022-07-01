import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/Auth/authAction";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (isAuth) {
      dispatch(logout());
      navigate("/");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1%",
        alignItems: "center",
      }}
    >
      <h3 style={{ margin: 0 }}>Navbar</h3>
      <button onClick={handleLogin}>{isAuth ? "Logout" : "Login"}</button>
    </div>
  );
};

export default Navbar;
