import ProjectItem from "./ProjectItem"; // Importing the ProjectItem component to display individual projects
import { activeProjects } from "../../../assets/data";
import { useState } from "react";
import Popup from "../common/Popup";

/**
 * ActiveProjects Component
 * This component fetches and displays a list of active projects using the ProjectItem component.
 *
 * @returns {JSX.Element} - The rendered active projects list.
 */
const ActiveProjects = () => {
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

  return (
    <div className="mx-5 mt-[-25px]">
      {isOpen && (
        <Popup closePopup={closePopup} selectedProject={selectedProject} />
      )}
      {/* Container for the active projects section */}
      <h2 className="text-center md:relative md:z-30 font-lexend text-2xl text-[#333333] font-bold">
        Active Projects {/* Section heading */}
      </h2>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 my-5">
        {/* Grid layout for project items */}
        {activeProjects.map((activeProject, index) => (
          <ProjectItem openPopup={openPopup} key={index} item={activeProject} />
        ))}
      </div>
    </div>
  );
};

export default ActiveProjects; // Exporting the component for use in other parts of the application
