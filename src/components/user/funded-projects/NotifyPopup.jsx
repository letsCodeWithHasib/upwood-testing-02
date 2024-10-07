import { useState } from "react";

const Popup = ({
  selectedProject,
  closePopup,
  notified,
  setNotified,
  setNotifiedProjects,
  notifiedProjects,
  index,
}) => {
  const [amount, setAmount] = useState(0);
  const [notifyFailed, setNotifyFailed] = useState(false);

  const { available, price: itemPrice } = selectedProject;

  const handleNotifyMe = (event) => {
    event.preventDefault();
    if (!amount) {
      return setNotifyFailed(true);
    } else {
      setNotified(true);
      setNotifiedProjects([...notifiedProjects, index]);
      setNotifyFailed(false);
      closePopup();
    }
  };
  return (
    <div className="fixed z-40 inset-0 bg-[rgb(0,0,0,.5)] bg-opacity-30 backdrop-blur-lg flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-custom p-6 max-w-lg w-full text-center">
        {notified ? (
          <div>
            <h2 className="text-[#333333] font-lexend font-bold text-[20px]">
              Congratulations!
            </h2>
            <div className="mt-5 flex flex-col items-center gap-3">
              <p className="text-[Roboto] font-bold">
                Shares available :{" "}
                <span className="text-[#0FB404] text-[20px]">{available}</span>
              </p>
              <p className="text-[Roboto] font-bold">You will be notified</p>
            </div>
            <button
              onClick={() => closePopup(false)}
              className="text-[Roboto] font-bold uppercase  text-[#6B6B6B] mt-5"
            >
              Close
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-[#333333] font-lexend font-bold text-[20px]">
              Notify me if tokens become available
            </h2>
            <form
              onSubmit={handleNotifyMe}
              className="mt-5 flex flex-col items-center gap-3"
            >
              <p className="text-[Roboto] font-bold">
                Shares available :{" "}
                <span className="text-[#0FB404] text-[20px]">{available}</span>
              </p>
              <p className="text-[Roboto] font-bold">
                Price per share :
                <span className="text-[#0FB404] text-[20px] ml-2">
                  {itemPrice}€
                </span>
              </p>
              <p className="text-[Roboto] pt-2">
                Type amount of shares you want to buy
              </p>
              <input
                onChange={(e) => setAmount(e.target.value)}
                className={`p-4 border-[1px] rounded-md ${
                  !notifyFailed ? "border-black" : "border-[red]"
                }`}
                type="number"
              />
              {notifyFailed && (
                <p className="text-sm text-[red] pt-1 w-[300px]">
                  Your wallet balance is not sufficient to buy shares. Please
                  add funds to your wallet.
                </p>
              )}
              <p className="text-[Roboto] font-bold w-[300px] text-center mt-5">
                If other token holder will decide to sell their shares we will
                notify you
              </p>

              <div className="flex flex-col items-center py-7 gap-3">
                <button
                  className={`text-[Roboto] font-bold uppercase ${
                    amount ? "bg-[#0FB404]" : "bg-[#6FCB64]"
                  }  py-[14px] px-[24px]  rounded-lg text-white`}
                >
                  Notify me
                </button>
              </div>
              <button
                onClick={() => closePopup(false)}
                className="text-[Roboto] font-bold uppercase  text-[#6B6B6B]"
              >
                Close
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Popup;
