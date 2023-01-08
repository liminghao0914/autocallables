import { React, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Autocomplete from '@mui/material/Autocomplete';
import { assetsData, userData } from '../data/dummy';
import avatar from '../data/avatar.jpg'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};




let data = userData

const Addlist = (props) => {

  const [name, setName] = useState(0); 

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const addentry = () => {


data=[...data,   { ID: '0', label: name, name: name, image: avatar, status:"active", statusBg:"green" },]

setOpen(false);
console.log("the data is:", data)

  }

  
    return (
      <div >
        <Button onClick={handleOpen}> <img  width='30px' src={props.image}></img></Button>
        <Modal
        
          hideBackdrop
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Dialog  backgroundColor="#ebf1f5" open={open} >
            <DialogTitle>Settlement and Clearance</DialogTitle>
            <DialogContent dividers>
              <div style={{ width: "350px", height: "250px", backgroundColor: "#ebf1f5" }} alignItems="center" >
                <Button style={{ margin: "15px", position:"center"}} variant="filled" startIcon={<img width="20" src={props.display} alt="" />}>
                </Button>

            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Name"
                onChange={(event)=>{
                  setName(event.target.value)

                }}
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
              <Button onClick={addentry}>Connect</Button>
            </DialogActions>
          </Dialog>
        </Modal>
      </div>
    );

}

export default Addlist;
