import React from "react";
import "../App.css";
import moment from "moment";
import { useGlobalContext } from "./Context";
const Forcast = () => {
  const { Forecast } = useGlobalContext();
  return (
    <section className="p-3 d-flex justify-content-center align-items-center">
      {Forecast.List.map((items) => {
        const { index, weather, main, dt_txt } = items;
        return (
          <div key={index} className="forecast col-lg-6 col-md-4 col-sm-4">
            <div className="forecaste-time pt-4">
              <h1 className="text-center">{moment(dt_txt).format("dddd")}</h1>
              <h1 className="text-center">{moment(dt_txt).format("h:mm a")}</h1>
            </div>

            {weather.map((details) => {
              const { description, icon, id } = details;
              return (
                <div
                  key={id}
                  className="d-flex justify-content-center align-items-center flex-column mb-4"
                >
                  <img
                    src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                    alt="weather-icon"
                  ></img>
                  <h1 className="forcast-discription">{description}</h1>
                </div>
              );
            })}
            <h1 className="text-center forecast-temp pb-2">{main.temp}</h1>
          </div>
        );
      })}
    </section>
  );
};
export default Forcast;
