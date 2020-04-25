import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./reducers";

export default function configureStore(preloadedState) {
  const middleware = [thunk, logger];
  const composeEnhancers =
    (typeof window !== "undefined" &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
  const enhancer = composeEnhancers(applyMiddleware(...middleware));
  const store = createStore(rootReducer, preloadedState, enhancer);

  return store;
}
