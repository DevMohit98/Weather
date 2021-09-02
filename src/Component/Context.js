import React, { useContext, useEffect, useState } from "react";
const url = "https://api.openweathermap.org/data/2.5/weather?q=";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("London");
  const [WeatherData, setWeatherData] = useState({
    Main: {},
    Weather: [],
    Wind: {},
  });
  const mainurl = `${url}${query}&appid=${process.env.REACT_APP_WEATHER_KEY}&units=metric`;
  const fetchWeather = async () => {
    const response = await fetch(mainurl);
    const data = await response.json();
    setWeatherData({
      Main: data.main,
      Weather: data.weather,
      Wind: data.wind,
    });
  };
  useEffect(() => {
    fetchWeather();
  }, []);
  const HandleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };
  return (
    <AppContext.Provider
      value={{
        query,
        setQuery,
        WeatherData,
        HandleSubmit,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
