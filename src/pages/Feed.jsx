import React, { useEffect, useState } from "react";
import SideBar from "../components/Layout/SideBar/SideBar";
import Videos from "../components/Videos/Videos";
import styles from "./Feed.module.css";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Spinner from "../components/UI/Spinner";
import ErrorMessage from "../components/UI/ErrorMessage";

const Feed = () => {
  const [category, setCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const addCategoryHandler = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchFromAPI(`search?q=${category}&part=snippet`)
      .then((data) => {
        setVideos(data.items);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        if (err.message === "Failed to fetch") {
          setError("Network Error!");
        } else {
          setError(err.message);
        }
      });
  }, [category]);

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <SideBar onAddCategory={addCategoryHandler} />
        <div className={styles.copyright}>copyright 2022</div>
      </div>
      <div className={styles.videos}>
        <div
          style={{
            fontSize: "3rem",
            fontWeight: "600",
            marginBottom: "1rem",
            marginLeft: "3rem",
          }}
        >
          <span style={{ color: "red" }}>{category}</span>
          <span> Videos</span>
        </div>
        {error && !isLoading && <ErrorMessage message={error} />}
        {isLoading && <Spinner />}
        {!isLoading && !error && <Videos videos={videos} />}
      </div>
    </div>
  );
};

export default Feed;
