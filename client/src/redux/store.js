import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer";
import thunk from "redux-thunk";
// npm i "redux-devtools-extension"
import { composeWithDevTools } from "redux-devtools-extension";

// Create recibe 1 Reducer 2 Configuraciones
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
