import { tokenPortfolioList } from "../../../assets/data"; // Importing token portfolio data

/**
 * TokenPortfolio Component
 * Displays a list of tokens with relevant details such as asset name, contract address, share amount, and earnings.
 */
const TokenPortfolio = () => {
  return (
    <div className="p-5 sm:p-7 shadow-custom mt-7 space-y-5 rounded-2xl">
      {/* Header section with title and export buttons */}
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <h3 className="font-lexend font-bold text-[20px] text-[#333333] mb-2 sm:mb-0">
          Token Portfolio List
        </h3>
        <div className="flex gap-3">
          {/* Button to export transaction history */}
          <button className="text-[#0FB404] text-sm font-bold font-[Roboto]">
            Export Transaction History
          </button>
          {/* Button to export token portfolio list */}
          <button className="text-[#0FB404] text-sm font-bold font-[Roboto]">
            Export Token Portfolio List
          </button>
        </div>
      </div>

      {/* Table to display the token portfolio data */}
      <div className="overflow-x-auto">
        <table className="w-full text-left table-auto">
          <thead>
            <tr className="border-t-[1px] border-[#808080] my-5">
              {/* Table headers */}
              <th className="py-3 px-4">Token Symbol</th>
              <th className="px-4">Asset Name</th>
              <th className="px-4">Smart Contract Address</th>
              <th className="px-4 text-center">Share Amount</th>
              <th className="px-4 text-center">Share Value</th>
              <th className="px-4 text-center">Carbon Credits</th>
              <th className="px-4 text-center">Dividends Earned</th>
            </tr>
          </thead>
          <tbody>
            {/* Mapping through tokenPortfolioList to create a row for each token */}
            {tokenPortfolioList.map((token, index) => {
              const {
                symbol,
                assetName,
                smartContractAddress,
                shareAmount,
                shareValue,
                carbonCredits,
                dividentEarned,
              } = token; // Destructure token properties

              return (
                <tr key={index} className="border-t-[1px] border-[#333333]">
                  {/* Render token details in table cells */}
                  <td className="py-3 px-4 text-sm">{symbol}</td>
                  <td className="py-3 px-4 text-sm">{assetName}</td>
                  <td className="py-3 px-4 text-sm break-all">
                    {smartContractAddress}
                  </td>
                  <td className="py-3 px-4 text-center text-sm">
                    {shareAmount}
                  </td>
                  <td className="py-3 px-4 text-center text-sm">
                    {shareValue}
                  </td>
                  <td className="py-3 px-4 text-center text-sm">
                    {carbonCredits}
                  </td>
                  <td className="py-3 px-4 text-center text-sm">
                    {dividentEarned}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Button to view all tokens, positioned to the right */}
      <div className="flex justify-end">
        <button className="text-[rgb(15,180,4)] font-[Roboto] font-bold">
          See All Tokens
        </button>
      </div>
    </div>
  );
};

export default TokenPortfolio; // Exporting the component for use in other parts of the application
