import { createStore } from "redux";
import rootReducer from "./reducers/reducers";

const persistedState = localStorage.getItem("reduxState")
    ? JSON.parse(localStorage.getItem("reduxState"))
    : {};

const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem("reduxState", JSON.stringify(state));
});

export default store;
