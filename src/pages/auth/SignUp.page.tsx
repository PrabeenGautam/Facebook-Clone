import Checkbox from "../../components/input/Checkbox";
import Modal from "../../components/modal/Modal";

function SignUpModal() {
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
              className=" w-full rounded-md border  border-gray-300 px-3 py-2 text-base placeholder-gray-600 focus:border-blue-700 focus:placeholder-gray-400 focus:caret-blue-700 focus:shadow-sm focus:outline-none"
              type="text"
              name="username"
              id="username"
              placeholder="Email or phone number"
            />
          </div>

          <div className="form-input md:w-1/2">
            <input
              className="t w-full rounded-md  border border-gray-300 px-3 py-2 text-base placeholder-gray-600 focus:border-blue-700 focus:placeholder-gray-400 focus:caret-blue-700 focus:shadow-sm focus:outline-none"
              type="text"
              name="username"
              id="username"
              placeholder="Email or phone number"
            />
          </div>
        </div>

        <div className="form-input">
          <input
            className="t w-full rounded-md  border border-gray-300 px-3 py-2 text-base placeholder-gray-600 focus:border-blue-700 focus:placeholder-gray-400 focus:caret-blue-700 focus:shadow-sm focus:outline-none"
            type="text"
            name="username"
            id="username"
            placeholder="Email or phone number"
          />
        </div>

        <div className="form-input">
          <input
            className="t w-full rounded-md border border-gray-300 px-3 py-2 text-base placeholder-gray-700 focus:border-blue-500 focus:placeholder-gray-400 focus:caret-blue-700 focus:shadow-sm focus:outline-none"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
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
      </form>
    </Modal>
  );
}

export default SignUpModal;
