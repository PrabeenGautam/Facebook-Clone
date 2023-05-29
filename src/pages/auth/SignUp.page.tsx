import { Link } from "react-router-dom";
import Checkbox from "../../components/input/Checkbox";
import Modal from "../../components/modal/Modal";
import Select from "../../components/input/Select";
import { month, pronoun } from "../../assets/data/static.data";
import generateValue from "../../utils/generateValue";

function SignUpModal() {
  const date = new Date();

  const currentMonth = date.getMonth() + 1;
  const currentDate = date.getDate();
  const currentYear = date.getFullYear();

  const dateArray = generateValue(1, 31);
  const yearArray = generateValue(1905, currentYear);

  return (
    <Modal
      heading="Sign Up"
      subheading="It's quick and easy."
      contentClassName="w-full max-w-sm md:max-w-md"
    >
      <form className="space-y-3">
        <div className="fullname space-y-3 md:flex md:gap-4 md:space-y-0">
          <div className="form-input md:w-1/2">
            <input
              className=" w-full rounded-md border  border-gray-300 bg-gray-100 px-3 py-2 text-base placeholder-gray-500 focus:border-blue-700 focus:placeholder-gray-400 focus:caret-blue-700 focus:shadow-sm focus:outline-none"
              type="text"
              name="firstname"
              id="firstname"
              placeholder="First Name"
            />
          </div>

          <div className="form-input md:w-1/2">
            <input
              className="t w-full rounded-md  border border-gray-300 bg-gray-100 px-3 py-2 text-base placeholder-gray-500 focus:border-blue-700 focus:placeholder-gray-400 focus:caret-blue-700 focus:shadow-sm focus:outline-none"
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Last Name"
            />
          </div>
        </div>

        <div className="form-input">
          <input
            className="t w-full rounded-md  border border-gray-300 bg-gray-100 px-3 py-2 text-base placeholder-gray-500 focus:border-blue-700 focus:placeholder-gray-400 focus:caret-blue-700 focus:shadow-sm focus:outline-none"
            type="text"
            name="username"
            id="sign-username"
            placeholder="Email or phone number"
          />
        </div>

        <div className="form-input">
          <input
            className="t w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-base placeholder-gray-500 focus:border-blue-500 focus:placeholder-gray-400 focus:caret-blue-700 focus:shadow-sm focus:outline-none"
            type="password"
            name="password"
            id="sign-password"
            placeholder="New Password"
          />
        </div>

        <div className="form-input">
          <label className="text-sm/[20px] text-[#606770]">Birthday</label>
          <div className="mt-2 flex gap-2">
            <Select
              name="month"
              id="month"
              title="Birthday Month"
              className="flex-auto"
              defaultValue={currentMonth}
              data={month}
            />

            <Select
              name="month"
              id="date"
              title="Birthday Month"
              className="flex-auto"
              defaultValue={currentDate}
              data={dateArray}
            />

            <Select
              name="year"
              id="year"
              title="Birthday Month"
              className="flex-auto"
              defaultValue={currentYear}
              data={yearArray}
            />
          </div>
        </div>

        <div className="form-input">
          <label className="text-sm/[20px] text-[#606770]">Gender</label>
          <div className="mt-2 flex gap-2">
            <Checkbox
              className="flex-auto flex-shrink-0"
              label="female"
              name="sex"
              value={1}
            />
            <Checkbox
              className="flex-auto flex-shrink-0"
              label="male"
              name="sex"
              value={2}
            />
            <Checkbox
              className="flex-auto flex-shrink-0"
              label="custom"
              name="sex"
              value={-1}
            />
          </div>
        </div>

        <div className="form-input mt-4">
          <Select
            name="pronoun"
            id="pronoun"
            title="Select your pronoun"
            object={pronoun}
          />
          <p className="mt-2 text-xs text-stone-500">
            Your pronoun is visible to everyone.
          </p>
        </div>

        <p className="text-xs text-stone-500">
          People who use our service may have uploaded your contact information
          to Facebook. &nbsp;
          <Link
            className="text-blue-900 hover:underline"
            to="/help"
            target="_blank"
            rel="nofollow"
          >
            Learn more
          </Link>
          .
        </p>

        <p className="text-xs text-stone-500">
          By clicking Sign Up, you agree to our{" "}
          <Link
            className="text-blue-900 hover:underline"
            to="/legal/terms/update"
            id="terms-link"
            target="_blank"
            rel="nofollow"
          >
            Terms
          </Link>
          ,&nbsp;
          <Link
            className="text-blue-900 hover:underline"
            to="/about/privacy/"
            target="_blank"
            rel="nofollow"
          >
            Privacy Policy
          </Link>
          &nbsp; and &nbsp;
          <Link
            className="text-blue-900 hover:underline"
            to="/policies/cookies/"
            target="_blank"
            rel="nofollow"
          >
            Cookies Policy
          </Link>
          . You may receive SMS Notifications from us and can opt out any time.
        </p>

        <div className="my-6 flex justify-center">
          <button
            type="submit"
            className="btn w-fit bg-[#00a400] px-12 py-2 text-lg font-bold text-white transition duration-500 ease-in-out hover:bg-[#36a420]"
          >
            Sign Up
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default SignUpModal;
