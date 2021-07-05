import { createSlice } from "@reduxjs/toolkit";

const showBookingWidgetSlice = createSlice({
  name: "showBookingWidget",
  initialState: {
    showBookingWidget: {
      showWidget: false,
    },
  },
  reducers: {
    SHOW_WIDGET: (state, action) => {
      state.showBookingWidget = action.payload;
      console.log(state.showBookingWidget);
    },
    REMOVE_SHOW_WIDGET: (state) => {
      state.showBookingWidget = {
        showWidget: false,
      };
    },
  },
});

export const { SHOW_WIDGET, REMOVE_SHOW_WIDGET } =
  showBookingWidgetSlice.actions;

export const selectShowWidget = (state) =>
  state.showWidgetReducer.showBookingWidget;

export default showBookingWidgetSlice.reducer;
