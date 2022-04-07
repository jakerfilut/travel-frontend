import React from "react";
import GoogleMapReact from "google-map-react";

function Map({ setCoords, setBounds, coords }) {
  return (
    <div>
      The map will go here
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCpNymnOeCavZbbvnMFuF947dI0oBGr2H0" }}
          defaultCenter={coords}
          center={coords}
          defaultZoom={14}
          margin={[50, 50, 50, 50]}
          options={""}
          onChange={(e) => {
            setCoords({ lat: e.center.lat, lng: e.center.lng });
            setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
          }}
          onChildClick={""}
        ></GoogleMapReact>
      </div>
    </div>
  );
}

export default Map;
