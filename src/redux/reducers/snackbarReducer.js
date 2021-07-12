import * as actions from '../constants';

const initialState = {
  snackbarOpen: false,
  snackbarType: "success",
  snackbarMessage: ""
};

export const snackbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_SNACKBAR:
      const { snackbarOpen, snackbarMessage, snackbarType } = action;
      return {
        ...state,
        snackbarOpen,
        snackbarType,
        snackbarMessage
      };
    default:
      return state;
  }
};

export const setSnackbar = (
    snackbarOpen,
    snackbarType = "success",
    snackbarMessage = ""
  ) => ({
    type: actions.SET_SNACKBAR,
    snackbarOpen,
    snackbarType,
    snackbarMessage
  });