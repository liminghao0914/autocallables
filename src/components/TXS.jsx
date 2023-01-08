import React, { useState, useEffect } from 'react';
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
import { Ajax } from '@syncfusion/ej2-base';
import { format } from 'date-fns'



let rows = [
  createData(0, 3, 6.0, 0, "Pending","#FEC90F", "2022-09-12"),
  createData(1, 3, 3.2, 1, "active", "#03c9d7", "2022-09-12"),
  createData(2, 3, 7.0, 4, "done", "#8BE78B","2022-10-12"),
  createData(1, 3, 6.2, 3, "done","#8BE78B", "2022-10-19"),
  createData(3, 0,12.2, 2, "done","#8BE78B", "2022-8-12"),
];


function createData(source, destination, amount, asset, status,statusBg, createdAt) {
  return {
    source,
    destination,
    amount,
    asset,
    status,
    statusBg,
    createdAt,
    history: [
      {
        Type: "Transfer",
        DestAddr: "0x2546BcD3c84621e976D8185a91A922aE77ECEc30",
        TxHash: "0x3bbe99a6146ff79c25d6ba73667d84a327b8bb92da10ee50873ec4a6e454689e",
        TxID: "0x2562a1f91567",
        NetworkFee: "0.001ETH",
        Amount: 6,
        Update: "2020-01-05",
        Signed: "Tom",
        AML: 'N/A',
        Note: "pls accept",
      },
    ],
  };
}

const TXS = () => {
  useEffect(() => {
    const ajax = new Ajax();
    ajax.send();
    ajax.onSuccess = (data: any) => {
      setData([]);
    }
  }, []);

  const [data, setData] = useState('');
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [amount, setAmount] = useState('');
  const [asset, setAsset] = useState('');
  const [note, setNote] = useState('');

  const handleTx = () => {
    rows = [...rows, createData(3, destination.ID, amount, asset.id, "done","#8BE78B", format(new Date(), 'yyyy-mm-dd'))]
    setData(rows)
    handleClose()
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
          <TableCell >
          <Box  sx={{ '& > img': { mr: 1,  } }} {...props}>
                    <img
                      loading="eager"
                      width="30"
                      src={userData[row.source].image}
                      alt=""
                    />
                  </Box>
          </TableCell>
          <TableCell>
            
          <Box  sx={{ '& > img': { mr: 1,  } }} {...props}>
                    <img
                      loading="eager"
                      width="30"
                      src={userData[row.destination].image}
                      alt=""
                    />
                  </Box>
            </TableCell>
          <TableCell>{row.amount}</TableCell>
          <TableCell style={{width: "10px"}} align="right">
          <Box  sx={{ '& > img': { mr: 1,  } }} {...props}>
                    <img
                      loading="eager"
                      width="30"
                      src={assetsData[row.asset].image}
                      alt=""
                    />
                  </Box>
          </TableCell>
          <TableCell align="right">
          <button type = "button"
    style = {{ background: row.statusBg }}
    className = "text-white py-1 px-2 capitalize rounded-2xl text-md" > { row.status} </button>
          </TableCell>
          <TableCell align="right">{row.createdAt}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box style={{ backgroundColor: "#f7f4ef", }} >
                <Typography variant="h6" gutterBottom component="div">
                  History
                </Typography>

                <div >
                  {row.history.map((historyRow) =>
                    <>
                      <div class="history">
                        <p style={{ fontWeight: "bold" }}>Transaction type:</p><p> {historyRow.Type}</p><p style={{ fontWeight: "bold" }}>TX ID:</p><p> {historyRow.TxID}</p>
                      </div>
                      <div class="container">
                        <p style={{ fontWeight: "bold" }}>Transaction Hash:</p><a href="https://goerli.etherscan.io/tx/0x3bbe99a6146ff79c25d6ba73667d84a327b8bb92da10ee50873ec4a6e454689e"> {historyRow.TxHash}</a>
                      </div>
                      <div class="history" >
                        <div><p style={{ fontWeight: "bold" }}>fee:</p><p> {historyRow.NetworkFee}</p></div>
                        <div><p style={{ fontWeight: "bold" }}>amount:</p><p> {historyRow.Amount}</p></div>
                        <div><p style={{ fontWeight: "bold" }}>Created:</p><p> {historyRow.Update}</p></div>
                        <div><p style={{ fontWeight: "bold" }}>Signed:</p><p> {historyRow.Signed}</p></div>
                        <div><p style={{ fontWeight: "bold" }}>AML:</p><p> {historyRow.AML}</p></div>
                        <div><p style={{ fontWeight: "bold" }}>Note:</p><p> {historyRow.Note}</p></div>
                      </div>
                    </>
                  )}
                </div>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </>
    );
  }


  Row.propTypes = {
    row: PropTypes.shape({
      source: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      destination: PropTypes.number.isRequired,
      history: PropTypes.arrayOf(
        PropTypes.shape({
          Amount: PropTypes.number.isRequired,
          Type: PropTypes.string.isRequired,
          DestAddr: PropTypes.string.isRequired,
          TxID: PropTypes.string.isRequired,
          TxHash: PropTypes.string.isRequired,
          NetworkFee: PropTypes.string.isRequired,
          Update: PropTypes.string.isRequired,
          Signed: PropTypes.string.isRequired,
          AML: PropTypes.string.isRequired,
          Note: PropTypes.string.isRequired,
        }),
      ).isRequired,
      asset: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      statusBg: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
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
      <div style={{ display: "flex", justifyContent: "right", alignItems: "left", marginTop: "40px", marginRight: "60px" }}>
        <Button variant="contained" onClick={handleOpen}>Transfer</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Dialog open={open} >
            <DialogTitle>Transfer</DialogTitle>
            <DialogContent dividers>
              <DialogContentText>
              </DialogContentText>
              <Autocomplete
                sx={{ width: 300 }}
                options={assetsData}
                autoHighlight
                getOptionLabel={(option) => option.label}
                asset={asset}
                onChange={(event, newValue) => {
                  setAsset(newValue);
                }}

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
                    type="text"
                    id="asset"
                    margin="dense"
                    label="Asset Name"
                    inputProps={{
                      ...params.inputProps,
                    }}
                  />
                )}
              />

              <Autocomplete
                margin="dense"
                sx={{ width: 300 }}
                options={userData}
                autoHighlight
                getOptionLabel={(option) => option.label}
                asset={destination}
                onChange={(event, newValue) => {
                  setDestination(newValue);
                }}
                renderOption={(props, option) => (
                  <Box component="li" sx={{ '& > img': { mr: 4, flexShrink: 0 } }} {...props}>
                    <img
                      loading="eager"
                      width="20"
                      src={userData[option.ID].image}
                      alt=""
                    />
                    {option.label}
                  </Box>
                )}
                renderInput={(params) => (

                  <TextField
                    {...params}
                    id="destination"
                    type="text"
                    margin="dense"
                    label="Recipient"
                    inputProps={{
                      ...params.inputProps,
                      variant: "standard", // disable autocomplete and autofill
                    }}
                  />
                )}
              />
              <TextField
                autoFocus
                margin="dense"
                onChange={(event) => {
                  setAmount(event.target.value);
                }}
                id="amount"
                type="text"
                label="Net Amount"
                fullWidth
                variant="outlined"
              />
              <TextField
                autoFocus
                margin="dense"
                onChange={(event) => {
                  setNote(event.target.value);
                }}
                id="note"
                type="text"
                label="Internal Note"
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



      <TableContainer style={{ width: "90%", margin: "5%" }} component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell >From</TableCell>
              <TableCell>To</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell align="right">Asset</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Updated @</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.name} row={row} > </Row>
            ))}
          </TableBody>
        </Table>
      </TableContainer>



    </div>
  );
}

export default TXS;
