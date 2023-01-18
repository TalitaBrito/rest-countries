import PropTypes from "prop-types";
import styles from "./Header.module.css";
import Button from "../../atoms/Button";

function Header({ changeTheme }) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Where in the world?</h1>
      <Button onClick={changeTheme} icon={<ion-icon name="moon-outline" />}>
        Theme teste
      </Button>
    </header>
  );
}

Header.propTypes = {
  changeTheme: PropTypes.func.isRequired,
};

export default Header;
