import * as actions from '../constants';

const initialState = {
    notifyOpen: false,
  snackbarType: "success",
  
};

export const notifyReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_NOTIFICATION_DIALOG:
      const { notifyOpen, notifyTitle } = action;
      return {
        ...state,
        notifyOpen,
        notifyTitle
      };
    default:
      return state;
  }
};

export const setNotify = (
    notifyOpen,
    notifyTitle = ""
  ) => ({
    type: actions.SET_NOTIFICATION_DIALOG,
    notifyOpen,
    notifyTitle
  });