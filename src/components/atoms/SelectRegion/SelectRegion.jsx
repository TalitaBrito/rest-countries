import { useContext } from "react";
import { GlobalContext } from "../../../hooks/GlobalStorage";
import styles from "./SelectRegion.module.css";

const regions = [
  {
    value: "all",
    label: "Filter by Region",
  },
  {
    value: "africa",
    label: "Africa",
  },
  {
    value: "america",
    label: "America",
  },
  {
    value: "asia",
    label: "Asia",
  },
  {
    value: "europe",
    label: "Europe",
  },
  {
    value: "oceania",
    label: "Oceania",
  },
];

function SelectRegion() {
  const global = useContext(GlobalContext);

  const handleChange = ({ target }) => {
    global.setRegion(target.value);
  };

  return (
    <select
      className={styles.select}
      id="select-regions"
      name="select-regions"
      onChange={handleChange}
    >
      {regions.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}

export default SelectRegion;
