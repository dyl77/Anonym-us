import { Yes, LoginDisplayContainer } from "../../Styles/LoginStyles";

import React, { useEffect, useState } from "react";

const callBackendAPI = async () => {
  const response = await fetch("/getall");
  const body = await response.json();
  if (response.status !== 200) {
    throw Error(body.message);
  }
  let userId = body.map(function (element) {
    return `${element.user_id}`;
  });
  console.log(userId);
};

function LoginDisplay() {
  const login = async () => {
    let loginData = {
      un: userName,
      pw: password,
    };
    const response = fetch("/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    });
    checkIfValid(await (await response).json());
  };

  const checkIfValid = (login) => {
    console.log(login);
    if (login === false) {
      alert("No username or password found");
    } else if (login === true) {
      alert("You are logged in");
    }
  };

  const handleChange = ({ target }) => {
    if (target.name === "password") {
      setPassword(target.value);
    } else {
      setUserName(target.value);
    }
  };

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Yes>
      <LoginDisplayContainer>
        <div class="login">
          <h1>Welcome Back to Anonym-us</h1>
          <h2>Login below</h2>

          <input
            type="text"
            name="username"
            placeholder="Username"
            required="required"
            value={userName}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required="required"
            value={password}
            onChange={handleChange}
          />
          <button onClick={login} class="btn btn-dark btn-block btn-large ">
            Let me in.
          </button>

          <p>
            New to Anonym-us <a href="/register">register here</a>
          </p>
        </div>
      </LoginDisplayContainer>
    </Yes>
  );
}

export default LoginDisplay;
