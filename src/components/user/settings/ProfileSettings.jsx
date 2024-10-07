import { Link } from "react-router-dom";
import profile from "../../../assets/profile.png";
import QueryBox from "../common/QueryBox";

const ProfileSettings = () => {
  return (
    <div className="mt-5 p-5 sm:p-7 shadow-2xl rounded-2xl">
      <div className="flex flex-col sm:flex-row justify-evenly">
        {/* Profile Settings Section */}
        <div className="flex flex-col items-center w-full sm:w-[300px] mb-5 sm:mb-0">
          <h3 className="font-lexend font-bold text-lg text-center">
            Profile Settings
          </h3>
          <img className="rounded-full mb-4" src={profile} alt="Profile" />

          <button className="text-[#0FB404] text-[16px] font-bold font-[Roboto]">
            Change Profile Picture
          </button>

          <div className="gap-2 mt-5 flex flex-col items-center">
            <button className="font-[Roboto] font-bold text-[16px]">
              John Carter
            </button>
            <button className="font-[Roboto] font-bold text-[16px]">
              John@gmail.com
            </button>
          </div>
          <div className="flex flex-col items-center mt-10 gap-2">
            <Link className="text-[#0FB404] text-[16px] font-bold font-[Roboto]">
              Change Email Address
            </Link>
            <Link className="text-[#0FB404] text-[16px] font-bold font-[Roboto]">
              Change Profile Password
            </Link>
            <Link className="text-[#0FB404] text-[16px] font-bold font-[Roboto]">
              Account Security with 2FA
            </Link>
          </div>
        </div>

        {/* Legal Entity Section */}
        <div className="flex flex-col items-center w-full sm:w-[300px]">
          <h3 className="font-lexend font-bold text-lg text-center">
            Legal Entity
          </h3>
          <img className="rounded-full mb-4" src={profile} alt="Legal Entity" />
          <Link>
            <button className="text-[#0FB404] text-[16px] font-bold font-[Roboto]">
              Change Company Logo
            </button>
          </Link>
          <div className="gap-2 mt-5 flex flex-col items-center">
            <button className="font-[Roboto] font-bold text-[16px]">
              SIA Upwood
            </button>
            <button className="font-[Roboto] font-bold text-[16px]">
              Reg. no. 12345678
            </button>
          </div>
          <div className="flex flex-col items-center mt-10 gap-2">
            <Link className="text-[#0FB404] text-[16px] font-bold font-[Roboto]">
              Change Email Address
            </Link>
            <Link className="text-[#0FB404] text-[16px] font-bold font-[Roboto]">
              Add Another Entity Member
            </Link>
            <Link className="text-[#0FB404] text-[16px] font-bold font-[Roboto]">
              Download Account Settings
            </Link>
          </div>
        </div>
      </div>

      {/* Query Boxes Section */}
      <div className="mt-10 flex flex-col sm:flex-row gap-7 justify-center">
        <QueryBox
          boxData={{
            heading: "Account",
            query: "How to add legal entity to account?",
          }}
        />
        <QueryBox
          boxData={{
            heading: "Wallet",
            query: "How to add legal entity wallet?",
          }}
        />
        <QueryBox
          boxData={{
            heading: "Investments",
            query: "How to invest as legal entity?",
          }}
        />
      </div>
    </div>
  );
};

export default ProfileSettings; // Exporting the component for use in other parts of the application
