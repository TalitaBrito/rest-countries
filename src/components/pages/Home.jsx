import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../hooks/GlobalStorage";
import api from "../../services/api";
import CardCountry from "../molecules/CardCountry/CardCountry";
import ToolsBar from "../molecules/ToolsBar/ToolsBar";

import styles from "./Home.module.css";

function Home() {
  const [allCountries, setAllCountries] = useState("");
  const globalContext = useContext(GlobalContext);

  const createPayload = (data) => {
    const payload = data.map(
      ({ name, population, region, capital, flags, cioc, cca2 }) => {
        const country = {
          country: name.common,
          population: population.toLocaleString("en-US"),
          region,
          flagImg: flags.png,
          code: cioc || cca2,
        };

        if (capital) {
          country.capital = capital;
        }

        return country;
      }
    );

    return payload;
  };

  const getAllCountries = async () => {
    const { data } = await api.get("/all");
    setAllCountries(createPayload(data));
  };

  const getRegionCountries = async () => {
    const { data } = await api.get(`/region/${globalContext.region}`);
    setAllCountries(createPayload(data));
  };

  const getSearchCountries = async () => {
    const { data } = await api.get(`/name/${globalContext.searchCountry}`);
    setAllCountries(createPayload(data));
  };

  useEffect(() => {
    if (globalContext.region === "all") {
      getAllCountries();
      return;
    }

    getRegionCountries();
  }, [globalContext.region]);

  useEffect(() => {
    if (globalContext.searchCountry) {
      getSearchCountries();
    } else {
      const getCountries =
        globalContext.region === "all" ? getAllCountries : getRegionCountries;
      getCountries();
    }
  }, [globalContext.searchCountry]);

  return (
    <>
      <ToolsBar />
      <main className={styles.container}>
        {allCountries &&
          allCountries.map(
            ({ country, population, region, capital, flagImg, code }) => (
              <CardCountry
                key={country}
                code={code}
                country={country}
                population={population}
                region={region}
                capital={capital}
                flagImg={flagImg}
              />
            )
          )}
      </main>
    </>
  );
}

export default Home;
