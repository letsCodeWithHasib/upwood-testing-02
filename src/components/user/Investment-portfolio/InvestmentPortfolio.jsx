import PortfolioDetails from "./PortfolioDetails"; // Importing the PortfolioDetails component
import { investmentPortfolio } from "../../../assets/data"; // Importing investment portfolio data
import InvestmentProjects from "./InvestmentProjects"; // Importing InvestmentProjects component
import InvestmentGraph from "./InvestmentGraph"; // Importing InvestmentGraph component
import InvestmentPopup from "./InvestmentPopup"; // Importing InvestmentPopup component
import SellSharePopup from "./SellSharePopup"; // Importing SellSharePopup component
import { useState } from "react";

// InvestmentPortfolio component to display the user's investment portfolio overview
const InvestmentPortfolio = () => {
  // Sell share state management
  const [isSellShareOpen, setIsSellShareOpen] = useState(false);
  const [selectedSellShareProject, setSelectedSellShareProject] =
    useState(null);

  const openSellPopup = (item) => {
    setIsSellShareOpen(true); // Open the sell share popup
    setSelectedSellShareProject(item); // Set the selected project to sell
  };

  const closeSellPopup = () => {
    setIsSellShareOpen(false); // Close the sell share popup
    setSelectedSellShareProject(null); // Clear the selected project
  };

  // Investment state management
  const [isInvestMentOpen, setIsInvestMentOpen] = useState(false);
  const [selectedInvestProject, setSelectedInvestProject] = useState(null);

  const openInvestPopup = (item) => {
    setIsInvestMentOpen(true); // Open the investment popup
    setSelectedInvestProject(item); // Set the selected investment project
  };

  const closeInvestPopup = () => {
    setIsInvestMentOpen(false); // Close the investment popup
    setSelectedInvestProject(null); // Clear the selected project
  };

  return (
    // Main container for the investment portfolio with responsive margin for spacing
    <div className="mx-4 md:mx-5 mb-10 mt-[-20px]">
      {isInvestMentOpen && (
        <InvestmentPopup
          selectedInvestProject={selectedInvestProject}
          closePopup={closeInvestPopup}
        />
      )}

      {isSellShareOpen && (
        <SellSharePopup
          selectedSellShareProject={selectedSellShareProject}
          closePopup={closeSellPopup} // Corrected function call
        />
      )}

      {/* Section heading for the investment portfolio */}
      <h2 className="text-center font-lexend text-xl md:text-2xl text-[#333333] font-bold">
        Investment Portfolio
      </h2>

      {/* Displaying portfolio details using the imported component */}
      <PortfolioDetails investmentPortfolio={investmentPortfolio} />

      {/* Displaying the investment performance graph */}
      <InvestmentGraph />

      {/* Displaying the investment projects */}
      <InvestmentProjects
        openSellPopup={openSellPopup}
        openInvestPopup={openInvestPopup}
      />
    </div>
  );
};

export default InvestmentPortfolio;
