import React from "react";
import { MdCheckCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import styles from "./ChannelCard.module.css";

const ChannelCard = (props) => {
  const { snippet } = props.channelDetail;
  console.log(props.channelDetail);
  return (
    <div className={styles.card} style={{ marginTop: props.marginTop }}>
      <Link to={`/channel/${snippet?.channelId || props.channelDetail.id}`}>
        <img src={snippet?.thumbnails?.high.url} alt={snippet.title} />
        <h5 className={styles.title}>
          {snippet?.title} <MdCheckCircle />{" "}
        </h5>
        <p>{props.channelDetail?.statistics?.subscriberCount} subscribers</p>
      </Link>
    </div>
  );
};

export default ChannelCard;
