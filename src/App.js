import "./App.css";
import Header from "./components/Header";
import ProductContainer from "./components/PoductContainer";
import Banner from "./images/Banner/Banner.jpg";
import store from "./store";
import { Provider, useSelector } from "react-redux";
import Cart from "./components/Cart";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Cart />
        <div className="landing-banner">
          <img src={Banner} />
          <div class="banner-text">
            <h2>Get food deliverd</h2>
            <a href="">Shop now</a>
          </div>
        </div>
        <ProductContainer />
      </div>
    </Provider>
  );
}

export default App;
