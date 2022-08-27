import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./Reducer";

const middleware = [thunk];
const store = createStore(
  // eslint-disable-next-line no-undef
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
