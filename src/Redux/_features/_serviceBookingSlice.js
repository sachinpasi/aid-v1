import { createSlice } from "@reduxjs/toolkit";

const serviceBookingSlice = createSlice({
  name: "serviceBooking",
  initialState: {
    serviceBooking: {
      name: null,
      date: null,
      mobileNo: null,
      SelectedParentService: null,
      SelectedGrandChildService: null,
      SelectedChildService: null,
      time: null,
    },
  },
  reducers: {
    BOOKSERVICE: (state, action) => {
      state.serviceBooking = action.payload;
      console.log(state.serviceBooking);
    },
  },
});

export const { BOOKSERVICE } = serviceBookingSlice.actions;

export const selectServiceBooking = (state) =>
  state.serviceBookingReducer.serviceBooking;

export default serviceBookingSlice.reducer;
