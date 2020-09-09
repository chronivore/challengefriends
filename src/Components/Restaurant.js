
import React, { useState, useEffect } from "react";
import Location from "./Location";
import { Container, Row, Col, Card, CardTitle, Table } from "reactstrap";

const Restaurant = (props) => {
  const [type, setType] = useState("");
  const [id, setId] = useState(0);
  const [results, setResults] = useState([]);

  let baseURL = `https://developers.zomato.com/api/v2.1/geocode?lat=${props.latitude}&lon=${props.longitude}`;

  let key = "5ef31ced36b03ca58ae4990ca377ac22";//"8465018d451d14f4c5119c2cff79427e";

  useEffect(() => {
    fetchLocation();
  }, []);

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
        console.log(loc.location.entity_type, loc.location.entity_id, loc.location.title, loc.location.city_name);
      setType(loc.location.entity_type);
      setId(loc.location.entity_id);
      fetchRestaurant(loc.location.entity_id,loc.location.entity_type);
    })
    .catch(err => console.log(err));
  }
  

  const fetchRestaurant = (idCall, typeCall) => {
      console.log("id,type",id, type);
    fetch(
      `https://developers.zomato.com/api/v2.1/location_details?entity_id=${idCall}&entity_type=${typeCall}`,
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
        setResults(rest.best_rated_restaurant);
      })
      .catch(err => console.log(err));
  };

  const mapper = () => {
    return results.map((rest, index) => {
        return (
            <tr key={rest.restaurant.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{rest.restaurant.name}</td>
                    <td>{rest.restaurant.cuisines}</td>
                    <td>{rest.restaurant.user_rating.aggregate_rating}</td>
                    <td>
                    </td>
                </tr>
        )
    })
  }

  return (
    <>
           <h3>Best Restaurants near You!</h3> 
           <hr/>
           <Table striped>
               <thead>
                   <tr>
                       <th>#</th>
                       <th>Restaurant Name</th>
                       <th>Cuisine</th>
                       <th>Rating</th>
                   </tr>
               </thead>
               <tbody>
                    {mapper()}
               </tbody>
           </Table>
        </>
  );
};


export default Restaurant;
