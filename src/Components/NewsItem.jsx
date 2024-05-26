import image from "../assets/news-image.jpg";
import "./NewsItem.css";

function NewsItem({ title, description, src, url }) {
  return (
    <div className="card news-card">
      <img
        src={src || image}
        className="card-img-top news-card-img"
        alt="News"
      />
      <div className="card-body news-card-body">
        <h5 className="card-title news-card-title">
          {title.length > 50 ? title.slice(0, 50) + "..." : title}
        </h5>
        <p className="card-text news-card-text">
          {description
            ? description.slice(0, 90) + "..."
            : "No description available."}
        </p>
        <a href={url} className="btn news-card-button">
          Read more
        </a>
      </div>
    </div>
  );
}

export default NewsItem;
