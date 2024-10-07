import { Link, useNavigate } from "react-router-dom"; // Link component for navigation
import logo from "../../assets/logo.png"; // Importing the company logo
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../../redux/features/authSlice";

const Register = () => {
  const [formData, setFormData] = useState({
    givenName: "",
    familyName: "",
    email: "",
    password: "",
    confirmPassword: "",
    desiredAmount: "",
  });

  function isValidEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [registrationFailed, setRegistrationFailed] = useState(false);

  const onChangeHandler = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault(); // Prevent default form submission

    const { email, password, confirmPassword, givenName, familyName } =
      formData;

    if (!isValidEmail(email)) {
      setError("Invalid email format."); // Set error message
      return;
    }

    // Check if the passwords match
    if (password === confirmPassword) {
      try {
        // Dispatch the signUp action
        const user = await dispatch(
          signUp({ email, password, givenName, familyName })
        );

        // Optionally reset the form or show a success message here
        console.log("Registration successful", user);
      } catch (error) {
        // Handle any errors that occur during sign-up
        console.error("Registration failed:", error);
        setRegistrationFailed(true); // Set the flag to indicate registration failure
      }
    } else {
      // If passwords don't match, set the registration failed state
      setRegistrationFailed(true);
      console.error("Passwords do not match");
    }
  };

  return (
    <div className="flex justify-center min-h-screen">
      {/* Container for the registration form */}
      <div className="md:w-[450px] w-[300px] font-[Lexend Deca] flex flex-col items-center">
        {/* Displaying the logo at the top of the form */}
        <img className="md:w-[200px] w-[150px]" src={logo} alt="Logo" />

        {/* Section for user registration form */}
        <section className="w-full mt-7 border-t-[1px] border-[#999999]">
          {/* Registration heading */}
          <h2 className="text-[20px] font-bold mt-7">User Registration</h2>

          {/* Registration form */}
          <form onSubmit={onSubmitHandler} className="flex flex-col gap-5 mt-5">
            {/* for name */}
            <div className="flex gap-5">
              <fieldset className="w-full">
                <input
                  className="shadow-sm py-2 px-3 border-[1px] border-[#000] focus:outline-[#0FB404] focus:outline-[2px] rounded w-full"
                  type="text"
                  id="givenName"
                  name="givenName"
                  placeholder="First Name"
                  value={formData.givenName}
                  onChange={onChangeHandler}
                />
              </fieldset>
              <fieldset className="w-full">
                <input
                  className="shadow-sm py-2 px-3 border-[1px] border-[#000] focus:outline-[#0FB404] focus:outline-[2px] rounded w-full"
                  type="text"
                  id="familyName"
                  name="familyName"
                  placeholder="Last Name"
                  value={formData.familyName}
                  onChange={onChangeHandler}
                />
              </fieldset>
            </div>
            {/* Input field for email */}
            <fieldset>
              <input
                className="shadow-sm py-2 px-3 border-[1px] border-[#000] focus:outline-[#0FB404] focus:outline-[2px] rounded w-full"
                type="email"
                placeholder="Enter your email"
                required
                onChange={onChangeHandler}
                name="email"
                value={formData.email}
              />
            </fieldset>

            {/* Input field for password */}
            <fieldset>
              <input
                className="shadow-sm py-2 px-3 border-[1px] border-[#000] focus:outline-[#0FB404] focus:outline-[2px] rounded w-full"
                type="password"
                placeholder="Enter your password"
                required
                onChange={onChangeHandler}
                name="password"
                value={formData.password}
              />
            </fieldset>

            {/* Input field to confirm password */}
            <fieldset>
              <input
                className="shadow-sm py-2 px-3 border-[1px] border-[#000] focus:outline-[#0FB404] focus:outline-[2px] rounded w-full"
                type="password"
                placeholder="Confirm password"
                required
                onChange={onChangeHandler}
                name="confirmPassword"
                value={formData.confirmPassword}
              />
            </fieldset>

            {/* Input field for investment amount */}
            <label>
              <p className="text-xs font-[Roboto] font-bold text-[#333333]">
                Desired investment amount $
              </p>
              <input
                className="shadow-sm py-2 px-3 border-[1px] border-[#000] focus:outline-[#0FB404] focus:outline-[2px] rounded w-full"
                type="number"
                placeholder="Enter amount $"
                required
                name="desiredAmount"
                onChange={onChangeHandler}
                value={formData.desiredAmount}
              />
            </label>

            {/* Checkbox for accepting terms and conditions */}
            <fieldset className="flex items-center gap-2 mt-5">
              <input type="checkbox" required />
              <span className="font-[Roboto] text-[#6B6B6B] text-[14px]">
                I accept Terms & conditions...
              </span>
            </fieldset>

            {registrationFailed && (
              <p className="text-[#ff0000] font-xs font-[Roboto]">
                Password and confirm password should be same
              </p>
            )}

            {/* Submit button to continue with wallet creation */}
            <fieldset>
              <button
                type="submit"
                className="text-[#0FB404] uppercase font-[Roboto] text-sm font-bold"
              >
                Continue with digital wallet creation
              </button>
            </fieldset>

            {/* Divider with "OR" for alternate wallet connection */}
            <div className="h-[1px] bg-[#999999] relative w-1/2">
              <p className="absolute top-[-10px] left-[45%] bg-white px-2">
                OR
              </p>
            </div>

            {/* Button for users who already have a Concordium wallet */}
            <label>
              <button
                type="button"
                className="text-[#0FB404] uppercase font-[Roboto] text-sm font-bold"
              >
                Connect if you have Concordium wallet
              </button>
            </label>
          </form>
          <Link to="/auth/activate">Activate Account</Link>
        </section>
      </div>
    </div>
  );
};

export default Register;
