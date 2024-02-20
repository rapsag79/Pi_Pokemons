import { useState } from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar( {handleChange, handleSubmit}) {
  const [id, setId] = useState("");
  
  return (
    <form className={styles}
    >
      <input
        className={styles}
        type="search"
        placeholder="Buscar por ID"
        onChange={ handleChange }
        value={id}
      />
      <button
        className={styles}
        activeclassname={styles.active}
        onClick={() => {
          handleSubmit();
          setId("");
        }}
      >
        Buscar
      </button>
    </form>
  );
}
