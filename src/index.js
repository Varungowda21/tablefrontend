import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
// import UseReducer from "./useReducer/userReducer";
// import ReduxToolkit from "./reduxToolkit/reduxToolkit";
import UseState from "./useState/useState";
import reportWebVitals from "./reportWebVitals";
// import { store } from "./reduxToolkit/store";
// import { Provider } from "react-redux";
// console.log(store.getState());

// store.subscribe(() => {
//   console.log(store.getState());
// });
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <UseReducer /> */}
    {/* <Provider store={store}>
      <ReduxToolkit />
    </Provider> */}
    {/* <App /> */}
    <UseState/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
