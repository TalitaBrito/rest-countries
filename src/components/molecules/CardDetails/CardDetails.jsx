import PropTypes from "prop-types";
import ButtonLink from "../../atoms/ButtonLink/ButtonLink";
import styles from "./CardDetails.module.css";

function CardDetails({
  flagImg,
  officialName,
  subregion,
  tld,
  languages,
  currencies,
  borders,
  country,
  population,
  region,
  capital,
}) {
  return (
    <section className={styles.container}>
      <img
        className={styles.flag}
        src={flagImg}
        alt={`Bandeira do país: ${country}`}
      />

      <div className={styles.infoContainer}>
        <h3 className={styles.title}>{country}</h3>

        <div className={styles.detailsContainer}>
          <div className={styles.firstColunm}>
            <div>
              <strong>Official name: </strong>
              <span>{officialName}</span>
            </div>

            <div>
              <strong>Population: </strong>
              <span>{population}</span>
            </div>

            <div>
              <strong>Region: </strong>
              <span>{region}</span>
            </div>

            <div>
              <strong>Subregion: </strong>
              <span>{subregion}</span>
            </div>

            {capital && (
              <div>
                <strong>Capital: </strong>
                <span>{capital}</span>
              </div>
            )}
          </div>

          <div className={styles.secondColunm}>
            <div>
              <strong>Top level domain: </strong>
              <span>{tld}</span>
            </div>

            <div>
              <strong>Currencies: </strong>
              <span>{currencies}</span>
            </div>

            <div>
              <strong>Languages: </strong>
              <span>{languages}</span>
            </div>
          </div>
        </div>

        {Boolean(borders.length) && (
          <div className={styles.containerBorders}>
            <strong>Borders: </strong>
            {borders.map((border) => (
              <ButtonLink key={border} pathUrl={`../details-country/${border}`}>
                {border}
              </ButtonLink>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

CardDetails.propTypes = {
  flagImg: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  population: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  capital: PropTypes.string,
  officialName: PropTypes.string.isRequired,
  subregion: PropTypes.string.isRequired,
  tld: PropTypes.string.isRequired,
  languages: PropTypes.string.isRequired,
  currencies: PropTypes.string.isRequired,
  borders: PropTypes.arrayOf(PropTypes.string),
};

CardDetails.defaultProps = {
  capital: "",
  borders: [],
};

export default CardDetails;
