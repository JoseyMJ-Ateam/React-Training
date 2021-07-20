import React from 'react';
import Button from '@material-ui/core/Button';
import {
        Dialog,
        DialogActions,
        DialogTitle } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { setNotify } from '../../redux/actions/notifyAction';

export default function ConfirmDialog({onConfirm}) {
    const dispatch = useDispatch();
    const notifyOpen = useSelector(state => state.notifyReducer.notifyOpen);
    const notifyTitle = useSelector(state => state.notifyReducer.notifyTitle);

    const handleClose = (event, reason) => {
        if (reason === "backdropClick") {
          return;
        }
        dispatch(setNotify(false, notifyTitle));
      };

  return (
    <div>     
      <Dialog
        open={notifyOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
      >
        <DialogTitle id="alert-dialog-title">{notifyTitle}</DialogTitle>      
        <DialogActions>
          <Button onClick={onConfirm} color="primary">
           Yes
          </Button>
          <Button onClick={handleClose} color="secondary" autoFocus>
           No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}