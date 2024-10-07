import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { signIn } from "../../redux/features/authSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loginFailed, setLoginFailed] = useState(false);

  const onChangeHandler = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    if (loginFailed) setLoginFailed(false); // Reset the error state on input change
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    // Replace this with an actual API call later
    if (
      formData.email === "mohdhasib2001@gmail.com" &&
      formData.password === "12345"
    ) {
      dispatch(login(formData));
      // Optionally, navigate to a different page on successful login
    } else {
      setLoginFailed(true);
    }

    setFormData({
      email: "",
      password: "",
    });
  };

  const onRequestHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="">
      <div className="lg:w-[450px] w-[300px] font-[Lexend Deca] flex flex-col items-center">
        {/* Logo at the top of the login form */}
        <img className="w-[150px] lg:w-[200px]" src={logo} alt="Logo" />

        {/* User login form section */}
        <section className="w-full mt-7 border-y-[1px] border-[#999999]">
          <h2 className="text-2xl font-[Lexend Deca] font-bold mt-7">
            User login
          </h2>
          <form onSubmit={onSubmitHandler} className="flex flex-col gap-3 mt-7">
            {/* Email input field */}
            <label>
              <input
                className={`shadow-sm py-2 px-3 border-[1px] ${
                  loginFailed ? "border-[#ff0000]" : "border-black"
                } focus:outline-[#0FB404] focus:outline-[2px] rounded w-full`}
                type="email"
                placeholder="Email"
                required
                value={formData.email}
                name="email"
                onChange={onChangeHandler}
              />
            </label>
            {/* Password input field */}
            <label>
              <input
                className={`shadow-sm py-2 px-3 border-[1px] ${
                  loginFailed ? "border-[#ff0000]" : "border-black"
                } focus:outline-[#0FB404] focus:outline-[2px] rounded w-full`}
                type="password"
                placeholder="Password"
                required
                value={formData.password}
                name="password"
                onChange={onChangeHandler}
              />
            </label>
            {loginFailed && (
              <p className="text-[#ff0000] text-[14px]">
                Login details are not recognized!
              </p>
            )}

            {/* Button for login and link for forgotten details */}
            <div className="flex items-center my-5">
              <button className="bg-[#0FB404] cursor-pointer font-[Roboto] font-bold text-sm rounded-lg p-2 px-5 text-white">
                Login
              </button>
              <Link
                className="text-[15px] text-[#6B6B6B] ml-3 font-semibold font-[Roboto]"
                to="forgot-password"
              >
                Forgot your login details?
              </Link>
            </div>
          </form>
        </section>

        {/* Invitation request section */}
        <section className="w-full mt-5">
          <h2 className="text-lg font-[Lexend Deca] font-bold">
            Not a user? Request Invitation
          </h2>
          <form className="mt-5">
            {/* Input for entering email to request an invitation */}
            <label>
              <input
                className="shadow-sm py-1 px-3 border-[1px] border-[#000] focus:outline-[#0FB404] focus:outline-[2px] rounded w-full"
                type="email"
                placeholder="Enter your email"
                required
              />
            </label>

            {/* Checkbox for agreeing to marketing communications */}
            <label className="flex items-start gap-3 mt-5">
              <input type="checkbox" className="text-[20px]" required />
              <p className="font-[Roboto] text-[16px] text-sm flex-1">
                By entering your email you agree to receive marketing
                communications from SIA Upwood. You can unsubscribe at any time.
                For more information, please see our{" "}
                <span className="text-[#0FB404] text-[16px]">
                  Privacy Policy
                </span>
              </p>
            </label>

            {/* Button to submit the invitation request */}
            <button
              onClick={onRequestHandler}
              className="bg-[#0FB404] cursor-pointer text-sm font-[Roboto] font-bold rounded-lg p-2 px-5 text-white mt-5"
            >
              Request Invitation
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Login;
