import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VideoPlayer from "../components/Videos/VideoPlayer";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Videos from "../components/Videos/Videos";
import styles from "./VideoDetail.module.css";
import ErrorMessage from "../components/UI/ErrorMessage";
import Spinner from "../components/UI/Spinner";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    setLoading(true);
    fetchFromAPI(`videos?part=content&id=${id}`)
      .then((data) => {
        setVideoDetail(data.items);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });

    fetchFromAPI(`search?relatedToVideoId=${id}&part=snippet&type=video`)
      .then((data) => {
        setVideos(data.items);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [id]);

  return (
    <section className={styles.section}>
      {loading && !error && <Spinner />}
      {!loading && !error && (
        <>
          <div className={styles["video-block"]}>
            {" "}
            {videoDetail && <VideoPlayer videoDetail={videoDetail} />}
          </div>
          <div className={styles["related-videos"]}>
            <h2>
              <span style={{ color: "red" }}>Related</span> Videos
            </h2>
            {videos && <Videos videos={videos} />}
          </div>
        </>
      )}
      {!loading && !videos && <ErrorMessage message={error} />}
    </section>
  );
};

export default VideoDetail;
