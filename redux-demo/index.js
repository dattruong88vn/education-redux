const { createStore, combineReducers, applyMiddleware } = require("redux");
const reduxLogger = require("redux-logger");

const logger = reduxLogger.createLogger();

const BUY_CAKE = "BUY_CAKE";
const BUY_ICE_CREAM = "BUY_ICE_CREAM";

// action creator
function buyCake() {
  return {
    type: BUY_CAKE,
  };
}
function buyIceCream() {
  return {
    type: BUY_ICE_CREAM,
  };
}

// initial state
// const initialState = {
//   numberOfCakes: 10,
//   numberOfIceCreams: 20,
// };
const initialCakeState = {
  numberOfCakes: 10,
};
const initialIceCreamState = {
  numberOfIceCreams: 20,
};

// reducer
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE: {
//       return {
//         ...state,
//         numberOfCakes: state.numberOfCakes - 1,
//       };
//     }
//     case BUY_ICE_CREAM: {
//       return {
//         ...state,
//         numberOfIceCreams: state.numberOfIceCreams - 1,
//       };
//     }

//     default: {
//       return state;
//     }
//   }
// };

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE: {
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };
    }

    default: {
      return state;
    }
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM: {
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams - 1,
      };
    }

    default: {
      return state;
    }
  }
};

// store
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});
const store = createStore(rootReducer, applyMiddleware(logger));

// get state
console.log("initial state", store.getState());

// dispatch action
store.dispatch(buyCake());
store.dispatch(buyIceCream());

console.log("state", store.getState());
store.dispatch(buyCake());
console.log("state", store.getState());

// register listener
const unsubscribe = store.subscribe(() => {
  //   console.log("update state", store.getState());
});

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
console.log("state", store.getState());

// unregister
unsubscribe();
