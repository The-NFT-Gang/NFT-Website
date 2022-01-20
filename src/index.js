import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
import './index.css';
import './App.scss'

// Fonts
import './assets/fonts/LuckiestGuy-Regular.ttf';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);