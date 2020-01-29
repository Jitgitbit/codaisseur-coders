import api from "../../api"; //check the structure!

export function fetchPost(id) {
  return function thunk(dispatch, getState) {
    api(`/posts/${id}`)
      .then(post => {
        dispatch(setPost(post));
        console.log(post);
      })
      api(`/posts/${id}/comments`)
      .then(postComments => {
        dispatch(setPostComments(postComments));
        console.log(postComments);
        //dispatch(setPostComments())
      })
  }
}

export function setPost(post) {
  return {
    type: "post/FETCHED",
    payload: post
  };
}
export function setPostComments(postComments) {
  return {
    type: 'post/COMMENTS_FETCHED',
    payload: postComments
  }
}