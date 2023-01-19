import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import ChannelCard from "../components/Channel/ChannelCard";
import Videos from "../components/Videos/Videos";
import Spinner from "../components/UI/Spinner";
import ErrorMessage from "../components/UI/ErrorMessage";

const ChannelDetail = () => {
  const [loading, setLoading] = useState(false);
  const [channelDetails, setChannelDetails] = useState(null);
  const [videos, setVideos] = useState(null);
  const [error, setError] = useState(null);
  const params = useParams();
  const channelId = params.id;

  useEffect(() => {
    setLoading(true);
    fetchFromAPI(`channels?part=snippet&id=${channelId}`).then((data) =>
      setChannelDetails(data.items)
    );

    fetchFromAPI(`search?channelId=${channelId}&part=snippet&order=date`)
      .then((data) => {
        setVideos(data.items);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        if (err.message === "Failed to fetch") {
          setError("Network Error");
        } else {
          setError(err.message);
        }
      });
  }, [channelId]);

  return (
    <>
      {loading && !error && <Spinner />}
      {!loading && error && <ErrorMessage message={error} />}
      {!loading && !error && (
        <section style={{ marginTop: "-9rem" }}>
          <div
            style={{
              width: "100%",
              height: "45vh",
              background:
                " linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(29,29,183,1) 22%, rgba(6,79,166,1) 45%, rgba(8,106,170,1) 60%, rgba(0,212,255,1) 98%)",
            }}
          />
          <div style={{ marginBottom: "4rem" }}>
            {channelDetails && (
              <ChannelCard
                channelDetail={channelDetails[0]}
                marginTop={"-6rem"}
              />
            )}
          </div>
          {videos && <Videos videos={videos} />}
        </section>
      )}
    </>
  );
};

export default ChannelDetail;
