import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Country from './countrylist';
import { getCovidFromApi, getCovid } from '../redux/actions/fetchApi';

const todayDate = new Date().toISOString().slice(0, 10);
const Home = () => {
  const dispatch = useDispatch();
  const dataCovid = useSelector((state) => state.covidReducer);
  useEffect(() => {
    if (dataCovid.covid) {
      dispatch(getCovidFromApi());
    }
  }, []);
  const handleSub = () => {
    const num = document.getElementById('date').value;
    const baseUrldate = `https://api.covid19tracking.narrativa.com/api/${num}`;
    if (num > todayDate) {
      document.getElementById('date').value = '';
    } else {
      const api = () => async () => {
        const request = await fetch(baseUrldate);
        const response = await request.json();
        const data = response.dates[num].countries;
        const entries = Object.entries(data);
        dispatch(getCovid(entries));
      };
      dispatch(api());
    }
  };
  const [value, setValue] = useState('');
  const inputHandler = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <form>
        <input type="date" id="date" format="YYYY-MM-DD" />
        <button id="sub" onClick={handleSub} type="button">
          CLICK
        </button>
        <br />
        <input placeholder="SEARCH..." className="search" type="text" value={value} onChange={inputHandler} />
      </form>
      <div className="title">
        {' '}
        {value ? (
          dataCovid.covid
            .filter((countryData) => countryData[0]
              .toLowerCase()
              .includes(value.toLocaleLowerCase()))
            .map((country) => (
              <Country key={country[1].id} country={country[0]} links={country[1]} />
            ))
        )
          : (
            dataCovid.covid.map((ele) => (
              <Country key={ele[1].id} country={ele[0]} links={ele[1]} />
            ))
          )}
      </div>
    </div>
  );
};

export default Home;
