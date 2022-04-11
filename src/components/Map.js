import React from "react";
import GoogleMapReact from "google-map-react";

function Map({ setChildClicked, setCoords, setBounds, coords }) {
  return (
    <div style={{ height: "50vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCpNymnOeCavZbbvnMFuF947dI0oBGr2H0" }}
        defaultCenter={{ lat: 0, lng: 0 }}
        center={coords}
        defaultZoom={16}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
      ></GoogleMapReact>
    </div>
  );
}

export default Map;
