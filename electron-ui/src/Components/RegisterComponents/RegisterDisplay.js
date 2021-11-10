import { Yes, RegisterDisplayContainer } from "../../Styles/RegisterStyles";

import React, { useEffect, useState } from "react";

import {
  useHistory
} from "react-router-dom";


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

function RegisterDisplay () {
  let history = useHistory();

  const register = async () => {
    let registerData = {
      fname: firstName,
      lname: lastName,
      un: userName,
      pw: password,
    };
    const response = fetch("/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registerData),
    });
    history.push('/landing');
    //checkUsernameAvailable(await (await responsse).json());
  };

  // TODO: Need to check if username has already been taken.
  //const checkUsernameAvailable

  const handleChange = ({ target }) => {
    if (target.name === "p") {
      setPassword(target.value);
    }
    if (target.name === "lname") {
      setLastName(target.value);
    }
    if (target.name === "fname") {
      setFirstName(target.value);
    }
    if (target.name === "u") {
      setUserName(target.value);
    }
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Yes>
      <RegisterDisplayContainer>
        <div class="register">
          <h1>Welcome to Anonym-us</h1>
          <h2>Register Below</h2>
          {/* <form method="post" action="/landing"> */}
          <form action="/landing">
            <input
                type="text"
                name="fname"
                placeholder="First Name"
                required="required"
                value={firstName}
                onChange={handleChange}
            />
            <input
                type="text"
                name="lname"
                placeholder="Last Name"
                required="required"
                value={lastName}
                onChange={handleChange}
            />
            <input
              type="text"
              name="u"
              placeholder="Username"
              required="required"
              value={userName}
              onChange={handleChange}
            />
            <input
              type="password"
              name="p"
              placeholder="Password"
              required="required"
              value={password}
              onChange={handleChange}
            />
            <button onClick={register} class="btn btn-dark btn-block btn-large " >
              Complete Registration
            </button>
          </form>
        </div>
      </RegisterDisplayContainer>
    </Yes>
  );
}

export default RegisterDisplay;