import Wallet from "./Wallet";
import TokenPortfolio from "./TokenPortfolio";
import PortfolioProjects from "./PortfolioProjects";

const WalletManagement = () => {
  return (
    // Main container with margin applied to the sides and bottom
    <div className="mx-5 mt-[-20px] mb-10">
      <div className="">
        <h2 className="text-center md:relative md:z-30 font-lexend text-2xl text-[#333333] font-bold justify-items-center">
          Wallet Management
        </h2>
        <div className="flex lg:justify-end md:mt-[-20px] lg:relative z-10 mt-5 justify-center">
          <button className="text-[#0FB404] font-bold font-[Roboto] uppercase">
            Wallet management guides
          </button>
        </div>
      </div>
      <Wallet />
      <TokenPortfolio />
      <PortfolioProjects />
    </div>
  );
};

export default WalletManagement;
