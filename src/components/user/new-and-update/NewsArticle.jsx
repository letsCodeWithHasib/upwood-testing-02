const NewsArticle = ({ article }) => {
  // Destructure article object to extract heading, title, description, and image
  const { heading, title, description, image } = article;

  return (
    // Main article container with shadow and rounded corners
    <div className="shadow-custom rounded-lg overflow-hidden">
      {/* Article heading section, centered with bold uppercase text */}
      <p className="text-center text-xs font-[Roboto] font-bold uppercase text-[#333333] p-2">
        {heading}
      </p>

      {/* Image container with full width */}
      <div className="flex justify-center w-full">
        <img className="w-full h-auto" src={image} alt={title} />
        {/* Alt text updated with title for better accessibility */}
      </div>

      {/* Article content container with padding */}
      <div className="p-5">
        <div className="space-y-5">
          {/* Title of the article with specific font and size */}
          <h3 className="font-lexend text-lg font-bold">{title}</h3>

          {/* Article description with specific text color and font */}
          <p className="text-[#333333] font-[Roboto] text-[15px]">
            {description}
          </p>
        </div>

        {/* Read full article button, aligned to the right */}
        <div className="flex justify-end mt-5">
          <button className="font-[Roboto] text-sm text-[#0FB404] font-bold">
            Read full article
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsArticle;
