// Importing child components: NewsArticles and PlateformUpdates
import NewsArticles from "./NewsArticles";
import PlateformUpdates from "./PlateformUpdates";

const NewsAndUpdates = () => {
  return (
    // Main container with margin applied to the sides and bottom
    <div className="mx-5 mt-[-20px] mb-10">
      {/* Section heading */}
      <h2 className="text-center md:relative md:z-30 font-lexend text-2xl text-[#333333] font-bold">
        News & updates
      </h2>

      {/* Platform how-to guides section */}
      <div className="shadow-custom rounded-lg p-5 space-y-2 mt-5">
        {/* Sub-heading for platform guides */}
        <h3 className="text-lg font-bold font-lexend">
          Platform how to guides
        </h3>

        {/* Support information text */}
        <p className="text-[#333333] text-[15px]">
          Our support hours are 10:00 to 16:00 (UTC +2) Mon to Fri. Please
          expect an answer during those times.
        </p>
      </div>

      {/* Rendering Platform Updates component */}
      <PlateformUpdates />

      {/* Rendering News Articles component */}
      <NewsArticles />
    </div>
  );
};

export default NewsAndUpdates;
