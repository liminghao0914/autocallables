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
import { assetsData } from '../data/dummy';
import TextareaAutosize from '@mui/material/TextareaAutosize';


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






const InfoAccount = (props) => {

  const [connect, setConnect] = useState(0);

  const [address, setAddress] = useState(0);

  const [open, setOpen] = useState(false);
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
            <DialogTitle>{props.vaultName}</DialogTitle>
            <DialogContent dividers>
              <div style={{ width: "450px", height: "250px", backgroundColor: "#ebf1f5" }} alignItems="center" >
                <Button style={{ margin: "15px"
              }} 
                
                variant="filled" startIcon={<img width="20" src={props.display} alt="" />}>
                </Button>
  
                <Autocomplete
                  id="country-select-demo"
                  options={props.dataSource}
                  autoHighlight
                  asset={connect}
                  onChange={(event, newValue) => {
                    setConnect(newValue);
                    setAddress(props.dataSource1[0][connect.label] )
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
                      label="Assets "
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                      }}
                    />
                  )}
                />




  
  
              </div>
            </DialogContent>
            <DialogContent dividers>
              <div>
          <div>
          <h3 ></h3>


    
          <p className="text-lg text-gray-400">{connect.label} Address:</p>
<TextareaAutosize
  maxRows={4}
  aria-label="maximum height"
  placeholder="Maximum 4 rows"
  defaultValue="1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa "
  value={address}
  style={{ width: "100%", padding: "20px", fontWeight:"bold" }}
/>
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

export default InfoAccount;
