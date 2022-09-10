import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { mySaga } from "./mySaga";
import { playerReducer } from "./reducer/playerReducer";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
export const store = createStore(
  playerReducer,
  applyMiddleware(sagaMiddleware)
);

// then run the saga
sagaMiddleware.run(mySaga);
