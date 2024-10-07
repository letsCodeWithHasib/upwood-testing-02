import React from "react"; // Importing React library
import lock from "../../assets/lock.png"; // Importing check icon for confirmation
import logo from "../../assets/logo.png"; // Importing logo for branding
import { Link } from "react-router-dom"; // Importing Link for navigation

const Verify = () => {
  return (
    <div>
      {/* Main container for the notification with fixed width and flex layout */}
      <div className="md:w-[450px] w-[350px] flex flex-col items-center">
        {/* Logo displayed at the top of the notification */}
        <img className="w-[200px]" src={logo} alt="Logo" />

        {/* Notification section with headings and check icon */}
        <section className="w-full flex items-center flex-col gap-5 mt-7 border-t-[1px] border-[#999999]">
          {/* Success icon indicating the invitation has been sent */}
          <img className="mt-5" src={lock} alt="Check icon" />

          {/* Confirmation message for the invitation request */}
          <h2 className="mt-5 font-bold text-2xl text-center text-[#333333] font-[Lexend Deca]">
            Let's verify your identity
          </h2>

          {/* Instruction for the user to check their email */}
          <h2 className="mt-5 font-bold text-[16px] text-center font-[Roboto]">
            To finish your registration you need to create a digital wallet and
            verify your identity in few simple steps.
          </h2>

          <p className="text-center  text-[16px] font-[Roboto] text-[#333333]">
            Concordium wallet extension will be downloaded to your device or
            browser
          </p>

          <p className="text-center  text-[16px] font-[Roboto] text-[#333333]">
            Follow the steps in the app or browser extension to secure your
            wallet and verify your indentity
          </p>
          <p className="text-center  text-[16px] font-[Roboto] text-[#333333]">
            Once you’re done you will be logged in Upwood platform
          </p>

          {/* Link to navigate back to the login page */}
          <Link
            className="text-[#0FB404] uppercase mt-2 text-center text-[14px] font-[Roboto] font-semibold"
            to="/" // Adjusted path to root for navigation
          >
            I unsertand, let's continue
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Verify;
