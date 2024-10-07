import { fundedProjects } from "../../../assets/data";
import { useParams, Link } from "react-router-dom";
import notifyImage from "../../../assets/notify.png";

/**
 * ViewPortfolioProject Component
 * Displays information about a specific project related to forest plantations.
 *
 * @returns {JSX.Element} - The rendered project item.
 */
const ViewPortfolioProject = () => {
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
  } = fundedProjects[id];

  return (
    <div className="shadow-custom rounded-xl m-10 mt-[120px]">
      {/* Container for the project item */}
      <div className="bg-gray-50 flex justify-center">
        {/* Project image */}
        <img
          className="rounded-t-lg w-full"
          src={image}
          alt="Project Illustration"
        />
      </div>
      <p className="bg-[#EBEBEB] text-xs uppercase text-center font-bold text-[#6B6B6B]">
        {heading} {/* Label for the project type */}
      </p>
      <div className="p-5">
        {/* Main content area */}
        <h3 className="text-[#333333] font-bold text-2xl font-lexend ">
          {title} {/* Project title */}
        </h3>
        <p className="text-[#333333] text-[16px] text-[Roboto] pt-2">
          {description}
          {/* Project description */}
        </p>
        <div className="flex flex-wrap gap-3 items-center mt-3">
          {/* Stats container */}
          <p className="text-[#6B6B6B] flex items-center gap-2">
            Area :
            <span className="text-[#333333] text-2xl font-semibold">
              {area}
              {area === "TBA" ? "" : " ha"}
            </span>
            {/* Area statistic */}
          </p>
          <p className="text-[#6B6B6B]">
            ROI :
            <span className="text-[#333333] text-2xl font-semibold">
              {roi}
              {roi === "TBA" ? "" : "%"}
            </span>
          </p>
          <p className="text-[#6B6B6B]">
            Carbon Credit :
            <span className="text-[#333333] text-2xl font-semibold">
              {carbonCredits}
            </span>
            {/* Carbon credits statistic */}
          </p>
          <p className="text-[#6B6B6B]">
            Shares Reserved :
            <span className="text-[#333333] text-2xl font-semibold">
              {reserved}
            </span>
            {/* Shares reserved statistic */}
          </p>
        </div>
        <div className="flex flex-wrap justify-between mt-5 gap-3">
          {/* Navigation buttons */}
          <button className="py-3 flex-1 text-[15px] font-bold rounded-lg text-[#0FB404] uppercase">
            Offering Documentation
          </button>
          <button className="py-3 flex-1 text-[15px] font-bold rounded-lg text-[#0FB404] uppercase">
            Financial Projections
          </button>
          <button className="py-3 flex-1 text-[15px] font-bold rounded-lg text-[#0FB404] uppercase">
            Property Media
          </button>
          <button className="py-3 flex-1 text-[15px] font-bold rounded-lg text-[#0FB404] uppercase">
            Geospatial Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewPortfolioProject; // Exporting the component for use in other parts of the application
