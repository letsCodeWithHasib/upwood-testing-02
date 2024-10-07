import QueryBox from "../common/QueryBox";

const PlatformGuides = () => {
  return (
    <div className="shadow-2xl rounded-2xl p-5 sm:p-7">
      <h3 className="text-lg font-bold font-lexend text-center sm:text-left">
        Platform How-To Guides
      </h3>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        <QueryBox
          boxData={{
            heading: "Portfolio",
            query: "How to manage your investments portfolio?",
          }}
        />
        <QueryBox
          boxData={{
            heading: "Wallet",
            query: "How to manage your wallet?",
          }}
        />
        <QueryBox
          boxData={{
            heading: "Contracts",
            query: "How to manage your contracts?",
          }}
        />
        <QueryBox
          boxData={{
            heading: "Security",
            query: "How to ensure your account security?",
          }}
        />
        <QueryBox
          boxData={{
            heading: "Investments",
            query: "How to invest in new projects?",
          }}
        />
        <QueryBox
          boxData={{
            heading: "Support",
            query: "How to contact support?",
          }}
        />
      </div>
      <div className="flex justify-end mt-5">
        <button className="text-[#0FB404] font-bold text-[15px]">
          See All
        </button>
      </div>
    </div>
  );
};

export default PlatformGuides;
