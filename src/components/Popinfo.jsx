import * as React from 'react';
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
import { assetsData } from '../data/dummy';

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






const Popinfo = (props) => {

  const [connect, setConnect] = React.useState(0);


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  
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
              <div style={{ width: "350px", height: "200px", backgroundColor: "#ebf1f5" }} alignItems="center" >
                <Button style={{ margin: "15px", position:"center"}} variant="filled" startIcon={<img width="20" src={props.image} alt="" />}>
                </Button>
  
                <Autocomplete
                  id="country-select-demo"
                  options={props.dataSource}
                  autoHighlight
                  asset={connect}
                  onChange={(event, newValue) => {
                    setConnect(newValue);
                  }}  
                  getOptionLabel={(option) => option.label}
                  renderOption={(props, option) => (
                    <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                      <img
                        loading="lazy"
                        width="20"
                        src={assetsData[option.id].image}
                        alt=""
                      />
                      {assetsData[option.id].label}
                    </Box>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Route Deposits To "
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                      }}
                    />
                  )}
                />
  
                <TextField
                  autoFocus
                  margin="normal"
                  id="name"
                  label="Leave a Note - Optional"
                  type="text"
                  fullWidth
                  variant="outlined"
                />
  
  
              </div>
            </DialogContent>
            <DialogContent dividers>
              <div>
          <div>
          <h3 >1. Invite for settle</h3><p> 2 Your admin approval</p><p> 3 Counterparty admin approval</p>
          </div>
              </div>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleClose}>Invite</Button>
            </DialogActions>
          </Dialog>
        </Modal>
      </div>
    );

}

export default Popinfo;
