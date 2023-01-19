import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const searchInputHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
    }
    setSearchTerm("");
  };

  return (
    <form className={styles.input} onSubmit={handleSubmit}>
      <input
        value={searchTerm}
        onChange={searchInputHandler}
        type="text"
        placeholder="Search here..."
      />
      <button type="submit">
        <MdSearch className={styles.icon} />
      </button>
    </form>
  );
};
export default SearchBar;
