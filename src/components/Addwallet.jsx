
import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import { assetsData } from '../data/dummy';






const Addwallet = () => {

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


  const [modal] = useState(false);


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


    <div style={{ display: "flex", justifyContent: "right", alignItems: "right", margin: "10px" }} >
      <Button variant="outlined" onClick={handleClickOpen}>
        + Add Wallet
      </Button>
      <Dialog open={open} onClose={handleClose} >
        <DialogTitle sx={{ m: 0, p: 2 }} >Add Asset Wallet</DialogTitle>
        <DialogContent dividers>
          <DialogContentText>
            Asset Name.
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
                label="Select an Asset"
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
          <Button onClick={handleClose}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>


  );
}

export default Addwallet;
