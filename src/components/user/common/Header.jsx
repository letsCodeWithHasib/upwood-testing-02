import { useEffect, useRef, useState } from "react";
import profile from "../../../assets/profile.png";
import logo from "../../../assets/logo.png";
import logoutImage from "../../../assets/logout.png";
import menu from "../../../assets/menu-right.png";
import close from "../../../assets/close.png";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../../../redux/features/authSlice";

const Header = ({ showSideBar, setShowSideBar }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  // Handle profile image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  // Cleanup the object URL on component unmount
  useEffect(() => {
    return () => {
      if (selectedImage) {
        URL.revokeObjectURL(selectedImage);
      }
    };
  }, [selectedImage]);

  // Handle scroll events to show/hide the header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        setIsVisible(false); // Hide header when scrolling down
      } else {
        setIsVisible(true); // Show header when scrolling up
      }
      lastScrollY.current = window.scrollY;
    };

    const throttledScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", throttledScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", throttledScroll);
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
        <button
          className="items-center gap-5 hidden md:flex"
          aria-label="Profile"
        >
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
            {user.firstName} {user.lastName}
          </span>
        </button>

        <button
          className="flex items-center gap-2"
          onClick={() => dispatch(signOut())}
          aria-label="Logout"
        >
          <span className="font-[Roboto] text-xs font-bold uppercase text-[#6B6B6B] -ml-3">
            Logout
          </span>
          <img
            className="w-[20px] h-[20px]"
            src={logoutImage}
            alt="Logout Icon"
          />
        </button>
      </section>

      {/* Sidebar toggle button for mobile view */}
      <div className="md:hidden">
        <button
          onClick={() => setShowSideBar(!showSideBar)}
          className="p-2 w-[40px] rounded-full bg-green-300"
          aria-label="Toggle Sidebar"
        >
          <img
            className="w-6"
            src={showSideBar ? close : menu}
            alt="Sidebar Toggle"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
