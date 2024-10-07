import { wallet } from "../../../assets/data"; // Importing wallet data

// Wallet component to display wallet information
const Wallet = () => {
  // Destructure wallet properties from the imported data
  const { walletId, entity, carbonCredits, dividend, eTree } = wallet;

  return (
    <div className="shadow-custom rounded-lg p-5 sm:p-10 space-y-5 mt-5">
      {/* Container for wallet details, using flex layout for responsiveness */}
      <div className="flex flex-col md:flex-row gap-10 items-center ">
        {/* First two items */}
        <div className="flex flex-col md:flex-row gap-10 items-start flex-[2]">
          <div className="space-y-2 text-center flex-1">
            <p className="text-[#6B6B6B] text-[14px] font-bold">Wallet</p>
            <h4 className="font-bold text-[#333333] mt-2">{walletId}</h4>
            <button className="text-[#0FB404] font-bold font-[Roboto] uppercase">
              Change
            </button>
          </div>
          <div className="space-y-2 text-center flex-1">
            <p className="text-[#6B6B6B] text-[14px] font-bold">Entity</p>
            <h4 className="font-bold text-[#333333] mt-2">{entity}</h4>
          </div>
        </div>

        {/* Last three items + claim button */}
        <div className="flex flex-col w-full md:w-auto flex-[3] ">
          {/* Container for Carbon Credits, Dividends, and E-Trees with underline */}
          <div className="flex flex-col md:flex-row gap-10 border-b-[1px] border-black pb-2">
            <div className="space-y-2 flex-1 text-center">
              <p className="text-[#6B6B6B] text-[14px] font-bold">
                Carbon Credits
              </p>
              <h4 className="font-bold text-[#333333] mt-2">{carbonCredits}</h4>
            </div>
            <div className="space-y-2 text-center flex-1">
              <p className="text-[#6B6B6B] text-[14px] font-bold">Dividends</p>
              <h4 className="font-bold text-[#333333] mt-2">{dividend}</h4>
            </div>
            <div className="space-y-2 text-center flex-1">
              <p className="text-[#6B6B6B] text-[14px] font-bold">E-Trees</p>
              <h4 className="font-bold text-[#333333] mt-2">{eTree}</h4>
            </div>
          </div>

          {/* Claim button aligned to the right */}
          <div className="flex justify-end mt-2">
            <button className="text-[#0FB404] text-center font-bold font-[Roboto] uppercase">
              Claim all rewards
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet; // Exporting the component for use in other parts of the application
