import React from "react";
import { Link } from "react-router-dom";
import { MdCheckCircle } from "react-icons/md";
import styles from "./VideoCard.module.css";

const VideoCard = (props) => {
  const { videoId } = props.video.id;
  const { snippet } = props.video;

  return (
    <div className={styles["video-card"]}>
      <Link to={videoId && `/video/${videoId}`} className={styles.img}>
        <img src={snippet?.thumbnails?.high?.url} alt={snippet?.title} />
      </Link>
      <Link
        to={videoId && `/video/${videoId}`}
        className={styles["video-title"]}
      >
        {snippet?.title.slice(0, 60)}
      </Link>
      <Link
        to={snippet?.channelId && `/channel/${snippet?.channelId}`}
        className={styles["channel-title"]}
      >
        {snippet?.channelTitle}
        <MdCheckCircle />
      </Link>
    </div>
  );
};
export default VideoCard;
