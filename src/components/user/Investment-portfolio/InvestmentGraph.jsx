import graph from "../../../assets/graph.png"; // Importing the investment graph image

// InvestmentGraph component to display the investment performance graph and summary
const InvestmentGraph = () => {
  return (
    // Main container for the investment graph with shadow and padding
    <div className="shadow-custom rounded-lg p-5 md:p-10 space-y-5 mt-5">
      {/* Section heading for the graph */}
      <h3 className="text-[16px] md:text-[18px] font-bold font-lexend">
        Platform How-To Guides
      </h3>

      {/* Container for the investment graph image */}
      <div className="w-full">
        <img className="w-full h-auto" src={graph} alt="Investment Graph" />
      </div>

      {/* Summary of investment performance for the month */}
      <div className="flex items-center justify-between md:justify-start space-x-2 md:space-x-4">
        <p className="text-[#333333] text-[12px] md:text-[14px] font-[Roboto] font-bold flex items-center">
          {/* Indicator for the monthly performance */}
          This month
          <span className="text-[black] text-[16px] md:text-[18px] ml-2">
            +104€
          </span>
        </p>
      </div>
    </div>
  );
};

export default InvestmentGraph;
