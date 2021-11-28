import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";

// store - globalised state it holds all the data all your data in the app here

//action describes what you want to do just a name in this case it will be increment a function that returns an object

const increment = () => {
  return {
    type: "INCREMENT",
  };
};

const decrement = () => {
  return {
    type: "DECREMENT",
  };
};
//REDUCER HOW YOUR ACTIONS TRANSFORM THE STATE INTO THE NEXT STATE
// this is the inital state
const counter = (state =0, action) => {
switch(action.type){
  case "INCREMENT";
  return state + 1
  case "DECREMENT";
  return state -1;
}
}

let store = createStore(counter);

//display it in the console.

store.subscribe(() => console.log(store.getState()))
// diSPATCH HOW IT IS GOING TO DO IT ALL
// display the one you want
store.dispatch(increment())
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
