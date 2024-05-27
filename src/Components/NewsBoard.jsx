import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import "./NewsBoard.css";

function NewsBoard({ category, searchTerm }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;
    if (searchTerm) {
      url = `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${
        import.meta.env.VITE_API_KEY
      }`;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.articles) {
          setArticles(data.articles);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [category, searchTerm]);

  return (
    <div className="news-board container">
      <h2 className="news-title text-center">
        Latest <span className="news-badge">News</span>
      </h2>
      <p>hello world</p>
      <div className="row">
        {articles.map((news, index) => (
          <div className="col-md-4" key={index}>
            <NewsItem
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsBoard;
