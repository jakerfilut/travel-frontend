import React, { useState, useEffect } from "react";
import Map from "./components/Map";
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

  // useEffect(() => {
  //   if (bounds) {
  //     // console.log(bounds.ne.lat.toFixed(6));
  //     // console.log(bounds);
  //     const options = {
  //       method: "GET",
  //       url: `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
  //       params: {
  //         bl_latitude: bounds.sw.lat,
  //         tr_latitude: bounds.ne.lat,
  //         bl_longitude: bounds.sw.lng,
  //         tr_longitude: bounds.ne.lng,
  //         // bl_latitude: "11.847676",
  //         // tr_latitude: "12.838442",
  //         // bl_longitude: "109.095887",
  //         // tr_longitude: "109.149359",
  //         // restaurant_tagcategory_standalone: "10591",
  //         // restaurant_tagcategory: "10591",
  //         // limit: "30",
  //         // currency: "USD",
  //         // open_now: "false",
  //         // lunit: "km",
  //         // lang: "en_US",
  //       },
  //       headers: {
  //         "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
  //         "X-RapidAPI-Key":
  //           "6c0baa9409mshb1ecd42e036b587p14dfacjsne22ee1d72cbc",
  //       },
  //     };

  //     axios
  //       .request(options)
  //       .then(function (response) {
  //         console.log(response.data);
  //       })
  //       .catch(function (error) {
  //         console.error(error);
  //       });
  //   }
  // }, [bounds, type]);

  return (
    <div className="App">
      <div>Test</div>
      <div>
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
