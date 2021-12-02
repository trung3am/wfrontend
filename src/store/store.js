import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import shopReducer from "./reducers";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./root.saga";

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware, thunk]
// use this to show redux dev tool
const store = createStore(
  shopReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

sagaMiddleware.run(rootSaga)

// const store = createStore(shopReducer, applyMiddleware(thunk));

export default store;
