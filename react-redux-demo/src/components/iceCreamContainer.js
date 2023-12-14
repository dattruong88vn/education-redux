import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../redux/iceCreams/iceCreamActions";

function IceCreamContainer() {
  const numberOfIceCreams = useSelector(
    (state) => state.iceCream.numberOfIceCreams
  );
  const dispatch = useDispatch();

  const handleBuyIceCream = () => {
    dispatch(buyIceCream());
  };

  return (
    <div>
      <h2>Number of ice creams: {numberOfIceCreams}</h2>
      <button onClick={handleBuyIceCream}>Buy Ice Cream</button>
    </div>
  );
}

export default IceCreamContainer;
