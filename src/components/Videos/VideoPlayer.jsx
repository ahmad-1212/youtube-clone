import React from "react";
import { MdCheckCircle } from "react-icons/md";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import styles from "./VideoPlayer.module.css";

const VideoPlayer = (props) => {
  const videoDetail = props.videoDetail[0];
  const {
    id: videoId,
    snippet: { channelTitle, title, channelId },
    statistics,
  } = videoDetail;

  return (
    <div className={styles["video-player"]}>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${videoId}`}
        controls
        className={styles.video}
      />
      <div>
        {" "}
        <Link to={`/video/${videoId}`} className={styles.title}>
          {title}
        </Link>
        <div className={styles.description}>
          <Link
            to={`/channel/${channelId}`}
            className={styles["channel-title"]}
          >
            <span> {channelTitle}</span>
            <MdCheckCircle />
          </Link>
          <div style={{ marginLeft: "auto" }}>
            <span className={styles.detail}>{statistics.likeCount} Likes</span>
            <span className={styles.detail}>{statistics.viewCount} Views</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
