import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux/cakes/cakeActions";

function CakeContainer() {
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();

  const [number, setNumber] = useState("");

  const handleBuyCake = (number) => {
    dispatch(buyCake(number));
    setNumber("");
  };

  return (
    <div>
      <h2>Number of cakes: {numberOfCakes}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => handleBuyCake(number)}>Buy Cake</button>
    </div>
  );
}

export default CakeContainer;
