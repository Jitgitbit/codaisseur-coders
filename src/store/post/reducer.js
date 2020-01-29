const initialState = { post: null, comments: [] };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "post/FETCHED": {
      // => Ask yourself: what is action.payload?
      return action.payload;
    }
    default: {
      return state;
    }
  }
}