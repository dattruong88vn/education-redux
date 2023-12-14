import { Provider } from "react-redux";
import "./App.css";
import CakeContainer from "./components/cakeContainer";
import store from "./redux/store";
import IceCreamContainer from "./components/iceCreamContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <IceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
