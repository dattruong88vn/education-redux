const redux = require("redux");

const { createStore } = redux;

const BUY_CAKE = "BUY_CAKE";

// action creator
function buyCake() {
  return {
    type: BUY_CAKE,
  };
}

// initial state
const initialState = {
  numberOfCakes: 10,
};

// reducer
const reducer = (state = initialState, action) => {
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

// store
const store = createStore(reducer);

// get state
console.log("initial state", store.getState());

// dispatch action
store.dispatch(buyCake());

console.log("state", store.getState());
store.dispatch(buyCake());
console.log("state", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("update state", store.getState());
});

store.dispatch(buyCake());
store.dispatch(buyCake());
console.log("state", store.getState());
unsubscribe();
