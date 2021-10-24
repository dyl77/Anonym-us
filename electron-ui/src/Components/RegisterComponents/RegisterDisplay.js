import { Yes, RegisterDisplayContainer } from "../../Styles/RegisterStyles";

function RegisterDisplay () {
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
            />
            <input
                type="text"
                name="lname"
                placeholder="Last Name"
                required="required"
            />
            <input
              type="text"
              name="u"
              placeholder="Username"
              required="required"
            />
            <input
              type="password"
              name="p"
              placeholder="Password"
              required="required"
            />
            <button type="submit" class="btn btn-dark btn-block btn-large " >
              Complete Registration
            </button>
          </form>
        </div>
      </RegisterDisplayContainer>
    </Yes>
  );
}

export default RegisterDisplay;