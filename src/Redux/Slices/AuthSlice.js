import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    role : localStorage.getItem("role") || "",
    data : localStorage.getItem("data") || {},
    isLoggedIn : localStorage.getItem("isLoggedIn") || false,
}

const autSlice = createSlice({
  name: "auth",
  initialState,
  reducers:{}
});

export default autSlice.reducer;
