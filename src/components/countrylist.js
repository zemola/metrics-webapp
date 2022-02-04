import { FaArrowCircleRight } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Country = (props) => {
  const country = props;
  return (
    <div className="wrapper">
      <div className="btn-head">
        <h1 className="btn" type="button" id={country.country}>{country.country}</h1>
        <NavLink className="click-link" to={`/${country.country}`}>
          <FaArrowCircleRight />
        </NavLink>
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
