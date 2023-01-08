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

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div >
      <Button onClick={handleOpen}>Connect</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Dialog open={open} >
          <DialogTitle>Connect Exchange Account</DialogTitle>
          <DialogContent dividers>
            <DialogContentText>
            </DialogContentText>
            <Button variant="outlined" style={{ width: "100%",}}  startIcon={<img width="20" src={assetsData[0].image} alt="" />}>
        How to connect to Kranken
      </Button>
          </DialogContent>
          <DialogContent dividers>
            <div>
              <img
                loading="lazy"
                width="20"
                src={assetsData[0].image}
                alt=""

              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
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
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Connect Account</Button>
          </DialogActions>
        </Dialog>
      </Modal>
    </div>
  );
}

const ConEx = () => {

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
    <div style={{ display: "flex", justifyContent: "right", alignItems:"right", margin: "10px" }}>
      <Button variant="outlined" onClick={handleOpen}>+ Exchange Account</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >

        <Dialog open={open} >
          <DialogTitle>Continue</DialogTitle>
          <DialogContent dividers>
            <DialogContentText>
            </DialogContentText>
            <Autocomplete
              id="country-select-demo"
              sx={{ width: 300 }}
              options={countries}
              autoHighlight
              getOptionLabel={(option) => option.label}
              renderOption={(props, option) => (
                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                  <img
                    loading="lazy"
                    width="20"
                    src={assetsData[option.code].image}
                    alt=""
                  />
                  {option.label}
                </Box>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Select an Exchange"
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
            <Button ><ChildModal /></Button>
          </DialogActions>
        </Dialog>

      </Modal>
    </div>


  );
}

export default ConEx;
