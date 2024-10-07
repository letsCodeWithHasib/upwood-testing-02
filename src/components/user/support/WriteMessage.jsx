import QueryBox from "../common/QueryBox";

const WriteMessage = () => {
  return (
    <div className="shadow-2xl rounded-2xl p-7 mt-10 space-y-5">
      <h3 className="text-lg font-bold font-lexend ">Write to support</h3>
      <p className=" text-[#333333]">
        Our support hours are 10:00 to 16:00 (UTC +2) Mon to Fri. Please expect
        an answer during those times.
      </p>
      <textarea
        placeholder="Type your message here..."
        className="w-full h-[300px] border-[1px] border-[#6B6B6B] p-5 rounded-lg"
      ></textarea>
      <div className="flex justify-end">
        <button className="px-[24px] py-[14px] text-xs bg-[#0FB404] text-white font-bold rounded-lg">
          Submit
        </button>
      </div>
    </div>
  );
};

export default WriteMessage;
