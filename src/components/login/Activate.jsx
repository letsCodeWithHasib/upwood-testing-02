import { Link, useNavigate } from "react-router-dom"; // Link component for navigation
import logo from "../../assets/logo.png"; // Importing the company logo
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verifyCode } from "../../redux/features/authSlice";

const Activate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    code: "",
  });

  const authStatus = useSelector((state) => state.auth.authStatus);
  useEffect(() => {
    if (authStatus === "Verified") {
      navigate("/auth/verification");
    }
  }, [authStatus]);

  function isValidEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  }

  const [registrationFailed, setRegistrationFailed] = useState(false);

  const onChangeHandler = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault(); // Prevent default form submission

    const { email, code } = formData;

    if (!isValidEmail(email)) {
      setError("Invalid email format."); // Set error message
      return;
    }
    try {
      // Dispatch the signUp action
      const user = await dispatch(verifyCode({ email, code }));

      // Optionally reset the form or show a success message here
      console.log("Registration successful", user);
    } catch (error) {
      // Handle any errors that occur during sign-up
      console.error("Registration failed:", error);
      setRegistrationFailed(true); // Set the flag to indicate registration failure
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
          <h2 className="text-[20px] font-bold mt-7">User Validation</h2>

          {/* Registration form */}
          <form onSubmit={onSubmitHandler} className="flex flex-col gap-5 mt-5">
            {/* Input field for email */}

            <input
              className="shadow-sm py-2 px-3 border-[1px] border-[#000] focus:outline-[#0FB404] focus:outline-[2px] rounded w-full"
              type="email"
              placeholder="Registered Email"
              required
              onChange={onChangeHandler}
              name="email"
              value={formData.email}
            />
            <input
              className="shadow-sm py-2 px-3 border-[1px] border-[#000] focus:outline-[#0FB404] focus:outline-[2px] rounded w-full"
              type="text"
              placeholder="Validation Code"
              required
              onChange={onChangeHandler}
              name="code"
              value={formData.code}
            />
            <button className="font-[Roboto] rounded-md text-white font-bold py-2 text-sm bg-green-500">
              Verify
            </button>
          </form>
          <Link to="/auth/register">Go Back</Link>
        </section>
      </div>
    </div>
  );
};

export default Activate;
