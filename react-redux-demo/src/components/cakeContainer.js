import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux/cakes/cakeActions";

function CakeContainer() {
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();

  const handleBuyCake = () => {
    dispatch(buyCake());
  };

  return (
    <div>
      <h2>Number of cakes: {numberOfCakes}</h2>
      <button onClick={handleBuyCake}>Buy Cake</button>
    </div>
  );
}

export default CakeContainer;
