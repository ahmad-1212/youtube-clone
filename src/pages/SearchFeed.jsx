import React, { useEffect, useState } from "react";
import Videos from "../components/Videos/Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Spinner from "../components/UI/Spinner";
import ErrorMessage from "../components/UI/ErrorMessage";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const { searchTerm } = params;

  useEffect(() => {
    setIsLoading(true);
    fetchFromAPI(`search?q=${searchTerm}&part=snippet`)
      .then((data) => {
        setVideos(data.items);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, [searchTerm]);

  return (
    <div>
      {!isLoading && !error && (
        <div
          style={{
            fontSize: "3rem",
            fontWeight: "600",
            marginBottom: "3rem",
            marginLeft: "3rem",
          }}
        >
          {" "}
          <span>Search Results For: </span>
          <span style={{ color: "red" }}>{searchTerm}</span>
          <span> Videos</span>
        </div>
      )}
      {error && !isLoading && <ErrorMessage message={error} />}
      {isLoading && <Spinner />}
      {!isLoading && !error && <Videos videos={videos} />}
    </div>
  );
};

export default SearchFeed;
