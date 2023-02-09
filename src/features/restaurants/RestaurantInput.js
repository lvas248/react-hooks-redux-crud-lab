import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { restaurantAdded } from './restaurantsSlice'
function RestaurantInput() {

  const [ text, setText ] = useState('')
  const dispatch = useDispatch()

  function submitRestaurant(e){
    e.preventDefault()
    dispatch(restaurantAdded(text))
    setText('')
  }

  return (
    <div>
      Form
      <form onSubmit={submitRestaurant}>
        <div>
          <label>Name:</label>
          <input label='Name' value={text} onChange={e=>setText(e.target.value)} />
        </div>
        <button>Add Restaurant</button>
      </form>
    </div>);
}

export default RestaurantInput;
