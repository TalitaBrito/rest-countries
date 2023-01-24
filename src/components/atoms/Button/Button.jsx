import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./Button.module.css";

function Button({ children, contained, onClick, icon }) {
  const classes = clsx([styles.default], {
    [styles.contained]: contained,
  });

  return (
    <button type="button" className={classes} onClick={onClick}>
      {icon && <div className={styles.icon}>{icon}</div>}
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  contained: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.element,
};

Button.defaultProps = {
  contained: true,
  icon: null,
};

export default Button;
