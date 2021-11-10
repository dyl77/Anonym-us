import { Yes, LandingDisplayContainer } from "../../Styles/LandingStyles.js";

function LandingDisplay() {
  return (
    <Yes>
      <LandingDisplayContainer>
        <ul>
          <div class="topnav">
            <li><a class="active" href="#home">Home</a></li>
            <li><a href="#accounts">Anonym-Us Accounts</a></li>
            <li><a href="#profile">Settings</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a class="right" href="#logout">Logout</a></li>
          </div>
        </ul>
        <div class="login">
          <h1>Welcome to the landing page</h1>
        </div>
      </LandingDisplayContainer>
    </Yes>
  );
}

export default LandingDisplay;