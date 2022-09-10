import { ADD_PLAYER_PICK } from "../constant";

const initialState = {
  arr: [],
};
export const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLAYER_PICK:
      console.log(action);
      return { arr: [...state.arr, action.payload] };
    default:
      return state;
  }
};
