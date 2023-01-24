/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useParams } from "react-router-dom";
import api from "../../services/api";
import ButtonLink from "../atoms/ButtonLink/ButtonLink";
import CardDetails from "../molecules/CardDetails/CardDetails";

import styles from "./DetailsCountry.module.css";

function DetailsCountry() {
  const [country, setCountry] = useState("");

  const { code } = useParams();

  useEffect(() => {
    async function getCountries() {
      const { data } = await api.get(`/alpha/${code}`);

      const payload = {
        country: data[0].name.common,
        officialName: data[0].name.official,
        population: data[0].population.toLocaleString("en-US"),
        region: data[0].region,
        tld: data[0].tld,
        languages: Object.values(data[0].languages).join(", "),
        flagImg: data[0].flags.png,
      };

      if (data[0].subregion) {
        payload.subregion = data[0].subregion;
      }

      if (data[0].capital) {
        payload.capital = data[0].capital;
      }

      if (data[0].currencies) {
        payload.currencies = Object.values(data[0].currencies)
          .map(({ name }) => name)
          .join(", ");
      }

      if (data[0]?.borders && data[0]?.borders.length) {
        payload.borders = data[0].borders;
      }

      setCountry(payload);
    }

    getCountries();
  }, []);

  return (
    <main className={styles.container}>
      <div className={styles.buttonBack}>
        <ButtonLink pathUrl="/" icon={<ion-icon name="arrow-back-outline" />}>
          Back
        </ButtonLink>
      </div>
      {country && (
        <CardDetails
          key={country.country}
          country={country.country}
          population={country.population}
          region={country.region}
          capital={country.capital}
          flagImg={country.flagImg}
          officialName={country.officialName}
          subregion={country.subregion}
          tld={country.tld}
          languages={country.languages}
          currencies={country.currencies}
          borders={country.borders}
        />
      )}
    </main>
  );
}

export default DetailsCountry;
