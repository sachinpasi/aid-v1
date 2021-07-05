import { combineReducers } from "redux";

import userReducer from "../_features/_userSlice";
import serviceBookingReducer from "../_features/_serviceBookingSlice";
import showWidgetReducer from "../_features/_showBookingWidgetSlice";

const reducers = combineReducers({
  userReducer,
  serviceBookingReducer,
  showWidgetReducer,
});

export default reducers;
