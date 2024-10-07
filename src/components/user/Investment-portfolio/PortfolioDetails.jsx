// PortfolioDetails component to display key metrics of the investment portfolio
const PortfolioDetails = ({ investmentPortfolio }) => {
  // Destructure the necessary properties from the investment portfolio object
  const { portfolioValue, yearlyProfit, roi, carbonTonsoffset } =
    investmentPortfolio;

  return (
    // Main container with shadow and padding for styling
    <div className="shadow-custom rounded-lg p-5 md:p-10 space-y-5 mt-5">
      {/* Flex container to arrange the metrics evenly and wrap on smaller screens */}
      <div className="flex flex-wrap justify-around">
        {/* Portfolio Value */}
        <div className="text-center w-full sm:w-1/2 md:w-1/4 p-2">
          <h4 className="text-[#6B6B6B] font-bold text-sm sm:text-[15px]">
            Portfolio Value
          </h4>
          <p className=" font-bold text-[18px] sm:text-[20px]">
            {portfolioValue}
          </p>
        </div>

        {/* Yearly Portfolio Growth */}
        <div className="text-center w-full sm:w-1/2 md:w-1/4 p-2">
          <h4 className="text-[#6B6B6B] font-bold font-[Roboto] text-sm sm:text-[15px]">
            Yearly Portfolio Growth
          </h4>
          <p className=" font-bold text-[18px] sm:text-[20px]">
            {yearlyProfit}
          </p>
        </div>

        {/* Return on Investment */}
        <div className="text-center w-full sm:w-1/2 md:w-1/4 p-2">
          <h4 className="text-[#6B6B6B] font-bold font-[Roboto] text-sm sm:text-[15px]">
            Return on Investment
          </h4>
          <p className=" font-bold text-[18px] sm:text-[20px]">{roi}</p>
        </div>

        {/* Carbon Tons Offset */}
        <div className="text-center w-full sm:w-1/2 md:w-1/4 p-2">
          <h4 className="text-[#6B6B6B] font-bold font-[Roboto] text-sm sm:text-[15px]">
            Carbon Tons Offset
          </h4>
          <p className=" font-bold text-[20px] sm:text-[22px]">
            {carbonTonsoffset}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetails;
