import { Link } from "react-router-dom";
import notifyImage from "../../../assets/notify.png";
import greenTick from "../../../assets/check-green.png";
import NotifyPopup from "./NotifyPopup";
import { useState } from "react";

/**
 * FundedProject Component
 * Displays information about a specific project related to forest plantations.
 *
 * @param {Object} item - The project item details. Currently not used but can be utilized for dynamic content.
 * @returns {JSX.Element} - The rendered project item.
 */
const FundedProject = ({ item, index }) => {
  const { heading, title, description, roi, carbonCredits, image, area, id } =
    item;

  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [notified, setNotified] = useState(false);
  const [notifiedProjects, setNotifiedProjects] = useState([]);
  const openPopup = (item) => {
    setIsOpen(true);
    setSelectedProject(item);
  };

  const closePopup = (item) => {
    setIsOpen(false);
    setSelectedProject(null);
  };

  const isNotified = notifiedProjects.includes(index);

  return (
    <div className="shadow-lg rounded-xl overflow-hidden">
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
      <div className="w-full h-[200px] md:h-[250px] bg-gray-50 flex justify-center p-0 m-0">
        {/* Image container with no padding or margin */}
        <img
          className="w-full h-full object-cover block"
          src={image}
          alt="Project Illustration"
        />
      </div>
      <p className="bg-[#EBEBEB] text-xs uppercase text-center font-bold text-[#6B6B6B]">
        {heading} {/* Label for the project type */}
      </p>
      <div className="p-4 md:p-5">
        {/* Main content area */}
        <h3 className="text-[#333333] font-bold text-[18px] md:text-[20px] font-lexend">
          {title} {/* Project title */}
        </h3>
        <p className="text-[#333333] text-[14px] md:text-[16px] pt-2">
          {description}
          {/* Project description */}
        </p>
        <div className="flex flex-col md:flex-row gap-3 items-start mt-2">
          {/* Stats container */}
          <p className="text-[#6B6B6B] flex items-center gap-2">
            Area:
            <span className="text-[#333333] text-lg font-semibold">
              {area}
              {area === "TBA" ? "" : " ha"}
            </span>
          </p>
          <p className="text-[#6B6B6B] flex items-center gap-2">
            ROI:
            <span className="text-[#333333] text-lg font-semibold">
              {roi}
              {roi === "TBA" ? "" : " %"}
            </span>
          </p>
          <p className="text-[#6B6B6B] flex items-center gap-2">
            Carbon Credit:
            <span className="text-[#333333] text-lg font-semibold">
              {carbonCredits}
            </span>
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-5 mt-4">
          {/* Action buttons container */}
          <button
            onClick={() => openPopup(item)}
            className="text-[15px] font-bold text-sm text-[#0FB404] flex gap-2 items-center"
          >
            <img
              src={isNotified ? greenTick : notifyImage}
              alt="Notify Icon"
              className="w-4 h-4"
            />{" "}
            Notify
          </button>
          <Link to={`${id}`}>
            <button className="text-[15px] font-bold text-sm text-[#0FB404]">
              View details {/* Button to view project details */}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FundedProject; // Exporting the component for use in other parts of the application
