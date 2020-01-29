// import { combineReducers } from "redux";

// export default combineReducers({
//   havingFun: havingFunReducer,
//   // we can add more "slice" subreducers here later on...
// });
// function havingFunReducer(state = "yes", action) {
//   switch (action.type) {
//     case "SET_HAVING_FUN": {
//       return action.payload;
//     }
//     default: {
//       return state;
//     }
//   }
// }
import { combineReducers } from "redux";
import developersReducer from "./developers/reducer";
import postReducer from './post/reducer';

export default combineReducers({
  developersReducer, postReducer
});