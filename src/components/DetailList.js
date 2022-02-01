import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Details from './Details';
import { getCovidFromApi, getCountry } from '../redux/actions/fetchApi';

const DetailList = () => {
  const dispatch = useDispatch();
  const dataCovid = useSelector(((state) => state.covidReducer));
  useEffect(() => {
    if (dataCovid.country.lenght === 0) {
      dispatch(getCovidFromApi());
    }
  }, []);
  const todayDate = new Date().toISOString().slice(0, 10);
  const handleCountry = () => {
    const country = useParams();
    const place = country.country;
    const baseUrldate = `https://api.covid19tracking.narrativa.com/api/${todayDate}/country/${place}`;
    const api = () => async () => {
      const request = await fetch(baseUrldate);
      const response = await request.json();
      const data = response.dates[todayDate].country[place];
      dispatch(getCountry(data));
    };
    dispatch(api());
  };
  if (dataCovid.country.lenght === 0) {
    handleCountry();
  }
  return (
    <div>
      <div className="cou">
        <Details data={dataCovid.country} />
      </div>
    </div>
  );
};
export default DetailList;
