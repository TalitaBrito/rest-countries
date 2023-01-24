import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lightTheme, darkTheme } from "./theme";
import GlobalTheme from "./globals";
import Home from "./components/pages/Home";
import Layout from "./components/pages/Layout";
import DetailsCountry from "./components/pages/DetailsCountry";
import { GlobalStorage } from "./hooks/GlobalStorage";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    // eslint-disable-next-line no-unused-expressions
    localTheme && setTheme(localTheme);
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStorage>
        <GlobalTheme />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout changeTheme={toggleTheme} />}>
              <Route index element={<Home />} />
              <Route
                path="details-country/:code"
                element={<DetailsCountry />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalStorage>
    </ThemeProvider>
  );
}

export default App;
