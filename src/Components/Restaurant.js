import React, { useState, useEffect } from "react";
import Location from "./Location";

const Restaurant = (props) => {
  const [type, setType] = useState("");
  const [id, setId] = useState(0);

  let baseURL = `https://developers.zomato.com/api/v2.1/geocode?lat=${props.latitude}&lon=${props.longitude}`;

  let key = "8465018d451d14f4c5119c2cff79427e";

  useEffect(() => {
    fetchLocation();
  });

  const fetchLocation =() => {
      fetch(baseURL, {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json",
      "user-key": key,
    }),
  })
    .then((res) => res.json())
    .then((loc) => {
      setType(loc.location.entity_type);
      setId(loc.location.entity_id);
      console.log(loc.location.entity_type, loc.location.entity_id, loc.location.title, loc.location.city_name);
      fetchRestaurant()
    })
    .catch(err => console.log(err));
  }
  

  const fetchRestaurant = () => {
    fetch(
      `https://developers.zomato.com/api/v2.1/location_details?entity_id=${id}&entity_type=${type}
    `,
      {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
          "user-key": key,
        }),
      }
    )
      .then((res) => res.json())
      .then((rest) => {
        console.log(rest.best_rated_restaurant);
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h1>Restaurant</h1>
      {/* {fetchLocation()} */}
    </div>
  );
};

export default Restaurant;
