import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const GlobalContext = createContext();

export function GlobalStorage({ children }) {
  const [region, setRegion] = useState("all");
  const [searchCountry, setSearchCountry] = useState("");

  return (
    <GlobalContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{ region, setRegion, searchCountry, setSearchCountry }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

GlobalStorage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.object.isRequired,
};
