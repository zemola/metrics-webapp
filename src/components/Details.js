import { useParams } from 'react-router-dom';

const Details = (props) => {
  const cou = props;
  const country = useParams();
  return (
    <div className="details">
      <div className="contry-div">
        <h1>
          Country:
          {country.country}
        </h1>
      </div>
      <div className="info">
        <div className="details-div">
          <div className="dates">
            <h2 className="date-head">DETAILS</h2>
            <p>
              <b>Date:</b>
              <b>{cou.data.date}</b>
            </p>
          </div>
          <div className="main-wrap">
            <div className="sor">
              <p className="dat-type">SOURCE:</p>
              <b className="dat-type">{cou.data.source}</b>
            </div>
            <div className="sor">
              <p className="dat-type">TOTAL CONFIRMED:</p>
              <b className="dat-type">{cou.data.today_confirmed}</b>
            </div>
            <div className="sor">
              <p className="dat-type">TOTAL DEATH:</p>
              <b className="dat-type">{cou.data.today_deaths}</b>
            </div>
            <div className="sor">
              <p className="dat-type">CONFIRMED:</p>
              <b className="dat-type">{cou.data.today_new_confirmed}</b>
            </div>
            <div className="sor">
              <p>TODAY DEATH:</p>
              <b className="dat-type">{cou.data.today_new_deaths}</b>
            </div>
            <div className="sor">
              <p>Today New Open Cases:</p>
              <b className="dat-type">{cou.data.today_new_open_cases}</b>
            </div>
            <div className="sor">
              <p>Today New Recoveries:</p>
              <b className="dat-type">{cou.data.today_new_recovered}</b>
            </div>
            <div className="sor">
              <p>Today Open Cases:</p>
              <b className="dat-type">{cou.data.today_open_cases}</b>
            </div>
            <div className="sor">
              <p>Today Recovered:</p>
              <b className="dat-type">{cou.data.today_recovered}</b>
            </div>
            <div className="sor">
              <p>Today vs Yesterday Confirmed:</p>
              <b className="dat-type">{cou.data.today_vs_yesterday_confirmed}</b>
            </div>
            <div className="sor">
              <p>Today vs Yesterday Deaths:</p>
              <b className="dat-type">{cou.data.today_vs_yesterday_deaths}</b>
            </div>
            <div className="sor">
              <p>Today vs Yesterday Open Cases:</p>
              <b className="dat-type">{cou.data.today_vs_yesterday_open_cases}</b>
            </div>
            <div className="sor">
              <p>Today vs Yesterday Recovered:</p>
              <b className="dat-type">{cou.data.today_vs_yesterday_recovered}</b>
            </div>
            <div className="sor">
              <p>Yesterday Confirmed:</p>
              <b className="dat-type">{cou.data.yesterday_confirmed}</b>
            </div>
            <div className="sor">
              <p>Yesterday Deaths:</p>
              <b className="dat-type">{cou.data.yesterday_deaths}</b>
            </div>
            <div className="sor">
              <p>Yesterday Open Cases:</p>
              <b className="dat-type">{cou.data.yesterday_open_cases}</b>
            </div>
            <div className="sor">
              <p>Yesterday Recovered:</p>
              <b className="dat-type">{cou.data.yesterday_recovered}</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
