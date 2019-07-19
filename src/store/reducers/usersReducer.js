import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";
const initialState = {
  users: null,
  user: null,
  comments: null,
};
// Reducer cases
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USERS:
      return updateObject(state, { users: action.users });
    case actionTypes.GET_USER:
      return updateObject(state, { user: action.user });
    case actionTypes.GET_COMMENTS:
      return updateObject(state, { comments: action.comments });
    default:
      return state;
  }
};

export default reducer;
