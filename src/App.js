import React, { useState, useEffect } from "react";
import Map from "./components/Map";

function App() {
  const [places, setPlaces] = useState([]);
  const [coords, setCoords] = useState({ lat: 0, lng: 0 });
  const [bounds, setBounds] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      // ({ coordinates: { latitude, longitude } }) => {
      //   setCoordinates({ lat: latitude, lng: longitude });
      // }
      (data) =>
        setCoords({ lat: data.coords.latitude, lng: data.coords.longitude })
      // console.log(data.coords)
    );
  }, []);

  console.log(coords);

  return (
    <div className="App">
      <div>Test</div>
      <div>
        <Map setCoords={setCoords} setBounds={setBounds} coords={coords} />
      </div>
    </div>
  );
}

export default App;
