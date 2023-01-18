import PropTypes from "prop-types";
import styles from "./CardCountry.module.css";

function CardCountry({ flagImg, country, population, region, capital }) {
  return (
    <section className={styles.container}>
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

        <div>
          <strong>Capital: </strong>
          <span>{capital}</span>
        </div>
      </div>
    </section>
  );
}

CardCountry.propTypes = {
  flagImg: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  population: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
};

export default CardCountry;
