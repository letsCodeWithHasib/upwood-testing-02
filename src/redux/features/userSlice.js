import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    firstName: "",
    lastName: "",
  },
  reducers: {
    setInfo: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
    deleteInfo: (state) => {
      return {
        ...state,
        firstName: "",
        lastName: "",
      };
    },
  },
});

// Correctly destructure the actions
const { setInfo, deleteInfo } = userSlice.actions;

export { setInfo, deleteInfo }; // Export actions for use in components
export default userSlice.reducer;
