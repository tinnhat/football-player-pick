import { takeEvery } from "redux-saga/effects";
import { addPlayerPick } from "./actions/playerActions";
import { ADD_PLAYER_PICK } from "./constant";

export function* mySaga() {
  yield takeEvery(ADD_PLAYER_PICK, addPlayerPick);
}
