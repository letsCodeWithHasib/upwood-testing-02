// Importing the QueryBox component and platform updates data
import QueryBox from "../common/QueryBox";
import { platformUpdates } from "../../../assets/data";

const PlatformUpdates = () => {
  return (
    // Grid layout with responsive column settings and custom shadow and padding
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-7 shadow-custom rounded-lg p-5 sm:p-10">
      {/* Mapping through platformUpdates array to render each update */}
      {platformUpdates.map((platformUpdate, index) => {
        const { updateNum, updateName } = platformUpdate; // Destructuring update object

        // Rendering QueryBox for each update, passing data as props
        return (
          <QueryBox
            key={index} // Using index as key; ideally use unique identifiers if available
            boxData={{ heading: updateNum, query: updateName }} // Passing data to QueryBox component
          />
        );
      })}
    </div>
  );
};

export default PlatformUpdates;
