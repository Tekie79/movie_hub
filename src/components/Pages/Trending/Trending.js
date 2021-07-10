import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import SingleContent from "../../SingleContent/SingleContent";
import "./Trending.css";

const Trending = () => {
  const [content, setContent] = useState([]);

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}`
    );
    setContent(data.results);
  };

  useEffect(() => {
    fetchTrending();
  }, []);

  return (
    <div>
      <span className="pageTitle">Trending</span>
      <div className="trending">
        {content &&
          content.map((item) => {
            return (
              <SingleContent
                key={item.id}
                id={item.id}
                poster={item.poster_path}
                title={item.title || item.name}
                date={item.release_date || item.first_air_date}
                media_type={item.media_type}
                vote_average={item.vote_average}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Trending;