import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { setNotify } from '../../redux/reducers/notifyReducer';

export default function ConfirmDialog(props) {
    const dispatch = useDispatch();
    const notifyOpen = useSelector(state => state.notifyReducer.notifyOpen);
    const notifyTitle = useSelector(state => state.notifyReducer.notifyTitle);

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
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
          <Button onClick={props.onClick} color="primary">
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