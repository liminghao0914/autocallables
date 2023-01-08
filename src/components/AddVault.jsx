
import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';




const AddVault = () => {
  const [modal ] = useState(false);


  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (


<div  style={{ display: "flex", justifyContent: "right", alignItems:"right", margin: "10px" }} >
      <Button   variant="outlined" onClick={handleClickOpen}>
        + Add Vault
      </Button>
      <Dialog open={open} onClose={handleClose} >
        <DialogTitle sx={{ m: 0, p: 2 }} >Create Vault Account</DialogTitle>
        <DialogContent dividers>
          <DialogContentText>
            Account Name.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Vault Name"
            type="text"
            fullWidth
            variant="contained"
          />
        </DialogContent>        
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>


  );
}

export default AddVault;
