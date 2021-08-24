import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./components/lib";
import reportWebVitals from "./reportWebVitals";
import { createStore, applyMiddleware } from "redux";
import allReducers from "./redux/reducers";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import "./index.css";

const store = createStore(allReducers, composeWithDevTools(applyMiddleware(ReduxThunk)));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
