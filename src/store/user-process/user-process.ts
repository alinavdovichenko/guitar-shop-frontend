import {createSlice} from '@reduxjs/toolkit';
import {UserProcess} from '../../types/state';
import {checkAuthAction, loginAction} from '../api-actions';
import {NameSpace, AuthorizationStatus} from '../../consts';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userConnect:  null,
};

export const userSlice = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    assignauthorizationStatusByDefault: (state) => {
      state.authorizationStatus = AuthorizationStatus.Unknown;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, {payload}) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userConnect = payload;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.userConnect = action.payload;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  },
});

export const {assignauthorizationStatusByDefault} = userSlice.actions;
