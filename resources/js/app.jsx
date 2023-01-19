import "./bootstrap";

import React from "react";

import ReactDOM from "react-dom";

// import App from './components/App';
import Checkout from "./components/checkout";
import SignInSide from "./pages";

if (document.getElementById("app")) {
    ReactDOM.render(<SignInSide />, document.getElementById("app"));
}
