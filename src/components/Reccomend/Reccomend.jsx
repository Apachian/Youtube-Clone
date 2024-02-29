import React, { useEffect, useState } from "react";
import "./Reccomend.css";
import { API_kEY } from "../../data";
import { value_converter } from "../../data";
import { Link } from "react-router-dom";

const Reccomend = ({ categoryId }) => {
  const [apidata, setApiData] = useState([]);

  const fetchDate = async () => {
    const reletedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryId}&key=${API_kEY}`;

    await fetch(reletedVideo_url)
      .then((res) => res.json())
      .then((data) => setApiData(data.items));
  };

  useEffect(() => {
    fetchDate();
  }, []);
  return (
    <div className="recomend">
      {apidata.map((item, index) => {
        return (
          <Link
            to={`/video/${item.snippet.categoryId}/${item.id}`}
            key={index}
            className="side-video-list"
          >
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <div className="vid-info">
              <h4>{item.snippet.title}</h4>
              <p>{item.snippet.channelTitle}</p>
              <p>{value_converter(item.statistics.viewCount)} Views</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Reccomend;
