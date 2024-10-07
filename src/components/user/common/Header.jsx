import { useEffect, useRef } from "react";
import profile from "../../../assets/profile.png";
import logo from "../../../assets/logo.png";
import logoutImage from "../../../assets/logout.png";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../../../redux/features/authSlice";
import { useState } from "react";
import menu from "../../../assets/menu-right.png";
import close from "../../../assets/close.png";

const Header = ({ showSideBar, setShowSideBar }) => {
  const username = useSelector((state) => state.username);
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      return () => URL.revokeObjectURL(imageUrl);
    }
  };

  // Handle scroll events to show/hide the header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`flex z-10 bg-white justify-between items-center lg:px-10 px-5 fixed w-full top-0 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Logo section */}
      <section className="logo">
        <img className="w-[120px]" src={logo} alt="Company Logo" />
      </section>

      {/* User profile and logout button section */}
      <section className="gap-10 hidden md:flex">
        <button className="items-center gap-5 hidden md:flex">
          <label htmlFor="fileInput">
            <img
              className={`${
                selectedImage
                  ? "h-[30px] w-[30px] shadow-custom"
                  : "h-[50px] w-[50px]"
              } rounded-full cursor-pointer`}
              src={selectedImage || profile}
              alt="Profile"
            />
          </label>
          <input
            type="file"
            id="fileInput"
            className="hidden"
            accept="image/*"
            onChange={handleImageChange}
          />
          <span className="font-[Roboto] text-xs font-bold uppercase text-[#6B6B6B] -ml-3">
            {username}
          </span>
        </button>

        <button
          className="flex items-center gap-2"
          onClick={() => dispatch(signOut())}
        >
          <span className="font-[Roboto] text-xs font-bold uppercase text-[#6B6B6B] -ml-3">
            logout
          </span>
          <img
            className="w-[20px] h-[20px]"
            src={logoutImage}
            alt="Logout Icon"
          />
        </button>
      </section>

      <div className="md:hidden">
        <button
          onClick={() => setShowSideBar(!showSideBar)}
          className="p-2 w-[40px] rounded-full bg-green-300"
        >
          <img className="w-6" src={showSideBar ? close : menu} alt="" />
        </button>
      </div>
    </header>
  );
};

export default Header;
