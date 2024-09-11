import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import { login, signUp } from "../../firebase";
// import { useNavigate } from "react-router-dom";

const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  //const navigate = useNavigate();

  const userAuth = async (event) => {
    event.preventDefault();
    if (signState === "Sign In") {
      await login(email, pass);
    } else {
      await signUp(name, email, pass);
    }
  };

  return (
    <div className="login">
      <img
        src={logo}
        className="login-logo"
        alt="Netflix"
        // onClick={() => navigate("/")}
        // style={{ cursor: "pointer" }}
      />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" ? (
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              placeholder="Enter your Name"
            />
          ) : (
            <></>
          )}

          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Enter your Email"
          />
          <input
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
            }}
            type="password"
            placeholder="Enter your Password"
          />
          <button onClick={userAuth} type="submit">
            {signState}
          </button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor=" ">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign In" ? (
            <p>
              New to Netflix?{" "}
              <span
                onClick={() => {
                  setSignState("Sign Up");
                }}
              >
                Sign Up
              </span>{" "}
            </p>
          ) : (
            <p>
              Already have Account?{" "}
              <span
                onClick={() => {
                  setSignState("Sign In");
                }}
              >
                Sign In
              </span>{" "}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
