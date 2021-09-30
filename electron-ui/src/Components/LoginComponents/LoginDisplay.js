import { Yes, LoginDisplayContainer } from "../../Styles/LoginStyles";

function LoginDisplay() {
  return (
    <Yes>
      <LoginDisplayContainer>
        <div class="login">
          <h1>Welcome Back to Anonym-us</h1>
          <h2>Login below</h2>
          <form method="post">
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
            <button type="submit" class="btn btn-dark btn-block btn-large ">
              Let me in.
            </button>
          </form>
          <p>New to Anonym-us <a href="/register">register here</a></p>
        </div>
      </LoginDisplayContainer>
    </Yes>
  );
}

export default LoginDisplay;
