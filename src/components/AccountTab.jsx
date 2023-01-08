import  React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { assetsData, Vault } from '../data/dummy';

import PropTypes from 'prop-types';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import safeguard1 from "../data/Safeguard.png"
import Button from "@mui/material/Button"
import { Ajax } from '@syncfusion/ej2-base';
import {InfoAccount} from "../components";



let rows = Vault

  
function createData(name,  amount,  status, updateAt) {
  return {
    image: safeguard1,
    name: name,
    amount: amount,
    status: status,
    statusBg: "#8BE78B",
    updateAt: updateAt,
    Accounts: [
      { BTC: "1LQoWist8KkaUXSPKZHNvEyfrEkPHzSsCd",
      ETH: "0x0716a17fbaee714f1e6ab0f9d59edbc5f09815c0",
      USDT: "0x18709e89bd403f470088abdacebe86cc60dda12e",
      USDC: "0xdcef968d416a41cdac0ed8702fac8128a64241a2",
      XRP: "0x98e5b99f2483f22641c596d606c90c70d793afd2",
      LTC: "LP98Q2gPZ9gUhoL5fDji357HPRHxVqWh6j",
      BNB: "0xbe0eb53f46cd790cd13851d5eff43d12404d33e8",
      Doge: "DPDLBAe3RGQ2GiPxDzhgjcmpZCZD8cSBgZ",
      SOL: "9QgXqrgdbVU8KcpfskqJpAXKzbaYQJecgMAruSWoXDkM",
      ADA: "addr1qyq2n3849vf94f6kdrtx47jqgsee7wakg3hwrurhcdvqcn5h6sh3ptdv6sqsakc8ndfr9ztlm8f9qjznwfhe8s2rurcq63h",
    },      
    ],
  };
}


const AccountTab = () => {



  useEffect(() => {

    const ajax = new Ajax();
            ajax.send();
    ajax.onSuccess = (data: any) => {
      setData([]);
    }


}, []);

  const [data, setData] = useState('');
  const [name, setName] = useState('');
  

  
  const handleTx = () => {
  
  rows = [...rows, createData(name, 0,  "active", "2022-10-31")]
  setData(rows)
  setOpen(false);

  }
  
  
  function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
  
    return (   
      <>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell>           

          <div class="acc1">

<InfoAccount dataSource={assetsData} dataSource1={row.Accounts} vaultName={row.name} display={row.image} image={row.image}></InfoAccount>
          </div>


          </TableCell>

          <TableCell component="th" scope="row">
            {row.name}
          </TableCell>
          <TableCell>{row.amount}</TableCell>

          <TableCell align="right">
          <button type = "button"
    style = {{ background: row.statusBg }}
    className = "text-white py-1 px-2 capitalize rounded-2xl text-md" > { row.status} </button>
          </TableCell>

          <TableCell align="right">{row.updateAt}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  History
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>BTC</TableCell>
                      </TableRow>
                      <TableRow>
                      <TableCell>ETH</TableCell>
                      <TableCell>USDT</TableCell>
                      <TableCell>USDC</TableCell>
                      <TableCell align="right">XRP</TableCell>
                      <TableCell align="right">LTC</TableCell>
                      <TableCell align="right">BNB</TableCell>
                      <TableCell align="right">Doge</TableCell>
                      <TableCell align="right">SOL</TableCell>
                      <TableCell align="right">ADA</TableCell>                    
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.Accounts.map((historyRow) => (
                      <TableRow key={historyRow.BTC}>
                        <TableCell component="th" scope="row">
                          {historyRow.BTC}
                        </TableCell>
                        <TableCell>{historyRow.ETH}</TableCell>
                        <TableCell align="right">{historyRow.USDT}</TableCell>
                        <TableCell align="right">
                        {historyRow.USDC}
                        </TableCell>
                        <TableCell align="right">{historyRow.XRP}</TableCell>
                        <TableCell align="right">{historyRow.LTC}</TableCell>
                        <TableCell align="right">{historyRow.BNB}</TableCell>
                        <TableCell align="right">{historyRow.Doge}</TableCell>
                        <TableCell align="right">{historyRow.SOL}</TableCell>
                        <TableCell align="right">{historyRow.ADA}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </>
    );
  }
  
  
  Row.propTypes = {
    row: PropTypes.shape({
      name: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      Accounts: PropTypes.arrayOf(
        PropTypes.shape({
          BTC: PropTypes.string.isRequired,
          ETH: PropTypes.string.isRequired,
          USDT: PropTypes.string.isRequired,
          USDC: PropTypes.string.isRequired,
          XRP: PropTypes.string.isRequired,
          LTC: PropTypes.string.isRequired,
          BNB: PropTypes.string.isRequired,
          Doge: PropTypes.string.isRequired,
          SOL: PropTypes.string.isRequired,
          ADA: PropTypes.string.isRequired,
        }),
      ).isRequired,
      status: PropTypes.string.isRequired,
      statusBg: PropTypes.string.isRequired,
      updateAt: PropTypes.string.isRequired,
    }).isRequired,
  };
  
  

  



  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
  <div>








    <div style={{ display: "flex", justifyContent: "right", alignItems:"right", margin: "10px" }}>
      <Button variant="contained" onClick={handleOpen}>+ Vault</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >

        <Dialog open={open} >
          <DialogTitle>Add Vault</DialogTitle>
          <DialogContent dividers>
            <DialogContentText>
            </DialogContentText>


            

              <TextField
                autoFocus
                margin="dense"
                onChange={(event)=>{
                  setName(event.target.value);
                }}
                id="vaultName"
                type="text"
                label="Vault Name"
                fullWidth
                variant="outlined"
              />


          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleTx}>Submit</Button>
          </DialogActions>
        </Dialog>

      </Modal>
    </div>


    <TableContainer style={{width: "90%", margin:"5%"}} component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell></TableCell>
            <TableCell>Vault</TableCell>
            <TableCell>Amount&nbsp;($)</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Update At</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>


 </div>

  );
}

export default AccountTab;
