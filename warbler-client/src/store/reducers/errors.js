import { ADD_ERROR, REMOVE_ERROR } from "../actionTypes";
// same thing as "../actionTypes/index"

export default (state = { message: null }, action) => {
  switch (action.type) {
    case ADD_ERROR:
      return { ...state, message: action.error };
    case REMOVE_ERROR:
      // if not message goes back to being null
      return { ...state, message: null };
    default:
    // return state by default
      return state;
  }
};
