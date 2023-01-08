import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Grid from '@mui/material/Unstable_Grid2';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';



function createData(name, apr, strike, maturity, tenor) {
  return { name, apr, strike, maturity, tenor };
}

const rows = [
  createData('16% APR Fixed Earn', '6.0%', "16,670", "12/20/2022", "1d"),
  createData('16% APR Fixed Earn', '9.0%', "16,670", "12/20/2022", "10d"),
  createData('16% APR Fixed Earn', '16.0%', "16,670", "12/20/2022", "15d"),
  createData('16% APR Fixed Earn', '3.7%', "16,670", "12/20/2022", "30d"),
  createData('16% APR Fixed Earn', '16.0%', "16,670", "12/20/2022", "90d"),
  createData('16% APR Fixed Earn', '6.0%', "16,670", "12/20/2022", "1d"),
  createData('16% APR Fixed Earn', '9.0%', "16,670", "12/20/2022", "10d"),
];


const Invest = () => {


  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <div className="grid-container">

      <Grid container spacing={2}>
        <Grid container lg={12} spacing={4} style={{ paddingLeft: "3%", }}>


          <TabContext value={value} >
            <Box sx={{ borderBottom: 'none', borderColor: 'black', }}>
              <div style={{ "padding": "1px", "fontSize": 15, "fontWeight": 600, }}>
                Investment pair
              </div>
              <TabList onChange={handleChange} aria-label="lab API tabs example" >
                <Tab style={{ width: "3%", }} label="BTC" value="1" icon={<img src="/img/btc.png" width="50%" />} iconPosition="start" ></Tab>
                <Tab style={{ width: "3%", }} label="ETH" value="2" icon={<img src="/img/eth.png" width="50%" />} iconPosition="start" ></Tab>
                <Tab style={{ width: "3%", }} label="Others" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">

              <div style={{ "padding": "10px", "fontSize": 20, "fontWeight": 700, }}>
                Settlement pair
              </div>

              <div id="id-symbol" className='flex' style={{ "padding": "10px" }}>
                <div class="flex">
                  <div class="flex">
                    BTC<span role="img" aria-label="swap-right" class="anticon anticon-swap-right"><svg viewBox="0 0 1024 1024" focusable="false" data-icon="swap-right" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                      <path d="M873.1 596.2l-164-208A32 32 0 00684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8z">
                      </path>
                    </svg></span>USDⓢ</div>
                  <p>&emsp;&emsp;&emsp;&emsp;</p>
                  <div class="flex ">BTC<span role="img" aria-label="swap-right" class="anticon anticon-swap-right"><svg viewBox="0 0 1024 1024" focusable="false" data-icon="swap-right" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                    <path d="M873.1 596.2l-164-208A32 32 0 00684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8z">
                    </path>
                  </svg></span>USDT</div>
                </div>
              </div>


              <div style={{
                margin: "12px 0",
                padding: "16px",
                width: "100%",
                background: "#02c8a80d",
                color: "#0f0f0f",
              }} >
                <div style={{ "fontSize": 20, "fontWeight": 700, }}>Sell High and Earn High Yield
                </div>
                <li>Upon maturity, if the market
                  price ≥ strike price, you will receive USDⓢ</li>
                <li>Upon maturity, if the market
                  price &lt; strike price, you will receive BTC</li>
              </div>



              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650, "& td, &  th": { border: 0 } }} size="small" aria-label="a dense table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Settle pair</TableCell>
                      <TableCell align="left">APR</TableCell>
                      <TableCell align="left">Strike Price</TableCell>
                      <TableCell align="left">Maturity</TableCell>
                      <TableCell align="left">Tenor</TableCell>
                      <TableCell align="left"></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}

                      >
                        <TableCell style={{ width: '30%' }} component="th" scope="row" >

                          <div className="flex-container">
                            <img style={{ "width": "12%", "padding": "10px" }} src="/img/btc.png" />
                            <a>BTC</a>
                            <svg viewBox="0 0 1024 1024" focusable="false" data-icon="swap-right" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                              <path d="M873.1 596.2l-164-208A32 32 0 00684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8z">
                              </path>
                            </svg>
                            <img style={{ "width": "12%", "padding": "10px" }} src="/img/dollar.png" />
                            <a>USDⓢ</a>
                          </div>



                        </TableCell>
                        <TableCell align="left">{row.apr}</TableCell>
                        <TableCell align="left">{row.strike}</TableCell>
                        <TableCell align="left">{row.maturity}</TableCell>
                        <TableCell align="left">{row.tenor}</TableCell>
                        <TableCell align="left"><Button variant="contained" color="secondary">Subscribe</Button></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>



            </TabPanel>

            <TabPanel value="2">

              <div style={{ "padding": "10px", "fontSize": 20, "fontWeight": 700, }}>
                Settlement pair
              </div>

              <div id="id-symbol" className='flex' style={{ "padding": "10px" }}>
                <div class="flex">
                  <div class="flex">
                    ETH<span role="img" aria-label="swap-right" class="anticon anticon-swap-right"><svg viewBox="0 0 1024 1024" focusable="false" data-icon="swap-right" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                      <path d="M873.1 596.2l-164-208A32 32 0 00684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8z">
                      </path>
                    </svg></span>USDⓢ</div>
                  <p>&emsp;&emsp;&emsp;&emsp;</p>
                  <div class="flex ">ETH<span role="img" aria-label="swap-right" class="anticon anticon-swap-right"><svg viewBox="0 0 1024 1024" focusable="false" data-icon="swap-right" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                    <path d="M873.1 596.2l-164-208A32 32 0 00684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8z">
                    </path>
                  </svg></span>USDT</div>
                </div>
              </div>


              <div style={{
                margin: "12px 0",
                padding: "16px",
                width: "160%",
                background: "#02c8a80d",
                color: "#0f0f0f",
              }} >
                <div style={{ "fontSize": 20, "fontWeight": 700, }}>Sell High and Earn High Yield
                </div>
                <li>Upon maturity, if the market
                  price ≥ strike price, you will receive USDⓢ</li>
                <li>Upon maturity, if the market
                  price &lt; strike price, you will receive BTC</li>
              </div>



              <TableContainer style={{"overflow-x": "visible"}} >
              <Table sx={{ "minWidth": "160%", "& td, &  th": { border: 0 } }} size="small" aria-label="a dense table">

                  <TableHead>
                    <TableRow>
                      <TableCell>Settle pair</TableCell>
                      <TableCell align="left">APR</TableCell>
                      <TableCell align="left">Strike Price</TableCell>
                      <TableCell align="left">Maturity</TableCell>
                      <TableCell align="left">Tenor</TableCell>
                      <TableCell align="left"></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}

                      >
                        <TableCell style={{ width: '30%' }} component="th" scope="row" >

                          <div className="flex-container">
                            <img style={{ "width": "12%", "padding": "10px" }} src="/img/eth.png" />
                            <a>BTC</a>
                            <svg viewBox="0 0 1024 1024" focusable="false" data-icon="swap-right" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                              <path d="M873.1 596.2l-164-208A32 32 0 00684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8z">
                              </path>
                            </svg>
                            <img style={{ "width": "12%", "padding": "10px" }} src="/img/dollar.png" />
                            <a>USDⓢ</a>
                          </div>



                        </TableCell>
                        <TableCell align="left">{row.apr}</TableCell>
                        <TableCell align="left">{row.strike}</TableCell>
                        <TableCell align="left">{row.maturity}</TableCell>
                        <TableCell align="left">{row.tenor}</TableCell>
                        <TableCell align="left"><Button variant="contained" color="secondary">Subscribe</Button></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>



            </TabPanel>

            <TabPanel value="4">

              <div style={{ "padding": "10px", "fontSize": 20, "fontWeight": 700, }}>
                Settlement pair
              </div>

              <div id="id-symbol" className='flex' style={{ "padding": "10px" }}>
                <div class="flex">
                  <div class="flex">
                    BTC<span role="img" aria-label="swap-right" class="anticon anticon-swap-right"><svg viewBox="0 0 1024 1024" focusable="false" data-icon="swap-right" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                      <path d="M873.1 596.2l-164-208A32 32 0 00684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8z">
                      </path>
                    </svg></span>USDⓢ</div>
                  <p>&emsp;&emsp;&emsp;&emsp;</p>
                  <div class="flex ">BTC<span role="img" aria-label="swap-right" class="anticon anticon-swap-right"><svg viewBox="0 0 1024 1024" focusable="false" data-icon="swap-right" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                    <path d="M873.1 596.2l-164-208A32 32 0 00684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8z">
                    </path>
                  </svg></span>USDT</div>
                </div>
              </div>


              <div style={{
                margin: "12px 0",
                padding: "16px",
                width: "100%",
                background: "#02c8a80d",
                color: "#0f0f0f",

              }} id="id-coin">
                <div style={{ "fontSize": 20, "fontWeight": 700, }}>Sell High and Earn High Yield
                </div>
                <li>Upon maturity, if the market
                  price ≥ strike price, you will receive USDⓢ</li>
                <li>Upon maturity, if the market
                  price &lt; strike price, you will receive BTC</li>
              </div>



              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650, "& td, &  th": { border: 0 } }} size="small" aria-label="a dense table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Settle pair</TableCell>
                      <TableCell align="left">APR</TableCell>
                      <TableCell align="left">Strike Price</TableCell>
                      <TableCell align="left">Maturity</TableCell>
                      <TableCell align="left">Tenor</TableCell>
                      <TableCell align="left"></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}

                      >
                        <TableCell style={{ width: '30%' }} component="th" scope="row" >

                          <div className="flex-container">
                            <img style={{ "width": "12%", "padding": "10px" }} src="/img/btc.png" />
                            <a>BTC</a>
                            <svg viewBox="0 0 1024 1024" focusable="false" data-icon="swap-right" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                              <path d="M873.1 596.2l-164-208A32 32 0 00684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8z">
                              </path>
                            </svg>
                            <img style={{ "width": "12%", "padding": "10px" }} src="/img/dollar.png" />
                            <a>USDⓢ</a>
                          </div>



                        </TableCell>
                        <TableCell align="left">{row.apr}</TableCell>
                        <TableCell align="left">{row.strike}</TableCell>
                        <TableCell align="left">{row.maturity}</TableCell>
                        <TableCell align="left">{row.tenor}</TableCell>
                        <TableCell align="left"><Button variant="contained" color="secondary">Subscribe</Button></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>



            </TabPanel>

          </TabContext>

        </Grid>


      </Grid>
    </div>
  );

};
export default Invest;