const initialState = { data: null, comments: [] };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "post/FETCHED": {
      // => Ask yourself: what is action.payload?
      return {
        ...state,
        data: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}