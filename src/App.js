import React from "react";
import "./App.css";
import City from "./Component/City";
import MoreData from "./Component/MoreData";
const App = () => {
  return (
    <div className="row m-4 ">
      <div className="col-lg-6 col-12 ">
        <div className="container p-3">
          <div className="city-temp">
            <City />
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-12">
        <div className="row">
          <div className="container p-4">
            <div className="col-12">
              <div className="more-data">
                <MoreData />
              </div>
            </div>
            <div className="col-12">
              <div className="forcast"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
