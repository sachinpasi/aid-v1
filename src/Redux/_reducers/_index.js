import { combineReducers } from "redux";

import userReducer from "../_features/_userSlice";
import serviceBookingReducer from "../_features/_serviceBookingSlice";

const reducers = combineReducers({
  userReducer,
  serviceBookingReducer,
});

export default reducers;
