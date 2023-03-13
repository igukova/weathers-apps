import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form className="row gx-3 gy-2 align-items-center" id="search-line">
        <div className="col-sm-3">
          <label className="visually-hidden" for="specificSizeInputCity">
            City
          </label>
          <input
            type="text"
            class="form-control"
            id="specificSizeInputCity"
            placeholder="City"
          />
        </div>

        <div className="col-auto">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="autoSizingCheck2"
            />
            <label className="form-check-label" for="autoSizingCheck2">
              Set as default
            </label>
          </div>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary" id="search-button">
            Search
          </button>
        </div>
      </form>
      <div className="today">
        <div className="row">
          <div className="col" id="current-city">
            <h2 id="city">
              <strong>New York</strong>
            </h2>
            <h5 id="date"></h5>
            <h5 id="time"></h5>
          </div>
          <div className="col" id="current-temperature">
            <span className="temperature" id="temperature">
              29{" "}
            </span>
            <span class="units">
              ºC |{" "}
              <a href="#" id="farenheit-link">
                ºF{" "}
              </a>
            </span>
          </div>
          <div class="col" id="current-conditions">
            ☁ <span id="description">Clouds</span>
            <br />
            💦Humidity: <span id="humidity">19</span>%<br />
            💨 Wind: <span id="wind-speed">2</span> km/h
          </div>
        </div>
      </div>
    </div>
  );
}
