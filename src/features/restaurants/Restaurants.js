import React from "react";
import Restaurant from './Restaurant'

function Restaurants({restaurants}) {

 
  const renderRestaurants = restaurants.map( r => {
    return <Restaurant key={r.id} restaurant={r}/>
  })

  
  return (
    <ul>
      <span>Restaurants</span>
      {renderRestaurants}
    </ul>
    )
}

export default Restaurants;
