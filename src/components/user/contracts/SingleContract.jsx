import { contractsList } from "../../../assets/data"; // Importing the contracts data
import { useParams, Link } from "react-router-dom"; // Importing hooks and components from React Router
import downloadImage from "../../../assets/download-image.png";

// SingleContract component to display individual contract details
const SingleContract = () => {
  const { id } = useParams(); // Extracting the contract ID from the URL parameters

  // Validate ID and destructure properties from the contract object
  const contract = contractsList[id];

  // Handle case where contract is not found
  if (!contract) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-xl text-red-500">Contract not found.</h2>
        <Link to="/user/contracts" className="text-blue-600 underline">
          Back to contracts
        </Link>
      </div>
    );
  }

  const { contractName, tokens, signedDate, nr } = contract;

  return (
    // Main container for the contract with styling for rounded corners and shadow
    <div className="rounded-lg shadow-custom mt-[100px] mx-4 mb-10 md:mx-10">
      {/* Header displaying the contract name and signed date */}
      <p className="bg-[#ffe5e5] rounded-t-lg text-[#6B6B6B] font-[Roboto] font-bold p-2 text-center">
        Subscription Agreement: {contractName} | Signed Date: {signedDate}
      </p>

      {/* Content area with dynamic height for visual consistency */}
      <div className="min-h-[100px] bg-blue-200 overflow-hidden text-center p-4 my-4">
        <p className="text-gray-700">
          {/* Placeholder text; replace with relevant content as necessary */}
          Detailed contract information will be displayed here.
        </p>
      </div>

      {/* Details section displaying additional contract information */}
      <div>
        <div className="p-5 space-y-4">
          {/* Contract title and registration number */}
          <h3 className="text-[#333333] text-[18px] font-bold">
            "{contractName}" | Cadastar NR: {nr}
          </h3>
          <p className="text-sm">Subscription Agreement</p>

          {/* Tokens and signed date display */}
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
            <p className="font-[Roboto] font-bold text-[#333333] flex gap-2 items-center">
              Tokens:
              <span className="text-[#0FB404] font-[Roboto] text-[20px]">
                {tokens}
              </span>
            </p>
            <p className="font-[Roboto] font-bold text-[#333333] flex gap-2 items-center">
              Signed Date:
              <span className="text-[#0FB404] font-[Roboto] text-[20px]">
                {signedDate}
              </span>
            </p>
          </div>

          {/* Navigation and action buttons */}
          <div className="flex flex-col sm:flex-row justify-between items-center pt-5">
            {/* Link to navigate back to the contracts list */}
            <Link
              className="text-[#6B6B6B] uppercase font-[Roboto] font-bold text-[15px] px-5 py-2 rounded-lg text-center w-full sm:w-auto"
              to="/user/contracts"
              aria-label="Back to contracts list"
            >
              Back to Contracts
            </Link>
            <div className="flex items-center flex-col sm:flex-row sm:gap-4 w-full sm:w-auto mt-3 sm:mt-0">
              {/* Link to see a preview of the contract */}
              <Link to={`/user/contracts/${id}`}>
                <button
                  className="font-[Roboto] uppercase flex items-center gap-3 font-bold text-[15px] text-[#0FB404] px-5 py-2 rounded-lg w-full sm:w-auto mb-3 sm:mb-0" // Increased margin bottom
                  aria-label={`See preview of contract ${contractName}`}
                >
                  See Preview
                </button>
              </Link>
              {/* Buttons for downloading the contract in different formats */}
              <button
                className="font-[Roboto] justify-center flex items-center gap-3 font-bold text-[15px] text-[#0FB404] px-5 py-2 rounded-lg w-full sm:w-auto mb-3 sm:mb-0" // Increased margin bottom
                aria-label="Download EDOC"
              >
                EDOC <img className="w-[17px]" src={downloadImage} alt="" />
              </button>
              <button
                className="font-[Roboto] justify-center flex items-center gap-3 font-bold text-[15px] text-[#0FB404] px-5 py-2 rounded-lg w-full sm:w-auto"
                aria-label="Download PDF"
              >
                PDF <img className="w-[17px]" src={downloadImage} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleContract;
