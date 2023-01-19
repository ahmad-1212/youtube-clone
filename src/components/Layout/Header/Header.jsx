import React from "react";
import SearchBar from "./SearchBar";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.png";

const Header = () => (
  <header className={styles.header}>
    <Link to={"/"} className={styles.logo}>
      <img src={Logo} alt="Logo" />
    </Link>
    <SearchBar />
  </header>
);

export default Header;
