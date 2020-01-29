import api from "../../api"; //check the structure!

export function fetchPost(id) {
  return function thunk(dispatch, getState) {
    api(`/posts/${id}`)
      .then(post => {
        dispatch(setPost(post));
        console.log(post);
      })
  }
}
export function setPost(post) {
  return {
    type: "post/FETCHED",
    payload: post
  };
}