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
import { assetsData, partnerData } from '../data/dummy';

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






const Popup = (props) => {





  const [open1, setOpen1] = React.useState(false);

  const [connect, setConnect] = React.useState(0);


  const handleOpen1 = () => {
    setOpen1(true);
  };
  const handleClose1 = () => {
    setOpen1(false);
    setOpen(false);
  };





  function ChildModal(props) {

  
    return (
      <div >
        <Button onClick={handleOpen1}>Connect</Button>
        <Modal
        
          hideBackdrop
          open={open1}
          onClose={handleClose1}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Dialog  backgroundColor="#ebf1f5" open={open1} >
            <DialogTitle>Add Exchange Account</DialogTitle>
            <DialogContent dividers>
              <div style={{ width: "350px", height: "200px", backgroundColor: "#ebf1f5" }} alignItems="center" >
                <Button style={{ margin: "15px", position:"center"}} variant="filled" startIcon={<img width="20" src={connect.image} alt="" />}>
                </Button>
  
                <Autocomplete
                  id="country-select-demo"
                  options={props.dataSource}
                  autoHighlight

                  getOptionLabel={(option) => option.label}
                  renderOption={(props, option) => (
                    <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                      <img
                        loading="lazy"
                        width="20"
                        src={assetsData[option.id].image}
                        alt=""
                      />
                      {option.label}
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
          <h3>1. Invite to connect</h3><p>2. Your admin approval</p><p>3. Counterparty admin approval</p>
          </div>
              </div>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose1}>Cancel</Button>
              <Button onClick={handleClose1}>Invite</Button>
            </DialogActions>
          </Dialog>
        </Modal>
      </div>
    );
  }


  const countries = [
    { code: 0, label: 'BTC', phone: '376' },
    {
      code: 1,
      label: 'ETH',
      phone: '971',
    },
    { code: 2, label: 'USDT', phone: '93' },
    {
      code: 3,
      label: 'USDC',
      phone: '1-268',
    },
  ]


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ display: "flex", justifyContent: "right", alignItems: "right", margin: "10px" }}>
      <Button variant="contained" onClick={handleOpen}>{props.title}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >

        <Dialog open={open} >
          <DialogTitle>{props.firstTitle}</DialogTitle>
          <DialogContent dividers>
            <DialogContentText>
            </DialogContentText>
            <Autocomplete
              id="country-select-demo"
              sx={{ width: 350 }}
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
                    src={partnerData[option.id].image}
                    alt=""
                  />
                  {option.label}
                </Box>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Select an Partner"
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: 'new-password', // disable autocomplete and autofill
                  }}
                />
              )}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button ><ChildModal dataSource={assetsData} /></Button>
          </DialogActions>
        </Dialog>

      </Modal>
    </div>


  );
}

export default Popup;
