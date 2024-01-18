import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api";

export const signUpUser = createAsyncThunk(
  "user/signUp",
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const response = await api.actionHandler({
        url: api.signUpURL,
        method: "POST",
        data: {
          name,
          email,
          password,
        },
      });

      let data = await response;
      if (response.status <= 201) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user-info", JSON.stringify(response.data.user));
        return data;
      } else {
        return rejectWithValue(data);
      }
    } catch (e) {
      const message =
        (e.response && e.response.error) ||
        e.error ||
        e.toString();
      return rejectWithValue(message);
    }
  }
);

const signUpSlice = createSlice({
  name: "user/signUp",
  initialState: {
    signUpFetching: false,
    signUpSuccess: false,
    signUpError: false,
    signUpErrorMessage: "",
  },
  reducers: {
    clearsignUpState: (state) => {
      state.signUpError = false;
      state.signUpSuccess = false;
      state.signUpFetching = false;

      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.signUpFetching = false;
        state.signUpSuccess = true;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.signUpFetching = false;
        state.signUpError = true;
        state.signUpErrorMessage = action?.payload;
        console.log(action?.payload);
      })
      .addCase(signUpUser.pending, (state) => {
        state.signUpFetching = true;
      });
  },
});

export const { clearsignUpState } = signUpSlice.actions;

export default signUpSlice.reducer;
