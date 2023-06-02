import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { month, pronoun } from "@/assets/data/static.data";
import Checkbox from "@/components/inputs/Checkbox";
import Input from "@/components/inputs/Input";
import Select from "@/components/inputs/Select";
import Modal from "@/components/modal/Modal";
import { SignUpForm } from "@/types/forms/forms.types";
import generateValue from "@/utils/generateValue";

type SignUpProps = {
  onClose: () => void;
};

function SignUpModal({ onClose }: SignUpProps) {
  const date = new Date();
  const currentMonth = date.getMonth() + 1;
  const currentDate = date.getDate();
  const currentYear = date.getFullYear();

  const customRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState<SignUpForm>({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    month: currentMonth,
    date: currentDate,
    year: currentYear,
    gender: "",
    pronoun: "",
  });

  const [showPronoun, setShowPronoun] = useState(false);

  const dateArray = generateValue(1, 31);
  const yearArray = generateValue(1905, currentYear).reverse();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    if (e.target.id === "custom") {
      setShowPronoun(e.target.checked);
    }

    if (e.target.id === "female" || e.target.id === "male") {
      setShowPronoun(false);
      setFormData((prev) => ({ ...prev, pronoun: "" }));
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((prev) => ({ ...prev, [name]: Number.parseInt(value) }));
  };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <Modal
      heading="Sign Up"
      subheading="It's quick and easy."
      contentClassName="w-full max-w-sm md:max-w-md"
      onClose={onClose}
    >
      <form className="space-y-3" onSubmit={handleSubmit}>
        <div className="fullname space-y-3 md:flex md:gap-4 md:space-y-0">
          <Input
            className="md:w-1/2"
            name="firstname"
            id="firstname"
            placeholder="First Name"
            inputClassName="px-3 py-2"
            onChange={handleInputChange}
          />

          <Input
            className="md:w-1/2"
            name="lastname"
            id="lastname"
            placeholder="Last Name"
            inputClassName="px-3 py-2"
            onChange={handleInputChange}
          />
        </div>

        <Input
          name="username"
          id="sign-username"
          placeholder="Email or phone number"
          inputClassName="px-3 py-2"
          onChange={handleInputChange}
        />

        <Input
          type="password"
          name="password"
          id="sign-password"
          placeholder="New Password"
          inputClassName="px-3 py-2"
          onChange={handleInputChange}
        />

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
              onChange={handleSelectChange}
            />

            <Select
              name="month"
              id="date"
              title="Birthday Month"
              className="flex-auto"
              defaultValue={currentDate}
              data={dateArray}
              onChange={handleSelectChange}
            />

            <Select
              name="year"
              id="year"
              title="Birthday Month"
              className="flex-auto"
              defaultValue={currentYear}
              data={yearArray}
              onChange={handleSelectChange}
            />
          </div>
        </div>

        <div className="form-input">
          <label className="text-sm/[20px] text-[#606770]">Gender</label>
          <div className="mt-2 flex gap-2">
            <Checkbox
              className="flex-auto flex-shrink-0"
              label="female"
              name="gender"
              id="female"
              value={1}
              onChange={handleInputChange}
            />
            <Checkbox
              className="flex-auto flex-shrink-0"
              label="male"
              name="gender"
              id="male"
              value={2}
              onChange={handleInputChange}
            />
            <Checkbox
              className="flex-auto flex-shrink-0"
              label="custom"
              name="gender"
              id="custom"
              onChange={handleInputChange}
              ref={customRef}
              value={-1}
            />
          </div>
        </div>

        {showPronoun && (
          <div className="form-input mt-4">
            <Select
              name="pronoun"
              id="pronoun"
              title="Select your pronoun"
              onChange={handleSelectChange}
              firstOptionDisabled={true}
              object={pronoun}
              defaultValue={0}
            />
            <p className="mt-2 text-xs text-stone-500">
              Your pronoun is visible to everyone.
            </p>
          </div>
        )}

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

        <div className="!mt-6 flex justify-center">
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
