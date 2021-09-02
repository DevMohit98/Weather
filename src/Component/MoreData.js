import React from "react";
import { useGlobalContext } from "../Component/Context";
import {
  WiThermometer,
  WiHumidity,
  WiCloud,
  WiBarometer,
  WiWindy,
  WiCloudyGusts,
  WiWindDeg,
} from "react-icons/wi";

import "../App.css";
const MoreData = () => {
  const { WeatherData } = useGlobalContext();
  const Style = {
    backgroundColor: "#fafafa",
    borderColor: "#fafafa",
  };
  return (
    <section className="p-3">
      <div className="row p-3" style={Style}>
        <div className=" column-1 col-lg-4 col-md-4 col-sm-4 d-flex justify-content-center align-items-center flex-column">
          <div className="current-temp d-flex justify-content-center align-items-center px-3">
            {WeatherData.Weather.map((items) => {
              const { icon, index } = items;
              return (
                <div key={index}>
                  <img
                    src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                    className="icon-size"
                    alt="icon"
                  />
                </div>
              );
            })}
            <h1>{WeatherData.Main.temp}</h1>
          </div>
          <div className="feels-like d-flex justify-content-center align-items-center px-3">
            <WiThermometer className="icon-size" />
            <h1>{WeatherData.Main.feels_like}</h1>
          </div>
          <div className="feels-like d-flex justify-content-center align-items-center px-3">
            <WiBarometer className="icon-size" />
            <h1>{WeatherData.Main.pressure}</h1>
          </div>
        </div>
        <div className="column-2 col-lg-4 col-md-4 col-sm-4">
          <div className="humidity d-flex justify-content-center align-items-center px-3">
            <WiHumidity className="icon-size" />
            <h1>{WeatherData.Main.humidity}%</h1>
          </div>
          <div className="cloud d-flex justify-content-center align-items-center px-3">
            <WiCloud className="icon-size" />
            <h1>{WeatherData.Main.humidity}</h1>
          </div>
          <div className="wind-speed d-flex justify-content-center align-items-center px-3">
            <WiWindy className="icon-size" />
            <h1>{WeatherData.Wind.speed}</h1>
          </div>
        </div>
        <div className=" column-3 col-lg-4 col-md-4 col-sm-4">
          <div className="wind-direction d-flex justify-content-center align-items-center px-3">
            <WiWindDeg className="icon-size" />
            <h1>{WeatherData.Wind.deg}</h1>
          </div>
          <div className="wind-gust d-flex justify-content-center align-items-center px-3">
            <WiCloudyGusts className="icon-size" />
            <h1>{WeatherData.Wind.gust}</h1>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MoreData;
