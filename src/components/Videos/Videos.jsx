import VideoCard from "./VideoCard";
import ChannelCard from "../Channel/ChannelCard";
import styles from "./Videos.module.css";
import { useEffect, useState } from "react";

const Videos = (props) => {
  const [videos, setVideos] = useState(null);

  const filterVideosHandler = (videos) => {
    const filterVideos = videos.filter((video) => {
      return video.id?.videoId || video.id?.channelId;
    });
    setVideos(filterVideos);
  };

  useEffect(() => {
    filterVideosHandler(props.videos);
  }, [props.videos]);

  return (
    <section className={styles["video-container"]}>
      {videos &&
        videos.map((item, index) => (
          <div key={index}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </div>
        ))}
    </section>
  );
};

export default Videos;
