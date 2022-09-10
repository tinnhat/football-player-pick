import { ADD_PLAYER_PICK } from "../constant";

export const addPlayerPick = (data) => ({
  type: ADD_PLAYER_PICK,
  payload: data,
});
