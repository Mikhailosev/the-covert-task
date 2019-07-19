import axios from "../../axios-instance";
import * as actionTypes from "./actionTypes";
// Reducer functions
export const get_usersf = res => {
  return {
    type: actionTypes.GET_USERS,
    users: res,
  };
};
export const get_users = () => {
  return (dispatch, getState) => {
    axios.get("/users.json").then(res => {
      console.log(res.data);
      dispatch(get_usersf(res.data));
    });
  };
};
export const get_userf = user => {
  return {
    type: actionTypes.GET_USER,
    user: user,
  };
};
export const get_user = user => {
  return dispatch => {
    dispatch(get_userf(user));
  };
};
export const get_comments = () => {
  return (dispatch, getState) => {
    axios.get("/comments.json").then(res => {
      console.log(Object.values(res.data));
      dispatch(get_commentsf(Object.values(res.data)));
    });
  };
};
export const get_commentsf = comments => {
  return {
    type: actionTypes.GET_COMMENTS,
    comments: comments,
  };
};
