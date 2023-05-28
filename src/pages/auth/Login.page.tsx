import { Link } from "react-router-dom";

import fullLogo from "@/assets/svg/fb-logo-full.svg";
import useTitle from "@/hooks/useTitle";

function LoginPage() {
  useTitle("Facebook - log in or sign up");

  return (
    <section className="container mt-5 flex h-screen flex-col items-center bg-gray-100">
      <div className="full-logo flex max-w-md flex-col items-center">
        <img src={fullLogo} alt="facebook" className="w-72" />
        <p className="text-center text-2xl">
          Connect with friends and the world around you on Facebook.
        </p>
      </div>

      <div className="">
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
        <button className="btn">Create new account</button>
        <p>Create a Page for a celebrity, brand or business.</p>
      </div>
    </section>
  );
}

export default LoginPage;
