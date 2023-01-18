/* eslint-disable react/jsx-props-no-spreading */
// import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import api from "../../services/api";
import CardCountry from "../molecules/CardCountry/CardCountry";

import styles from "./Home.module.css";

function Home() {
  const [country, setCountry] = useState("");

  useEffect(() => {
    async function getCountries() {
      const { data } = await api.get("/name/brazil");

      const payload = {
        country: data[0].name.common,
        population: data[0].population.toLocaleString("en-US"),
        region: data[0].region,
        capital: data[0].capital,
        flagImg: data[0].flags.png,
      };

      setCountry(payload);
    }

    getCountries();
  }, []);

  return (
    <main className={styles.container}>
      <CardCountry {...country} />
    </main>
  );
}

Home.propTypes = {};

export default Home;
