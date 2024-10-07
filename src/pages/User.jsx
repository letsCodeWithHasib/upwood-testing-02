import { Outlet } from "react-router-dom"; // Importing Outlet for nested routes
import Header from "../components/user/common/Header"; // Importing the Header component
import Sidebar from "../components/user/common/Sidebar"; // Importing the Sidebar component
import { useEffect, useState } from "react";

const User = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <div>
      {/* Render the Header component for user navigation */}
      <Header showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      {/* Main content area with Sidebar and Outlet for nested routes */}
      <div className="mt-[80px]">
        {/* Margin to ensure content is below the header */}
        <Sidebar
          showSideBar={showSideBar}
          setShowSideBar={setShowSideBar}
        />{" "}
        {/* Render the Sidebar for navigation links */}
        {/* Outlet to render child routes, positioned beside the Sidebar */}
      </div>
      <div className="md:ml-[350px] pt-10 md:pt-0">
        {/* Margin to align content next to Sidebar */}
        <Outlet /> {/* Renders the matching child route component */}
      </div>
    </div>
  );
};

export default User;
