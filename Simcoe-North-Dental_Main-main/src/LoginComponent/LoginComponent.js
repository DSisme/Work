import React, { useState } from "react";
import "./LoginComponent.css";
import "font-awesome/css/font-awesome.min.css";

const Login = ({ isShowLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer");
  const [loginState, setLoginState] = useState(false);
  // const history = useHistory();

  const onSubmit = (event) => {
    event.preventDefault();

    fetch("https://simcoeauth.herokuapp.com/api/login", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
        role: role,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem(
          "RESULT",
          JSON.stringify({
            username: data.result.first_name,
            userId: data.result._id,
            role: data.result.role,
          })
        );
        setLoginState(true);
      })
      .catch((err) => {
        console.error(err);

        alert("Error logging in please try again");
      });
  };
  return (
    <div className={`${!isShowLogin ? "active" : ""} showLogin`}>
      {loginState ? (
        <div className="loggedIn">
          <a className="loggedIn-text" href="/">
            You have successfully logged in!
          </a>
        </div>
      ) : (
        <div className="login-form">
          <div className="form-box solid">
            <img src="/img/Logo_with_name.png" alt="logo"></img>
            <form onSubmit={onSubmit}>
              <div className="login-row">
                <label>User Name:</label>
                <input
                  type="text"
                  name="username"
                  className="login-box"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </div>
              <div className="login-row">
                <label>Password:</label>
                <input
                  type="password"
                  name="password"
                  className="login-box"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div className="login-row roleSelection">
                <label>
                  Role:
                  <select
                    id="roleSelection"
                    name="role"
                    onChange={(e) => {
                      setRole(e.target.value);
                    }}
                  >
                    <option value="customer">Customer</option>
                    <option value="doctor">Doctor</option>
                    <option value="manager">Manager</option>
                  </select>
                </label>
              </div>
              <button type="submit" value="LOGIN" className="login-btn">
                LOGIN
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
