import { useState } from "react";
import { Link } from "react-router-dom";

import fullLogo from "@/assets/svg/fb-logo-full.svg";
import Input from "@/components/inputs/Input";
import useTitle from "@/hooks/useTitle";
import SignUpModal from "./SignUp.page";

function LoginPage() {
  useTitle("Facebook - log in or sign up");
  const [signUpModal, setSignUpModal] = useState(false);

  function openSignUpModel() {
    setSignUpModal(true);
  }

  function closeSignUpModel() {
    setSignUpModal(false);
  }

  return (
    <>
      {signUpModal && <SignUpModal onClose={closeSignUpModel} />}
      <section className="login flex h-screen flex-col items-center bg-gray-100">
        <div className="m-12 max-w-sm lg:flex lg:max-w-[61.25rem] lg:justify-between lg:pt-24">
          <div className="full-logo  flex flex-col items-center lg:mr-44 lg:mt-10 lg:items-start">
            <img src={fullLogo} alt="facebook" className="w-72 lg:-ml-7" />
            <p className="text-center text-2xl lg:text-left">
              Connect with friends and the world around you on Facebook.
            </p>
          </div>
          <div className="form relative mt-10 rounded-xl bg-white p-5 lg:mt-0">
            <form className="space-y-3 md:w-[23rem]">
              <Input
                name="username"
                id="username"
                placeholder="Email or phone number"
                inputClassName="p-3"
              />

              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                inputClassName="p-3"
              />
              <button
                type="submit"
                className="btn bg-[#1877f2] px-4 py-2.5 text-xl font-bold text-white transition duration-500 ease-in-out hover:bg-blue-600"
              >
                Log In
              </button>
            </form>

            <Link
              to={"/forget-password"}
              className="mt-4 block text-center text-sm text-[#1877f2]  hover:underline"
            >
              Forget password?
            </Link>
            <hr className="my-6 border border-gray-200" />
            <div className="my-4 flex justify-center">
              <button
                className="btn w-fit bg-[#42b72a] px-4 py-3 font-bold text-white transition duration-500 ease-in-out hover:bg-[#36a420]"
                onClick={openSignUpModel}
              >
                Create new account
              </button>
            </div>

            <div className="absolute -bottom-10 left-0 w-full max-w-sm text-center text-sm lg:text-base">
              <Link
                to="/pages/create"
                className="text-sm font-bold hover:underline"
              >
                Create a Page
              </Link>
              &nbsp; for a celebrity, brand or business.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginPage;
