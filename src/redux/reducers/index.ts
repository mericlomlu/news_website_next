import { combineReducers } from "redux";

// Import all reducers
import topHeadlinesReducer from "./topHeadlinesReducer";

const reducers = combineReducers({
  topHeadlines: topHeadlinesReducer,
});

export default reducers;