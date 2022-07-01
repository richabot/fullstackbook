import React from "react";
import { getLoginAPI } from "../Redux/Auth/authAction";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";


const Login = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { state } = useLocation();

  const email = "eve.holt@reqres.in";
  const password = "cityslicka";

  const handleSubmit = (e) => {
    e.preventDefault();
    // const email = e.target[0].value;
    // const password = e.target[1].value;

    const comingFrom = state?.from?.pathname || "/";

    dispatch(getLoginAPI({ email: email, password: password })).then((r) => {
      if (r.type === "get/login/success") {
        navigate(comingFrom, { replace: true });
      }
    });
  };

  return (
    <div style={{ width: "300px", margin: "auto", textAlign: "center" }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <br />
          <input type="email" defaultValue={email} />
        </div>
        <div>
          <label>Password</label>
          <br />
          <input type="text" defaultValue={password} />
        </div>
        <br />
        <button>LOGIN</button>
      </form>
    </div>
  );
};

export default Login;
