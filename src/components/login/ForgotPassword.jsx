import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const navigate = useNavigate();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setEmailSent(true);
  };
  return (
    <div>
      <div>
        <div className="w-[300px] lg:w-[450px] font-[Lexend Deca] flex flex-col items-center">
          {/* Logo at the top of the login form */}
          <img className="md:w-[200px] w-[150px]" src={logo} alt="Logo" />

          {/* User login form section */}
          <section className="w-full mt-7 border-t-[1px]  border-[#999999]">
            <h2 className="text-[20px] font-[Lexend Deca] font-bold mt-7">
              Forgot password
            </h2>
            <form
              onSubmit={onSubmitHandler}
              className="flex flex-col gap-7 mt-7"
            >
              {/* Email input field */}
              <label>
                <input
                  className="shadow-sm py-2 px-3 border-[1px] border-[#000] focus:outline-[#0FB404] focus:outline-[2px] rounded w-full"
                  type="email"
                  placeholder="Email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              {/* Button for login and link for forgotten details */}
              <div className="flex items-end">
                <button className="bg-[#0FB404] font-[Roboto] font-bold text-sm rounded-lg p-2 px-5 text-white">
                  Confirm
                </button>
              </div>
            </form>
          </section>

          {/* Invitation request section */}
          <section className="w-full mt-5">
            {emailSent ? (
              <p className="text-[16px]">Email has been sent</p>
            ) : (
              <p className="text-[16px]">
                If your email is recognized in the system, you will receive
                further instructions to reset your password via email. If you
                don’t see an email from Upwood, please check your spam folder.
                If you haven’t received an email or have forgotten your email
                address, please contact Upwood support.
              </p>
            )}
            <div className="mt-5 flex flex-col gap-5">
              <button className="text-[#0FB404] text-[15px] font-[Roboto] rounded-lg p-2 px-5 border-[1px] border-[#0FB404] text-center w-[200px]">
                Contact Support
              </button>
              <Link
                className="text-[#6B6B6B] text-sm font-bold font-[Roboto]"
                to="/auth"
              >
                BACK TO LOGIN
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
