import React, { useState, useEffect } from "react";
import Map from "./components/Map";
import SearchBar from "./components/SearchBar";
import List from "./components/List";
// import { getPlacesData } from "./api/Api";
import axios from "axios";

function App() {
  const [places, setPlaces] = useState([]);
  const [coords, setCoords] = useState({ lat: 0, lng: 0 });
  const [bounds, setBounds] = useState(null);
  const [childClicked, setChildClicked] = useState(null);
  const [type, setType] = useState("restaurants");

  const axios = require("axios");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    if (bounds) {
      const options = {
        method: "GET",
        url: `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
        params: {
          bl_latitude: bounds.sw.lat,
          tr_latitude: bounds.ne.lat,
          bl_longitude: bounds.sw.lng,
          tr_longitude: bounds.ne.lng,
        },
        headers: {
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
          "X-RapidAPI-Key":
            "6c0baa9409mshb1ecd42e036b587p14dfacjsne22ee1d72cbc",
        },
      };

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
          setPlaces(response.data.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  }, [coords, bounds]);
  // console.log(places);

  return (
    <div className="App">
      <div>Test</div>
      <div>
        <SearchBar coords={coords} setCoords={setCoords} />
        {places.map((place) => (
          <List key={Math.random()} place={place} />
        ))}
        <Map
          setCoords={setCoords}
          setBounds={setBounds}
          coords={coords}
          setChildClicked={setChildClicked}
        />
      </div>
    </div>
  );
}

export default App;
