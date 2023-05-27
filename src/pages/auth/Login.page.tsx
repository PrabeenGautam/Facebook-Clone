import { Link } from "react-router-dom";

import fullLogo from "@/assets/svg/fb-logo-full.svg";

function LoginPage() {
  return (
    <section>
      <div className="full-logo">
        <img src={fullLogo} alt="facebook" />
        <p className="description">
          Connect with friends and the world around you on Facebook.
        </p>
      </div>

      <div className="container">
        <div>
          <form>
            <div className="form-input">
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Email of phone number"
              />
            </div>
            <div className="form-input">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>
            <button type="submit">Log In</button>
          </form>

          <Link to={"/forget-password"}>Forget Password?</Link>
          <button type="button">Create new account</button>
        </div>

        <p>Create a Page for a celebrity, brand or business.</p>
      </div>
    </section>
  );
}

export default LoginPage;
