import { fundedProjects } from "../../../assets/data";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import notifyImage from "../../../assets/notify.png";
import NotifyPopup from "./NotifyPopup";

/**
 * ProjectItem Component
 * Displays information about a specific project related to forest plantations.
 *
 * @param {Object} item - The project item details. Currently not used but can be utilized for dynamic content.
 * @returns {JSX.Element} - The rendered project item.
 */
const ViewProjectDetail = ({ item }) => {
  // beore
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openPopup = (item) => {
    setIsOpen(true);
    setSelectedProject(item);
  };

  const closePopup = () => {
    setIsOpen(false);
    setSelectedProject(null);
  };
  // after

  const { id } = useParams();
  const {
    heading,
    title,
    description,
    roi,
    carbonCredits,
    image,
    area,
    reserved,
  } = fundedProjects[id] || {}; // Added fallback to handle invalid IDs

  return (
    <div className="shadow-custom rounded-xl m-4 sm:m-6 lg:m-10 mt-[120px] mb-7">
      {/* Container for the project item */}
      {isOpen && (
        <NotifyPopup
          closePopup={closePopup}
          setNotified={setNotifiedProjects}
          notified={notified}
          selectedProject={selectedProject}
          setNotifiedProjects={setNotifiedProjects}
          notifiedProjects={notifiedProjects}
          index={index}
        />
      )}
      <div className="bg-gray-50 w-full">
        {/* Image container */}
        <img
          className="rounded-t-lg w-full h-auto object-cover" // Ensuring 100% width and maintaining aspect ratio
          src={image}
          alt="Project Illustration"
        />
      </div>
      <p className="bg-[#EBEBEB] text-xs uppercase text-center font-bold text-[#6B6B6B]">
        {heading} {/* Label for the project type */}
      </p>
      <div className="p-4 sm:p-5 lg:p-8">
        {/* Main content area */}
        <h3 className="text-[#333333] font-bold text-xl sm:text-2xl lg:text-3xl font-lexend">
          {title} {/* Project title */}
        </h3>
        <p className="text-[#333333] text-[14px] sm:text-[16px] lg:text-[18px] font-[Roboto] pt-2">
          {description} {/* Project description */}
        </p>
        <div className="flex flex-wrap gap-3 items-center mt-3">
          {/* Stats container */}
          <p className="text-[#6B6B6B] flex items-center gap-2">
            Area:
            <span className="text-[#333333] text-lg sm:text-2xl font-semibold">
              {area}
              {area === "TBA" ? "" : " ha"}
            </span>
          </p>
          <p className="text-[#6B6B6B]">
            ROI:
            <span className="text-[#333333] text-lg sm:text-2xl font-semibold">
              {roi}
              {roi === "TBA" ? "" : "%"}
            </span>
          </p>
          <p className="text-[#6B6B6B]">
            Carbon Credits:
            <span className="text-[#333333] text-lg sm:text-2xl font-semibold">
              {carbonCredits}
            </span>
          </p>
          <p className="text-[#6B6B6B]">
            Shares Reserved:
            <span className="text-[#333333] text-lg sm:text-2xl font-semibold">
              {reserved}
            </span>
          </p>
        </div>

        <div className="flex flex-wrap justify-between items-center gap-3 mt-5">
          {/* Notify and Back to Projects buttons */}
          <button
            onClick={openPopup}
            className="text-[13px] sm:text-[15px] gap-2 flex items-center font-bold rounded-lg text-[#0FB404] uppercase"
          >
            <img src={notifyImage} alt="notify icon" className="w-5 h-5" />{" "}
            Notify
          </button>
          <Link
            to="/user/funded-projects"
            className="text-[13px] sm:text-[15px] gap-2 flex items-center font-bold rounded-lg text-[#6B6B6B] uppercase"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewProjectDetail;
