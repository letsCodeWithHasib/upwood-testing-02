import { usersPortfolio } from "../../../assets/data"; // Importing user portfolio data
import InvestmentProject from "./InvestmentProject"; // Importing the InvestmentProject component

// InvestmentProjects component to display a grid of individual investment projects
const InvestmentProjects = ({ openInvestPopup, openSellPopup }) => {
  return (
    // Main container for the investment projects with responsive grid layout
    <div className="rounded-lg  grid grid-cols-1 sm:grid-cols-2 gap-5 my-5">
      {/* Mapping through usersPortfolio to render each InvestmentProject */}
      {usersPortfolio.map((portfolioProject) => (
        // Providing a unique key for each item to help React identify changes
        <InvestmentProject
          openPopup={openInvestPopup}
          openSellPopup={openSellPopup}
          key={portfolioProject.id}
          item={portfolioProject}
        />
      ))}
    </div>
  );
};

export default InvestmentProjects; // Exporting the component for use in other parts of the application
