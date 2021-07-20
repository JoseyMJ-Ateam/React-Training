import * as actions from '../constants';

export const setNotify = (notifyOpen, notifyTitle = "") => ({
    type: actions.SET_NOTIFICATION_DIALOG,
    notifyOpen,
    notifyTitle
  });