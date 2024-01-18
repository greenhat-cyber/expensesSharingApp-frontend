import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api";

export const signInUser = createAsyncThunk(
  "user/signIn",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await api.actionHandler({
        url: api.signInURL,
        method: "POST",
        data: {
          email,
          password,
        },
      });

      let data = await response;
      if (response.status === 200) {
        console.log('====================================');
        console.log(response);
        console.log('====================================');
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

const signInSlice = createSlice({
  name: "user/signIn",
  initialState: {
    signInFetching: false,
    signInSuccess: false,
    signInError: false,
    signInErrorMessage: "",
  },
  reducers: {
    clearsignInState: (state) => {
      state.signInError = false;
      state.signInSuccess = false;
      state.signInFetching = false;

      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInUser.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.signInFetching = false;
        state.signInSuccess = true;
    })
    .addCase(signInUser.rejected, (state, action) => {
        state.signInFetching = false;
        state.signInError = true;
        state.signInErrorMessage = action?.payload;
        console.log(action?.payload);
      })
      .addCase(signInUser.pending, (state) => {
        state.signInFetching = true;
      });
  },
});

export const { clearsignInState } = signInSlice.actions;

export default signInSlice.reducer;
