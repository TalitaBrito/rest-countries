import PropTypes from "prop-types";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from "react-router-dom";
import styles from "./CardCountry.module.css";

function CardCountry({ flagImg, country, population, region, capital, code }) {
  // const { countryName } = useParams();

  return (
    <section className={styles.container}>
      <Link to={`/details-country/${code}`} className={styles.link}>
        <img
          className={styles.flag}
          src={flagImg}
          alt={`Bandeira do país: ${country}`}
        />

        <div className={styles.infoContainer}>
          <h3 className={styles.title}>{country}</h3>

          <div>
            <strong>Population: </strong>
            <span>{population}</span>
          </div>

          <div>
            <strong>Region: </strong>
            <span>{region}</span>
          </div>

          {capital && (
            <div>
              <strong>Capital: </strong>
              <span>{capital}</span>
            </div>
          )}
        </div>
      </Link>
    </section>
  );
}

CardCountry.propTypes = {
  flagImg: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  population: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  capital: PropTypes.string,
  code: PropTypes.string.isRequired,
};

CardCountry.defaultProps = {
  capital: "",
};

export default CardCountry;
