import SearchInput from "../../atoms/SearchInput/SearchInput";
import SelectRegion from "../../atoms/SelectRegion/SelectRegion";
import styles from "./ToolsBar.module.css";

function ToolsBar() {
  return (
    <div className={styles.container}>
      <SearchInput />
      <SelectRegion />
    </div>
  );
}

export default ToolsBar;
