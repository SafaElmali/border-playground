import { Fragment } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyles from './styles/GlobalStyles';
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <Fragment>
    <GlobalStyles />
    <App />
  </Fragment>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
