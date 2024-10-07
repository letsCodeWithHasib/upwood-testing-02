import { activeProjects } from "../../../assets/data";
import { useParams, Link } from "react-router-dom";
import Popup from "./ActivePopup";
import { useState } from "react";

/**
 * ViewProjectDetail Component
 * Displays detailed information about a specific project related to forest plantations.
 *
 * @returns {JSX.Element} - The rendered project item.
 */
const ViewProjectDetail = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const { id } = useParams();

  const openPopup = (item) => {
    setIsOpen(true);
    setSelectedProject(item);
  };

  const closePopup = () => {
    setIsOpen(false);
    setSelectedProject(null);
  };

  const {
    heading,
    title,
    description,
    roi,
    carbonCredits,
    image,
    area,
    reserved,
  } = activeProjects[id];

  return (
    <div className="shadow-custom rounded-xl mx-5 sm:mx-10 lg:mt-[100px] mb-7">
      {isOpen && (
        <Popup closePopup={closePopup} selectedProject={selectedProject} />
      )}
      {/* Container for the project item */}
      <div className="w-full bg-gray-50 p-0 m-0">
        {/* Image container with full width and no padding or margins */}
        <img
          className="rounded-t-lg w-full h-auto object-cover block"
          src={image}
          alt="Project Illustration"
        />
      </div>
      <p className="bg-[#EBEBEB] text-xs uppercase text-center font-bold text-[#6B6B6B]">
        {heading} {/* Label for the project type */}
      </p>
      <div className="p-5 sm:p-10">
        {/* Main content area */}
        <h3 className="text-[#333333] font-bold text-2xl sm:text-3xl font-lexend">
          {title} {/* Project title */}
        </h3>
        <p className="text-[#333333] text-[16px] sm:text-[18px] font-[Roboto] pt-2">
          {description}
          {/* Project description */}
        </p>

        {/* Responsive stats container */}
        <div className="flex flex-col sm:flex-row gap-5 mt-5 items-start sm:items-center">
          <p className="text-[#6B6B6B]">
            Area:
            <span className="text-[#333333] text-2xl font-semibold ml-1">
              {area}
              {area === "TBA" ? "" : " ha"}
            </span>
          </p>
          <p className="text-[#6B6B6B]">
            ROI:
            <span className="text-[#333333] text-2xl font-semibold ml-1">
              {roi}
              {roi === "TBA" ? "" : "%"}
            </span>
          </p>
          <p className="text-[#6B6B6B]">
            Carbon Credits:
            <span className="text-[#333333] text-2xl font-semibold ml-1">
              {carbonCredits}
            </span>
          </p>
          <p className="text-[#6B6B6B]">
            Shares Reserved:
            <span className="text-[#333333] text-2xl font-semibold ml-1">
              {reserved}
            </span>
          </p>
        </div>

        {/* Responsive button container */}
        <div className="flex flex-col sm:flex-row gap-3 mt-5 justify-start">
          <button className="py-2 sm:py-3 text-[14px] sm:text-[15px] font-bold rounded-lg text-[#0FB404] uppercase flex-1">
            Offering documentation
          </button>
          <button className="py-2 sm:py-3 text-[14px] sm:text-[15px] font-bold rounded-lg text-[#0FB404] uppercase flex-1">
            Financial projections
          </button>
          <button className="py-2 sm:py-3 text-[14px] sm:text-[15px] font-bold rounded-lg text-[#0FB404] uppercase flex-1">
            Property media
          </button>
          <button className="py-2 sm:py-3 text-[14px] sm:text-[15px] font-bold rounded-lg text-[#0FB404] uppercase flex-1">
            Geospatial data
          </button>
        </div>

        <div className="mt-5">
          <h3 className="font-lexend font-bold text-[20px]">Property media</h3>
          <p className="text-[#333333] font-[Roboto] text-[16px] mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-7 mt-5">
          <div className="h-[144px] bg-gray-200 rounded-sm"></div>
          <div className="h-[144px] bg-gray-200 rounded-sm"></div>
          <div className="h-[144px] bg-gray-200 rounded-sm"></div>
          <div className="h-[144px] bg-gray-200 rounded-sm"></div>
        </div>

        <div className="mt-5 flex flex-col gap-5 sm:flex-row justify-between">
          <Link
            to="/user"
            className="uppercase text-[#6B6B6B] text-sm font-bold font-[Roboto]"
          >
            Back to projects
          </Link>
          <button
            onClick={() => {
              openPopup(activeProjects[id]);
            }}
            className="uppercase p-2 rounded-lg text-sm text-[white] bg-[#0FB404] font-bold font-[Roboto]"
          >
            Invest
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewProjectDetail; // Exporting the component for use in other parts of the application
