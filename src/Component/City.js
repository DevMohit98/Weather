import React from "react";
import "../App.css";
import moment from "moment";
import { useGlobalContext } from "../Component/Context";
import { AiOutlineSearch } from "react-icons/ai";
const City = () => {
  const date = new Date().toLocaleDateString();
  const { query, setQuery, HandleSubmit, WeatherData } = useGlobalContext();
  return (
    <section>
      <div className="p-4 d-flex justify-content-center align-items-center">
        <div className="input-group flex-nowrap">
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          ></input>
          <button
            type="submit"
            className="input-group-text"
            id="addon-wrapping"
            onClick={HandleSubmit}
          >
            <AiOutlineSearch className="search-icon" />
          </button>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center p-2">
        <div className="time-date text-center">
          <h1>{moment().format("LT")}</h1>
          <h1>{moment({ date }).format("MMM ,D, YYYY")} </h1>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center flex-column p-2">
        <div className="d-flex justify-content-around align-items-center">
          {WeatherData.Weather.map((items) => {
            const { icon, index } = items;
            return (
              <div key={index}>
                <img
                  src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                  alt="weather-icon"
                ></img>
              </div>
            );
          })}
          <h1 className="temprature">{WeatherData.Main.temp}</h1>
        </div>
        {WeatherData.Weather.map((items) => {
          const { index, description } = items;
          return (
            <div key={index}>
              <h1 className="weather-discription">{description}</h1>
            </div>
          );
        })}
      </div>
      <div className="weather-stats d-flex justify-content-around text-center  p-2">
        <div className="humidity d-flex flex-column">
          <h1 className="weather-more-data">Humidity</h1>
          <h1 className="weather-more-sub-data">
            {WeatherData.Main.humidity} %
          </h1>
        </div>
        <div className="wind-speed d-flex flex-column">
          <h1 className="weather-more-data">Wind Speed</h1>
          <h1 className="weather-more-sub-data">
            {WeatherData.Wind.speed} km/j
          </h1>
        </div>
      </div>
    </section>
  );
};
export default City;
