import { useContext } from "react";
import { GlobalContext } from "../../../hooks/GlobalStorage";
import styles from "./SearchInput.module.css";

function SearchInput() {
  const global = useContext(GlobalContext);

  const handleBlur = ({ target }) => {
    global.setSearchCountry(target.value);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.icon}>
        <ion-icon name="search" />
      </div>
      <input
        className={styles.input}
        name="search-country"
        placeholder="Search for a country..."
        onBlur={handleBlur}
      />
    </div>
  );
}

export default SearchInput;
