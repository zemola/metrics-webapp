import { FaArrowCircleRight } from 'react-icons/fa';

const Country = (props) => {
  const country = props;
  return (
    <div className="wrapper">
      <div className="btn-head">
        <h1 className="btn" type="button" id={country.country}>{country.country}</h1>
        <a className="click-link" href={country.country}>
          <FaArrowCircleRight />
        </a>
      </div>
      <p>
        Total-Confirmed:
        {country.links.today_confirmed}
      </p>
      <p>
        today Recovered:
        {country.links.today_recovered}
      </p>
    </div>
  );
};

export default Country;