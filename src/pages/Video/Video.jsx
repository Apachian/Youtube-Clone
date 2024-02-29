import React from "react";
import "./Video.css";
import PlayVideo from "../../components/PlayVideo/PlayVideo";
import Reccomend from "../../components/Reccomend/Reccomend";
import { useParams } from "react-router-dom";

const Video = () => {
  const { videoId, categoryId } = useParams();
  return (
    <div className="play-container">
      <PlayVideo videoId={videoId}  />
      <Reccomend  categoryId={categoryId}/>
    </div>
  );
};

export default Video;
