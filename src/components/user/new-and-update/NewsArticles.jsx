// Importing the articles data and NewsArticle component
import { articles } from "../../../assets/data";
import NewsArticle from "./NewsArticle";

const NewsArticles = () => {
  return (
    // Container div with responsive flex layout and gap between items
    <div className="flex flex-col sm:flex-row sm:justify-between mt-7 gap-5">
      {/* Mapping through the articles array and rendering each NewsArticle component */}
      {articles.map((article, index) => (
        // Using index as key for simplicity; ideally use a unique identifier like article.id
        <div key={index} className="flex-1">
          <NewsArticle article={article} />
        </div>
      ))}
    </div>
  );
};

export default NewsArticles;
