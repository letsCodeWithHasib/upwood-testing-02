import { activeProjects } from "../../../assets/data";
import { useParams, Link } from "react-router-dom";

/**
 * ProjectItem Component
 * Displays information about a specific project related to forest plantations.
 *
 * @param {Object} item - The project item details. Currently not used but can be utilized for dynamic content.
 * @returns {JSX.Element} - The rendered project item.
 */
const ViewProjectDetail = ({ item }) => {
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
  } = activeProjects[id];

  return (
    <div className="shadow-custom rounded-xl mx-5 sm:mx-10 lg:mt-[120px] mb-7">
      {/* Container for the project item */}
      <div className="bg-gray-50">
        {/* Image container */}
        <img
          className="rounded-t-lg w-full h-auto object-cover"
          src={image}
          alt="Project Illustration"
        />
        {/* Project image */}
      </div>
      <p className="bg-[#EBEBEB] text-xs uppercase text-center font-bold text-[#6B6B6B]">
        {heading} {/* Label for the project type */}
      </p>
      <div className="p-5 sm:p-10">
        {/* Main content area */}
        <h3 className="text-[#333333] font-bold text-2xl sm:text-3xl font-lexend">
          {title} {/* Project title */}
        </h3>
        <p className="text-[#333333] text-[16px] sm:text-[18px] text-[Roboto] pt-2">
          {description}
          {/* Project description */}
        </p>

        {/* Responsive stats container */}
        <div className="flex flex-wrap gap-5 mt-5 items-start sm:items-center">
          <p className="text-[#6B6B6B]">
            Area:
            <span className="text-[#333333] text-2xl font-semibold ml-1">
              {area}
              {area === "TBA" ? "" : "ha"}
            </span>{" "}
            {/* Area statistic */}
          </p>
          <p className="text-[#6B6B6B]">
            ROI:
            <span className="text-[#333333] text-2xl font-semibold ml-1">
              {roi}
              {roi === "TBA" ? "" : "%"}
            </span>
            {/* ROI statistic */}
          </p>
          <p className="text-[#6B6B6B]">
            Carbon Credits:
            <span className="text-[#333333] text-2xl font-semibold ml-1">
              {carbonCredits}
            </span>
            {/* Carbon credits statistic */}
          </p>
          <p className="text-[#6B6B6B]">
            Shares Reserved:
            <span className="text-[#333333] text-2xl font-semibold ml-1">
              {reserved}
            </span>
            {/* Shares Reserved statistic */}
          </p>
        </div>

        {/* Responsive button container */}
        <div className="flex flex-wrap gap-3 mt-5">
          <button className="py-2 px-3 sm:py-3 sm:px-5 text-[14px] sm:text-[15px] font-bold rounded-lg text-[#0FB404] uppercase">
            Offering documentation
          </button>
          <button className="py-2 px-3 sm:py-3 sm:px-5 text-[14px] sm:text-[15px] font-bold rounded-lg text-[#0FB404] uppercase">
            Financial projections
          </button>
          <button className="py-2 px-3 sm:py-3 sm:px-5 text-[14px] sm:text-[15px] font-bold rounded-lg text-[#0FB404] uppercase">
            Property media
          </button>
          <button className="py-2 px-3 sm:py-3 sm:px-5 text-[14px] sm:text-[15px] font-bold rounded-lg text-[#0FB404] uppercase">
            Geospatial data
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewProjectDetail; // Exporting the component for use in other parts of the application
