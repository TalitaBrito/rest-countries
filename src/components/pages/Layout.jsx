import PropTypes from "prop-types";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Outlet } from "react-router-dom";
import Header from "../molecules/Header/Header";

function Layout({ changeTheme }) {
  return (
    <>
      <Header changeTheme={changeTheme} />
      <Outlet />
    </>
  );
}

Layout.propTypes = {
  changeTheme: PropTypes.func.isRequired,
};

export default Layout;
