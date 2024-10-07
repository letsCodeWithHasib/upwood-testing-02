// src/store/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  signUpUserWithEmail,
  signInWithEmail,
  getSession,
  signOut as cognitoSignOut,
  verifyCode as confirmSignUp,
} from "../../libs/cognito";

const initialState = {
  sessionInfo: null, // Store only necessary session info
  authStatus: "Loading", // can be 'Loading', 'SignedIn', 'SignedOut', 'Error', 'Verified', 'VerificationFailed'
  error: null, // To store error messages
};

// Thunk for signing in
export const signIn = createAsyncThunk(
  "auth/signIn",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const session = await signInWithEmail(email, password);
      console.log(session);
      // Return only necessary data, e.g., tokens or user info
      return {
        accessToken: session.getAccessToken().getJwtToken(),
        idToken: session.getIdToken().getJwtToken(),
        // Add other necessary fields
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Thunk for signing up
export const signUp = createAsyncThunk(
  "auth/signUp",
  async ({ email, password, givenName, familyName }, { rejectWithValue }) => {
    try {
      const response = await signUpUserWithEmail(
        email,
        password,
        givenName,
        familyName
      );
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Thunk for fetching session
export const fetchSession = createAsyncThunk(
  "auth/fetchSession",
  async (_, { rejectWithValue }) => {
    try {
      const session = await getSession();
      return {
        accessToken: session.getAccessToken().getJwtToken(),
        idToken: session.getIdToken().getJwtToken(),
        // Add other necessary fields
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Thunk for signing out
export const signOut = createAsyncThunk("auth/signOut", async () => {
  await cognitoSignOut();
});

// Thunk for verification
export const verifyCode = createAsyncThunk(
  "auth/verifyCode",
  async ({ email, code }, { rejectWithValue }) => {
    try {
      const response = await confirmSignUp(email, code);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signIn.fulfilled, (state, action) => {
        state.authStatus = "SignedIn";
        state.sessionInfo = action.payload; // Store only the necessary fields
        state.error = null;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.authStatus = "Error";
        state.error = action.payload;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.error = null;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(fetchSession.fulfilled, (state, action) => {
        state.authStatus = "SignedIn";
        state.sessionInfo = action.payload; // Store only the necessary fields
        state.error = null;
      })
      .addCase(fetchSession.rejected, (state, action) => {
        state.authStatus = "SignedOut";
        state.sessionInfo = null;
        state.error = action.payload;
      })
      .addCase(signOut.fulfilled, (state) => {
        state.authStatus = "SignedOut";
        state.sessionInfo = null;
        state.error = null;
      })
      .addCase(verifyCode.fulfilled, (state) => {
        state.authStatus = "Verified";
        state.error = null;
      })
      .addCase(verifyCode.rejected, (state, action) => {
        state.authStatus = "VerificationFailed";
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
