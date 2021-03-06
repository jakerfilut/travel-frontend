import React, { useState } from "react";

function List({ place }) {
  let img;
  if (place.photo) {
    img = place.photo.images.small.url;
  } else {
    img = `https://cdn.otstatic.com/legacy-cw/default2-original.png`;
  }

  if (place.name) {
    return (
      <div class="card mb-3">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src={img} class="card-img" alt={place.name} />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{place.name}</h5>
              <p class="card-text">{place.description}</p>
              <p class="card-text">
                <small class="text-muted">{place.ranking}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default List;
