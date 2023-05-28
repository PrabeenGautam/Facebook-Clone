import { Link } from "react-router-dom";
import { useEffect } from "react";

import fullLogo from "@/assets/svg/fb-logo-full.svg";

function LoginPage() {
  useEffect(() => {
    document.title = "Facebook - log in or sign up";
  }, []);

  return (
    <section className="container">
      <div className="full-logo">
        <img src={fullLogo} alt="facebook" className="" />
        <p className="hidden">
          Connect with friends and the world around you on Facebook.
        </p>
      </div>

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
        <p>Create a Page for a celebrity, brand or business.</p>
      </div>
    </section>
  );
}

export default LoginPage;
