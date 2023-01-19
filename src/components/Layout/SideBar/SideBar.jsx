import React, { useState } from "react";
import styles from "./SideBar.module.css";
import { categories } from "../../../utils/constants";

const SideBar = (props) => {
  const [selectedCategory, setSelectedCategory] = useState("New");

  const selectCategoryHandler = (category) => {
    if (selectedCategory === category) return;
    setSelectedCategory(category);
    props.onAddCategory(category);
  };

  return (
    <aside className={styles.sidebar}>
      {categories.map((item, index) => {
        return (
          <button
            type="button"
            key={item.name + index}
            className={`${styles.button} ${
              selectedCategory === item.name ? styles.active : ""
            }`}
            onClick={() => selectCategoryHandler(item.name)}
          >
            <span className={styles.icon}>{item.icon}</span>
            <span className={styles.text}>{item.name}</span>
          </button>
        );
      })}
    </aside>
  );
};

export default SideBar;
