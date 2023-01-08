import { React, useState } from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';





const InfoDefi = (props) => {


  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  
    return (
      <div >
        <Button onClick={handleOpen}> <img  width='20%' src={props.image}></img></Button>
        <Modal
        
          hideBackdrop
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Dialog  backgroundColor="#ebf1f5" open={open} >
            <DialogTitle>Connect to Exchange</DialogTitle>
            <DialogContent dividers>
              <div style={{ width: "350px", height: "250px", backgroundColor: "#ebf1f5" }} alignItems="center" >
                <Button style={{ margin: "15px", position:"center"}} variant="filled" startIcon={<img width="20" src={props.display} alt="" />}>
                </Button>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Name"
                type="text"
                fullWidth
                variant="outlined"
              />  
              <TextField
                autoFocus
                margin="dense"
                id="apikey"
                label="API key"
                type="text"
                fullWidth
                variant="outlined"
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Private key"
                type="text"
                fullWidth
                variant="outlined"
              />
  
  
              </div>
            </DialogContent>
            <DialogContent dividers>
              <div>
          <div>
          <h3 >1. Fill in the key</h3><p> 2 load the Private Key</p><p> 3 Counterparty admin approval</p>
          </div>
              </div>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleClose}>Connect</Button>
            </DialogActions>
          </Dialog>
        </Modal>
      </div>
    );

}

export default InfoDefi;
