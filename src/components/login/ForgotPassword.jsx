import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { sendCode, forgotPassword } from "../../libs/cognito"; // Adjust the import path as necessary

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [code, setCode] = useState(""); // State for the verification code
  const [newPassword, setNewPassword] = useState(""); // State for new password
  const [error, setError] = useState(""); // State for error messages
  const navigate = useNavigate();

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setError(""); // Reset any previous error

    try {
      await sendCode(email); // Send reset code to the user's email
      setEmailSent(true); // Update the state to indicate email has been sent
    } catch (error) {
      console.error("Error sending code:", error);
      setError(
        "Failed to send email. Please check your email address and try again."
      );
    }
  };

  const onResetPasswordHandler = async (event) => {
    event.preventDefault();
    setError(""); // Reset any previous error
    console.log(email, code, newPassword);

    try {
      await forgotPassword(email, code, newPassword); // Confirm the new password with the code
      alert(
        "Password reset successful! You can now log in with your new password."
      );
      navigate("/auth"); // Navigate to the login page after successful reset
    } catch (error) {
      console.error("Error resetting password:", error);
      setError("Failed to reset password. Please ensure the code is correct.");
    }
  };

  return (
    <div>
      <div>
        <div className="w-[300px] lg:w-[450px] font-[Lexend Deca] flex flex-col items-center">
          {/* Logo at the top of the login form */}
          <img className="md:w-[200px] w-[150px]" src={logo} alt="Logo" />

          {/* User forgot password section */}
          <section className="w-full mt-7 border-t-[1px] border-[#999999]">
            <h2 className="text-[20px] font-[Lexend Deca] font-bold mt-7">
              Forgot password
            </h2>

            {/* Form for sending reset code */}
            {!emailSent ? (
              <form
                onSubmit={onSubmitHandler}
                className="flex flex-col gap-7 mt-7"
              >
                <label>
                  <input
                    className="shadow-sm py-2 px-3 border-[1px] border-[#000] focus:outline-[#0FB404] focus:outline-[2px] rounded w-full"
                    type="email"
                    placeholder="Email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
                <div className="flex items-end">
                  <button className="bg-[#0FB404] font-[Roboto] font-bold text-sm rounded-lg p-2 px-5 text-white">
                    Confirm
                  </button>
                </div>
              </form>
            ) : (
              // Form for entering the verification code and new password
              <form
                onSubmit={onResetPasswordHandler}
                className="flex flex-col gap-7 mt-7"
              >
                <label>
                  <input
                    className="shadow-sm py-2 px-3 border-[1px] border-[#000] focus:outline-[#0FB404] focus:outline-[2px] rounded w-full"
                    type="text"
                    placeholder="Verification Code"
                    required
                    onChange={(e) => setCode(e.target.value)} // Capture the verification code
                  />
                </label>
                <label>
                  <input
                    className="shadow-sm py-2 px-3 border-[1px] border-[#000] focus:outline-[#0FB404] focus:outline-[2px] rounded w-full"
                    type="text"
                    placeholder="Verification Code"
                    required
                    onChange={(e) => setCode(e.target.value)} // Capture the new password
                  />
                </label>
                <label>
                  <input
                    className="shadow-sm py-2 px-3 border-[1px] border-[#000] focus:outline-[#0FB404] focus:outline-[2px] rounded w-full"
                    type="password"
                    placeholder="New Password"
                    required
                    onChange={(e) => setNewPassword(e.target.value)} // Capture the new password
                  />
                </label>
                <div className="flex items-end">
                  <button className="bg-[#0FB404] font-[Roboto] font-bold text-sm rounded-lg p-2 px-5 text-white">
                    Reset Password
                  </button>
                </div>
              </form>
            )}

            {/* Error message section */}
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </section>

          {/* Invitation request section */}
          <section className="w-full mt-5">
            {emailSent ? (
              <p className="text-[16px]">
                A reset code has been sent to your email. Please check your
                inbox.
              </p>
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
