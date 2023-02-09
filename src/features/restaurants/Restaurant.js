import React from "react";
import ReviewsContainer from "../reviews/ReviewsContainer";
import { useDispatch } from "react-redux";
import { restaurantRemoved } from "./restaurantsSlice";

function Restaurant({ restaurant }) {

  const dispatch = useDispatch()

  function onDeleteClick(){
    dispatch(restaurantRemoved(restaurant.id))
  }
  
  return (
    <div>
      <li>
        {restaurant.name}
        <button onClick={onDeleteClick}> Delete Restaurant </button>
        <ReviewsContainer restaurant={restaurant} />
      </li>
    </div>
  );
}

export default Restaurant;
