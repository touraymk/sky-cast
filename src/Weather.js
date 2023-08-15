import React from "react";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input type="search" placeholder="Enter city.." className="col-7" />
        <button type="submit">🔎</button>
        <button type="button">📍</button>
      </form>

      <div className="row mt-4">
        <div className="m-3">
          <h1>Bridgetown</h1>
          <p>Bridgetown, Monday 22:00</p>
        </div>
      </div>
    </div>
  );
}
