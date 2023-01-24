import PropTypes from "prop-types";
import clsx from "clsx";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from "react-router-dom";
import styles from "./ButtonLink.module.css";

function ButtonLink({ children, icon, pathUrl }) {
  const classes = clsx([styles.default]);

  return (
    <Link to={pathUrl} className={classes} relative="path">
      {icon && <div className={styles.icon}>{icon}</div>}
      {children}
    </Link>
  );
}

ButtonLink.propTypes = {
  children: PropTypes.string.isRequired,
  pathUrl: PropTypes.string.isRequired,
  icon: PropTypes.element,
};

ButtonLink.defaultProps = {
  icon: null,
};

export default ButtonLink;
