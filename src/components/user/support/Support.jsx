import PlateformGuides from "./PlateformGuides";
import WriteMessage from "./WriteMessage";

const Support = () => {
  return (
    <div className="mx-5 mt-[-20px] mb-10">
      {/* Container for the active projects section */}
      <h2 className="text-center md:relative md:z-30 font-lexend text-2xl text-[#333333] font-bold mb-5">
        Supports {/* Section heading */}
      </h2>
      <PlateformGuides />
      <WriteMessage />
    </div>
  );
};

export default Support;
